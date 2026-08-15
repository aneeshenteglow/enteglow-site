'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, FileText, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Badge } from '@/components/common/Badge';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';
import { servicesData } from '../services/servicesData';

export const InteractiveServices: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);
  const [plannerOpen, setPlannerOpen] = useState(false);

  const selectedService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  return (
    <>
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Business Services Spectrum"
            title="Software Engineering Capabilities Built Around Business Needs"
            description="Explore our full-lifecycle product development disciplines. We deliver end-to-end software solutions designed to streamline operations, launch digital products, and drive bottom-line growth."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Service Selector List */}
            <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto pr-2 no-scrollbar">
              {servicesData.map((service, idx) => {
                const isSelected = selectedServiceId === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                      isSelected
                        ? 'bg-navy-950 border-gold-500 shadow-lg text-white'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-gold-500 text-slate-950 font-bold' : 'bg-slate-100 text-gold-600 border border-slate-200'}`}>
                        <DynamicIcon name={service.iconName} size={18} />
                      </div>
                      <div>
                        <span className={`text-[11px] font-mono block ${isSelected ? 'text-gold-400' : 'text-slate-400'}`}>
                          0{idx + 1} • {service.technologies[0]}
                        </span>
                        <span className={`text-sm font-bold block truncate max-w-[200px] ${isSelected ? 'text-white' : 'text-navy-900'}`}>
                          {service.title}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={16} className={`transition-transform ${isSelected ? 'text-gold-400 translate-x-1' : 'opacity-0'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Business & Technical View */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 space-y-6 shadow-xl min-h-[600px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-gold-100 border border-gold-300 text-gold-700">
                      <DynamicIcon name={selectedService.iconName} size={26} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="primary">Business-First Solution</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mt-1">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setPlannerOpen(true)}
                    className="px-4 py-2.5 rounded-xl bg-gold-500 text-slate-950 font-bold text-xs hover:bg-gold-400 transition-colors flex items-center gap-2 shadow-md shadow-gold-500/20"
                  >
                    <Sparkles size={14} />
                    <span>Scope Service</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-gold-600 uppercase font-bold">Business Purpose & Value:</span>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {selectedService.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center gap-1.5 font-mono uppercase font-bold text-gold-700">
                      <AlertCircle size={14} />
                      <span>Business Problems Solved</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-700">
                      {selectedService.problemsSolved.slice(0, 3).map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-1.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center gap-1.5 font-mono uppercase font-bold text-techBlue-600">
                      <CheckCircle2 size={14} />
                      <span>Engineered Capabilities</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-700">
                      {selectedService.keyCapabilities.slice(0, 3).map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-techBlue-600 shrink-0 mt-1.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 text-xs border border-slate-800">
                  <div className="flex items-center gap-1.5 font-mono uppercase font-bold text-emerald-400">
                    <FileText size={14} />
                    <span>Technical Deliverables & Code Standards</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                    {selectedService.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-mono text-slate-500 font-semibold">Technologies Utilized:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.technologies.map((t, i) => (
                    <span key={i} className="font-mono text-[11px] px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-navy-900 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};

