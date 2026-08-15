'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { technologiesData } from '../services/technologiesData';
import { Code2, CheckCircle2, ShieldCheck, Cpu, Lock } from 'lucide-react';

export const TechSpectrum: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(technologiesData[0].category);

  const activeGroup = technologiesData.find((t) => t.category === activeCategory) || technologiesData[0];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Technical Credibility & Architecture"
          title="Battle-Tested Technology Matrix"
          description="We select proven languages, frameworks, databases, and cloud infrastructure aligned with enterprise security, code maintainability, and high-concurrency execution."
        />

        {/* Enterprise Compliance Readiness Ribbon */}
        <div className="p-4 rounded-2xl bg-navy-950 text-white border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-gold-400 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block">Enterprise Compliance & Security Standards</span>
              <span className="text-slate-400 font-mono">SOC 2 Type II Ready • OWASP Top 10 • Zero-Trust Access Control</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-emerald-400">
            <span className="flex items-center gap-1.5"><Lock size={12} /> End-to-End Encryption</span>
            <span className="flex items-center gap-1.5"><Cpu size={12} /> Docker Containerized</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start overflow-x-auto pb-2 gap-2 no-scrollbar scroll-smooth border-b border-slate-200">
          {technologiesData.map((tech) => {
            const isActive = activeCategory === tech.category;
            return (
              <button
                key={tech.category}
                onClick={() => setActiveCategory(tech.category)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-navy-950 text-gold-400 border border-gold-500/50 shadow-md font-bold'
                    : 'bg-slate-50 text-slate-700 hover:text-navy-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{tech.category}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isActive ? 'bg-gold-500 text-slate-950 font-bold' : 'bg-slate-200 text-slate-700'}`}>
                  {tech.items.length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>{activeGroup.description}</span>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeGroup.items.map((item, idx) => (
            <Card key={idx} hoverEffect={true} className="flex flex-col justify-between p-6 border-slate-200/80">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-navy-900 flex items-center gap-2">
                    <Code2 size={16} className="text-gold-600 shrink-0" />
                    <span>{item.name}</span>
                  </h4>
                  <Badge
                    variant={
                      item.level === 'Primary Stack'
                        ? 'primary'
                        : item.level === 'Production'
                        ? 'cyan'
                        : 'neutral'
                    }
                  >
                    {item.level}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-semibold">
                <CheckCircle2 size={13} />
                <span>Production Verified Benchmark</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

