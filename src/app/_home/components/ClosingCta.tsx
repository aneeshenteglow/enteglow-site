import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { contact } from '../data/homeContent';
import { Container } from './primitives';

// Copy from the current enteglow.com homepage CTA band. Full-bleed "horizon" treatment per the
// approved reference: starfield, faint vertical rules, brand glow and a planet arc (see .eg-cta-* in home.css).
export const ClosingCta: React.FC = () => (
  <section
    aria-labelledby="cta-heading"
    className="eg-cta relative isolate flex min-h-[560px] flex-col overflow-hidden bg-black lg:min-h-[600px]"
  >
    <span aria-hidden className="eg-cta-stars" />
    <span aria-hidden className="eg-cta-rules" />
    <span aria-hidden className="eg-cta-glow" />
    <span aria-hidden className="eg-cta-planet" />

    <Container className="relative flex flex-1 flex-col items-center pb-10 pt-20 text-center sm:pt-24">
      <div data-reveal className="flex flex-col items-center">
        <h2
          id="cta-heading"
          className="eg-cta-title max-w-[22ch] font-display text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.02em]"
        >
          Looking to integrate technology into your business?
        </h2>
        <p className="mt-5 text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.55] text-[#B9B5B2]">We&apos;re here to help.</p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={contact.phoneHref}
            className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/20 bg-black/30 pl-2.5 pr-5 text-[15px] font-medium text-white backdrop-blur-sm transition-colors duration-160 hover:border-white/40 hover:bg-white/5"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-black">
              <Phone aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            {contact.phoneDisplay}
          </a>
          <Link
            href={contact.contactPage}
            className="eg-cta-primary inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium text-white transition-[filter,transform] duration-160 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
          >
            Enquire Now <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <a
        href={`mailto:${contact.email}`}
        className="mt-auto inline-flex items-center gap-2 pt-40 text-[13px] text-mist-600 transition-colors duration-160 hover:text-mist-300 sm:pt-48"
      >
        <Mail aria-hidden className="h-3.5 w-3.5" strokeWidth={1.75} />
        {contact.email}
      </a>
    </Container>
  </section>
);
