'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Zap, ChevronRight, ArrowDownRight, ShieldCheck } from 'lucide-react';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

interface Scenario {
  id: string;
  problem: string;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  roiMetric: string;
  deliverables: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 'automate',
    problem: 'Siloed spreadsheets, manual data entry, and slow processing times',
    category: 'Operational Automation',
    title: 'Custom Workflow Automation & Unified Portals',
    challenge: 'Operations teams lose hundreds of hours every month copying data across disconnected systems, resulting in human errors and processing delays.',
    solution: 'We engineer unified business portals and automated event pipelines that connect inventory, customer records, and financial accounting into a single real-time system.',
    outcome: 'Eliminates repetitive manual entry, speeds up cross-system throughput by 10x, and provides real-time executive dashboards.',
    roiMetric: '70% Reduction in Admin Overhead',
    deliverables: ['Custom Operations Portal', 'Automated REST/gRPC API Bridges', 'Real-time Analytics Dashboard', 'Role-Based Access Control'],
  },
  {
    id: 'saas',
    problem: 'Long development timelines delaying new software product launches',
    category: 'Product Engineering',
    title: 'Enterprise Multi-Tenant SaaS Platforms',
    challenge: 'Founders and product leaders need to launch new digital software products quickly with scalable security, tenant isolation, and modern UX.',
    solution: 'We build production-ready multi-tenant SaaS products with Next.js, PostgreSQL RLS, white-label branding, and sub-second page performance.',
    outcome: 'Accelerates time-to-market while giving enterprise clients confidence in SOC2-level tenant data security.',
    roiMetric: '3-Month Launch Velocity',
    deliverables: ['Multi-Tenant SaaS Web App', 'Subscription & Billing Engine', 'SAML/OAuth Single Sign-On', 'Production CI/CD Pipelines'],
  },
  {
    id: 'field',
    problem: 'Incomplete inspection data & paper logs from remote job sites',
    category: 'Mobile Workforce',
    title: 'Offline-First Mobile Operations Applications',
    challenge: 'Field technicians operating in low-signal environments cannot sync inspection checklists, photo evidence, or signatures back to headquarters.',
    solution: 'We engineer cross-platform iOS & Android mobile apps with local SQLite delta sync queues that store data locally and sync automatically when network returns.',
    outcome: 'Guarantees 100% field compliance capture and real-time dispatching capability for central management.',
    roiMetric: '100% Data Capture Reliability',
    deliverables: ['Offline-First Mobile App', 'Geotagged Evidence Capture', 'Digital Signature Engine', 'HQ Dispatch Command Center'],
  },
  {
    id: 'legacy',
    problem: 'Brittle legacy monoliths slowing innovation and threatening security',
    category: 'System Modernization',
    title: 'Legacy Monolith Refactoring & API Gateways',
    challenge: 'Decades-old legacy codebases are expensive to maintain, vulnerable to security breaches, and impossible to integrate with modern APIs.',
    solution: 'We execute phased strangler-fig refactoring, extracting core business logic into high-performance microservices and modern React/TypeScript frontends.',
    outcome: 'Restores developer agility, lowers hosting costs, and eliminates system crash risks without business downtime.',
    roiMetric: '50% Lower Hosting & Infra Cost',
    deliverables: ['Phased API Migration Plan', 'Modern Frontend Architecture', 'Zero-Downtime Database Migration', 'Automated Test Suites'],
  },
  {
    id: 'ai',
    problem: 'Troves of unstructured contracts and PDF documents sitting idle',
    category: 'Agentic AI Integration',
    title: 'Domain AI Document Search & Vector RAG Engines',
    challenge: 'Teams waste hours manually searching through thousands of PDF contracts, blueprints, and compliance filings for critical data points.',
    solution: 'We build domain vector search platforms using high-dimensional embeddings and autonomous LLM agents that find answers and perform actions with exact citations.',
    outcome: 'Turns static enterprise knowledge bases into interactive AI assistants with 100% citation traceability.',
    roiMetric: '90% Faster Document Auditing',
    deliverables: ['Vector Database Indexing (Qdrant)', 'Custom RAG Reasoning Pipeline', 'Source Citation Verification UI', 'ERP Action Execution Tools'],
  },
];

export const SolutionsSection: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<Scenario>(SCENARIOS[0]);
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-semibold">
              <Sparkles size={14} className="text-gold-600" />
              <span>BUSINESS PROBLEMS → ENGINEERED SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Turn Operational Friction Into Scalable Software
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Select your current operational bottleneck below to see how our engineering team turns business problems into high-performing software systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Problem Scenarios List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Select Operational Bottleneck:
                </span>
                <span className="text-[11px] font-mono text-gold-600 font-semibold flex items-center gap-1">
                  <ArrowDownRight size={13} />
                  Transformation Matrix
                </span>
              </div>

              {SCENARIOS.map((scenario) => {
                const isSelected = activeScenario.id === scenario.id;
                return (
                  <div
                    key={scenario.id}
                    onClick={() => setActiveScenario(scenario)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-navy-950 text-white border-gold-500 shadow-xl shadow-gold-500/10'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                          isSelected ? 'text-gold-400' : 'text-gold-600'
                        }`}>
                          {scenario.category}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base leading-snug">
                          {scenario.problem}
                        </h3>
                      </div>
                      <ChevronRight size={18} className={`shrink-0 mt-1 transition-transform ${
                        isSelected ? 'text-gold-400 translate-x-1' : 'text-slate-400'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Solution Card Detail */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-navy-950 text-white border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <span className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-mono font-bold">
                    {activeScenario.category} Transformation
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                    <Zap size={14} />
                    {activeScenario.roiMetric}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-white">
                    {activeScenario.title}
                  </h3>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-bold flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-red-400" /> Business Friction:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300">{activeScenario.challenge}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-gold-400 uppercase font-bold">Engineered Software Solution:</span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {activeScenario.solution}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold">Core Solution Deliverables:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeScenario.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                        <CheckCircle2 size={15} className="text-gold-500 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    Target Outcome: <span className="text-white font-medium">{activeScenario.outcome}</span>
                  </p>
                  <button
                    onClick={() => setPlannerOpen(true)}
                    className="px-4 py-4 rounded-xl bg-gold-500 text-slate-950 font-bold text-xs hover:bg-gold-400 transition-colors flex items-center gap-2 shadow-glow-gold"
                  >
                    <span>Scope This Solution</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};

