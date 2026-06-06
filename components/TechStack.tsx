'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Server, Database, Cpu, Wrench } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';
import { Tag } from './ui/Tag';

const techCategories = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Mobile UI'],
  },
  {
    icon: Code,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'WebSockets', 'Supabase', 'PostgreSQL'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase Firestore', 'SQLite'],
  },
  {
    icon: Cpu,
    title: 'IoT',
    skills: ['Arduino', 'Sensors', 'GPS Modules', 'C++', 'Hardware Integration'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'System Design', 'AI Integration'],
  },
];

export const TechStack: React.FC = () => {
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
    <Section id="skills" className="bg-background/50">
      <SectionTitle>Tech Arsenal</SectionTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {techCategories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard className="h-full group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <category.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Tag key={skillIndex}>{skill}</Tag>
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
