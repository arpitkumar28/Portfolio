import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'visitor-count.json');

async function readLocalCount(): Promise<number> {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return typeof parsed.count === 'number' ? parsed.count : 0;
  } catch {
    return 0;
  }
}

async function writeLocalCount(count: number) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify({ count }), 'utf8');
}

// Redis support (production-ready)
let redisClient: any = undefined;
async function getRedisClient(redisUrl: string) {
  if (redisClient) return redisClient;
  // Lazy import so local dev without redis doesn't require the package at runtime
  const Redis = (await import('ioredis')).default;
  redisClient = new Redis(redisUrl);
  return redisClient;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const REDIS_URL = process.env.REDIS_URL;
  const VISITOR_COUNTER_URL = process.env.VISITOR_COUNTER_URL;

  // If Redis is configured, use it (scalable, recommended for production)
  if (REDIS_URL) {
    try {
      const client = await getRedisClient(REDIS_URL);
      // Use a single key for the site visitor count
      const next = await client.incr('visitor:count');
      return res.status(200).json({ count: Number(next) });
    } catch (err) {
      // Fall through to other strategies
      console.error('Redis error:', err);
    }
  }

  // If an upstream visitor counter URL is provided (e.g., CounterAPI v2), try it next
  if (VISITOR_COUNTER_URL) {
    try {
      const response = await fetch(VISITOR_COUNTER_URL, { method: 'POST' });
      const data = await response.json().catch(() => null);
      if (response.ok && data && typeof data.count === 'number') {
        return res.status(200).json({ count: data.count });
      }
    } catch (e) {
      // ignore and continue to local fallback
    }
  }

  // Last resort: local file-backed counter (useful for development or when no external store)
  try {
    const current = await readLocalCount();
    const next = current + 1;
    await writeLocalCount(next);
    return res.status(200).json({ count: next });
  } catch (err) {
    return res.status(500).json({ error: 'Local counter error' });
  }
}


