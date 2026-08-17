import React from 'react';
import type { Metadata } from 'next';
import { InteractiveProcess } from './components/InteractiveProcess';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { Badge } from '@/components/common/Badge';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Software Development Process | Enteglow',
  description:
    'Detailed 6-stage software development lifecycle (SDLC) followed by Enteglow: Understand, Define, Design, Build, Launch, and Improve.',
};

export default function ProcessPage() {
  return (
    <div className="space-y-16 pb-12 pt-32 bg-background">
      <section className="py-12 bg-surface-deep border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Structured SDLC Methodology
          </Badge>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Our Software Engineering Process
          </h1>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            From initial discovery to continuous production support—Enteglow adheres to a transparent, 6-stage software development lifecycle that guarantees code quality and predictable delivery timelines.
          </p>
        </div>
      </section>

      <InteractiveProcess />

      <div className="max-w-container-max mx-auto px-gutter">
        <div className="p-8 rounded-xl glass-panel border border-glass-border grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-headline-md text-base text-on-surface">Full Transparency</h3>
              <p className="font-body-md text-xs text-on-surface-variant mt-1 leading-relaxed">
                Regular sprint demos, staging environment previews, and direct access to repository code commits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-headline-md text-base text-on-surface">Continuous Testing</h3>
              <p className="font-body-md text-xs text-on-surface-variant mt-1 leading-relaxed">
                Automated unit tests, integration test suites, and load testing integrated into every sprint cycle.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-headline-md text-base text-on-surface">Guaranteed Delivery</h3>
              <p className="font-body-md text-xs text-on-surface-variant mt-1 leading-relaxed">
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
