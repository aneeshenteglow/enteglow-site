'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { processData } from '../services/processData';

export const InteractiveProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentStage = processData[activeStep - 1];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Transparent Agile Delivery"
          title="Predictable 7-Stage Software Development Process"
          description="We follow a disciplined 7-stage engineering process designed to eliminate ambiguity, enforce strict architectural quality standards, and deliver predictable on-time product releases."
        />

        {/* Stepper Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 p-2 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          {processData.map((s) => {
            const isActive = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-3 rounded-xl text-xs font-mono font-semibold transition-all flex flex-col items-center gap-1 text-center ${
                  isActive
                    ? 'bg-navy-950 text-gold-400 border border-gold-500/50 shadow-md font-bold'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-gold-400' : 'text-slate-400'}`}>0{s.step}</span>
                <span className="truncate w-full">{s.short}</span>
              </button>
            );
          })}
        </div>

        {/* Stage Content Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-navy-950 text-white border border-slate-800 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-gold-400 font-bold">Stage 0{activeStep} of 07 • Agile Workflow</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {currentStage.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activeStep === 1}
                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white disabled:opacity-40 text-xs font-mono"
              >
                Prev Stage
              </button>
              <button
                disabled={activeStep === 7}
                onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
                className="px-4 py-2 rounded-xl bg-gold-500 text-slate-950 font-bold hover:bg-gold-400 disabled:opacity-40 text-xs font-mono flex items-center gap-1 shadow-glow-gold"
              >
                <span>Next Stage</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {currentStage.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono text-gold-400 uppercase font-bold flex items-center gap-1.5">
                <Clock size={13} /> Stage Timeframe
              </span>
              <p className="text-xs text-white font-semibold">{activeStep === 1 ? '1 - 2 Weeks' : activeStep < 5 ? '2 - 4 Weeks' : 'Continuous'}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5">
                <Users size={13} /> Client Involvement
              </span>
              <p className="text-xs text-white font-semibold">{activeStep === 1 || activeStep === 6 ? 'High (Weekly Sync)' : 'Medium (Async Review)'}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                <ShieldCheck size={13} /> Quality Control Gate
              </span>
              <p className="text-xs text-white font-semibold">tsc --noEmit & Automated CI/CD</p>
            </div>
          </div>

          <div className="space-y-3 pt-2 text-xs">
            <span className="font-mono text-slate-400 uppercase font-bold block">
              Stage Tangible Deliverables:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200">
              {currentStage.deliverables.map((del, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2.5 font-mono">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
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

