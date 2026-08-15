'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';
import { industriesData } from '../services/industriesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const IndustriesGrid: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Industry Domain Expertise"
            title="Software Solutions Tailored To Your Industry Regulations & Workflows"
            description="We engineer domain-specific software platforms built around your industry's strict operational rules, compliance standards, and legacy hardware interfaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <Card key={ind.id} hoverEffect={true} className="flex flex-col justify-between p-6 border-slate-200/80 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-gold-100 border border-gold-300 text-gold-700 flex items-center justify-center font-bold">
                      <DynamicIcon name={ind.iconName} size={22} />
                    </div>
                    <Badge variant="primary">{ind.name}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">{ind.name} Software</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    <span className="font-mono font-bold uppercase text-slate-500 block">
                      Specific Software Solved:
                    </span>
                    {ind.supportedCapabilities.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-800 font-medium">
                        <CheckCircle2 size={15} className="text-gold-500 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-400 font-medium">{ind.useCases[0]}</span>
                  <button
                    onClick={() => setPlannerOpen(true)}
                    className="font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1 text-xs"
                  >
                    <span>Discuss Scope</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};

