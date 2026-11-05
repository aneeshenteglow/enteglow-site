import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ServiceVisual } from '@/app/_home/components/ServiceVisuals';
import { serviceHref } from '@/app/_home/data/homeContent';
import { cn } from '@/app/_home/cn';
import { indexLabel } from '@/components/inner/primitives';
import type { ServiceDetail } from '../types/service';

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
  /** Heading level inside the page outline (h2 on /services, h3 under a section heading). */
  headingLevel?: 'h2' | 'h3';
  className?: string;
}

/** Overview card: illustration, title, 2–3 line summary and a "Know More" link to the detail page. */
export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, headingLevel: Heading = 'h2', className }) => (
  <li
    data-reveal
    style={{ '--eg-delay': `${(index % 3) * 70}ms`, '--eg-accent': service.accent } as React.CSSProperties}
    className={cn('flex', className)}
  >
    <article className="eg-svc-card is-linked group relative flex w-full flex-col rounded-[22px] border border-ink-line p-3">
      <div
        aria-hidden
        className="eg-svc-panel flex h-[176px] shrink-0 items-stretch overflow-hidden rounded-2xl border border-ink-line"
      >
        <ServiceVisual kind={service.visual} />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-4">
        <p className="flex items-center gap-2 text-[12px] font-medium text-mist-600">
          <span className="tabular-nums">{indexLabel(index)}</span>
          {service.tagline && (
            <>
              <span aria-hidden className="h-px w-4 bg-ink-600" />
              <span className="eg-accent-text truncate">{service.tagline}</span>
            </>
          )}
        </p>
        <Heading className="mt-3 text-[clamp(1.125rem,1.6vw,1.3125rem)] font-semibold leading-snug tracking-[-0.02em] text-mist-100">
          {/* Stretched link: the whole card is clickable, the title stays the accessible name. */}
          <Link
            href={serviceHref(service.slug)}
            className="after:absolute after:inset-0 after:z-10 after:rounded-[22px] focus-visible:outline-none"
          >
            {service.title}
          </Link>
        </Heading>
        <p className="mt-2.5 line-clamp-3 text-[14.5px] leading-[1.65] text-mist-500">{service.summary}</p>
        <span
          aria-hidden
          className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-semibold text-mist-300 transition-colors duration-160 group-hover:text-[color:var(--eg-accent)]"
        >
          Know More
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-160 motion-safe:group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  </li>
);

/**
 * Responsive grid (1 / 2 / 3 columns). A lone card on the final row is centred instead of
 * hanging on the left, so lists that are not a multiple of the column count stay balanced.
 */
export const ServiceGrid: React.FC<{
  services: ServiceDetail[];
  headingLevel?: 'h2' | 'h3';
  className?: string;
}> = ({ services, headingLevel, className }) => {
  const last = services.length - 1;
  const orphanMd = services.length % 2 === 1;
  const orphanLg = services.length % 3 === 1;
  return (
    <ul className={cn('grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3', className)}>
      {services.map((service, i) => (
        <ServiceCard
          key={service.slug}
          service={service}
          index={i}
          headingLevel={headingLevel}
          className={cn(
            i === last && orphanMd && 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.625rem)] lg:col-span-1 lg:mx-0 lg:w-auto',
            i === last && orphanLg && 'lg:col-start-2'
          )}
        />
      ))}
    </ul>
  );
};
