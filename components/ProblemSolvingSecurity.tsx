import React from 'react';
import { ArrowUpRight, Code2, ExternalLink, FileText, ShieldCheck } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';
import { Section } from './ui/Section';

type Profile = {
  name: string;
  label: string;
  description: string;
  tags: string[];
  href: string;
  cta: string;
  icon: React.ComponentType<{ className?: string }>;
  security?: boolean;
};

const profiles: Profile[] = [
  {
    name: 'LeetCode',
    label: 'Problem Solving',
    description: 'Data structures, algorithms, and systematic problem solving.',
    tags: ['DSA', 'Algorithms', 'Problem Solving'],
    href: 'https://leetcode.com/u/arpit_patel28/',
    cta: 'View Profile',
    icon: Code2,
  },
  {
    name: 'GeeksforGeeks',
    label: 'Programming Practice',
    description: 'Programming practice across data structures, algorithms, and computer science fundamentals.',
    tags: ['DSA', 'Programming', 'CS Fundamentals'],
    href: 'https://www.geeksforgeeks.org/profile/arpitkumar0211?tab=activity',
    cta: 'View Profile',
    icon: Code2,
  },
  {
    name: 'TryHackMe',
    label: 'Cybersecurity',
    description: 'Hands-on cybersecurity labs covering networking, Linux, reconnaissance, enumeration, and security challenges.',
    tags: ['CTFs', 'Linux', 'Networking', 'Recon'],
    href: 'https://tryhackme.com/p/ArpitKumar28',
    cta: 'Explore Security Work',
    icon: ShieldCheck,
    security: true,
  },
  {
    name: 'Hack The Box',
    label: 'Security Labs',
    description: 'Practical security labs, Sherlock investigations, enumeration, and defensive analysis.',
    tags: ['Security Labs', 'Sherlocks', 'Investigation'],
    href: 'https://profile.hackthebox.com/',
    cta: 'View Profile',
    icon: ShieldCheck,
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

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  const Icon = profile.icon;

  return (
    <a
      href={profile.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${profile.cta}: ${profile.name}`}
      className={`group flex h-full flex-col rounded-2xl border bg-background-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:-translate-y-1 ${profile.security ? 'border-primary/45 shadow-lg shadow-primary/5 hover:border-primary hover:shadow-primary/15' : 'border-border hover:border-primary/60 hover:shadow-primary/10'}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${profile.security ? 'bg-primary/15 text-primary' : 'bg-background-elevated text-text-muted group-hover:text-primary'}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
      </div>
      <p className="mt-7 font-mono text-xs font-black uppercase tracking-[0.2em] text-primary">{profile.label}</p>
      <h3 className="mt-3 text-2xl font-black text-text-primary">{profile.name}</h3>
      <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-text-muted">{profile.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {profile.tags.map((tag) => <span key={tag} className="rounded-md border border-border bg-background-elevated px-2.5 py-1.5 font-mono text-[11px] font-black text-text-muted">{tag}</span>)}
      </div>
      <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-primary">{profile.cta}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">-&gt;</span></span>
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
            <div className="grid gap-4 sm:grid-cols-2">{profiles.filter((profile) => !profile.security).map((profile) => <ProfileCard key={profile.name} profile={profile} />)}</div>
          </div>
          <div>
            <div className="mb-6"><p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-primary">Security, hands-on.</p><h3 className="mt-3 text-3xl font-black text-text-primary">Work through the system.</h3><p className="mt-3 text-base font-medium leading-relaxed text-text-muted">I learn cybersecurity by working through systems, networks, applications, and controlled security challenges.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{profiles.filter((profile) => profile.security).map((profile) => <ProfileCard key={profile.name} profile={profile} />)}</div>
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