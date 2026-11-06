'use client';

import React, { useState } from 'react';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

interface FrictionPoint {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  before: string;
  after: string;
  impact: string;
}

const FRICTION_POINTS: FrictionPoint[] = [
  {
    id: 'manual',
    title: 'Manual Repetitive Work',
    subtitle: 'Teams wasting hours copying data across tools',
    iconName: 'schedule',
    before: 'Siloed spreadsheets, manual copy-pasting, and high human error rate.',
    after: 'Automated event triggers, instant database synchronization, and automated reporting.',
    impact: '70% reduction in administrative overhead',
  },
  {
    id: 'silos',
    title: 'Disconnected Software Silos',
    subtitle: 'Critical business data trapped in separate platforms',
    iconName: 'database',
    before: 'Isolated accounting, inventory, and CRM tools that cannot talk to each other.',
    after: 'Unified enterprise API gateway and single-pane-of-glass operations portal.',
    impact: '10x faster cross-system data throughput',
  },
  {
    id: 'legacy',
    title: 'Fragile Legacy Codebases',
    subtitle: 'Aging software slowing down growth and innovation',
    iconName: 'security_update_warning',
    before: 'Brittle monolithic code that is expensive to maintain and vulnerable to breaches.',
    after: 'Modern microservices with Next.js, high performance backends, and full IP ownership.',
    impact: '50% lower hosting & maintenance costs',
  },
  {
    id: 'user-exp',
    title: 'Confusing Customer Workflows',
    subtitle: 'Cluttered user interfaces causing drop-offs',
    iconName: 'group',
    before: 'Outdated multi-step portals with poor mobile support and high support ticket volume.',
    after: 'Ergonomic multi-platform apps for Web, Mobile, and Desktop with 60 FPS performance.',
    impact: '100% field & client user adoption rate',
  },
  {
    id: 'scaling',
    title: 'Scaling & Concurrency Bottlenecks',
    subtitle: 'Systems breaking under peak operational loads',
    iconName: 'trending_down',
    before: 'Database locks, API request timeouts, and server crashes during volume spikes.',
    after: 'Cloud-native Docker/Kubernetes architecture handling high concurrency.',
    impact: '99.9% system availability SLA',
  },
];

export const ProblemIntroSection: React.FC = () => {
  const [selectedFriction, setSelectedFriction] = useState<FrictionPoint>(FRICTION_POINTS[0]);
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-section-padding-desktop bg-surface-container-lowest relative border-t border-surface-variant">
        <div className="max-w-container-max mx-auto px-gutter space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-electric-blue/30 text-electric-blue font-label-md text-label-md uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-vibrant-purple animate-pulse" />
              Operational Efficiency
            </div>

            <h2 className="font-display font-normal text-headline-lg text-on-surface tracking-tight">
              Your Business Problem Is{' '}
              <span className="gradient-text">Where We Start.</span>
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Manual processes, disconnected software tools, legacy databases, and human error bottlenecks slow business growth. We engineer software that unifies your entire business into one connected system.
            </p>
          </div>

          {/* BEFORE vs AFTER Transformation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Friction Selection */}
            <div className="lg:col-span-5 space-y-3">
              <span className="font-label-md text-label-md text-outline uppercase tracking-wider block px-2 mb-2">
                Identify Your Operational Friction:
              </span>

              {FRICTION_POINTS.map((friction) => {
                const isSelected = selectedFriction.id === friction.id;
                return (
                  <div
                    key={friction.id}
                    onClick={() => setSelectedFriction(friction)}
                    className={`p-5 rounded-2xl transition-all cursor-pointer ${
                      isSelected
                        ? 'glass-card border-electric-blue shadow-glass-hover bg-white'
                        : 'glass-card hover:border-outline-variant bg-surface-container-lowest'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isSelected
                              ? 'bg-electric-blue/15 text-electric-blue'
                              : 'bg-surface-container-low text-outline'
                          }`}
                        >
                          <span className="material-symbols-outlined text-2xl">
                            {friction.iconName}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline font-semibold text-headline-md text-on-surface text-lg">
                            {friction.title}
                          </h3>
                          <p className="font-body-md text-body-md text-on-surface-variant text-xs">
                            {friction.subtitle}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`material-symbols-outlined transition-transform ${
                          isSelected ? 'text-electric-blue translate-x-1' : 'opacity-0'
                        }`}
                      >
                        arrow_forward
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Transformation Card */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-surface-container-high pb-4 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-electric-blue" />
                    <span className="font-headline font-bold text-headline-md text-on-surface text-xl">
                      {selectedFriction.title} Transformation
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-electric-blue bg-electric-blue/10 px-4 py-1.5 rounded-full border border-electric-blue/30 inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">bolt</span>
                    {selectedFriction.impact}
                  </span>
                </div>

                {/* BEFORE vs AFTER Split Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* BEFORE */}
                  <div className="p-6 rounded-2xl bg-error-container/20 border border-error/20 space-y-2">
                    <div className="flex items-center gap-2 text-error font-label-md uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-error" />
                      <span>Current Friction</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {selectedFriction.before}
                    </p>
                  </div>

                  {/* AFTER */}
                  <div className="p-6 rounded-2xl bg-electric-blue/5 border border-electric-blue/30 space-y-2">
                    <div className="flex items-center gap-2 text-electric-blue font-label-md uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span>Enteglow Solution</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface font-semibold">
                      {selectedFriction.after}
                    </p>
                  </div>
                </div>

                {/* Flow Diagram */}
                <div className="p-6 rounded-2xl bg-deep-slate text-white space-y-3">
                  <div className="flex items-center justify-between text-xs font-label-md text-outline-variant">
                    <span className="font-bold text-electric-blue flex items-center gap-1 uppercase">
                      <span className="material-symbols-outlined text-sm">auto_graph</span> Digital Transformation Pipeline
                    </span>
                    <span className="uppercase">Zero Vendor Lock-In</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center font-label-md">
                    <div className="p-4 rounded-xl bg-surface-container-lowest/10 border border-glass-stroke">
                      <span className="text-[10px] text-outline-variant block">STEP 1</span>
                      <span className="font-bold text-white text-sm">Audit & Spec</span>
                    </div>
                    <div className="p-4 rounded-xl bg-electric-blue/20 border border-electric-blue/40 text-electric-blue">
                      <span className="text-[10px] text-electric-blue block">STEP 2</span>
                      <span className="font-bold text-white text-sm">Agile Build</span>
                    </div>
                    <div className="p-4 rounded-xl bg-vibrant-purple/20 border border-vibrant-purple/40 text-vibrant-purple">
                      <span className="text-[10px] text-soft-pink block">STEP 3</span>
                      <span className="font-bold text-white text-sm">Continuous Scale</span>
                    </div>
                  </div>
                </div>

                {/* Footer action trigger */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Ready to eliminate this operational friction?
                  </span>
                  <button
                    type="button"
                    onClick={() => setPlannerOpen(true)}
                    className="btn-primary font-label-md text-label-md px-6 py-3 uppercase tracking-wider font-semibold cursor-pointer w-full sm:w-auto text-center"
                  >
                    Scope Transformation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};
