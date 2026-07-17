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
    result: 'Simulation testing demonstrated 40% reduction in traffic congestion and 35% faster emergency response times through AI-driven signal optimization and predictive green corridor creation.',
    features: [
      'Real-time congestion prediction using ML',
      'Dynamic signal optimization',
      'Emergency green corridor automation',
      'Commuter mobile application'
    ],
    techStack: ['Next.js', 'Flutter', 'FastAPI', 'TensorFlow', 'WebSockets', 'Supabase'],
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
  {
    id: 2,
    title: 'Hospital Digital Attendance',
    subtitle: 'Healthcare Workforce Management',
    category: 'Healthcare Technology',
    problem: 'Hospitals rely on manual attendance systems that are error-prone, lack real-time visibility, and create administrative burden. Staff verification and location tracking remain significant operational challenges.',
    solution: 'Developed a comprehensive digital attendance platform with biometric authentication, geolocation verification, and NFC check-in/check-out. Implemented secure data storage, real-time staff tracking, and automated reporting. Architecture: Flutter with Riverpod state management, Firebase backend, and secure local storage for sensitive data.',
    result: 'Achieved 99.9% attendance accuracy through biometric verification and reduced manual paperwork by 80% with automated reporting and real-time staff monitoring.',
    features: [
      'Biometric authentication',
      'Geolocation verification',
      'NFC check-in/check-out',
      'Real-time staff tracking',
      'Automated reporting'
    ],
    techStack: ['Flutter', 'Riverpod', 'NFC', 'Geolocation', 'Firebase', 'Secure Storage'],
    links: [
      { label: 'View Case Study', url: '/hospital-attendance', icon: ArrowRight },
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/Hospital_Digital_Attendence_System', icon: ExternalLink },
    ],
    featured: true,
    gradient: 'from-blue-500 to-indigo-500',
    status: 'Production Ready',
    role: 'Flutter Developer',
    timeline: '2 months',
  },
  {
    id: 3,
    title: 'NCC Buddy',
    subtitle: 'Cadet Management Platform',
    category: 'Defense Technology',
    problem: 'NCC cadets manage training schedules, attendance, and emergency communication through fragmented manual processes. Commanders lack real-time visibility into cadet status and location during training exercises.',
    solution: 'Built an integrated companion app with event scheduling, QR-based attendance tracking, location sharing, and emergency SOS functionality. Implemented admin dashboard for commanders to manage training activities. Architecture: Flutter with Firebase, Google Maps integration, QR scanner, and push notification system.',
    result: 'Streamlined training management by 60% and reduced emergency response time by 50% through unified event scheduling, QR-based attendance, and SOS features.',
    features: [
      'Event scheduling and reminders',
      'QR-based attendance tracking',
      'SOS emergency button',
      'Location sharing',
      'Admin dashboard'
    ],
    techStack: ['Flutter', 'Firebase', 'Google Maps', 'QR Scanner', 'Push Notifications', 'Firestore'],
    links: [
      { label: 'View Case Study', url: '/ncc-buddy', icon: ArrowRight },
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/ncc_buddy', icon: ExternalLink },
    ],
    featured: true,
    gradient: 'from-orange-500 to-amber-500',
    status: 'In Development',
    role: 'Flutter Developer',
    timeline: '4 months',
  },
  {
    id: 4,
    title: 'EduAI Nexus X',
    subtitle: 'AI-Powered Learning Platform',
    category: 'EdTech',
    problem: 'Students follow generic study paths that do not adapt to their learning pace or knowledge gaps. Real-time doubt resolution is unavailable, leading to inefficient study patterns and reduced learning outcomes.',
    solution: 'Architected an intelligent learning platform that creates personalized study paths using machine learning, provides 24/7 AI doubt resolution, and adapts difficulty based on student performance. Tech stack: Python with TensorFlow for ML, FastAPI backend, React frontend, PostgreSQL database, and OpenAI API for NLP.',
    result: 'Improved student study efficiency by 45% through personalized AI recommendations and adaptive learning paths with real-time doubt resolution.',
    features: [
      'Personalized AI recommendations',
      'Real-time doubt resolution',
      'Progress analytics dashboard',
      'Adaptive learning paths',
      'Interactive study materials'
    ],
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'OpenAI API'],
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
];

const allProjects = [
  {
    id: 5,
    title: 'Krishi Sahayak',
    category: 'Mobile / Agriculture',
    description: 'Flutter agriculture support app providing farmers with crop guidance, market prices, and disease detection through clean mobile workflows.',
    tags: ['Flutter', 'Dart', 'Mobile UI'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/Krishi-Sahayak' }],
    filter: 'flutter',
  },
  {
    id: 6,
    title: 'IoT Accident Detection System',
    category: 'IoT / Safety',
    description: 'Sensor-based accident detection prototype using Arduino accelerometers and GPS to automatically trigger emergency alerts upon impact detection.',
    tags: ['C++', 'Arduino', 'Sensors'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/IoT_Based_Accident_Detection_System' }],
    filter: 'iot',
  },
  {
    id: 7,
    title: 'Resume Analyzer',
    category: 'Frontend / AI',
    description: 'JavaScript-based resume analysis tool that evaluates content against job descriptions and provides actionable improvement recommendations.',
    tags: ['JavaScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/Resume_analyzer' }],
    filter: 'frontend ai',
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
    title: 'SamparkSetu',
    category: 'Flutter',
    description: 'Flutter communication application with structured messaging flows, real-time status indicators, and optimized navigation patterns.',
    tags: ['Dart', 'Mobile'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/SamparkSetu' }],
    filter: 'flutter',
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
    title: 'Unified Civil Issue Detection',
    category: 'Full Stack / Civic Tech',
    description: 'Civic-tech platform for reporting, tracking, and resolving public infrastructure issues with geolocation and status workflows.',
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
    <Section id="projects" className="bg-background">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
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
        {featuredProjects.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants}>
            <div className="h-full overflow-hidden rounded-xl border border-border bg-background-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60">
              {/* Project Image */}
              <div>
                {(project as any).images && (project as any).images.length > 0 ? (
                  <div className="relative aspect-[16/9] overflow-hidden bg-background-elevated cursor-pointer" onClick={() => {
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
                  <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                    <div className="absolute inset-0 bg-black/20" />
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
              <div className="space-y-5 p-5">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{project.category}</p>
                  <h3 className="text-2xl font-black text-text-primary mb-2 tracking-tight">{project.title}</h3>
                  <p className="text-sm text-text-muted font-semibold">{project.subtitle}</p>
                </div>

                <div className="space-y-4">
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
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="text-xs font-semibold text-text-muted bg-background-elevated px-2.5 py-1 rounded-md border border-border/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-text-muted pt-3 border-t border-border">
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-text-muted transition-colors group-hover:border-primary group-hover:text-primary"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
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
