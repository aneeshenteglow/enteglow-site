import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesBentoSection } from '@/components/sections/ServicesBentoSection';
import { ArchitectsAboutSection } from '@/components/sections/ArchitectsAboutSection';
import { ProblemIntroSection } from '@/components/sections/ProblemIntroSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhyEntelgowSection } from '@/components/sections/WhyEntelgowSection';
import { CinematicCTA } from '@/components/sections/CinematicCTA';

export default function Home() {
  return (
    <div className="space-y-0 overflow-x-hidden bg-background">
      {/* 1. Lumina Hero & 3D Interactive WebGL Mesh Background */}
      <HeroSection />

      {/* 2. Bento Grid Expertise (AI, Web Apps, Website Dev, Hosting) */}
      <ServicesBentoSection />

      {/* 3. Architects of the Digital Enterprise & Asymmetric Composition */}
      <ArchitectsAboutSection />

      {/* 4. Operational Friction vs Enteglow Solution Matrix */}
      <ProblemIntroSection />

      {/* 5. Trusted by Industry Leaders / Executive Testimonials Grid */}
      <TestimonialsSection />

      {/* 6. Enterprise Reliability, Security & IP Ownership Guarantees */}
      <WhyEntelgowSection />

      {/* 7. Final Cinematic Call-to-Action */}
      <CinematicCTA />
    </div>
  );
}
