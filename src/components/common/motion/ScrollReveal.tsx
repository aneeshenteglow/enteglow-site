'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  viewportAmount?: number | 'some' | 'all';
  once?: boolean;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  viewportAmount = 0.2,
  once = true,
  className = '',
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
