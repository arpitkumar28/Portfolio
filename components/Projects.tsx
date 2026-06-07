'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Play, ArrowRight, CheckCircle2, Zap, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';
import { Button } from './ui/Button';
import { Tag } from './ui/Tag';
import { GradientText } from './ui/GradientText';

const featuredProjects = [
  {
    id: 1,
    title: 'Smart Traffic Management System',
    subtitle: 'GreenFlow AI',
    category: 'AI / Smart City',
    image: '/assets/images/greenflow-1.jpeg',
    problem: 'Urban traffic congestion causes significant delays, increased fuel consumption, and critical delays for emergency vehicles navigating through crowded streets.',
    features: [
      'AI-powered congestion prediction using real-time traffic data',
      'Dynamic signal optimization for smooth traffic flow',
      'Emergency green corridor creation for ambulances',
      'Real-time dashboard with traffic analytics',
      'Mobile app for commuters and traffic controllers'
    ],
    techStack: ['Next.js', 'Flutter', 'FastAPI', 'Supabase', 'WebSockets', 'TensorFlow'],
    links: [
      { label: 'Live Demo', url: 'https://greenflow-ai.vercel.app', icon: Play },
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/Smart-Traffic-Management-System-with-Green-Corridor', icon: ExternalLink },
      { label: 'Demo Video', url: 'https://youtu.be/Qdv3hZ_4W2Y', icon: Play },
    ],
    featured: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Hospital Digital Attendance System',
    subtitle: 'Healthcare Management',
    category: 'Flutter / Healthcare',
    image: '/assets/images/greenflow-2.jpeg',
    problem: 'Manual attendance tracking in hospitals is inefficient, prone to errors, and lacks real-time monitoring capabilities for staff and patient management.',
    features: [
      'Biometric authentication for secure login',
      'Geolocation-based attendance verification',
      'NFC support for quick check-in/check-out',
      'Real-time staff location tracking',
      'Secure data storage with encryption',
      'Light/dark theme support'
    ],
    techStack: ['Flutter', 'Riverpod', 'NFC', 'Geolocation', 'Firebase', 'Secure Storage'],
    links: [
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/Hospital_Digital_Attendence_System', icon: ExternalLink },
    ],
    featured: true,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 3,
    title: 'NCC Buddy',
    subtitle: 'Cadet Companion App',
    category: 'Flutter / Cadet Utility',
    image: '/assets/images/ncc-buddy-preview.svg',
    problem: 'NCC cadets struggle with managing training schedules, attendance, events, and emergency communication through fragmented systems and manual processes.',
    features: [
      'Firebase authentication and secure user management',
      'Event scheduling and reminders',
      'Attendance tracking with QR code scanner',
      'Google Maps integration for location tracking',
      'SOS emergency button with location sharing',
      'In-app chat and training resources',
      'Admin dashboard for management'
    ],
    techStack: ['Flutter', 'Firebase', 'Google Maps', 'QR Scanner', 'Push Notifications', 'Firestore'],
    links: [
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/ncc_buddy', icon: ExternalLink },
    ],
    featured: true,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'EduAI Nexus X',
    subtitle: 'AI-Powered Learning Platform',
    category: 'AI / Education',
    image: '/assets/images/greenflow-3.jpeg',
    problem: 'Students lack personalized learning paths and real-time AI assistance, leading to inefficient study patterns and reduced learning outcomes.',
    features: [
      'AI-powered personalized learning recommendations',
      'Real-time doubt resolution with AI chatbot',
      'Progress tracking and analytics dashboard',
      'Interactive study materials and quizzes',
      'Collaborative learning features',
      'Adaptive difficulty adjustment'
    ],
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'OpenAI API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/Build_EduAI_Nexus_X_platform', icon: ExternalLink },
    ],
    featured: true,
    gradient: 'from-green-500 to-teal-500',
  },
];

