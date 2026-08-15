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
    description: '17+ projects shipped across mobile, web, and IoT. Built NCC Buddy with 15+ screens, Hospital Attendance System with biometric auth, and GreenFlow AI traffic management - all in under 6 months.',
  },
  {
    icon: Code2,
    title: 'Full Stack Capability',
    description: 'End-to-end development from Flutter apps (NCC Buddy, Krishi Sahayak) to Python backends (EduAI Nexus X, GreenFlow API). Comfortable with React, Next.js, Firebase, and PostgreSQL.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Experience working on team projects including NCC Buddy with admin dashboard, hospital systems with role-based access, and collaborative hackathon contributions.',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Solved real-world problems: traffic congestion with AI-powered signals, hospital attendance with biometric verification, and agricultural support with mobile workflows.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Mastered Flutter in 3 months, built AI integration with TensorFlow in 2 months, and learned IoT hardware integration for accident detection systems.',
  },
  {
    icon: Shield,
    title: 'Reliable',
    description: 'Delivered production-ready systems with 99.9% attendance accuracy, real-time data sync, and secure authentication. Committed to clean, maintainable code.',
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
