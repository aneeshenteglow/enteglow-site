'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { CinematicCTA } from '@/components/sections/CinematicCTA';
import { projectsData } from './services/projectsData';

const categories = ['All', 'Web', 'Mobile', 'AI', 'IoT', 'Desktop'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-16 pb-12">
      <section className="pt-8 pb-12 bg-radial-gold border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="cyan" className="mb-4">
            Software Portfolio
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Engineering Case Studies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Detailed technical breakdowns of software product solutions engineered for technical performance, reliability, and business impact.
          </p>

          <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-navy-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat} Projects
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between p-8 group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="primary">{project.category}</Badge>
                  <span className="text-xs font-mono text-slate-500">
                    {project.techStack.slice(0, 3).join(' • ')}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm font-semibold text-gold-600 mt-1">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase text-gold-600 block">
                      Problem Domain
                    </span>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-xs font-mono font-semibold uppercase text-techBlue-600 block">
                      Architected Solution
                    </span>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-semibold uppercase text-slate-500 block">
                    Key Features
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-navy-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <CinematicCTA />
    </div>
  );
}
