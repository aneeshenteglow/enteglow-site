import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/app/_home/components/primitives';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { ProjectsGrid } from './components/ProjectsGrid';

const intro =
  'Technology that connects the world, empowers businesses, and creates meaningful impact through innovative solutions.';

export const metadata: Metadata = {
  title: 'Transforming Possibilities into Impact',
  description: intro,
};

export default function ProjectsPage() {
  return (
    <InnerPage>
      <PageHero eyebrow="Portfolio" title="Transforming Possibilities into Impact" crumb="Portfolio" intro={intro} />
      <section aria-label="Portfolio" className="py-24 lg:py-32">
        <Container>
          <ProjectsGrid />
        </Container>
      </section>
    </InnerPage>
  );
}
