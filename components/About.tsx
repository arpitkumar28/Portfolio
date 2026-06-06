'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Mail, Phone, Sparkles, Target, Zap } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';
import { GradientText } from './ui/GradientText';

const highlights = [
  {
    icon: Sparkles,
    title: 'Product-Minded',
    description: 'Building practical, user-focused applications with clean UI and scalable logic.',
  },
  {
    icon: Target,
    title: 'Multi-Domain',
    description: 'Comfortable with web, mobile, and IoT development.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and improving fundamentals.',
  },
];

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-gradient-to-b from-background/50 to-background">
      <SectionTitle>Who I Am</SectionTitle>
      
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left: About Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <GlassCard>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Hello! I'm Arpit Kumar</h3>
              <p className="text-muted leading-relaxed">
                I am a 3rd-year B.Tech Information Technology student from Jaipur, focused on full stack development, Flutter apps, Python, UI/UX, and IoT. I enjoy taking an idea from rough concept to a working product with clean interfaces and reliable code.
              </p>
              <p className="text-muted leading-relaxed">
                My projects explore civic tech, agriculture support, safety systems, automation, and mobile-first workflows. I am currently strengthening my data structures, backend fundamentals, and product-thinking skills.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-semibold mb-2">
                  <GradientText>Goal:</GradientText>
                </p>
                <p className="text-muted">
                  To grow into a software engineer who can build useful, scalable products, collaborate well with teams, and contribute to meaningful technology projects.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <GlassCard className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-muted">Jaipur, Rajasthan</span>
            </GlassCard>
            <GlassCard className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-muted">3rd Year B.Tech IT Student</span>
            </GlassCard>
            <GlassCard className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="mailto:arpitkumar0211@gmail.com" className="text-muted hover:text-primary transition-colors">
                arpitkumar0211@gmail.com
              </a>
            </GlassCard>
            <GlassCard className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="tel:+919142170211" className="text-muted hover:text-primary transition-colors">
                9142170211
              </a>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Right: Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="group">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{highlight.title}</h4>
                    <p className="text-muted">{highlight.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
