'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe2, Brain, Radio, ShieldCheck } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const buildItems = [
  {
    icon: Globe2,
    title: 'Web Products',
    description: 'Product-focused web experiences built with Next.js, React, TypeScript, and thoughtful engineering decisions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Systems',
    description: 'Flutter-based apps shaped around real user journeys, clean UX, and dependable product delivery.',
  },
  {
    icon: Radio,
    title: 'Backend & Real-Time',
    description: 'Reliable APIs and event-driven systems designed for performance, maintainability, and production workflows.',
  },
  {
    icon: Brain,
    title: 'AI Engineering',
    description: 'Practical AI features for automation, recommendations, and better decision-making across digital products.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Security-aware engineering grounded in Linux, networking, web security, CTFs, and defensive thinking.',
  },
];

export const WhatIBuild: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section id="what-i-build" className="bg-gradient-to-b from-background to-background/50">
      <div className="mb-10 flex flex-col items-center text-center">
        <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Capabilities</p>
        <SectionTitle className="mb-0">How I Build</SectionTitle>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted md:text-lg">From product interfaces to secure systems, I connect the pieces that make software useful.</p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        {buildItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className={index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}>
            <GlassCard className="group h-full !rounded-2xl !p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex h-full flex-col items-start text-left">
                <div className="mb-7 flex w-full items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.18em] text-text-subtle">0{index + 1}</span>
                  <motion.div className="rounded-xl border border-primary/15 bg-primary/10 p-3 transition-colors group-hover:bg-primary/15" whileHover={{ scale: 1.05 }}>
                    <item.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">{item.description}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
