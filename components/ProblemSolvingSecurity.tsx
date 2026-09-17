import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Code2, ExternalLink, FileText, ShieldCheck } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';
import { Section } from './ui/Section';

type Profile = {
  name: string;
  logo: string;
  label: string;
  description: string;
  tags: string[];
  href: string;
  cta: string;
  accent: string;
  glow: string;
  security?: boolean;
};

const profiles: Profile[] = [
  {
    name: 'LeetCode',
    logo: '/assets/images/LeetCode_logo_black.png',
    label: 'Problem Solving',
    description: 'Data structures, algorithms, and systematic problem solving.',
    tags: ['DSA', 'Algorithms', 'Problem Solving'],
    href: 'https://leetcode.com/u/arpit_patel28/',
    cta: 'View Profile',
    accent: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.14)',
  },
  {
    name: 'GeeksforGeeks',
    logo: '/assets/images/GFG.png',
    label: 'Programming Practice',
    description: 'Programming practice across data structures, algorithms, and computer science fundamentals.',
    tags: ['DSA', 'Programming', 'CS Fundamentals'],
    href: 'https://www.geeksforgeeks.org/profile/arpitkumar0211?tab=activity',
    cta: 'View Profile',
    accent: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.13)',
  },
  {
    name: 'TryHackMe',
    logo: '/assets/images/THM.png',
    label: 'Cybersecurity',
    description: 'Hands-on cybersecurity labs covering networking, Linux, reconnaissance, enumeration, and security challenges.',
    tags: ['CTFs', 'Linux', 'Networking', 'Recon'],
    href: 'https://tryhackme.com/p/ArpitKumar28',
    cta: 'Explore Security Work',
    accent: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.15)',
    security: true,
  },
  {
    name: 'Hack The Box',
    logo: '/assets/images/HTB.png',
    label: 'Security Labs',
    description: 'Practical security labs, Sherlock investigations, enumeration, and defensive analysis.',
    tags: ['Security Labs', 'Sherlocks', 'Investigation'],
    href: 'https://profile.hackthebox.com/',
    cta: 'View Profile',
    accent: '#a3e635',
    glow: 'rgba(163, 230, 53, 0.13)',
    security: true,
  },
];

const repositories = [
  {
    name: 'GreenFlow AI',
    description: 'Traffic intelligence, real-time workflows, and emergency green-corridor systems.',
    href: 'https://github.com/arpitkumar28/Smart-Traffic-Management-System-with-Green-Corridor',
    tags: ['Next.js', 'FastAPI', 'Flutter'],
  },
  {
    name: 'EduAI Nexus X',
    description: 'AI-powered learning workflows with retrieval, recommendations, and backend services.',
    href: 'https://github.com/arpitkumar28/Build_EduAI_Nexus_X_platform',
    tags: ['Python', 'React', 'RAG'],
  },
];

const practiceAreas = ['Linux', 'Networking', 'Reconnaissance', 'Enumeration', 'Web Security', 'Digital Forensics', 'CTFs'];

