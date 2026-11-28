'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Play, ShieldCheck, Activity, BrainCircuit, Smartphone, Sprout, MapPin, Code2, GraduationCap, HeartPulse, BookOpen, Building2, Utensils, CarFront, Network, type LucideIcon } from 'lucide-react';
import { Section, SectionTitle } from './ui/Section';
import { AmbientTechBackdrop } from './ui/AmbientTechBackdrop';

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
    status: 'Flagship Project',
    role: 'Software Engineer / Product Builder',
    timeline: 'Project-based',
  },
  {
    id: 1,
    title: 'GreenFlow AI',
    subtitle: 'Traffic dashboard and emergency corridor workflow concept',
    category: 'Traffic Intelligence / AI / Full Stack',
    images: [
      '/assets/images/greenflow-1.jpeg',
      '/assets/images/greenflow-2.jpeg',
      '/assets/images/greenflow-3.jpeg',
      '/assets/images/greenflow-4.jpeg',
      '/assets/images/greenflow-5.png',
      '/assets/images/greenflow-6.png',
    ],
    problem: 'Traffic congestion and fragmented information can complicate route and signal coordination.',
    solution: 'The supplied screenshots show traffic dashboard interfaces and explore emergency green-corridor workflows. Live traffic feeds, deployed signal control, mobile integrations, and predictive services are unverified here.',
    result: 'An interface prototype documented by local screenshots. No model evaluation or operational performance result is claimed.',
    features: [
      'Traffic dashboard interface',
      'Emergency corridor workflow concept',
      'Proposed traffic analysis direction'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'Flutter', 'WebSockets', 'OpenStreetMap', 'Leaflet', 'Supabase'],
    links: [
      { label: 'View Case Study', url: '/greenflow', icon: ArrowRight },
      { label: 'Live Demo', url: 'https://greenflow-ai.vercel.app', icon: Play },
      { label: 'GitHub', url: 'https://github.com/arpitkumar28/Smart-Traffic-Management-System-with-Green-Corridor', icon: ExternalLink },
      { label: 'Demo Video', url: 'https://youtu.be/Qdv3hZ_4W2Y', icon: Play },
    ],
    featured: true,
    status: 'Project demo',
    role: 'Full Stack Developer',
    timeline: '3 months',
  },
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
    status: 'In Development',
    role: 'Full Stack Developer',
    timeline: '3 months',
  },
];

