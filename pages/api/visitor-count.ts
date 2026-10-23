import type { NextApiRequest, NextApiResponse } from 'next';

const VISITOR_ID_PATTERN = /^[a-f0-9-]{36}$/i;
const COUNTER_API_URL = 'https://counterapi.com/api/arpitkumar28-portfolio/view/unique-visitors';

type CounterApiResponse = { value?: number };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (req.method === 'POST') {
    const body = req.body;
    const contentLength = Number(req.headers['content-length'] || 0);
    if (!body || typeof body !== 'object' || Array.isArray(body)
      || Object.keys(body).length !== 1 || typeof body.visitorId !== 'string'
      || !VISITOR_ID_PATTERN.test(body.visitorId) || contentLength > 256) {
      return res.status(400).json({ error: 'A valid visitorId is required.' });
    }
  }

  try {
    const visitorId = req.method === 'POST' ? req.body.visitorId as string : undefined;
    const url = new URL(COUNTER_API_URL);
    url.searchParams.set('unique', 'true');
    url.searchParams.set('timeline', '30d');
    url.searchParams.set('readOnly', req.method === 'GET' ? 'true' : 'false');
    if (visitorId) url.searchParams.set('userId', visitorId);

    const response = await fetch(url.toString(), { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Counter provider request failed.');
    const data = await response.json() as CounterApiResponse;
    if (typeof data.value !== 'number' || !Number.isSafeInteger(data.value) || data.value < 0) {
      throw new Error('Counter provider returned an invalid count.');
    }

    return res.status(200).json({ count: data.value });
  } catch {
    return res.status(503).json({ error: 'Visitor count service is unavailable.' });
  }
}
