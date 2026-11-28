'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Box, Cloud, Gamepad2, Pause, Play, ShieldCheck, Trophy } from 'lucide-react';
import { Section } from './ui/Section';

const achievements = [
  {
    title: 'HTB Season 12 — Aero',
    label: 'Hack The Box · Holo Tier',
    summary: 'Completed all nine seasonal machines across Linux and Windows, from Easy to Insane.',
    detail: 'Dashboard snapshot: rank #525 · 660 points · 9 user solves / 8 system solves.',
    icon: ShieldCheck,
    image: '/assets/images/htb-season-12/season-dashboard.webp',
    imageAlt: 'Hack The Box Season 12 dashboard with Holo tier and leaderboard progress',
    href: '/htb-season-12',
    linkLabel: 'View season details',
    tags: ['Windows & Linux', 'AD / Kerberos', 'Privilege escalation'],
  },
  {
    title: 'Arya E-Sports Club',
    label: 'Leadership & Activities',
    summary: 'Led esports activities and tournaments at Arya College of Engineering & I.T.',
    detail: 'Coordinated event planning, teams, participants, technical and logistics work, and event execution.',
    icon: Trophy,
    image: '/assets/images/arya-esports-club.png',
    imageAlt: 'Arya E-Sports Club red shield and game controller logo',
    tags: ['Team coordination', 'Event operations', 'Leadership'],
  },
  {
    title: 'Clash Cup 2026',
    label: 'Gaming Tournament · Operations',
    summary: 'Supported tournament planning and operations from preparation through event delivery.',
    detail: 'Focused on practical event coordination and keeping participants and tournament activities organized.',
    icon: Gamepad2,
    tags: ['Planning', 'Operations', 'Coordination'],
  },
  {
    title: 'Cloud & Generative AI',
    label: 'Learning / Training',
    summary: 'Building practical familiarity with Google Cloud, Vertex AI, Gemini, and generative AI.',
    detail: 'Exploring cloud and AI tools through continued learning and application development.',
    icon: Cloud,
    tags: ['Google Cloud', 'Vertex AI', 'Generative AI'],
  },
  {
    title: 'Cybersecurity Foundations',
    label: 'Ongoing learning',
    summary: 'Developing practical foundations across networking, Linux, web security, and security labs.',
    detail: 'Hands-on practice includes Hack The Box and TryHackMe, alongside continued study of security fundamentals.',
    icon: BookOpen,
    tags: ['Networking', 'Linux', 'Web security'],
  },
];

