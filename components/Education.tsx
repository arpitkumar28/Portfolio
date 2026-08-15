'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const educationItems = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Arya College of Engineering and IT, Jaipur',
    period: '2024 - 2028',
  },
  {
    degree: 'Class 12th (CBSE)',
    institution: 'ABR Foundation School',
    period: '2023',
  },
  {
    degree: 'Class 10th (CBSE)',
    institution: 'Dedicated Public School',
    period: '2021',
  },
];

export const Education: React.FC = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section id="education" className="bg-background">
      <SectionTitle>Education</SectionTitle>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {educationItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard className="group">
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <GraduationCap className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-text-primary">{item.degree}</h3>
                  <p className="text-text-muted">{item.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
