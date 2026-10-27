import React from 'react';
import type { Metadata } from 'next';
import { InteractiveProcess } from './components/InteractiveProcess';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { Badge } from '@/components/common/Badge';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Software Development Process',
  description:
    'Detailed 7-stage software development lifecycle (SDLC) followed by Entelgow: Discover, Design, Architect, Build, Test, Deploy, and Scale.',
};

export default function ProcessPage() {
  return (
    <div className="space-y-16 pb-12">
      <section className="pt-8 pb-12 bg-radial-gold border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" className="mb-4">
            Structured SDLC Methodology
          </Badge>
          <h1 className="font-display text-3xl sm:text-5xl font-normal text-navy-900 tracking-tight">
            Our Software Engineering Process
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From initial discovery to continuous production support—Entelgow adheres to a transparent, 7-stage software development lifecycle that guarantees code quality and predictable delivery timelines.
          </p>
        </div>
      </section>

      <InteractiveProcess />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-gold-500 shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-bold text-navy-900">Full Transparency</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Regular sprint demos, staging environment previews, and direct access to repository code commits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-techBlue-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-bold text-navy-900">Continuous Testing</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Automated unit tests, integration test suites, and load testing integrated into every sprint cycle.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-bold text-navy-900">Guaranteed Delivery</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Pre-defined acceptance criteria for every feature milestone before proceeding to deployment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CinematicCTA />
    </div>
  );
}
