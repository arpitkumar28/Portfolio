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
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-text-primary md:text-6xl">
            Building through projects
          </h2>
          <span className="mt-7 block h-[2px] w-14 bg-primary" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-border/80 bg-background-card/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[140px_1fr] md:items-start">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-center font-mono text-sm font-bold uppercase tracking-widest text-primary md:h-28 md:w-28">
              AK
            </div>

            <div>
              <h3 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary md:text-4xl">
                Cybersecurity-Focused Software Engineer
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
                  <div key={card.label} className="rounded-2xl border border-border/80 bg-background-elevated/70 p-6 transition-colors hover:border-primary/35">
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
                  ['Software Engineer / Product Builder', 'Designed full-stack web applications, REST APIs, backend services, database-backed systems, and deployment workflows.'],
                  ['Flutter Developer / Mobile Application Developer', 'Developed cross-platform mobile interfaces, API integrations, state management, Firebase workflows, and location-based features.'],
                  ['Leadership & Activities', 'Arya E-Sports Club — Esports Leader. Coordinated activities and tournaments, assisted with planning, and collaborated with students and organizers.'],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-xl border border-border/70 bg-background-elevated/70 p-5">
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
