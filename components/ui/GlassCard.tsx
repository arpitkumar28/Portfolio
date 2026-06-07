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
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'backdrop-blur-lg rounded-2xl p-6 shadow-xl',
        gradient
          ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10'
          : 'bg-white/5 border border-white/10',
        'hover:bg-white/10 hover:border-white/20 transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
