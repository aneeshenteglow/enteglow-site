'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/app/_home/cn';
import { Chip, ChipList, Label, PlusList } from '@/components/inner/primitives';
import { projectsData } from '../services/projectsData';
import type { ProjectDetail } from '../types/project';

const categories: Array<'All' | ProjectDetail['category']> = ['All', 'Web', 'Mobile', 'AI', 'IoT', 'Desktop'];

// Cards render outside the page's [data-reveal] flow: filtering swaps them after RevealObserver has run.
export const ProjectsGrid: React.FC = () => {
  const [active, setActive] = useState<(typeof categories)[number]>('All');
  const projects = active === 'All' ? projectsData : projectsData.filter((p) => p.category === active);

  return (
    <>
      <div role="group" aria-label="Filter case studies by category" className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              'inline-flex min-h-[40px] items-center rounded-full border px-4 text-[13px] font-medium transition-colors duration-160',
              active === cat
                ? 'border-brand-500 bg-brand-500 text-white'
                : 'border-ink-700 text-mist-300 hover:border-ink-600 hover:text-mist-100'
            )}
          >
            {cat} Projects
          </button>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {projects.length} case {projects.length === 1 ? 'study' : 'studies'}
      </p>

      <ul className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id} className="flex">
            <article className="group relative flex w-full flex-col rounded-[24px] border border-ink-line bg-ink-850 p-7 transition-[border-color,transform] duration-280 ease-standard focus-within:border-brand-500/45 hover:border-brand-500/45 motion-safe:hover:-translate-y-1 sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <Chip className="bg-brand-500/15 text-brand-100">{project.category}</Chip>
                <span className="text-[13px] text-mist-600">{project.techStack.slice(0, 3).join(' · ')}</span>
              </div>
              <h2 className="mt-6 font-display text-[clamp(1.625rem,2.4vw,2.125rem)] font-normal leading-[1.12] text-mist-100 [text-wrap:balance]">
                {project.title}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-brand-400">{project.tagline}</p>
              <p className="mt-4 text-[15px] leading-[1.7] text-mist-500">{project.overview}</p>

              <div className="mt-7 grid grid-cols-1 gap-6 rounded-[20px] border border-ink-line bg-ink-900 p-5 sm:grid-cols-2">
                <div>
                  <Label>Problem Domain</Label>
                  <p className="mt-3 text-[14px] leading-[1.6] text-mist-300">{project.problem}</p>
                </div>
                <div>
                  <Label>Architected Solution</Label>
                  <p className="mt-3 text-[14px] leading-[1.6] text-mist-300">{project.solution}</p>
                </div>
              </div>

              <div className="mt-7 flex-1">
                <Label>Key Features</Label>
                <PlusList items={project.keyFeatures} className="mt-4 text-[14px]" />
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-ink-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <ChipList items={project.techStack.slice(0, 4)} label="Technology stack" />
                {/* Stretched link: the whole card opens the case study. */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-mist-100 after:absolute after:inset-0 after:rounded-[24px] after:content-['']"
                >
                  Detailed Case Study
                  <span className="sr-only">: {project.title}</span>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 place-items-center rounded-full bg-mist-100 text-ink-950 transition-colors duration-160 group-hover:bg-brand-500 group-hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};
