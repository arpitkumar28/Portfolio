import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={cn('scroll-mt-28 py-20 md:py-24', className)}
    >
      {children}
    </section>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-8 md:mb-12 text-center',
        className
      )}
    >
      {children}
    </motion.h2>
  );
};
