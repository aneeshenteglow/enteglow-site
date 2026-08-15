'use client';

import React, { useState } from 'react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';


export const CinematicCTA: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-24 relative overflow-hidden bg-navy-950 text-white border-t border-navy-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-navy-900/90 border border-slate-800 shadow-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-semibold">
              <MessageSquare size={14} />
              <span>Ready to Build Your Digital Software Product?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an Operational Challenge or Product Roadmap? <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">
                Let&apos;s Architect It Together.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential discovery consultation with our senior software architects to review your technical requirements, budget scope, and target deployment timeline.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setPlannerOpen(true)}
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                className="w-full sm:w-auto shadow-lg shadow-gold-500/30 text-slate-950 font-bold"
              >
                Start a Project Scope
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-gold-400" />
                <span>100% Full Source Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-gold-400" />
                <span>Mutual Non-Disclosure Agreement (NDA)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-gold-400" />
                <span>Direct Access to Senior Software Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};

