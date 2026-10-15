'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { Section, SectionTitle } from './ui/Section';

const featuredProjects = [
  {
    id: 18,
    title: 'CrisisMesh',
    subtitle: 'AI-Powered Real-Time Disaster Management & Emergency Response Platform',
    category: 'Disaster Management / AI / IoT / Full Stack',
    problem: 'Emergency information becomes fragmented between citizens, responders, authorities, and physical infrastructure. Emergency response coordination lacks real-time visibility, creating critical delays in disaster response and resource allocation.',
    solution: 'CrisisMesh creates a unified real-time event pipeline connecting citizens, emergency responders, authorities, AI risk analysis, and IoT infrastructure through a single integrated platform. Architecture: Next.js web dashboard, Flutter mobile app, NestJS API backend, PostgreSQL/Supabase database, WebSocket real-time communication, MQTT IoT integration, and Python-based risk analysis engine.',
    result: 'A live demo of a disaster-management platform concept. The case study separates implemented workflows from mocked, partial, and unverified integrations; the repository is not currently published.',
    features: [
      'Real-time incident management and tracking',
      'Emergency SOS and alert system',
      'Live command map with WebSocket updates',
      'IoT telemetry and sensor integration',
      'AI/risk prediction engine',
      'Role-based access control (RBAC)',
      'Responder coordination platform',
      'Authority command center',
      'Web and mobile ecosystem',
      'Offline-capable mobile app'
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'Flutter', 'Dart', 'NestJS', 'PostgreSQL', 'Supabase', 'WebSockets', 'MQTT', 'Python', 'REST API', 'JWT', 'Leaflet', 'OpenStreetMap'],
    links: [
      { label: 'View Case Study', url: '/crisis-mesh', icon: ArrowRight },
      { label: 'Live Demo', url: 'https://crisis-mesh-eosin.vercel.app', icon: Play },
    ],
    featured: true,
    gradient: 'from-red-600 to-orange-500',
    status: 'Live demo',
    role: 'Full Stack Developer / System Architect',
    timeline: 'Project-based',
  },
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
    role: 'Software Engineer / Product Builder',
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
    role: 'Software Engineer / Product Builder',
    timeline: 'Project-based',
  },
  {
    id: 1,
    title: 'GreenFlow AI',
    subtitle: 'Smart Traffic Intelligence & Emergency Green Corridor',
    category: 'Traffic Intelligence / AI / Full Stack',
    images: [
      '/assets/images/greenflow-1.jpeg',
      '/assets/images/greenflow-2.jpeg',
      '/assets/images/greenflow-3.jpeg',
      '/assets/images/greenflow-4.jpeg',
      '/assets/images/greenflow-5.png',
      '/assets/images/greenflow-6.png',
    ],
    problem: 'Emergency vehicles lose critical minutes navigating congested urban streets. Cities lack real-time traffic intelligence to dynamically optimize signal timing and create green corridors when seconds matter.',
    solution: 'Built a traffic-management platform concept for monitoring congestion, exploring traffic analysis, and coordinating emergency green-corridor workflows across web and mobile experiences.',
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
    status: 'Project demo',
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
  //   result: 'Improved attendance workflows through biometric verification, automated reporting, and real-time staff monitoring.',
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
  //   result: 'Streamlined training management through unified event scheduling, QR-based attendance, and SOS features.',
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
    links: [
      { label: 'Case Study', url: '/ncc-buddy' },
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/ncc_buddy' },
    ],
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

const compactDescriptions: Record<string, string> = {
  CrisisMesh: 'A disaster response concept connecting incident reporting, command workflows, live maps, and responder coordination.',
  'GreenFlow AI': 'Traffic intelligence concept for congestion monitoring and emergency green-corridor workflows across web and mobile.',
  'EduAI Nexus X': 'An AI-assisted learning platform concept with adaptive study paths, doubt support, and progress insights.',
  CarePulse: 'A mobile-first hospital attendance and staff management application architecture.',
  Elevra: 'A student operating system bringing academic planning and career opportunities into one organized experience.',
  Axiora: 'A discovery platform for technical projects, research, datasets, tools, and learning resources.',
  'SafeGuard': 'A safety navigation concept exploring location-aware routes and emergency workflows.',
};

const compactFeaturedProjects = featuredProjects.filter((project) => ['CrisisMesh', 'GreenFlow AI'].includes(project.title));
const regularFeaturedProjects = featuredProjects.filter((project) => !['CrisisMesh', 'GreenFlow AI'].includes(project.title));
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const primaryTitles = ['CrisisMesh', 'GreenFlow AI', 'EduAI Nexus X', 'CarePulse', 'NCC Buddy', 'Food Ordering System'];
  const secondaryProjects = allProjects.filter((project) => !primaryTitles.includes(project.title));
  const visibleProjects = (showAllProjects ? allProjects : secondaryProjects)
    .filter((project) => selectedFilter === 'all' || project.filter.includes(selectedFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <Section id="projects" className="bg-background py-16 md:py-20">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Selected systems</p>
          <SectionTitle className="mb-0 text-left">Projects</SectionTitle>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            I build end-to-end product experiences across web, mobile, AI, security, and backend systems — with a focus on functionality, clarity, and real-world impact.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-background-card px-4 py-3 text-sm font-bold text-text-muted">
          {new Set([...featuredProjects, ...allProjects].map((project) => project.title)).size} product builds
        </div>
      </div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid gap-4 md:grid-cols-2">
        {compactFeaturedProjects.map((project) => <CompactFeaturedCard key={project.id} project={project} />)}
      </motion.div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regularFeaturedProjects.map((project) => {
          const screenshot = project.title === 'Axiora' ? '/assets/images/axiora/home-dashboard.png' : project.title === 'GreenFlow AI' ? '/assets/images/greenflow-1.jpeg' : project.title === 'CrisisMesh' ? '/assets/images/greenflow-1.svg' : null;
          return <article key={project.id} className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-background-card transition-colors duration-200 hover:border-primary/60 motion-reduce:transition-none">
            <ProjectThumbnail src={screenshot} alt={`${project.title} project thumbnail`} title={project.title} category={project.category} />
            <div className="flex flex-1 flex-col p-4">
              <ProjectHeading title={project.title} category={project.category} />
              <p className="mt-2 line-clamp-3 text-sm leading-5 text-text-muted">{compactDescriptions[project.title] || project.subtitle}</p>
              <ProjectTags tags={project.techStack} />
              <ProjectLinks links={project.links.filter((link) => link.url.startsWith('/') || /^https:\/\//.test(link.url))} />
            </div>
          </article>;
        })}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-background-card p-4 md:p-5">
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-black text-text-primary">More Projects</h3>
            <p className="mt-1 text-sm text-text-muted">A compact index of additional builds and experiments.</p>
            <button type="button" onClick={() => setShowAllProjects((show) => !show)} className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{showAllProjects ? 'Show fewer projects' : 'View all projects'} <ArrowRight className="h-4 w-4" /></button>
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

        <motion.div layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="group flex min-w-0 flex-col justify-between rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/70 hover:bg-background-elevated motion-reduce:transition-none"
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
                  {project.tags.slice(0, 4).map((tag) => (
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

    </Section>
  );
};

function CompactFeaturedCard({ project }: { project: (typeof featuredProjects)[number] }) {
  const screenshot = project.title === 'GreenFlow AI' ? project.images?.[0] || null : '/assets/images/greenflow-1.svg';
  return <motion.article variants={itemVariants} className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-primary/25 bg-background-card transition-colors duration-200 hover:border-primary/60 motion-reduce:transition-none">
    <ProjectThumbnail src={screenshot} alt={`${project.title} project thumbnail`} title={project.title} category={project.category} featured />
    <div className="flex flex-1 flex-col p-4 md:p-5">
      <ProjectHeading title={project.title} category={project.category} />
      <p className="mt-2 line-clamp-3 text-sm leading-5 text-text-muted">{compactDescriptions[project.title]}</p>
      <ProjectTags tags={project.techStack} />
      <ProjectLinks links={project.links.filter((link) => link.url.startsWith('/') || /^https:\/\//.test(link.url))} />
    </div>
  </motion.article>;
}

function ProjectThumbnail({ src, alt, title, category, featured = false }: { src: string | null; alt: string; title: string; category: string; featured?: boolean }) {
  return <div className={`relative aspect-video overflow-hidden bg-background-elevated ${featured ? 'border-b border-primary/20' : 'border-b border-border'}`}>
    {src ? <Image src={src} alt={alt} fill unoptimized sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /> : <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.18),_transparent_55%),linear-gradient(135deg,_#171d1a,_#0d1110)]" role="img" aria-label={`${title} branded project thumbnail`} />}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
      <div className="min-w-0"><span className="block truncate text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-300">{category}</span><span className="mt-1 block truncate text-lg font-black tracking-tight text-white">{title}</span></div>
      {featured && <span className="shrink-0 rounded-full border border-emerald-300/30 bg-black/40 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-200">Featured</span>}
    </div>
  </div>;
}

function ProjectHeading({ title, category }: { title: string; category: string }) {
  return <div className="flex min-w-0 items-baseline justify-between gap-3"><h3 className="truncate font-display text-lg font-black tracking-tight text-text-primary">{title}</h3><span className="shrink-0 truncate text-[10px] font-bold uppercase tracking-wide text-primary">{category}</span></div>;
}

function ProjectTags({ tags }: { tags: string[] }) {
  return <div className="mt-3 flex flex-wrap gap-1.5">{tags.slice(0, 4).map((tag) => <span key={tag} className="rounded border border-border bg-background-elevated px-2 py-1 text-[10px] font-semibold text-text-muted">{tag}</span>)}</div>;
}

function ProjectLinks({ links }: { links: { label: string; url: string }[] }) {
  return <div className="mt-auto flex flex-wrap gap-3 border-t border-border pt-3 mt-4">{links.filter((link) => ['Live Demo', 'Case Study', 'View Case Study', 'GitHub', 'Source Code'].includes(link.label)).map((link) => <a key={`${link.label}-${link.url}`} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-1 text-xs font-bold text-text-secondary transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{link.label === 'GitHub' ? 'Source Code' : link.label === 'View Case Study' ? 'Case Study' : link.label}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>)}</div>;
}
