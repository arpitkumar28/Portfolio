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
      className={`group fixed bottom-6 right-5 z-50 h-14 w-[9.5rem] overflow-hidden rounded-full border shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 sm:bottom-8 sm:right-8 ${
        theme === 'dark'
          ? 'border-slate-500/50 bg-[#111827] shadow-slate-950/50'
          : 'border-sky-700/20 bg-sky-200 shadow-sky-900/20'
      }`}
      aria-label={`Switch to ${theme === 'dark' ? 'day' : 'night'} mode`}
      title={`Switch to ${theme === 'dark' ? 'day' : 'night'} mode`}
    >
      <span className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
        <span className="absolute left-3 top-4 h-1 w-1 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]" />
        <span className="absolute left-8 top-7 h-1 w-1 rounded-full bg-white" />
        <span className="absolute left-14 top-3 h-1 w-1 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]" />
        <span className="absolute left-20 top-9 h-1 w-1 rounded-full bg-white" />
        <span className="absolute left-24 top-4 h-1 w-1 rounded-full bg-white" />
      </span>
      <span className={`absolute bottom-[-0.65rem] left-[-0.5rem] h-8 w-28 rounded-[50%] bg-white/90 shadow-[0_-4px_10px_rgba(255,255,255,0.25)] transition-opacity duration-500 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}>
        <span className="absolute -right-2 -top-4 h-10 w-10 rounded-full bg-white/90" />
        <span className="absolute right-7 -top-5 h-12 w-12 rounded-full bg-white/90" />
      </span>
      <span className={`absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all duration-500 ease-out ${
        theme === 'dark'
          ? 'left-1 rotate-[-12deg] bg-slate-200 text-slate-500'
          : 'left-[5.75rem] rotate-[12deg] bg-yellow-300 text-yellow-950'
      }`}>
        <span className="absolute inset-0 rounded-full bg-white/25" />
        {theme === 'dark' ? <Moon className="relative h-6 w-6" /> : <Sun className="relative h-6 w-6" />}
      </span>
    </button>
  );
};
