'use client';

import React, { useState } from 'react';
import { IndustryHeroSection } from './IndustryHeroSection';
import { InteractiveDomainExplorer } from './InteractiveDomainExplorer';
import { IndustryCardsShowcase } from './IndustryCardsShowcase';
import { DomainEngineeringCapability } from './DomainEngineeringCapability';
import { IndustryCTA } from './IndustryCTA';

export const IndustriesPageClient: React.FC = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('manufacturing');

  return (
    <div className="space-y-0 overflow-x-hidden bg-background">
      {/* 1. Dedicated Industry Hero with 3D Constellation Canvas */}
      <IndustryHeroSection
        selectedIndustryId={selectedIndustryId}
        onSelectIndustry={setSelectedIndustryId}
      />

      {/* 2. Interactive Domain Workflow Pipeline Explorer */}
      <InteractiveDomainExplorer
        selectedIndustryId={selectedIndustryId}
        onSelectIndustry={setSelectedIndustryId}
      />

      {/* 3. Category Filtered Industry Cards Showcase */}
      <IndustryCardsShowcase onSelectIndustry={setSelectedIndustryId} />

      {/* 4. Cross-Domain Enterprise Engineering Guarantees */}
      <DomainEngineeringCapability />

      {/* 5. Purpose-Built Industry Problem CTA */}
      <IndustryCTA />
    </div>
  );
};
