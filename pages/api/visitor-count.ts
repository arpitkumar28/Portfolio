import { createHash } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import Redis from 'ioredis';

const RATE_LIMIT = 20;
const RATE_WINDOW_SECONDS = 60 * 60;
const VISITOR_TTL_SECONDS = 30 * 24 * 60 * 60;
const VISITOR_ID_PATTERN = /^[a-f0-9-]{36}$/i;
let redisClient: Redis | undefined;

function getRedisClient(redisUrl: string): Redis {
  if (!redisClient) {
    redisClient = new Redis(redisUrl, {
      connectTimeout: 4000,
      enableOfflineQueue: false,
      maxRetriesPerRequest: 1,
      retryStrategy: () => null,
    });
  }
  return redisClient;
}

function hasRedisRestCredentials(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function redisRestCommand<T>(command: Array<string | number>): Promise<T> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) throw new Error('Redis REST credentials are not configured.');

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  });
  const data = await response.json() as { result?: T; error?: string };
  if (!response.ok || data.error) throw new Error('Redis REST request failed.');
  return data.result as T;
}

function getClientAddress(req: NextApiRequest): string {
  const netlifyIp = req.headers['x-nf-client-connection-ip'];
  const realIp = req.headers['x-real-ip'];
  const forwardedFor = req.headers['x-forwarded-for'];
  const value = (Array.isArray(netlifyIp) ? netlifyIp[0] : netlifyIp)
    || (Array.isArray(realIp) ? realIp[0] : realIp)
    || (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)?.split(',')[0]?.trim()
    || req.socket.remoteAddress
    || 'unknown';

  // Keep only a one-way digest as the shared rate-limit key; raw addresses are never stored.
  return createHash('sha256').update(value).digest('hex');
}

function parseCount(value: unknown): number {
  const count = typeof value === 'number' ? value : Number(value);
  if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid visitor count.');
  return count;
}

const recordVisitorScript = "local count = redis.call('GET', KEYS[2]); if redis.call('EXISTS', KEYS[1]) == 1 then if not count then return {-1, 0, 0}; end; return {count, 0, 0}; end; local rateCount = redis.call('INCR', KEYS[3]); if rateCount == 1 then redis.call('EXPIRE', KEYS[3], ARGV[1]); end; local ttl = redis.call('TTL', KEYS[3]); if rateCount > tonumber(ARGV[2]) then return {-2, 0, ttl}; end; redis.call('SET', KEYS[2], '0', 'NX'); redis.call('SET', KEYS[1], '1', 'EX', ARGV[3]); return {redis.call('INCR', KEYS[2]), 1, 0}";

async function getStoredCount(): Promise<string | null> {
  if (hasRedisRestCredentials()) return redisRestCommand<string | null>(['GET', 'portfolio:visitor:count']);
  const redisUrl = process.env.REDIS_URL;
  if (redisUrl) return getRedisClient(redisUrl).get('portfolio:visitor:count');
  throw new Error('Redis credentials are not configured.');
}

async function recordVisitor(visitorId: string, clientAddressHash: string): Promise<Array<number | string>> {
  const keys = [
    `portfolio:visitor:id:${visitorId}`,
    'portfolio:visitor:count',
    `portfolio:visitor:rate:${clientAddressHash}`,
  ];
  const args = [RATE_WINDOW_SECONDS, RATE_LIMIT, VISITOR_TTL_SECONDS];

  if (hasRedisRestCredentials()) {
    return redisRestCommand<Array<number | string>>(['EVAL', recordVisitorScript, '3', ...keys, ...args]);
  }

  const redisUrl = process.env.REDIS_URL;
  if (redisUrl) {
    return getRedisClient(redisUrl).eval(recordVisitorScript, 3, ...keys, ...args) as Promise<Array<number | string>>;
  }
  throw new Error('Redis credentials are not configured.');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (req.method === 'GET') {
    try {
      const value = await getStoredCount();
      return res.status(200).json({ count: value === null ? 0 : parseCount(value) });
    } catch {
      return res.status(503).json({ error: 'Visitor count service is unavailable.' });
    }
  }

  const body = req.body;
  const contentLength = Number(req.headers['content-length'] || 0);
  if (!body || typeof body !== 'object' || Array.isArray(body)
    || Object.keys(body).length !== 1 || typeof body.visitorId !== 'string'
    || !VISITOR_ID_PATTERN.test(body.visitorId) || contentLength > 256) {
    return res.status(400).json({ error: 'A valid visitorId is required.' });
  }

  try {
    // Count each anonymous browser once per 30 days. Initialize the counter on the
    // first request, and apply rate limits only to newly seen visitors.
    const result = await recordVisitor(body.visitorId, getClientAddress(req));
    const [rawCount, incremented, retryAfter] = result;
    const count = Number(rawCount);
    if (count === -2) {
      res.setHeader('Retry-After', Math.max(1, Number(retryAfter)));
      return res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
    }
    if (count < 0) return res.status(503).json({ error: 'Visitor counter is unavailable.' });
    return res.status(200).json({ count, deduplicated: Number(incremented) === 0 });
  } catch {
    return res.status(503).json({ error: 'Visitor counter is unavailable.' });
  }
}
