'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Download, Mail, Shield } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';
import { Section } from './ui/Section';

const stats = [
  ['04+', 'Flagship projects'],
  ['10+', 'GitHub builds'],
  ['02+', 'Hackathon wins'],
  ['100+', 'DSA problems'],
];

const milestones = [
  {
    date: '2026',
    title: 'GreenFlow AI traffic intelligence',
    body: 'Built a smart traffic management platform with congestion prediction, emergency green corridors, IoT data flow, and real-time dashboards.',
  },
  {
    date: '2025',
    title: 'Hospital digital attendance system',
    body: 'Developed a Flutter workforce app with biometric authentication, NFC check-in, geolocation verification, and automated reporting.',
  },
  {
    date: '2025',
    title: 'NCC Buddy cadet platform',
    body: 'Created mobile workflows for events, QR attendance, location sharing, SOS actions, and commander-side management.',
  },
  {
    date: '2024',
    title: 'Hackathons, cloud, and consistency',
    body: 'Won college hackathon work, earned Google Cloud fundamentals, and maintained daily coding practice while building real product prototypes.',
  },
];

const projectLines = [
  ['GreenFlow AI', 'Next.js · Flutter · FastAPI · TensorFlow'],
  ['EduAI Nexus X', 'Python · React · PostgreSQL · OpenAI API'],
  ['Krishi Sahayak', 'Flutter · Agriculture support · Mobile UX'],
];

const technologies = [
  'Flutter',
  'Dart',
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'FastAPI',
  'Firebase',
  'Supabase',
  'TensorFlow',
  'Arduino',
  'Tailwind',
];

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-background py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] xl:grid-cols-[420px_1fr]">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.6rem] border border-primary/30 bg-background-card shadow-2xl shadow-black/25">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-200 to-background dark:from-slate-900 dark:via-slate-800 dark:to-background" />
                <Image
                  src="/assets/images/photo2.jpeg"
                  alt="Portrait of Arpit Kumar"
                  fill
                  className="object-contain object-top grayscale contrast-110"
                  sizes="(min-width: 1024px) 420px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black text-white">Arpit Kumar</h3>
                  <p className="mt-2 text-sm font-bold text-blue-200">
                    Software Engineer · Flutter · Full Stack
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-emerald-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Open to internships & product builds
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/arpitkumar28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-lg border border-border bg-background-card px-4 py-4 font-black text-text-muted transition-colors hover:border-primary hover:text-primary"
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/arpitkumar0211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-lg border border-border bg-background-card px-4 py-4 font-black text-text-muted transition-colors hover:border-primary hover:text-primary"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-background-card p-6">
              <p className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-primary">
                <Shield className="h-4 w-4" />
                Education
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-text-muted">Institution</p>
                  <p className="mt-2 text-lg font-black text-text-primary">Arya College of Engineering and IT, Jaipur</p>
                </div>
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-text-muted">Degree</p>
                  <p className="mt-2 text-lg font-black text-text-primary">B.Tech in Information Technology</p>
                </div>
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-text-muted">Timeline</p>
                  <p className="mt-2 text-lg font-black text-text-primary">2024 - 2028</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="font-display text-5xl font-black tracking-tight text-text-primary md:text-7xl">
                Arpit Kumar
              </h2>
              <p className="mt-5 font-mono text-2xl font-black text-primary">
                &gt; Software Engineer
              </p>

              <div className="mt-12 space-y-7 text-lg font-medium leading-relaxed text-text-secondary md:text-xl">
                <p className="text-2xl font-black leading-snug text-text-primary">
                  I build production-minded software across Flutter, full stack web, AI integration, and IoT systems.
                </p>
                <p>
                  <span className="font-black text-text-primary">Background:</span> I am pursuing B.Tech in Information Technology and building a portfolio of practical products that solve real problems: traffic intelligence, healthcare attendance, cadet management, education AI, agriculture support, and civic tools.
                </p>
                <p>
                  <span className="font-black text-text-primary">What I build:</span> I focus on clean mobile workflows, reliable backend APIs, real-time dashboards, database-backed products, and AI-assisted features that make an application more useful rather than just more flashy.
                </p>
                <p>
                  <span className="font-black text-text-primary">How I work:</span> I prefer measurable outcomes, clear interfaces, readable architecture, and fast iteration. My strongest stack today is Flutter, React, Next.js, Python, FastAPI, Firebase/Supabase, and Tailwind.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-xl border border-border bg-black/25 p-6 text-center">
                  <p className="text-3xl font-black text-primary">{value}</p>
                  <p className="mt-3 font-mono text-xs font-black uppercase tracking-[0.14em] text-text-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-10">
              <p className="mb-6 font-mono text-sm font-black uppercase tracking-[0.22em] text-text-muted">
                Career Milestones
              </p>
              <div className="space-y-4">
                {milestones.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-background-card p-6">
                    <div className="flex items-center gap-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-text-muted">
                      <Calendar className="h-4 w-4 text-primary" />
                      {item.date}
                    </div>
                    <h3 className="mt-4 text-xl font-black text-text-primary">{item.title}</h3>
                    <p className="mt-3 text-base font-medium leading-relaxed text-text-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-10">
              <p className="mb-6 font-mono text-sm font-black uppercase tracking-[0.22em] text-text-muted">
                Selected Systems
              </p>
              <div className="space-y-3">
                {projectLines.map(([title, stack]) => (
                  <a
                    key={title}
                    href="#projects"
                    className="group flex items-center justify-between rounded-xl border border-border bg-background-card px-5 py-5 transition-colors hover:border-primary"
                  >
                    <span>
                      <span className="block text-lg font-black text-text-primary group-hover:text-primary">{title}</span>
                      <span className="mt-2 block font-mono text-sm font-bold text-text-muted">{stack}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 text-text-muted group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-10">
              <p className="mb-6 font-mono text-sm font-black uppercase tracking-[0.22em] text-text-muted">
                Key Technologies
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span key={tech} className="rounded-lg border border-border bg-background-card px-4 py-2 font-mono text-sm font-black text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-background-card p-8 md:p-10">
              <div className="absolute right-8 top-8 text-8xl font-black text-primary/5">⌁</div>
              <p className="font-mono text-sm font-black uppercase tracking-[0.22em] text-primary">
                Let&apos;s work together
              </p>
              <h3 className="mt-5 max-w-2xl text-3xl font-black leading-tight text-text-primary md:text-4xl">
                Available for software engineering internships and product collaboration
              </h3>
              <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-text-muted">
                Seeking roles where I can contribute to Flutter apps, full-stack products, backend systems, AI-integrated features, or IoT-backed workflows.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-4 font-black text-white transition-transform hover:-translate-y-1"
                >
                  <Download className="h-5 w-5" />
                  Get CV
                </a>
                <a
                  href="mailto:arpitkumar0211@gmail.com"
                  className="inline-flex items-center gap-3 rounded-lg bg-background-elevated px-6 py-4 font-black text-text-primary transition-transform hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5" />
                  Schedule Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
