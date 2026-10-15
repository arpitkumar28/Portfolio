'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    const preferredTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(preferredTheme);
    document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background-card/95 text-text-secondary shadow-lg backdrop-blur transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:bottom-6 sm:right-6"
      aria-label={`Switch to ${theme === 'dark' ? 'day' : 'night'} mode`}
      title={`Switch to ${theme === 'dark' ? 'day' : 'night'} mode`}
    >
      {theme === 'dark' ? <Moon className="h-5 w-5" aria-hidden="true" /> : <Sun className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
};
