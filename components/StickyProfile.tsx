'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Mail, MapPin, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { LinkedInIcon, GitHubIcon, XIcon } from './ui/SocialIcons';

export const StickyProfile: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Scroll-based animations
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const translateY = useTransform(scrollY, [0, 400], [0, -60]);
  const borderRadius = useTransform(scrollY, [0, 400], ['50%', '1rem']);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hide on mobile and tablet, show on desktop
  if (isMobile) return null;

  return (
    <motion.div
      style={{
        scale,
        opacity,
        y: translateY,
        borderRadius,
      }}
      className="hidden lg:block relative"
    >
      {/* Soft radial glow behind profile card */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="sticky top-24 relative z-10">
        <GlassCard hover={false} className="bg-background-card backdrop-blur-xl border border-border overflow-hidden">
          {/* Profile Image - Premium Portrait Card */}
          <div className="relative p-6 pb-0">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Soft gradient border */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30">
                <div className="absolute inset-0 rounded-2xl bg-background-card" />
              </div>
              
              {/* Soft background glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Image */}
              <motion.div
                className="absolute inset-[2px] rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/images/photo2.jpeg"
                  alt="Arpit Kumar"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="p-6 space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-text-primary mb-1">Arpit Kumar</h2>
              <p className="text-primary font-medium">Flutter & Full Stack Developer</p>
            </div>

            {/* Availability Badge */}
            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
              <div className="relative">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-success rounded-full animate-ping" />
              </div>
              <span className="text-success text-sm font-medium">Available for internships</span>
            </div>

            {/* Quick Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-text-muted">
                <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                <span>3rd Year B.Tech IT Student</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:arpitkumar0211@gmail.com" className="hover:text-primary transition-colors">
                  arpitkumar0211@gmail.com
                </a>
              </div>
            </div>

            {/* Portfolio Statistics Grid */}
            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-lg bg-background-elevated border border-border text-center">
                  <div className="text-xl font-bold text-primary">17+</div>
                  <div className="text-xs text-text-muted mt-1">Projects</div>
                </div>
                <div className="p-3 rounded-lg bg-background-elevated border border-border text-center">
                  <div className="text-xl font-bold text-accent">10+</div>
                  <div className="text-xs text-text-muted mt-1">Technologies</div>
                </div>
                <div className="p-3 rounded-lg bg-background-elevated border border-border text-center">
                  <div className="text-xl font-bold text-secondary">4+</div>
                  <div className="text-xs text-text-muted mt-1">Domains</div>
                </div>
                <div className="p-3 rounded-lg bg-background-elevated border border-border text-center">
                  <div className="text-xl font-bold text-primary">3rd</div>
                  <div className="text-xs text-text-muted mt-1">Year B.Tech</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 pt-2" role="group" aria-label="Social media links">
              {[
                { icon: <GitHubIcon />, href: 'https://github.com/arpitkumar28', label: 'GitHub' },
                { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/arpitkumar0211', label: 'LinkedIn' },
                { icon: <XIcon />, href: 'https://x.com/Arpit_patel28', label: 'X (Twitter)' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-background-elevated border border-border hover:bg-background-card hover:border-primary/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`Visit ${social.label} profile`}
                >
                  <div className="text-text-muted hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Resume Button */}
            <Button
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative overflow-hidden group"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};
