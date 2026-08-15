'use client';

import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter: React.FC = () => {
  const [visits, setVisits] = useState<string>('—');

  useEffect(() => {
    let active = true;
    fetch('/api/visitor-count')
      .then((response) => response.json())
      .then((data: { count?: number }) => {
        if (active && typeof data.count === 'number') setVisits(data.count.toLocaleString());
      })
      .catch(() => undefined);
    return () => { active = false; };
  }, []);

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background-elevated px-4 py-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary"><Eye className="h-4 w-4" /></span>
      <span><span className="block font-mono text-[10px] font-black uppercase tracking-[0.16em] text-text-muted">Portfolio visits</span><span className="block text-sm font-black text-text-primary">{visits}</span></span>
    </div>
  );
};
