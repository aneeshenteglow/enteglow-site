import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/common/Badge';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { servicesData } from './services/servicesData';

export const metadata: Metadata = {
  title: 'Engineering Services | Enteglow',
  description:
    'Full-lifecycle software engineering services across AI Applications, Web Apps, Website Development, Web Maintenance, and Cloud Infrastructure.',
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pb-12 pt-32 bg-background">
      {/* Top Banner */}
      <section className="py-12 bg-surface-deep border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Product Engineering Disciplines
          </Badge>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
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
                className="font-label-sm text-label-sm uppercase px-4 py-2 rounded glass-panel text-on-surface-variant hover:text-primary hover:border-primary/40 transition-colors"
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
            className="scroll-mt-32 glass-panel rounded-xl p-8 sm:p-10 space-y-8 glow-hover"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-glass-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded bg-primary-container/10 text-primary flex items-center justify-center shrink-0 mt-1 border border-primary/20">
                  <DynamicIcon name={service.iconName} size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Service 0{index + 1}
                    </span>
                    <span className="font-label-sm text-label-sm text-primary bg-primary-container/10 px-3 py-0.5 rounded-full border border-primary/20 uppercase">
                      {service.technologies[0]}
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface text-2xl sm:text-3xl mt-1">
                    {service.title}
                  </h2>
                  <p className="font-body-md text-primary mt-1 font-semibold">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-primary-container text-on-primary-container font-headline-md text-[14px] uppercase px-6 py-3 rounded font-bold hover:shadow-[0_0_15px_rgba(227,30,36,0.3)] transition-all shrink-0 text-center"
              >
                Inquire Service
              </Link>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded bg-surface-container border border-glass-border space-y-3">
                <div className="flex items-center gap-2 font-label-sm text-label-sm uppercase text-error">
                  <span className="material-symbols-outlined text-base">warning</span>
                  <span>Problems Solved</span>
                </div>
                <ul className="space-y-2 font-body-md text-on-surface-variant text-sm">
                  {service.problemsSolved.map((prob, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-error shrink-0 mt-2" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded bg-surface-container border border-glass-border space-y-3">
                <div className="flex items-center gap-2 font-label-sm text-label-sm uppercase text-primary">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Core Capabilities</span>
                </div>
                <ul className="space-y-2 font-body-md text-on-surface-variant text-sm">
                  {service.keyCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded bg-surface-container border border-glass-border space-y-3">
                <div className="flex items-center gap-2 font-label-sm text-label-sm uppercase text-primary">
                  <span className="material-symbols-outlined text-base">verified</span>
                  <span>Key Deliverables</span>
                </div>
                <ul className="space-y-2 font-body-md text-on-surface-variant text-sm">
                  {service.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-glass-border flex flex-col md:flex-row md:items-center justify-between gap-4 font-body-md">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">
                  Engineering Approach:
                </span>
                <p className="text-on-surface-variant max-w-3xl text-sm">{service.approach}</p>
              </div>

              <div className="flex flex-wrap gap-2 shrink-0">
                {service.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="font-label-sm text-xs px-3 py-1 rounded bg-surface-container-high text-on-surface uppercase"
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
