'use client';

import React, { useState } from 'react';
import {
  Code,
  Server,
  Smartphone,
  Cloud,
  Brain,
  Database,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { Badge } from '@/components/common/Badge';

interface TechCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  stacks: string[];
  purpose: string;
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend & UI',
    icon: <Code size={20} className="text-primary" />,
    stacks: ['Next.js App Router', 'React 18', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL'],
    purpose: 'Sub-400ms page loads, ergonomic accessibility, and crisp multi-device responsive interfaces.',
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: <Server size={20} className="text-primary" />,
    stacks: ['Node.js / Express', 'Go (Golang)', 'Rust Native Core', 'PostgreSQL', 'GraphQL / REST'],
    purpose: 'High-concurrency API throughput, strict database ACID compliance, and zero data race conditions.',
  },
  {
    id: 'mobile',
    name: 'Mobile Engineering',
    icon: <Smartphone size={20} className="text-primary" />,
    stacks: ['React Native', 'Flutter', 'SQLite Delta Sync', 'Native iOS/Android'],
    purpose: '60 FPS cross-platform mobile apps with offline delta sync queues and biometric authentication.',
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: <Cloud size={20} className="text-primary" />,
    stacks: ['Docker / Kubernetes', 'Google Cloud (GCP)', 'AWS Enterprise', 'Terraform IaC', 'GitHub Actions CI/CD'],
    purpose: 'Automated zero-downtime deployment pipelines with auto-scaling container clusters.',
  },
  {
    id: 'ai-data',
    name: 'AI & Data Engineering',
    icon: <Brain size={20} className="text-primary" />,
    stacks: ['PyTorch', 'Vector DBs (Qdrant)', 'LangChain / LlamaIndex', 'Kafka Streams'],
    purpose: 'Autonomous agentic workflows, semantic vector RAG search, and real-time data ingestion pipelines.',
  },
  {
    id: 'database',
    name: 'Databases & Telemetry',
    icon: <Database size={20} className="text-primary" />,
    stacks: ['PostgreSQL', 'Redis In-Memory', 'InfluxDB Time-Series', 'MQTT Brokers'],
    purpose: 'Sub-50ms query responses, persistent time-series logging, and distributed caching layers.',
  },
];

export const TechSpectrum: React.FC = () => {
  const [activeCat, setActiveCat] = useState<TechCategory>(TECH_CATEGORIES[0]);

  return (
    <section className="py-section-padding-lg bg-surface border-t border-glass-border">
      <div className="max-w-container-max mx-auto px-gutter space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge className="mb-2">Battle-Tested Infrastructure</Badge>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Modern Technology Selected for Performance &amp; Longevity
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            We select battle-tested software frameworks and enterprise cloud infrastructure that guarantee high maintainability, security, and long-term business value.
          </p>
        </div>

        {/* Security Readiness Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-surface-deep text-on-surface border border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-primary-container/10 border border-primary/20 text-primary">
              <ShieldCheck size={22} />
            </div>
            <div>
              <span className="font-label-sm text-xs font-bold text-primary uppercase tracking-wider block">
                Enterprise Compliance &amp; Security Standards
              </span>
              <p className="font-body-md text-xs text-on-surface-variant font-medium">
                SOC 2 Type II readiness, OWASP Top 10 security audits, static code analysis, and encrypted data at rest.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 font-label-sm text-xs text-on-surface-variant shrink-0 uppercase">
            <span className="flex items-center gap-1">
              <Lock size={12} className="text-primary" /> AES-256 Encryption
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={12} className="text-primary" /> TLS 1.3
            </span>
          </div>
        </div>

        {/* Interactive Tech Categories & Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block px-2">
              Technology Stack Layers:
            </span>
            {TECH_CATEGORIES.map((cat) => {
              const isActive = activeCat.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'glass-panel border-primary shadow-[0_0_15px_rgba(227,30,36,0.15)] bg-surface-container font-bold text-on-surface'
                      : 'glass-panel text-on-surface-variant hover:text-on-surface border-glass-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded ${isActive ? 'bg-primary-container/10 border border-primary/20' : 'bg-surface-container-high border border-glass-border'}`}>
                      {cat.icon}
                    </div>
                    <span className="font-headline-md text-sm">{cat.name}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 p-6 sm:p-8 rounded-xl glass-panel border border-glass-border space-y-6 shadow-md glow-hover">
            <div className="flex items-center justify-between border-b border-glass-border pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <h3 className="font-headline-md text-lg text-on-surface">{activeCat.name} Engineering Layer</h3>
              </div>
              <span className="font-label-sm text-xs text-on-surface-variant font-semibold uppercase">Production Ready</span>
            </div>

            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              {activeCat.purpose}
            </p>

            <div className="space-y-3">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase font-bold block">
                Primary Frameworks &amp; Tools:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCat.stacks.map((st, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded bg-surface-container border border-glass-border text-on-surface font-label-sm text-xs font-bold flex items-center gap-2 uppercase"
                  >
                    <CheckCircle2 size={13} className="text-primary" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
