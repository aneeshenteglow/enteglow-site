'use client';

import React from 'react';
import Link from 'next/link';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';

export const CinematicCTA: React.FC = () => {
  const { openPlanner } = useProjectPlanner();

  return (
    <section className="py-section-padding-lg relative overflow-hidden">
      {/* Radial Red Glow Background */}
      <div className="absolute inset-0 bg-surface-container-lowest z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/15 via-background to-background" />
      </div>

      <div className="max-w-3xl mx-auto px-gutter relative z-10 text-center">
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg mb-6 text-on-surface">
          Let&apos;s Build Software That Matters.
        </h2>
        <p className="text-on-surface-variant font-body-lg text-body-lg mb-10">
          Stop wrestling with legacy systems. Start engineering for the future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={openPlanner}
            className="bg-primary-container text-on-primary-container font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold hover:shadow-[0_0_20px_rgba(227,30,36,0.4)] transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            Start a Project
          </button>
          <Link
            href="/contact"
            prefetch={true}
            className="glass-panel text-on-surface font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold hover:border-primary hover:text-primary transition-all glow-hover"
          >
            Talk to an Engineer
          </Link>
        </div>
      </div>
    </section>
  );
};
