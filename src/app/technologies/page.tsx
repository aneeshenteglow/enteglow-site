import React from 'react';
import type { Metadata } from 'next';
import { Container, SectionIntro } from '@/app/_home/components/primitives';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { indexLabel, revealDelay } from '@/components/inner/primitives';
import { technologiesData } from './services/technologiesData';

export const metadata: Metadata = {
  title: 'Technology Spectrum & Stack',
  description:
    'Explore Enteglow technical capabilities across Frontend, Backend, Mobile, Desktop, AI/ML, IoT, Databases, Cloud, DevOps, and API Integrations.',
};

export default function TechnologiesPage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Technical Stack & Ecosystem"
        title="Engineering Expertise Across 10 Tech Domains"
        crumb="Technologies"
        intro="We prioritize technologies that communicate genuine engineering capability—focusing on memory efficiency, static typing, low latency, and operational stability."
      />

      <section aria-labelledby="matrix-heading" className="py-24 lg:py-32">
        <Container>
          <SectionIntro id="matrix-heading" eyebrow="Ecosystem" title="Full Ecosystem Matrix">
            <p className="mt-5 text-[17px] leading-[1.7] text-mist-500">
              Overview of all technologies integrated into Enteglow software engineering solutions.
            </p>
          </SectionIntro>

          <ul className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {technologiesData.map((cat, i) => (
              <li
                key={cat.category}
                data-reveal
                style={revealDelay(i % 2)}
                className="rounded-[24px] border border-ink-line bg-ink-850 p-7 sm:p-8"
              >
                <div className="flex items-baseline justify-between gap-4 border-b border-ink-line pb-5">
                  <h2 className="font-display text-[clamp(1.5rem,2.2vw,1.875rem)] font-normal leading-[1.12] text-mist-100">
                    <span className="mr-3 font-sans text-[13px] font-medium tabular-nums text-brand-400">{indexLabel(i)}</span>
                    {cat.category}
                  </h2>
                  <span className="shrink-0 text-[13px] text-mist-600">{cat.items.length} Frameworks</span>
                </div>
                <p className="mt-5 text-[15px] leading-[1.65] text-mist-500">{cat.description}</p>
                <ul className="mt-6 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item.name} className="rounded-2xl border border-ink-line bg-ink-900 px-5 py-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-mist-100">{item.name}</span>
                        <span className="rounded-full bg-ink-750 px-3 py-1 text-[12px] font-medium text-mist-300">
                          {item.level}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[14px] leading-[1.6] text-mist-500">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </InnerPage>
  );
}
