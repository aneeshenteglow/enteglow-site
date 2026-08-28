import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/common/Badge';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { projectsData } from './services/projectsData';
import { ProjectsFilterGrid } from './components/ProjectsFilterGrid';

export const metadata: Metadata = {
  title: 'Engineering Case Studies | Enteglow',
  description:
    'Detailed technical breakdowns of software product solutions engineered for technical performance, reliability, and business impact.',
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 pb-12 pt-32 bg-background">
      <section className="py-12 bg-surface-deep border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Software Portfolio
          </Badge>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Engineering Case Studies
          </h1>
          <p className="mt-4 font-body-lg text-body-lg max-w-3xl mx-auto">
            Detailed technical breakdowns of software product solutions engineered for technical performance, reliability, and business impact.
          </p>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-gutter">
        <ProjectsFilterGrid projects={projectsData} />
      </div>

      <CinematicCTA />
    </div>
  );
}
