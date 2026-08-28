'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industriesData } from '../services/industriesData';
import { IndustryDetail } from '../types/industry';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

interface InteractiveDomainExplorerProps {
  selectedIndustryId: string;
  onSelectIndustry: (id: string) => void;
}

export const InteractiveDomainExplorer: React.FC<InteractiveDomainExplorerProps> = ({
  selectedIndustryId,
  onSelectIndustry,
}) => {
  const { openPlanner } = useProjectPlanner();

  const activeIndustry: IndustryDetail =
    industriesData.find((ind) => ind.id === selectedIndustryId) || industriesData[0];

  return (
    <section id="domain-explorer" className="py-24 bg-surface border-b border-glass-border relative overflow-hidden">
      {/* Dynamic Background Accent Glow matching active industry color */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20 pointer-events-none blur-3xl transition-colors duration-700"
        style={{ backgroundColor: activeIndustry.colorAccent }}
      />

      <div className="max-w-container-max mx-auto px-gutter relative z-10 space-y-12">
        {/* Section Title */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold shadow-[0_0_15px_rgba(227,30,36,0.15)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Interactive Workflow Explorer
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Explore Industry <span className="text-gradient">Workflows &amp; Transformations.</span>
            </h2>
            <p className="font-body-lg text-body-lg max-w-2xl mx-auto leading-relaxed">
              Select an enterprise domain below to inspect real-world operational bottlenecks, animated software workflow pipelines, and quantified engineering ROI.
            </p>
          </div>
        </ScrollReveal>

        {/* Domain Navigation Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {industriesData.map((ind) => {
            const isSelected = activeIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => onSelectIndustry(ind.id)}
                className={`relative px-4 py-4 rounded-xl font-label-sm text-xs uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? 'text-on-primary-container font-bold shadow-lg'
                    : 'glass-panel hover:text-on-surface hover:border-primary/30'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeDomainTab"
                    className="absolute inset-0 bg-primary-container rounded-xl z-0 shadow-[0_0_20px_rgba(227,30,36,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center">
                  <DynamicIcon name={ind.iconName} size={18} />
                </span>
                <span className="relative z-10">{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-2xl p-8 sm:p-12 space-y-10 border border-glass-border shadow-2xl relative overflow-hidden"
          >
            {/* Header info bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-glass-border">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-on-primary-container shadow-lg shrink-0"
                  style={{ backgroundColor: activeIndustry.colorAccent }}
                >
                  <DynamicIcon name={activeIndustry.iconName} size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-label-sm uppercase tracking-wider font-semibold">
                      Enterprise Domain
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-xs font-label-sm uppercase tracking-wider text-primary font-bold">
                      {activeIndustry.category}
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold">
                    {activeIndustry.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="glass-panel px-4 py-2 rounded-full border border-primary/30 text-primary font-label-sm text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  {activeIndustry.metricROI}
                </span>
                <button
                  type="button"
                  onClick={openPlanner}
                  className="group bg-primary-container text-on-primary-container font-headline-md text-xs uppercase px-4 py-4 rounded-xl font-bold shimmer-btn hover:shadow-[0_0_20px_rgba(227,30,36,0.4)] transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Scope Solution</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Workflow Pipeline Stepper */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-label-sm uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">schema</span>
                  Industry Workflow Pipeline
                </span>
                <span className="text-xs font-label-sm uppercase">
                  5-Stage Architecture Stream
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {activeIndustry.workflowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative p-4 rounded-xl bg-surface-container border border-glass-border hover:border-primary/40 transition-colors group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-primary bg-primary-container/20 px-2 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                      {idx < activeIndustry.workflowSteps.length - 1 && (
                        <span className="material-symbols-outlined text-xs hidden sm:inline-block group-hover:translate-x-1 group-hover:text-primary transition-all">
                          chevron_right
                        </span>
                      )}
                    </div>
                    <span className="font-headline-md text-xs text-on-surface font-bold group-hover:text-primary transition-colors">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Transformation (Before vs After) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl bg-error-container/10 border border-error-container/30 space-y-2">
                <div className="flex items-center gap-2 text-error font-label-sm text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-error" />
                  <span>Legacy Friction</span>
                </div>
                <p className="font-body-md text-sm leading-relaxed">
                  {activeIndustry.frictionBefore}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-primary-container/15 border border-primary/40 space-y-2 shadow-inner">
                <div className="flex items-center gap-2 text-primary font-label-sm text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>Enteglow Solution</span>
                </div>
                <p className="font-body-md text-on-surface font-semibold text-sm leading-relaxed">
                  {activeIndustry.solutionAfter}
                </p>
              </div>
            </div>

            {/* Capabilities & Tech Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-glass-border">
              <div>
                <span className="text-xs font-label-sm uppercase tracking-wider block mb-3 font-semibold">
                  Representative Software Products:
                </span>
                <ul className="space-y-2">
                  {activeIndustry.useCases.map((uc, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-label-sm uppercase tracking-wider block mb-3 font-semibold">
                  Relevant Engineering Tech Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.relevantTech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-surface-container-high border border-glass-border text-on-surface font-medium hover:border-primary/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
