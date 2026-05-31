import React from 'react'
import FeatureCard from './FeatureCard'
import MetricCard from './MetricCard'
import TechBadge from './TechBadge'

type Screenshot = {
  src: string
  alt?: string
}

const screenshots: Screenshot[] = [
  { src: '/assets/images/greenflow-1.svg', alt: 'Dashboard view' },
  { src: '/assets/images/greenflow-2.svg', alt: 'Mobile command center' },
  { src: '/assets/images/greenflow-3.svg', alt: 'Emergency corridor activation' },
]

export default function GreenFlowShowcase() {
  return (
    <section className="relative py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-[#071023] via-[#071a2b] to-[#021018] text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">GreenFlow AI</h2>
            <p className="mt-2 text-slate-300 max-w-xl">
              AI-Powered Smart Traffic Orchestration Platform — An intelligent traffic management
              system that predicts congestion, optimizes signals, and creates emergency green
              corridors for ambulances.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-2 bg-slate-900/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-slate-200">Anakin Build-a-thon 2026</span>
              <span className="inline-flex items-center gap-2 bg-slate-900/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-emerald-300">Live & Deployed</span>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="https://greenflow-ai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900 font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/arpitkumar28/Smart-Traffic-Management-System-with-Green-Corridor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-lg text-slate-200 hover:bg-slate-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative bg-gradient-to-r from-white/3 via-white/2 to-white/2 border border-white/5 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
              <h3 className="text-xl font-semibold mb-3">Project Gallery</h3>
              <p className="text-sm text-slate-300 mb-4">Interactive screenshots from the command center and mobile app.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {screenshots.map((s, i) => (
                  <div key={i} className="relative overflow-hidden rounded-xl group transform-gpu transition duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 opacity-0 group-hover:opacity-60 transition" />
                    <img
                      src={s.src}
                      alt={s.alt || `screenshot-${i}`}
                      className="object-cover w-full h-48 sm:h-56 rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard
                title="AI Congestion Prediction"
                description="Predicts traffic build-ups using historical and live feeds with 92% confidence."
              />
              <FeatureCard
                title="Emergency Green Corridor"
                description="Automatically creates priority green corridors for emergency vehicles in real-time."
              />
              <FeatureCard
                title="WebSocket Live Updates"
                description="Low-latency WebSocket streams keep the command center and mobile app in sync."
              />
              <FeatureCard
                title="Signal Synchronization"
                description="Optimizes traffic signals across corridors to improve flow up to 90%."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-5 rounded-2xl bg-gradient-to-tr from-white/3 to-white/2 border border-white/5 backdrop-blur-md">
              <h4 className="text-lg font-semibold">Key Metrics</h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <MetricCard label="AI Confidence" value="92%" />
                <MetricCard label="Traffic Efficiency" value="96%" />
                <MetricCard label="CO₂ Reduction" value="52%" />
                <MetricCard label="Emergency Vehicles" value="23" />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/30 backdrop-blur-md border border-white/5">
              <h4 className="text-lg font-semibold">Tech Stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Flutter',
                  'Next.js',
                  'TypeScript',
                  'FastAPI',
                  'Python',
                  'WebSockets',
                  'Supabase',
                  'Postgres',
                  'Tailwind',
                  'OpenStreetMap',
                ].map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-800/30 to-green-800/20 border border-white/5 backdrop-blur-md">
              <h4 className="text-lg font-semibold">Links</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="https://greenflow-ai.vercel.app" className="text-cyan-300 hover:underline">Live Demo</a>
                </li>
                <li>
                  <a href="https://smart-traffic-management-system-with.onrender.com" className="text-cyan-300 hover:underline">Backend API</a>
                </li>
                <li>
                  <a href="https://youtu.be/Qdv3hZ_4W2Y" className="text-cyan-300 hover:underline">Demo Video</a>
                </li>
                <li>
                  <a href="https://github.com/arpitkumar28/Smart-Traffic-Management-System-with-Green-Corridor" className="text-cyan-300 hover:underline">GitHub</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
