'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, ArrowRight, Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Section, SectionTitle } from './ui/Section';
import { Button } from './ui/Button';
import ImageModal from './ui/ImageModal';

const featuredProjects = [
  {
    id: 16,
    title: 'Elevra',
    subtitle: 'Student Operating System for Academic Planning & Career Opportunities',
    category: 'Full-Stack / Web / Mobile / Backend',
    problem: 'Students often have academic information and career opportunities scattered across different platforms.',
    solution: 'Elevra brings exam planning, syllabus information, exam patterns, FAQs, internships, jobs, scholarships, hackathons, and fellowships into one organized student-oriented system.',
    result: 'A unified Student Operating System with web, mobile, backend, database, infrastructure, testing, and CI/CD layers.',
    features: ['Academic management', 'Opportunity discovery', 'Centralized student dashboard', 'JWT authentication', 'Web and Flutter mobile applications'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Dart', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    links: [{ label: 'View Case Study', url: '/elevra', icon: ArrowRight }],
    featured: true,
    gradient: 'from-orange-500 to-rose-500',
    status: 'Flagship Project',
    role: 'Software Developer / Product Builder',
    timeline: 'Project-based',
  },
  {
    id: 17,
    title: 'Axiora',
    subtitle: 'Knowledge & Innovation Discovery Platform',
    category: 'Full-Stack / Research / Infrastructure',
    problem: 'Useful technical knowledge is scattered across GitHub, research papers, datasets, tools, tutorials, and learning resources.',
    solution: 'Axiora follows a Discover → Verify → Analyze → Organize → Publish → Search workflow to acquire, normalize, validate, enrich, review, and publish useful technical content.',
    result: 'A knowledge discovery platform with an asynchronous content acquisition pipeline and searchable public sections for projects and research.',
    features: ['GitHub project discovery', 'Research paper indexing', 'Dataset and tool discovery', 'Duplicate detection', 'Quality and license checks', 'Admin review before publication'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'BullMQ', 'Redis', 'Vercel'],
    images: [
      '/assets/images/axiora/home-dashboard.png',
      '/assets/images/axiora/domains.png',
      '/assets/images/axiora/research.png',
      '/assets/images/axiora/resources.png',
      '/assets/images/axiora/ecosystem.png',
    ],
    links: [{ label: 'View Case Study', url: '/axiora', icon: ArrowRight }],
    featured: true,
    gradient: 'from-slate-600 to-slate-900',
    status: 'Flagship Project',
    role: 'Software Developer / Product Builder',
    timeline: 'Project-based',
  },
  {
    id: 1,
    title: 'GreenFlow AI',
    subtitle: 'AI Traffic Intelligence Platform',
    category: 'Smart City Infrastructure',
    images: [
      '/assets/images/greenflow-1.jpeg',
      '/assets/images/greenflow-2.jpeg',
      '/assets/images/greenflow-3.jpeg',
      '/assets/images/greenflow-4.jpeg',
      '/assets/images/greenflow-5.jpeg',
      '/assets/images/greenflow-6.jpeg',
    ],
    problem: 'Emergency vehicles lose critical minutes navigating congested urban streets. Cities lack real-time traffic intelligence to dynamically optimize signal timing and create green corridors when seconds matter.',
    solution: 'Built an intelligent traffic management platform that predicts congestion patterns before they form, optimizes signal timing in real-time, and automatically creates emergency green corridors. Architecture: Next.js frontend, Flutter mobile app, TensorFlow ML models, IoT sensor networks, and WebSocket-based real-time communication.',
    result: 'A unified web and mobile ecosystem for traffic monitoring, AI-assisted prediction, interactive maps, and emergency Green Corridor activation.',
    features: [
      'Real-time congestion prediction using ML',
      'Dynamic signal optimization',
      'Emergency green corridor automation',
      'Commuter mobile application'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'Flutter', 'WebSockets', 'OpenStreetMap', 'Leaflet', 'Supabase'],
    links: [
      { label: 'View Case Study', url: '/greenflow', icon: ArrowRight },
      { label: 'Live Demo', url: 'https://greenflow-ai.vercel.app', icon: Play },
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/Smart-Traffic-Management-System-with-Green-Corridor', icon: ExternalLink },
      { label: 'Demo Video', url: 'https://youtu.be/Qdv3hZ_4W2Y', icon: Play },
    ],
    featured: true,
    gradient: 'from-emerald-500 to-cyan-500',
    status: 'Production Ready',
    role: 'Full Stack Developer',
    timeline: '3 months',
  },
  // Temporarily removed due to 404 GitHub repository errors
  // {
  //   id: 2,
  //   title: 'Hospital Digital Attendance',
  //   subtitle: 'Healthcare Workforce Management',
  //   category: 'Healthcare Technology',
  //   problem: 'Hospitals rely on manual attendance systems that are error-prone, lack real-time visibility, and create administrative burden. Staff verification and location tracking remain significant operational challenges.',
  //   solution: 'Developed a comprehensive digital attendance platform with biometric authentication, geolocation verification, and NFC check-in/check-out. Implemented secure data storage, real-time staff tracking, and automated reporting. Architecture: Flutter with Riverpod state management, Firebase backend, and secure local storage for sensitive data.',
  //   result: 'Achieved 99.9% attendance accuracy through biometric verification and reduced manual paperwork by 80% with automated reporting and real-time staff monitoring.',
  //   features: [
  //     'Biometric authentication',
  //     'Geolocation verification',
  //     'NFC check-in/check-out',
  //     'Real-time staff tracking',
  //     'Automated reporting'
  //   ],
  //   techStack: ['Flutter', 'Riverpod', 'NFC', 'Geolocation', 'Firebase', 'Secure Storage'],
  //   links: [
  //     { label: 'View Case Study', url: '/hospital-attendance', icon: ArrowRight },
  //     { label: 'GitHub', url: 'https://github.com/arpitkumar28/Hospital_Digital_Attendence_System', icon: ExternalLink },
  //   ],
  //   featured: true,
  //   gradient: 'from-blue-500 to-indigo-500',
  //   status: 'Production Ready',
  //   role: 'Flutter Developer',
  //   timeline: '2 months',
  // },
  // {
  //   id: 3,
  //   title: 'NCC Buddy',
  //   subtitle: 'Cadet Management Platform',
  //   category: 'Defense Technology',
  //   problem: 'NCC cadets manage training schedules, attendance, and emergency communication through fragmented manual processes. Commanders lack real-time visibility into cadet status and location during training exercises.',
  //   solution: 'Built an integrated companion app with event scheduling, QR-based attendance tracking, location sharing, and emergency SOS functionality. Implemented admin dashboard for commanders to manage training activities. Architecture: Flutter with Firebase, Google Maps integration, QR scanner, and push notification system.',
  //   result: 'Streamlined training management by 60% and reduced emergency response time by 50% through unified event scheduling, QR-based attendance, and SOS features.',
  //   features: [
  //     'Event scheduling and reminders',
  //     'QR-based attendance tracking',
  //     'SOS emergency button',
  //     'Location sharing',
  //     'Admin dashboard'
  //   ],
  //   techStack: ['Flutter', 'Firebase', 'Google Maps', 'QR Scanner', 'Push Notifications', 'Firestore'],
  //   links: [
  //     { label: 'View Case Study', url: '/ncc-buddy', icon: ArrowRight },
  //     { label: 'GitHub', url: 'https://github.com/arpitkumar28/ncc_buddy', icon: ExternalLink },
  //   ],
  //   featured: true,
  //   gradient: 'from-orange-500 to-amber-500',
  //   status: 'In Development',
  //   role: 'Flutter Developer',
  //   timeline: '4 months',
  // },
  {
    id: 4,
    title: 'EduAI Nexus X',
    subtitle: 'AI-Powered Learning Platform',
    category: 'EdTech',
    problem: 'Students follow generic study paths that do not adapt to their learning pace or knowledge gaps. Real-time doubt resolution is unavailable, leading to inefficient study patterns and reduced learning outcomes.',
    solution: 'Architected an intelligent learning platform that creates personalized study paths using machine learning, provides 24/7 AI doubt resolution, and adapts difficulty based on student performance. Tech stack: Python with TensorFlow for ML, FastAPI backend, React frontend, PostgreSQL database, and OpenAI API for NLP.',
    result: 'A personalized learning experience combining modern web development, RAG, knowledge retrieval, and AI-based recommendations.',
    features: [
      'Personalized AI recommendations',
      'Real-time doubt resolution',
      'Progress analytics dashboard',
      'Adaptive learning paths',
      'Interactive study materials'
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'FastAPI', 'Python', 'RAG', 'Generative AI', 'Vector Database', 'REST APIs'],
    links: [
      { label: 'View Case Study', url: '/eduai-nexus', icon: ArrowRight },
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/Build_EduAI_Nexus_X_platform', icon: ExternalLink },
    ],
    featured: true,
    gradient: 'from-violet-500 to-purple-500',
    status: 'In Development',
    role: 'Full Stack Developer',
    timeline: '3 months',
  },
  {
    id: 14,
    title: 'CarePulse',
    subtitle: 'Hospital Digital Attendance & Management System',
    category: 'Healthcare Technology',
    problem: 'Hospital staff attendance and operational workflows benefit from a mobile-first, database-backed system.',
    solution: 'Designed and developed a Flutter application architecture with state management, authentication, backend integration, and staff workflow support.',
    result: 'A hospital-focused digital attendance and management platform built around practical mobile workflows.',
    features: ['Digital employee attendance', 'Authentication', 'Staff and user management', 'Backend API integration', 'Database-backed records'],
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'FastAPI', 'PostgreSQL', 'Prisma', 'REST APIs'],
    links: [
      { label: 'View Case Study', url: '/hospital-attendance', icon: ArrowRight },
    ],
    featured: true,
    gradient: 'from-blue-500 to-indigo-500',
    status: 'Project',
    role: 'Flutter Developer',
    timeline: 'Project-based',
  },
  {
    id: 15,
    title: 'SafeGuard',
    subtitle: 'AI-Powered Safety Navigation & Deterrent System',
    category: 'Safety Technology',
    problem: 'People need clearer safety context when making route and navigation decisions.',
    solution: 'Worked on a Flutter mobile experience with location-aware functionality, navigation, and AI-assisted safety recommendations.',
    result: 'A safety-navigation concept focused on intelligent route decisions and emergency workflows.',
    features: ['Safety-oriented route planning', 'Location-aware navigation', 'AI-assisted recommendations', 'Emergency workflows'],
    techStack: ['Flutter', 'Dart', 'AI', 'Location Services', 'Navigation', 'Geolocation'],
    links: [],
    featured: true,
    gradient: 'from-orange-500 to-amber-500',
    status: 'Concept',
    role: 'Flutter Developer',
    timeline: 'Project-based',
  },
];

