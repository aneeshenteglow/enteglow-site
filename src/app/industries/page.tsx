import React from 'react';
import type { Metadata } from 'next';
import { Container, SectionIntro } from '@/app/_home/components/primitives';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { ChipList, IconTile, Label, PlusList, revealDelay } from '@/components/inner/primitives';
import { industriesData } from './services/industriesData';

export const metadata: Metadata = {
  title: 'Industries & Domain Capabilities',
  description:
    'Tailored software solutions across Manufacturing, Retail, Logistics, Construction, Healthcare, Finance, Education, Agriculture, and Enterprise Operations.',
};

export default function IndustriesPage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Domain Software Solutions"
        title="Industries Supported by Enteglow"
        crumb="Industries"
        intro="We build software tailored to specific domain environments—addressing operational bottlenecks in manufacturing, supply chain, healthcare, retail, finance, and enterprise operations."
      />

      <section aria-labelledby="industries-heading" className="py-24 lg:py-32">
        <Container>
          <SectionIntro
            id="industries-heading"
            eyebrow="Domain Expertise"
            title="Specific Industry Use Cases"
          >
            <p className="mt-5 text-[17px] leading-[1.7] text-mist-500">
              Real software product applications supported by our engineering team.
            </p>
          </SectionIntro>

          <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industriesData.map((ind, i) => (
              <li
                key={ind.id}
                id={ind.id}
                data-reveal
                style={revealDelay(i % 3)}
                className="flex scroll-mt-24 flex-col rounded-[24px] border border-ink-line bg-ink-850 p-7 transition-colors duration-280 ease-standard hover:border-brand-500/45 sm:p-8"
              >
                <IconTile>
                  <DynamicIcon name={ind.iconName} size={22} />
                </IconTile>
                <h2 className="mt-6 font-display text-[clamp(1.5rem,2.2vw,1.875rem)] font-normal leading-[1.12] text-mist-100">
                  {ind.name}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.6] text-brand-400">{ind.tagline}</p>
                <p className="mt-4 text-[15px] leading-[1.65] text-mist-500">{ind.description}</p>

                <div className="mt-7 border-t border-ink-line pt-6">
                  <Label>Supported Capabilities</Label>
                  <PlusList items={ind.supportedCapabilities} className="mt-4 text-[14px]" />
                </div>
                <div className="mt-7 flex-1">
                  <Label>Example Software Products</Label>
                  <PlusList items={ind.useCases} className="mt-4 text-[14px]" />
                </div>
                <ChipList items={ind.relevantTech} label="Relevant technologies" className="mt-7" />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </InnerPage>
  );
}
