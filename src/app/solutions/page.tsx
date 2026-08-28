import React from 'react';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { solutionsData } from './services/solutionsData';

export const metadata: Metadata = {
  title: 'Business Software Solutions | Enteglow',
  description:
    'Outcome-focused software solutions engineered by Enteglow: Business Management ERP/CRM, Enterprise Platforms, AI Applications, IoT Telemetry, Automation Systems, and Custom Digital Products.',
};

export default function SolutionsPage() {
  return (
    <div className="space-y-16 pb-12 pt-32 bg-background">
      <section className="py-12 bg-surface-deep border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Outcome-Oriented Software
          </Badge>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Complete Business Solutions
          </h1>
          <p className="mt-4 font-body-lg text-body-lg max-w-3xl mx-auto">
            We structure solutions around tangible business goals—eliminating operational bottlenecks, automating manual workflows, and delivering high-concurrency enterprise applications.
          </p>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((solution) => (
            <div key={solution.id} className="glass-panel rounded-xl p-8 flex flex-col justify-between group glow-hover space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded bg-primary-container/10 border border-primary/20 text-primary flex items-center justify-center">
                    <DynamicIcon name={solution.iconName} size={24} />
                  </div>
                  <Badge>Targeted Solution</Badge>
                </div>

                <div>
                  <h2 className="font-headline-md text-2xl text-on-surface group-hover:text-primary transition-colors">
                    {solution.title}
                  </h2>
                  <p className="font-body-md text-primary mt-1 font-semibold text-sm">
                    {solution.tagline}
                  </p>
                  <p className="font-body-md text-sm mt-3 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="p-4 rounded bg-surface-container border border-glass-border space-y-2">
                  <div className="flex items-center gap-2 font-label-sm text-xs font-semibold uppercase text-primary">
                    <TrendingUp size={14} />
                    <span>Business Impact &amp; Value</span>
                  </div>
                  <p className="font-body-md text-xs leading-relaxed">
                    {solution.businessOutcome}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-label-sm text-xs font-semibold uppercase block">
                    Core Functionality Highlights
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface">
                    {solution.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-glass-border flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {solution.applicableIndustries.map((ind, i) => (
                    <span key={i} className="font-label-sm text-[10px] uppercase px-2 py-0.5 rounded bg-surface-container-high text-on-surface border border-glass-border">
                      {ind}
                    </span>
                  ))}
                </div>
                <Button
                  href="/contact"
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight size={14} />}
                >
                  Discuss Solution
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CinematicCTA />
    </div>
  );
}
