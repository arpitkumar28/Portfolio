'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

const highlights = [
  ['Winner', 'College Hackathon', 'IoT accident detection'],
  ['Winner', 'College Hackathon', 'IoT accident detection'],
  ['100+', 'LeetCode Problems', '4+ month daily streak'],
  ['20+', 'NCC Leadership', 'Cadets coordinated'],
];

const groups = [
  ['Hackathons & Prototypes', 'Competitive builds', 'College hackathon win and applied prototype delivery under time constraints.'],
  ['Cloud & Engineering', 'Technical validation', 'Google Cloud fundamentals plus hands-on deployment through Vercel, Firebase, and FastAPI systems.'],
  ['Leadership', 'Execution under pressure', 'NCC team leadership, technical workshops, and shipping prototypes with clear ownership.'],
];

export const Achievements: React.FC = () => {
  return (
    <Section id="achievements" className="bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="font-mono text-sm font-black uppercase tracking-[0.28em] text-primary">
            Verified Achievements
          </p>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Honors & Milestones
          </h2>
          <p className="mt-6 max-w-4xl text-xl font-bold leading-relaxed text-text-muted">
            Verified entries across hackathons, engineering consistency, cloud learning, and leadership impact.
          </p>
          <span className="mt-8 block h-1.5 w-24 rounded-full bg-primary" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-4 md:grid-cols-2"
        >
          {highlights.map(([value, title, detail]) => (
            <div key={title} className="rounded-2xl border border-border bg-black/25 p-8">
              <p className="text-3xl font-black text-text-primary">{value}</p>
              <h3 className="mt-4 text-lg font-black text-text-primary">{title}</h3>
              <p className="mt-2 font-mono text-sm font-bold text-text-muted">{detail}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 space-y-4">
          {groups.map(([title, label, detail]) => (
            <div key={title} className="rounded-2xl border border-border bg-background-card p-6 md:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-black text-text-primary">{title}</h3>
                <span className="font-mono text-xs font-black uppercase tracking-[0.18em] text-primary">{label}</span>
              </div>
              <p className="mt-4 text-base font-medium leading-relaxed text-text-muted">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
