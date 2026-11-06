import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Container } from '@/app/_home/components/primitives';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { ChipList, IconTile, Label, PlusList, revealDelay } from '@/components/inner/primitives';
import { solutionsData } from './services/solutionsData';

export const metadata: Metadata = {
  title: 'Business Software Solutions',
  description:
    'Outcome-focused software solutions engineered by Enteglow: Business Management ERP/CRM, Enterprise Platforms, AI Applications, IoT Telemetry, Automation Systems, and Custom Digital Products.',
};

export default function SolutionsPage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Outcome-Oriented Software"
        title="Complete Business Solutions"
        crumb="Solutions"
        intro="We structure solutions around tangible business goals—eliminating operational bottlenecks, automating manual workflows, and delivering high-concurrency enterprise applications."
      />

      <section aria-label="Solutions" className="py-24 lg:py-32">
        <Container>
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {solutionsData.map((solution, i) => (
              <li
                key={solution.id}
                id={solution.id}
                data-reveal
                style={revealDelay(i % 2)}
                className="flex scroll-mt-24 flex-col rounded-[24px] border border-ink-line bg-ink-850 p-7 transition-colors duration-280 ease-standard hover:border-brand-500/45 sm:p-10"
              >
                <IconTile>
                  <DynamicIcon name={solution.iconName} size={22} />
                </IconTile>
                <h2 className="mt-6 font-display text-[clamp(1.75rem,2.6vw,2.25rem)] font-normal leading-[1.1] text-mist-100 [text-wrap:balance]">
                  {solution.title}
                </h2>
                <p className="mt-3 text-[16px] leading-[1.6] text-brand-400">{solution.tagline}</p>
                <p className="mt-4 text-[15px] leading-[1.7] text-mist-500">{solution.description}</p>

                <div className="mt-7 rounded-[20px] border border-ink-line bg-ink-900 p-5">
                  <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-mist-600">
                    <TrendingUp aria-hidden className="h-4 w-4 text-brand-400" />
                    Business Impact &amp; Value
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.6] text-mist-300">{solution.businessOutcome}</p>
                </div>

                <div className="mt-7 flex-1">
                  <Label>Core Functionality Highlights</Label>
                  <PlusList items={solution.keyFeatures} className="mt-4 text-[14px]" />
                </div>

                <div className="mt-8 flex flex-col gap-6 border-t border-ink-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <ChipList items={solution.applicableIndustries} label="Applicable industries" />
                  <Link href="/contact" className="eg-btn eg-btn-secondary shrink-0 self-start sm:self-auto">
                    Discuss Solution <ArrowRight aria-hidden className="h-4 w-4" />
                    <span className="sr-only">: {solution.title}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </InnerPage>
  );
}
