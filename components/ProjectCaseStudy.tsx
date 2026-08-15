import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type CaseStudyProps = {
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  architecture: string[];
  contribution: string;
  note?: string;
};

export const ProjectCaseStudy: React.FC<CaseStudyProps> = ({ title, subtitle, overview, problem, solution, features, stack, architecture, contribution, note }) => (
  <>
    <Head><title>{title} | Arpit Kumar</title></Head>
    <main className="min-h-screen bg-background px-4 py-12 text-text-primary md:px-8 md:py-20">
      <article className="mx-auto max-w-5xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-sm font-black uppercase tracking-[0.16em] text-text-muted hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
        <header className="mt-16 border-b border-border pb-12">
          <p className="font-mono text-sm font-black uppercase tracking-[0.22em] text-primary">Case Study</p>
          <h1 className="mt-5 font-display text-5xl font-black tracking-tight md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-xl font-bold leading-relaxed text-text-secondary">{subtitle}</p>
        </header>
        <div className="grid gap-12 py-12 md:grid-cols-[1fr_280px]">
          <div className="space-y-12">
            {[['Overview', overview], ['Problem', problem], ['Solution', solution], ['My Contribution', contribution]].map(([heading, body]) => (
              <section key={heading}>
                <h2 className="text-2xl font-black text-text-primary">{heading}</h2>
                <p className="mt-4 text-lg leading-relaxed text-text-muted">{body}</p>
              </section>
            ))}
            <section>
              <h2 className="text-2xl font-black text-text-primary">Key Features</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => <li key={feature} className="rounded-xl border border-border bg-background-card p-4 font-semibold text-text-muted">{feature}</li>)}
              </ul>
            </section>
          </div>
          <aside className="space-y-8">
            <div>
              <h2 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-primary">Technology Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-md border border-border bg-background-card px-3 py-2 text-xs font-bold text-text-muted">{item}</span>)}</div>
            </div>
            <div>
              <h2 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-primary">Architecture</h2>
              <div className="mt-4 space-y-2">{architecture.map((item) => <div key={item} className="rounded-lg border border-border bg-background-elevated p-3 text-sm font-bold text-text-muted">{item}</div>)}</div>
            </div>
            {note && <p className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-relaxed text-text-muted">{note}</p>}
          </aside>
        </div>
      </article>
    </main>
  </>
);
