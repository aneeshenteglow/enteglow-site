import React from 'react';
import { HeroSlider } from './_home/components/HeroSlider';
import { AboutSection } from './_home/components/AboutSection';
import { ServicesSection } from './_home/components/ServicesSection';
import { PurposeSection } from './_home/components/PurposeSection';
import { TechStackSection } from './_home/components/TechStackSection';
import { TestimonialsSection } from './_home/components/TestimonialsSection';
import { InfrastructureSection } from './_home/components/InfrastructureSection';
import { ClosingCta } from './_home/components/ClosingCta';
import { RevealObserver } from './_home/components/RevealObserver';

export default function Home() {
  return (
    <div id="home-content" className="eg-home overflow-x-clip bg-ink-950 font-sans text-mist-200">
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <PurposeSection />
      <TechStackSection />
      <TestimonialsSection />
      <InfrastructureSection />
      <ClosingCta />
      <RevealObserver />
    </div>
  );
}
