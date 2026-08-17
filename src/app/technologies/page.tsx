import React from 'react';
import type { Metadata } from 'next';
import { TechSpectrum } from './components/TechSpectrum';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { Badge } from '@/components/common/Badge';
import { technologiesData } from './services/technologiesData';
import { Code, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology Spectrum & Stack | Enteglow',
  description:
    'Explore Enteglow technical capabilities across Frontend, Backend, Mobile, Desktop, AI/ML, IoT, Databases, Cloud, DevOps, and API Integrations.',
};

export default function TechnologiesPage() {
  return (
    <div className="space-y-16 pb-12 pt-32 bg-background">
      <section className="py-12 bg-surface-deep border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Technical Stack &amp; Ecosystem
          </Badge>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Engineering Expertise Across Tech Domains
          </h1>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            We prioritize technologies that communicate genuine engineering capability—focusing on memory efficiency, static typing, low latency, and operational stability.
          </p>
        </div>
      </section>

      <TechSpectrum />

      <div className="max-w-container-max mx-auto px-gutter space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">Full Ecosystem Matrix</h2>
          <p className="font-body-md text-on-surface-variant mt-2">
            Overview of all technologies integrated into Enteglow software engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologiesData.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-xl glass-panel border border-glass-border space-y-4 glow-hover">
              <div className="flex items-center justify-between pb-3 border-b border-glass-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-primary-container/10 border border-primary/20 text-primary flex items-center justify-center font-bold">
                    <Code size={16} />
                  </div>
                  <h3 className="font-headline-md text-lg text-on-surface">{cat.category}</h3>
                </div>
                <span className="font-label-sm text-xs text-on-surface-variant uppercase">{cat.items.length} Frameworks</span>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">{cat.description}</p>
              <div className="space-y-2 pt-2">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs p-2.5 rounded bg-surface-container border border-glass-border">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      <span className="font-semibold text-on-surface">{item.name}</span>
                    </div>
                    <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">{item.level}</span>
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
