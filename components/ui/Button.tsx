import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'glass' | 'ghost' | 'link' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  target,
  rel,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none motion-reduce:transition-none';
  
  const variants = {
    primary: 'bg-primary text-background hover:bg-[#F4CC78] hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5',
    outline: 'border border-primary/50 text-primary hover:border-primary hover:bg-primary/10 hover:-translate-y-0.5',
    glass: 'border border-border bg-background-card/80 text-text-primary hover:border-primary/40 hover:bg-background-card',
    ghost: 'text-text-muted hover:text-primary hover:bg-white/5',
    link: 'text-primary hover:text-[#F4CC78] underline-offset-4 hover:underline',
    gradient: 'relative overflow-hidden bg-primary text-background hover:bg-[#F4CC78] hover:-translate-y-0.5',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: disabled ? 1 : 1.01 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
        className={buttonClasses}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
