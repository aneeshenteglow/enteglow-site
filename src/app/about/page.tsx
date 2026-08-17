import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/common/Badge';
import { ArchitectsAboutSection } from '@/components/sections/ArchitectsAboutSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhyEntelgowSection } from '@/components/sections/WhyEntelgowSection';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { companyData } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us & Engineering Philosophy | Enteglow',
  description:
    'Learn about Enteglow mission, vision, engineering standards, product development philosophy, and software craftsmanship commitments.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-12 pt-32 bg-background">
      {/* Top Banner */}
      <section className="py-12 bg-surface-deep border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Software Product Engineers
          </Badge>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            About Enteglow
          </h1>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Enteglow is a technology consultancy dedicated to designing, building, and maintaining robust digital products for the modern enterprise.
          </p>
        </div>
      </section>

      {/* Main Architects Section */}
      <ArchitectsAboutSection />

      {/* Mission & Vision */}
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-xl p-8 space-y-4 glow-hover">
            <div className="w-12 h-12 rounded bg-primary-container/10 text-primary flex items-center justify-center font-bold border border-primary/20">
              <span className="material-symbols-outlined text-2xl">flag</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface text-2xl">
              Our Mission
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {companyData.mission}
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8 space-y-4 glow-hover">
            <div className="w-12 h-12 rounded bg-primary-container/10 text-primary flex items-center justify-center font-bold border border-primary/20">
              <span className="material-symbols-outlined text-2xl">visibility</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface text-2xl">
              Our Vision
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {companyData.vision}
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Why Enteglow & CTA */}
      <WhyEntelgowSection />
      <CinematicCTA />
    </div>
  );
}
