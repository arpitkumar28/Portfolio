import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hover = true,
  gradient = false,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -3 } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        'backdrop-blur-lg rounded-2xl p-6 shadow-lg',
        gradient
          ? 'bg-gradient-to-br from-background-card to-background-elevated border border-border'
          : 'bg-background-card border border-border',
        'hover:border-primary/35 hover:shadow-xl hover:shadow-primary/5 transition-[transform,border-color,box-shadow] duration-200 motion-reduce:transition-none',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
