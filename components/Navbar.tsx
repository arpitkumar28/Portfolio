'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/Button';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Cybersecurity', href: '#problem-solving-security' },
  { name: 'Experience', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mascotX, setMascotX] = useState<number | null>(null);
  const navRowRef = useRef<HTMLDivElement>(null);
  const navLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const activeSectionRef = useRef(activeSection);
  const activeFrameRef = useRef<number | null>(null);
  activeSectionRef.current = activeSection;

  const positionMascot = useCallback((section: string) => {
    const container = navRowRef.current;
    const link = navLinkRefs.current[section];
    if (!container || !link) return;
    const containerRect = container.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setMascotX(linkRect.left - containerRect.left + linkRect.width / 2);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const setSection = (section: string) => {
      if (!sectionIds.includes(section)) return;
      if (activeSectionRef.current === section) return;
      activeSectionRef.current = section;
      setActiveSection(section);
      requestAnimationFrame(() => positionMascot(section));
    };

    const updateActiveSection = () => {
      const activationLine = Math.min(window.innerHeight * 0.34, 220);
      const orderedSections = sections
        .map((section) => ({ section, top: section.getBoundingClientRect().top }))
        .sort((a, b) => a.top - b.top);
      const passedSections = orderedSections.filter(({ top }) => top <= activationLine);
      const current = passedSections[passedSections.length - 1]?.section;
      setSection(current?.id ?? 'home');
    };

    const initialHash = window.location.hash.slice(1);
    if (sectionIds.includes(initialHash)) setSection(initialHash);
    else setSection('home');

    const updateScrolled = () => setIsScrolled(window.scrollY > 50);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    const scheduleActiveUpdate = () => {
      if (activeFrameRef.current !== null) return;
      activeFrameRef.current = window.requestAnimationFrame(() => {
        activeFrameRef.current = null;
        updateActiveSection();
      });
    };
    window.addEventListener('scroll', scheduleActiveUpdate, { passive: true });
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && sectionIds.includes(hash)) setSection(hash);
    };
    window.addEventListener('hashchange', handleHashChange);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });
    sections.forEach((section) => observer.observe(section));

    const handleResize = () => {
      updateActiveSection();
      positionMascot(activeSectionRef.current);
    };
    window.addEventListener('resize', handleResize);
    requestAnimationFrame(() => positionMascot(initialHash && sectionIds.includes(initialHash) ? initialHash : 'home'));
    scheduleActiveUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateScrolled);
      window.removeEventListener('scroll', scheduleActiveUpdate);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('resize', handleResize);
      if (activeFrameRef.current !== null) window.cancelAnimationFrame(activeFrameRef.current);
    };
  }, [positionMascot]);

  useEffect(() => {
    positionMascot(activeSection);
  }, [activeSection, positionMascot]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/80'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div ref={navRowRef} className="relative flex h-[4.5rem] items-center justify-between md:h-20">
            <span
              className="navbar-mascot-indicator hidden md:grid"
              aria-hidden="true"
              style={{ transform: `translate3d(${mascotX ?? 0}px, 0, 0) translateX(-50%)`, opacity: mascotX === null ? 0 : 1 }}
            >
              <Image src="/images/mascot/cyber-guardian.png" alt="" width={34} height={34} priority />
            </span>
            <a
              href="#home"
              onClick={closeMenu}
              className="group leading-none"
              aria-label="Arpit Kumar - Home"
            >
                <span className="block text-xl md:text-2xl font-black tracking-wide text-text-primary transition-opacity group-hover:opacity-80">
                ARPIT<span className="text-primary">.</span>
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  ref={(element) => { navLinkRefs.current[item.href.slice(1)] = element; }}
                  onClick={closeMenu}
                  className={`relative rounded-sm py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  aria-current={activeSection === item.href.substring(1) ? 'location' : undefined}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && <motion.span layoutId="active-nav-indicator" className="absolute -bottom-1 left-0 right-0 h-px bg-primary" transition={{ duration: 0.25 }} />}
                </a>
              ))}
              <Button
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2.5 font-semibold text-sm"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                className="rounded-lg p-2 transition-colors hover:bg-background-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
              id="mobile-menu"
              role="region"
              aria-label="Mobile navigation"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                    aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
