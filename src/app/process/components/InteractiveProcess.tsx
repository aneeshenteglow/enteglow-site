'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { processData } from '../services/processData';

export const InteractiveProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Product SDLC"
          title="Scroll-Driven Engineering Lifecycle"
          description="Entelgow follows a 7-stage software development process designed to eliminate ambiguity, enforce strict architectural standards, and guarantee predictable product releases."
        />

        <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 p-2 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          {processData.map((s) => {
            const isActive = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-3 rounded-xl text-xs font-mono font-semibold transition-all flex flex-col items-center gap-1 text-center ${
                  isActive
                    ? 'bg-gold-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-white/80' : 'text-slate-400'}`}>Stage 0{s.step}</span>
                <span className="truncate w-full">{s.short}</span>
              </button>
            );
          })}
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono text-gold-600 font-bold">Stage 0{activeStep} of 07</span>
              <h3 className="text-2xl font-bold text-navy-900 mt-0.5">
                {processData[activeStep - 1].title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activeStep === 1}
                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-navy-800 disabled:opacity-40 text-xs font-mono"
              >
                Prev Stage
              </button>
              <button
                disabled={activeStep === 7}
                onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
                className="px-3.5 py-1.5 rounded-lg bg-gold-500 text-white disabled:opacity-40 text-xs font-mono flex items-center gap-1 shadow-sm"
              >
                <span>Next Stage</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {processData[activeStep - 1].description}
          </p>

          <div className="space-y-2 pt-2 text-xs">
            <span className="font-mono text-slate-500 uppercase font-semibold block">
              Stage Key Deliverables
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              {processData[activeStep - 1].deliverables.map((del, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-xs">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
