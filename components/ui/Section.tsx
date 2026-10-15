import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  const reduceMotion = useReducedMotion();
  const [motionReady, setMotionReady] = useState(false);
  useEffect(() => setMotionReady(true), []);
  return (
    <motion.section
      id={id}
      className={cn('scroll-mt-28 py-20 md:py-24', className)}
      initial={motionReady && !reduceMotion ? { opacity: 0, y: 14 } : false}
      whileInView={motionReady && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <motion.h2
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative text-3xl font-semibold tracking-tight text-text-primary mb-8 md:mb-12 text-center md:text-4xl lg:text-5xl after:mx-auto after:mt-5 after:block after:h-px after:w-12 after:bg-primary/65 after:content-["_"]',
        className
      )}
    >
      {children}
    </motion.h2>
  );
};