const allProjects = [
  {
    id: 19,
    title: 'SOC Log Analyzer',
    category: 'Cybersecurity / SOC Operations',
    description: 'Python CLI for parsing Linux SSH authentication logs, counting failed and successful logins, flagging source IPs above a configurable failure threshold, surfacing frequently targeted usernames, and exporting CSV reports.',
    tags: ['Python 3', 'Linux', 'SSH Logs', 'CSV', 'Detection Logic'],
    links: [{ label: 'GitHub', url: 'https://github.com/arpitkumar28/soc-log-analyzer' }],
    filter: 'security python',
  },
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
  {
    id: 14,
    title: 'CarePulse',
    category: 'Healthcare / Mobile Concept',
    description: 'A mobile-first hospital attendance and staff workflow concept. Connected identity, location, attendance, and backend services are not verified in this repository.',
    tags: ['Flutter', 'Dart', 'Riverpod'],
    links: [{ label: 'Case Study', url: '/hospital-attendance' }],
    filter: 'flutter',
  },
  {
    id: 15,
    title: 'SafeGuard',
    category: 'Safety / Mobile Concept',
    description: 'A Flutter concept exploring safety-oriented route planning, location-aware navigation, and emergency workflows.',
    tags: ['Flutter', 'Dart', 'Navigation'],
    links: [],
    filter: 'flutter',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Mobile', value: 'flutter' },
  { label: 'AI / GenAI', value: 'ai' },
  { label: 'Security', value: 'security' },
  { label: 'Backend', value: 'backend' },
  { label: 'Web', value: 'web' },
  { label: 'Java', value: 'java' },
  { label: 'IoT', value: 'iot' },
];

const projectIcons: Record<string, LucideIcon> = {
  'GreenFlow AI': Activity, 'EduAI Nexus X': BrainCircuit,
  'CarePulse': HeartPulse, 'SafeGuard': ShieldCheck, 'Elevra': GraduationCap,
  'Axiora': Network, 'SamparkSetu': Building2, 'NCC Buddy': Smartphone,
  'Hospital Management System': HeartPulse, 'Food Ordering System': Utensils,
  'Sports Media Protection': ShieldCheck, 'Krishi Backend': Sprout,
  'IoT Vehicle Tracking System': CarFront, 'New Safe Route': MapPin,
  'Python Automation Projects': Code2,
  'SOC Log Analyzer': ShieldCheck,
};

const compactDescriptions: Record<string, string> = {
  'GreenFlow AI': 'A traffic dashboard prototype exploring congestion views and emergency corridor workflows.',
  'EduAI Nexus X': 'An AI-assisted learning platform concept with adaptive study paths, doubt support, and progress insights.',
  CarePulse: 'A mobile-first concept for hospital attendance and staff workflow management.',
  Elevra: 'A student operating system bringing academic planning and career opportunities into one organized experience.',
  Axiora: 'A discovery platform for technical projects, research, datasets, tools, and learning resources.',
  'SafeGuard': 'A safety navigation concept exploring location-aware routes and emergency workflows.',
};

const featuredCovers: Record<string, { src: string; fit?: 'cover' | 'contain' }> = {
  'GreenFlow AI': { src: '/assets/images/greenflow-1.jpeg' },
  Elevra: { src: '/assets/images/project-elevra.svg', fit: 'contain' },
  Axiora: { src: '/assets/images/axiora/home-dashboard.png' },
  'EduAI Nexus X': { src: '/assets/images/project-eduai-nexus-x.svg', fit: 'contain' },
};

export const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const primaryTitles = ['GreenFlow AI', 'EduAI Nexus X'];
  const secondaryProjects = allProjects.filter((project) => !primaryTitles.includes(project.title));
  const filteredSecondaryProjects = secondaryProjects
    .filter((project) => selectedFilter === 'all' || project.filter.includes(selectedFilter));
  const visibleProjects = showAllProjects ? filteredSecondaryProjects : filteredSecondaryProjects.slice(0, 3);

  return (
    <Section id="projects" className="ambient-section bg-background py-16 md:py-20">
      <AmbientTechBackdrop variant="projects" />
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Selected work</p>
          <SectionTitle className="mb-0 text-left">Projects</SectionTitle>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
            Selected product work and hands-on security practice. Project stages are labeled clearly, with code, demos, or case studies linked where available.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-background-card px-4 py-3">
          <span className="font-display text-2xl font-black text-primary">{new Set([...featuredProjects, ...allProjects].map((project) => project.title)).size}</span>
          <span className="text-xs font-bold uppercase leading-tight tracking-wider text-text-muted">projects<br />&amp; builds</span>
        </div>
      </div>

      <div className="mb-3 mt-9 flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">Featured projects</h3>
        <span className="h-px flex-1 bg-border" />
      </div>
      <motion.div layout className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {featuredProjects.map((project, index) => <FeaturedProjectCard key={project.id} project={project} index={index} />)}
      </motion.div>

      <div className="mt-10 rounded-xl border border-border bg-background-card p-4 md:p-5">
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-black text-text-primary">More Projects</h3>
            <p className="mt-1 text-sm text-text-muted">Browse the rest of the portfolio by discipline.</p>
            <button type="button" onClick={() => setShowAllProjects((show) => !show)} className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{showAllProjects ? 'Show fewer projects' : `View all ${filteredSecondaryProjects.length} additional projects`} <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div aria-label="Filter projects by category" className="-mx-1 flex max-w-full flex-nowrap gap-2 overflow-x-auto px-1 pb-1 md:mx-0 md:flex-wrap md:justify-end md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setSelectedFilter(filter.value)}
                aria-pressed={selectedFilter === filter.value}
                className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-bold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  selectedFilter === filter.value
                    ? 'border-primary bg-primary text-background shadow-[0_4px_16px_rgb(var(--color-primary)/.2)]'
                    : 'border-border bg-background-elevated/80 text-text-muted hover:border-primary/70 hover:text-primary'
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
                <ProjectThumbnail title={project.title} category={project.category} />
                <div className="flex flex-1 flex-col p-4">
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
                  <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="rounded bg-background-elevated px-2 py-1 text-[11px] font-bold text-text-tertiary">
                      {tag}
                    </span>
                  ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </Section>
  );
};

