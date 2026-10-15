import React from 'react';
import { ArrowLeft, ExternalLink, Fingerprint, MapPin, Smartphone } from 'lucide-react';

const designAreas = [
  { title: 'Attendance workflow', body: 'A mobile workflow concept for recording staff attendance. The implementation is not present in this portfolio repository.', icon: Fingerprint },
  { title: 'Location context', body: 'Location-aware verification is a proposed design direction. No geofencing accuracy or on-site deployment is claimed.', icon: MapPin },
  { title: 'Mobile experience', body: 'The project is described as Flutter-focused. This case study does not verify app-store releases, backend services, or connected hospital systems.', icon: Smartphone },
];

export default function HospitalAttendanceShowcase() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 md:px-8">
          <a href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Portfolio projects</a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
        <section aria-labelledby="carepulse-title" className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Healthcare workflow · Project concept</p>
          <h1 id="carepulse-title" className="mt-4 text-5xl font-black tracking-tight md:text-7xl">CarePulse</h1>
          <p className="mt-5 text-lg leading-relaxed text-text-muted md:text-xl">A mobile-first concept for hospital attendance and staff workflow management.</p>
          <div role="note" className="mt-7 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 text-sm leading-relaxed text-text-secondary">
            The repository contains this case-study page but no verifiable app source or project screenshots. Biometric, NFC, geolocation, encryption, reporting, performance, testing, and deployment details are therefore not presented as implemented or measured capabilities.
          </div>
        </section>

        <section aria-labelledby="carepulse-scope-title" className="mt-14">
          <h2 id="carepulse-scope-title" className="text-2xl font-black">Design directions</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {designAreas.map(({ title, body, icon: Icon }) => <article key={title} className="rounded-xl border border-border bg-background-card p-5"><Icon className="h-5 w-5 text-primary" aria-hidden="true" /><h3 className="mt-4 font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-text-muted">{body}</p></article>)}
          </div>
        </section>

        <section aria-labelledby="carepulse-architecture-title" className="mt-8 rounded-xl border border-border bg-background-card p-5 md:p-7">
          <h2 id="carepulse-architecture-title" className="text-xl font-black">Possible technology stack</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted">These are project directions recorded in the portfolio data, not confirmation that each integration is complete or deployed.</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Possible technologies"><li className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-text-secondary">Flutter</li><li className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-text-secondary">Dart</li><li className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-text-secondary">Riverpod</li><li className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-text-secondary">FastAPI</li><li className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-text-secondary">PostgreSQL</li></ul>
        </section>
      </div>
    </main>
  );
}
