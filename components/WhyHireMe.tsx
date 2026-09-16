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
    description: 'Builds across mobile, web, and connected-system concepts, with practical project work spanning Flutter, Next.js, APIs, and data workflows.',
  },
  {
    icon: Code2,
    title: 'Full Stack Capability',
    description: 'Works end to end from Flutter and React interfaces to Python or Node.js services, database-backed workflows, and API integrations.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Comfortable collaborating on product ideas, shared application workflows, admin experiences, and hackathon-style builds.',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Uses software to explore practical problems in traffic intelligence, healthcare workflows, safety, education, and civic technology.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Learns by building and testing across Flutter, backend engineering, AI integrations, cloud workflows, and cybersecurity.',
  },
  {
    icon: Shield,
    title: 'Reliable',
    description: 'Values secure authentication, clear implementation boundaries, maintainable code, and honest communication about what is working.',
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
        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
      >
        {reasons.map((reason, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard className="h-full group">
              <div className="space-y-3">
                <motion.div
                  className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <reason.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{reason.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
