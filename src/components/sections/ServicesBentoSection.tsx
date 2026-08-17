'use client';

import React from 'react';
import Link from 'next/link';

interface CoreCompetency {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const competencies: CoreCompetency[] = [
  {
    icon: 'smart_toy',
    title: 'AI & ML Integration',
    description: 'Embedding agentic intelligence and predictive models into enterprise workflows.',
    link: '/services',
  },
  {
    icon: 'web',
    title: 'Web SaaS Platforms',
    description: 'Scalable multi-tenant architectures engineered for high availability and sub-second latency.',
    link: '/services',
  },
  {
    icon: 'phone_iphone',
    title: 'Native Mobile Apps',
    description: 'High-performance iOS and Android applications for consumer and field service deployments.',
    link: '/services',
  },
  {
    icon: 'settings_system_daydream',
    title: 'Cloud Infrastructure',
    description: 'Modernization, migration, and ongoing maintenance of mission-critical cloud environments.',
    link: '/services',
  },
];

export const ServicesBentoSection: React.FC = () => {
  return (
    <section className="py-section-padding-lg bg-surface-deep">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-on-surface">
            Core Competencies
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto">
            Precision engineering across the modern technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((comp, idx) => (
            <div
              key={comp.title}
              className={`glass-panel p-8 rounded-xl glow-hover flex flex-col h-full stagger-${idx + 1}`}
            >
              <div className="w-12 h-12 rounded bg-primary-container/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-[24px]">{comp.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-on-surface">{comp.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
                {comp.description}
              </p>
              <Link
                href={comp.link}
                className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-1 group mt-auto"
              >
                Explore Service
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
