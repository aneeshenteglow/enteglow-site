'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

interface CoreCompetency {
  icon: string;
  title: string;
  description: string;
  link: string;
  badgeText: string;
}

const competencies: CoreCompetency[] = [
  {
    icon: 'smart_toy',
    title: 'AI & ML Integration',
    description: 'Embedding agentic intelligence and predictive models into enterprise workflows.',
    link: '/services',
    badgeText: 'Agentic AI',
  },
  {
    icon: 'web',
    title: 'Web SaaS Platforms',
    description: 'Scalable multi-tenant architectures engineered for high availability and sub-second latency.',
    link: '/services',
    badgeText: 'SaaS Architecture',
  },
  {
    icon: 'phone_iphone',
    title: 'Native Mobile Apps',
    description: 'High-performance iOS and Android applications for consumer and field service deployments.',
    link: '/services',
    badgeText: 'iOS & Android',
  },
  {
    icon: 'settings_system_daydream',
    title: 'Cloud Infrastructure',
    description: 'Modernization, migration, and ongoing maintenance of mission-critical cloud environments.',
    link: '/services',
    badgeText: 'AWS / GCP / K8s',
  },
];

export const ServicesBentoSection: React.FC = () => {
  return (
    <section className="py-section-padding-lg bg-surface-deep relative overflow-hidden border-b border-glass-border">
      {/* Background ambient mesh glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] ambient-glow-red rounded-full opacity-30 pointer-events-none blur-3xl" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-primary/20 text-primary text-xs uppercase tracking-widest font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Specialized Engineering
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-on-surface">
              Core Competencies
            </h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto">
              Precision engineering across the modern technology stack.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((comp, idx) => (
            <ScrollReveal key={comp.title} direction="up" delay={0.15 * (idx + 1)}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass-panel p-8 rounded-2xl flex flex-col h-full border border-glass-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(227,30,36,0.25)] overflow-hidden"
              >
                {/* Accent spotlight inside card on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary/30 text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300 shadow-md">
                    <span className="material-symbols-outlined text-[28px] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {comp.icon}
                    </span>
                  </div>
                  <span className="text-[11px] font-label-sm uppercase tracking-wider text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded border border-glass-border">
                    {comp.badgeText}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors duration-300">
                  {comp.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
                  {comp.description}
                </p>

                <Link
                  href={comp.link}
                  className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 group/link mt-auto pt-2"
                >
                  <span>Explore Service</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1.5 transition-transform duration-300">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
