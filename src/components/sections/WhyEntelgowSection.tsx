import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { ShieldCheck, Code2, Lock, Zap } from 'lucide-react';
import { companyData } from '@/data/company';

export const WhyEntelgowSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Engineering Craftsmanship"
          title="Why Work With Entelgow"
          description="We operate as serious software product engineers. Here is what sets our product architecture and software development methodology apart."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.principles.map((p, idx) => (
            <Card key={idx} className="flex flex-col justify-between p-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center font-bold">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
              <Code2 size={20} />
              <span>Strict Code Standards</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every pull request undergoes peer code review, static type checking (`tsc --noEmit`), and automated test suite verification.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-techBlue-600 font-bold text-base">
              <Lock size={20} />
              <span>100% IP & Data Ownership</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              All software source code, assets, and architecture blueprints are fully owned by your company upon project delivery. Zero vendor lock-in.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-base">
              <Zap size={20} />
              <span>Architectural Longevity</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We design software architectures to handle scaling milestones seamlessly—whether servicing 100 or 100,000 concurrent users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
