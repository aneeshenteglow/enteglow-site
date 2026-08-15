import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { PlatformStorytelling } from '@/components/sections/PlatformStorytelling';
import { ProductEcosystem } from '@/components/sections/ProductEcosystem';
import { InteractiveServices } from './services/components/InteractiveServices';
import { AIAgentShowcase } from '@/components/sections/AIAgentShowcase';
import { IoTDataFlow } from '@/components/sections/IoTDataFlow';
import { TechSpectrum } from './technologies/components/TechSpectrum';
import { CaseStudyShowcase } from './projects/components/CaseStudyShowcase';
import { InteractiveProcess } from './process/components/InteractiveProcess';
import { IndustriesGrid } from './industries/components/IndustriesGrid';
import { WhyEntelgowSection } from '@/components/sections/WhyEntelgowSection';
import { CinematicCTA } from '@/components/sections/CinematicCTA';

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <PlatformStorytelling />
      <ProductEcosystem />
      <InteractiveServices />
      <AIAgentShowcase />
      <IoTDataFlow />
      <TechSpectrum />
      <CaseStudyShowcase />
      <InteractiveProcess />
      <IndustriesGrid />
      <WhyEntelgowSection />
      <CinematicCTA />
    </div>
  );
}
