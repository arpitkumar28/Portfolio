import React from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhatIBuild } from '@/components/WhatIBuild';
import { TechStack } from '@/components/TechStack';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Journey } from '@/components/Journey';
import { OpenTo } from '@/components/OpenTo';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arpit Kumar | Flutter & Full Stack Developer</title>
        <meta name="description" content="Portfolio of Arpit Kumar, Flutter Developer, Full Stack Developer, and IoT Enthusiast showcasing projects, skills, and engineering journey." />
        <link rel="icon" href="/assets/images/favicon.svg" />
        <link rel="canonical" href="https://arpitkumar.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Arpit Kumar | Flutter & Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Arpit Kumar, Flutter Developer, Full Stack Developer, and IoT Enthusiast showcasing projects, skills, and engineering journey." />
        <meta property="og:image" content="/assets/images/photo2.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpitkumar.dev" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arpit Kumar | Flutter & Full Stack Developer" />
        <meta name="twitter:description" content="Portfolio of Arpit Kumar, Flutter Developer, Full Stack Developer, and IoT Enthusiast showcasing projects, skills, and engineering journey." />
        <meta name="twitter:image" content="/assets/images/photo2.jpeg" />
        
        {/* Mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#0a0a0a" />
      </Head>
      <main className="min-h-screen bg-background text-white">
        <Navbar />
        <Hero />
        <WhatIBuild />
        <TechStack />
        <About />
        <Projects />
        <Journey />
        <OpenTo />
        <Education />
        <Contact />
        
        <footer className="py-8 text-center text-muted border-t border-white/10">
          <p>&copy; 2026 Arpit Kumar. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
