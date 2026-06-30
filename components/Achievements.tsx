'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Users, Target, Calendar, MapPin } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';

const achievements = [
  {
    year: '2026',
    icon: BookOpen,
    title: 'LeetCode Daily Challenge Streak',
    category: 'Learning',
    description: 'Sustained a strong LeetCode Daily Challenge streak through March–June 2026, sharpening algorithms, data structures, and problem-solving skills.',
    location: 'LeetCode',
  },
  {
    year: '2025',
    icon: Trophy,
    title: 'Smart India Hackathon 2025',
    category: 'Hackathon',
    description: 'Participated in national-level hackathon focusing on innovative solutions for traffic management and smart city infrastructure.',
    location: 'National Event',
  },
  {
    year: '2024',
    icon: Award,
    title: 'College Hackathon Winner',
    category: 'Competition',
    description: 'Developed Traffic Management Solution prototype addressing urban congestion challenges with IoT integration.',
    location: 'College Level',
  },
  {
    year: '2024',
    icon: BookOpen,
    title: 'Google Cloud Fundamentals',
    category: 'Learning',
    description: 'Completed Google Cloud Fundamentals certification covering core cloud concepts, computing, and storage services.',
    location: 'Online Certification',
  },
  {
    year: '2024',
    icon: Users,
    title: 'NCC Senior Cadet - Team Lead',
    category: 'Leadership',
    description: 'Led team of cadets in training activities, event coordination, and community service programs. Managed logistics and communication.',
    location: 'NCC Unit',
  },
  {
    year: '2023',
    icon: Award,
    title: 'Flutter Dev Challenge',
    category: 'Competition',
    description: 'Participated in Flutter development challenge building mobile applications with modern UI/UX patterns.',
    location: 'Online Challenge',
  },
  {
    year: '2023',
    icon: Users,
    title: 'College Tech Club - Core Member',
    category: 'Community',
    description: 'Active core member organizing technical workshops, coding sessions, and peer learning programs for students.',
    location: 'College Club',
  },
  {
    year: '2023',
    icon: BookOpen,
    title: 'AWS Cloud Practitioner Essentials',
    category: 'Learning',
    description: 'Attended AWS Cloud Practitioner workshop covering cloud computing fundamentals, security, and AWS core services.',
    location: 'Workshop',
  },
  {
    year: '2022',
    icon: Users,
    title: 'Open Source Contributor',
    category: 'Community',
    description: 'Started contributing to open-source projects on GitHub, focusing on documentation improvements and bug fixes.',
    location: 'GitHub',
  },
];

export const Achievements: React.FC = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <Section id="achievements" className="bg-gradient-to-b from-background to-background/50">
      <SectionTitle>Achievements & Experience</SectionTitle>
      
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
          
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-start mb-8 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 z-10" />
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <GlassCard className="group hover:border-primary/30 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <achievement.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.year}</span>
                      {achievement.location && (
                        <>
                          <span className="mx-2">•</span>
                          <MapPin className="w-4 h-4" />
                          <span>{achievement.location}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
