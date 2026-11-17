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
        eyebrow="Intelligent Technology Solutions"
        title="Our Services"
        crumb="Services"
        intro="Enteglow transforms possibilities into intelligent technology solutions that build trust, drive innovation, and create lasting real-world impact."
      />

      <section aria-label="All services" className="pb-24 lg:pb-32">
        <Container>
          <ServiceGrid services={servicesData} />
        </Container>
      </section>
    </InnerPage>
  );
}
