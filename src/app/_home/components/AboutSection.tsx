import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { ArrowRight } from 'lucide-react';
import { about, aboutCards, contact } from '../data/homeContent';
import type { AboutCard } from '../types';
import { Container, Eyebrow } from './primitives';

// Same editorial serif as the hero headings; scoped to this section so body copy stays on Inter.
const displaySerif = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-about-display',
});
const serif = '[font-family:var(--font-about-display),Georgia,serif]';

// "Cultivating Possibilities. Creating Innovation" reads as two statements, one per line.
const headingLines = about.heading.split(/(?<=\.)\s+/);

const AboutCardItem: React.FC<{ card: AboutCard; index: number }> = ({ card, index }) => {
  // Cards without a service page fall back to the contact page, as the hero banners do.
  const href = card.href ?? contact.contactPage;
  const label = card.href ? 'Read More' : 'Enquire';

  return (
    <li data-reveal style={{ '--eg-delay': `${index * 80}ms` } as React.CSSProperties} className="flex">
      <article className="group relative flex w-full flex-col overflow-hidden rounded-[28px] border border-ink-line bg-ink-850 transition-[border-color,transform] duration-280 ease-standard hover:border-brand-500/45 focus-within:border-brand-500/45 motion-safe:hover:-translate-y-1">
        <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
          <div className="flex items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-2" aria-label="Service details">
              <li className="rounded-full bg-ink-750 px-3.5 py-1.5 text-[13px] font-medium tabular-nums text-mist-300">
                {String(index + 1).padStart(2, '0')}
              </li>
              <li className="rounded-full bg-ink-750 px-3.5 py-1.5 text-[13px] font-medium text-mist-300">
                {card.category}
              </li>
            </ul>
            <span
              aria-hidden
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand-400/70 transition-colors duration-280 group-hover:border-brand-400 group-focus-within:border-brand-400"
            >
              <span className="h-3 w-3 scale-0 rounded-full bg-brand-500 transition-transform duration-280 ease-standard group-hover:scale-100 group-focus-within:scale-100" />
            </span>
          </div>
          <h3
            className={`mt-6 ${serif} text-[clamp(1.625rem,2.2vw,1.875rem)] font-normal leading-[1.12] tracking-[-0.01em] text-mist-100`}
          >
            {card.title}
          </h3>
          <p className="mt-3 text-[15px] leading-[1.6] text-mist-500">{card.subtitle}</p>
        </div>

        <div className="relative aspect-[5/4] overflow-hidden rounded-t-[24px] bg-ink-800 sm:aspect-[4/3] lg:aspect-[5/6]">
          <Image
            src={card.image.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw"
            style={{ objectPosition: `${card.image.focusX * 100}% 50%` }}
            className="object-cover transition-transform duration-[900ms] ease-emphasis motion-safe:group-hover:scale-[1.06]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
        </div>
        {/* Stretched link: the whole card is clickable; the article's overflow clips the overlay. */}
        <Link
          href={href}
          className="absolute bottom-5 left-5 inline-flex min-h-[48px] items-center gap-3 rounded-full border border-white/10 bg-ink-900/80 py-1.5 pl-5 pr-1.5 text-sm font-semibold text-mist-100 backdrop-blur-md transition-colors duration-160 after:absolute after:inset-[-999px] after:content-[''] hover:bg-ink-900"
        >
          {label}
          <span className="sr-only">: {card.href ? card.title : 'contact Enteglow'}</span>
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-mist-100 text-ink-950 transition-colors duration-160 group-hover:bg-brand-500 group-hover:text-white"
          >
            <ArrowRight className="h-4 w-4 transition-transform duration-160 motion-safe:group-hover:translate-x-0.5" />
          </span>
        </Link>
      </article>
    </li>
  );
};

export const AboutSection: React.FC = () => (
  <section aria-labelledby="about-heading" className={`${displaySerif.variable} bg-ink-950 py-24 lg:py-32`}>
    <Container>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7" data-reveal>
          <Eyebrow>About Enteglow</Eyebrow>
          <h2
            id="about-heading"
            className={`mt-5 ${serif} text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.02] tracking-[-0.02em] text-mist-100`}
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
          {/* CTA wording and destination from the existing homepage closing band. */}
          <Link
            href={contact.contactPage}
            className="group mt-8 inline-flex min-h-[56px] items-center gap-5 rounded-full border border-brand-400/70 py-1.5 pl-7 pr-1.5 text-base font-semibold text-mist-100 transition-[border-color,box-shadow] duration-280 ease-standard hover:border-brand-400 hover:shadow-[0_10px_30px_-12px_rgba(240,106,79,0.55)]"
          >
            Enquire Now
            <span
              aria-hidden
              className="grid h-11 w-11 place-items-center rounded-full bg-brand-500 text-white transition-colors duration-160 group-active:bg-brand-600"
            >
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-160 motion-safe:group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>

      <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {aboutCards.map((card, i) => (
          <AboutCardItem key={card.id} card={card} index={i} />
        ))}
      </ul>
    </Container>
  </section>
);
