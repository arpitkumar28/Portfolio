'use client';

import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter: React.FC = () => {
  const [visits, setVisits] = useState<string>('—');

  useEffect(() => {
    let active = true;
    const SESSION_KEY = 'portfolio-visit-session-id';

    const loadCount = async () => {
      try {
        // sessionStorage is scoped to this browser tab and survives refreshes. Redis
        // independently deduplicates the ID so Strict Mode or retries do not double count.
        let sessionId = sessionStorage.getItem(SESSION_KEY);
        if (!sessionId) {
          sessionId = crypto.randomUUID();
          sessionStorage.setItem(SESSION_KEY, sessionId);
        }

        const response = await fetch('/api/visitor-count', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        });

        const data: { count?: number } = await response.json();

        if (active && response.ok && typeof data.count === 'number' && Number.isSafeInteger(data.count) && data.count >= 0) {
          setVisits(data.count.toLocaleString());
        }
      } catch {
        if (active) setVisits('—');
      }
    };

    loadCount();
    return () => { active = false; };
  }, []);

  return (
    <div className="inline-flex min-w-[176px] items-center gap-3 rounded-full border border-border bg-background-elevated px-4 py-2.5" aria-live="polite" aria-label={`Portfolio page views: ${visits}`}>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary"><Eye className="h-4 w-4" /></span>
      <span><span className="block font-mono text-[10px] font-black uppercase tracking-[0.16em] text-text-muted">Portfolio page views</span><span className="block min-h-5 text-sm font-black text-text-primary">{visits}</span></span>
    </div>
  );
};
