'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThreeEcosystemCanvas } from '@/components/common/ThreeEcosystemCanvas';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

export const HeroSection: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden border-b border-glass-border">
        {/* Three.js 3D WebGL Interactive Background */}
        <div className="absolute inset-0 z-0 opacity-50">
          <ThreeEcosystemCanvas />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center flex flex-col items-center py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-1.5 rounded-full mb-8">
            <span className="material-symbols-outlined text-primary text-[14px]">auto_awesome</span>
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest">
              Software Product Engineering &amp; Business Systems
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg max-w-4xl mx-auto mb-6 text-on-surface">
            We Build Software That <br />
            <span className="text-gradient">Moves Your Business Forward.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-10">
            We partner with business leaders, CTOs, and product managers to replace manual operational friction with production-ready software—unifying Web SaaS Platforms, Mobile Field Apps, Native Workstations, Agentic AI, and IoT Telemetry.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setPlannerOpen(true)}
              className="bg-primary-container text-on-primary-container font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold hover:shadow-[0_0_20px_rgba(227,30,36,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
            >
              Start a Project
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <Link
              href="/projects"
              className="glass-panel text-on-surface font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 glow-hover"
            >
              Explore Case Studies
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Key Engineering Metrics Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-10 border-t border-glass-border w-full max-w-4xl mx-auto text-left">
            <div>
              <div className="flex items-center gap-2 mb-2 text-primary font-headline-md text-headline-md">
                <span className="material-symbols-outlined">layers</span>
                <span>45+</span>
              </div>
              <p className="text-on-surface-variant text-sm">Software Products Built</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-primary font-headline-md text-headline-md">
                <span className="material-symbols-outlined">code</span>
                <span>95%+</span>
              </div>
              <p className="text-on-surface-variant text-sm">Code Test Coverage</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-primary font-headline-md text-headline-md">
                <span className="material-symbols-outlined">lock</span>
                <span>100%</span>
              </div>
              <p className="text-on-surface-variant text-sm">IP Source Ownership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scope & Meeting Planner Modal */}
      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};
