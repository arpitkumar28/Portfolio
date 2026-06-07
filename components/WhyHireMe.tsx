'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code2, Users, Target, Zap, Shield } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const reasons = [
  {
    icon: Rocket,
    title: 'Ship Fast',
    description: '17+ projects shipped across mobile, web, and IoT with focus on practical solutions.',
  },
  {
    icon: Code2,
    title: 'Full Stack Capability',
    description: 'Comfortable building end-to-end solutions from Flutter apps to Python backends.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative mindset with experience working on team projects and open source.',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Strong analytical skills with focus on solving real-world problems through technology.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quick to adapt to new technologies and constantly improving fundamentals.',
  },
  {
    icon: Shield,
    title: 'Reliable',
    description: 'Committed to delivering quality work with clean code and maintainable solutions.',
  },
];

export const WhyHireMe: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Section id="why-hire-me" className="bg-gradient-to-b from-background to-background/50">
      <SectionTitle>Why Hire Me</SectionTitle>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {reasons.map((reason, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard className="h-full group">
              <div className="space-y-4">
                <motion.div
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <reason.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-muted">{reason.description}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
