'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Cpu, Brain } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const opportunities = [
  {
    icon: Smartphone,
    title: 'Flutter Internships',
    description: 'Mobile app roles where I can build clean UI, learn production workflows, and ship useful features.',
    color: 'from-primary/20 to-accent/20',
  },
  {
    icon: Code,
    title: 'Full Stack Projects',
    description: 'Frontend and backend work involving dashboards, APIs, student tools, and real-world web products.',
    color: 'from-secondary/20 to-primary/20',
  },
  {
    icon: Cpu,
    title: 'IoT Projects',
    description: 'Sensor-based prototypes, automation ideas, tracking systems, and practical hardware-software solutions.',
    color: 'from-accent/20 to-secondary/20',
  },
  {
    icon: Brain,
    title: 'AI Projects',
    description: 'Machine learning applications, data analysis, and AI-powered solutions for real-world problems.',
    color: 'from-primary/20 to-secondary/20',
  },
];

export const OpenTo: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section id="open-to" className="bg-gradient-to-b from-background to-background/50">
      <SectionTitle>Open To</SectionTitle>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {opportunities.map((opportunity, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard className="h-full group">
              <div className="space-y-4">
                <motion.div
                  className={`p-4 rounded-xl bg-gradient-to-br ${opportunity.color} group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                >
                  <opportunity.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {opportunity.title}
                  </h3>
                  <p className="text-muted text-sm">{opportunity.description}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
