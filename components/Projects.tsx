'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';
import { Button } from './ui/Button';
import { Tag } from './ui/Tag';

const featuredProjects = [
  {
    id: 1,
    title: 'GreenFlow AI',
    category: 'AI / Smart City',
    description: 'AI-Powered Smart Traffic Orchestration Platform that predicts congestion, optimizes signals, and creates emergency green corridors for ambulances.',
    tags: ['Next.js', 'Flutter', 'FastAPI', 'Supabase', 'WebSockets'],
    links: [
      { label: 'Live Demo', url: 'https://greenflow-ai.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/Smart-Traffic-Management-System-with-Green-Corridor' },
      { label: 'Demo Video', url: 'https://youtu.be/Qdv3hZ_4W2Y' },
      { label: 'APK', url: 'https://github.com/arpitkumar28/Smart-Traffic-Management-System-with-Green-Corridor/releases' },
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Hospital Digital Attendance System',
    category: 'Flutter / Healthcare',
    description: 'Built a professional hospital attendance and management app with Flutter, Riverpod state management, biometric login, geolocation, NFC attendance support, secure storage, and light/dark themes.',
    tags: ['Flutter', 'Riverpod', 'NFC', 'Geolocation'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/Hospital_Digital_Attendence_System' }],
    featured: true,
  },
  {
    id: 3,
    title: 'NCC Buddy',
    category: 'Flutter / Cadet Utility',
    description: 'Created a companion app for NCC cadets with Firebase authentication, Firestore data, push notifications, events, attendance, QR scanner/generator, Google Maps tracking, SOS, chat, training, and admin screens.',
    tags: ['Flutter', 'Firebase', 'Maps', 'QR'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/ncc_buddy' }],
    featured: true,
  },
];

const allProjects = [
  {
    id: 4,
    title: 'Krishi Sahayak',
    category: 'Mobile / Agriculture',
    description: 'Built a Flutter agriculture support app focused on farmer guidance, simple mobile workflows, and clean access to useful crop-related information.',
    tags: ['Flutter', 'Dart', 'Mobile UI'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/Krishi-Sahayak' }],
    filter: 'flutter',
  },
  {
    id: 5,
    title: 'IoT Accident Detection System',
    category: 'IoT / Safety',
    description: 'Created a sensor-based accident detection prototype using IoT concepts to identify impact events and support quicker emergency alert workflows.',
    tags: ['C++', 'Arduino', 'Sensors'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/IoT_Based_Accident_Detection_System' }],
    filter: 'iot',
  },
  {
    id: 6,
    title: 'Build EduAI Nexus X Platform',
    category: 'AI / Education',
    description: 'Python-based EduAI platform concept focused on AI-assisted learning workflows, student support, and education productivity.',
    tags: ['Python'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/Build_EduAI_Nexus_X_platform' }],
    filter: 'ai',
  },
  {
    id: 7,
    title: 'Portfolio',
    category: 'Frontend',
    description: 'Personal developer portfolio built to present skills, projects, contact links, and recruiter-facing profile information.',
    tags: ['HTML', 'Portfolio'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/Portfolio' }],
    filter: 'frontend',
  },
  {
    id: 8,
    title: 'Resume Analyzer',
    category: 'Frontend / AI',
    description: 'JavaScript resume analysis tool designed to review resume content and support better role-fit improvements.',
    tags: ['JavaScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/Resume_analyzer' }],
    filter: 'frontend ai',
  },
  {
    id: 9,
    title: 'Food Ordering System',
    category: 'Full Stack',
    description: 'Java OOP project modeling menu browsing, order handling, checkout logic, and clean class-based structure.',
    tags: ['Java'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/food_ordering_system' }],
    filter: 'fullstack',
  },
  {
    id: 10,
    title: 'Sports Media Protection',
    category: 'AI / Python',
    description: 'Gemini-powered sports media protection console for detecting reused or unauthorized match-day visuals with audit history.',
    tags: ['Python'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/sports-media-protection' }],
    filter: 'ai python',
  },
  {
    id: 11,
    title: 'Krishi Backend',
    category: 'Full Stack',
    description: 'Python backend service supporting agriculture app workflows, server-side logic, and API-style data handling.',
    tags: ['Python', 'Mobile', 'Backend'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/krishi-backend' }],
    filter: 'fullstack python',
  },
  {
    id: 12,
    title: 'SamparkSetu',
    category: 'Flutter',
    description: 'Flutter communication app exploring structured connection flows, clean navigation, and user-friendly mobile screens.',
    tags: ['Dart', 'Mobile'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/SamparkSetu' }],
    filter: 'flutter',
  },
  {
    id: 13,
    title: 'New Safe Route',
    category: 'Frontend / Civic Tech',
    description: 'Frontend prototype for safer route planning with a focus on navigation awareness and user safety ideas.',
    tags: ['HTML', 'Civic Tech'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/New_Safe_Route' }],
    filter: 'frontend civic',
  },
  {
    id: 14,
    title: 'Unified Civil Issue Detection',
    category: 'Full Stack / Civic Tech',
    description: 'Civic-tech project for reporting, tracking, and organizing public infrastructure issues through digital workflows.',
    tags: ['TypeScript', 'Civic Tech'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/unified-civil-issue-detection' }],
    filter: 'fullstack civic',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Flutter', value: 'flutter' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'IoT', value: 'iot' },
  { label: 'AI', value: 'ai' },
  { label: 'Frontend', value: 'frontend' },
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.filter.includes(activeFilter));

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
    <Section id="projects" className="bg-gradient-to-b from-background to-background/50">
      <SectionTitle>Featured Work</SectionTitle>

      {/* Featured Projects */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {featuredProjects.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants}>
            <GlassCard className="h-full group relative overflow-hidden">
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant={linkIndex === 0 ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      {link.label === 'GitHub' && <i className="fab fa-github mr-2"></i>}
                      {link.label === 'Live Demo' && <ExternalLink className="w-4 h-4 mr-2" />}
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* All Projects Section */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-white">All Projects</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <p className="text-muted max-w-2xl">
          Browse the full collection of apps, AI proofs-of-concept, and practical tooling I built across web, mobile, IoT, and product-focused workflows.
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <GlassCard className="h-full group">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted text-sm line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Tag key={tagIndex}>{tag}</Tag>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links[0].url, '_blank')}
                      className="w-full"
                    >
                      <i className="fab fa-github mr-2"></i>
                      View on GitHub
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center pt-8">
          <Button
            variant="outline"
            onClick={() => window.open('https://github.com/arpitkumar28?tab=repositories', '_blank')}
          >
            <i className="fab fa-github mr-2"></i>
            View All Repositories
          </Button>
        </div>
      </div>
    </Section>
  );
};
