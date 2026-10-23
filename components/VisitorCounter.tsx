'use client';

import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter: React.FC = () => {
  const [visits, setVisits] = useState<string>('—');

  useEffect(() => {
    let active = true;
    const VISITOR_KEY = 'portfolio-anonymous-visitor-id';

    const loadCount = async () => {
      try {
        // Keep one anonymous ID in this browser so reloads and new tabs do not count
        // as new visitors. The server expires its matching claim after 30 days.
        let visitorId = localStorage.getItem(VISITOR_KEY);
        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem(VISITOR_KEY, visitorId);
        }

        const response = await fetch('/api/visitor-count', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitorId }),
        });

        const data: { count?: number } = await response.json();

        if (active && response.ok && typeof data.count === 'number' && Number.isSafeInteger(data.count) && data.count >= 0) {
          setVisits(data.count.toLocaleString());
        } else if (active) {
          setVisits(response.status === 503 ? 'Unavailable' : '—');
        }
      } catch {
        if (active) setVisits('—');
      }
    };

    loadCount();
    return () => { active = false; };
  }, []);

  return (
    <div className="inline-flex min-w-[190px] items-center gap-3 rounded-full border border-border bg-background-elevated px-4 py-2.5" aria-live="polite" aria-label={`Estimated unique visitors: ${visits}`}>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary"><Eye className="h-4 w-4" /></span>
      <span><span className="block font-mono text-[10px] font-black uppercase tracking-[0.16em] text-text-muted">Estimated visitors</span><span className="block min-h-5 text-sm font-black text-text-primary">{visits}</span><span className="block text-[9px] text-text-subtle">One count per browser every 30 days</span></span>
    </div>
  );
};
