'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, X, Sparkles, AlertCircle, ShieldCheck } from 'lucide-react';
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
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Trusted by Industry Leaders"
            title="Real Software Built for Enterprise Operations"
            description="We evaluate software success by business outcomes achieved. Explore real engineering projects structured across Problem, Built System, and Verified Business Impact."
          />


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <Card key={project.id} className="flex flex-col justify-between p-6 sm:p-8 group border-slate-200/80 hover:border-gold-400 bg-white shadow-md">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="primary">{project.category} Engineering</Badge>
                    <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
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
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="font-mono font-bold uppercase text-red-600 flex items-center gap-1 text-[10px]">
                        <AlertCircle size={12} /> Problem:
                      </span>
                      <p className="text-slate-700 leading-relaxed line-clamp-3 font-normal">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gold-50/70 border border-gold-200/80 space-y-1">
                      <span className="font-mono font-bold uppercase text-gold-700 flex items-center gap-1 text-[10px]">
                        <CheckCircle2 size={12} /> Software Built:
                      </span>
                      <p className="text-slate-800 leading-relaxed line-clamp-3 font-normal">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Verified Measurable Outcomes */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    <span className="font-mono uppercase text-slate-500 font-bold block mb-1">
                      Verified Business Results:
                    </span>
                    {project.outcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-navy-900 font-semibold">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-navy-800 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1 shrink-0 ml-2"
                  >
                    <span>Inspect Architecture</span>
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
              <span>Discuss Similar Solution Scope</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Architecture Spec Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 animate-fadeIn max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono text-gold-600 font-bold uppercase tracking-wider block">
                  {selectedProject.category} ARCHITECTURE SPECIFICATION
                </span>
                <h3 className="text-xl font-bold text-navy-900 mt-0.5">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 font-bold"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-navy-950 text-white space-y-2 border border-slate-800">
                <span className="font-mono text-[10px] text-gold-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck size={13} /> PRODUCTION SYSTEM ARCHITECTURE:
                </span>
                <div className="space-y-1 font-mono text-slate-300">
                  {selectedProject.architectureHighlights.map((arch, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-mono text-[10px] text-navy-900 font-bold uppercase tracking-wider flex items-center gap-1">
                  <TrendingUp size={13} className="text-emerald-600" /> VERIFIED BUSINESS OUTCOMES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.outcomes.map((out, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                Close Spec
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setPlannerOpen(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-gold-500 text-slate-950 font-bold text-xs hover:bg-gold-400 shadow-md shadow-gold-500/20"
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


