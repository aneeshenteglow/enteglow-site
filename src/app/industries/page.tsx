import React from 'react';
import type { Metadata } from 'next';
import { IndustriesGrid } from './components/IndustriesGrid';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { Badge } from '@/components/common/Badge';
import { industriesData } from './services/industriesData';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries & Domain Capabilities',
  description:
    'Tailored software solutions across Manufacturing, Retail, Logistics, Construction, Healthcare, Finance, Education, Agriculture, and Enterprise Operations.',
};

export default function IndustriesPage() {
  return (
    <div className="space-y-16 pb-12">
      <section className="pt-8 pb-12 bg-radial-gold border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="cyan" className="mb-4">
            Domain Software Solutions
          </Badge>
          <h1 className="font-display text-3xl sm:text-5xl font-normal text-navy-900 tracking-tight">
            Industries Supported by Entelgow
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We build software tailored to specific domain environments—addressing operational bottlenecks in manufacturing, supply chain, healthcare, retail, finance, and enterprise operations.
          </p>
        </div>
      </section>

      <IndustriesGrid />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-navy-900">Specific Industry Use Cases</h2>
          <p className="text-sm text-slate-600 mt-2">
            Real software product applications supported by our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <div key={ind.id} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center font-bold">
                  <DynamicIcon name={ind.iconName} size={20} />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{ind.name}</h3>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <span className="font-mono text-[11px] uppercase text-slate-500 block mb-1">
                  Example Software Products
                </span>
                {ind.useCases.map((uc, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-700 font-medium">
                    <Check size={14} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CinematicCTA />
    </div>
  );
}
