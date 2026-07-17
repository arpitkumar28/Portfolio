import React from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Journey } from '@/components/Journey';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { BackToTop } from '@/components/ui/BackToTop';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arpit Kumar | Software Engineer</title>
        <meta name="description" content="Software engineer building AI, full-stack, and IoT products that solve real-world problems. Flutter, React, Next.js, Python." />
        <link rel="icon" href="/assets/images/favicon.svg" />
        <link rel="canonical" href="https://arpitkumar.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Arpit Kumar | Software Engineer" />
        <meta property="og:description" content="Software engineer building AI, full-stack, and IoT products that solve real-world problems." />
        <meta property="og:image" content="/assets/images/photo2.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpitkumar.dev" />
        <meta property="og:site_name" content="Arpit Kumar Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Arpit_patel28" />
        <meta name="twitter:creator" content="@Arpit_patel28" />
        <meta name="twitter:title" content="Arpit Kumar | Software Engineer" />
        <meta name="twitter:description" content="Software engineer building AI, full-stack, and IoT products that solve real-world problems." />
        <meta name="twitter:image" content="/assets/images/photo2.jpeg" />
        
        {/* Mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#0a0a0a" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="Arpit Kumar, Software Engineer, Flutter, React, Next.js, TypeScript, Python, AI, Full Stack, IoT" />
        <meta name="author" content="Arpit Kumar" />
        <meta name="robots" content="index, follow" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Arpit Kumar",
              "jobTitle": "Software Engineer",
              "url": "https://arpitkumar.dev",
              "sameAs": [
                "https://github.com/arpitkumar28",
                "https://www.linkedin.com/in/arpitkumar0211",
                "https://x.com/Arpit_patel28"
              ],
              "email": "arpitkumar0211@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "addressCountry": "India"
              },
              "knowsAbout": [
                "Flutter",
                "React",
                "Next.js",
                "TypeScript",
                "IoT",
                "Full Stack Development",
                "Mobile Development"
              ]
            })
          }}
        />
      </Head>
      <main className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <Hero />
        
        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-16">
          <div className="space-y-16 lg:space-y-20">
            <Projects />
            <Journey />
            <About />
            <TechStack />
            <Achievements />
            <Contact />
          </div>
        </div>
        
        <footer className="relative overflow-hidden border-t border-border bg-background-card py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_32rem)]" />
          <div className="relative mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-4xl font-black tracking-wide text-primary">Arpit Kumar</h2>
                <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-text-muted">
                  <span className="font-black text-text-primary">Software Engineer</span> building production-grade full-stack, Flutter, AI-integrated, and IoT systems. Open to internships, collaboration, and product builds.
                </p>

                <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                  {[
                    ['04+', 'Projects'],
                    ['100+', 'Problems'],
                    ['02+', 'Wins'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl border border-border bg-background-elevated p-4">
                      <p className="text-xl font-black text-primary">{value}</p>
                      <p className="mt-1 text-sm font-bold text-text-muted">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <p className="font-mono text-sm font-black uppercase tracking-[0.22em] text-text-muted">Site Map</p>
                  <div className="mt-6 space-y-4">
                    {[
                      ['Home', '#home'],
                      ['Projects', '#projects'],
                      ['About Me', '#about'],
                      ['CV Pack', '/resume.pdf'],
                      ['Contact', '#contact'],
                    ].map(([label, href]) => (
                      <a key={label} href={href} className="block text-lg font-black uppercase tracking-wide text-text-muted transition-colors hover:text-primary">
                        {label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-sm font-black uppercase tracking-[0.22em] text-text-muted">Technical</p>
                  <div className="mt-6 space-y-3">
                    {[
                      ['GitHub', 'https://github.com/arpitkumar28'],
                      ['LinkedIn', 'https://www.linkedin.com/in/arpitkumar0211'],
                      ['Twitter', 'https://x.com/Arpit_patel28'],
                    ].map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg bg-background-elevated px-4 py-3 text-lg font-black text-text-muted transition-colors hover:text-primary"
                      >
                        {label}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-6 text-sm font-medium text-text-muted">
              © 2026 Arpit Kumar. Built with Next.js, TypeScript, and Tailwind CSS.
            </div>
          </div>
        </footer>
      </main>
      <ThemeToggle />
      <BackToTop />
    </>
  );
}
