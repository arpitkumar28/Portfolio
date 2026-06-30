'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { GradientText } from './ui/GradientText';
import { LinkedInIcon, GitHubIcon, XIcon } from './ui/SocialIcons';
import { FlutterIcon, ReactIcon, FirebaseIcon, PythonIcon, GitHubIcon as GitHubLogo, MongoDBIcon } from './ui/TechIcons';

const techIcons = [
  { icon: FlutterIcon, color: '#02569B', name: 'Flutter' },
  { icon: ReactIcon, color: '#61DAFB', name: 'React' },
  { icon: FirebaseIcon, color: '#FFCA28', name: 'Firebase' },
  { icon: PythonIcon, color: '#3776AB', name: 'Python' },
  { icon: GitHubLogo, color: '#FFFFFF', name: 'GitHub' },
  { icon: MongoDBIcon, color: '#4DB33D', name: 'MongoDB' },
];

const roles = ['Flutter Developer', 'Full Stack Developer', 'IoT Enthusiast', 'Problem Solver'];

const professionalTagline = 'Flutter Developer • Full Stack Developer • IoT Enthusiast';

const statsData = [
  { value: 17, label: 'Projects Shipped', suffix: '+' },
  { value: 10, label: 'Technologies', suffix: '+' },
  { value: 4, label: 'Domains', suffix: '+' },
  { value: 3, label: 'Year B.Tech IT', suffix: 'rd' },
];

const StatCard: React.FC<{ stat: typeof statsData[0]; index: number }> = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, stat.value]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <GlassCard className="relative text-center p-6 border border-white/10 group-hover:border-primary/30 transition-all duration-300">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
          className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
        >
          {count}{stat.suffix}
        </motion.div>
        <div className="text-sm text-muted mt-2">{stat.label}</div>
      </GlassCard>
    </motion.div>
  );
};

const OrbitIcon: React.FC<{ icon: any; color: string; name: string; index: number; total: number }> = ({ icon: Icon, color, name, index, total }) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 200;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
      style={{
        left: '50%',
        top: '50%',
      }}
    >
      <motion.div
        animate={{
          x: [x, x * 1.08, x],
          y: [y, y * 1.08, y],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 5 + index * 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative"
      >
        <motion.div
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.4 }}
          className="p-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/30"
        >
          <Icon className="w-5.5 h-5.5" style={{ color }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 px-2.5 py-1 bg-black/90 backdrop-blur-md rounded-lg text-xs text-white whitespace-nowrap font-medium border border-white/10"
        >
          {name}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Particle: React.FC<{ delay: number }> = ({ delay }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/30 rounded-full"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0,
      }}
      animate={{
        y: [null, -100],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        delay: delay,
        ease: 'linear',
      }}
    />
  );
};

export const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const currentString = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentString) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentString.substring(0, displayText.length - 1)
            : currentString.substring(0, displayText.length + 1)
        );
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-16"
      role="banner"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(139,92,246,0.20), transparent 40%),
          radial-gradient(circle at 80% 50%, rgba(6,182,212,0.15), transparent 40%),
          #050816
        `,
      }}
      aria-labelledby="hero-heading"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="text-green-400 text-sm font-medium">Available For Internship Opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                3rd Year B.Tech IT Student
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
              id="hero-heading"
            >
              <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                Arpit Kumar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-white"
            >
              Flutter & Full Stack Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted"
            >
              <span className="text-primary font-medium">{professionalTagline}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted max-w-xl leading-relaxed"
            >
              Building scalable web, mobile, and IoT solutions with a focus on practical problem solving, clean user interfaces, and reliable code.
              <span className="text-white font-semibold"> Currently open to internship opportunities.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                { value: '17+', label: 'Projects Shipped' },
                { value: '10+', label: 'Technologies' },
                { value: '4', label: 'Domains' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group px-8 py-4 text-base"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative flex items-center font-semibold">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  href="#contact"
                  className="group px-8 py-4 text-base"
                >
                  Contact Me
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {[
                { icon: <GitHubIcon />, href: 'https://github.com/arpitkumar28', label: 'GitHub' },
                { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/arpitkumar0211', label: 'LinkedIn' },
                { icon: <XIcon />, href: 'https://x.com/Arpit_patel28', label: 'X' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
                  aria-label={`Visit ${social.label} profile`}
                >
                  <div className="text-muted group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Statistics cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {statsData.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </motion.div>

            {/* Currently Building Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="pt-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted font-medium">Currently Building</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'NCC Buddy', color: 'from-orange-500/20 to-red-500/20 border-orange-500/30' },
                  { name: 'EduAI Nexus X', color: 'from-green-500/20 to-teal-500/20 border-green-500/30' },
                  { name: 'Smart IoT Solutions', color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30' },
                ].map((project, index) => (
                  <motion.span
                    key={project.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.color} border text-sm font-medium text-white backdrop-blur-sm cursor-default`}
                  >
                    {project.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              {/* Layered blur glows */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 blur-2xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
              
              {/* Animated gradient border with glow */}
              <motion.div
                className="absolute inset-0 rounded-full p-[3px]"
                animate={{
                  background: [
                    'linear-gradient(0deg, #8B5CF6, #06B6D4, #A855F7, #8B5CF6)',
                    'linear-gradient(90deg, #8B5CF6, #06B6D4, #A855F7, #8B5CF6)',
                    'linear-gradient(180deg, #8B5CF6, #06B6D4, #A855F7, #8B5CF6)',
                    'linear-gradient(270deg, #8B5CF6, #06B6D4, #A855F7, #8B5CF6)',
                    'linear-gradient(360deg, #8B5CF6, #06B6D4, #A855F7, #8B5CF6)',
                  ],
                  boxShadow: [
                    '0 0 30px rgba(139,92,246,0.3), 0 0 60px rgba(6,182,212,0.2)',
                    '0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(6,182,212,0.3)',
                    '0 0 30px rgba(139,92,246,0.3), 0 0 60px rgba(6,182,212,0.2)',
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="absolute inset-0 rounded-full bg-[#050816]" />
              </motion.div>

              {/* Profile image container with floating animation */}
              <motion.div
                className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/images/photo2.jpeg"
                    alt="Arpit Kumar"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                    priority
                    quality={95}
                  />
                  {/* Enhanced lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(139,92,246,0.15)]" />
                </motion.div>
              </motion.div>

              {/* Orbiting tech icons */}
              <div className="absolute inset-0">
                {techIcons.map((tech, index) => (
                  <OrbitIcon
                    key={tech.name}
                    icon={tech.icon}
                    color={tech.color}
                    name={tech.name}
                    index={index}
                    total={techIcons.length}
                  />
                ))}
              </div>

              {/* Status indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-2"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2.5 h-2.5 rounded-full bg-green-500"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(34, 197, 94, 0.7)',
                      '0 0 0 10px rgba(34, 197, 94, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-sm text-white font-medium">Open to internships</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/50"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
