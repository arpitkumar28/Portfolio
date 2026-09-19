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
  const Redis = (await import('ioredis')).default;
  redisClient = new Redis(redisUrl);
  return redisClient;
}

async function getCurrentCountFromRedis(client: any): Promise<number> {
  const value = await client.get('visitor:count');
  return value ? Number(value) : 0;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const REDIS_URL = process.env.REDIS_URL;
  const VISITOR_COUNTER_URL = process.env.VISITOR_COUNTER_URL;

  if (req.method === 'GET') {
    if (REDIS_URL) {
      try {
        const client = await getRedisClient(REDIS_URL);
        return res.status(200).json({ count: await getCurrentCountFromRedis(client) });
      } catch (err) {
        console.error('Redis read error:', err);
      }
    }

    if (VISITOR_COUNTER_URL) {
      try {
        const response = await fetch(VISITOR_COUNTER_URL, { method: 'GET' });
        const data = await response.json().catch(() => null);
        if (response.ok && data && typeof data.count === 'number') {
          return res.status(200).json({ count: data.count });
        }
      } catch {
        // ignore and continue to local fallback
      }
    }

    try {
      return res.status(200).json({ count: await readLocalCount() });
    } catch {
      return res.status(500).json({ error: 'Local counter read error' });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (REDIS_URL) {
    try {
      const client = await getRedisClient(REDIS_URL);
      const next = await client.incr('visitor:count');
      return res.status(200).json({ count: Number(next) });
    } catch (err) {
      console.error('Redis write error:', err);
    }
  }

  if (VISITOR_COUNTER_URL) {
    try {
      const response = await fetch(VISITOR_COUNTER_URL, { method: 'POST' });
      const data = await response.json().catch(() => null);
      if (response.ok && data && typeof data.count === 'number') {
        return res.status(200).json({ count: data.count });
      }
    } catch {
      // ignore and continue to local fallback
    }
  }

  try {
    const current = await readLocalCount();
    const next = current + 1;
    await writeLocalCount(next);
    return res.status(200).json({ count: next });
  } catch {
    return res.status(500).json({ error: 'Local counter error' });
  }
}


