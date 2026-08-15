'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

const focusCards = [
  {
    label: 'Software track',
    title: 'Production-ready web, mobile, backend, and automation systems',
  },
  {
    label: 'Project track',
    title: 'Full-stack, Flutter, AI integration, and IoT builds for real users',
  },
];

export const Journey: React.FC = () => {
  return (
    <Section id="journey" className="bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="font-mono text-sm font-black uppercase tracking-[0.28em] text-primary">
            Roles & direction
          </p>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Building through projects
          </h2>
          <span className="mt-8 block h-1.5 w-24 rounded-full bg-primary" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-border bg-black/25 p-6 shadow-2xl shadow-black/20 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[140px_1fr] md:items-start">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-border bg-background-card text-center font-mono text-sm font-black uppercase tracking-widest text-primary">
              AK
            </div>

            <div>
              <h3 className="text-3xl font-black leading-tight text-text-primary md:text-4xl">
                Software Developer | Full-Stack · Flutter · AI/GenAI
              </h3>
              <p className="mt-3 font-mono text-sm font-bold text-text-muted">
                Jaipur, Rajasthan, India
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-2xl font-black text-text-primary">
                  Project-based experience
                </p>
                <p className="font-mono text-sm font-black uppercase tracking-[0.16em] text-primary">
                  React · Next.js · Flutter · FastAPI · Node.js · AI
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {focusCards.map((card) => (
                  <div key={card.label} className="rounded-xl border border-border bg-background-card p-6">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-text-muted">
                      {card.label}
                    </p>
                    <p className="mt-5 text-xl font-black leading-snug text-text-primary">
                      {card.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {[
                  ['Full-Stack Developer / Project Developer', 'Designed full-stack web applications, REST APIs, backend services, database-backed systems, and deployment workflows.'],
                  ['Flutter Developer / Mobile Application Developer', 'Developed cross-platform mobile interfaces, API integrations, state management, Firebase workflows, and location-based features.'],
                  ['Leadership & Activities', 'Arya E-Sports Club — Esports Leader. Coordinated activities and tournaments, assisted with planning, and collaborated with students and organizers.'],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-lg border border-border/70 bg-background-elevated p-4">
                    <h4 className="font-black text-text-primary">{title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
