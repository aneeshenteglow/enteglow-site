import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { projectsData } from '../services/projectsData';

export const CaseStudyShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Product Showcases"
          title="Engineering Case Studies"
          description="Detailed breakdowns of software products engineered by Entelgow—focusing on problem domain analysis, architectural patterns, technical solutions, and verified outcomes."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.slice(0, 4).map((project) => (
            <Card key={project.id} className="flex flex-col justify-between p-8 group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="primary">{project.category}</Badge>
                  <span className="text-xs font-mono text-slate-500">
                    {project.techStack.slice(0, 3).join(' • ')}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-gold-600 mt-1">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="font-mono font-semibold uppercase text-gold-600 block">
                      Problem Context
                    </span>
                    <p className="text-slate-700 mt-1 leading-relaxed line-clamp-2">
                      {project.problem}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-mono font-semibold uppercase text-techBlue-600 block">
                      Architected Solution
                    </span>
                    <p className="text-slate-700 mt-1 leading-relaxed line-clamp-2">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1 text-xs">
                  <span className="font-mono uppercase text-slate-500 block mb-1">
                    Verified Engineering Outcomes
                  </span>
                  {project.outcomes.slice(0, 2).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700 font-medium">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-navy-800">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1 group-hover:translate-x-1 transition-all shrink-0 ml-2"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold shadow-md shadow-gold-500/20 transition-all group text-sm"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
