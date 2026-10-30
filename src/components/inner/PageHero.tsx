import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container, Eyebrow } from '@/app/_home/components/primitives';
import type { NavItem } from '@/app/_home/types';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  /** Trail between Home and the current page, e.g. the Case Studies index on a case study. */
  parents?: NavItem[];
  /** Breadcrumb label for the current page; defaults to the title. */
  crumb?: string;
  children?: React.ReactNode;
}

// Inner-page banner: the homepage hero's atmosphere (warm glow + masked grid) at a calmer height.
export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, intro, parents = [], crumb, children }) => (
  <section className="eg-atmosphere eg-grid relative isolate overflow-hidden pb-16 pt-[136px] sm:pb-20 lg:pb-24 lg:pt-[168px]">
    <Container className="relative">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-mist-600">
          {[{ href: '/', label: 'Home' }, ...parents].map((item) => (
            <li key={item.href} className="inline-flex items-center gap-1.5">
              <Link href={item.href} className="transition-colors duration-160 hover:text-mist-100">
                {item.label}
              </Link>
              <ChevronRight aria-hidden className="h-3.5 w-3.5" />
            </li>
          ))}
          <li aria-current="page" className="text-mist-300">
            {crumb ?? title}
          </li>
        </ol>
      </nav>

      <div className="mt-10 max-w-4xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.02] tracking-[-0.02em] text-mist-100 [text-wrap:balance]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.75] text-mist-500 sm:text-lg">{intro}</p>
        )}
      </div>
      {children && <div className="mt-10">{children}</div>}
    </Container>
  </section>
);