const allProjects = [
  {
    id: 5,
    title: 'Krishi Sahayak',
    category: 'Mobile / Agriculture',
    description: 'Built a Flutter agriculture support app focused on farmer guidance, simple mobile workflows, and clean access to useful crop-related information.',
    tags: ['Flutter', 'Dart', 'Mobile UI'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/Krishi-Sahayak' }],
    filter: 'flutter',
  },
  {
    id: 6,
    title: 'IoT Accident Detection System',
    category: 'IoT / Safety',
    description: 'Created a sensor-based accident detection prototype using IoT concepts to identify impact events and support quicker emergency alert workflows.',
    tags: ['C++', 'Arduino', 'Sensors'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/IoT_Based_Accident_Detection_System' }],
    filter: 'iot',
  },
  {
    id: 7,
    title: 'Resume Analyzer',
    category: 'Frontend / AI',
    description: 'JavaScript resume analysis tool designed to review resume content and support better role-fit improvements.',
    tags: ['JavaScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/Resume_analyzer' }],
    filter: 'frontend ai',
  },
  {
    id: 8,
    title: 'Food Ordering System',
    category: 'Full Stack',
    description: 'Java OOP project modeling menu browsing, order handling, checkout logic, and clean class-based structure.',
    tags: ['Java'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/food_ordering_system' }],
    filter: 'fullstack',
  },
  {
    id: 9,
    title: 'Sports Media Protection',
    category: 'AI / Python',
    description: 'Gemini-powered sports media protection console for detecting reused or unauthorized match-day visuals with audit history.',
    tags: ['Python'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/sports-media-protection' }],
    filter: 'ai python',
  },
  {
    id: 10,
    title: 'Krishi Backend',
    category: 'Full Stack',
    description: 'Python backend service supporting agriculture app workflows, server-side logic, and API-style data handling.',
    tags: ['Python', 'Mobile', 'Backend'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/krishi-backend' }],
    filter: 'fullstack python',
  },
  {
    id: 11,
    title: 'SamparkSetu',
    category: 'Flutter',
    description: 'Flutter communication app exploring structured connection flows, clean navigation, and user-friendly mobile screens.',
    tags: ['Dart', 'Mobile'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/SamparkSetu' }],
    filter: 'flutter',
  },
  {
    id: 12,
    title: 'New Safe Route',
    category: 'Frontend / Civic Tech',
    description: 'Frontend prototype for safer route planning with a focus on navigation awareness and user safety ideas.',
    tags: ['HTML', 'Civic Tech'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/New_Safe_Route' }],
    filter: 'frontend civic',
  },
  {
    id: 13,
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Section id="projects" className="bg-gradient-to-b from-background to-background/50 py-20">
      <div className="text-center mb-16">
        <SectionTitle>Featured Projects</SectionTitle>
        <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
          A showcase of my best work, solving real-world problems with modern technology
        </p>
      </div>

      {/* Featured Projects - Premium Showcase */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-6"
      >
        {featuredProjects.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants} className="relative">
            {/* Project Card */}
            <motion.div
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-500 h-full group`}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${project.gradient} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                      ⭐ Featured
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-5 flex flex-col">
                <div className="space-y-4 flex-1">
                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      <GradientText>{project.title}</GradientText>
                    </h3>
                    <p className="text-primary text-sm">{project.subtitle}</p>
                  </div>

                  {/* Problem Statement */}
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-start gap-2">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-20 flex-shrink-0`}>
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-xs mb-1">Problem Solved</h4>
                        <p className="text-muted text-xs leading-relaxed line-clamp-2">{project.problem}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-white font-semibold text-xs mb-2 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-muted text-xs flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold text-xs mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-3 mt-3 border-t border-white/10">
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant={link.label === 'Live Demo' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => window.open(link.url, '_blank')}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5"
                    >
                      {link.icon && <link.icon className="w-3 h-3" />}
                      {link.label}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('all-projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5"
                  >
                    <ArrowRight className="w-3 h-3" />
                    View All Projects
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* All Projects Section */}
      <div id="all-projects" className="space-y-8 pt-24">
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
                      {project.tags.map((tag: string, tagIndex: number) => (
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
