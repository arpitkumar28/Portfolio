'use client';

import React, { useEffect, useState } from 'react';

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
      // Theme switching remains usable when browser storage is unavailable.
    }
  };

  const dayMode = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle weather-toggle fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 ${dayMode ? 'is-day' : 'is-night'}`}
      aria-label={ready ? `Switch to ${dayMode ? 'night' : 'day'} theme` : 'Toggle day and night theme'}
      title={ready ? `Switch to ${dayMode ? 'night' : 'day'} theme` : 'Toggle day and night theme'}
      aria-pressed={dayMode}
      aria-busy={!ready}
    >
      <span className="weather-scene" aria-hidden="true">
        <span className="weather-sun-rays"><span className="weather-sun" /></span>
        <span className="weather-cloud weather-cloud-one" />
        <span className="weather-cloud weather-cloud-two" />
        <span className="weather-cloud weather-cloud-three" />
        <span className="weather-nebula weather-nebula-one" />
        <span className="weather-nebula weather-nebula-two" />
        <span className="weather-moon"><i className="weather-crater crater-one" /><i className="weather-crater crater-two" /><i className="weather-crater crater-three" /><i className="weather-crater crater-four" /></span>
        <span className="weather-stars"><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
        <span className="weather-shooting-star" />
        <span className="weather-horizon" />
      </span>
    </button>
  );
};
