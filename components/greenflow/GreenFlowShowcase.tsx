import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ImageModal from '../ui/ImageModal';

const screenshots = [
  { src: '/assets/images/greenflow-1.jpeg', alt: 'GreenFlow traffic interface screenshot' },
  { src: '/assets/images/greenflow-2.jpeg', alt: 'GreenFlow emergency workflow interface screenshot' },
  { src: '/assets/images/greenflow-3.jpeg', alt: 'GreenFlow dashboard screenshot' },
  { src: '/assets/images/greenflow-4.jpeg', alt: 'GreenFlow operations interface screenshot' },
  { src: '/assets/images/greenflow-5.png', alt: 'GreenFlow signal workflow screenshot' },
  { src: '/assets/images/greenflow-6.png', alt: 'GreenFlow traffic overview screenshot' },
];

const areas = [
  ['Traffic overview', 'The supplied screenshots show dashboard and traffic overview interface concepts.'],
  ['Emergency corridor workflow', 'The project explores how a priority route could be represented and coordinated. Real-world signal integration and operational use are unverified.'],
  ['Predictive analysis', 'AI and traffic analysis are project directions. No model evaluation, deployment, or prediction performance is claimed here.'],
];

export default function GreenFlowShowcase() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 md:px-8">
          <a href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Portfolio projects</a>
          <a href="https://github.com/arpitkumar28/Smart-Traffic-Management-System-with-Green-Corridor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-bold text-text-secondary transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Source repository <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
        <section aria-labelledby="greenflow-title" className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Traffic intelligence · Project prototype</p>
          <h1 id="greenflow-title" className="mt-4 text-5xl font-black tracking-tight md:text-7xl">GreenFlow AI</h1>
          <p className="mt-5 text-lg leading-relaxed text-text-muted md:text-xl">A traffic dashboard and emergency green-corridor workflow concept, presented through the interface screenshots below.</p>
          <div role="note" className="mt-7 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 text-sm leading-relaxed text-text-secondary">
            The screenshots document interface work. This portfolio does not establish live traffic feeds, deployed signal control, a production ML service, or measured response and performance outcomes. Treat the system architecture and integrations as unverified unless confirmed in the linked source.
          </div>
        </section>

        <section aria-labelledby="areas-title" className="mt-14">
          <h2 id="areas-title" className="text-2xl font-black">Project areas</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {areas.map(([title, description]) => <article key={title} className="rounded-xl border border-border bg-background-card p-5"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p></article>)}
          </div>
        </section>

        <section aria-labelledby="screenshots-title" className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Visual record</p><h2 id="screenshots-title" className="mt-2 text-2xl font-black">Interface screenshots</h2></div><p className="text-xs text-text-muted">Select an image to view it larger.</p></div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {screenshots.map((screenshot) => <button key={screenshot.src} type="button" onClick={() => setModalImage(screenshot)} aria-label={`View larger image: ${screenshot.alt}`} className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-background-card transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"><Image src={screenshot.src} alt={screenshot.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" /></button>)}
          </div>
        </section>
      </div>
      {modalImage && <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={() => setModalImage(null)} />}
    </main>
  );
}
