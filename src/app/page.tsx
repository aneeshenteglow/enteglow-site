import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SolutionsSection } from './solutions/components/SolutionsSection';
import { InteractiveServices } from './services/components/InteractiveServices';
import { CaseStudyShowcase } from './projects/components/CaseStudyShowcase';
import { TechSpectrum } from './technologies/components/TechSpectrum';
import { InteractiveProcess } from './process/components/InteractiveProcess';
import { IndustriesGrid } from './industries/components/IndustriesGrid';
import { WhyEntelgowSection } from '@/components/sections/WhyEntelgowSection';
import { CinematicCTA } from '@/components/sections/CinematicCTA';

export default function Home() {
  return (
    <div className="space-y-0 overflow-x-hidden">
      <HeroSection />
      <SolutionsSection />
      <InteractiveServices />
      <CaseStudyShowcase />
      <TechSpectrum />
      <InteractiveProcess />
      <IndustriesGrid />
      <WhyEntelgowSection />
      <CinematicCTA />
    </div>
  );
}

