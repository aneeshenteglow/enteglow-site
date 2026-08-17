'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { servicesData } from '../services/servicesData';

const ServiceTopologyCanvas = dynamic(
  () => import('./ServiceTopologyCanvas').then((mod) => mod.ServiceTopologyCanvas),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-surface-deep/30" />,
  }
);

export const ServiceHeroSection: React.FC = () => {
  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 overflow-hidden border-b border-glass-border">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ambient-glow-red rounded-full pointer-events-none z-0 opacity-60 animate-pulse-glow" />

      {/* 3D WebGL Service Topology Canvas */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ServiceTopologyCanvas />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2.5 glass-panel px-4 py-2 rounded-full border border-primary/30 shadow-[0_0_20px_rgba(227,30,36,0.15)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="material-symbols-outlined text-primary text-[16px]">layers</span>
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest font-semibold">
              Product Engineering Disciplines
            </span>
          </div>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display-lg text-headline-lg-mobile md:text-display-lg max-w-4xl mx-auto mb-6 text-on-surface leading-tight tracking-tight"
        >
          Full-Lifecycle Software <br />
          <span className="text-gradient">Product Engineering.</span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Enteglow provides end-to-end software product development across specialized technical disciplines. Every service is delivered with strict technical standards, zero mock fallbacks, and 100% source code ownership.
        </motion.p>

        {/* Service Jump Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto"
        >
          {servicesData.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollToService(s.id)}
              className="text-xs font-label-sm uppercase px-4 py-2 rounded-full glass-panel text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{s.title}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
