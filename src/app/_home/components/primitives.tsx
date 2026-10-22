import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../cn';

export const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => <div className={cn('mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8', className)}>{children}</div>;

export const Eyebrow: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <p className={cn('text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400 sm:text-xs', className)}>
    {children}
  </p>
);

interface SectionIntroProps {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export const SectionIntro: React.FC<SectionIntroProps> = ({ id, eyebrow, title, className, children }) => (
  <div className={cn('max-w-2xl', className)} data-reveal>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2
      id={id}
      className="mt-4 text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-mist-100"
    >
      {title}
    </h2>
    {children}
  </div>
);

export const LogoLockup: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className }) => (
  <Link
    href="/"
    onClick={onClick}
    className={cn('group inline-flex items-center gap-2.5', className)}
    aria-label="Enteglow home"
  >
    <Image src="/images/home/enteglow-logo.png" alt="" width={36} height={31} className="h-[31px] w-9" />
    <span className="text-[22px] font-bold leading-none tracking-[-0.06em] text-mist-100">enteglow</span>
  </Link>
);
