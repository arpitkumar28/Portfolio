'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const skillCategories = [
  {
    category: 'Mobile Development',
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'Dart', level: 85 },
      { name: 'Firebase', level: 80 },
      { name: 'Riverpod', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Node.js', level: 65 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    category: 'IoT & Hardware',
    skills: [
      { name: 'Arduino', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'Sensors', level: 80 },
      { name: 'Hardware Integration', level: 75 },
    ],
  },
];

export const SkillsMatrix: React.FC = () => {
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
    <Section id="skills-matrix" className="bg-gradient-to-b from-background/50 to-background">
      <SectionTitle>Skills Matrix</SectionTitle>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div key={categoryIndex} variants={itemVariants}>
            <GlassCard className="h-full">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">{skill.name}</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
