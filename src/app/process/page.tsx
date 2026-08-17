import React from 'react';
import type { Metadata } from 'next';
import { InteractiveProcess } from './components/InteractiveProcess';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { Badge } from '@/components/common/Badge';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Software Engineering Process | Enteglow',
  description:
    'Detailed 6-stage software development lifecycle (SDLC) followed by Enteglow: Understand, Define, Design, Build, Launch, and Improve.',
};

export default function ProcessPage() {
  return (
    <div className="space-y-0 overflow-x-hidden bg-background">
      {/* Top Banner */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-28 pb-16 overflow-hidden border-b border-glass-border bg-surface-deep">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-red rounded-full pointer-events-none z-0 opacity-50 animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid opacity-30 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center flex flex-col items-center">
          <ScrollReveal direction="up" delay={0.1}>
            <Badge className="mb-4">Structured SDLC Methodology</Badge>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg max-w-4xl mx-auto mb-6 text-on-surface font-bold leading-tight">
              Engineered for Velocity, <br />
              <span className="text-gradient">Built for Precision.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              From initial discovery to continuous production support—Enteglow adheres to a transparent, 6-stage software development lifecycle that guarantees code quality and predictable delivery timelines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive 6-Stage Process Stepper */}
      <InteractiveProcess />

      {/* Guarantees Bar */}
      <section className="py-20 bg-surface border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="p-8 rounded-2xl glass-panel border border-glass-border grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 size={22} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-headline-md text-base text-on-surface font-bold">Full Transparency</h3>
                  <p className="font-body-md text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Regular sprint demos, staging environment previews, and direct access to repository code commits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 size={22} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-headline-md text-base text-on-surface font-bold">Continuous Testing</h3>
                  <p className="font-body-md text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Automated unit tests, integration test suites, and static type checking (`tsc --noEmit`) integrated into every sprint.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 size={22} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-headline-md text-base text-on-surface font-bold">Guaranteed Delivery</h3>
                  <p className="font-body-md text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Pre-defined acceptance criteria for every feature milestone before proceeding to production deployment.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CinematicCTA />
    </div>
  );
}
