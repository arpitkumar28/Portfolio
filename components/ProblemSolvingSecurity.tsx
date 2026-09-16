import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Section } from './ui/Section';

const profiles = [
  {
    name: 'LeetCode',
    description: 'Data Structures & Algorithms · Problem Solving',
    href: 'https://leetcode.com/u/arpit_patel28/',
  },
  {
    name: 'GeeksforGeeks',
    description: 'Programming Practice · DSA · Computer Science',
    href: 'https://www.geeksforgeeks.org/profile/arpitkumar0211?tab=activity',
  },
  {
    name: 'TryHackMe',
    description: 'Cybersecurity · CTFs · Networking · Linux',
    href: 'https://tryhackme.com/p/ArpitKumar28',
  },
  {
    name: 'Hack The Box',
    description: 'Security Labs · Sherlocks · Enumeration · Investigation',
    href: 'https://profile.hackthebox.com/',
  },
];

export const ProblemSolvingSecurity: React.FC = () => {
  return (
    <Section id="problem-solving-security" className="bg-background py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="flex items-center gap-2 font-mono text-sm font-black uppercase tracking-[0.28em] text-primary">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Practice & security
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Problem Solving &amp; Security
          </h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-text-muted md:text-xl">
            Consistent hands-on practice across data structures, programming, cybersecurity labs, networking, Linux, and security investigations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${profile.name} profile`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-background-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 focus-visible:-translate-y-1 focus-visible:border-primary"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black text-text-primary group-hover:text-primary">{profile.name}</h3>
                <ExternalLink className="h-5 w-5 shrink-0 text-text-muted group-hover:text-primary" aria-hidden="true" />
              </div>
              <p className="mt-5 flex-1 text-sm font-medium leading-relaxed text-text-muted">{profile.description}</p>
              <span className="mt-7 text-sm font-black text-primary">View Profile</span>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
          <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-primary">Security practice</p>
          <p className="mt-4 max-w-4xl text-base font-medium leading-relaxed text-text-muted md:text-lg">
            Hands-on cybersecurity practice through CTFs, security labs, reconnaissance, network analysis, Linux, and investigation challenges.
          </p>
          <div className="mt-5 flex flex-wrap gap-3" aria-label="Security practice areas">
            {['Linux', 'Networking', 'Reconnaissance', 'Enumeration', 'Nmap', 'Wireshark', 'Burp Suite', 'Metasploit', 'Digital Forensics'].map((skill) => (
              <span key={skill} className="rounded-md border border-primary/30 bg-background-card px-3 py-2 font-mono text-xs font-black text-text-muted">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};