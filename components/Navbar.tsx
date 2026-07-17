'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/Button';

const navItems = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#journey' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="#home"
              onClick={closeMenu}
              className="group leading-none"
              aria-label="Arpit Kumar - Home"
            >
              <span className="block text-xl md:text-2xl font-black tracking-wide text-primary transition-opacity group-hover:opacity-80">
                Arpit Kumar
              </span>
              <span className="mt-1 block text-[9px] font-black tracking-[0.14em] text-text-secondary sm:text-[11px] sm:tracking-[0.18em]">
                Software Engineer · Flutter · Full Stack
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {item.name}
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
                className="p-2 rounded-lg hover:bg-background-elevated transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
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
              role="menu"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                    role="menuitem"
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
