'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, FileText, Sparkles, Layers, Activity } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Badge } from '@/components/common/Badge';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';
import { servicesData } from '../services/servicesData';

const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'digital-products', label: 'Digital Products' },
  { id: 'mobile-native', label: 'Mobile & Native' },
  { id: 'intelligent-systems', label: 'Intelligent Systems' },
  { id: 'connected-systems', label: 'Connected Systems' },
];

export const InteractiveServices: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);
  const [plannerOpen, setPlannerOpen] = useState(false);

  // Filter services by business category mapping
  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'digital-products') return ['web-applications', 'websites', 'ui-ux-design'].includes(service.id);
    if (activeCategory === 'mobile-native') return ['mobile-applications', 'desktop-applications'].includes(service.id);
    if (activeCategory === 'intelligent-systems') return ['ai-agents', 'custom-software'].includes(service.id);
    if (activeCategory === 'connected-systems') return ['iot-solutions', 'api-backend', 'devops-cloud'].includes(service.id);
    return true;
  });

  const selectedService = servicesData.find((s) => s.id === selectedServiceId) || filteredServices[0] || servicesData[0];

  return (
    <>
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            badge="What We Build"
            title="Comprehensive Engineering Capabilities"
            description="Elevating business concepts to robust digital realities. We engineer scalable web platforms, mobile products, AI agent workflows, and cloud infrastructure."
          />


          {/* Business Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 no-scrollbar">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    const matched = servicesData.find((s) => {
                      if (cat.id === 'all') return true;
                      if (cat.id === 'digital-products') return ['web-applications', 'websites', 'ui-ux-design'].includes(s.id);
                      if (cat.id === 'mobile-native') return ['mobile-applications', 'desktop-applications'].includes(s.id);
                      if (cat.id === 'intelligent-systems') return ['ai-agents', 'custom-software'].includes(s.id);
                      if (cat.id === 'connected-systems') return ['iot-solutions', 'api-backend', 'devops-cloud'].includes(s.id);
                      return true;
                    });
                    if (matched) setSelectedServiceId(matched.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-navy-950 text-gold-400 border border-gold-500/40 shadow-md font-bold'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Service Selector List */}
            <div className="lg:col-span-4 space-y-2.5 max-h-[600px] overflow-y-auto pr-2 no-scrollbar">
              {filteredServices.map((service, idx) => {
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
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xl min-h-[600px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-gold-100 border border-gold-300 text-gold-700">
                      <DynamicIcon name={selectedService.iconName} size={26} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="primary">Production-Grade Engineering</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mt-1">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setPlannerOpen(true)}
                    className="px-4 py-2.5 rounded-xl bg-gold-500 text-slate-950 font-bold text-xs hover:bg-gold-400 transition-colors flex items-center gap-2 shadow-md shadow-gold-500/20 shrink-0"
                  >
                    <Sparkles size={14} />
                    <span>Scope Service</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-gold-600 uppercase font-bold">What We Build & Business Purpose:</span>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {selectedService.description}
                  </p>
                </div>

                {/* System Architecture Flow Visualizer */}
                <div className="p-4 rounded-2xl bg-navy-950 text-white border border-slate-800 space-y-2">
                  <span className="text-[11px] font-mono text-gold-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Activity size={13} /> Architecture Transformation Flow:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300 pt-1">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-white font-semibold">Business Requirements</span>
                    <span className="text-gold-400">→</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-gold-300 font-semibold">{selectedService.title}</span>
                    <span className="text-gold-400">→</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400 font-semibold">Production Systems</span>
                    <span className="text-gold-400">→</span>
                    <span className="px-2.5 py-1 rounded-md bg-gold-500/20 border border-gold-500/40 text-gold-400 font-bold">Business Outcome</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center gap-1.5 font-mono uppercase font-bold text-red-600">
                      <AlertCircle size={14} />
                      <span>Operational Problems Solved</span>
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
                    <span>Tangible Deliverables & Artifacts</span>
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
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-slate-500 font-semibold flex items-center gap-1">
                    <Layers size={13} className="text-gold-600" />
                    Stack:
                  </span>
                  {selectedService.technologies.slice(0, 4).map((t, i) => (
                    <span key={i} className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-navy-900 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setPlannerOpen(true)}
                  className="px-5 py-2 rounded-xl bg-gold-500 text-slate-950 font-bold text-xs hover:bg-gold-400 transition-all flex items-center gap-2 shadow-md shadow-gold-500/20"
                >
                  <span>Request Architecture Scope</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};
