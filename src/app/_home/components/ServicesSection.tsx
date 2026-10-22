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
import { Container, SectionIntro } from './primitives';
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

const ServiceCard: React.FC<{ service: HomeService; index: number }> = ({ service, index }) => {
  const Icon = icons[service.icon];
  const linked = Boolean(service.href);

  return (
    <li data-reveal style={{ '--eg-delay': `${(index % 4) * 70}ms` } as React.CSSProperties} className="flex">
      <div
      className={cn(
        'group relative flex w-full flex-col rounded-[20px] border border-ink-line bg-ink-800 p-6 transition-[transform,border-color] duration-280 ease-standard sm:p-7',
        linked && 'hover:-translate-y-1 hover:border-brand-500/50 focus-within:border-brand-500/50'
      )}
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-[14px] border border-ink-700 bg-ink-750 text-brand-400">
          <Icon aria-hidden className="h-[22px] w-[22px]" strokeWidth={1.75} />
        </span>
        <span aria-hidden className="text-xs font-semibold tabular-nums text-mist-600">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-8 text-[19px] font-semibold leading-snug tracking-[-0.02em] text-mist-100">
        {service.href ? (
          // Stretched link: the whole card is clickable, the title stays the accessible name.
          <Link href={service.href} className="after:absolute after:inset-0 after:rounded-[20px]">
            {service.title}
          </Link>
        ) : (
          service.title
        )}
      </h3>
      {service.tagline && <p className="mt-2 text-[15px] leading-relaxed text-mist-500">{service.tagline}</p>}
      {linked && (
        <span
          aria-hidden
          className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-mist-300 transition-colors duration-160 group-hover:text-brand-400"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-160 group-hover:translate-x-1" />
        </span>
      )}
      </div>
    </li>
  );
};

export const ServicesSection: React.FC = () => (
  <section aria-labelledby="services-heading" className="border-t border-ink-line bg-ink-900 py-24 lg:py-32">
    <Container>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        {/* Section title from the current enteglow.com homepage */}
        <SectionIntro id="services-heading" eyebrow="What we offer" title="Our Services" />
        <Link href="/services" className="eg-btn eg-btn-secondary self-start md:self-auto">
          View all services <ArrowUpRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
      <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </ul>
    </Container>
  </section>
);
