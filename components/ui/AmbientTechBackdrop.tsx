import React from 'react';
import {
  Bug,
  Braces,
  Fingerprint,
  KeyRound,
  Laptop,
  ScanLine,
  Workflow,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  LockKeyhole,
  Network,
  Server,
  Shield,
  Terminal,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

type BackdropVariant = 'hero' | 'projects' | 'page';

const heroSymbols: Array<{ Icon: LucideIcon | null; className: string }> = [
  { Icon: Terminal, className: 'ambient-symbol-terminal' },
  { Icon: Code2, className: 'ambient-symbol-code' },
  { Icon: Shield, className: 'ambient-symbol-shield' },
  { Icon: LockKeyhole, className: 'ambient-symbol-lock' },
  { Icon: Bug, className: 'ambient-symbol-bug' },
  { Icon: Network, className: 'ambient-symbol-network' },
  { Icon: Globe2, className: 'ambient-symbol-globe' },
  { Icon: Database, className: 'ambient-symbol-database' },
  { Icon: Server, className: 'ambient-symbol-server' },
  { Icon: GitBranch, className: 'ambient-symbol-git' },
  { Icon: Cpu, className: 'ambient-symbol-cpu' },
  { Icon: Wrench, className: 'ambient-symbol-tools' },
  { Icon: null, className: 'ambient-symbol-github' },
  { Icon: Braces, className: 'ambient-symbol-braces' },
  { Icon: Fingerprint, className: 'ambient-symbol-fingerprint' },
  { Icon: KeyRound, className: 'ambient-symbol-key' },
  { Icon: Laptop, className: 'ambient-symbol-laptop' },
  { Icon: ScanLine, className: 'ambient-symbol-scan' },
  { Icon: Workflow, className: 'ambient-symbol-workflow' },
  { Icon: Cloud, className: 'ambient-symbol-cloud' },
];

const projectSymbols: Array<{ Icon: LucideIcon; className: string }> = [
  { Icon: Code2, className: 'ambient-project-code' },
  { Icon: Shield, className: 'ambient-project-shield' },
  { Icon: Database, className: 'ambient-project-database' },
  { Icon: GitBranch, className: 'ambient-project-git' },
];

const pageSymbols: Array<{ Icon: LucideIcon; className: string }> = [
  { Icon: Terminal, className: 'ambient-project-code' },
  { Icon: Shield, className: 'ambient-project-shield' },
  { Icon: Network, className: 'ambient-project-git' },
  { Icon: Database, className: 'ambient-project-database' },
  { Icon: Fingerprint, className: 'ambient-project-fingerprint' },
  { Icon: LockKeyhole, className: 'ambient-project-lock' },
];

export const AmbientTechBackdrop: React.FC<{ variant: BackdropVariant }> = ({ variant }) => {
  const symbols = variant === 'hero' ? heroSymbols : variant === 'projects' ? projectSymbols : pageSymbols;

  return (
    <div className={`ambient-tech-backdrop ambient-tech-backdrop-${variant}`} aria-hidden="true">
      {variant === 'hero' && (
        <>
          <div className="ambient-orbit ambient-orbit-outer" />
          <div className="ambient-orbit ambient-orbit-middle" />
          <div className="ambient-orbit ambient-orbit-inner" />
        </>
      )}
      <svg className="ambient-network-lines" viewBox="0 0 1440 900" preserveAspectRatio="none" focusable="false">
        <path d="M-40 210 C180 220 205 410 390 390 S650 220 800 290 1020 450 1210 370 1370 230 1490 250" />
        <path d="M-50 690 C150 650 240 540 400 585 S635 760 810 700 1015 525 1195 590 1370 760 1490 720" />
        <path d="M260 -30 C330 140 380 210 520 270 S720 400 750 520 700 735 820 930" />
        <path d="M1110 -30 C1040 110 1050 250 1155 345 S1290 520 1215 650 1070 790 1030 930" />
        <circle cx="390" cy="390" r="3" />
        <circle cx="800" cy="290" r="3" />
        <circle cx="1210" cy="370" r="3" />
        <circle cx="400" cy="585" r="3" />
        <circle cx="810" cy="700" r="3" />
        <circle cx="1195" cy="590" r="3" />
      </svg>
      <div className="ambient-particles">
        {Array.from({ length: variant === 'hero' ? 12 : 6 }, (_, index) => (
          <span key={index} style={{ animationDelay: `${index * -1.7}s` }} />
        ))}
      </div>
      <div className="ambient-symbols">
        {symbols.map(({ Icon, className }, index) => (
          <span className={`ambient-symbol ${className}`} key={className} style={{ animationDelay: `${index * -0.9}s` }}>
            {Icon ? <Icon className="ambient-symbol-icon" strokeWidth={1.35} /> : (
              <svg className="ambient-symbol-icon" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.51-1.44.11-3 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.1-1.16 3.1-1.16.63 1.56.24 2.71.12 3 .73.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.3-5.16 5.58.4.35.75 1.03.75 2.08v3.12c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
              </svg>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
