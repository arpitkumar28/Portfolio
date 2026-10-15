'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  root.style.colorScheme = theme;
}

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-theme');
    const initial: Theme = saved === 'light' || saved === 'dark'
      ? saved
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(initial);
    applyTheme(initial);
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem('portfolio-theme', next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle fixed bottom-4 right-4 z-50 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background-card/95 px-4 text-text-primary shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:bottom-6 sm:right-6"
      aria-label={ready ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme` : 'Toggle colour theme'}
      title={ready ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme` : 'Toggle colour theme'}
      aria-pressed={theme === 'light'}
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
      <span className="text-xs font-semibold">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
};
