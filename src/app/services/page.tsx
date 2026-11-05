import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/app/_home/components/primitives';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { ServiceGrid } from './components/ServiceCard';
import { servicesData } from './services/servicesData';

export const metadata: Metadata = {
  title: 'Engineering Services',
  description:
    'Full-lifecycle software engineering services across AI Applications, Web Apps, Website Development, Web Maintenance, and Cloud Infrastructure.',
};

export default function ServicesPage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Product Engineering Disciplines"
        title="Software Development Services"
        crumb="Services"
        intro="Enteglow provides end-to-end software product development across specialized technical disciplines. Every service is delivered with production-grade engineering standards and full source code ownership."
      />

      <section aria-label="All services" className="pb-24 lg:pb-32">
        <Container>
          <ServiceGrid services={servicesData} />
        </Container>
      </section>
    </InnerPage>
  );
}
