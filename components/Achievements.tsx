'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Users, Target, Zap } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const achievements = [
  {
    icon: Trophy,
    title: 'Hackathons',
    items: [
      'Smart India Hackathon 2025 - Finalist',
      'College Hackathon - Traffic Management Solution',
      'IoT Challenge - Accident Detection System',
    ],
  },
  {
    icon: Award,
    title: 'Competitions',
    items: [
      'Codeathon 2025 - Top 10',
      'Flutter Dev Challenge - Participant',
      'AI/ML Competition - Certificate of Excellence',
    ],
  },
  {
    icon: BookOpen,
    title: 'Certifications',
    items: [
      'Google Cloud Associate Cloud Engineer',
      'AWS Cloud Practitioner',
      'Flutter Development Bootcamp',
    ],
  },
  {
    icon: Users,
    title: 'Leadership',
    items: [
      'NCC Senior Cadet - Team Lead',
      'College Tech Club - Core Member',
      'Open Source Contributor',
    ],
  },
];

export const Achievements: React.FC = () => {
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
    <Section id="achievements" className="bg-gradient-to-b from-background to-background/50">
      <SectionTitle>Achievements & Experience</SectionTitle>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {achievements.map((achievement, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard className="h-full group">
              <div className="space-y-4">
                <motion.div
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <achievement.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <ul className="space-y-2">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted text-sm flex items-start gap-2">
                        <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
