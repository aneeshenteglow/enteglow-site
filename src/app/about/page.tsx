import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Badge } from '@/components/common/Badge';
import { ArchitectsAboutSection } from '@/components/sections/ArchitectsAboutSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhyEntelgowSection } from '@/components/sections/WhyEntelgowSection';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { companyData } from '@/data/company';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

const EngineeringCultureCanvas = dynamic(
  () =>
    import('./components/EngineeringCultureCanvas').then(
      (mod) => mod.EngineeringCultureCanvas
    ),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-surface-deep/30" />,
  }
);

export const metadata: Metadata = {
  title: 'About Us & Engineering Philosophy | Enteglow',
  description:
    'Learn about Enteglow mission, vision, engineering standards, product development philosophy, and software craftsmanship commitments.',
};

export default function AboutPage() {
  return (
    <div className="space-y-0 overflow-x-hidden bg-background">
      {/* Dedicated Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center pt-28 pb-16 overflow-hidden border-b border-glass-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-red rounded-full pointer-events-none z-0 opacity-50 animate-pulse-glow" />

        <div className="absolute inset-0 z-0 opacity-50">
          <EngineeringCultureCanvas />
        </div>

        <div className="absolute inset-0 bg-grid opacity-30 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center flex flex-col items-center">
          <ScrollReveal direction="up" delay={0.1}>
            <Badge className="mb-4">Software Product Engineers</Badge>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg max-w-4xl mx-auto mb-6 text-on-surface font-bold leading-tight">
              Architects of the <span className="text-gradient">Digital Enterprise.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              Enteglow is a technology consultancy dedicated to designing, building, and maintaining robust digital products for the modern enterprise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Architects Section */}
      <ArchitectsAboutSection />

      {/* Mission & Vision */}
      <section className="py-24 bg-surface-deep border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="glass-panel rounded-2xl p-8 space-y-4 border border-glass-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(227,30,36,0.2)] h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">flag</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface text-2xl font-bold">
                  Our Mission
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {companyData.mission}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="glass-panel rounded-2xl p-8 space-y-4 border border-glass-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(227,30,36,0.2)] h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface text-2xl font-bold">
                  Our Vision
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {companyData.vision}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Executive Testimonials */}
      <TestimonialsSection />

      {/* Why Enteglow & Final CTA */}
      <WhyEntelgowSection />
      <CinematicCTA />
    </div>
  );
}
