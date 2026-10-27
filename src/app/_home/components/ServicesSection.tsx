import React from 'react';
import Link from 'next/link';
import {
  AppWindow,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Globe,
  MonitorCog,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { services } from '../data/homeContent';
import type { HomeService } from '../types';
import { Container, Eyebrow } from './primitives';
import { ServiceVisual } from './ServiceVisuals';
import { cn } from '../cn';

const icons: Record<HomeService['icon'], LucideIcon> = {
  ai: BrainCircuit,
  'web-app': AppWindow,
  'app-maintenance': Wrench,
  website: Globe,
  'website-maintenance': MonitorCog,
  domain: Server,
  mobile: Smartphone,
  iot: Cpu,
};

// Restrained accents from the existing palette: brand coral, warm amber (tertiary-fixed-dim)
// and the status green used by the hero visuals for the two maintenance services.
const CORAL = '#F06A4F';
const AMBER = '#FFB86B';
const GREEN = '#38B67A';
const accents: Record<HomeService['icon'], string> = {
  ai: CORAL,
  'web-app': AMBER,
  'app-maintenance': GREEN,
  website: CORAL,
  'website-maintenance': GREEN,
  domain: AMBER,
  mobile: CORAL,
  iot: AMBER,
};

// The first two services take the wide top row; the rest sit three to a row on desktop.
const WIDE_COUNT = 2;

const ServiceCard: React.FC<{ service: HomeService; index: number }> = ({ service, index }) => {
  const Icon = icons[service.icon];
  const wide = index < WIDE_COUNT;

  return (
    <li
      data-reveal
      style={{ '--eg-delay': `${(index % 3) * 70}ms`, '--eg-accent': accents[service.icon] } as React.CSSProperties}
      className={cn('eg-svc flex', wide ? 'lg:col-span-3' : 'lg:col-span-2')}
    >
      <article
        className={cn(
          'eg-svc-card group relative flex w-full flex-col rounded-[22px] border border-ink-line p-5 sm:p-6 lg:p-7',
          service.href && 'is-linked'
        )}
      >
        <div className="mb-6 flex items-start justify-between gap-5">
          <div className={cn('min-w-0', wide && 'max-w-[34rem]')}>
            <h3 className="text-[clamp(1.125rem,1.6vw,1.3125rem)] font-semibold leading-snug tracking-[-0.02em] text-mist-100">
              {service.href ? (
                // Stretched link: the whole card is clickable, the title stays the accessible name.
                <Link href={service.href} className="after:absolute after:inset-0 after:z-10 after:rounded-[22px]">
                  {service.title}
                </Link>
              ) : (
                service.title
              )}
            </h3>
            {service.tagline && (
              <p className="eg-accent-text mt-1.5 text-[13px] font-medium leading-snug">{service.tagline}</p>
            )}
            {service.description && (
              <p className="mt-3 text-[14.5px] leading-[1.65] text-mist-500">{service.description}</p>
            )}
            {service.href && (
              <span
                aria-hidden
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-mist-300 transition-colors duration-160 group-hover:text-[color:var(--eg-accent)]"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-160 group-hover:translate-x-1" />
              </span>
            )}
          </div>
          <span className="eg-svc-icon grid h-12 w-12 shrink-0 place-items-center rounded-[14px] sm:h-14 sm:w-14">
            <Icon aria-hidden className="h-[22px] w-[22px] sm:h-6 sm:w-6" strokeWidth={1.6} />
          </span>
        </div>

        <div
          aria-hidden
          className={cn(
            // Fixed height pinned to the bottom, so panels line up across a row whatever the copy length.
            'eg-svc-panel mt-auto flex h-[176px] shrink-0 items-stretch overflow-hidden rounded-2xl border border-ink-line',
            wide && 'lg:h-[184px]'
          )}
        >
          <ServiceVisual kind={service.icon} />
        </div>
      </article>
    </li>
  );
};

export const ServicesSection: React.FC = () => (
  <section
    aria-labelledby="services-heading"
    className="eg-services relative border-t border-ink-line bg-ink-950 py-24 lg:py-32"
  >
    <Container className="relative">
      {/* Section title from the current enteglow.com homepage */}
      <div className="mx-auto max-w-2xl text-center" data-reveal>
        <Eyebrow>What we offer</Eyebrow>
        <h2
          id="services-heading"
          className="mt-4 font-display text-[clamp(2.5rem,5.4vw,4rem)] font-normal leading-[1.04] tracking-[-0.02em] text-mist-100"
        >
          Our Services
        </h2>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-5">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </ul>

      <div className="mt-12 flex justify-center" data-reveal>
        <Link href="/services" className="eg-btn eg-btn-secondary">
          View all services <ArrowUpRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
    </Container>
  </section>
);
