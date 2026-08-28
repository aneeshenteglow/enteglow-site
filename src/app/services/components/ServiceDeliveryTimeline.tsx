'use client';

import React from 'react';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

const STAGES = [
  {
    step: '01',
    title: 'Discovery & System Spec',
    description: 'We audit legacy data models, outline business domain requirements, and write the formal architectural specification.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'Architecture Blueprint',
    description: 'Designing high-availability microservices, DB schemas, API gateway boundaries, and security permission models.',
    icon: 'account_tree',
  },
  {
    step: '03',
    title: 'Agile Feature Sprints',
    description: 'Rapid bi-weekly sprint deliverables with strict static type checking (`tsc --noEmit`), unit tests, and continuous PR reviews.',
    icon: 'bolt',
  },
  {
    step: '04',
    title: 'SOC 2 Scale & Handover',
    description: 'Zero-downtime CI/CD deployment, performance load testing, SOC 2 audit readiness, and complete IP source code handover.',
    icon: 'verified',
  },
];

export const ServiceDeliveryTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-surface border-y border-glass-border relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter relative z-10 space-y-16">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-label-sm text-xs font-semibold uppercase tracking-widest text-primary px-3.5 py-1.5 rounded-full glass-panel border border-primary/20 inline-block">
              Engineering Delivery Lifecycle
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              From System Specification to <span className="text-gradient">Production Scale.</span>
            </h2>
            <p className="font-body-lg text-body-lg max-w-2xl mx-auto">
              Our 4-stage software product engineering process guarantees transparency, velocity, and architectural longevity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stg, idx) => (
            <ScrollReveal key={stg.step} direction="up" delay={0.15 * (idx + 1)}>
              <div className="group glass-panel p-8 rounded-2xl border border-glass-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(227,30,36,0.2)] flex flex-col justify-between h-full relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-primary bg-primary-container/20 px-3 py-1 rounded-full border border-primary/30">
                      STAGE {stg.step}
                    </span>
                    <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">
                      {stg.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-xl text-on-surface font-bold mb-3 group-hover:text-primary transition-colors">
                    {stg.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {stg.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
