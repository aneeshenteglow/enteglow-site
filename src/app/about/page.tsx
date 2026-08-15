import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { WhyEntelgowSection } from '@/components/sections/WhyEntelgowSection';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { companyData } from '@/data/company';
import { Code2, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Engineering Philosophy',
  description:
    'Learn about Entelgow mission, vision, engineering standards, product development philosophy, and software craftsmanship commitments.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-12">
      <section className="pt-8 pb-12 bg-radial-gold border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" className="mb-4">
            Software Product Engineers
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            About Entelgow
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Entelgow is a software engineering company dedicated to designing, building, and maintaining complete digital products across desktop, mobile, web, AI, and IoT.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-2xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center font-bold">
              <Code2 size={20} />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Our Mission</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {companyData.mission}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-2xl bg-techBlue-100 border border-techBlue-200 text-techBlue-600 flex items-center justify-center font-bold">
              <Layers size={20} />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Our Vision</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {companyData.vision}
            </p>
          </div>
        </div>
      </div>

      <div id="engineering-philosophy" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          badge="Product Craftsmanship"
          title="Engineering Philosophy & Mindset"
          description="We operate as serious software product engineers—not a marketing agency or template builder. Every project is approached with systems-level discipline."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="space-y-3">
            <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
              <span className="text-gold-600 font-mono">01.</span>
              <span>Complete Product Responsibility</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We own the full engineering stack—from data schemas and security protocols to responsive interfaces and automated deployment scripts.
            </p>
          </Card>

          <Card className="space-y-3">
            <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
              <span className="text-techBlue-600 font-mono">02.</span>
              <span>Architectural Longevity</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We avoid quick hacks and fragile prototypes. Codebases are built with strict typing, modular separation, and exhaustive documentation.
            </p>
          </Card>

          <Card className="space-y-3">
            <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
              <span className="text-emerald-600 font-mono">03.</span>
              <span>Cross-Platform Parity</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Whether building desktop binaries for offline workstations or mobile apps for field technicians, we guarantee consistent platform performance.
            </p>
          </Card>
        </div>
      </div>

      <WhyEntelgowSection />
      <CinematicCTA />
    </div>
  );
}
