'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';
import { AnimatedCounter } from '@/components/common/motion/AnimatedCounter';
import type { EcosystemNodeData } from '@/components/common/ThreeEcosystemCanvas';

const ThreeEcosystemCanvas = dynamic(
  () => import('@/components/common/ThreeEcosystemCanvas').then((mod) => mod.ThreeEcosystemCanvas),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-surface-deep/30" />,
  }
);

export const HeroSection: React.FC = () => {
  const { openPlanner } = useProjectPlanner();
  const [selectedService, setSelectedService] = useState<EcosystemNodeData | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-glass-border">
      {/* Background Layer 1: Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] ambient-glow-red rounded-full pointer-events-none z-0 opacity-50 animate-pulse-glow" />

      {/* Background Layer 2: Tech Grid */}
      <div className="absolute inset-0 bg-grid opacity-25 z-0 pointer-events-none" />

      {/* Middleground Layer: Three.js 3D Interactive Service Ecosystem */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ThreeEcosystemCanvas onSelectNode={(node) => setSelectedService(node)} />
      </div>

      {/* Foreground Layer: Main Hero Content (Priority 1 & 2 Hierarchy) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-container-max mx-auto px-gutter text-center flex flex-col items-center py-12 pointer-events-none"
      >
        {/* Category Badge */}
        <motion.div variants={itemVariants} className="mb-8 pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 glass-panel px-4 py-2 rounded-full border border-primary/30 shadow-[0_0_20px_rgba(227,30,36,0.15)] bg-surface-deep/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="material-symbols-outlined text-primary text-[16px]">auto_awesome</span>
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest font-semibold">
              Software Product Engineering &amp; Business Systems
            </span>
          </div>
        </motion.div>

        {/* Priority 1 Headline (Dominant Visual Element) */}
        <motion.h1
          variants={itemVariants}
          className="font-display-lg text-headline-lg-mobile md:text-display-lg max-w-4xl mx-auto mb-6 text-on-surface leading-tight tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] pointer-events-auto"
        >
          We Build Software That <br />
          <span className="text-gradient">Moves Your Business Forward.</span>
        </motion.h1>

        {/* Priority 2 Subtitle / Description */}
        <motion.p
          variants={itemVariants}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-auto font-normal"
        >
          We partner with business leaders, CTOs, and product managers to replace manual operational friction with production-ready software—unifying Web SaaS Platforms, Mobile Field Apps, Native Workstations, Agentic AI, and IoT Telemetry.
        </motion.p>

        {/* Priority 2 CTA Button Group */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pointer-events-auto z-30">
          <button
            type="button"
            onClick={openPlanner}
            className="group relative bg-primary-container text-on-primary-container font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold shimmer-btn hover:shadow-[0_0_35px_rgba(227,30,36,0.7)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2.5 cursor-pointer overflow-hidden border border-primary/50 shadow-xl"
          >
            <span className="relative z-10">Start a Project</span>
            <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </button>
          <Link
            href="/projects"
            prefetch={true}
            className="group glass-panel text-on-surface font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2.5 glow-hover hover:-translate-y-1 border border-glass-border/80 shadow-xl bg-surface-deep/80 backdrop-blur-md"
          >
            Explore Case Studies
            <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </Link>
        </motion.div>

        {/* Active Hovered Service Bar Notification Slot (Fixed height slot to eliminate layout shifts) */}
        <div className="h-10 mt-6 flex items-center justify-center pointer-events-auto">
          <AnimatePresence mode="wait">
            {selectedService && (
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 rounded-full glass-panel border border-primary/40 bg-surface-deep/90 backdrop-blur-md text-xs flex items-center gap-2.5 shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="font-semibold text-primary">{selectedService.label}:</span>
                <span className="text-on-surface-variant">{selectedService.shortDesc}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Engineering Metrics Bar */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-glass-border/60 w-full max-w-4xl mx-auto text-left glass-panel p-8 rounded-2xl shadow-2xl pointer-events-auto bg-surface-deep/75 backdrop-blur-lg"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-2xl">layers</span>
            </div>
            <div>
              <div className="text-primary font-headline-lg text-3xl font-bold tracking-tight mb-1">
                <AnimatedCounter value="45+" />
              </div>
              <p className="text-on-surface-variant text-sm font-medium">Software Products Built</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-2xl">code</span>
            </div>
            <div>
              <div className="text-primary font-headline-lg text-3xl font-bold tracking-tight mb-1">
                <AnimatedCounter value="95%+" />
              </div>
              <p className="text-on-surface-variant text-sm font-medium">Code Test Coverage</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-2xl">lock</span>
            </div>
            <div>
              <div className="text-primary font-headline-lg text-3xl font-bold tracking-tight mb-1">
                <AnimatedCounter value="100%" />
              </div>
              <p className="text-on-surface-variant text-sm font-medium">IP Source Ownership</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
