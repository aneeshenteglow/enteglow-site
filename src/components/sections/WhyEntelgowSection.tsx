'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';
import { ShieldCheck, Code2, Lock, Zap, ArrowRight } from 'lucide-react';
import { companyData } from '@/data/company';


export const WhyEntelgowSection: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Engineering Craftsmanship Guarantee"
            title="Why Forward-Thinking Enterprises Partner With Entelgow"
            description="We operate as dedicated software product engineers, not a body-shopping IT vendor. Here is how our engineering standards guarantee project success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.principles.map((p, idx) => (
              <Card key={idx} hoverEffect={true} className="flex flex-col justify-between p-6 border-slate-200/80">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 border border-gold-300 text-gold-700 flex items-center justify-center font-bold">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-xl">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <Code2 size={20} />
                <span>Strict Code Standards</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every pull request undergoes peer review, static type checking (`tsc --noEmit`), and automated Vitest/RTL suite verification.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-techBlue-600 font-bold text-base">
                <Lock size={20} />
                <span>100% IP & Data Ownership</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All source code, Docker configs, and architecture blueprints belong entirely to your organization upon project delivery. Zero vendor lock-in.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-base">
                <Zap size={20} />
                <span>Architectural Longevity</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We design software to handle scaling milestones effortlessly—whether serving 100 or 100,000 concurrent users.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setPlannerOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-slate-900 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight size={14} className="text-gold-400" />
            </button>
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};

