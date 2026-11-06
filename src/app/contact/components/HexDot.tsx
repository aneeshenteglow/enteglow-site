import React from 'react';
import { cn } from '@/app/_home/cn';
import styles from '../contact.module.css';

/** Decorative brand hexagon used as an eyebrow marker on the contact page. */
export const HexDot: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={cn('h-3.5 w-3.5 shrink-0 fill-brand-400', styles.hex, className)}>
    <path d="M12 1.5 21.1 6.75v10.5L12 22.5 2.9 17.25V6.75Z" />
  </svg>
);
