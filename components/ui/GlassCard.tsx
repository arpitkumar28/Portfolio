import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hover = true,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        'bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl',
        'hover:bg-white/10 transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