export const Achievements: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [autoplay, setAutoplay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const active = achievements[activeIndex];
  const ActiveIcon = active.icon;
  const slideVariants = {
    enter: (slideDirection: number) => ({ opacity: 0, x: reduceMotion ? 0 : slideDirection * 48, scale: reduceMotion ? 1 : 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (slideDirection: number) => ({ opacity: 0, x: reduceMotion ? 0 : slideDirection * -48, scale: reduceMotion ? 1 : 0.97 }),
  };

  const showSlide = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + achievements.length) % achievements.length;
    setDirection(normalizedIndex >= activeIndex ? 1 : -1);
    setActiveIndex(normalizedIndex);
  };

  useEffect(() => {
    if (!autoplay || isPaused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % achievements.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [autoplay, isPaused, reduceMotion]);

  return (
    <Section id="achievements" className="bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-primary sm:text-sm">Milestones before the work</p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-text-primary sm:text-4xl md:text-5xl">Achievements</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">Security milestones, leadership, and continued learning. Browse each highlight.</p>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="min-w-[4.5rem] text-right font-mono text-xs font-bold tabular-nums text-text-muted" aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(achievements.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => setAutoplay((playing) => !playing)} disabled={Boolean(reduceMotion)} aria-label={reduceMotion ? 'Automatic slideshow disabled by reduced-motion preference' : autoplay ? 'Pause automatic achievements' : 'Resume automatic achievements'} title={reduceMotion ? 'Automatic slideshow disabled by reduced-motion preference' : autoplay ? 'Pause slideshow' : 'Resume slideshow'} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background-elevated text-text-primary transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50">
              {autoplay && !reduceMotion ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </button>
            <button type="button" onClick={() => showSlide(activeIndex - 1)} aria-label="Previous achievement" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background-elevated text-text-primary transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => showSlide(activeIndex + 1)} aria-label="Next achievement" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 bg-primary text-background transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-label="Achievement highlights carousel"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') { event.preventDefault(); showSlide(activeIndex - 1); }
            if (event.key === 'ArrowRight') { event.preventDefault(); showSlide(activeIndex + 1); }
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
          }}
          onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchStart === null) return;
            const touchEnd = event.changedTouches[0]?.clientX;
            if (touchEnd === undefined) return;
            const delta = touchEnd - touchStart;
            if (delta > 48) showSlide(activeIndex - 1);
            if (delta < -48) showSlide(activeIndex + 1);
            setTouchStart(null);
          }}
          className="overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.article
              key={active.title}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 25, mass: 0.8 }}
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} of ${achievements.length}: ${active.title}`}
              className="relative grid min-h-[260px] overflow-hidden rounded-2xl border border-primary/35 bg-background-card shadow-xl md:min-h-[300px] md:grid-cols-[1.05fr_.95fr]"
            >
              <div className="relative z-10 flex flex-col justify-center p-5 sm:p-7 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary"><ActiveIcon className="h-5 w-5" aria-hidden="true" /></span>
                    <p className="truncate font-mono text-[9px] font-black uppercase tracking-[0.14em] text-primary sm:text-[10px]">{active.label}</p>
                  </div>
                  {activeIndex === 0 && <div className="htb-season-loop" aria-label="Nine of nine Season 12 machines completed"><span className="htb-season-loop-orbit" /><Box className="htb-season-loop-cube" aria-hidden="true" /><span className="htb-season-loop-copy">9/9 MACHINES</span></div>}
                </div>
                <h3 className="mt-4 font-display text-2xl font-black leading-tight tracking-tight text-text-primary sm:text-3xl md:text-4xl">{active.title}</h3>
                <p className="mt-2 max-w-xl text-sm font-bold leading-relaxed text-text-secondary sm:text-base">{active.summary}</p>
                <p className="mt-2 max-w-xl text-xs leading-relaxed text-text-muted sm:text-sm">{active.detail}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {active.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-background-elevated px-2.5 py-1 text-[9px] font-bold text-text-secondary sm:text-[10px]">{tag}</span>)}
                </div>
                {active.href && <Link href={active.href} className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-xs font-black text-background transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{active.linkLabel}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>}
              </div>

              <div className={`relative overflow-hidden border-t border-primary/15 bg-background-elevated md:min-h-full md:border-l md:border-t-0 ${active.title === 'Arya E-Sports Club' ? 'min-h-[190px]' : 'min-h-[150px]'}`}>
                {active.image ? (
                  <>
                    {active.title === 'Arya E-Sports Club' && <div aria-hidden="true" className="absolute left-1/2 top-1/2 z-[1] aspect-square h-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/35 bg-[#F6F4EF] shadow-[0_0_36px_rgb(var(--color-primary)/.12)]" />}
                    <img src={active.image} alt={active.imageAlt} className={`absolute inset-0 z-[2] h-full w-full ${active.title === 'Arya E-Sports Club' ? 'object-contain p-2 sm:p-4' : 'object-cover object-top opacity-90'}`} />
                  </>
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,rgb(var(--color-primary)/.16),transparent_67%)]">
                    <div className="relative grid h-40 w-40 place-items-center rounded-full border border-primary/30 bg-background-card shadow-[0_0_70px_rgb(var(--color-primary)/.12)] sm:h-52 sm:w-52">
                      <div className="absolute inset-3 rounded-full border border-primary/20" />
                      <div className="absolute inset-8 rounded-full border border-dashed border-primary/20" />
                      <ActiveIcon className="h-16 w-16 text-primary sm:h-20 sm:w-20" strokeWidth={1.15} aria-hidden="true" />
                      <span className="absolute -right-3 top-8 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgb(var(--color-primary)/.8)]" />
                      <span className="absolute -bottom-1 left-8 h-2 w-2 rounded-full bg-primary/70" />
                    </div>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-elevated/70 via-transparent to-transparent md:bg-gradient-to-r md:from-background-card/20 md:via-transparent md:to-transparent" />
                <span className="absolute bottom-4 right-4 rounded-md border border-primary/30 bg-background-card/90 px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-[0.15em] text-primary">{activeIndex + 1} / {achievements.length}</span>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex justify-center gap-2" role="group" aria-label="Choose an achievement">
          {achievements.map((achievement, index) => (
            <button key={achievement.title} type="button" onClick={() => showSlide(index)} aria-label={`Show ${achievement.title}`} aria-current={index === activeIndex ? 'true' : undefined} className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${index === activeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-text-subtle/50 hover:bg-primary/60'}`} />
          ))}
        </div>
      </div>
    </Section>
  );
};
