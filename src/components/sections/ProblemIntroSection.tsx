'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

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
  const { openPlanner } = useProjectPlanner();

  return (
    <section className="py-section-padding-lg bg-surface border-t border-glass-border relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter space-y-16 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 text-primary font-label-sm text-label-sm uppercase tracking-widest shadow-[0_0_15px_rgba(227,30,36,0.15)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Operational Efficiency
            </div>

            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Your Business Problem Is <span className="text-gradient">Where We Start.</span>
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Manual processes, disconnected software tools, legacy databases, and human error bottlenecks slow business growth. We engineer software that unifies your entire business into one connected system.
            </p>
          </div>
        </ScrollReveal>

        {/* BEFORE vs AFTER Transformation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Friction Selection */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-5 space-y-3">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block px-2 mb-2">
              Identify Your Operational Friction:
            </span>

            {FRICTION_POINTS.map((friction) => {
              const isSelected = selectedFriction.id === friction.id;
              return (
                <motion.div
                  key={friction.id}
                  onClick={() => setSelectedFriction(friction)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className={`p-5 rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'glass-panel border-primary shadow-[0_0_20px_rgba(227,30,36,0.25)] bg-surface-container'
                      : 'glass-panel hover:border-primary/40'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFrictionHighlight"
                      className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-3 relative z-10">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isSelected
                            ? 'bg-primary-container text-on-primary-container shadow-md'
                            : 'bg-surface-container-high text-on-surface-variant'
                        }`}
                      >
                        <span className="material-symbols-outlined text-2xl">
                          {friction.iconName}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline-md text-[18px] text-on-surface font-bold">
                          {friction.title}
                        </h3>
                        <p className="font-body-md text-on-surface-variant text-xs">
                          {friction.subtitle}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`material-symbols-outlined transition-all duration-300 ${
                        isSelected ? 'text-primary translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'
                      }`}
                    >
                      arrow_forward
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </ScrollReveal>

          {/* Right Column: Transformation Card with AnimatePresence */}
          <ScrollReveal direction="right" delay={0.3} className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-8 space-y-6 border border-glass-border shadow-2xl relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFriction.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-glass-border pb-4 gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      <span className="font-headline-md text-headline-md text-on-surface font-bold">
                        {selectedFriction.title} Transformation
                      </span>
                    </div>
                    <span className="font-label-sm text-xs font-bold text-primary bg-primary-container/15 px-4 py-1.5 rounded-full border border-primary/30 inline-flex items-center gap-1.5 uppercase shadow-sm">
                      <span className="material-symbols-outlined text-sm">bolt</span>
                      {selectedFriction.impact}
                    </span>
                  </div>

                  {/* BEFORE vs AFTER Split Box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* BEFORE */}
                    <div className="p-6 rounded-xl bg-error-container/10 border border-error-container/30 space-y-2">
                      <div className="flex items-center gap-2 text-error font-label-sm uppercase tracking-wider font-semibold text-xs">
                        <span className="w-2 h-2 rounded-full bg-error" />
                        <span>Current Friction</span>
                      </div>
                      <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                        {selectedFriction.before}
                      </p>
                    </div>

                    {/* AFTER */}
                    <div className="p-6 rounded-xl bg-primary-container/15 border border-primary/40 space-y-2 shadow-inner">
                      <div className="flex items-center gap-2 text-primary font-label-sm uppercase tracking-wider font-semibold text-xs">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        <span>Enteglow Solution</span>
                      </div>
                      <p className="font-body-md text-on-surface font-semibold text-sm leading-relaxed">
                        {selectedFriction.after}
                      </p>
                    </div>
                  </div>

                  {/* Pipeline Flow Diagram */}
                  <div className="p-6 rounded-xl bg-surface-deep border border-glass-border space-y-4">
                    <div className="flex items-center justify-between text-xs font-label-sm text-on-surface-variant">
                      <span className="font-bold text-primary flex items-center gap-1.5 uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm">auto_graph</span> Digital Transformation Pipeline
                      </span>
                      <span className="uppercase tracking-wider font-medium">Zero Vendor Lock-In</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center font-label-sm">
                      <div className="p-4 rounded-xl bg-surface-container border border-glass-border hover:border-primary/30 transition-colors">
                        <span className="text-[10px] text-on-surface-variant block font-semibold">STEP 1</span>
                        <span className="font-bold text-on-surface text-sm">Audit &amp; Spec</span>
                      </div>
                      <div className="p-4 rounded-xl bg-primary-container/20 border border-primary/50 text-primary shadow-sm animate-line-pulse">
                        <span className="text-[10px] text-primary block font-bold">STEP 2</span>
                        <span className="font-bold text-on-surface text-sm">Agile Build</span>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container-high border border-glass-border hover:border-primary/30 transition-colors">
                        <span className="text-[10px] text-on-surface-variant block font-semibold">STEP 3</span>
                        <span className="font-bold text-on-surface text-sm">Continuous Scale</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer action trigger */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-body-md text-on-surface-variant text-sm font-medium">
                      Ready to eliminate this operational friction?
                    </span>
                    <button
                      type="button"
                      onClick={openPlanner}
                      className="group bg-primary-container text-on-primary-container font-headline-md text-[14px] uppercase px-6 py-3 rounded font-bold shimmer-btn hover:shadow-[0_0_20px_rgba(227,30,36,0.4)] transition-all cursor-pointer w-full sm:w-auto text-center flex items-center justify-center gap-2"
                    >
                      <span>Scope Transformation</span>
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform duration-300">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
