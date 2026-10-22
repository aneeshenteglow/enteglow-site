import React from 'react';
import Link from 'next/link';
import { ArrowRight, ScanFace, Scale, Users, type LucideIcon } from 'lucide-react';
import { contact, infrastructure } from '../data/homeContent';
import type { InfrastructureSolution } from '../types';
import { Container, SectionIntro } from './primitives';

const icons: Record<InfrastructureSolution['icon'], LucideIcon> = {
  crm: Users,
  camera: ScanFace,
  weighbridge: Scale,
};

export const InfrastructureSection: React.FC = () => (
  <section aria-labelledby="infrastructure-heading" className="border-t border-ink-line bg-ink-900 py-24 lg:py-32">
    <Container>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionIntro id="infrastructure-heading" eyebrow="Solutions" title="Powering Next-Generation IT Infrastructure" />
        <Link href={contact.contactPage} className="eg-btn eg-btn-secondary self-start md:self-auto">
          Discuss your project <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
      <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {infrastructure.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <li
              key={item.title}
              data-reveal
              style={{ '--eg-delay': `${i * 80}ms` } as React.CSSProperties}
              className="flex flex-col overflow-hidden rounded-[24px] border border-ink-line bg-ink-800"
            >
              <div
                aria-hidden
                className="eg-grid relative grid h-56 place-items-center overflow-hidden border-b border-ink-line bg-[radial-gradient(circle_at_50%_60%,rgba(198,59,34,0.22),transparent_60%)]"
              >
                <span className="absolute h-44 w-44 rounded-full border border-ink-700" />
                <span className="absolute h-28 w-28 rounded-full border border-ink-600" />
                <span className="relative grid h-16 w-16 place-items-center rounded-[18px] bg-brand-500 text-white shadow-[0_12px_40px_-8px_rgba(198,59,34,0.7)]">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
              </div>
              <div className="flex flex-1 items-start gap-5 p-7">
                <span aria-hidden className="pt-1 text-xs font-semibold tabular-nums text-brand-400">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em] text-mist-100">{item.title}</h3>
              </div>
            </li>
          );
        })}
      </ol>
    </Container>
  </section>
);
