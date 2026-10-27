'use client';

import React from 'react';
import Link from 'next/link';

export const ServicesBentoSection: React.FC = () => {
  return (
    <section className="py-section-padding-desktop bg-background relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute -right-64 top-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-vibrant-purple/10 rounded-full blur-3xl" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="font-display font-normal text-headline-lg text-on-surface mb-4">
            Our Expertise
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Comprehensive engineering capabilities designed to accelerate digital transformation and operational excellence.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Bento Card 1: AI Apps (Large 2-column) */}
          <div className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-electric-blue/20 to-vibrant-purple/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
            <div>
              <div className="w-16 h-16 rounded-xl bg-surface-container-low flex items-center justify-center mb-6 text-electric-blue">
                <span className="material-symbols-outlined text-4xl">smart_toy</span>
              </div>
              <h3 className="font-headline font-semibold text-headline-md text-on-surface mb-3">
                AI Application Development
              </h3>
            </div>
            <div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-6">
                Integrating machine learning and advanced AI models into operational workflows to drive intelligent automation and predictive insights.
              </p>
              <Link
                className="font-label-md text-label-md text-electric-blue uppercase flex items-center gap-2 group-hover:gap-4 transition-all"
                href="/services"
              >
                Learn More <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Bento Card 2: Web Apps */}
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-vibrant-purple/10 rounded-full blur-xl z-0 transition-transform group-hover:scale-150" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center mb-6 text-vibrant-purple">
                <span className="material-symbols-outlined text-3xl">developer_mode</span>
              </div>
              <h3 className="font-headline font-semibold text-headline-md text-on-surface mb-3">
                Web App Development
              </h3>
            </div>
            <Link
              className="font-label-md text-label-md text-vibrant-purple uppercase flex items-center gap-2 relative z-10"
              href="/services"
            >
              Explore <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          {/* Bento Card 3: Website Dev */}
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center mb-6 text-electric-blue">
                <span className="material-symbols-outlined text-3xl">web</span>
              </div>
              <h3 className="font-headline font-semibold text-headline-md text-on-surface mb-3">
                Website Development
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                High-performance, scalable corporate platforms built on modern web architectures for optimal speed and SEO.
              </p>
            </div>
          </div>

          {/* Bento Card 4: Web Maintenance & Hosting (Wide 2-column) */}
          <div className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-row items-center justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-low opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 max-w-md">
              <div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">settings_suggest</span>
              </div>
              <h3 className="font-headline font-semibold text-headline-md text-on-surface mb-2">
                Web Maintenance & Hosting
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Secure, 99.9% uptime cloud hosting and continuous maintenance protocols to ensure your digital assets remain performant and protected.
              </p>
            </div>
            <div className="hidden md:flex relative z-10 items-center justify-center w-32 h-32 rounded-full border border-dashed border-outline-variant animate-[spin_20s_linear_infinite]">
              <span className="material-symbols-outlined text-outline-variant absolute text-3xl">cloud_sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
