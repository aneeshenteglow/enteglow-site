import React from 'react';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { servicesData } from './services/servicesData';

export const metadata: Metadata = {
  title: 'Engineering Services',
  description:
    'Full-lifecycle software engineering services across Desktop Applications, Mobile Apps, Web Systems, Websites, AI Agents, AI/ML, IoT Telemetry, Custom Software, Backend APIs, and Cloud DevOps.',
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pb-12">
      <section className="pt-8 pb-12 bg-radial-gold border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" className="mb-4">
            Product Engineering Disciplines
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Software Development Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Entelgow provides end-to-end software product development across 10 specialized technical disciplines. Every service is delivered with production-grade engineering standards and full source code ownership.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto text-xs">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-navy-900 hover:border-gold-500 transition-colors shadow-xs"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesData.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 space-y-8 shadow-xl"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0 mt-1">
                  <DynamicIcon name={service.iconName} size={26} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500">
                      Service 0{index + 1}
                    </span>
                    <Badge variant="cyan">{service.technologies[0]}</Badge>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-1">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gold-600 mt-1 font-semibold">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight size={16} />}
                className="shrink-0 shadow-md shadow-gold-500/20"
              >
                Inquire Service
              </Button>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-gold-600">
                  <AlertCircle size={16} />
                  <span>Problems Solved</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {service.problemsSolved.map((prob, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-1" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-techBlue-600">
                  <CheckCircle2 size={16} />
                  <span>Core Capabilities</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {service.keyCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-techBlue-500 shrink-0 mt-1" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-emerald-600">
                  <FileText size={16} />
                  <span>Key Deliverables</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {service.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-mono text-slate-500 font-semibold block uppercase">
                  Engineering Approach:
                </span>
                <p className="text-slate-700 max-w-3xl">{service.approach}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 shrink-0">
                {service.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="font-mono px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-navy-800 text-xs"
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
