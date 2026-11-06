import React from 'react';
import type { Metadata } from 'next';
import { Clock } from 'lucide-react';
import { Container, SectionIntro } from '@/app/_home/components/primitives';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { Chip, Label, Panel, PlusList, indexLabel, revealDelay } from '@/components/inner/primitives';
import { processData } from './services/processData';

export const metadata: Metadata = {
  title: 'Our Software Development Process',
  description:
    'Detailed 7-stage software development lifecycle (SDLC) followed by Enteglow: Discover, Design, Architect, Build, Test, Deploy, and Scale.',
};

const commitments = [
  {
    title: 'Full Transparency',
    body: 'Regular sprint demos, staging environment previews, and direct access to repository code commits.',
  },
  {
    title: 'Continuous Testing',
    body: 'Automated unit tests, integration test suites, and load testing integrated into every sprint cycle.',
  },
  {
    title: 'Guaranteed Delivery',
    body: 'Pre-defined acceptance criteria for every feature milestone before proceeding to deployment.',
  },
];

export default function ProcessPage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Structured SDLC Methodology"
        title="Our Software Engineering Process"
        crumb="Process"
        intro="From initial discovery to continuous production support—Enteglow adheres to a transparent, 7-stage software development lifecycle that guarantees code quality and predictable delivery timelines."
      >
        <ol aria-label="Process stages" className="flex flex-wrap gap-2">
          {processData.map((stage) => (
            <li key={stage.step}>
              <a
                href={`#stage-${stage.step}`}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-4 text-[13px] font-medium text-mist-300 transition-colors duration-160 hover:border-ink-600 hover:text-mist-100"
              >
                <span className="tabular-nums text-brand-400">{indexLabel(stage.step - 1)}</span>
                {stage.short}
              </a>
            </li>
          ))}
        </ol>
      </PageHero>

      <section aria-labelledby="stages-heading" className="py-24 lg:py-32">
        <Container>
          <SectionIntro id="stages-heading" eyebrow="Lifecycle" title="7-Stage Software Development Lifecycle" />

          <ol className="relative mt-16 space-y-6 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-px before:bg-ink-line sm:before:left-[35px]">
            {processData.map((stage) => (
              <li
                key={stage.step}
                id={`stage-${stage.step}`}
                data-reveal
                className="relative grid scroll-mt-24 grid-cols-[56px_1fr] gap-5 sm:grid-cols-[72px_1fr] sm:gap-8"
              >
                <span
                  aria-hidden
                  className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-brand-400/60 bg-ink-950 font-display text-xl text-mist-100 sm:h-[72px] sm:w-[72px] sm:text-2xl"
                >
                  {indexLabel(stage.step - 1)}
                </span>
                <Panel className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <Chip>
                        Stage {indexLabel(stage.step - 1)} · {stage.short}
                      </Chip>
                      <Chip className="gap-1.5">
                        <Clock aria-hidden className="h-3.5 w-3.5 self-center text-brand-400" />
                        {stage.duration}
                      </Chip>
                    </div>
                    <h3 className="mt-5 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-normal leading-[1.12] text-mist-100">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-brand-400">{stage.tagline}</p>
                    <p className="mt-4 text-[15px] leading-[1.7] text-mist-500">{stage.description}</p>
                  </div>
                  <div className="lg:col-span-5 lg:border-l lg:border-ink-line lg:pl-8">
                    <Label>Deliverables</Label>
                    <PlusList items={stage.deliverables} className="mt-4 text-[14px]" />
                  </div>
                </Panel>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-label="Delivery commitments" className="border-t border-ink-line bg-ink-900 py-24 lg:py-32">
        <Container>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {commitments.map((c, i) => (
              <li
                key={c.title}
                data-reveal
                style={revealDelay(i)}
                className="rounded-[24px] border border-ink-line bg-ink-850 p-7 sm:p-8"
              >
                <span className="text-[13px] font-medium tabular-nums text-brand-400">{indexLabel(i)}</span>
                <h3 className="mt-4 font-display text-[1.625rem] font-normal leading-[1.15] text-mist-100">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-mist-500">{c.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </InnerPage>
  );
}
