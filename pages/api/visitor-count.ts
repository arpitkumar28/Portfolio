import { createHash } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import Redis from 'ioredis';

const RATE_LIMIT = 20;
const RATE_WINDOW_SECONDS = 60 * 60;
const RATE_WINDOW_MS = RATE_WINDOW_SECONDS * 1000;
const localRateLimits = new Map<string, { count: number; resetAt: number }>();
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

  return createHash('sha256').update(value).digest('hex');
}

async function checkRateLimit(req: NextApiRequest, res: NextApiResponse): Promise<boolean> {
  const redisUrl = process.env.REDIS_URL;
  const clientKey = getClientAddress(req);

  if (redisUrl) {
    try {
      const client = getRedisClient(redisUrl);
      const count = Number(await client.eval(
        "local count = redis.call('INCR', KEYS[1]); if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]); end; return count",
        1,
        `visitor:rate:${clientKey}`,
        RATE_WINDOW_SECONDS,
      ));
      if (count > RATE_LIMIT) {
        res.setHeader('Retry-After', RATE_WINDOW_SECONDS);
        res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
        return false;
      }
      return true;
    } catch {
      res.status(503).json({ error: 'Visitor count service is temporarily unavailable.' });
      return false;
    }
  }

  // Best-effort protection for an external counter. This limit is per server
  // process; configure REDIS_URL for shared, persistent rate limiting.
  const now = Date.now();
  const current = localRateLimits.get(clientKey);
  if (!current || current.resetAt <= now) {
    localRateLimits.set(clientKey, { count: 1, resetAt: now + RATE_WINDOW_MS });
  } else if (current.count >= RATE_LIMIT) {
    res.setHeader('Retry-After', Math.ceil((current.resetAt - now) / 1000));
    res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
    return false;
  } else {
    current.count += 1;
  }

  if (localRateLimits.size > 5000) {
    for (const [key, limit] of localRateLimits) {
      if (limit.resetAt <= now) localRateLimits.delete(key);
    }
  }
  return true;
}

async function readCount(): Promise<number> {
  const redisUrl = process.env.REDIS_URL;
  if (redisUrl) {
    const value = await getRedisClient(redisUrl).get('visitor:count');
    return value === null ? 0 : Number(value);
  }

  const counterUrl = process.env.VISITOR_COUNTER_URL;
  if (counterUrl) {
    const response = await fetch(counterUrl, { method: 'GET' });
    const data = await response.json().catch(() => null);
    if (response.ok && data && Number.isSafeInteger(data.count) && data.count >= 0) return data.count;
  }
  throw new Error('Visitor counter is not configured or unavailable.');
}

async function incrementCount(): Promise<number> {
  const redisUrl = process.env.REDIS_URL;
  if (redisUrl) return Number(await getRedisClient(redisUrl).incr('visitor:count'));

  const counterUrl = process.env.VISITOR_COUNTER_URL;
  if (counterUrl) {
    const response = await fetch(counterUrl, { method: 'POST' });
    const data = await response.json().catch(() => null);
    if (response.ok && data && Number.isSafeInteger(data.count) && data.count >= 0) return data.count;
  }
  throw new Error('Visitor counter is not configured or unavailable.');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (req.method === 'POST') {
    const body = req.body;
    const hasUnexpectedBody = body !== undefined && body !== null && body !== ''
      && !(typeof body === 'object' && !Array.isArray(body) && Object.keys(body).length === 0);
    const contentLength = Number(req.headers['content-length'] || 0);
    if (hasUnexpectedBody || contentLength > 0) {
      return res.status(400).json({ error: 'This endpoint does not accept a request body.' });
    }
    if (!(await checkRateLimit(req, res))) return;
  }

  try {
    const count = req.method === 'GET' ? await readCount() : await incrementCount();
    if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid visitor count response.');
    return res.status(200).json({ count });
  } catch {
    return res.status(503).json({ error: 'Visitor count service is unavailable.' });
  }
}