const ProfileCard: React.FC<{ profile: Profile; index: number }> = ({ profile, index }) => {
  const Icon = profile.security ? ShieldCheck : Code2;

  return (
    <a
      href={profile.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${profile.cta}: ${profile.name}`}
      className="profile-ecosystem-card group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border bg-background-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl focus-visible:-translate-y-1.5"
      style={{
        borderColor: `${profile.accent}55`,
        backgroundImage: `radial-gradient(circle at 12% 0%, ${profile.glow}, transparent 42%)`,
        boxShadow: `0 18px 45px ${profile.glow}`,
        ['--profile-accent' as string]: profile.accent,
      }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundColor: profile.accent }} />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 min-w-12 items-center justify-center rounded-xl border bg-background-elevated px-2 font-mono text-xs font-black tracking-wider" style={{ color: profile.accent, borderColor: `${profile.accent}66`, backgroundColor: `${profile.accent}12`, boxShadow: `0 0 24px ${profile.glow}` }}>
            <Image src={profile.logo} alt={`${profile.name} logo`} width={32} height={32} unoptimized className="h-8 w-8 object-contain" />
          </div>
          {profile.security && <span className="rounded-full border px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: profile.accent, borderColor: `${profile.accent}55`, backgroundColor: `${profile.accent}12` }}>Security</span>}
        </div>
        <span className="font-mono text-xs font-black text-text-subtle">0{index + 1} / 04</span>
      </div>

      <div className="relative mt-10">
        <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: profile.accent }}>{profile.label}</p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-text-primary">{profile.name}</h3>
        <p className="mt-4 min-h-[72px] text-sm font-medium leading-relaxed text-text-muted">{profile.description}</p>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {profile.tags.map((tag) => <span key={tag} className="rounded-md border border-border bg-background-elevated/80 px-2.5 py-1.5 font-mono text-[10px] font-black text-text-muted">{tag}</span>)}
      </div>

      <div className="relative mt-auto border-t border-border/80 pt-5">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-black text-text-primary transition-colors group-hover:text-[var(--profile-accent)]">{profile.cta}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-all group-hover:border-[var(--profile-accent)] group-hover:text-[var(--profile-accent)]"><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></span>
        </div>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-text-subtle"><Icon className="h-3.5 w-3.5" aria-hidden="true" /> External profile <span className="ml-auto">Open ↗</span></div>
      </div>
    </a>
  );
};

export const ProblemSolvingSecurity: React.FC = () => {
  return (
    <Section id="problem-solving-security" className="bg-background py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="flex items-center gap-2 font-mono text-sm font-black uppercase tracking-[0.28em] text-primary">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                        Proof of work
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-text-primary md:text-6xl">
                        Practice. Build. Break. Learn.
          </h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-text-muted md:text-xl">
                        The places where I build, solve, investigate, and keep learning.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6"><p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-text-muted">Problem solving</p><h3 className="mt-3 text-3xl font-black text-text-primary">Strengthen the fundamentals.</h3><p className="mt-3 text-base font-medium leading-relaxed text-text-muted">Strengthening the fundamentals behind the systems I build through data structures, algorithms, and programming practice.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{profiles.filter((profile) => !profile.security).map((profile, index) => <ProfileCard key={profile.name} profile={profile} index={index} />)}</div>
          </div>
          <div>
            <div className="mb-6"><p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-primary">Security, hands-on.</p><h3 className="mt-3 text-3xl font-black text-text-primary">Work through the system.</h3><p className="mt-3 text-base font-medium leading-relaxed text-text-muted">I learn cybersecurity by working through systems, networks, applications, and controlled security challenges.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{profiles.filter((profile) => profile.security).map((profile, index) => <ProfileCard key={profile.name} profile={profile} index={index + 2} />)}</div>
            <div className="mt-5 rounded-2xl border border-primary/25 bg-primary/5 p-5"><div className="flex flex-wrap gap-2" aria-label="Security practice areas">{practiceAreas.map((area) => <span key={area} className="rounded-md border border-primary/25 bg-background-card px-2.5 py-1.5 font-mono text-[11px] font-black text-text-muted">{area}</span>)}</div></div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><p className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-primary"><GitHubIcon className="h-4 w-4" aria-hidden="true" /> Engineering proof</p><h3 className="mt-3 text-3xl font-black text-text-primary">Built in public.</h3><p className="mt-3 text-base font-medium leading-relaxed text-text-muted">Real projects, experiments, and source code behind the work.</p></div><a href="https://github.com/arpitkumar28" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-black text-primary hover:text-text-primary">View GitHub profile <ExternalLink className="h-4 w-4" aria-hidden="true" /></a></div>
          <div className="grid gap-4 md:grid-cols-2">{repositories.map((repository) => <a key={repository.name} href={repository.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${repository.name} repository on GitHub`} className="group rounded-2xl border border-border bg-background-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 focus-visible:-translate-y-1"><div className="flex items-start justify-between gap-4"><h4 className="text-xl font-black text-text-primary group-hover:text-primary">{repository.name}</h4><ExternalLink className="h-5 w-5 text-text-muted group-hover:text-primary" aria-hidden="true" /></div><p className="mt-3 text-sm font-medium leading-relaxed text-text-muted">{repository.description}</p><div className="mt-5 flex flex-wrap gap-2">{repository.tags.map((tag) => <span key={tag} className="rounded-md bg-background-elevated px-2.5 py-1.5 font-mono text-[11px] font-black text-text-muted">{tag}</span>)}</div></a>)}</div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a href="https://www.linkedin.com/in/arpitkumar0211" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn" className="group flex items-center gap-4 rounded-2xl border border-border bg-background-card p-5 transition-colors hover:border-primary/60 focus-visible:border-primary"><LinkedInIcon className="h-6 w-6 text-primary" aria-hidden="true" /><span className="flex-1"><span className="block text-lg font-black text-text-primary">LinkedIn</span><span className="mt-1 block text-sm text-text-muted">Professional profile, experience, projects, and technical journey.</span></span><ArrowUpRight className="h-5 w-5 text-text-muted group-hover:text-primary" aria-hidden="true" /></a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download resume PDF" className="group flex items-center gap-4 rounded-2xl border border-border bg-background-card p-5 transition-colors hover:border-primary/60 focus-visible:border-primary"><FileText className="h-6 w-6 text-primary" aria-hidden="true" /><span className="flex-1"><span className="block text-lg font-black text-text-primary">Resume</span><span className="mt-1 block text-sm text-text-muted">A concise overview of my engineering experience, projects, skills, and security journey.</span></span><ArrowUpRight className="h-5 w-5 text-text-muted group-hover:text-primary" aria-hidden="true" /></a>
        </div>
      </div>
    </Section>
  );
};