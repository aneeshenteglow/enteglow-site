import React from 'react';
import Image from 'next/image';
import { cn } from '@/app/_home/cn';
import styles from '../contact.module.css';

// Swap this path (and the intrinsic size) if a higher-resolution logo is added to /public.
const LOGO = { src: '/images/contact/enteglow-logo-large.png', width: 284, height: 261 };

/** The Enteglow logo, unaltered, floating inside soft brand glow and rings. Decorative; CSS-only motion. */
export const ContactLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div aria-hidden className={cn(styles.logoStage, 'pointer-events-none select-none', className)}>
    <div className={styles.logoGlow} />
    <div className={cn(styles.ring, styles.ring2)} />
    <div className={cn(styles.ring, styles.ring1)} />
    <div className={styles.orbit} />
    <div className={styles.logoWrap}>
      <Image src={LOGO.src} alt="" width={LOGO.width} height={LOGO.height} priority className={styles.logoImg} />
    </div>
  </div>
);