const allProjects = [
  {
    id: 5,
    title: 'SamparkSetu',
    category: 'Civic Technology',
    description: 'Unified civic redressal ecosystem for reporting and managing public issues through structured complaint workflows.',
    tags: ['Flutter', 'Web Technologies', 'Backend APIs', 'Database'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/SamparkSetu' }],
    filter: 'flutter',
  },
  {
    id: 6,
    title: 'NCC Buddy',
    category: 'Mobile / NCC',
    description: 'Flutter companion application designed to provide useful digital tools, resources, and services for NCC students and cadets.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Authentication'],
    links: [{ label: 'Case Study', url: '/ncc-buddy' }],
    filter: 'flutter',
  },
  {
    id: 7,
    title: 'Hospital Management System',
    category: 'Java Desktop',
    description: 'Java-based hospital management application demonstrating OOP, desktop GUI development, and relational database integration.',
    tags: ['Java', 'Java Swing', 'MySQL', 'JDBC'],
    links: [],
    filter: 'fullstack',
  },
  {
    id: 8,
    title: 'Food Ordering System',
    category: 'Full Stack',
    description: 'Java OOP application implementing menu browsing, order management, and checkout workflows with clean class-based architecture.',
    tags: ['Java'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/food_ordering_system' }],
    filter: 'fullstack',
  },
  {
    id: 9,
    title: 'Sports Media Protection',
    category: 'AI / Python',
    description: 'Gemini-powered console for detecting unauthorized match-day visual reuse with audit trails and automated takedown workflows.',
    tags: ['Python'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/sports-media-protection' }],
    filter: 'ai python',
  },
  {
    id: 10,
    title: 'Krishi Backend',
    category: 'Full Stack',
    description: 'Python FastAPI backend supporting agriculture app with RESTful endpoints, data processing, and third-party service integrations.',
    tags: ['Python', 'Mobile', 'Backend'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/krishi-backend' }],
    filter: 'fullstack python',
  },
  {
    id: 11,
    title: 'IoT Vehicle Tracking System',
    category: 'IoT / Vehicle Safety',
    description: 'Real-time GPS vehicle tracking and emergency SOS concept using GPS, GSM, sensors, and embedded systems.',
    tags: ['Arduino', 'GPS', 'GSM', 'Sensors'],
    links: [],
    filter: 'iot',
  },
  {
    id: 12,
    title: 'New Safe Route',
    category: 'Frontend / Civic Tech',
    description: 'Route planning prototype prioritizing safety metrics with crime data integration and alternative path recommendations.',
    tags: ['HTML', 'Civic Tech'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/New_Safe_Route' }],
    filter: 'frontend civic',
  },
  {
    id: 13,
    title: 'Python Automation Projects',
    category: 'Python / Automation',
    description: 'A small collection of Python learning projects including a file organizer, basic chatbot, calculator, and data tools.',
    tags: ['Python', 'Automation'],
    links: [],
    filter: 'ai python',
  }, 
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Mobile', value: 'flutter' },
  { label: 'AI / GenAI', value: 'ai' },
  { label: 'Backend', value: 'backend' },
  { label: 'Web', value: 'web' },
  { label: 'Java', value: 'java' },
  { label: 'IoT', value: 'iot' },
];

export const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const openModal = (src: string, alt: string) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);
  const visibleProjects = selectedFilter === 'all'
    ? allProjects
    : allProjects.filter((project) => project.filter.includes(selectedFilter));

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
    <Section id="projects" className="bg-background py-20">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Selected systems</p>
          <SectionTitle className="mb-0 text-left">Projects</SectionTitle>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            Flagship builds up top, then every smaller project packed into a fast-scanning grid.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-background-card px-4 py-3 text-sm font-bold text-text-muted">
          {featuredProjects.length + allProjects.length} total builds
        </div>
      </div>

      {/* Featured Projects */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-5 lg:grid-cols-2"
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
              {/* Project Image */}
              <div>
                {(project as any).images && (project as any).images.length > 0 ? (
                    <div className="relative aspect-[16/8.5] overflow-hidden bg-background-elevated cursor-pointer" onClick={() => {
                    const imageSrc = (project as any).images[currentImageIndex[project.id] || 0];
                    if (imageSrc) openModal(imageSrc, project.title);
                  }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex[project.id] || 0}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={(project as any).images[currentImageIndex[project.id] || 0]}
                          alt={`${project.title} - Image ${currentImageIndex[project.id] || 0 + 1}`}
                          fill
                          className="object-cover transition duration-500 hover:scale-105"
                          quality={90}
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {(project as any).images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => ({
                              ...prev,
                              [project.id]: ((prev[project.id] || 0) - 1 + (project as any).images.length) % (project as any).images.length
                            }));
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                          aria-label={`Previous ${project.title} image`}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => ({
                              ...prev,
                              [project.id]: ((prev[project.id] || 0) + 1) % (project as any).images.length
                            }));
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                          aria-label={`Next ${project.title} image`}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <div className={`relative aspect-[16/8.5] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                    <div className="absolute inset-0 bg-black/20" />
                    {project.title === 'Elevra' && (
                      <div className="absolute right-8 top-7 hidden w-[46%] rounded-xl border border-white/30 bg-slate-950/35 p-3 shadow-2xl backdrop-blur-md sm:block">
                        <div className="flex gap-2"><span className="h-2 w-2 rounded-full bg-white/70" /><span className="h-2 w-2 rounded-full bg-white/40" /><span className="h-2 w-2 rounded-full bg-white/40" /></div>
                        <div className="mt-4 grid grid-cols-[0.35fr_1fr] gap-3"><div className="space-y-2"><span className="block h-2 rounded bg-orange-200/70" /><span className="block h-2 rounded bg-white/20" /><span className="block h-2 rounded bg-white/20" /><span className="block h-2 rounded bg-white/20" /></div><div className="space-y-3"><span className="block h-12 rounded-lg bg-orange-200/25" /><div className="grid grid-cols-2 gap-2"><span className="block h-9 rounded bg-white/15" /><span className="block h-9 rounded bg-white/15" /></div></div></div>
                      </div>
                    )}
                    {project.title === 'Axiora' && (
                      <div className="absolute right-8 top-7 hidden w-[46%] rounded-xl border border-white/25 bg-slate-950/40 p-3 shadow-2xl backdrop-blur-md sm:block">
                        <div className="flex items-center justify-between"><span className="h-2 w-16 rounded bg-cyan-200/70" /><span className="h-4 w-4 rounded-full border border-cyan-200/60" /></div>
                        <div className="mt-4 space-y-2"><div className="flex gap-2"><span className="h-10 flex-1 rounded bg-cyan-200/25" /><span className="h-10 flex-1 rounded bg-white/15" /></div><span className="block h-2 w-4/5 rounded bg-white/25" /><span className="block h-2 w-3/5 rounded bg-white/15" /><span className="block h-8 rounded bg-cyan-200/20" /></div>
                      </div>
                    )}
                    <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                      <div className="flex items-center justify-between">
                        <span className="rounded-md bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide backdrop-blur">
                          {project.category}
                        </span>
                        <ExternalLink className="h-5 w-5 opacity-70" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white/70">{project.status}</p>
                        <h4 className="mt-1 text-3xl font-black tracking-tight">{project.title}</h4>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span key={tech} className="rounded bg-black/25 px-2 py-1 text-[11px] font-bold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col space-y-4 p-5 md:p-6">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{project.category}</p>
                  <h3 className="font-display text-2xl font-black text-text-primary mb-2 tracking-tight">{project.title}</h3>
                  <p className="text-sm text-text-muted font-semibold">{project.subtitle}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Impact</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{(project as any).result || project.problem}</p>
                  </div>

                  {(project as any).solution && (
                    <div className="sr-only">
                      <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-text-muted text-base leading-relaxed">{(project as any).solution}</p>
                    </div>
                  )}

                  {(project as any).result && (
                    <div className="sr-only">
                      <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Result</h4>
                      <p className="text-text-muted text-base leading-relaxed font-medium">{(project as any).result}</p>
                    </div>
                  )}

                  <div>
                    <div className="flex max-h-[4.5rem] flex-wrap gap-1.5 overflow-hidden">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="text-xs font-semibold text-text-muted bg-background-elevated px-2.5 py-1 rounded-md border border-border/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-text-muted pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{(project as any).role || 'Developer'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{(project as any).timeline || 'Ongoing'}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant={link.label === 'Live Demo' ? 'primary' : 'outline'}
                        size="sm"
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : undefined}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-xs"
                      >
                        {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 rounded-xl border border-border bg-background-card p-4 md:p-5">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-black text-text-primary">More Projects</h3>
            <p className="mt-1 text-sm text-text-muted">Small cards so recruiters can scan the full range quickly.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setSelectedFilter(filter.value)}
                className={`rounded-md border px-3 py-2 text-xs font-bold transition-colors ${
                  selectedFilter === filter.value
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-background-elevated text-text-muted hover:border-primary hover:text-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="group flex min-h-[190px] flex-col justify-between rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/70 hover:bg-background-elevated"
              >
                <div>
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wide text-primary">{project.category}</p>
                      <h4 className="mt-1 text-base font-black text-text-primary">{project.title}</h4>
                    </div>
                    {project.links[0] && (
                      <a
                        href={project.links[0].url}
                        target={project.links[0].url.startsWith('http') ? '_blank' : undefined}
                        rel={project.links[0].url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-text-muted transition-colors group-hover:border-primary group-hover:text-primary"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="line-clamp-3 text-sm leading-relaxed text-text-muted">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-background-elevated px-2 py-1 text-[11px] font-bold text-text-tertiary">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={closeModal}
        />
      )}
    </Section>
  );
};
