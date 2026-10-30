import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/app/_home/components/primitives';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { ChipList, IconTile, Label, PlusList, indexLabel, revealDelay } from '@/components/inner/primitives';
import { servicesData } from './services/servicesData';

export const metadata: Metadata = {
  title: 'Engineering Services',
  description:
    'Full-lifecycle software engineering services across AI Applications, Web Apps, Website Development, Web Maintenance, and Cloud Infrastructure.',
};

export default function ServicesPage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Product Engineering Disciplines"
        title="Software Development Services"
        crumb="Services"
        intro="Enteglow provides end-to-end software product development across specialized technical disciplines. Every service is delivered with production-grade engineering standards and full source code ownership."
      >
        <nav aria-label="Jump to a service">
          <ul className="flex flex-wrap gap-2">
            {servicesData.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex min-h-[40px] items-center rounded-full border border-ink-700 bg-ink-900/60 px-4 text-[13px] font-medium text-mist-300 transition-colors duration-160 hover:border-ink-600 hover:text-mist-100"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="py-12 lg:py-20">
        {servicesData.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            className="scroll-mt-20 border-t border-ink-line first:border-t-0"
          >
            <Container className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
              <div className="lg:col-span-5" data-reveal>
                <div className="flex items-center gap-4">
                  <IconTile>
                    <DynamicIcon name={service.iconName} size={22} />
                  </IconTile>
                  <span className="text-[13px] font-medium tabular-nums text-mist-600">Service {indexLabel(index)}</span>
                </div>
                <h2
                  id={`${service.id}-heading`}
                  className="mt-7 font-display text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.06] tracking-[-0.02em] text-mist-100 [text-wrap:balance]"
                >
                  {service.title}
                </h2>
                <p className="mt-4 text-[17px] leading-[1.6] text-brand-400">{service.tagline}</p>
                <ChipList items={service.technologies} label="Technologies" className="mt-8" />
                <Link href="/contact" className="eg-btn eg-btn-primary mt-9">
                  Inquire Service <ArrowRight aria-hidden className="h-4 w-4" />
                  <span className="sr-only">: {service.title}</span>
                </Link>
              </div>

              <div className="lg:col-span-7" data-reveal style={revealDelay(1, 100)}>
                <p className="text-[17px] leading-[1.75] text-mist-300 sm:text-lg">{service.description}</p>

                <div className="mt-10 grid grid-cols-1 gap-8 border-t border-ink-line pt-10 sm:grid-cols-2">
                  <div>
                    <Label>Problems Solved</Label>
                    <PlusList items={service.problemsSolved} className="mt-5" />
                  </div>
                  <div>
                    <Label>Core Capabilities</Label>
                    <PlusList items={service.keyCapabilities} className="mt-5" />
                  </div>
                  <div>
                    <Label>Key Deliverables</Label>
                    <PlusList items={service.deliverables} className="mt-5" />
                  </div>
                  <div className="rounded-[20px] border border-ink-line bg-ink-850 p-6">
                    <Label>Engineering Approach</Label>
                    <p className="mt-4 text-[15px] leading-[1.65] text-mist-300">{service.approach}</p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>
    </InnerPage>
  );
}
