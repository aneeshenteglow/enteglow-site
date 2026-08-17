'use client';

import React, { useState } from 'react';
import {
  Compass,
  FileCode2,
  Palette,
  Code2,
  Rocket,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

interface ProcessStage {
  step: string;
  name: string;
  subtitle: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
  keyOutputs: string[];
  qualityGate: string;
}

const STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'Understand',
    subtitle: 'Business Problem Discovery',
    duration: '1 - 2 Weeks',
    icon: <Compass size={22} className="text-amber-600" />,
    description: 'We audit your business processes, interview key stakeholders, analyze legacy databases, and identify core operational friction points.',
    keyOutputs: ['Business Requirements Document (BRD)', 'Legacy System Audit Report', 'High-Level Architecture Roadmap'],
    qualityGate: 'Signed Mutual Non-Disclosure & Alignment on Business Goals',
  },
  {
    step: '02',
    name: 'Define',
    subtitle: 'Architecture Specification',
    duration: '1 - 2 Weeks',
    icon: <FileCode2 size={22} className="text-blue-600" />,
    description: 'We define the technical architecture, DB schemas, API specs, cloud topology, security protocols, and exact project milestone timeline.',
    keyOutputs: ['Database Schema & Entity Diagrams', 'API Specification (OpenAPI / GraphQL)', 'Sprint Backlog & Fixed Scope Quote'],
    qualityGate: 'Architecture Peer-Review & Security Sign-off',
  },
  {
    step: '03',
    name: 'Design',
    subtitle: 'Product UX & Interface Systems',
    duration: '2 - 3 Weeks',
    icon: <Palette size={22} className="text-purple-600" />,
    description: 'We design high-fidelity, ergonomic interfaces and click-through interactive prototypes optimized for speed, clarity, and zero user friction.',
    keyOutputs: ['Interactive Figma Prototype', 'Design System & Component Tokens', 'User Workflow Wireframes'],
    qualityGate: 'Design Usability Testing & Stakeholder Approval',
  },
  {
    step: '04',
    name: 'Build',
    subtitle: 'Agile Software Engineering',
    duration: '6 - 12 Weeks',
    icon: <Code2 size={22} className="text-emerald-600" />,
    description: 'We engineer production-grade code in bi-weekly sprints with automated CI/CD pipelines, strict TypeScript compilation, and 95%+ test coverage.',
    keyOutputs: ['Production Source Code Repository', 'Automated Test Suites (Unit & E2E)', 'Weekly Staging Build Demos'],
    qualityGate: '100% Passing Automated Tests & Security Scan',
  },
  {
    step: '05',
    name: 'Launch',
    subtitle: 'Zero-Downtime Deployment',
    duration: '1 Week',
    icon: <Rocket size={22} className="text-rose-600" />,
    description: 'We deploy the software to production cloud clusters with automated rollback triggers, zero data loss migration, and team onboarding.',
    keyOutputs: ['Production Kubernetes / Edge Cluster', '100% IP & Repository Transfer', 'Operations Manual & Team Training'],
    qualityGate: 'Zero-Downtime Migration & Uptime SLA Verification',
  },
  {
    step: '06',
    name: 'Improve',
    subtitle: 'SLA Support & Performance Optimization',
    duration: 'Ongoing',
    icon: <LineChart size={22} className="text-yellow-600" />,
    description: 'We continuously monitor system telemetry, optimize database queries, apply security patches, and release feature iterations.',
    keyOutputs: ['24/7 Production System Monitoring', 'Quarterly Query & Security Audits', 'Iterative Feature Enhancement Sprints'],
    qualityGate: 'Guaranteed 99.99% Production Uptime SLA',
  },
];

export const InteractiveProcess: React.FC = () => {
  const [activeStage, setActiveStage] = useState<ProcessStage>(STAGES[0]);
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Agile Engineering Journey"
            title="A 6-Stage Process Built for Quality & Transparency"
            description="Our software engineering lifecycle replaces guesswork with predictable milestone delivery, automated quality gates, and 100% IP code ownership."
          />

          {/* Connected Illuminated Stage Navigator Bar */}
          <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {STAGES.map((st) => {
                const isActive = activeStage.step === st.step;
                return (
                  <button
                    key={st.step}
                    onClick={() => setActiveStage(st)}
                    className={`p-3 rounded-xl transition-all text-left border ${
                      isActive
                        ? 'bg-navy-950 text-white border-gold-500 shadow-lg shadow-gold-500/10'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-gold-400' : 'text-slate-400'}`}>
                        STAGE {st.step}
                      </span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />}
                    </div>
                    <div className="text-sm font-bold mt-1 font-mono truncate">{st.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detailed Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gold-100 border border-gold-300 text-gold-800">
                  {activeStage.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-gold-600 uppercase">
                      STAGE {activeStage.step} • {activeStage.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mt-0.5">{activeStage.name} Phase</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {activeStage.description}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-navy-900 font-mono text-xs font-bold uppercase">
                  <Clock size={14} className="text-gold-500" />
                  <span>Estimated Timeframe: {activeStage.duration}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Direct communication via dedicated Slack/Teams channel and weekly video engineering standups.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {/* Key Deliverables Artifacts */}
              <div className="p-5 rounded-2xl bg-navy-950 text-white border border-slate-800 space-y-3">
                <span className="text-xs font-mono text-gold-400 font-bold uppercase tracking-wider block">
                  Concrete Deliverables & Artifacts:
                </span>
                <div className="space-y-2 text-xs">
                  {activeStage.keyOutputs.map((out, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 size={14} className="text-gold-400 shrink-0" />
                      <span className="font-mono text-[11px]">{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Gate */}
              <div className="p-5 rounded-2xl bg-gold-50 border border-gold-300 space-y-1.5">
                <div className="flex items-center gap-2 text-gold-800 font-mono text-xs font-bold uppercase">
                  <ShieldCheck size={16} className="text-gold-600" />
                  <span>Quality Assurance Gate:</span>
                </div>
                <p className="text-xs text-navy-950 font-semibold leading-relaxed">
                  {activeStage.qualityGate}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setPlannerOpen(true)}
                  className="px-6 py-3 rounded-xl bg-navy-950 text-white font-bold text-xs hover:bg-slate-900 transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Start Project Discovery</span>
                  <ArrowRight size={14} className="text-gold-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};



