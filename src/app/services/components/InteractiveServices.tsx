'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { servicesData } from '../services/servicesData';

export const InteractiveServices: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);

  const selectedService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Product Engineering Capabilities"
          title="Interactive Services Spectrum"
          description="Explore Entelgow full-lifecycle engineering capabilities across 10 specialized software disciplines. Select any service to inspect key capabilities, problems solved, and technical deliverables."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2 max-h-[580px] overflow-y-auto pr-2 no-scrollbar">
            {servicesData.map((service, idx) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-gold-500 border-gold-600 shadow-md text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-navy-900 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-gold-600 border border-slate-200'}`}>
                      <DynamicIcon name={service.iconName} size={18} />
                    </div>
                    <div>
                      <span className={`text-xs font-mono block ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>0{idx + 1}</span>
                      <span className={`text-sm font-bold block truncate max-w-[200px] ${isSelected ? 'text-white' : 'text-navy-900'}`}>
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={16} className={`transition-transform ${isSelected ? 'text-white translate-x-1' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-xl min-h-[580px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gold-100 border border-gold-200 text-gold-600">
                    <DynamicIcon name={selectedService.iconName} size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="cyan">{selectedService.technologies[0]}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mt-1">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <Button
                  href={`/services#${selectedService.id}`}
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight size={14} />}
                >
                  Full Details
                </Button>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <div className="flex items-center gap-1.5 font-mono uppercase font-semibold text-gold-600">
                    <AlertCircle size={14} />
                    <span>Problems Solved</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {selectedService.problemsSolved.slice(0, 3).map((p, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-1" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <div className="flex items-center gap-1.5 font-mono uppercase font-semibold text-techBlue-600">
                    <CheckCircle2 size={14} />
                    <span>Core Capabilities</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {selectedService.keyCapabilities.slice(0, 3).map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-techBlue-500 shrink-0 mt-1" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs shadow-sm">
                <div className="flex items-center gap-1.5 font-mono uppercase font-semibold text-emerald-600">
                  <FileText size={14} />
                  <span>Technical Deliverables</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  {selectedService.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-mono text-slate-500">Technologies Utilized:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedService.technologies.map((t, i) => (
                  <span key={i} className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-navy-800 shadow-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
