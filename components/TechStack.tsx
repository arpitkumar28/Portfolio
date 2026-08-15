'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

const capabilities = [
  {
    label: '01 / Core',
    title: 'Languages & Frontend',
    ref: '001',
    body: 'Programming foundations and interfaces for responsive, accessible web products.',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'Dart', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: '02 / Build',
    title: 'Backend, Mobile & Data',
    ref: '002',
    body: 'APIs, cross-platform workflows, state management, and database-backed application systems.',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Flutter', 'Riverpod', 'PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    label: '03 / Explore',
    title: 'AI, Cloud & Systems',
    ref: '003',
    body: 'Exploring modern AI/GenAI workflows, cloud deployment, DevOps, security, and connected hardware.',
    skills: ['Generative AI', 'RAG', 'Gemini', 'Vertex AI', 'AI Agents', 'Git', 'Docker', 'Google Cloud', 'Vercel', 'Arduino', 'GPS', 'Sensors'],
  },
];

export const TechStack: React.FC = () => {
  return (
    <Section id="skills" className="bg-background-elevated/40 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="font-mono text-sm font-black uppercase tracking-[0.28em] text-primary">
            &gt;_ Technical Capabilities Matrix
          </p>
          <h2 className="font-display mt-8 max-w-3xl text-5xl font-black tracking-tight text-text-primary md:text-7xl">
            Value-Generating Capabilities
          </h2>
          <span className="mt-8 block h-1.5 w-36 rounded-full bg-primary" />
        </div>

        <div className="space-y-6">
          {capabilities.map((capability) => (
            <motion.article
              key={capability.ref}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="rounded-2xl border border-border bg-background-card p-6 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl font-black text-primary">
                    +
                  </div>
                  <div>
                    <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-primary">
                      {capability.label}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-black text-text-primary md:text-3xl">
                      {capability.title}
                    </h3>
                  </div>
                </div>
                <p className="font-mono text-sm font-black uppercase tracking-[0.18em] text-text-muted">
                  Ref // {capability.ref}
                </p>
              </div>

              <p className="mt-8 border-l border-border pl-6 text-lg font-bold leading-relaxed text-text-muted md:text-xl">
                {capability.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {capability.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs font-black text-text-muted">
                    • {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
          <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-primary">Currently Exploring</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {['Advanced Backend Development', 'Generative AI', 'RAG Systems', 'AI Agents', 'Cloud Computing', 'DevOps', 'Cybersecurity', 'System Design'].map((item) => (
              <span key={item} className="rounded-full border border-border bg-background-card px-4 py-2 text-sm font-bold text-text-muted">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
