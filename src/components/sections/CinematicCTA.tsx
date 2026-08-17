'use client';

import React, { useState } from 'react';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

export const CinematicCTA: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-section-padding-desktop relative overflow-hidden bg-deep-slate text-white border-t border-glass-stroke">
        {/* Glow ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-electric-blue/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center space-y-8">
          <div className="glass-card bg-surface-container-lowest/10 backdrop-blur-2xl p-8 sm:p-14 rounded-3xl border border-glass-stroke shadow-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue font-label-md text-label-md uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-vibrant-purple animate-pulse" />
              START A CONVERSATION
            </div>

            <h2 className="font-headline font-bold text-headline-lg md:text-[56px] text-white tracking-tight leading-tight">
              Let&apos;s Build Software That{' '}
              <span className="gradient-text">Moves Your Business Forward</span>
            </h2>

            <p className="font-body-lg text-body-lg text-outline-variant max-w-2xl mx-auto leading-relaxed">
              Tell us what business problem you&apos;re trying to solve. We&apos;ll help you turn it into a production-ready digital solution with 100% IP ownership and zero vendor lock-in.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setPlannerOpen(true)}
                className="btn-primary font-label-md text-label-md px-8 py-4 uppercase tracking-wider font-semibold w-full sm:w-auto cursor-pointer"
              >
                Start a Project
              </button>

              <button
                type="button"
                onClick={() => setPlannerOpen(true)}
                className="btn-secondary font-label-md text-label-md px-8 py-4 uppercase tracking-wider font-semibold w-full sm:w-auto cursor-pointer"
              >
                Talk to an Engineer
              </button>
            </div>

            <div className="pt-8 border-t border-glass-stroke flex flex-wrap items-center justify-center gap-6 font-label-md text-xs text-outline-variant uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
                <span>100% Source Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
                <span>Mutual NDA Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
                <span>Direct Access to Senior Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};
