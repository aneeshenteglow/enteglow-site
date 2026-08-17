'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { ProjectDetail } from '../types/project';

const categories = ['All', 'Web', 'Mobile', 'AI', 'IoT', 'Desktop'];

interface Props {
  projects: ProjectDetail[];
}

export const ProjectsFilterGrid: React.FC<Props> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Controls */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded font-label-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(227,30,36,0.3)]'
                : 'glass-panel text-on-surface-variant hover:text-on-surface border-glass-border'
            }`}
          >
            {cat} Projects
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="glass-panel rounded-xl p-8 flex flex-col justify-between group glow-hover space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Badge>{project.category}</Badge>
                <span className="font-label-sm text-xs text-on-surface-variant uppercase">
                  {project.techStack.slice(0, 3).join(' • ')}
                </span>
              </div>

              <div>
                <h2 className="font-headline-md text-2xl text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="font-body-md text-primary mt-1 font-semibold text-sm">
                  {project.tagline}
                </p>
                <p className="font-body-md text-on-surface-variant text-sm mt-3 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-3 p-4 rounded bg-surface-container border border-glass-border">
                <div>
                  <span className="font-label-sm text-xs font-semibold uppercase text-primary block">
                    Problem Domain
                  </span>
                  <p className="font-body-md text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className="pt-2 border-t border-glass-border">
                  <span className="font-label-sm text-xs font-semibold uppercase text-primary block">
                    Architected Solution
                  </span>
                  <p className="font-body-md text-xs text-on-surface mt-1 leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-label-sm text-xs font-semibold uppercase text-on-surface-variant block">
                  Key Features
                </span>
                <ul className="space-y-1.5 text-xs text-on-surface font-medium">
                  {project.keyFeatures.map((feat: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-glass-border flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {project.techStack.slice(0, 4).map((tech: string, i: number) => (
                  <span key={i} className="text-[10px] font-label-sm px-2 py-0.5 rounded bg-surface-container-high border border-glass-border text-on-surface uppercase">
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                prefetch={true}
                className="text-xs font-bold text-primary hover:text-primary flex items-center gap-1 group-hover:translate-x-1 transition-all uppercase font-label-sm"
              >
                <span>Detailed Case Study</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
