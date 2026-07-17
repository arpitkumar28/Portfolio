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
      className="fixed bottom-8 right-8 z-50 flex h-16 w-32 items-center rounded-full border border-white/15 bg-slate-950/85 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all hover:border-primary/70"
      aria-label={`Switch to ${theme === 'dark' ? 'day' : 'night'} mode`}
      title={`Switch to ${theme === 'dark' ? 'day' : 'night'} mode`}
    >
      <span className={`relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
        theme === 'dark'
          ? 'translate-x-0 bg-slate-800 text-blue-100'
          : 'translate-x-16 bg-yellow-300 text-yellow-950'
      }`}>
        <span className="absolute inset-0 rounded-full bg-white/10" />
        {theme === 'dark' ? <Moon className="relative h-6 w-6" /> : <Sun className="relative h-6 w-6" />}
      </span>
      <span className={`absolute text-xs font-black uppercase tracking-[0.18em] transition-opacity ${
        theme === 'dark' ? 'right-5 text-blue-100 opacity-100' : 'left-5 text-yellow-100 opacity-100'
      }`}>
        {theme === 'dark' ? 'Night' : 'Day'}
      </span>
    </button>
  );
};
