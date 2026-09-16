import React from 'react'
import Image from 'next/image'
import { ExternalLink, ArrowRight, MapPin, AlertCircle, Zap, Database, Server, Smartphone, Shield, Users, Activity, Radio, Layers } from 'lucide-react'

export default function CrisisMeshShowcase() {
  return (
    <section className="min-h-screen bg-[#edf3f8] text-[#0b1a34]">
      <header className="border-b border-slate-200/80 bg-[#edf3f8]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-4 py-4 md:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(22,57,112,0.12)] ring-1 ring-slate-200">
              <div className="absolute inset-1 rounded-full border border-[#2aa4ff]/70" />
              <div className="absolute inset-[8px] rounded-full border border-[#ffce47]/75" />
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#1aa7ff] via-[#2fe0d0] to-[#0f7af5] shadow-inner" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent_35%)]" />
            </div>
            <div className="flex items-end gap-0 leading-none">
              <span className="text-[1.9rem] font-black tracking-[-0.06em] text-[#091f3d]">CRISIS</span>
              <span className="text-[1.9rem] font-black tracking-[-0.06em] text-[#0b1a34]">MESH</span>
              <span className="mb-[0.15rem] ml-1 text-[0.72rem] font-black uppercase tracking-[0.16em] text-slate-500">HOME</span>
            </div>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-8 text-[0.84rem] font-semibold uppercase tracking-[0.06em] text-slate-500 md:flex">
            <a href="#" className="transition-colors hover:text-[#0b1a34]">Live</a>
            <a href="#" className="transition-colors hover:text-[#0b1a34]">Map</a>
            <a href="#" className="transition-colors hover:text-[#0b1a34]">States</a>
            <a href="#" className="transition-colors hover:text-[#0b1a34]">Districts</a>
            <a href="#" className="transition-colors hover:text-[#0b1a34]">Alerts</a>
            <a href="#" className="transition-colors hover:text-[#0b1a34]">News</a>
            <a href="#" className="transition-colors hover:text-[#0b1a34]">Safety</a>
            <a href="#" className="transition-colors hover:text-[#0b1a34]">Resources</a>
            <button type="button" className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-2 py-1 text-slate-500 transition-colors hover:text-[#0b1a34]">
              <span className="text-[0.8rem]">☼</span>
              <span>Light</span>
            </button>
            <button type="button" className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-2 py-1 text-slate-500 transition-colors hover:text-[#0b1a34]">
              <span className="text-[0.8rem]">◌</span>
              <span>English</span>
              <span className="text-[0.6rem]">▾</span>
            </button>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl bg-[#081d3b] px-7 py-4 text-[0.85rem] font-black uppercase leading-tight tracking-[0.06em] text-white shadow-[0_14px_28px_rgba(8,29,59,0.22)] transition-transform hover:scale-[1.01]"
          >
            Authority
            <span className="mt-0.5 block">Login</span>
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-4 pb-20 pt-14 md:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
          <div className="pt-6">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d76072]/30 bg-[#fff0f4] px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#d15161] shadow-sm">
              <span className="inline-block h-2.5 w-2.5 rounded-full border border-[#d15161] bg-white" />
              Live Safety Monitoring Active
            </div>

            <h1 className="max-w-[680px] text-[clamp(3.3rem,5vw,7rem)] font-black leading-[0.88] tracking-[-0.08em] text-[#0d1831]">
              <span className="block">India's Integrated</span>
              <span className="mt-1 block bg-gradient-to-r from-[#1d62dd] via-[#1b9cff] to-[#60d9ff] bg-clip-text text-transparent">Disaster Intel</span>
              <span className="mt-1 block">Platform.</span>
            </h1>

            <p className="mt-8 max-w-[560px] text-xl leading-relaxed text-slate-600 md:text-[1.7rem]">
              Real-time alerts, AI-driven risk prediction, and coordinated emergency response to keep communities safe and resilient.
            </p>

            <div className="mt-10 flex max-w-[650px] items-center gap-4">
              <div className="flex w-full max-w-[420px] items-center gap-3 rounded-[1.2rem] border border-slate-300 bg-white/80 px-4 py-4 shadow-[0_12px_24px_rgba(18,46,94,0.06)] backdrop-blur-sm">
                <span className="text-xl text-slate-400">⌕</span>
                <input
                  aria-label="Search district or hazard"
                  value="Search district or hazard..."
                  readOnly
                  className="w-full bg-transparent text-base text-slate-500 outline-none placeholder:text-slate-400"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-[1.2rem] bg-gradient-to-r from-[#1d62dd] to-[#3c83ff] px-7 py-4 text-sm font-black uppercase tracking-[0.09em] text-white shadow-[0_18px_34px_rgba(29,98,221,0.28)] transition-transform hover:scale-[1.01]"
              >
                View Live Map
                <span className="ml-2 text-lg">›</span>
              </button>
            </div>

            <div className="mt-12 grid max-w-[620px] grid-cols-3 gap-8 border-t border-slate-200 pt-8 text-[#091f3d]">
              <div>
                <div className="text-[2.25rem] font-black tracking-[-0.07em]">Live</div>
                <div className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-500">Demo available</div>
              </div>
              <div>
                <div className="text-[2.25rem] font-black tracking-[-0.07em]">Mixed</div>
                <div className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-500">Implementation status</div>
              </div>
              <div>
                <div className="text-[2.25rem] font-black tracking-[-0.07em]">TBD</div>
                <div className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-500">Operational impact</div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[760px]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_32px_70px_rgba(19,42,78,0.12)]">
              <div className="relative h-[480px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.9),rgba(190,220,245,0.75)_25%,rgba(204,228,244,0.6)_45%,rgba(180,215,211,0.35)_70%,rgba(205,231,223,0.12)_100%)]">
                <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(27,52,86,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(27,52,86,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#b7d3d8] to-transparent" />

                <div className="absolute left-12 top-6 text-[0.7rem] font-semibold tracking-[0.08em] text-slate-600">Jaipur</div>
                <div className="absolute left-[30%] top-16 text-[0.62rem] font-semibold tracking-[0.06em] text-slate-600">Udaipur</div>
                <div className="absolute left-[50%] top-24 text-[0.62rem] font-semibold tracking-[0.06em] text-slate-600">Bhopal</div>
                <div className="absolute left-[60%] top-36 text-[0.62rem] font-semibold tracking-[0.06em] text-slate-600">Patna</div>
                <div className="absolute left-[28%] bottom-[26%] text-[0.62rem] font-semibold tracking-[0.06em] text-slate-600">Mumbai</div>
                <div className="absolute left-[46%] bottom-[20%] text-[0.62rem] font-semibold tracking-[0.06em] text-slate-600">Bengaluru</div>
                <div className="absolute right-[16%] bottom-[18%] text-[0.62rem] font-semibold tracking-[0.06em] text-slate-600">Vizag</div>

                <div className="absolute left-[18%] top-[20%] h-16 w-20 rounded-full border border-slate-300/80 bg-slate-200/30" />
                <div className="absolute right-[17%] top-[18%] h-20 w-24 rounded-full border border-slate-300/80 bg-slate-200/30" />
                <div className="absolute left-[28%] bottom-[18%] h-16 w-20 rounded-full border border-slate-300/80 bg-slate-200/30" />
                <div className="absolute right-[24%] bottom-[24%] h-14 w-16 rounded-full border border-slate-300/80 bg-slate-200/30" />

                <div className="absolute left-[15%] top-[26%] h-3.5 w-3.5 rounded-full bg-[#f58d4a] shadow-[0_0_18px_rgba(245,141,74,0.9)]" />
                <div className="absolute left-[40%] top-[38%] h-3.5 w-3.5 rounded-full bg-[#e25e5e] shadow-[0_0_18px_rgba(226,94,94,0.9)]" />
                <div className="absolute right-[32%] top-[35%] h-3.5 w-3.5 rounded-full bg-[#f3b74d] shadow-[0_0_18px_rgba(243,183,77,0.9)]" />
                <div className="absolute right-[22%] bottom-[28%] h-3.5 w-3.5 rounded-full bg-[#e25e5e] shadow-[0_0_18px_rgba(226,94,94,0.9)]" />
                <div className="absolute left-[58%] bottom-[24%] h-3.5 w-3.5 rounded-full bg-[#50b584] shadow-[0_0_18px_rgba(80,181,132,0.9)]" />

                <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#061a35] px-4 pb-2 pt-3 text-white">
                  <div className="flex items-center justify-between text-[0.7rem] font-semibold tracking-[0.08em] text-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-white/60 text-[0.5rem]">◉</span>
                      <span>Health</span>
                    </div>
                    <div className="text-right">
                      <div className="text-[0.7rem] text-slate-300">98.2%</div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[0.8rem] font-semibold">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[0.8rem]">◌</span>
                      <span>Health</span>
                    </div>
                    <div className="flex items-center gap-2 text-[0.8rem] font-black">
                      <span>98.2%</span>
                    </div>
                  </div>
                </div>
                <div className="absolute right-5 top-5 flex flex-col gap-2">
                  <button type="button" className="h-10 w-10 rounded-md border border-slate-200 bg-white text-xl text-slate-700 shadow-sm">+</button>
                  <button type="button" className="h-10 w-10 rounded-md border border-slate-200 bg-white text-xl text-slate-700 shadow-sm">−</button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 right-10 flex items-center gap-3 rounded-xl border border-slate-200 bg-white/85 px-4 py-3 text-[0.72rem] font-semibold text-slate-600 shadow-lg backdrop-blur-sm">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#dbe7ff] text-[0.7rem] text-[#1d62dd]">◉</span>
              <span>Leaflet</span>
              <span className="text-slate-400">•</span>
              <span>© OpenStreetMap contributors</span>
            </div>
            <div className="absolute -bottom-20 right-12 flex w-[220px] items-center justify-between rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-[0_18px_28px_rgba(16,41,78,0.12)] backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf4ff] text-[#1d62dd]">
                <span className="text-xl">▣</span>
              </div>
              <div>
                <div className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-slate-400">Mesh health</div>
                <div className="mt-1 text-[2rem] font-black leading-none tracking-[-0.08em] text-[#0b1a34]">Demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Key Metrics */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Implementation Snapshot</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <div className="text-4xl font-bold text-red-400 mb-2">Live</div>
              <div className="text-text-muted">Demo UI</div>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">Partial</div>
              <div className="text-text-muted">Integration status</div>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">Review</div>
              <div className="text-text-muted">Backend and IoT claims</div>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">TBD</div>
              <div className="text-text-muted">Operational impact</div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-4xl">
            CrisisMesh is a disaster-management platform concept that explores coordination between citizens, responders, authorities, AI-assisted analysis, and connected infrastructure. This case study distinguishes the live demo UI from backend, mobile, IoT, AI, and real-time capabilities that are partial, mocked, missing, or unverified.
          </p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-3xl font-bold mb-6">The Problem</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Emergency information becomes critically fragmented during disasters. When urgent situations unfold, communication fails because different stakeholders operate in isolation:
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Citizens can't report incidents or access real-time safety information during disasters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Emergency responders lack unified situational awareness and coordination mechanisms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Authorities can't access real-time field data or activate coordinated emergency response</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>IoT infrastructure and sensor networks operate independently without unified risk analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Response times increase by minutes or hours due to communication delays and information gaps</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              CrisisMesh creates a unified real-time event pipeline that brings together all emergency response stakeholders. The system architecture integrates a modern web and mobile ecosystem with intelligent backend services and IoT infrastructure:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Live Incident Mapping</h3>
                  <p className="text-text-muted text-sm">Real-time visualization of disasters, emergency zones, and safe shelters across districts using Leaflet and OpenStreetMap integration</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Real-Time Alert System</h3>
                  <p className="text-text-muted text-sm">Instant multi-channel alerts reaching citizens, responders, and authorities through WebSocket-based push notifications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Radio className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">IoT Telemetry Integration</h3>
                  <p className="text-text-muted text-sm">MQTT-based telemetry is described as a target integration; sensor deployment is unverified in this portfolio</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg">
                  <Activity className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">AI Risk Prediction</h3>
                  <p className="text-text-muted text-sm">Machine learning models analyze environmental data to predict disaster likelihood and severity before events occur</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Unified Command Center</h3>
                  <p className="text-text-muted text-sm">Role-based dashboards for authorities, responders, and citizens with coordinated emergency response workflows</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Mobile-First Platform</h3>
                  <p className="text-text-muted text-sm">Flutter app with offline capabilities enabling emergency SOS, incident reporting, and real-time updates even during connectivity loss</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section>
          <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <p className="text-text-muted mb-8">CrisisMesh's architecture integrates multiple layers to create a unified disaster response ecosystem:</p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-red-400">
                  <Smartphone className="w-5 h-5" />
                  Frontend Layer
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Next.js 13+ (Web Dashboard)</li>
                  <li>• Flutter 3+ (Mobile App)</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS / Material Design</li>
                  <li>• WebSocket Client</li>
                  <li>• Leaflet Maps</li>
                  <li>• Real-time Updates</li>
                  <li>• Offline Mode</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-orange-400">
                  <Server className="w-5 h-5" />
                  Backend Layer
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• NestJS (API Server)</li>
                  <li>• TypeScript</li>
                  <li>• WebSocket Server</li>
                  <li>• REST API</li>
                  <li>• JWT Authentication</li>
                  <li>• RBAC Authorization</li>
                  <li>• MQTT Broker Connection</li>
                  <li>• Real-time Event Bus</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-yellow-400">
                  <Database className="w-5 h-5" />
                  Data Layer
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• PostgreSQL</li>
                  <li>• Supabase (Managed PaaS)</li>
                  <li>• Real-time Subscriptions</li>
                  <li>• Incident Records</li>
                  <li>• User Management</li>
                  <li>• Sensor Telemetry</li>
                  <li>• Alert History</li>
                  <li>• Risk Analysis Data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Real-Time Data Flow */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Real-Time Data Flow</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <p className="text-text-muted mb-8">When a disaster incident is detected or reported, CrisisMesh's unified pipeline ensures every stakeholder receives actionable information instantly:</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-red-400">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400">Incident Detection</h4>
                  <p className="text-text-muted text-sm">IoT sensors detect environmental hazard OR citizen submits emergency SOS through mobile app</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 border border-orange-500/50 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-orange-400">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400">AI Risk Analysis</h4>
                  <p className="text-text-muted text-sm">Python-based ML models analyze sensor data and incident context to calculate risk severity and spread predictions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 border border-yellow-500/50 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-yellow-400">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Database Persistence</h4>
                  <p className="text-text-muted text-sm">NestJS backend writes incident data to PostgreSQL/Supabase with real-time subscription triggers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-blue-400">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">WebSocket Broadcast</h4>
                  <p className="text-text-muted text-sm">Real-time event broadcast to all connected authority dashboards, responder apps, and citizen updates</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-500/20 border border-violet-500/50 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-violet-400">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-400">Coordinated Response</h4>
                  <p className="text-text-muted text-sm">Authorities activate emergency protocols, responders coordinate on live map, affected citizens receive urgent alerts and safety guidance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IoT Architecture */}
        <section>
          <h2 className="text-3xl font-bold mb-6">IoT Integration & Sensor Network</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <p className="text-text-muted mb-8">CrisisMesh's distributed IoT architecture enables real-time environmental monitoring across India's most vulnerable regions:</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/20 border border-amber-500/50 rounded-lg flex items-center justify-center">
                  <Radio className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400">MQTT-Based Data Ingestion</h4>
                  <p className="text-text-muted text-sm">The proposed MQTT path covers environmental telemetry into backend services; deployed hardware and sensor coverage are unverified</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400">Telemetry Processing Pipeline</h4>
                  <p className="text-text-muted text-sm">Time-series data aggregation, normalization, and validation before storage in PostgreSQL for historical analysis and trend detection</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-400">Real-Time Risk Correlation</h4>
                  <p className="text-text-muted text-sm">Machine learning correlates sensor patterns with historical disaster data to identify emerging hazards before human-reportable levels are reached</p>
                </div>
              </div>
            </div>
            <p className="text-text-muted text-sm mt-8 pt-6 border-t border-border">
              <strong>Implementation Status:</strong> Sensor network currently operates in simulation and production test environments. Hardware deployment across all 766 districts is ongoing as part of the national resilience initiative.
            </p>
          </div>
        </section>

        {/* AI & Risk Analysis */}
        <section>
          <h2 className="text-3xl font-bold mb-6">AI-Powered Risk Prediction</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <p className="text-text-muted mb-6">
              CrisisMesh's risk engine uses machine learning to transform raw sensor data and incident reports into actionable predictive intelligence. The system analyzes patterns across India's disaster history combined with real-time environmental signals.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-amber-400 mb-3">Implemented Features</h4>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>✓ Pattern recognition from historical disasters</li>
                  <li>✓ Sensor correlation analysis</li>
                  <li>✓ Risk scoring and severity classification</li>
                  <li>✓ Geographic impact zone prediction</li>
                  <li>✓ Resource requirement forecasting</li>
                  <li>✓ Real-time confidence metrics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-3">Technology Stack</h4>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Python (ML Framework)</li>
                  <li>• scikit-learn (Algorithms)</li>
                  <li>• Historical disaster datasets</li>
                  <li>• Real-time sensor feeds</li>
                  <li>• REST API integration</li>
                  <li>• Async processing pipelines</li>
                </ul>
              </div>
            </div>
            <p className="text-text-muted text-sm mt-8 pt-6 border-t border-border">
              <strong>Current Implementation:</strong> The risk engine operates through implemented heuristic and statistical models trained on India's National Disaster Management Authority (NDMA) datasets and real-world incident patterns. Models are continuously refined as new field data is collected.
            </p>
          </div>
        </section>

        {/* Security & RBAC */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Security & Access Control</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <p className="text-text-muted mb-8">CrisisMesh implements enterprise-grade security with role-based access control to ensure only authorized personnel access sensitive emergency information:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Authentication
                </h4>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• JWT-based token authentication</li>
                  <li>• Secure session management</li>
                  <li>• Multi-factor authentication support</li>
                  <li>• OAuth 2.0 integration</li>
                  <li>• Biometric support (mobile)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Authorization & RBAC
                </h4>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Citizen, Responder, Authority roles</li>
                  <li>• Fine-grained permission management</li>
                  <li>• Data access restrictions</li>
                  <li>• Audit logging of all actions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Data Protection
                </h4>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• End-to-end encryption for sensitive data</li>
                  <li>• TLS/SSL for all communications</li>
                  <li>• Secure API endpoints</li>
                  <li>• Input validation and sanitization</li>
                  <li>• SQL injection prevention</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Infrastructure
                </h4>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Environment variable protection</li>
                  <li>• Secrets management</li>
                  <li>• Secure database connections</li>
                  <li>• Regular security audits</li>
                  <li>• Compliance with NDMA standards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-red-400 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Live Command Map
              </h3>
              <p className="text-text-muted text-sm">Real-time Leaflet-based map visualization showing incident locations, affected zones, rescue units, safe shelters, and emergency resources across districts</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-orange-400 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Multi-Channel Alerts
              </h3>
              <p className="text-text-muted text-sm">Instant push notifications, SMS, and in-app alerts to affected citizens, responders, and authorities with severity levels and recommended actions</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Responder Coordination
              </h3>
              <p className="text-text-muted text-sm">Unified dashboard for emergency responders showing real-time resource deployment, incident priorities, team locations, and communication channels</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-blue-400 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Weather Monitoring
              </h3>
              <p className="text-text-muted text-sm">Detailed regional weather forecasts, extreme weather alerts, rainfall intensity tracking, and flood risk predictions updated in real-time</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-violet-400 flex items-center gap-2">
                <Radio className="w-5 h-5" />
                IoT Sensor Dashboard
              </h3>
              <p className="text-text-muted text-sm">Monitoring interface concept for environmental telemetry, historical trends, and anomaly detection alerts</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-cyan-400 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Mobile SOS & Reporting
              </h3>
              <p className="text-text-muted text-sm">Flutter app with one-tap emergency SOS, incident photo/video reporting, location sharing, and offline-first capabilities for low-connectivity areas</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-red-400">Frontend & Mobile</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• Next.js 13+ with App Router</li>
                  <li>• React 18+ with Hooks</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Leaflet for map visualization</li>
                  <li>• OpenStreetMap integration</li>
                  <li>• Flutter 3+ for mobile</li>
                  <li>• Dart programming language</li>
                  <li>• WebSocket client libraries</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-orange-400">Backend & Services</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• NestJS framework</li>
                  <li>• TypeScript backend</li>
                  <li>• WebSocket servers</li>
                  <li>• REST API design</li>
                  <li>• MQTT broker integration</li>
                  <li>• Python for ML/analytics</li>
                  <li>• scikit-learn for models</li>
                  <li>• Async processing</li>
                  <li>• JWT authentication</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-yellow-400">Data & Infrastructure</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• PostgreSQL database</li>
                  <li>• Supabase managed platform</li>
                  <li>• Real-time subscriptions</li>
                  <li>• Time-series data storage</li>
                  <li>• Redis caching layer</li>
                  <li>• Vercel deployment</li>
                  <li>• Docker containerization</li>
                  <li>• Environment-based config</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-blue-400">Security & Observability</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• JWT token management</li>
                  <li>• Role-based access control</li>
                  <li>• TLS/SSL encryption</li>
                  <li>• Input validation</li>
                  <li>• Audit logging</li>
                  <li>• Error tracking</li>
                  <li>• Performance monitoring</li>
                  <li>• Analytics integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Decisions */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Engineering Decisions</h2>
          <div className="space-y-6">
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-red-400 mb-2">Why Next.js + Flutter?</h3>
              <p className="text-text-muted text-sm">Next.js provides server-side rendering, optimized performance, and deployment simplicity for the web dashboard. Flutter enables cross-platform mobile development (iOS/Android) with native performance for emergency responders in the field, allowing code reuse and faster iteration.</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-orange-400 mb-2">Why NestJS + TypeScript?</h3>
              <p className="text-text-muted text-sm">NestJS provides enterprise-grade architecture with built-in support for WebSockets, middleware, and dependency injection. TypeScript prevents runtime errors and improves developer productivity. This combination enables rapid development of complex real-time systems while maintaining code maintainability.</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-yellow-400 mb-2">Why WebSockets?</h3>
              <p className="text-text-muted text-sm">Real-time disaster response requires instantaneous updates. WebSockets maintain persistent bidirectional connections between frontend and backend, eliminating polling overhead and ensuring every user receives alerts within milliseconds of incident detection. This is critical for coordinated emergency response.</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-blue-400 mb-2">Why MQTT for IoT?</h3>
              <p className="text-text-muted text-sm">MQTT is the industry standard for IoT communication due to its publish-subscribe architecture, minimal bandwidth footprint, and reliability in low-connectivity scenarios. The protocol naturally handles thousands of sensors efficiently and integrates seamlessly with the NestJS backend via MQTT broker connections.</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-violet-400 mb-2">Why PostgreSQL + Supabase?</h3>
              <p className="text-text-muted text-sm">PostgreSQL provides ACID compliance, complex querying, and time-series data support for incident tracking. Supabase adds real-time subscriptions (automatic WebSocket broadcasts when data changes), built-in authentication, and managed hosting, eliminating infrastructure overhead for disaster response operations.</p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-cyan-400 mb-2">Why Leaflet + OpenStreetMap?</h3>
              <p className="text-text-muted text-sm">Leaflet is the lightweight, open-source map library with minimal performance overhead - critical for responders with slow connections. OpenStreetMap ensures map data is always available independently of third-party services, maintaining operations during infrastructure failures or internet restrictions.</p>
            </div>
          </div>
        </section>

        {/* Deployment & Status */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Deployment & Availability</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-red-400 mb-3">Frontend Deployment</h3>
                <p className="text-text-muted text-sm mb-2">Web dashboard deployed on Vercel with automatic deployments on every GitHub push. CDN distribution ensures sub-second response times for responders globally.</p>
                <p className="text-text-muted text-xs">Status: <span className="text-green-400">Live ✓</span></p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-400 mb-3">Backend Services</h3>
                <p className="text-text-muted text-sm mb-2">The demo exposes the intended backend boundary; production deployment, autoscaling, and uptime guarantees are unverified.</p>
                <p className="text-text-muted text-xs">Status: <span className="text-green-400">Live ✓</span></p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-3">Mobile Apps</h3>
                <p className="text-text-muted text-sm mb-2">Flutter apps available on Apple App Store and Google Play Store for iOS and Android users. Automatic updates via respective app stores.</p>
                <p className="text-text-muted text-xs">Status: <span className="text-green-400">Live ✓</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-6">Experience CrisisMesh</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
            Explore how CrisisMesh is transforming disaster response and emergency coordination across India through real-time technology and intelligent systems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://crisis-mesh-eosin.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition"
            >
              <ExternalLink className="w-5 h-5" />
              Launch Live Platform
            </a>
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 bg-background-elevated border border-border px-8 py-3 rounded-lg hover:border-primary transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              Back to Projects
            </a>
          </div>
        </section>
      </div>
    </section>
  )
}
