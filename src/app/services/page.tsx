import React from 'react';
import type { Metadata } from 'next';
import { ServiceHeroSection } from './components/ServiceHeroSection';
import { InteractiveServices } from './components/InteractiveServices';
import { ServiceDeliveryTimeline } from './components/ServiceDeliveryTimeline';
import { ServiceCTA } from './components/ServiceCTA';

export const metadata: Metadata = {
  title: 'Software Product Engineering Disciplines | Enteglow',
  description:
    'Full-lifecycle software engineering services across AI Applications, Web SaaS Platforms, Native Mobile Apps, IoT Gateways, and Cloud Infrastructure.',
};

export default function ServicesPage() {
  return (
    <div className="space-y-0 overflow-x-hidden bg-background">
      {/* 1. Services Hero with 3D Topology Canvas */}
      <ServiceHeroSection />

      {/* 2. Interactive Capability Architecture Configurator */}
      <InteractiveServices />

      {/* 3. 4-Stage Engineering Delivery Lifecycle */}
      <ServiceDeliveryTimeline />

      {/* 4. Purpose-Built Service CTA */}
      <ServiceCTA />
    </div>
  );
};
