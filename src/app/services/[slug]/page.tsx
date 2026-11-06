import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Container, SectionIntro } from '@/app/_home/components/primitives';
import { ServiceVisual } from '@/app/_home/components/ServiceVisuals';
import { contact } from '@/app/_home/data/homeContent';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { ChipList, Label, Panel, PlusList, indexLabel, revealDelay } from '@/components/inner/primitives';
import { ServiceGrid } from '../components/ServiceCard';
import { getService, servicesData } from '../services/servicesData';
import type { ServiceDetail } from '../types/service';

interface ServicePageProps {
  params: { slug: string };
}

// Every service page is generated at build time; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

const sectionClass = 'border-t border-ink-line py-20 lg:py-28';

const HeroVisual: React.FC<{ service: ServiceDetail }> = ({ service }) => (
  <div
    style={{ '--eg-accent': service.accent } as React.CSSProperties}
    className="relative overflow-hidden rounded-[28px] border border-ink-line bg-ink-850"
  >
    {service.image ? (
      <div className="relative aspect-[4/3]">
        <Image
          src={service.image.src}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 480px, 100vw"
          style={{ objectPosition: `${service.image.focusX * 100}% 50%` }}
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
      </div>
    ) : (
      <div aria-hidden className="eg-svc-panel m-3 flex h-[240px] items-stretch overflow-hidden rounded-[20px] border border-ink-line sm:h-[280px]">
        <ServiceVisual kind={service.visual} />
      </div>
    )}
  </div>
);

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = service.related
    .map(getService)
    .filter((s): s is ServiceDetail => Boolean(s));

  return (
    <InnerPage>
      <PageHero
        eyebrow={service.tagline ?? 'Our Services'}
        title={service.title}
        intro={service.summary}
        parents={[{ href: '/services', label: 'Services' }]}
        aside={<HeroVisual service={service} />}
      >
        <div className="flex flex-wrap gap-3">
          <Link href={contact.contactPage} className="eg-btn eg-btn-primary">
            Enquire Now <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <Link href="/services" className="eg-btn eg-btn-secondary">
            All Services
          </Link>
        </div>
      </PageHero>

      {service.overview && (
        <section aria-labelledby="about-service-heading" className={sectionClass}>
          <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionIntro id="about-service-heading" eyebrow={service.title} title="About the Service" className="lg:col-span-5" />
            <div className="space-y-6 lg:col-span-7" data-reveal style={revealDelay(1, 100)}>
              {service.overview.map((paragraph) => (
                <p key={paragraph} className="text-[17px] leading-[1.75] text-mist-300 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </section>
      )}

      {service.keyCapabilities && (
        <section aria-labelledby="capabilities-heading" className={sectionClass}>
          <Container>
            <SectionIntro id="capabilities-heading" eyebrow="What We Build" title="Key Capabilities" />
            <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14">
              {service.keyCapabilities.map((capability, i) => (
                <Panel as="li" key={capability} className="flex gap-5">
                  <span
                    aria-hidden
                    className="font-display text-[28px] leading-none text-brand-400 [font-variant-numeric:lining-nums_tabular-nums]"
                  >
                    {indexLabel(i)}
                  </span>
                  <p className="text-[16px] leading-[1.6] text-mist-200">{capability}</p>
                </Panel>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {(service.problemsSolved || service.deliverables) && (
        <section aria-labelledby="benefits-heading" className={sectionClass}>
          <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionIntro id="benefits-heading" eyebrow="How It Helps" title="Business Challenges We Solve" />
              {service.problemsSolved && (
                <div data-reveal style={revealDelay(1, 100)}>
                  <PlusList items={service.problemsSolved} className="mt-10 sm:text-[16px]" />
                </div>
              )}
            </div>
            {service.deliverables && (
              <div className="lg:col-span-5 lg:pt-4" data-reveal style={revealDelay(2, 100)}>
                <Panel>
                  <Label>What You Receive</Label>
                  <PlusList items={service.deliverables} className="mt-5" />
                </Panel>
              </div>
            )}
          </Container>
        </section>
      )}

      {(service.approach || service.technologies) && (
        <section aria-labelledby="approach-heading" className={sectionClass}>
          <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionIntro id="approach-heading" eyebrow="How We Work" title="Our Approach" />
              {service.approach && (
                <p
                  className="mt-8 max-w-2xl text-[17px] leading-[1.75] text-mist-300 sm:text-lg"
                  data-reveal
                  style={revealDelay(1, 100)}
                >
                  {service.approach}
                </p>
              )}
            </div>
            {service.technologies && (
              <div className="lg:col-span-5 lg:pt-4" data-reveal style={revealDelay(2, 100)}>
                <Panel>
                  <Label>Related Technologies</Label>
                  <ChipList items={service.technologies} label="Technologies" className="mt-5" />
                </Panel>
              </div>
            )}
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className={sectionClass}>
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionIntro id="related-heading" eyebrow="Explore More" title="Related Services" />
              <Link href="/services" className="eg-btn eg-btn-secondary self-start sm:self-auto" data-reveal>
                View all services <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
            <ServiceGrid services={related} headingLevel="h3" className="mt-12 lg:mt-14" />
          </Container>
        </section>
      )}
    </InnerPage>
  );
}
