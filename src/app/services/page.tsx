import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/common/Badge';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { servicesData } from './services/servicesData';

export const metadata: Metadata = {
  title: 'Engineering Services',
  description:
    'Full-lifecycle software engineering services across AI Applications, Web Apps, Website Development, Web Maintenance, and Cloud Infrastructure.',
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pb-12 pt-32">
      {/* Top Banner */}
      <section className="py-12 bg-surface-container-lowest border-b border-surface-variant">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Product Engineering Disciplines
          </Badge>
          <h1 className="font-headline font-bold text-headline-lg text-on-surface">
            Software Development Services
          </h1>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Enteglow provides end-to-end software product development across specialized technical disciplines. Every service is delivered with production-grade engineering standards and full source code ownership.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-label-md text-label-md px-4 py-2 rounded-xl glass-panel text-on-surface hover:text-electric-blue border border-glass-stroke transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-container-max mx-auto px-gutter space-y-12">
        {servicesData.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-32 glass-card rounded-2xl p-8 sm:p-10 space-y-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-surface-container-high">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-surface-container-low text-electric-blue flex items-center justify-center shrink-0 mt-1">
                  <DynamicIcon name={service.iconName} size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-label-md text-outline">
                      Service 0{index + 1}
                    </span>
                    <span className="font-label-md text-label-md text-vibrant-purple bg-vibrant-purple/10 px-3 py-1 rounded-full border border-vibrant-purple/20">
                      {service.technologies[0]}
                    </span>
                  </div>
                  <h2 className="font-headline font-bold text-headline-lg text-on-surface text-2xl sm:text-3xl mt-1">
                    {service.title}
                  </h2>
                  <p className="font-body-md text-body-md text-electric-blue mt-1 font-semibold">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="btn-primary font-label-md text-label-md px-6 py-3 uppercase tracking-wider font-semibold shrink-0 text-center"
              >
                Inquire Service
              </Link>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container-low space-y-3">
                <div className="flex items-center gap-2 font-label-md text-label-md uppercase text-error">
                  <span className="material-symbols-outlined text-base">warning</span>
                  <span>Problems Solved</span>
                </div>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant text-sm">
                  {service.problemsSolved.map((prob, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-error shrink-0 mt-2" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low space-y-3">
                <div className="flex items-center gap-2 font-label-md text-label-md uppercase text-electric-blue">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Core Capabilities</span>
                </div>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant text-sm">
                  {service.keyCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shrink-0 mt-2" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low space-y-3">
                <div className="flex items-center gap-2 font-label-md text-label-md uppercase text-vibrant-purple">
                  <span className="material-symbols-outlined text-base">verified</span>
                  <span>Key Deliverables</span>
                </div>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant text-sm">
                  {service.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-vibrant-purple shrink-0 mt-2" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-surface-container-high flex flex-col md:flex-row md:items-center justify-between gap-4 font-body-md text-body-md">
              <div className="space-y-1">
                <span className="font-label-md text-label-md text-outline uppercase block">
                  Engineering Approach:
                </span>
                <p className="text-on-surface-variant max-w-3xl">{service.approach}</p>
              </div>

              <div className="flex flex-wrap gap-2 shrink-0">
                {service.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="font-label-md text-label-md px-3 py-1 rounded-lg bg-surface-container-high text-on-surface"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CinematicCTA />
    </div>
  );
}
