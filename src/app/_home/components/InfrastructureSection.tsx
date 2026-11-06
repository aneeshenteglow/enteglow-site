'use client';

import React, { useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ScanFace, Scale, Users, type LucideIcon } from 'lucide-react';
import { contact, infrastructure } from '../data/homeContent';
import type { InfrastructureSolution } from '../types';
import { Container, SectionIntro } from './primitives';
import { cn } from '../cn';

const icons: Record<InfrastructureSolution['icon'], LucideIcon> = {
  crm: Users,
  camera: ScanFace,
  weighbridge: Scale,
};

// Panel backgrounds: CC0 photos from Wikimedia Commons ("Man at a laptop in an office (Unsplash)",
// "AxisCCTV", "Weighbridge Automation System"). `position` keeps each subject clear of the copy.
const backgrounds: Record<InfrastructureSolution['icon'], { src: string; position: string }> = {
  crm: { src: '/images/home/infra-crm.jpg', position: '62% center' },
  camera: { src: '/images/home/infra-camera.jpg', position: '78% center' },
  weighbridge: { src: '/images/home/infra-weighbridge.jpg', position: '45% center' },
};

const pad = (n: number) => String(n).padStart(2, '0');

export const InfrastructureSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabId = (i: number) => `${baseId}-tab-${i}`;
  const panelId = `${baseId}-panel`;
  const current = infrastructure[active];
  const Icon = icons[current.icon];

  // Arrow keys move between rows, matching the tabs pattern.
  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = infrastructure.length - 1;
    let next: number | null = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = i === last ? 0 : i + 1;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = i === 0 ? last : i - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(tabId(next))?.focus();
  };

  return (
    <section aria-labelledby="infrastructure-heading" className="border-t border-ink-line bg-ink-900 py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro id="infrastructure-heading" eyebrow="Solutions" title="Powering Next-Generation IT Infrastructure" />
          <Link href={contact.contactPage} className="eg-btn eg-btn-secondary self-start md:self-auto">
            Discuss your project <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-14" data-reveal>
          <div role="tablist" aria-orientation="vertical" aria-label="Infrastructure solutions" className="border-t border-white/10">
            {infrastructure.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.title}
                  id={tabId(i)}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className="group flex min-h-[91px] w-full items-center gap-5 border-b border-white/10 py-5 pl-1 pr-1 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#5B6CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 sm:gap-7"
                >
                  <span
                    aria-hidden
                    className={cn(
                      'w-6 shrink-0 text-[13px] font-bold tabular-nums transition-colors duration-280',
                      selected ? 'text-[#c63b22]' : 'text-mist-600'
                    )}
                  >
                    {pad(i + 1)}
                  </span>
                  <h3
                    className={cn(
                      'flex-1 text-[22px] font-medium leading-tight tracking-[-0.02em] transition-[color,transform] duration-280 ease-standard',
                      selected ? 'translate-x-1.5 text-mist-100' : 'text-[#5C6170] group-hover:text-mist-300'
                    )}
                  >
                    {item.title}
                  </h3>
                  <ArrowUpRight
                    aria-hidden
                    className={cn(
                      'h-4 w-4 shrink-0 text-[#c63b22] transition-opacity duration-280',
                      selected ? 'opacity-100' : 'opacity-0'
                    )}
                    strokeWidth={1.75}
                  />
                </button>
              );
            })}
          </div>

          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId(active)}
            className="eg-infra-panel relative isolate flex min-h-[390px] flex-col overflow-hidden rounded-[28px] p-8 sm:p-11"
          >
            {/* All photos stay mounted so switching tabs crossfades instead of waiting on a load. */}
            {infrastructure.map((item, i) => (
              <Image
                key={item.icon}
                src={backgrounds[item.icon].src}
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className={cn(
                  'eg-infra-photo -z-20 object-cover transition-opacity duration-700 ease-smooth',
                  i === active ? 'opacity-100' : 'opacity-0'
                )}
                style={{ objectPosition: backgrounds[item.icon].position }}
              />
            ))}
            <span aria-hidden className="eg-infra-scrim" />
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <Icon aria-hidden className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <div key={active} className="eg-infra-fade mt-auto max-w-[30rem] pt-16">
              <p className="text-[13px] font-medium tabular-nums text-white/60">
                {pad(active + 1)} / {pad(infrastructure.length)}
              </p>
              <p className="mt-3 text-[clamp(1.5rem,2.3vw,1.75rem)] font-medium leading-tight tracking-[-0.02em] text-white">
                {current.title}
              </p>
              <Link
                href={contact.contactPage}
                className="group mt-8 inline-flex items-center gap-2 border-b border-white/70 pb-0.5 text-[15px] font-bold text-white transition-colors duration-160 hover:border-white"
              >
                Discuss your project
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-160 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
