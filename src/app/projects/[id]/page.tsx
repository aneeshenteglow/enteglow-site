import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container, SectionIntro } from '@/app/_home/components/primitives';
import { InnerPage } from '@/components/inner/InnerPage';
import { PageHero } from '@/components/inner/PageHero';
import { Chip, ChipList, Label, Panel, PlusList, indexLabel, revealDelay } from '@/components/inner/primitives';
import { projectsData } from '../services/projectsData';

interface Props {
  params: {
    id: string;
  };
}

const findProject = (id: string) => projectsData.find((p) => p.slug === id || p.id === id);

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject(params.id);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} — Engineering Case Study`,
    description: project.overview,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = findProject(params.id);

  if (!project) {
    notFound();
  }

  const index = projectsData.indexOf(project);
  const next = projectsData[(index + 1) % projectsData.length];

  return (
    <InnerPage>
      <PageHero
        eyebrow={`${project.category} Case Study`}
        title={project.title}
        parents={[{ href: '/projects', label: 'Case Studies' }]}
        intro={project.overview}
      >
        <p className="max-w-3xl text-[17px] leading-[1.6] text-brand-400">{project.tagline}</p>
      </PageHero>

      <section aria-label="Problem and solution" className="pt-24 lg:pt-32">
        <Container className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { label: 'Technical Problem & Context', body: project.problem },
            { label: 'Architected Solution', body: project.solution },
          ].map((item, i) => (
            <div key={item.label} data-reveal style={revealDelay(i)} className="flex">
              <Panel className="w-full sm:p-10">
                <Label>{item.label}</Label>
                <p className="mt-5 text-[17px] leading-[1.7] text-mist-300">{item.body}</p>
              </Panel>
            </div>
          ))}
        </Container>
      </section>

      <section aria-labelledby="architecture-heading" className="py-24 lg:py-32">
        <Container>
          <SectionIntro id="architecture-heading" eyebrow="Architecture" title="Systems Architecture Highlights" />
          <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {project.architectureHighlights.map((arch, i) => (
              <li
                key={arch}
                data-reveal
                style={revealDelay(i)}
                className="rounded-[24px] border border-ink-line bg-ink-850 p-7"
              >
                <span className="text-[13px] font-medium tabular-nums text-brand-400">Pattern {indexLabel(i)}</span>
                <p className="mt-4 text-[16px] leading-[1.65] text-mist-200">{arch}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-label="Functionality and results" className="border-t border-ink-line bg-ink-900 py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div data-reveal>
            <Panel className="h-full sm:p-10">
              <h2 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] font-normal text-mist-100">
                Core Platform Functionality
              </h2>
              <PlusList items={project.keyFeatures} className="mt-6" />
            </Panel>
          </div>
          <div data-reveal style={revealDelay(1)}>
            <Panel className="h-full sm:p-10">
              <h2 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] font-normal text-mist-100">Measurable Results</h2>
              <PlusList items={project.outcomes} className="mt-6" />
            </Panel>
          </div>
          <div data-reveal className="md:col-span-2">
            <Panel>
              <Label>Complete Technology Stack</Label>
              <ChipList items={project.techStack} label="Technology stack" className="mt-5" />
            </Panel>
          </div>
        </Container>
      </section>

      <nav aria-label="More case studies" className="border-t border-ink-line">
        <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/projects" className="eg-btn eg-btn-secondary self-start">
            <ArrowLeft aria-hidden className="h-4 w-4" /> Back to All Projects
          </Link>
          {next.id !== project.id && (
            <Link href={`/projects/${next.slug}`} className="group text-left sm:max-w-md sm:text-right">
              <Chip>Next case study</Chip>
              <span className="mt-3 flex items-center gap-3 font-display text-xl leading-snug text-mist-100 transition-colors duration-160 group-hover:text-brand-400 sm:justify-end">
                {next.title}
                <ArrowRight aria-hidden className="h-5 w-5 shrink-0" />
              </span>
            </Link>
          )}
        </Container>
      </nav>
    </InnerPage>
  );
}
