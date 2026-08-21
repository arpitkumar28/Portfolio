import React from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Journey } from '@/components/Journey';
import { Education } from '@/components/Education';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { BackToTop } from '@/components/ui/BackToTop';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ExternalLink } from 'lucide-react';
import { VisitorCounter } from '@/components/VisitorCounter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arpit Kumar — Software Developer | Full-Stack, Flutter & AI</title>
        <meta name="description" content="Arpit Kumar is a software developer and B.Tech Information Technology student building full-stack web applications, Flutter mobile apps and AI-powered systems." />
        <link rel="icon" href="/assets/images/favicon.svg" />
        <link rel="canonical" href="https://arpitkumar.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Arpit Kumar — Software Developer | Full-Stack, Flutter & AI" />
        <meta property="og:description" content="Software developer and B.Tech IT student building full-stack web applications, Flutter mobile apps and AI-powered systems." />
        <meta property="og:image" content="/assets/images/photo2.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpitkumar.dev" />
        <meta property="og:site_name" content="Arpit Kumar Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Arpit_patel28" />
        <meta name="twitter:creator" content="@Arpit_patel28" />
        <meta name="twitter:title" content="Arpit Kumar — Software Developer | Full-Stack, Flutter & AI" />
        <meta name="twitter:description" content="Software developer and B.Tech IT student building full-stack web applications, Flutter mobile apps and AI-powered systems." />
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
              "jobTitle": "Software Developer",
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
      <main id="main-content" className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <Hero />
        
        {/* Main Content Layout */}
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:py-14">
          <div className="space-y-12 lg:space-y-16">
            <Projects />
            <Journey />
            <Education />
            <About />
            <TechStack />
            <Achievements />
            <Contact />
          </div>
        </div>
        
        <footer className="relative overflow-hidden border-t border-border bg-background-card py-12 md:py-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-3xl border border-border bg-background-elevated/70 p-7 md:p-9">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div><p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-primary">Let&apos;s connect</p><h2 className="mt-3 font-display text-4xl font-black tracking-tight text-text-primary">Arpit Kumar<span className="text-primary">.</span></h2></div>
                  <VisitorCounter />
                </div>
                <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-text-muted"><span className="font-black text-text-primary">Software Developer</span> building full-stack web applications, Flutter mobile apps, AI-powered systems, and scalable backend solutions.</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {['Full Stack', 'Flutter', 'AI / GenAI', 'Backend'].map((item) => <span key={item} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-black text-primary">{item}</span>)}
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-3xl border border-border bg-background-elevated/70 p-7"><p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-text-muted">Navigate</p><div className="mt-5 grid grid-cols-2 gap-3">{[['Home','#home'],['Projects','#projects'],['About','#about'],['Contact','#contact'],['Resume','/resume.pdf'],['Education','#education']].map(([label,href]) => <a key={label} href={href} className="rounded-xl px-3 py-2 text-sm font-black text-text-muted transition-colors hover:bg-primary/10 hover:text-primary">{label}</a>)}</div></div>
                <div className="rounded-3xl border border-border bg-background-elevated/70 p-7"><p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-text-muted">Find me online</p><div className="mt-5 space-y-2">{[['GitHub','https://github.com/arpitkumar28'],['LinkedIn','https://www.linkedin.com/in/arpitkumar0211'],['X / Twitter','https://x.com/Arpit_patel28']].map(([label,href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-black text-text-muted transition-colors hover:bg-primary/10 hover:text-primary">{label}<ExternalLink className="h-4 w-4" /></a>)}</div></div>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-sm font-medium text-text-muted sm:flex-row"><span>© 2026 Arpit Kumar. Designed & built with ❤️</span><span className="font-mono text-xs uppercase tracking-wider text-text-subtle">Keep building. Keep learning.</span></div>
          </div>
        </footer>
      </main>
      <ThemeToggle />
      <BackToTop />
    </>
  );
}
