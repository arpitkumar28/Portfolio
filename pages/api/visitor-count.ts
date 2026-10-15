import { createHash } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import Redis from 'ioredis';

const RATE_LIMIT = 20;
const RATE_WINDOW_SECONDS = 60 * 60;
const SESSION_TTL_SECONDS = 60 * 60 * 24;
const SESSION_ID_PATTERN = /^[a-f0-9-]{36}$/i;
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

async function checkRedisRateLimit(client: Redis, req: NextApiRequest, res: NextApiResponse): Promise<boolean> {
  const key = `visitor:rate:${getClientAddress(req)}`;
  const result = await client.eval(
    "local count = redis.call('INCR', KEYS[1]); if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]); end; local ttl = redis.call('TTL', KEYS[1]); return {count, ttl}",
    1,
    key,
    RATE_WINDOW_SECONDS,
  ) as [number | string, number | string];
  const count = Number(result[0]);
  if (count > RATE_LIMIT) {
    res.setHeader('Retry-After', Math.max(1, Number(result[1])));
    res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
    return false;
  }
  return true;
}

function parseCount(value: unknown): number {
  const count = typeof value === 'number' ? value : Number(value);
  if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid visitor count.');
  return count;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (req.method === 'GET') {
    try {
      const redisUrl = process.env.REDIS_URL;
      if (redisUrl) {
        const value = await getRedisClient(redisUrl).get('visitor:count');
        if (value === null) return res.status(503).json({ error: 'Visitor count is not initialized.' });
        return res.status(200).json({ count: parseCount(value) });
      }
      return res.status(503).json({ error: 'Visitor count service is unavailable.' });
    } catch {
      return res.status(503).json({ error: 'Visitor count service is unavailable.' });
    }
  }

  const body = req.body;
  const contentLength = Number(req.headers['content-length'] || 0);
  if (!body || typeof body !== 'object' || Array.isArray(body)
    || Object.keys(body).length !== 1 || typeof body.sessionId !== 'string'
    || !SESSION_ID_PATTERN.test(body.sessionId) || contentLength > 256) {
    return res.status(400).json({ error: 'A valid sessionId is required.' });
  }

  try {
    const redisUrl = process.env.REDIS_URL;
    if (redisUrl) {
      const client = getRedisClient(redisUrl);
      if (!(await checkRedisRateLimit(client, req, res))) return;

      // The session claim and total increment run atomically. Repeated requests from the
      // same browser tab session return the existing total without counting twice.
      const result = await client.eval(
        "local count = redis.call('GET', KEYS[2]); if not count then return {-1, 0}; end; local claimed = redis.call('SET', KEYS[1], '1', 'NX', 'EX', ARGV[1]); if claimed then return {redis.call('INCR', KEYS[2]), 1}; end; return {count, 0}",
        2,
        `visitor:session:${body.sessionId}`,
        'visitor:count',
        SESSION_TTL_SECONDS,
      );
      const [rawCount, incremented] = result as [number | string, number | string];
      const count = Number(rawCount);
      if (count < 0) return res.status(503).json({ error: 'Visitor count is not initialized.' });
      return res.status(200).json({ count, deduplicated: Number(incremented) === 0 });
    }

    return res.status(503).json({ error: 'Visitor count service is unavailable.' });
  } catch {
    return res.status(503).json({ error: 'Visitor count service is unavailable.' });
  }
}
