'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layers, Brain, Cpu } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const buildItems = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Building beautiful, performant Flutter applications with clean UI and smooth animations.',
  },
  {
    icon: Layers,
    title: 'Full Stack Systems',
    description: 'Creating end-to-end web solutions with modern frameworks and scalable architecture.',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Integrating AI and machine learning to build intelligent, automated systems.',
  },
  {
    icon: Cpu,
    title: 'IoT Projects',
    description: 'Developing connected hardware solutions with sensors, automation, and real-time data.',
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
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {buildItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard className="h-full group">
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
