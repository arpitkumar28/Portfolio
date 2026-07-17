'use client';

import React from 'react';
import Image from 'next/image';
import { Download, ArrowRight, Rocket, Trophy, Server, Activity, AtSign, FileText } from 'lucide-react';
import { Button } from './ui/Button';
import { GitHubIcon, LinkedInIcon, XIcon } from './ui/SocialIcons';

const metrics = [
  { value: '01+', label: 'Years Experienced', detail: 'Shipping Production', icon: Activity },
  { value: '03+', label: 'Live Deployments', detail: 'Real users & Impact', icon: Server },
  { value: '02+', label: 'Competition Wins', detail: 'Ranked outcomes', icon: Trophy },
  { value: '04+', label: 'Active Projects', detail: 'Building & Learning', icon: Rocket },
];

const techStack = ['Flutter', 'React', 'Next.js', 'Python', 'IoT'];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/arpitkumar28', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arpitkumar0211', icon: LinkedInIcon },
  { label: 'Twitter', href: 'https://x.com/Arpit_patel28', icon: XIcon },
  { label: 'Email', href: 'mailto:arpitkumar0211@gmail.com', icon: AtSign },
  { label: 'Resume', href: '/resume.pdf', icon: FileText },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="font-mono text-sm font-black uppercase tracking-[0.18em] text-primary md:text-base">
                &gt; Software Engineer
              </p>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-text-primary"
                id="hero-heading"
              >
                Arpit Kumar
              </h1>

              <p className="max-w-2xl text-xl font-bold leading-snug text-text-primary md:text-2xl">
                Software engineer building production systems across <span className="text-primary">Flutter, full stack, AI, and IoT</span>.
              </p>

              <p className="max-w-xl text-base font-medium leading-relaxed text-text-muted md:text-lg">
                I build practical apps, backend APIs, mobile workflows, and smart systems that solve real user problems.
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
                  Impact Metrics
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
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 text-sm font-bold"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                href="#projects"
                className="px-7 py-3.5 text-sm font-bold"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-text-muted">
              <a href="#contact" className="hover:text-primary">Contact Me</a>
              <span>•</span>
              <a href="#journey" className="hover:text-primary">My Story</a>
              <span>•</span>
              <a href="#projects" className="hover:text-primary">All Projects</a>
            </div>
          </div>

          <div className="group relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-primary/30 bg-background-card shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-200 to-background dark:from-slate-900 dark:via-slate-800 dark:to-background" />
                <Image
                  src="/assets/images/photo2.jpeg"
                  alt="Portrait of Arpit Kumar"
                  width={760}
                  height={900}
                  priority
                  className="relative z-10 h-full w-full object-contain object-top grayscale contrast-110 saturate-75 transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:saturate-125"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-background/55 to-transparent transition-opacity duration-500 group-hover:from-background/95 group-hover:via-background/35" />
              </div>

              <div className="absolute -right-5 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className="group/link relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/25 bg-slate-900/80 text-blue-100 opacity-95 shadow-lg backdrop-blur transition-all hover:-translate-x-1 hover:border-primary hover:bg-primary hover:text-white focus-visible:-translate-x-1 focus-visible:border-primary focus-visible:bg-primary focus-visible:text-white"
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 translate-x-2 rounded-lg border border-border bg-background-card px-3 py-2 text-xs font-black text-text-primary opacity-0 shadow-xl transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-6 rounded-b-[2rem] bg-gradient-to-t from-background via-background/85 to-transparent px-6 pb-7 pt-24 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-3xl font-black text-text-primary">Arpit Kumar</h3>
                <p className="mt-3 text-lg font-black text-primary">
                  Software Engineer &bull; Flutter &bull; Full Stack
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-base font-black text-emerald-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Available for Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
