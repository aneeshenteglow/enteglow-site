'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, X, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';
import { projectsData } from '../services/projectsData';
import { ProjectDetail } from '../types/project';


export const CaseStudyShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Proven Business Results"
            title="Software Engineering Case Studies"
            description="Explore real-world software products built by Entelgow. Each case study documents the business challenge, engineered solution, technology stack, and measurable business result."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <Card key={project.id} className="flex flex-col justify-between p-6 sm:p-8 group border-slate-200/80 hover:border-gold-400">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="primary">{project.category} Engineering</Badge>
                    <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1">
                      <TrendingUp size={13} />
                      {project.outcomes[0].split(' ')[0]} Outcome
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-gold-600 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Challenge -> Solution Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200 space-y-1">
                      <span className="font-mono font-bold uppercase text-red-600 block text-[10px]">
                        Business Challenge:
                      </span>
                      <p className="text-slate-700 leading-relaxed line-clamp-3">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gold-50/60 border border-gold-200/70 space-y-1">
                      <span className="font-mono font-bold uppercase text-gold-700 block text-[10px]">
                        Engineered Solution:
                      </span>
                      <p className="text-slate-800 leading-relaxed line-clamp-3">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Measurable Outcome */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    <span className="font-mono uppercase text-slate-500 font-bold block mb-1">
                      Measurable Business Outcomes:
                    </span>
                    {project.outcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-800 font-medium">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-navy-800 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1 shrink-0 ml-2"
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setPlannerOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm shadow-lg shadow-gold-500/25 transition-all"
            >
              <Sparkles size={16} />
              <span>Discuss Your Case Study Scope</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <Badge variant="primary">{selectedProject.category} Case Breakdown</Badge>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900">{selectedProject.title}</h3>
              <p className="text-sm text-gold-600 font-semibold mt-1">{selectedProject.tagline}</p>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{selectedProject.overview}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-navy-900">Architecture Highlights:</h4>
              <div className="space-y-2">
                {selectedProject.architectureHighlights.map((arch, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-slate-500">Tech Stack Utilized:</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-navy-950 text-white font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setPlannerOpen(true);
                }}
                className="px-6 py-2.5 rounded-xl bg-gold-500 text-slate-950 font-bold text-xs hover:bg-gold-400"
              >
                Build Similar Solution →
              </button>
            </div>
          </div>
        </div>
      )}

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};

