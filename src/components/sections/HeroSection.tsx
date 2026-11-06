'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThreeEcosystemCanvas } from '@/components/common/ThreeEcosystemCanvas';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

export const HeroSection: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-section-padding-desktop overflow-hidden bg-surface-container-lowest">
        {/* 3D WebGL Interactive Particle Canvas Background */}
        <div className="absolute inset-0 z-0 opacity-60">
          <ThreeEcosystemCanvas />
        </div>

        {/* Structural Tech Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-grid opacity-50 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-8 md:col-start-3 text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-electric-blue/30 text-electric-blue font-label-md text-label-md uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-vibrant-purple animate-pulse" />
              Innovation Driven
            </div>

            {/* Display Headline */}
            <h1 className="font-display font-normal text-display-lg md:text-[84px] leading-tight text-on-surface mb-8 tracking-tight">
              We Build Software That <br />
              <span className="gradient-text">Moves Your Business Forward</span>
            </h1>

            {/* Body Description */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
              Elevating business concepts to robust digital realities with cutting-edge technology. We engineer scalable, high-performance solutions for the modern enterprise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/services"
                className="btn-primary font-label-md text-label-md px-8 py-4 uppercase tracking-wider font-semibold w-full sm:w-auto text-center"
              >
                Explore Solutions
              </Link>
              <button
                type="button"
                onClick={() => setPlannerOpen(true)}
                className="btn-secondary font-label-md text-label-md px-8 py-4 uppercase tracking-wider font-semibold w-full sm:w-auto cursor-pointer"
              >
                Consult With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Scope Planner Modal */}
      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};
