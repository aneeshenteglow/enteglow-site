'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  Monitor,
  Smartphone,
  Globe,
  Bot,
  Cpu,
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { ThreeEcosystemCanvas, EcosystemNodeData, ECOSYSTEM_NODES } from '@/components/common/ThreeEcosystemCanvas';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

export const HeroSection: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [activeNode, setActiveNode] = useState<EcosystemNodeData>(ECOSYSTEM_NODES[0]);

  return (
    <>
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 bg-tech-grid overflow-hidden">
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-techBlue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Business Value Proposition */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-semibold tracking-wide shadow-sm">
                <Sparkles size={14} className="text-gold-600" />
                <span>Enterprise Digital Product Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.12]">
                Engineering{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600">
                  High-Impact
                </span>{' '}
                Software Solutions For Growing Businesses
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                We partner with business leaders, CTOs, and product teams to turn complex operational bottlenecks into reliable software products—unifying Web SaaS Platforms, Mobile Field Apps, Native Workstations, Agentic AI, and IoT Systems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => setPlannerOpen(true)}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  className="shadow-lg shadow-gold-500/25 text-slate-950 font-bold"
                >
                  Start a Project
                </Button>

                <Link
                  href="/projects"
                  className="px-6 py-3.5 rounded-xl border border-slate-300 text-navy-900 font-semibold text-sm hover:border-gold-500 hover:text-gold-600 hover:bg-gold-50/50 transition-all flex items-center gap-2"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Credibility metrics bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-navy-900 font-extrabold text-xl sm:text-2xl font-mono">
                    <ShieldCheck size={18} className="text-gold-500 shrink-0" />
                    <span>99.8%</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">On-Time Delivery</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-navy-900 font-extrabold text-xl sm:text-2xl font-mono">
                    <TrendingUp size={18} className="text-emerald-500 shrink-0" />
                    <span>40%+</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Avg Operations ROI</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-navy-900 font-extrabold text-xl sm:text-2xl font-mono">
                    <Zap size={18} className="text-techBlue-600 shrink-0" />
                    <span>100+</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Systems Integrated</p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Three.js Interactive Canvas Container */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-navy-950 border border-slate-800 shadow-2xl p-3 overflow-hidden">
                {/* Mode Selector Pill Buttons */}
                <div className="p-2 rounded-2xl bg-navy-900/90 border border-slate-800 flex items-center justify-between flex-wrap gap-1.5 mb-2 z-10 relative">
                  <span className="text-[11px] font-mono text-slate-400 px-2 font-semibold">
                    SYSTEM NODES:
                  </span>
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                    {ECOSYSTEM_NODES.map((node) => {
                      const isActive = activeNode.id === node.id;
                      return (
                        <button
                          key={node.id}
                          onClick={() => setActiveNode(node)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                            isActive
                              ? 'bg-gold-500 text-slate-950 shadow-sm font-bold'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          {node.id === 'desktop' && <Monitor size={14} />}
                          {node.id === 'mobile' && <Smartphone size={14} />}
                          {node.id === 'web' && <Globe size={14} />}
                          {node.id === 'ai' && <Bot size={14} />}
                          {node.id === 'iot' && <Cpu size={14} />}
                          <span>{node.label.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Three.js Interactive Canvas */}
                <div className="relative rounded-2xl overflow-hidden bg-navy-990 border border-slate-800/80">
                  <ThreeEcosystemCanvas
                    activeNodeId={activeNode.id}
                    onSelectNode={(node) => setActiveNode(node)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Planner Modal */}
      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};