function FeaturedProjectCard({ project, index }: { project: (typeof featuredProjects)[number]; index: number }) {
  const cover = featuredCovers[project.title];
  const fit = cover.fit === 'contain' ? 'object-contain p-5' : 'object-cover';

  return <motion.article
    initial={{ opacity: 0, y: 18, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4 }}
    className="project-card group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background-card"
  >
    <div className="project-feature-media relative aspect-[16/10] overflow-hidden border-b border-border bg-background-elevated">
      <img src={cover.src} alt={`${project.title} preview`} loading="lazy" className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.035] ${fit}`} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-card/90 via-transparent to-black/10" />
      <span className="absolute left-3 top-3 max-w-[75%] truncate rounded-full border border-primary/30 bg-background-card/90 px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-[0.12em] text-primary">{project.category}</span>
      <span className="absolute bottom-3 right-3 rounded-full border border-border bg-background-card/90 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-text-secondary">{project.status}</span>
    </div>
    <div className="flex flex-1 flex-col p-4">
      <h3 className="font-display text-lg font-black leading-tight text-text-primary">{project.title}</h3>
      <p className="mt-2 line-clamp-3 min-h-[3.75rem] text-xs leading-relaxed text-text-muted">{compactDescriptions[project.title] || project.subtitle}</p>
      <div className="mt-3 flex min-h-6 flex-wrap gap-1.5">
        {project.techStack.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-border bg-background-elevated px-2 py-1 text-[9px] font-bold text-text-secondary">{tag}</span>)}
      </div>
      <ProjectLinks links={project.links.filter((link) => link.url.startsWith('/') || /^https:\/\//.test(link.url))} />
    </div>
  </motion.article>;
}

function ProjectThumbnail({ title, category, featured = false }: { title: string; category: string; featured?: boolean }) {
  const ProjectIcon = projectIcons[title] || Code2;
  return <div className={`project-thumbnail relative flex aspect-[16/7] items-center gap-3 overflow-hidden border-b bg-[linear-gradient(135deg,#191c24,#10131a)] px-3 py-4 sm:gap-4 sm:px-5 ${featured ? 'border-primary/20' : 'border-border'}`}>
    <span className="project-icon-chip inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary sm:h-12 sm:w-12" aria-hidden="true"><ProjectIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} /></span>
    <div className="min-w-0 flex-1">
      <span className="block line-clamp-2 text-[9px] font-bold uppercase leading-tight tracking-[0.1em] text-primary/90 sm:text-[10px] sm:tracking-[0.14em]">{category}</span>
      <span className="mt-1 block line-clamp-2 text-base font-black leading-tight tracking-tight text-text-primary sm:text-lg">{title}</span>
    </div>
    <div className="hidden lg:block"><ProjectMotif title={title} /></div>
    {featured && <span className="shrink-0 rounded-full border border-primary/25 bg-background/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">Featured</span>}
  </div>;
}

function ProjectMotif({ title }: { title: string }) {
  const motif = title === 'GreenFlow AI' ? 'routes'
    : title === 'EduAI Nexus X' ? 'learning'
      : title === 'Axiora' ? 'network'
        : title === 'Elevra' ? 'dashboard'
          : 'nodes';

  return <svg className="project-art-motif hidden h-full w-[38%] max-w-[180px] shrink-0 overflow-visible text-primary sm:block" viewBox="0 0 180 92" fill="none" aria-hidden="true">
    {motif === 'routes' && <>
      <path d="M16 82 52 12M68 82l18-70M118 82l-4-70M164 82l-30-70" className="text-text-muted" stroke="currentColor" strokeWidth="2" strokeDasharray="5 7" />
      <path d="M25 70c25-15 42-14 62-2s38 10 68-17" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="25" cy="70" r="5" fill="currentColor" /><circle cx="155" cy="51" r="5" fill="currentColor" />
      <circle cx="88" cy="68" r="3" className="text-text-primary" fill="currentColor" />
    </>}
    {motif === 'learning' && <>
      <path d="M90 25c-17-12-34-13-54-8v50c20-5 37-4 54 8m0-50c17-12 34-13 54-8v50c-20-5-37-4-54 8m0-50v50" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M47 31h25M47 42h23M108 31h25M108 42h20" className="text-text-muted" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="90" cy="75" r="4" fill="currentColor" />
    </>}
    {motif === 'network' && <>
      <path d="m35 27 43 15 37-23m-37 23 27 35m10-58 26 24m-63-1-39 27m39-27 48-23" className="text-text-muted" stroke="currentColor" strokeWidth="2" />
      <circle cx="35" cy="27" r="7" fill="currentColor" /><circle cx="78" cy="42" r="9" fill="currentColor" />
      <circle cx="115" cy="19" r="6" fill="currentColor" /><circle cx="142" cy="43" r="7" fill="currentColor" />
      <circle cx="105" cy="77" r="6" fill="currentColor" /><circle cx="39" cy="69" r="5" fill="currentColor" />
    </>}
    {motif === 'dashboard' && <>
      <rect x="26" y="17" width="128" height="60" rx="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M26 33h128M43 26h.1M51 26h.1M59 26h.1" className="text-text-muted" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M43 64V52m17 12V43m17 21V49m17 15V38m17 26V46m17 18V34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="m43 45 17-9 17 6 17-12 17 8 17-12" stroke="currentColor" strokeWidth="2" />
    </>}
    {motif === 'nodes' && <>
      <circle cx="90" cy="46" r="24" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="90" cy="46" r="8" fill="currentColor" />
      <circle cx="34" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="146" cy="23" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="72" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="145" cy="70" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="m40 27 28 12m44 0 28-13M42 69l27-13m42 0 28 12" className="text-text-muted" stroke="currentColor" strokeWidth="2" />
    </>}
  </svg>;
}

function ProjectLinks({ links }: { links: { label: string; url: string }[] }) {
  return <div className="mt-auto flex flex-wrap gap-3 border-t border-border pt-3 mt-4">{links.filter((link) => ['Live Demo', 'Case Study', 'View Case Study', 'GitHub', 'Source Code'].includes(link.label)).map((link) => <a key={`${link.label}-${link.url}`} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-1 text-xs font-bold text-text-secondary transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{link.label === 'GitHub' ? 'Source Code' : link.label === 'View Case Study' ? 'Case Study' : link.label}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>)}</div>;
}
