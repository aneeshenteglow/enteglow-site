'use client';

import React, { useState } from 'react';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

const TEAM_IMAGE_1 =
  'https://lh3.googleusercontent.com/aida/AP1WRLsflLpDiAR4CXjEHXOkGIEdFoiv1NLejryUBM7vQy_xdgBXOD5J1zr74BgFsF2o-R_83969ZxsajiA0bnXvKbTnE7R8-9kXgT7qT31M--NKADNCkqcr6ukSoyuvYyUl4I0LYhniCyUY94vXRg1CIsRMC69oecTamqJovWa2a1KRdVafyUO7U9-ZvGSpHkbvU3n4axCdierBJTaldzZjOw-bye1uwOksSiHK5Pz5TmDkqLj7pPzHb4RnCCKl';

const DEV_IMAGE_2 =
  'https://lh3.googleusercontent.com/aida/AP1WRLtHciTK-a0abNyRuN6fYU7J_D6VcTVfuqcv0KZqLGmJJMgEIq4BBvHgfcN592xATmWhBkA7fwPLJwh5ZMRvO9TBHGr920JY1Za7u7_JksfeGyg31AQVJiVEdplfpgdDSRdFIiNk7H_wFFGqFiK3jhpJfmex0J95MfKiGsN2Pkq3WXDNAMSJO1exqUVdMzPIq6LIaA4Y8YAFMb13XNpOq41K9GFgx1Juf17eaFDU672w5uF-xYG0W-hhCBU';

export const WhyEntelgowSection: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-section-padding-desktop bg-background border-t border-surface-variant relative">
        <div className="max-w-container-max mx-auto px-gutter space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-label-md text-label-md uppercase tracking-widest text-outline">
              ENGINEERING GUARANTEES
            </span>
            <h2 className="font-display font-normal text-headline-lg text-on-surface">
              Built for Enterprise Reliability & IP Ownership
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We engineer software to handle scaling milestones effortlessly—with zero vendor lock-in and complete IP source code ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-headline font-bold text-headline-lg text-on-surface text-3xl sm:text-4xl leading-tight">
                Rigorous Technical Standards & Agile Delivery
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our engineering methodology is rooted in strict technical standards, zero mock fallbacks, and feature-isolated architecture—ensuring complex operational challenges are met with sustainable, scalable software solutions.
              </p>

              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-4 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-electric-blue mt-1">check_circle</span>
                  <span>Enterprise-grade system architecture & 100% IP source ownership.</span>
                </li>
                <li className="flex items-start gap-4 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-electric-blue mt-1">check_circle</span>
                  <span>Agile, transparent development cycles with direct senior engineer access.</span>
                </li>
                <li className="flex items-start gap-4 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-electric-blue mt-1">check_circle</span>
                  <span>Post-deployment scaling, SOC 2 readiness, and zero-downtime CI/CD.</span>
                </li>
              </ul>

              <div className="pt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setPlannerOpen(true)}
                  className="btn-primary font-label-md text-label-md px-8 py-4 uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Schedule Architecture Audit
                </button>
              </div>
            </div>

            {/* Right Asymmetric Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] max-w-xl mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={TEAM_IMAGE_1}
                    alt="Enteglow engineering team collaborating"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-8 -left-8 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest hidden sm:block">
                  <img
                    src={DEV_IMAGE_2}
                    alt="Senior developer coding"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-6 -right-4 glass-panel rounded-xl p-5 shadow-2xl">
                  <div className="font-headline font-bold text-display-lg text-electric-blue leading-none mb-1 text-4xl">
                    100+
                  </div>
                  <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                    Products Delivered
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-electric-blue font-headline font-bold text-xl">
                <span className="material-symbols-outlined text-3xl">code</span>
                <span>Strict Code Quality</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every pull request undergoes peer review, static type checking (`tsc --noEmit`), and automated test suite verification.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-vibrant-purple font-headline font-bold text-xl">
                <span className="material-symbols-outlined text-3xl">lock</span>
                <span>100% IP & Data Ownership</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                All source code, Docker configs, and architecture blueprints belong entirely to your organization upon project delivery.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-primary font-headline font-bold text-xl">
                <span className="material-symbols-outlined text-3xl">speed</span>
                <span>Architectural Longevity</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We design software to handle scaling milestones effortlessly—whether serving 100 or 100,000 concurrent users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};
