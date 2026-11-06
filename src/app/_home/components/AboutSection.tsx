import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { about } from '../data/homeContent';
import { Container, Eyebrow } from './primitives';

// "Cultivating Possibilities. Creating Innovation" reads as two statements, one per line.
const headingLines = about.heading.split(/(?<=\.)\s+/);

export const AboutSection: React.FC = () => (
  <section aria-labelledby="about-heading" className="bg-ink-950 py-24 lg:py-32">
    <Container>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7" data-reveal>
          <Eyebrow>About Enteglow</Eyebrow>
          <h2
            id="about-heading"
            className="mt-5 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.02] tracking-[-0.02em] text-mist-100"
          >
            {headingLines.map((line) => (
              <span key={line} className="block [text-wrap:balance]">
                {line}
              </span>
            ))}
          </h2>
          <ul className="mt-7 flex flex-col gap-2 text-[15px] text-mist-500 sm:flex-row sm:flex-wrap sm:gap-x-5">
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

        <div className="lg:col-span-5 lg:pt-12" data-reveal style={{ '--eg-delay': '100ms' } as React.CSSProperties}>
          <p className="max-w-[34rem] text-[17px] leading-[1.75] text-mist-500 sm:text-lg">{about.body}</p>
          <Link
            href="/about"
            className="group mt-8 inline-flex min-h-[56px] items-center gap-5 rounded-full border border-brand-400/70 py-1.5 pl-7 pr-1.5 text-base font-semibold text-mist-100 transition-[border-color,box-shadow] duration-280 ease-standard hover:border-brand-400 hover:shadow-[0_10px_30px_-12px_rgba(240,106,79,0.55)]"
          >
            Know More
            <span className="sr-only"> about Enteglow</span>
            <span
              aria-hidden
              className="grid h-11 w-11 place-items-center rounded-full bg-brand-500 text-white transition-colors duration-160 group-active:bg-brand-600"
            >
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-160 motion-safe:group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </Container>
  </section>
);
