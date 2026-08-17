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
import { Badge } from '@/components/common/Badge';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';

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
    icon: <Compass size={22} className="text-primary" />,
    description: 'We audit your business processes, interview key stakeholders, analyze legacy databases, and identify core operational friction points.',
    keyOutputs: ['Business Requirements Document (BRD)', 'Legacy System Audit Report', 'High-Level Architecture Roadmap'],
    qualityGate: 'Signed Mutual Non-Disclosure & Alignment on Business Goals',
  },
  {
    step: '02',
    name: 'Define',
    subtitle: 'Architecture Specification',
    duration: '1 - 2 Weeks',
    icon: <FileCode2 size={22} className="text-primary" />,
    description: 'We define the technical architecture, DB schemas, API specs, cloud topology, security protocols, and exact project milestone timeline.',
    keyOutputs: ['Database Schema & Entity Diagrams', 'API Specification (OpenAPI / GraphQL)', 'Sprint Backlog & Fixed Scope Quote'],
    qualityGate: 'Architecture Peer-Review & Security Sign-off',
  },
  {
    step: '03',
    name: 'Design',
    subtitle: 'Product UX & Interface Systems',
    duration: '2 - 3 Weeks',
    icon: <Palette size={22} className="text-primary" />,
    description: 'We design high-fidelity, ergonomic interfaces and click-through interactive prototypes optimized for speed, clarity, and zero user friction.',
    keyOutputs: ['Interactive Figma Prototype', 'Design System & Component Tokens', 'User Workflow Wireframes'],
    qualityGate: 'Design Usability Testing & Stakeholder Approval',
  },
  {
    step: '04',
    name: 'Build',
    subtitle: 'Agile Software Engineering',
    duration: '6 - 12 Weeks',
    icon: <Code2 size={22} className="text-primary" />,
    description: 'We engineer production-grade code in bi-weekly sprints with automated CI/CD pipelines, strict TypeScript compilation, and 95%+ test coverage.',
    keyOutputs: ['Production Source Code Repository', 'Automated Test Suites (Unit & E2E)', 'Weekly Staging Build Demos'],
    qualityGate: '100% Passing Automated Tests & Security Scan',
  },
  {
    step: '05',
    name: 'Launch',
    subtitle: 'Zero-Downtime Deployment',
    duration: '1 Week',
    icon: <Rocket size={22} className="text-primary" />,
    description: 'We deploy the software to production cloud clusters with automated rollback triggers, zero data loss migration, and team onboarding.',
    keyOutputs: ['Production Kubernetes / Edge Cluster', '100% IP & Repository Transfer', 'Operations Manual & Team Training'],
    qualityGate: 'Zero-Downtime Migration & Uptime SLA Verification',
  },
  {
    step: '06',
    name: 'Improve',
    subtitle: 'SLA Support & Performance Optimization',
    duration: 'Ongoing',
    icon: <LineChart size={22} className="text-primary" />,
    description: 'We continuously monitor system telemetry, optimize database queries, apply security patches, and release feature iterations.',
    keyOutputs: ['24/7 Production System Monitoring', 'Quarterly Query & Security Audits', 'Iterative Feature Enhancement Sprints'],
    qualityGate: 'Guaranteed 99.99% Production Uptime SLA',
  },
];

export const InteractiveProcess: React.FC = () => {
  const [activeStage, setActiveStage] = useState<ProcessStage>(STAGES[0]);
  const { openPlanner } = useProjectPlanner();

  return (
    <section className="py-section-padding-lg bg-surface border-t border-b border-glass-border relative">
      <div className="max-w-container-max mx-auto px-gutter space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge className="mb-2">Agile Engineering Journey</Badge>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            A 6-Stage Process Built for Quality &amp; Transparency
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Our software engineering lifecycle replaces guesswork with predictable milestone delivery, automated quality gates, and 100% IP code ownership.
          </p>
        </div>

        {/* Connected Stage Navigator Bar */}
        <div className="p-3 rounded-xl glass-panel border border-glass-border">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {STAGES.map((st) => {
              const isActive = activeStage.step === st.step;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStage(st)}
                  className={`p-3 rounded transition-all text-left border ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container border-primary shadow-[0_0_15px_rgba(227,30,36,0.3)]'
                      : 'glass-panel text-on-surface-variant hover:text-on-surface border-glass-border'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-label-sm font-bold ${isActive ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                      STAGE {st.step}
                    </span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-on-primary-container animate-ping" />}
                  </div>
                  <div className="text-sm font-bold mt-1 font-headline-md truncate">{st.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Card */}
        <div className="p-6 sm:p-8 rounded-xl glass-panel border border-glass-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-start glow-hover">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded bg-primary-container/10 border border-primary/20 text-primary">
                {activeStage.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-xs font-bold text-primary uppercase">
                    STAGE {activeStage.step} • {activeStage.subtitle}
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl text-on-surface mt-0.5">{activeStage.name} Phase</h3>
              </div>
            </div>

            <p className="font-body-lg text-on-surface-variant text-sm sm:text-base leading-relaxed font-normal">
              {activeStage.description}
            </p>

            <div className="p-4 rounded bg-surface-container border border-glass-border space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-label-sm text-xs font-bold uppercase">
                <Clock size={14} className="text-primary" />
                <span>Estimated Timeframe: {activeStage.duration}</span>
              </div>
              <p className="text-xs text-on-surface-variant font-medium">
                Direct communication via dedicated Slack/Teams channel and weekly video engineering standups.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            {/* Key Deliverables Artifacts */}
            <div className="p-5 rounded bg-surface-deep text-on-surface border border-glass-border space-y-3">
              <span className="font-label-sm text-xs text-primary font-bold uppercase tracking-wider block">
                Concrete Deliverables &amp; Artifacts:
              </span>
              <div className="space-y-2 text-xs">
                {activeStage.keyOutputs.map((out, i) => (
                  <div key={i} className="flex items-center gap-2 text-on-surface-variant">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    <span className="font-label-sm text-[11px]">{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Gate */}
            <div className="p-5 rounded bg-primary-container/10 border border-primary/30 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-label-sm text-xs font-bold uppercase">
                <ShieldCheck size={16} className="text-primary" />
                <span>Quality Assurance Gate:</span>
              </div>
              <p className="text-xs text-on-surface font-semibold leading-relaxed">
                {activeStage.qualityGate}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={openPlanner}
                className="bg-primary-container text-on-primary-container font-headline-md text-[14px] uppercase px-6 py-3 rounded font-bold hover:shadow-[0_0_15px_rgba(227,30,36,0.3)] transition-all flex items-center gap-2"
              >
                <span>Start Project Discovery</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
