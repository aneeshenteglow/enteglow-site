import React from 'react';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { solutionsData } from './services/solutionsData';

export const metadata: Metadata = {
  title: 'Business Software Solutions',
  description:
    'Outcome-focused software solutions engineered by Entelgow: Business Management ERP/CRM, Enterprise Platforms, AI Applications, IoT Telemetry, Automation Systems, and Custom Digital Products.',
};

export default function SolutionsPage() {
  return (
    <div className="space-y-16 pb-12">
      <section className="pt-8 pb-12 bg-radial-gold border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="cyan" className="mb-4">
            Outcome-Oriented Software
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Complete Business Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We structure solutions around tangible business goals—eliminating operational bottlenecks, automating manual workflows, and delivering high-concurrency enterprise applications.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((solution) => (
            <Card key={solution.id} className="flex flex-col justify-between p-8 group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center">
                    <DynamicIcon name={solution.iconName} size={24} />
                  </div>
                  <Badge variant="primary">Targeted Solution</Badge>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {solution.title}
                  </h2>
                  <p className="text-sm font-semibold text-gold-600 mt-1">
                    {solution.tagline}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-emerald-600">
                    <TrendingUp size={14} />
                    <span>Business Impact & Value</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {solution.businessOutcome}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-semibold uppercase text-slate-500 block">
                    Core Functionality Highlights
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {solution.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-gold-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {solution.applicableIndustries.map((ind, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
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
            </Card>
          ))}
        </div>
      </div>

      <CinematicCTA />
    </div>
  );
}
