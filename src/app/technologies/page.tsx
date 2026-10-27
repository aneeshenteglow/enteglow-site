import React from 'react';
import type { Metadata } from 'next';
import { TechSpectrum } from './components/TechSpectrum';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { Badge } from '@/components/common/Badge';
import { technologiesData } from './services/technologiesData';
import { Code, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology Spectrum & Stack',
  description:
    'Explore Entelgow technical capabilities across Frontend, Backend, Mobile, Desktop, AI/ML, IoT, Databases, Cloud, DevOps, and API Integrations.',
};

export default function TechnologiesPage() {
  return (
    <div className="space-y-16 pb-12">
      <section className="pt-8 pb-12 bg-radial-gold border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="violet" className="mb-4">
            Technical Stack & Ecosystem
          </Badge>
          <h1 className="font-display text-3xl sm:text-5xl font-normal text-navy-900 tracking-tight">
            Engineering Expertise Across 10 Tech Domains
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We prioritize technologies that communicate genuine engineering capability—focusing on memory efficiency, static typing, low latency, and operational stability.
          </p>
        </div>
      </section>

      <TechSpectrum />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-navy-900">Full Ecosystem Matrix</h2>
          <p className="text-sm text-slate-600 mt-2">
            Overview of all technologies integrated into Entelgow software engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologiesData.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center font-bold">
                    <Code size={16} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{cat.category}</h3>
                </div>
                <span className="text-xs font-mono text-slate-500">{cat.items.length} Frameworks</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
              <div className="space-y-2 pt-2">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                      <span className="font-semibold text-navy-900">{item.name}</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">{item.level}</span>
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
