'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Badge } from '@/components/common/Badge';
import { Monitor, Smartphone, Globe, Bot, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PlatformStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge: string;
  description: string;
  techStack: string[];
  keyHighlights: string[];
  mockUI: React.ReactNode;
}

export const PlatformStorytelling: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  const stages: PlatformStage[] = [
    {
      id: 'desktop',
      step: '01',
      title: 'Desktop Workstations & Native Binaries',
      subtitle: 'Low-latency, offline-first applications for Windows, macOS, and Linux.',
      icon: <Monitor size={22} className="text-gold-600" />,
      badge: 'Desktop Discipline',
      description:
        'When web browsers hit memory limits or offline constraints, Entelgow builds high-frequency desktop applications using Tauri, Rust, Electron, and C#/.NET.',
      techStack: ['Tauri', 'Rust', 'Electron', 'C# / .NET', 'SQLite'],
      keyHighlights: [
        'Hardware driver & peripheral USB/Serial device access',
        'Offline local database file storage & zero-downtime background sync',
        'Sub-16ms WebGL & Canvas chart rendering for high-density datasets'
      ],
      mockUI: (
        <div className="space-y-3 p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs font-mono text-slate-200">
          <div className="flex items-center justify-between border-b border-navy-800 pb-2 text-[11px] text-slate-400">
            <span>[NATIVE DESKTOP BINARY] TAURI + RUST CORE</span>
            <span className="text-gold-400">RAM: 14 MB</span>
          </div>
          <p className="text-slate-300">&gt; Memory-isolated Rust thread handling local SQLite indexing...</p>
          <p className="text-emerald-400">&gt; 50,000 telemetry records processed without UI thread freezing.</p>
        </div>
      )
    },
    {
      id: 'mobile',
      step: '02',
      title: 'Mobile Applications & Field Operations',
      subtitle: 'Responsive iOS and Android applications built for real-world reliability.',
      icon: <Smartphone size={22} className="text-techBlue-600" />,
      badge: 'Mobile Discipline',
      description:
        'We build mobile products equipped with offline checklist completion, background data syncing, biometric security, and camera inspection tools.',
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'SQLite'],
      keyHighlights: [
        'Bi-directional delta sync preventing data loss in subterranean sites',
        'Biometric authentication & on-device encrypted storage',
        'Smooth 60 FPS transitions across both iOS and Android'
      ],
      mockUI: (
        <div className="space-y-3 p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs font-mono text-slate-200">
          <div className="flex items-center justify-between border-b border-navy-800 pb-2 text-[11px] text-slate-400">
            <span>[MOBILE FIELD ENGINE] REACT NATIVE</span>
            <span className="text-cyan-400">STATUS: OFFLINE SYNC OK</span>
          </div>
          <p className="text-slate-300">&gt; Remote technician checklist logged locally to SQLite queue.</p>
          <p className="text-emerald-400">&gt; Automatic delta sync queued for background transmission.</p>
        </div>
      )
    },
    {
      id: 'web',
      step: '03',
      title: 'Web Platforms & Enterprise Portals',
      subtitle: 'Scalable B2B SaaS web applications with React Server Components.',
      icon: <Globe size={22} className="text-purple-600" />,
      badge: 'Web Discipline',
      description:
        'Next.js App Router applications featuring strict tenant isolation, Server Component data fetching, real-time WebSockets, and accessible UI design systems.',
      techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      keyHighlights: [
        'Zero client-side request waterfall overhead via Server Components',
        'PostgreSQL Row-Level Security (RLS) guaranteeing tenant isolation',
        'Instant edge page rendering with Lighthouse 95+ performance scores'
      ],
      mockUI: (
        <div className="space-y-3 p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs font-mono text-slate-200">
          <div className="flex items-center justify-between border-b border-navy-800 pb-2 text-[11px] text-slate-400">
            <span>[WEB PLATFORM ENGINE] NEXT.JS APP ROUTER</span>
            <span className="text-purple-400">RSC SERVER FETCH</span>
          </div>
          <p className="text-slate-300">&gt; Tenant RLS session verified. Sub-200ms initial response time.</p>
          <p className="text-emerald-400">&gt; WebSocket channel established for live operations feed.</p>
        </div>
      )
    },
    {
      id: 'ai',
      step: '04',
      title: 'Autonomous AI Agents & RAG',
      subtitle: 'Domain artificial intelligence embedded directly into software workflows.',
      icon: <Bot size={22} className="text-emerald-600" />,
      badge: 'AI Discipline',
      description:
        'We build intelligent AI agents capable of semantic vector search, complex document reasoning, and executing multi-step external API actions.',
      techStack: ['Python', 'LangChain', 'LlamaIndex', 'Qdrant', 'OpenAI / Claude API'],
      keyHighlights: [
        'Domain Retrieval-Augmented Generation (RAG) over enterprise knowledge',
        'Autonomous tool-calling agents with strict execution guardrails',
        'Structured JSON payload extraction ready for ERP consumption'
      ],
      mockUI: (
        <div className="space-y-3 p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs font-mono text-slate-200">
          <div className="flex items-center justify-between border-b border-navy-800 pb-2 text-[11px] text-slate-400">
            <span>[AI AGENT NODE] RAG VECTOR REASONING</span>
            <span className="text-emerald-400">SCORE: 0.96 MATCH</span>
          </div>
          <p className="text-slate-300">&gt; Searching vector index across 1,536 dimensions...</p>
          <p className="text-emerald-400">&gt; Clause #18 extracted. API tool execution confirmed with audit log.</p>
        </div>
      )
    },
    {
      id: 'iot',
      step: '05',
      title: 'IoT Telemetry & Connected Devices',
      subtitle: 'End-to-end telemetry ingestion, MQTT gateways, and sensor monitoring.',
      icon: <Cpu size={22} className="text-gold-600" />,
      badge: 'IoT Discipline',
      description:
        'Entelgow bridges hardware and cloud. We build high-throughput telemetry brokers, edge device parsers, time-series engines, and real-time control dashboards.',
      techStack: ['MQTT', 'EMQX', 'InfluxDB', 'Python', 'C++ / Embedded C'],
      keyHighlights: [
        'Sub-second telemetry ingestion handling thousands of hardware nodes',
        'Store-and-forward edge gateway buffering during network drops',
        'Real-time threshold alerting with instant WebSocket UI push'
      ],
      mockUI: (
        <div className="space-y-3 p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs font-mono text-slate-200">
          <div className="flex items-center justify-between border-b border-navy-800 pb-2 text-[11px] text-slate-400">
            <span>[IOT TELEMETRY NODE] MQTT BROKER INGESTION</span>
            <span className="text-gold-400">NODES: 248 ONLINE</span>
          </div>
          <p className="text-slate-300">&gt; Binary Protobuf payload parsed from Modbus RTU gateway...</p>
          <p className="text-emerald-400">&gt; Telemetry written to InfluxDB. Zero data loss recorded.</p>
        </div>
      )
    }
  ];

  const currentStage = stages[activeStageIdx];

  return (
    <section className="py-20 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Platform Convergence"
          title="One Engineering Team. Multiple Platforms."
          description="Click or scroll through the platform stages to see how Entelgow seamlessly connects Desktop, Mobile, Web, AI, and IoT into one unified software ecosystem."
        />

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {stages.map((stg, idx) => {
            const isActive = activeStageIdx === idx;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStageIdx(idx)}
                className={`p-3 rounded-xl text-xs font-mono font-semibold transition-all flex flex-col items-center gap-1.5 ${
                  isActive
                    ? 'bg-gold-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className={isActive ? 'text-white' : ''}>{stg.icon}</span>
                  <span className={isActive ? 'text-white/80' : 'text-slate-400'}>{stg.step}</span>
                </div>
                <span className="truncate w-full text-center">{stg.badge}</span>
              </button>
            );
          })}
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 space-y-8 shadow-xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-gold-100 border border-gold-200 text-gold-600 shrink-0 mt-1">
                {currentStage.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">Stage {currentStage.step} of 05</span>
                  <Badge variant="primary">{currentStage.badge}</Badge>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-1">
                  {currentStage.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  {currentStage.subtitle}
                </p>
              </div>
            </div>

            <Link
              href={`/services#${currentStage.id}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gold-600 hover:text-gold-700 transition-colors shrink-0"
            >
              <span>Explore Specifications</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentStage.description}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase text-slate-500 block">
                  Key Architectural Highlights
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentStage.keyHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-xs font-mono text-slate-500 mr-2">Core Tech Stack:</span>
                {currentStage.techStack.map((tech, i) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-navy-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              {currentStage.mockUI}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
