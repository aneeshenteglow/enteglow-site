import React from 'react';
import type { Metadata } from 'next';
import { IndustriesGrid } from './components/IndustriesGrid';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { Badge } from '@/components/common/Badge';
import { industriesData } from './services/industriesData';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries & Domain Capabilities | Enteglow',
  description:
    'Tailored software solutions across Manufacturing, Retail, Logistics, Construction, Healthcare, Finance, Education, Agriculture, and Enterprise Operations.',
};

export default function IndustriesPage() {
  return (
    <div className="space-y-16 pb-12 pt-32 bg-background">
      <section className="py-12 bg-surface-deep border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Domain Software Solutions
          </Badge>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Industries Supported by Enteglow
          </h1>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            We build software tailored to specific domain environments—addressing operational bottlenecks in manufacturing, supply chain, healthcare, retail, finance, and enterprise operations.
          </p>
        </div>
      </section>

      <IndustriesGrid />

      <div className="max-w-container-max mx-auto px-gutter space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">Specific Industry Use Cases</h2>
          <p className="font-body-md text-on-surface-variant mt-2">
            Real software product applications supported by our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <div key={ind.id} className="p-6 rounded-xl glass-panel border border-glass-border space-y-4 glow-hover">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary-container/10 border border-primary/20 text-primary flex items-center justify-center font-bold">
                  <DynamicIcon name={ind.iconName} size={20} />
                </div>
                <h3 className="font-headline-md text-lg text-on-surface">{ind.name}</h3>
              </div>
              <div className="space-y-2 pt-2 border-t border-glass-border text-xs">
                <span className="font-label-sm text-[11px] uppercase text-on-surface-variant block mb-1">
                  Example Software Products
                </span>
                {ind.useCases.map((uc, i) => (
                  <div key={i} className="flex items-start gap-2 text-on-surface-variant font-medium">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
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
