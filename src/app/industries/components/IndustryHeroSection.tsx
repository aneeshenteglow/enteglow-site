'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { industriesData } from '../services/industriesData';

const IndustryConstellationCanvas = dynamic(
  () =>
    import('./IndustryConstellationCanvas').then((mod) => mod.IndustryConstellationCanvas),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-surface-deep/30" />,
  }
);

interface IndustryHeroSectionProps {
  selectedIndustryId: string;
  onSelectIndustry: (id: string) => void;
}

export const IndustryHeroSection: React.FC<IndustryHeroSectionProps> = ({
  selectedIndustryId,
  onSelectIndustry,
}) => {
  const scrollToExplorer = (id: string) => {
    onSelectIndustry(id);
    const element = document.getElementById('domain-explorer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden border-b border-glass-border">
      {/* Ambient Radial Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ambient-glow-red rounded-full pointer-events-none z-0 opacity-60 animate-pulse-glow" />

      {/* 3D WebGL Constellation Canvas */}
      <div className="absolute inset-0 z-0 opacity-60">
        <IndustryConstellationCanvas activeIndustryId={selectedIndustryId} />
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
            <span className="material-symbols-outlined text-primary text-[16px]">domain</span>
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest font-semibold">
              Domain-Tailored Software Engineering
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
          One Engineering Partner. <br />
          <span className="text-gradient">Nine Enterprise Domains.</span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-body-lg text-body-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          We don&apos;t build generic web templates. We engineer mission-critical software tailored to complex operational environments—from IIoT factory floors and fleet telemetry to HIPAA medical workflows and high-speed financial calculations.
        </motion.p>

        {/* Domain Jump Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto"
        >
          <span className="text-xs font-label-sm uppercase tracking-wider mr-2 hidden sm:inline-block">
            Select Domain:
          </span>
          {industriesData.map((ind) => {
            const isSelected = selectedIndustryId === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => scrollToExplorer(ind.id)}
                className={`text-xs font-label-sm uppercase px-4 py-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-primary-container text-on-primary-container font-bold shadow-[0_0_15px_rgba(227,30,36,0.4)] scale-105'
                    : 'glass-panel hover:text-primary hover:border-primary/40'
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: ind.colorAccent }}
                />
                <span>{ind.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
