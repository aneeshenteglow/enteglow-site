'use client';

import React from 'react';
import Link from 'next/link';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

export const CinematicCTA: React.FC = () => {
  const { openPlanner } = useProjectPlanner();

  return (
    <section className="py-24 relative overflow-hidden border-t border-glass-border">
      {/* Dynamic Pulsing Radial Crimson Ambient Background */}
      <div className="absolute inset-0 bg-surface-container-lowest z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,30,36,0.25)_0%,_rgba(14,14,16,0.95)_70%)] animate-pulse-glow" />
      </div>

      {/* Structural Tech Grid Layer */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-gutter relative z-10 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 text-primary font-label-sm text-xs uppercase tracking-widest font-semibold mb-6 shadow-[0_0_20px_rgba(227,30,36,0.2)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Ready for Digital Transformation
          </div>

          <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-6 text-on-surface font-bold leading-tight">
            Let&apos;s Build Software <br />
            <span className="text-gradient">That Matters.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.25}>
          <p className="text-on-surface-variant font-body-lg text-body-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop wrestling with fragile legacy systems. Partner with senior software architects to engineer scalable, high-performance systems for your enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={openPlanner}
              className="group bg-primary-container text-on-primary-container font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold shimmer-btn hover:shadow-[0_0_30px_rgba(227,30,36,0.5)] transition-all transform hover:-translate-y-1 cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2.5"
            >
              <span>Start a Project</span>
              <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform duration-300">
                arrow_forward
              </span>
            </button>
            <Link
              href="/contact"
              prefetch={true}
              className="group glass-panel text-on-surface font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold hover:border-primary hover:text-primary transition-all glow-hover hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2.5"
            >
              <span>Talk to an Engineer</span>
              <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform duration-300 text-primary">
                chat
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
