import React from 'react';
import { ClosingCta } from '@/app/_home/components/ClosingCta';
import { RevealObserver } from '@/app/_home/components/RevealObserver';

interface InnerPageProps {
  children: React.ReactNode;
  /** The homepage's closing CTA band; off for pages that are themselves the CTA destination. */
  cta?: boolean;
}

/**
 * Shell for every inner page. `eg-home` opts the page into the Brand Book 2026 dark theme
 * (body background, selection and focus styles) and lets RevealObserver find its `[data-reveal]` items.
 */
export const InnerPage: React.FC<InnerPageProps> = ({ children, cta = true }) => (
  <div className="eg-home overflow-x-clip bg-ink-950 font-sans text-mist-200">
    {children}
    {cta && <ClosingCta />}
    <RevealObserver />
  </div>
);
