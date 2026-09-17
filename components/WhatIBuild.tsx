'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe2, Brain, Radio, ShieldCheck } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const buildItems = [
  {
    icon: Globe2,
    title: 'Web Development',
    description: 'Modern web applications with Next.js, React, TypeScript, and Tailwind CSS.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Cross-platform mobile applications using Flutter and Dart for practical workflows.',
  },
  {
    icon: Radio,
    title: 'Backend & Real-Time',
    description: 'APIs and distributed functionality with FastAPI, Node.js, REST APIs, and WebSockets.',
  },
  {
    icon: Brain,
    title: 'AI Engineering',
    description: 'AI-powered applications involving AI APIs, RAG, recommendations, and intelligent workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Practical security work across Linux, networking, reconnaissance, enumeration, web security, CTFs, and digital forensics.',
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
      <SectionTitle>What I Build</SectionTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-3 md:grid-cols-2 lg:grid-cols-5 md:gap-4"
      >
        {buildItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard className="h-full group">
              <div className="flex flex-col items-center text-center space-y-3">
                <motion.div
                  className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{item.description}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
