import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container, Eyebrow } from '@/app/_home/components/primitives';
import { cn } from '@/app/_home/cn';
import { contact } from '@/app/_home/data/homeContent';
import { socialLinks } from '@/app/_home/data/socialLinks';
import { InnerPage } from '@/components/inner/InnerPage';
import { revealDelay } from '@/components/inner/primitives';
import { ContactForm } from './components/ContactForm';
import { ContactLogo } from './components/ContactLogo';
import { HexDot } from './components/HexDot';
import styles from './contact.module.css';

const intro =
  'Schedule a consultation with our senior engineering team to discuss your project requirements, architecture constraints, and product roadmap.';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: intro,
};

// Contact details are the approved ones published on enteglow.com (shared with the header and footer).
const channels = [
  { label: 'Call Us', value: contact.phoneDisplay, href: contact.phoneHref },
  { label: 'Email Us', value: contact.email, href: `mailto:${contact.email}` },
];

const detailLabel = 'text-[13px] text-mist-600';

// Registered office address, as supplied by Enteglow.
const address = 'No: 13/736, Behind Kunnanur Ganapathy Temple, Chembalode, Chandranagar Palakkad, Kerala 678007';
const mapQuery = encodeURIComponent(address);

export default function ContactPage() {
  return (
    <InnerPage cta={false}>
      <section
        aria-labelledby="contact-title"
        className="relative isolate overflow-hidden pb-24 pt-[128px] sm:pb-28 lg:pb-32 lg:pt-[156px]"
      >
        <div aria-hidden className={styles.backdrop} />

        <Container>
          {/* Centred header: breadcrumb, eyebrow, title, intro */}
          <div className="mx-auto max-w-4xl text-center" data-reveal>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-mist-600">
                <li className="inline-flex items-center gap-1.5">
                  <Link href="/" className="transition-colors duration-160 hover:text-mist-100">
                    Home
                  </Link>
                  <ChevronRight aria-hidden className="h-3.5 w-3.5" />
                </li>
                <li aria-current="page" className="text-mist-300">
                  Contact
                </li>
              </ol>
            </nav>

            <div className="mt-8 inline-flex items-center gap-3">
              <HexDot />
              <Eyebrow>Technical Discovery Session</Eyebrow>
            </div>
            <h1
              id="contact-title"
              className="mt-5 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.02] tracking-[-0.02em] text-mist-100 [text-wrap:balance]"
            >
              Start Your Software Project
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-mist-300 sm:text-[17px]">{intro}</p>
          </div>

          {/* Two blocks: contact information | animated logo (logo first on mobile/tablet, right on desktop). */}
          <div className="mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:mt-20 lg:gap-20">
            <div className="relative z-10 order-2 md:order-1" data-reveal style={revealDelay(2, 120)}>
              <h2 className="font-display text-[clamp(1.75rem,2.8vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-mist-100">
                Get in Touch
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-[1.75] text-mist-500">
                Whether you need AI Agent integration, Web App engineering, high-performance Corporate Websites, or Cloud
                Hosting—our senior team is ready to assist.
              </p>

              <ul className="mt-10 space-y-8">
                {channels.map(({ label, value, href }) => (
                  <li key={label}>
                    <p className={detailLabel}>{label}</p>
                    <a
                      href={href}
                      className="group mt-2 inline-block break-words text-[19px] leading-snug text-mist-100 transition-colors duration-160 hover:text-brand-400"
                    >
                      {value}
                      <span
                        aria-hidden
                        className="mt-1 block h-px origin-left scale-x-0 bg-brand-400 transition-transform duration-280 ease-standard group-hover:scale-x-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className={detailLabel}>Follow Enteglow</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enteglow on ${s.name} (opens in a new tab)`}
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-mist-300 transition-colors duration-160 hover:border-brand-400/60 hover:text-brand-400"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
                          <path d={s.path} />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[360px] md:order-2 md:max-w-[440px]"
              data-reveal
              style={revealDelay(1, 120)}
            >
              <ContactLogo />
            </div>
          </div>
        </Container>
      </section>

      {/* Second row: address + map (left) | contact form (right) */}
      <section aria-label="Location and contact form" className="relative isolate overflow-hidden pb-24 sm:pb-28 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div data-reveal>
              <p className={detailLabel}>Address</p>
              <address className="mt-3 font-display text-[clamp(1.25rem,2vw,1.625rem)] not-italic leading-[1.4] text-mist-100">
                {address}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-[14px] text-brand-400 underline underline-offset-4 transition-colors duration-160 hover:text-mist-100"
              >
                Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <div className={cn(styles.mapFrame, 'mt-8 h-[300px] sm:h-[380px] lg:h-[423px]')}>
                <iframe
                  title="Map showing the Enteglow office location"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div
              className={cn('rounded-[24px] border border-white/10 p-6 sm:p-9 xl:p-10', styles.panel)}
              data-reveal
              style={revealDelay(1, 120)}
            >
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </InnerPage>
  );
}
