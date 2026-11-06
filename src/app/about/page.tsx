import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Eye, Flag, Quote } from 'lucide-react';
import { Container, Eyebrow, SectionIntro } from '@/app/_home/components/primitives';
import { PurposeSection } from '@/app/_home/components/PurposeSection';
import { about, testimonials } from '@/app/_home/data/homeContent';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { IconTile, Panel, PlusList, revealDelay } from '@/components/inner/primitives';
import { companyData } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us & Engineering Philosophy',
  description:
    'Learn about Enteglow mission, vision, engineering standards, product development philosophy, and software craftsmanship commitments.',
};

// "Cultivating Possibilities. Creating Innovation" reads as two statements, one per line.
const headingLines = about.heading.split(/(?<=\.)\s+/);

const approach = [
  'Enterprise-grade architecture design.',
  'Agile, transparent development cycles.',
  'Post-deployment scaling and optimization.',
];

export default function AboutPage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Software Product Engineers"
        title="About Enteglow"
        crumb="About"
        intro="Enteglow is a technology consultancy dedicated to designing, building, and maintaining robust digital products for the modern enterprise."
      />

      {/* Approved homepage About copy */}
      <section aria-labelledby="who-heading" className="py-24 lg:py-32">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6" data-reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <h2
              id="who-heading"
              className="mt-5 font-display text-[clamp(2.25rem,4.6vw,3.75rem)] font-normal leading-[1.04] tracking-[-0.02em] text-mist-100"
            >
              {headingLines.map((line) => (
                <span key={line} className="block [text-wrap:balance]">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 text-[17px] leading-[1.75] text-mist-500 sm:text-lg">{about.body}</p>
            <ul className="mt-7 flex flex-col gap-2 text-[15px] text-mist-300 sm:flex-row sm:flex-wrap sm:gap-x-5">
              {about.statements.map((statement) => (
                <li key={statement} className="inline-flex items-center gap-2.5">
                  <span aria-hidden className="text-brand-400">
                    +
                  </span>
                  {statement}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6" data-reveal style={revealDelay(1, 100)}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-ink-line bg-ink-800">
              <Image
                src="/images/home/about-team.jpg"
                alt="Enteglow team members planning a project together"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Mission and vision" className="pb-24 lg:pb-32">
        <Container className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { title: 'Our Mission', body: companyData.mission, icon: Flag },
            { title: 'Our Vision', body: companyData.vision, icon: Eye },
          ].map(({ title, body, icon: Icon }, i) => (
            <Panel key={title} className="sm:p-10">
              <div data-reveal style={revealDelay(i)}>
                <IconTile>
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </IconTile>
                <h2 className="mt-6 font-display text-[clamp(1.75rem,2.6vw,2.25rem)] font-normal leading-[1.1] text-mist-100">
                  {title}
                </h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-mist-500">{body}</p>
              </div>
            </Panel>
          ))}
        </Container>
      </section>

      <PurposeSection />

      <section aria-labelledby="approach-heading" className="border-t border-ink-line bg-ink-900 py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionIntro
            id="approach-heading"
            eyebrow="How We Work"
            title="Architects of the Digital Enterprise"
            className="lg:col-span-6"
          />
          <div className="lg:col-span-6 lg:pt-10" data-reveal style={revealDelay(1, 100)}>
            <p className="text-[17px] leading-[1.75] text-mist-300 sm:text-lg">
              We are a collective of senior engineers, product designers, and strategic thinkers. We approach technology
              not just as code, but as a critical lever for business growth.
            </p>
            <p className="mt-5 text-[16px] leading-[1.7] text-mist-500">
              Our methodology is rooted in rigorous technical standards and agile delivery, ensuring that complex
              challenges are met with elegant, sustainable solutions.
            </p>
            <PlusList items={approach} className="mt-8" />
          </div>
        </Container>
      </section>

      {/* Target of the homepage "View all testimonials" link. */}
      <section id="testimonials" aria-labelledby="testimonials-heading" className="scroll-mt-24 py-24 lg:py-32">
        <Container>
          <SectionIntro id="testimonials-heading" eyebrow="Testimonials" title="What our clients say" />
          <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                data-reveal
                style={revealDelay(i)}
                className="flex flex-col rounded-[24px] border border-ink-line bg-ink-800 p-7 sm:p-10"
              >
                <Quote aria-hidden className="h-8 w-8 text-brand-400" strokeWidth={1.5} />
                <blockquote className="mt-6 flex-1 text-lg leading-[1.6] tracking-[-0.01em] text-mist-200 sm:text-xl">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-ink-line pt-6">
                  <Image
                    src={t.image}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border border-ink-700 object-cover"
                  />
                  <span>
                    <span className="block font-semibold text-mist-100">{t.name}</span>
                    <span className="block text-sm text-mist-500">{t.company}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </InnerPage>
  );
}
