import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        'inline-block px-3 py-1 rounded-full text-sm font-medium',
        'bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary',
        className
      )}
    >
      {children}
    </motion.span>
  );
};
