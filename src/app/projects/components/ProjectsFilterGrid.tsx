'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full font-label-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'text-on-primary-container font-bold shadow-md'
                  : 'glass-panel text-on-surface-variant hover:text-on-surface hover:border-primary/30'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeProjectCategory"
                  className="absolute inset-0 bg-primary-container rounded-full z-0 shadow-[0_0_15px_rgba(227,30,36,0.3)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{cat} Projects</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl p-8 flex flex-col justify-between group border border-glass-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(227,30,36,0.25)] space-y-6 relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge>{project.category}</Badge>
                  <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider bg-primary-container/10 px-2.5 py-1 rounded border border-primary/20">
                    {project.techStack.slice(0, 3).join(' • ')}
                  </span>
                </div>

                <div>
                  <h2 className="font-headline-md text-2xl text-on-surface font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="font-body-md text-primary mt-1 font-semibold text-sm">
                    {project.tagline}
                  </p>
                  <p className="font-body-md text-on-surface-variant text-sm mt-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="space-y-3 p-4 rounded-xl bg-surface-container border border-glass-border">
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
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech: string, i: number) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-surface-container-high border border-glass-border text-on-surface uppercase font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  prefetch={true}
                  className="text-xs font-bold text-primary hover:text-primary flex items-center gap-1.5 group-hover:translate-x-1 transition-all uppercase font-label-sm"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
