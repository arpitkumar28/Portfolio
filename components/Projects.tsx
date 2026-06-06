'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Play, ArrowRight, CheckCircle2, Zap, Shield, Users } from 'lucide-react';
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

export const Projects: React.FC = () => {
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
        className="space-y-24"
      >
        {featuredProjects.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants} className="relative">
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className={`bg-gradient-to-r ${project.gradient} text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg`}>
                  ⭐ Featured Project
                </div>
              </div>
            )}
            
            {/* Project Card */}
            <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500`}>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        <GradientText>{project.title}</GradientText>
                      </h3>
                      <p className="text-primary font-medium text-lg">{project.subtitle}</p>
                    </div>

                    {/* Problem Statement */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Problem Solved</h4>
                          <p className="text-muted text-sm leading-relaxed">{project.problem}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        Key Features
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-muted text-sm flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.links.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant={link.label === 'Live Demo' ? 'primary' : 'outline'}
                          size="lg"
                          onClick={() => window.open(link.url, '_blank')}
                          className="flex items-center gap-2"
                        >
                          {link.icon && <link.icon className="w-4 h-4" />}
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Section */}
      <div className="text-center pt-16">
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.open('https://github.com/arpitkumar28?tab=repositories', '_blank')}
          className="group"
        >
          <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
          View All Projects on GitHub
        </Button>
      </div>
    </Section>
  );
};
