'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/common/SectionHeader';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';
import { servicesData } from '../services/servicesData';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'digital-products', label: 'Web & SaaS Platforms' },
  { id: 'mobile-native', label: 'Mobile & Workstations' },
  { id: 'intelligent-systems', label: 'AI & Agentic Systems' },
  { id: 'connected-systems', label: 'Cloud & IIoT Infrastructure' },
];

export const InteractiveServices: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);
  const { openPlanner } = useProjectPlanner();

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
    <section className="py-24 bg-surface border-b border-glass-border relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter space-y-12 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Capability Architecture Configurator"
            title="Specialized Product Engineering Disciplines"
            description="Explore our modular technical disciplines. Every service is built on production-grade microservice architecture, strict type safety (`tsc --noEmit`), and 100% IP source ownership."
          />
        </ScrollReveal>

        {/* Category Filters */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-2 gap-2 no-scrollbar">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
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
                className={`relative px-4 py-4 rounded-xl text-xs uppercase tracking-wider font-label-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-on-primary-container font-bold shadow-md'
                    : 'glass-panel hover:text-on-surface hover:border-primary/30'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeServiceCategory"
                    className="absolute inset-0 bg-primary-container rounded-xl z-0 shadow-[0_0_15px_rgba(227,30,36,0.3)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Matrix Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-4 space-y-3 max-h-[620px] overflow-y-auto pr-2 no-scrollbar">
            {filteredServices.map((service, idx) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'glass-panel border-primary shadow-[0_0_20px_rgba(227,30,36,0.25)] bg-surface-container'
                      : 'glass-panel border-glass-border hover:border-primary/40'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isSelected
                          ? 'bg-primary-container text-on-primary-container shadow-md'
                          : 'bg-surface-container-high'
                      }`}
                    >
                      <DynamicIcon name={service.iconName} size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono block text-primary font-bold">
                        DISCIPLINE 0{idx + 1}
                      </span>
                      <span className="text-sm font-bold block text-on-surface">
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`material-symbols-outlined transition-all duration-300 ${
                      isSelected ? 'text-primary translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'
                    }`}
                  >
                    arrow_forward
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Detail View */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl p-8 space-y-6 border border-glass-border shadow-2xl relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-glass-border gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary shrink-0 shadow-md">
                      <DynamicIcon name={selectedService.iconName} size={28} />
                    </div>
                    <div>
                      <span className="text-xs font-label-sm uppercase tracking-wider text-primary font-bold">
                        {selectedService.technologies[0]} Discipline
                      </span>
                      <h3 className="font-headline-lg text-2xl font-bold text-on-surface mt-0.5">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={openPlanner}
                    className="group bg-primary-container text-on-primary-container font-headline-md text-xs uppercase px-4 py-4 rounded-xl font-bold shimmer-btn hover:shadow-[0_0_20px_rgba(227,30,36,0.4)] transition-all cursor-pointer flex items-center gap-2 shrink-0"
                  >
                    <span>Scope Discipline</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </button>
                </div>

                <p className="font-body-lg text-body-lg leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Microservice Architecture Flow */}
                <div className="p-5 rounded-xl bg-surface-deep border border-glass-border space-y-3">
                  <div className="flex items-center justify-between text-xs font-label-sm">
                    <span className="font-bold text-primary flex items-center gap-1.5 uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">auto_graph</span> Architecture Topology Pipeline
                    </span>
                    <span className="uppercase tracking-wider">Sub-second Latency SLA</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-3 py-1 rounded bg-surface-container border border-glass-border text-on-surface">Client Layer</span>
                    <span className="text-primary">→</span>
                    <span className="px-3 py-1 rounded bg-primary-container/20 border border-primary/40 text-primary font-bold">{selectedService.title}</span>
                    <span className="text-primary">→</span>
                    <span className="px-3 py-1 rounded bg-surface-container-high border border-glass-border text-on-surface">API Gateway &amp; Microservices</span>
                  </div>
                </div>

                {/* Problem vs Capabilities Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-5 rounded-xl bg-error-container/10 border border-error-container/30 space-y-2">
                    <div className="flex items-center gap-2 text-error font-label-sm uppercase tracking-wider font-bold">
                      <span className="material-symbols-outlined text-sm">warning</span>
                      <span>Problems Solved</span>
                    </div>
                    <ul className="space-y-1.5">
                      {selectedService.problemsSolved.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-error shrink-0 mt-1.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-primary-container/15 border border-primary/40 space-y-2">
                    <div className="flex items-center gap-2 text-primary font-label-sm uppercase tracking-wider font-bold">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span>Core Capabilities</span>
                    </div>
                    <ul className="space-y-1.5 text-on-surface">
                      {selectedService.keyCapabilities.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Deliverables */}
                <div className="p-5 rounded-xl bg-surface-container-high border border-glass-border space-y-3">
                  <span className="text-xs font-label-sm text-primary uppercase tracking-wider font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">verified</span> Tangible Deliverables &amp; Artifacts
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface">
                    {selectedService.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-primary">check</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-glass-border flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-label-sm uppercase font-semibold">
                      Tech Stack:
                    </span>
                    {selectedService.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-3 py-1 rounded bg-surface-container border border-glass-border text-on-surface font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
