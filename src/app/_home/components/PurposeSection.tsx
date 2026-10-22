import React from 'react';
import { purpose } from '../data/homeContent';
import { Container } from './primitives';

export const PurposeSection: React.FC = () => (
  <section aria-labelledby="purpose-heading" className="py-24 lg:py-32">
    <Container>
      <div
        data-reveal
        className="relative overflow-hidden rounded-[28px] border border-brand-400/25 bg-[radial-gradient(circle_at_82%_16%,rgba(240,106,79,0.55),transparent_32%),linear-gradient(135deg,#09090a_14%,#32130d_62%,#c63b22_160%)] px-6 py-16 sm:px-12 lg:px-20 lg:py-28"
      >
        <h2 id="purpose-heading" className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-100 sm:text-xs">
          Purpose That Drives Us
        </h2>
        <p className="mt-8 max-w-5xl text-[clamp(1.75rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-mist-100">
          {purpose}
        </p>
      </div>
    </Container>
  </section>
);
