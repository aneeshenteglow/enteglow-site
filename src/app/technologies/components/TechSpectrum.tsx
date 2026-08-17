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
import { SectionHeader } from '@/components/common/SectionHeader';

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
    icon: <Code size={20} className="text-blue-600" />,
    stacks: ['Next.js App Router', 'React 18', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL'],
    purpose: 'Sub-400ms page loads, ergonomic accessibility, and crisp multi-device responsive interfaces.',
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: <Server size={20} className="text-emerald-600" />,
    stacks: ['Node.js / Express', 'Go (Golang)', 'Rust Native Core', 'PostgreSQL', 'GraphQL / REST'],
    purpose: 'High-concurrency API throughput, strict database ACID compliance, and zero data race conditions.',
  },
  {
    id: 'mobile',
    name: 'Mobile Engineering',
    icon: <Smartphone size={20} className="text-cyan-600" />,
    stacks: ['React Native', 'Flutter', 'SQLite Delta Sync', 'Native iOS/Android'],
    purpose: '60 FPS cross-platform mobile apps with offline delta sync queues and biometric authentication.',
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: <Cloud size={20} className="text-indigo-600" />,
    stacks: ['Docker / Kubernetes', 'Google Cloud (GCP)', 'AWS Enterprise', 'Terraform IaC', 'GitHub Actions CI/CD'],
    purpose: 'Automated zero-downtime deployment pipelines with auto-scaling container clusters.',
  },
  {
    id: 'ai-data',
    name: 'AI & Data Engineering',
    icon: <Brain size={20} className="text-violet-600" />,
    stacks: ['PyTorch', 'Vector DBs (Qdrant)', 'LangChain / LlamaIndex', 'Kafka Streams'],
    purpose: 'Autonomous agentic workflows, semantic vector RAG search, and real-time data ingestion pipelines.',
  },
  {
    id: 'database',
    name: 'Databases & Telemetry',
    icon: <Database size={20} className="text-amber-600" />,
    stacks: ['PostgreSQL', 'Redis In-Memory', 'InfluxDB Time-Series', 'MQTT Brokers'],
    purpose: 'Sub-50ms query responses, persistent time-series logging, and distributed caching layers.',
  },
];

export const TechSpectrum: React.FC = () => {
  const [activeCat, setActiveCat] = useState<TechCategory>(TECH_CATEGORIES[0]);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Battle-Tested Infrastructure"
          title="Modern Technology Selected for Performance & Longevity"
          description="We select battle-tested software frameworks and enterprise cloud infrastructure that guarantee high maintainability, security, and long-term business value."
        />

        {/* Security Readiness Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-navy-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gold-500/20 border border-gold-500/40 text-gold-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-wider block">
                Enterprise Compliance & Security Standards
              </span>
              <p className="text-xs text-slate-300 font-medium">
                SOC 2 Type II readiness, OWASP Top 10 security audits, static code analysis, and encrypted data at rest.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
            <span className="flex items-center gap-1">
              <Lock size={12} className="text-gold-400" /> AES-256 Encryption
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-400" /> TLS 1.3
            </span>
          </div>
        </div>

        {/* Interactive Tech Categories & Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block px-2">
              Technology Stack Layers:
            </span>
            {TECH_CATEGORIES.map((cat) => {
              const isActive = activeCat.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between border ${
                    isActive
                      ? 'bg-navy-950 text-white border-gold-500 shadow-md font-bold'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-navy-900 border border-slate-800' : 'bg-white border border-slate-200'}`}>
                      {cat.icon}
                    </div>
                    <span className="text-sm font-bold">{cat.name}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500" />
                <h3 className="text-lg font-bold text-navy-900">{activeCat.name} Engineering Layer</h3>
              </div>
              <span className="text-xs font-mono text-slate-500 font-semibold">Production Ready</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {activeCat.purpose}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase font-bold block">
                Primary Frameworks & Tools:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCat.stacks.map((st, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-navy-900 font-mono text-xs font-bold shadow-xs hover:border-gold-500 transition-colors flex items-center gap-2"
                  >
                    <CheckCircle2 size={13} className="text-gold-500" />
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



