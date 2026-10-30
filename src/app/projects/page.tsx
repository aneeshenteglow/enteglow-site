import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/app/_home/components/primitives';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { ProjectsGrid } from './components/ProjectsGrid';

const intro =
  'Detailed technical breakdowns of software product solutions engineered for technical performance, reliability, and business impact.';

export const metadata: Metadata = {
  title: 'Engineering Case Studies',
  description: intro,
};

export default function ProjectsPage() {
  return (
    <InnerPage>
      <PageHero eyebrow="Software Portfolio" title="Engineering Case Studies" crumb="Case Studies" intro={intro} />
      <section aria-label="Case studies" className="py-24 lg:py-32">
        <Container>
          <ProjectsGrid />
        </Container>
      </section>
    </InnerPage>
  );
}
