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

const compactFeaturedProjects = featuredProjects.filter((project) => project.title === 'GreenFlow AI');
const regularFeaturedProjects = featuredProjects.filter((project) => project.title !== 'GreenFlow AI');
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({ opacity: 1, y: 0, transition: { duration: 0.42, delay: Math.min(index * 0.07, 0.28) } }),
};

export const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const primaryTitles = ['GreenFlow AI', 'EduAI Nexus X'];
  const secondaryProjects = allProjects.filter((project) => !primaryTitles.includes(project.title));
  const filteredSecondaryProjects = secondaryProjects
    .filter((project) => selectedFilter === 'all' || project.filter.includes(selectedFilter));
  const visibleProjects = showAllProjects ? filteredSecondaryProjects : filteredSecondaryProjects.slice(0, 3);

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
    <Section id="projects" className="ambient-section bg-background py-16 md:py-20">
      <AmbientTechBackdrop variant="projects" />
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Selected systems</p>
          <SectionTitle className="mb-0 text-left">Projects</SectionTitle>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            Selected product work and hands-on security practice. Project stages are labeled clearly, with code, demos, or case studies linked where available.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-background-card px-4 py-3 text-sm font-bold text-text-muted">
          {new Set([...featuredProjects, ...allProjects].map((project) => project.title)).size} product builds
        </div>
      </div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid gap-4 md:grid-cols-2">
        {compactFeaturedProjects.map((project, index) => <CompactFeaturedCard key={project.id} project={project} index={index} />)}
      </motion.div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regularFeaturedProjects.map((project) => {
          return <article key={project.id} className="project-card relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-background-card transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-primary/50 motion-reduce:transform-none motion-reduce:transition-none">
            <ProjectThumbnail title={project.title} category={project.category} />
            <div className="flex flex-1 flex-col p-4">
              <ProjectHeading title={project.title} category={project.category} />
              <ProjectStatus status={project.status} />
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
            <button type="button" onClick={() => setShowAllProjects((show) => !show)} className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{showAllProjects ? 'Show fewer projects' : `View all ${filteredSecondaryProjects.length} additional projects`} <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setSelectedFilter(filter.value)}
                className={`rounded-md border px-3 py-2 text-xs font-bold transition-colors ${
                  selectedFilter === filter.value
                    ? 'border-primary bg-primary text-background'
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

function CompactFeaturedCard({ project, index }: { project: (typeof featuredProjects)[number]; index: number }) {
  return <motion.article custom={index} variants={itemVariants} whileHover={{ y: -3 }} className="project-card relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-primary/25 bg-background-card transition-colors duration-200 hover:border-primary/55 motion-reduce:transition-none">
    <ProjectThumbnail title={project.title} category={project.category} featured />
    <div className="flex flex-1 flex-col p-4 md:p-5">
      <ProjectHeading title={project.title} category={project.category} />
      <ProjectStatus status={project.status} />
      <p className="mt-2 line-clamp-3 text-sm leading-5 text-text-muted">{compactDescriptions[project.title]}</p>
      <ProjectTags tags={project.techStack} />
      <ProjectLinks links={project.links.filter((link) => link.url.startsWith('/') || /^https:\/\//.test(link.url))} />
    </div>
  </motion.article>;
}

function ProjectThumbnail({ title, category, featured = false }: { title: string; category: string; featured?: boolean }) {
  const ProjectIcon = projectIcons[title] || Code2;
  return <div className={`project-thumbnail relative flex aspect-[16/7] items-center gap-4 overflow-hidden border-b bg-[linear-gradient(135deg,#191c24,#10131a)] px-5 py-4 ${featured ? 'border-primary/20' : 'border-border'}`}>
    <span className="project-icon-chip inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary" aria-hidden="true"><ProjectIcon className="h-6 w-6" strokeWidth={1.8} /></span>
    <div className="min-w-0 flex-1">
      <span className="block truncate text-[10px] font-bold uppercase tracking-[0.14em] text-primary/90">{category}</span>
      <span className="mt-1 block truncate text-lg font-black tracking-tight text-text-primary">{title}</span>
    </div>
    {featured && <span className="shrink-0 rounded-full border border-primary/25 bg-background/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">Featured</span>}
  </div>;
}

function ProjectHeading({ title, category }: { title: string; category: string }) {
  return <div className="flex min-w-0 items-baseline justify-between gap-3"><h3 className="truncate font-display text-lg font-black tracking-tight text-text-primary">{title}</h3><span className="shrink-0 truncate text-[10px] font-bold uppercase tracking-wide text-primary">{category}</span></div>;
}

function ProjectStatus({ status }: { status: string }) {
  return <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-text-subtle">Status: {status}</p>;
}

function ProjectTags({ tags }: { tags: string[] }) {
  return <div className="mt-3 flex flex-wrap gap-1.5">{tags.slice(0, 4).map((tag) => <span key={tag} className="rounded border border-border bg-background-elevated px-2 py-1 text-[10px] font-semibold text-text-muted">{tag}</span>)}</div>;
}

function ProjectLinks({ links }: { links: { label: string; url: string }[] }) {
  return <div className="mt-auto flex flex-wrap gap-3 border-t border-border pt-3 mt-4">{links.filter((link) => ['Live Demo', 'Case Study', 'View Case Study', 'GitHub', 'Source Code'].includes(link.label)).map((link) => <a key={`${link.label}-${link.url}`} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-1 text-xs font-bold text-text-secondary transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{link.label === 'GitHub' ? 'Source Code' : link.label === 'View Case Study' ? 'Case Study' : link.label}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>)}</div>;
}
