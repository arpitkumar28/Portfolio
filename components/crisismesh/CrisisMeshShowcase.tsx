import React from 'react';
import { ArrowLeft, ExternalLink, MapPinned, Network, ShieldAlert } from 'lucide-react';

const conceptAreas = [
  {
    title: 'Incident coordination',
    description: 'A proposed workflow for organizing incident reports and response roles in one interface.',
    icon: ShieldAlert,
  },
  {
    title: 'Situational map',
    description: 'A map-centered interface concept. The markers and sample status shown below are illustrative only.',
    icon: MapPinned,
  },
  {
    title: 'Connected services',
    description: 'Possible API, data, and device integrations are architectural directions, not verified deployments.',
    icon: Network,
  },
];

export default function CrisisMeshShowcase() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 md:px-8">
          <a href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Portfolio projects
          </a>
          <a href="https://crisis-mesh-eosin.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-bold text-text-secondary transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Open demo <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
        <section aria-labelledby="crisismesh-title" className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Concept prototype · Disaster response</p>
            <h1 id="crisismesh-title" className="mt-4 text-5xl font-black tracking-tight md:text-7xl">CrisisMesh</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
              An interface concept for exploring how incident reports, response teams, and situational information might be organized together.
            </p>
            <div role="note" className="mt-7 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 text-sm leading-relaxed text-text-secondary">
              This is a visual prototype, not an emergency service. The portfolio repository does not contain evidence of live monitoring, operational response, deployed sensors, production AI, or verified backend integrations. Do not use it for real emergencies.
            </div>
          </div>

          <div role="img" aria-label="Illustrative CrisisMesh dashboard concept with sample incident markers; not connected to live data" className="relative overflow-hidden rounded-2xl border border-border bg-background-card p-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div><p className="text-sm font-black">Situational overview</p><p className="mt-1 text-xs text-text-muted">Illustrative sample · no live data</p></div>
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-amber-300">Prototype</span>
            </div>
            <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-xl border border-border bg-[linear-gradient(135deg,rgba(57,220,151,0.07),transparent_48%),linear-gradient(rgba(175,210,214,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(175,210,214,0.06)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]">
              <span className="absolute left-[18%] top-[26%] h-3 w-3 rounded-full border-2 border-amber-300 bg-amber-300/30" />
              <span className="absolute left-[56%] top-[42%] h-3 w-3 rounded-full border-2 border-rose-300 bg-rose-300/30" />
              <span className="absolute right-[20%] bottom-[25%] h-3 w-3 rounded-full border-2 border-emerald-300 bg-emerald-300/30" />
              <span className="absolute left-4 bottom-4 rounded-md border border-border bg-background/90 px-2 py-1 text-[10px] font-semibold text-text-muted">Sample markers · map not connected</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="scope-title" className="mt-16 md:mt-24">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Scope</p>
          <h2 id="scope-title" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">What this concept explores</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {conceptAreas.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-xl border border-border bg-background-card p-5">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="architecture-title" className="mt-12 rounded-xl border border-border bg-background-card p-5 md:p-7">
          <h2 id="architecture-title" className="text-xl font-black">Proposed technical directions</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted">The following technologies describe a possible architecture for the concept. They are not a claim that these services are implemented, connected, or deployed.</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Proposed technologies">
            {['Next.js', 'Flutter', 'NestJS', 'PostgreSQL', 'WebSockets', 'MQTT', 'Python', 'Leaflet'].map((item) => <li key={item} className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-text-secondary">{item}</li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
