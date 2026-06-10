import React from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhatIBuild } from '@/components/WhatIBuild';
import { TechStack } from '@/components/TechStack';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Journey } from '@/components/Journey';
import { Achievements } from '@/components/Achievements';
import { OpenTo } from '@/components/OpenTo';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { BackToTop } from '@/components/ui/BackToTop';
import { SkillsMatrix } from '@/components/SkillsMatrix';
import { WhyHireMe } from '@/components/WhyHireMe';
import PhotoGallery from '@/components/PhotoGallery';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arpit Kumar | Flutter Developer, Full Stack Developer & IoT Enthusiast</title>
        <meta name="description" content="Portfolio of Arpit Kumar showcasing Flutter apps, Full Stack projects, IoT solutions, AI projects, and engineering journey." />
        <link rel="icon" href="/assets/images/favicon.svg" />
        <link rel="canonical" href="https://arpitkumar.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Arpit Kumar | Flutter Developer, Full Stack Developer & IoT Enthusiast" />
        <meta property="og:description" content="Portfolio of Arpit Kumar showcasing Flutter apps, Full Stack projects, IoT solutions, AI projects, and engineering journey." />
        <meta property="og:image" content="/assets/images/photo2.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpitkumar.dev" />
        <meta property="og:site_name" content="Arpit Kumar Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Arpit_patel28" />
        <meta name="twitter:creator" content="@Arpit_patel28" />
        <meta name="twitter:title" content="Arpit Kumar | Flutter Developer, Full Stack Developer & IoT Enthusiast" />
        <meta name="twitter:description" content="Portfolio of Arpit Kumar showcasing Flutter apps, Full Stack projects, IoT solutions, AI projects, and engineering journey." />
        <meta name="twitter:image" content="/assets/images/photo2.jpeg" />
        
        {/* Mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#0a0a0a" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="Arpit Kumar, Flutter Developer, Full Stack Developer, IoT Enthusiast, React, Next.js, TypeScript, Portfolio, Software Engineer" />
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
              "jobTitle": "Flutter Developer, Full Stack Developer & IoT Enthusiast",
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
      <main className="min-h-screen bg-background text-white">
        <Navbar />
        <Hero />
        <WhatIBuild />
        <TechStack />
        <SkillsMatrix />
        <WhyHireMe />
        <About />
        <Projects />
        <Journey />
        <Achievements />
        <OpenTo />
        <Education />
        <Contact />
        
        <footer className="py-8 text-center text-muted border-t border-white/10">
          <p>&copy; 2026 Arpit Kumar. All rights reserved.</p>
        </footer>
      </main>
      <BackToTop />
    </>
  );
}
