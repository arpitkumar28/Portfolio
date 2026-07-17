'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Section } from './ui/Section';

const values = [
  ['Impact', 'ROI-focused'],
  ['Secure', 'Reliable delivery'],
  ['Fast', 'Iterate + ship'],
  ['Rigor', 'Engineering-grade'],
];

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-2xl border border-border bg-gradient-to-br from-background-card to-background-elevated p-6 md:p-12"
        >
          <p className="font-mono text-sm font-black uppercase tracking-[0.28em] text-text-muted">
            Collaboration With Me
          </p>
          <h2 className="mt-8 max-w-4xl text-4xl font-black tracking-tight text-text-primary md:text-5xl">
            Build the next <span className="text-primary">production-grade</span> system.
          </h2>
          <p className="mt-8 max-w-4xl text-xl font-medium leading-relaxed text-text-secondary">
            Curious about architecture choices, delivery scope, or product execution? I would like to partner on software, AI integration, and systems that ship measurable outcomes.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {values.map(([title, detail]) => (
              <div key={title} className="rounded-lg border border-border bg-background-card p-5">
                <p className="text-xl font-black text-text-primary">{title}</p>
                <p className="mt-1 font-mono text-xs font-black uppercase tracking-[0.18em] text-text-muted">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a
              href="mailto:arpitkumar0211@gmail.com"
              className="group flex items-center justify-between rounded-xl bg-primary px-6 py-7 text-white transition-transform hover:-translate-y-1"
            >
              <span className="flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-7 w-7" />
                </span>
                <span>
                  <span className="block font-mono text-xs font-black uppercase tracking-[0.18em] text-blue-100">Direct Channel</span>
                  <span className="mt-2 block text-2xl font-black">Initiate Discussion</span>
                </span>
              </span>
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-background-card px-6 py-7 text-text-primary transition-transform hover:-translate-y-1"
            >
              <span className="flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-background-elevated text-primary">
                  <Download className="h-7 w-7" />
                </span>
                <span>
                  <span className="block font-mono text-xs font-black uppercase tracking-[0.18em] text-text-muted">Resources</span>
                  <span className="mt-2 block text-2xl font-black">Get CV Pack</span>
                </span>
              </span>
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
