import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, AlertTriangle, Cpu, Code2 } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { projectsData } from '../services/projectsData';

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.id || p.id === params.id);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} — Engineering Case Study`,
    description: project.overview,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.id || p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-12">
      <section className="pt-8 pb-12 bg-radial-gold border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-navy-900 transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            <span>Back to All Projects</span>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="cyan">{project.category}</Badge>
              <span className="text-xs font-mono text-slate-500">
                Case Study ID: {project.id}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg text-gold-600 font-semibold">
              {project.tagline}
            </p>

            <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-sm font-mono font-semibold uppercase text-gold-600">
              <AlertTriangle size={18} />
              <span>Technical Problem & Context</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-sm font-mono font-semibold uppercase text-techBlue-600">
              <Code2 size={18} />
              <span>Architected Solution</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xl">
          <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2.5">
            <Cpu size={22} className="text-gold-600" />
            <span>Systems Architecture Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.architectureHighlights.map((arch, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                <span className="font-mono text-gold-600 font-bold block mb-1">Pattern 0{i + 1}</span>
                {arch}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
            <h3 className="text-lg font-bold text-navy-900">Core Platform Functionality</h3>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
            <h3 className="text-lg font-bold text-navy-900">Measurable Results</h3>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              {project.outcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-md">
          <h3 className="text-base font-mono font-semibold uppercase text-slate-500">
            Complete Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-navy-900 text-xs font-mono font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <CinematicCTA />
    </div>
  );
}
