import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { contact } from '../data/homeContent';
import { Container } from './primitives';

// Copy from the current enteglow.com homepage CTA band.
export const ClosingCta: React.FC = () => (
  <section aria-labelledby="cta-heading" className="py-24 lg:py-32">
    <Container>
      <div
        data-reveal
        className="relative overflow-hidden rounded-[28px] border border-ink-line bg-ink-800 px-6 py-14 sm:px-12 lg:px-16 lg:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
        />
        <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2
              id="cta-heading"
              className="text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-mist-100"
            >
              Looking to integrate technology into your business?
            </h2>
            <p className="mt-5 text-lg text-mist-500">We&apos;re here to help.</p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
            <Link href={contact.contactPage} className="eg-btn eg-btn-primary w-full sm:w-auto">
              Enquire Now <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <div className="flex flex-col gap-2 text-[15px] text-mist-300 sm:flex-row sm:gap-6 lg:flex-col lg:items-end lg:gap-2">
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 hover:text-mist-100">
                <Phone aria-hidden className="h-4 w-4 text-brand-400" strokeWidth={1.75} />
                {contact.phoneDisplay}
              </a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-mist-100">
                <Mail aria-hidden className="h-4 w-4 text-brand-400" strokeWidth={1.75} />
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
