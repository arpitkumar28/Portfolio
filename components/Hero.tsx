'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Server, Activity, Rocket } from 'lucide-react';
import { Button } from './ui/Button';

const metrics = [
  { value: 'SEC', label: 'Security', detail: 'Hands-on labs and resilient systems', icon: ShieldCheck },
  { value: 'WEB', label: 'Systems', detail: 'Full-stack builds and backend APIs', icon: Server },
  { value: 'APP', label: 'Mobile', detail: 'Flutter products and user flows', icon: Activity },
  { value: 'AI', label: 'AI', detail: 'Intelligent workflows and decision systems', icon: Rocket },
];

const techStack = ['Cybersecurity', 'Web', 'Mobile', 'AI', 'Backend', 'Real-Time'];

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] items-center overflow-hidden pb-16 pt-28 lg:min-h-[calc(100vh-5rem)] lg:pb-20"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 site-grid" />
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -right-24 top-10 h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-[120px]" />
      <div aria-hidden="true" className="shadow-figure pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] opacity-70 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30 lg:to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-xs font-black uppercase tracking-[0.16em] text-primary">
                Cybersecurity × Software Engineering
              </div>
              <h1
                className="max-w-3xl font-display text-5xl font-black tracking-[-0.06em] text-text-primary sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[0.98]"
                id="hero-heading"
              >
                I build.<br />I break.<br /><span className="text-primary">I secure.</span>
              </h1>

              <p className="max-w-2xl text-xl font-bold leading-snug text-text-primary md:text-2xl">
                Cybersecurity-focused software engineer building web and mobile applications, AI-powered systems, and real-time solutions while developing practical security skills through hands-on labs and CTFs.
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm font-semibold text-text-muted">
                {techStack.map((tech, index) => (
                  <React.Fragment key={tech}>
                    <span>{tech}</span>
                    {index < techStack.length - 1 && <span>•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
              <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-text-secondary">
                  What I work across
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {metrics.map(({ value, label, detail, icon: Icon }) => (
                <div key={label} className="rounded-xl border border-primary/20 bg-background-card/85 p-5 shadow-sm shadow-primary/5">
                  <Icon className="mb-4 h-4 w-4 text-primary" />
                  <div className="text-3xl font-black text-text-primary">{value}</div>
                  <div className="mt-3 text-sm font-black text-primary">{label}</div>
                  <div className="mt-1 text-xs font-bold leading-snug text-text-muted">{detail}</div>
                  <span className="mt-4 block h-1 w-8 rounded-full bg-primary" />
                </div>
              ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                href="#projects"
                className="px-7 py-3.5 text-sm font-bold"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Explore My Work
              </Button>
              <Button
                variant="outline"
                href="#problem-solving-security"
                className="px-7 py-3.5 text-sm font-bold"
              >
                Security Journey
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-text-muted">
              <a href="https://www.linkedin.com/in/arpitkumar0211" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
              <span>•</span>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Resume</a>
              <span>•</span>
              <a href="#projects" className="hover:text-primary">All Projects</a>
            </div>

            <div className="flex max-w-xl items-center gap-4 rounded-2xl border border-border bg-background-card/70 p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-text-primary">Currently building GreenFlow AI</p>
                <p className="mt-1 text-xs font-medium text-text-muted">Turning real-time data into safer, smarter cities.</p>
              </div>
              <span className="ml-auto hidden rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-500 sm:block">Now</span>
            </div>
          </div>

          <div aria-hidden="true" className="hidden min-h-[540px] lg:block" />
        </div>
      </div>
    </section>
  );
};
