'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { technologiesData } from '../services/technologiesData';
import { Code2, CheckCircle2 } from 'lucide-react';

export const TechSpectrum: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(technologiesData[0].category);

  const activeGroup = technologiesData.find((t) => t.category === activeCategory) || technologiesData[0];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Engineering Matrix"
          title="Categorized Technology Spectrum"
          description="We select battle-tested languages, frameworks, databases, and infrastructure tools aligned with long-term code maintainability and high-concurrency execution."
        />

        <div className="flex items-center justify-start overflow-x-auto pb-4 gap-2 no-scrollbar scroll-smooth border-b border-slate-200">
          {technologiesData.map((tech) => {
            const isActive = activeCategory === tech.category;
            return (
              <button
                key={tech.category}
                onClick={() => setActiveCategory(tech.category)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold-500 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:text-navy-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{tech.category}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {tech.items.length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>{activeGroup.description}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeGroup.items.map((item, idx) => (
            <Card key={idx} hoverEffect={true} className="flex flex-col justify-between p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-navy-900 flex items-center gap-2">
                    <Code2 size={16} className="text-gold-600" />
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
                <CheckCircle2 size={12} />
                <span>Verified Production Competency</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
