'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Mail, Code2, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';
import { AmbientTechBackdrop } from './ui/AmbientTechBackdrop';

export const Hero: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  const handleSceneMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty('--pointer-x', `${x * 100}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${y * 100}%`);
    event.currentTarget.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${(x - 0.5) * 7}deg`);
  };

  const resetScene = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
    event.currentTarget.style.setProperty('--pointer-x', '50%');
    event.currentTarget.style.setProperty('--pointer-y', '50%');
  };

  return (
    <section
      id="home"
      className="ambient-section relative flex min-h-[720px] items-center overflow-hidden pb-16 pt-28 lg:min-h-[calc(100vh-5rem)] lg:pb-20"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <AmbientTechBackdrop variant="hero" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 site-grid" />
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute right-[8%] top-[8%] h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[115px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/60" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div className="relative z-10 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                <span className="h-px w-8 bg-primary" /> Cybersecurity <span className="text-primary">/</span> Software Engineering
              </div>
              <h1
                className="hero-copy max-w-3xl font-display text-5xl font-semibold tracking-[-0.055em] text-text-primary sm:text-6xl md:text-7xl lg:text-[5.6rem] lg:leading-[0.98]"
                id="hero-heading"
              >
                <span className="hero-line hero-line-one">I build.</span><span className="hero-line hero-line-two">I break.</span><span className="hero-line hero-line-three">I secure.</span>
              </h1>

              <p className="hero-intro max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
                I build thoughtful software and bring a security-first lens to how it works, scales, and holds up under pressure.
              </p>
            </div>

            <div className="hero-actions flex flex-wrap gap-3">
              <Button
                href="#projects"
                className="px-6 py-3 text-sm font-semibold"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Explore Projects
              </Button>
              <Button
                variant="outline"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-semibold"
              >
                View Resume <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="hero-social flex items-center gap-5 pt-1 text-sm text-text-muted">
              <a href="https://github.com/arpitkumar28" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><GitHubIcon className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" /></a>
              <a href="https://www.linkedin.com/in/arpitkumar0211" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><LinkedInIcon className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" /></a>
            </div>

            <div className="hero-status inline-flex items-center gap-3 border-t border-border pt-5 text-sm">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-primary/45" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
              <span className="text-text-muted">Currently building <strong className="font-medium text-text-primary">GreenFlow AI</strong> <span className="text-text-subtle">· interface prototype</span></span>
            </div>
          </div>

          <div ref={sceneRef} onMouseMove={handleSceneMove} onMouseLeave={resetScene} className="hero-portrait hero-3d-scene group relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[460px] lg:h-[600px]" aria-label="Portrait of Arpit Kumar">
            <div aria-hidden="true" className="hero-orbit hero-orbit-one" />
            <div aria-hidden="true" className="hero-orbit hero-orbit-two" />
            <div aria-hidden="true" className="hero-pointer-glow" />
            <div aria-hidden="true" className="hero-float-label hero-float-label-top"><span className="hero-label-dot" /> SECURITY-FIRST <span>01 / 04</span></div>
            <div aria-hidden="true" className="hero-float-label hero-float-label-bottom">BUILD <span>↗</span> BREAK <span>↗</span> SECURE</div>
            <div aria-hidden="true" className="hero-portrait-light absolute inset-x-8 top-12 bottom-3 rounded-[48%] bg-primary/10 blur-[70px]" />
            <div aria-hidden="true" className="hero-portrait-grid absolute inset-y-8 right-0 w-[82%] rounded-t-[48%] border border-primary/15" />
            <div className="hero-portrait-image absolute inset-y-0 right-0 w-[92%] overflow-hidden rounded-t-[48%] border-x border-t border-primary/20">
              <Image src="/assets/images/arpit-profile.webp" alt="Portrait of Arpit Kumar" fill priority sizes="(max-width: 1024px) 90vw, 48vw" className="object-cover object-[center_30%] grayscale contrast-110 transition-[filter,transform] duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.025] motion-reduce:transition-none" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-primary/5" />
            </div>
            <div className="hero-caption absolute bottom-8 left-0 z-10 max-w-[220px] border-l border-primary/50 pl-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Security-minded</span>
              <span className="mt-1 block text-sm text-text-primary">Software engineering</span>
            </div>
            <nav aria-label="Profile links" className="hero-profile-links absolute bottom-5 right-3 z-20 flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/85 p-2 shadow-xl shadow-black/20 backdrop-blur-xl sm:bottom-7 sm:right-4 sm:gap-2 sm:p-2.5">
              <a href="https://github.com/arpitkumar28" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub" className="hero-profile-link"><GitHubIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /></a>
              <a href="https://www.linkedin.com/in/arpitkumar0211" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn" className="hero-profile-link"><LinkedInIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /></a>
              <a href="https://leetcode.com/u/arpit_patel28/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile" title="LeetCode" className="hero-profile-link"><Code2 className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /></a>
              <a href="https://tryhackme.com/p/ArpitKumar28" target="_blank" rel="noopener noreferrer" aria-label="TryHackMe profile" title="TryHackMe" className="hero-profile-link"><ShieldCheck className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /></a>
              <a href="mailto:arpitkumar0211@gmail.com" aria-label="Email Arpit" title="Email" className="hero-profile-link"><Mail className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /></a>
            </nav>
            <div aria-hidden="true" className="hero-scanline" />
            <div aria-hidden="true" className="hero-corner-mark">AK<span> / PORTFOLIO</span></div>
            <div aria-hidden="true" className="absolute right-2 top-20 h-1.5 w-1.5 rounded-full bg-primary/80 shadow-[0_0_16px_rgba(232,184,91,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
};
