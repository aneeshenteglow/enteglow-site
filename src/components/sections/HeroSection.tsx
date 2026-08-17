'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, Variants } from 'framer-motion';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';
import { AnimatedCounter } from '@/components/common/motion/AnimatedCounter';

const ThreeEcosystemCanvas = dynamic(
  () => import('@/components/common/ThreeEcosystemCanvas').then((mod) => mod.ThreeEcosystemCanvas),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-surface-deep/30" />,
  }
);

export const HeroSection: React.FC = () => {
  const { openPlanner } = useProjectPlanner();

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
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden border-b border-glass-border">
      {/* Ambient Red Glow Layer */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-red rounded-full pointer-events-none z-0 opacity-70 animate-pulse-glow" />

      {/* Three.js 3D WebGL Interactive Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ThreeEcosystemCanvas />
      </div>

      {/* Structural Tech Grid Layer */}
      <div className="absolute inset-0 bg-grid opacity-40 z-0 pointer-events-none" />

      {/* Hero Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-container-max mx-auto px-gutter text-center flex flex-col items-center py-16"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2.5 glass-panel px-4 py-2 rounded-full border border-primary/30 shadow-[0_0_20px_rgba(227,30,36,0.15)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="material-symbols-outlined text-primary text-[16px]">auto_awesome</span>
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest font-semibold">
              Software Product Engineering &amp; Business Systems
            </span>
          </div>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display-lg text-headline-lg-mobile md:text-display-lg max-w-4xl mx-auto mb-6 text-on-surface leading-tight tracking-tight"
        >
          We Build Software That <br />
          <span className="text-gradient">Moves Your Business Forward.</span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          variants={itemVariants}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          We partner with business leaders, CTOs, and product managers to replace manual operational friction with production-ready software—unifying Web SaaS Platforms, Mobile Field Apps, Native Workstations, Agentic AI, and IoT Telemetry.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={openPlanner}
            className="group relative bg-primary-container text-on-primary-container font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold shimmer-btn hover:shadow-[0_0_30px_rgba(227,30,36,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2.5 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Start a Project</span>
            <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </button>
          <Link
            href="/projects"
            prefetch={true}
            className="group glass-panel text-on-surface font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2.5 glow-hover hover:-translate-y-1"
          >
            Explore Case Studies
            <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </Link>
        </motion.div>

        {/* Key Engineering Metrics Bar */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-10 border-t border-glass-border/60 w-full max-w-4xl mx-auto text-left glass-panel p-8 rounded-2xl shadow-xl"
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
