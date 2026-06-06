import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className }) => {
  return (
    <span className={cn('bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent', className)}>
      {children}
    </span>
  );
};
