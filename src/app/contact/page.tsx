import React from 'react';
import type { Metadata } from 'next';
import { Mail, Phone } from 'lucide-react';
import { Container } from '@/app/_home/components/primitives';
import { contact } from '@/app/_home/data/homeContent';
import { socialLinks } from '@/app/_home/data/socialLinks';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { IconTile, Label, Panel, revealDelay } from '@/components/inner/primitives';
import { ContactForm } from './components/ContactForm';

const intro =
  'Schedule a consultation with our senior engineering team to discuss your project requirements, architecture constraints, and product roadmap.';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: intro,
};

// Contact details are the approved ones published on enteglow.com (shared with the header and footer).
const channels = [
  { label: 'Call Us', value: contact.phoneDisplay, href: contact.phoneHref, icon: Phone },
  { label: 'Email Us', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
];

export default function ContactPage() {
  return (
    <InnerPage cta={false}>
      <PageHero
        eyebrow="Technical Discovery Session"
        title="Start Your Software Project"
        crumb="Contact"
        intro={intro}
      />

      <section aria-label="Contact Enteglow" className="py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="font-display text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.06] tracking-[-0.02em] text-mist-100">
              Get in Touch
            </h2>
            <p className="mt-5 text-[17px] leading-[1.75] text-mist-500">
              Whether you need AI Agent integration, Web App engineering, high-performance Corporate Websites, or Cloud
              Hosting—our senior team is ready to assist.
            </p>

            <ul className="mt-10 space-y-3">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-5 rounded-[24px] border border-ink-line bg-ink-850 p-5 transition-colors duration-280 ease-standard hover:border-brand-500/45"
                  >
                    <IconTile>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </IconTile>
                    <span className="min-w-0">
                      <Label>{label}</Label>
                      <span className="mt-1.5 block break-words text-[17px] font-semibold text-mist-100 transition-colors duration-160 group-hover:text-brand-400">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Label>Follow Enteglow</Label>
              <ul className="mt-4 flex gap-2">
                {socialLinks.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enteglow on ${s.name} (opens in a new tab)`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-ink-700 text-mist-500 transition-colors duration-160 hover:border-ink-600 hover:text-mist-100"
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

          <div className="lg:col-span-7" data-reveal style={revealDelay(1, 100)}>
            <Panel className="sm:p-10">
              <ContactForm />
            </Panel>
          </div>
        </Container>
      </section>
    </InnerPage>
  );
}
