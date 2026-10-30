import React from 'react';
import { cn } from '@/app/_home/cn';

// Small building blocks shared by the inner pages. Values mirror the homepage cards
// (AboutSection, TestimonialsSection) so inner pages read as the same system.

export const Panel: React.FC<{ as?: 'div' | 'article' | 'li'; className?: string; children: React.ReactNode }> = ({
  as: Tag = 'div',
  className,
  children,
}) => <Tag className={cn('rounded-[24px] border border-ink-line bg-ink-850 p-7 sm:p-8', className)}>{children}</Tag>;

/** Small uppercase label above a list or value (same treatment as the footer column titles). */
export const Label: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <p className={cn('text-[11px] font-bold uppercase tracking-[0.18em] text-mist-600', className)}>{children}</p>
);

export const Chip: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <span className={cn('inline-flex rounded-full bg-ink-750 px-3.5 py-1.5 text-[13px] font-medium text-mist-300', className)}>
    {children}
  </span>
);

export const ChipList: React.FC<{ items: string[]; label: string; className?: string }> = ({ items, label, className }) => (
  <ul aria-label={label} className={cn('flex flex-wrap gap-2', className)}>
    {items.map((item) => (
      <li key={item}>
        <Chip>{item}</Chip>
      </li>
    ))}
  </ul>
);

/** Bulleted list using the "+" marker from the homepage About statements. */
export const PlusList: React.FC<{ items: string[]; className?: string }> = ({ items, className }) => (
  <ul className={cn('space-y-3 text-[15px] leading-[1.6] text-mist-300', className)}>
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span aria-hidden className="shrink-0 text-brand-400">
          +
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const IconTile: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <span
    aria-hidden
    className={cn(
      'grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-brand-400/40 bg-brand-500/10 text-brand-400',
      className
    )}
  >
    {children}
  </span>
);

/** Zero-padded index ("01") used for numbered items, as on the homepage cards. */
export const indexLabel = (i: number) => String(i + 1).padStart(2, '0');

/** Inline CSS variable for staggered `[data-reveal]` entrances. */
export const revealDelay = (i: number, step = 80) => ({ '--eg-delay': `${i * step}ms` }) as React.CSSProperties;
