import React from 'react';
import Image from 'next/image';
import { about } from '../data/homeContent';
import { Container, Eyebrow } from './primitives';

export const AboutSection: React.FC = () => (
  <section aria-labelledby="about-heading" className="py-24 lg:py-32">
    <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="relative isolate lg:col-span-5" data-reveal>
        <div className="relative overflow-hidden rounded-[24px] border border-ink-line">
          <Image
            src="/images/home/about-team.jpg"
            alt="Two Enteglow team members planning a solution together over sketches on a desk"
            width={712}
            height={555}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="aspect-[4/3] h-auto w-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-[24px] bg-brand-500/25 blur-2xl"
        />
      </div>

      <div className="lg:col-span-7">
        <div data-reveal>
          <Eyebrow>About Enteglow</Eyebrow>
          <h2
            id="about-heading"
            className="mt-4 text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-mist-100"
          >
            {about.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-mist-500">{about.body}</p>
        </div>
        <ul className="mt-10 border-t border-ink-line">
          {about.statements.map((statement, i) => (
            <li
              key={statement}
              data-reveal
              style={{ '--eg-delay': `${i * 80}ms` } as React.CSSProperties}
              className="flex items-baseline gap-6 border-b border-ink-line py-5"
            >
              <span aria-hidden className="text-xs font-semibold tabular-nums text-brand-400">
                0{i + 1}
              </span>
              <span className="text-xl font-semibold tracking-[-0.025em] text-mist-200 sm:text-2xl">{statement}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);
