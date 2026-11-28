'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Theme = 'dark' | 'light';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  root.style.colorScheme = theme;
}

function readSavedTheme(): Theme | null {
  try {
    const saved = window.localStorage.getItem('portfolio-theme');
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
}

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = readSavedTheme();
    const initial = saved ?? (document.documentElement.classList.contains('light') ? 'light' : 'dark');
    setTheme(initial);
    applyTheme(initial);
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    try {
      window.localStorage.setItem('portfolio-theme', next);
    } catch {
      // Keep theme switching usable when browser storage is unavailable.
    }
  };

  const dayMode = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle cyber-theme-toggle fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 ${dayMode ? 'is-day' : 'is-night'}`}
      aria-label={ready ? `Switch to ${dayMode ? 'night operations' : 'daylight'} theme` : 'Toggle day and night theme'}
      title={ready ? `Switch to ${dayMode ? 'night operations' : 'daylight'} theme` : 'Toggle day and night theme'}
      aria-pressed={dayMode}
      aria-busy={!ready}
    >
      <span className="cyber-scene" aria-hidden="true">
        <span className="cyber-scene-glow" />
        <span className="cyber-sun-wrap"><Image src="/images/theme-toggle/sun.png" alt="" width={64} height={62} sizes="48px" className="cyber-sun" /></span>
        <span className="cyber-cloud cyber-cloud-one" />
        <span className="cyber-cloud cyber-cloud-two" />
        <span className="cyber-network-line cyber-network-line-one" />
        <span className="cyber-network-line cyber-network-line-two" />
        <span className="cyber-server-rack" aria-hidden="true"><i /><i /><i /><i /><i /><i /></span>
        {dayMode && <Image src="/images/theme-toggle/shield.png" alt="" width={56} height={56} sizes="42px" className="cyber-shield" />}
        <span className="cyber-horizon" />
        <span className="cyber-stars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
        <span className="cyber-circuit cyber-circuit-one" />
        <span className="cyber-circuit cyber-circuit-two" />
        <Image src="/images/theme-toggle/hacker.png" alt="" width={160} height={107} sizes="80px" className="cyber-hacker" />
        <Image src="/images/theme-toggle/moon.png" alt="" width={64} height={62} sizes="52px" className="cyber-moon" />
      </span>
    </button>
  );
};
