'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const journeyItems = [
  {
    year: '2024',
    title: 'Started Building Web Foundations',
    description: 'Practiced HTML, CSS, JavaScript, Git, and core programming concepts while learning how real interfaces are structured.',
  },
  {
    year: '2025',
    title: 'Moved Into Mobile & Product Ideas',
    description: 'Built Flutter apps across agriculture, communication, attendance, and NCC workflows with stronger UI and state management focus.',
  },
  {
    year: '2026',
    title: 'Expanding Toward AI, Backend & IoT',
    description: 'Improving DSA, backend APIs, AI-assisted workflows, and practical IoT systems for real-world problem solving.',
  },
];

export const Journey: React.FC = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Section id="journey" className="bg-gradient-to-b from-background/50 to-background">
      <SectionTitle>Engineering Journey</SectionTitle>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2" />

          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-start md:items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent transform -translate-x-1/2 border-4 border-background z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <GlassCard className="group">
                  <div className="space-y-3">
                    <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold text-primary">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </GlassCard>
              </div>

              {/* Arrow for visual flow */}
              {index < journeyItems.length - 1 && (
                <div className={`hidden md:block absolute left-1/2 top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0 ? 'translate-x-12' : '-translate-x-12'
                }`}>
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
