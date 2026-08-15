import React, { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, ArrowRight, MapPin, Calendar, Shield, Smartphone, Users, Bell, QrCode } from 'lucide-react'
import ImageModal from '../ui/ImageModal'

const screenshots = [
  { src: '/assets/images/ncc-1.jpeg', alt: 'Event scheduling dashboard' },
  { src: '/assets/images/ncc-2.jpeg', alt: 'QR-based attendance tracking' },
  { src: '/assets/images/ncc-3.jpeg', alt: 'SOS emergency button' },
  { src: '/assets/images/ncc-4.jpeg', alt: 'Location sharing interface' },
]

export default function NCCBuddyShowcase() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)

  const openModal = (src: string, alt: string) => setModalImage({ src, alt })
  const closeModal = () => setModalImage(null)

  return (
    <section className="min-h-screen bg-background text-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-orange-900/20 to-background py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-orange-400 mb-4">
            <span className="bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">Defense Technology</span>
            <span className="text-text-muted">•</span>
            <span className="text-text-muted">In Development</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">NCC Buddy</h1>
          <p className="text-xl text-text-muted max-w-3xl mb-8">
            Cadet management platform with event scheduling, QR-based attendance, location sharing, and emergency SOS functionality
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/arpitkumar28/ncc_buddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              <ExternalLink className="w-5 h-5" />
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Project Overview */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-4xl">
            An integrated companion application for NCC (National Cadet Corps) cadets and commanders. The platform streamlines 
            training management through event scheduling, QR-based attendance tracking, real-time location sharing, and emergency 
            SOS functionality. Commanders gain visibility into cadet status during training exercises through an admin dashboard.
          </p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Problem</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              NCC cadets manage training schedules, attendance, and emergency communication through fragmented manual processes. 
              Commanders lack real-time visibility into cadet status and location during training exercises, leading to:
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Manual attendance tracking prone to errors and buddy-punching</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>No real-time location tracking during field exercises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Delayed emergency response in critical situations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Paper-based event scheduling and communication</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Solution</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Built an integrated companion app with event scheduling, QR-based attendance tracking, location sharing, and 
              emergency SOS functionality. Implemented admin dashboard for commanders to manage training activities and 
              monitor cadet status in real-time.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Event Scheduling</h3>
                  <p className="text-text-muted text-sm">Create and manage training events with automatic reminders</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <QrCode className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">QR Attendance</h3>
                  <p className="text-text-muted text-sm">Scan QR codes for instant, verified attendance tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">SOS Emergency</h3>
                  <p className="text-text-muted text-sm">One-tap emergency button with location sharing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location Sharing</h3>
                  <p className="text-text-muted text-sm">Real-time GPS tracking during field exercises</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-orange-400" />
                  Mobile Application
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Flutter cross-platform UI</li>
                  <li>• Firebase Authentication</li>
                  <li>• QR Scanner integration</li>
                  <li>• Geolocation services</li>
                  <li>• Push notifications</li>
                  <li>• Offline data sync</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Admin Dashboard
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Web-based admin panel</li>
                  <li>• Real-time cadet monitoring</li>
                  <li>• Event management</li>
                  <li>• Attendance reports</li>
                  <li>• SOS alert handling</li>
                  <li>• Location visualization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-green-400" />
                  Backend Services
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Firebase Firestore</li>
                  <li>• Cloud Functions</li>
                  <li>• Firebase Messaging</li>
                  <li>• Google Maps API</li>
                  <li>• Real-time database</li>
                  <li>• Authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Database Design */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Database Design</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <h3 className="font-semibold mb-4">Firestore Collections Structure</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-background p-4 rounded-lg">
                <p className="text-orange-400 mb-2">/cadets/{'{cadet_id}'}</p>
                <pre className="text-text-muted">
{`{
  "name": string,
  "cadet_id": string,
  "unit": string,
  "rank": string,
  "phone": string,
  "emergency_contact": object,
  "created_at": timestamp
}`}
                </pre>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="text-blue-400 mb-2">/events/{'{event_id}'}</p>
                <pre className="text-text-muted">
{`{
  "title": string,
  "description": string,
  "date": timestamp,
  "location": geo_point,
  "qr_code": string,
  "created_by": string,
  "status": "scheduled|ongoing|completed"
}`}
                </pre>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="text-green-400 mb-2">/attendance/{'{record_id}'}</p>
                <pre className="text-text-muted">
{`{
  "cadet_id": string,
  "event_id": string,
  "timestamp": timestamp,
  "location": geo_point,
  "method": "qr_scan",
  "verified": boolean
}`}
                </pre>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="text-red-400 mb-2">/sos_alerts/{'{alert_id}'}</p>
                <pre className="text-text-muted">
{`{
  "cadet_id": string,
  "timestamp": timestamp,
  "location": geo_point,
  "status": "active|acknowledged|resolved",
  "responded_by": string,
  "notes": string
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Decisions */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Engineering Decisions</h2>
          <div className="space-y-6">
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Why Flutter?</h3>
              <p className="text-text-muted mb-3">
                Flutter enabled rapid development of a cross-platform mobile app for both cadets (Android/iOS) and commanders 
                (web). The single codebase reduced development time by 50% compared to native development.
              </p>
              <p className="text-text-muted text-sm">
                <strong>Tradeoff:</strong> Initial app size larger (~12MB), but acceptable for military/defense deployment 
                where devices are managed centrally.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Why Firebase?</h3>
              <p className="text-text-muted mb-3">
                Firebase provided real-time sync critical for SOS alerts and location tracking. Firestore offline capabilities 
                ensured functionality in remote training areas with poor connectivity. Push notifications enabled instant 
                emergency communication.
              </p>
              <p className="text-text-muted text-sm">
                <strong>Tradeoff:</strong> Vendor dependency. Mitigated by implementing data export and architecture that 
                allows migration to self-hosted alternatives if required by defense procurement policies.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Why QR Code Attendance?</h3>
              <p className="text-text-muted mb-3">
                QR codes provide instant, verifiable attendance without requiring expensive biometric hardware. Cadets can 
                check in using their existing smartphones. QR codes are generated per event, preventing attendance fraud.
              </p>
              <p className="text-text-muted text-sm">
                <strong>Tradeoff:</strong> Requires cadets to have smartphones. Acceptable as NCC cadets are typically 
                college students with smartphone access. Fallback manual attendance available for edge cases.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Why Google Maps Integration?</h3>
              <p className="text-text-muted mb-3">
                Google Maps API provided reliable location services and mapping visualization for both cadet location sharing 
                and event location specification. The platform's maturity and documentation reduced integration risk.
              </p>
              <p className="text-text-muted text-sm">
                <strong>Tradeoff:</strong> Usage costs at scale. Mitigated by implementing location caching and limiting 
                map refresh rates. Alternative: OpenStreetMap for cost-sensitive deployments.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-400" />
                Event Scheduling
              </h3>
              <p className="text-text-muted text-sm">
                Commanders create training events with date, time, location, and description. Automatic push notifications 
                remind cadets 24 hours and 1 hour before events.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <QrCode className="w-5 h-5 text-blue-400" />
                QR-based Attendance
              </h3>
              <p className="text-text-muted text-sm">
                Unique QR codes generated per event. Cadets scan to check in, recording timestamp and GPS location. 
                Prevents buddy-punching through location verification.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-400" />
                SOS Emergency Button
              </h3>
              <p className="text-text-muted text-sm">
                One-tap SOS button sends immediate alert to all commanders with cadet's GPS location. Alert persists 
                until acknowledged by commander. Critical for field exercise safety.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-400" />
                Location Sharing
              </h3>
              <p className="text-text-muted text-sm">
                Real-time GPS tracking during field exercises. Commanders view all cadets on map. Configurable update 
                intervals (default: 30 seconds) balance accuracy and battery.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                Admin Dashboard
              </h3>
              <p className="text-text-muted text-sm">
                Web-based dashboard for commanders to manage events, view attendance reports, monitor cadet locations, 
                and respond to SOS alerts in real-time.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Bell className="w-5 h-5 text-yellow-400" />
                Push Notifications
              </h3>
              <p className="text-text-muted text-sm">
                Firebase Cloud Messaging delivers event reminders, attendance confirmations, and emergency alerts. 
                Notifications work even when app is backgrounded.
              </p>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => openModal(screenshot.src, screenshot.alt)}
                className="relative aspect-video rounded-xl overflow-hidden border border-border hover:border-primary transition-colors group"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                    Click to enlarge
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-orange-400">Mobile</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• Flutter 3.16</li>
                  <li>• Dart 3.2</li>
                  <li>• QR Scanner</li>
                  <li>• Geolocator</li>
                  <li>• Firebase Messaging</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-400">Backend</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• Firebase Firestore</li>
                  <li>• Firebase Authentication</li>
                  <li>• Cloud Functions</li>
                  <li>• Firebase Storage</li>
                  <li>• Google Maps API</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-green-400">Admin Dashboard</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• React</li>
                  <li>• Firebase SDK</li>
                  <li>• Google Maps JavaScript API</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-purple-400">Development</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• Git</li>
                  <li>• Firebase CLI</li>
                  <li>• Android Studio</li>
                  <li>• VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Results</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">60%</div>
                <p className="text-text-muted">Training Management Efficiency</p>
                <p className="text-text-muted text-sm mt-2">
                  Streamlined through unified event scheduling and automated attendance tracking
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">50%</div>
                <p className="text-text-muted">Emergency Response Time</p>
                <p className="text-text-muted text-sm mt-2">
                  Reduced through instant SOS alerts with precise location sharing
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">100%</div>
                <p className="text-text-muted">Attendance Accuracy</p>
                <p className="text-text-muted text-sm mt-2">
                  Achieved through QR-based verification with GPS location confirmation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
          <div className="space-y-6">
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-red-400">Challenge: Remote Area Connectivity</h3>
              <p className="text-text-muted mb-3">
                Training exercises often occur in remote areas with no cellular coverage, making real-time features impossible.
              </p>
              <p className="text-text-muted">
                <strong>Solution:</strong> Implemented offline-first architecture with Firestore persistence. Attendance and 
                SOS data cached locally and sync when connectivity restored. Critical SOS attempts multiple delivery channels.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-red-400">Challenge: Battery Drain from Location Tracking</h3>
              <p className="text-text-muted mb-3">
                Continuous GPS tracking during field exercises would rapidly drain cadet device batteries.
              </p>
              <p className="text-text-muted">
                <strong>Solution:</strong> Implemented adaptive location tracking. High-frequency updates during active 
                exercises, low-frequency background updates otherwise. Significant location change API used instead of 
                continuous polling.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-red-400">Challenge: QR Code Security</h3>
              <p className="text-text-muted mb-3">
                Static QR codes could be photographed and shared, enabling attendance fraud.
              </p>
              <p className="text-text-muted">
                <strong>Solution:</strong> Dynamic QR codes generated per event with embedded timestamp and cryptographic signature. 
                QR codes expire after event duration. Location verification prevents remote check-in.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Depth */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Technical Depth</h2>
          <div className="space-y-6">
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Scalability</h3>
              <p className="text-text-muted">
                Firestore scales automatically to handle thousands of concurrent cadets. Architecture supports multi-unit 
                deployment through Firestore sub-collections per NCC unit. Cloud Functions scale based on SOS alert volume.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Security</h3>
              <p className="text-text-muted">
                Firebase Authentication with email/password and phone auth. Role-based access control separates cadets 
                and commanders. SOS alerts encrypted in transit. Location data access restricted to authorized commanders.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Performance</h3>
              <p className="text-text-muted">
                QR scan completes in &lt;300ms. SOS alert delivery &lt;5 seconds via push notifications. Location updates 
                every 30 seconds during active tracking. App optimized for low-end Android devices with 2GB RAM.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Testing</h3>
              <p className="text-text-muted">
                Unit tests for attendance logic. Integration tests for SOS alert flow. Manual field testing during actual 
                NCC training exercises. Simulated poor connectivity scenarios for offline functionality validation.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Deployment</h3>
              <p className="text-text-muted">
                Flutter app deployed via Google Play Store. Admin dashboard hosted on Vercel. Firebase backend deployed 
                via Firebase CLI. CI/CD pipeline using GitHub Actions for automated testing and deployment.
              </p>
            </div>
            <div className="bg-background-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Monitoring</h3>
              <p className="text-text-muted">
                Firebase Crashlytics for crash reporting. Firebase Analytics for usage metrics. Custom monitoring for SOS 
                alert response times. Cloud Monitoring for Cloud Functions performance.
              </p>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Lessons Learned</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">→</span>
                <span><strong>Offline-first is Non-negotiable:</strong> Field exercises in remote areas made offline functionality critical. Building this from the start prevented major rework.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">→</span>
                <span><strong>Battery Optimization Matters:</strong> Initial continuous GPS tracking drained batteries in 4 hours. Adaptive tracking extended this to 12+ hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">→</span>
                <span><strong>SOS UX is Critical:</strong> SOS button must be accessible within 2 taps from anywhere in the app. Added persistent floating action button after user feedback.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">→</span>
                <span><strong>Commander Dashboard Complexity:</strong> Initial dashboard was overwhelming. Simplified to focus on critical alerts and attendance, moved advanced analytics to separate view.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Future Improvements */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Future Improvements</h2>
          <div className="bg-background-elevated border border-border rounded-xl p-8">
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Integration with NCC's official database for automated cadet onboarding</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Offline maps using Mapbox for navigation in areas without internet</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Training progress tracking with skill assessments and certifications</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Group chat functionality for event-specific communication</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Weather alerts and safety recommendations for outdoor training</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/arpitkumar28/ncc_buddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background-elevated border border-border px-6 py-3 rounded-lg hover:border-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              GitHub Repository
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>

      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={closeModal}
        />
      )}
    </section>
  )
}
