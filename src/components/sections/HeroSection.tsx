'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Monitor,
  Smartphone,
  Globe,
  Bot,
  Cpu,
  CheckCircle2,
  Play,
  Pause,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';

type ModeType = 'desktop' | 'mobile' | 'web' | 'ai' | 'iot';

export const HeroSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<ModeType>('desktop');
  const [autoPlay, setAutoPlay] = useState(true);

  const modes: Array<{ id: ModeType; label: string; icon: React.ReactNode }> = [
    { id: 'desktop', label: 'Desktop Workstation', icon: <Monitor size={15} /> },
    { id: 'mobile', label: 'Mobile Product', icon: <Smartphone size={15} /> },
    { id: 'web', label: 'Web Platform', icon: <Globe size={15} /> },
    { id: 'ai', label: 'AI Agent System', icon: <Bot size={15} /> },
    { id: 'iot', label: 'IoT Network', icon: <Cpu size={15} /> },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveMode((prev) => {
        const order: ModeType[] = ['desktop', 'mobile', 'web', 'ai', 'iot'];
        const nextIdx = (order.indexOf(prev) + 1) % order.length;
        return order[nextIdx];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 bg-radial-gold overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 border border-gold-300 text-gold-700 text-xs font-semibold tracking-wide">
              <Sparkles size={14} className="text-gold-600" />
              <span>Software Engineering Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.12]">
              Transforming{' '}
              <span className="text-gold-500 underline decoration-gold-300 decoration-wavy underline-offset-8">
                Businesses
              </span>{' '}
              Through Software Innovation
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Entelgow designs, architects, and engineers complete digital software products—connecting Desktop Apps, Mobile Interfaces, Web SaaS, AI Agents, and IoT Telemetry into one high-performance system.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-5">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                className="shadow-lg shadow-gold-500/25"
              >
                Get Started
              </Button>

              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="flex items-center gap-3 group text-navy-900 hover:text-gold-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-600 border border-gold-500/40 flex items-center justify-center pulse-play-ring group-hover:bg-gold-500 group-hover:text-white transition-all">
                  {autoPlay ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                </div>
                <span className="text-sm font-bold font-sans">
                  {autoPlay ? 'Pause Live Demo' : 'Watch Interactive Demo'}
                </span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-navy-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-gold-500" />
                <span>Desktop & Web Platforms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-gold-500" />
                <span>Mobile & Field Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-gold-500" />
                <span>AI & IoT Solutions</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-2 rounded-3xl bg-slate-100 border border-slate-200 shadow-2xl">
              <div className="p-2 rounded-2xl bg-white border border-slate-200 flex items-center justify-between flex-wrap gap-1.5 mb-2">
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                  {modes.map((m) => {
                    const isActive = activeMode === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => {
                          setActiveMode(m.id);
                          setAutoPlay(false);
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-gold-500 text-white shadow-sm'
                            : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                        }`}
                      >
                        <span>{m.icon}</span>
                        <span className="hidden sm:inline">{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 min-h-[360px] flex flex-col justify-between shadow-sm relative overflow-hidden">
                {activeMode === 'desktop' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Monitor size={18} className="text-gold-500" />
                        <span className="text-xs font-mono font-bold text-navy-900">
                          Tauri & Rust Native Desktop Workstation
                        </span>
                      </div>
                      <Badge variant="primary">Low RAM Footprint</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-mono text-slate-500 uppercase">Memory Footprint</span>
                        <p className="text-xl font-bold text-navy-900 font-mono mt-0.5">14.2 MB RAM</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-mono text-slate-500 uppercase">Local SQLite Stream</span>
                        <p className="text-xl font-bold text-gold-600 font-mono mt-0.5">50,000 evt/s</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 text-slate-200 font-mono text-xs space-y-1">
                      <p className="text-gold-400">&gt; Memory-isolated Rust worker thread active</p>
                      <p className="text-emerald-400">&gt; Sub-16ms UI render loop verified (60 FPS)</p>
                    </div>
                  </div>
                )}

                {activeMode === 'mobile' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Smartphone size={18} className="text-techBlue-600" />
                        <span className="text-xs font-mono font-bold text-navy-900">
                          React Native Field Operations App
                        </span>
                      </div>
                      <Badge variant="cyan">60 FPS Offline Sync</Badge>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-bold text-navy-900">
                        <span>Field Checklist Inspection</span>
                        <span className="text-emerald-600 font-mono">Completed</span>
                      </div>
                      <p className="text-slate-600">Geotagged photos & biometric signature stored locally in offline queue.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 text-slate-200 font-mono text-xs space-y-1">
                      <p className="text-cyan-400">&gt; Background delta sync queue: 14 items</p>
                      <p className="text-emerald-400">&gt; Bi-directional sync confirmed</p>
                    </div>
                  </div>
                )}

                {activeMode === 'web' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Globe size={18} className="text-purple-600" />
                        <span className="text-xs font-mono font-bold text-navy-900">
                          Next.js App Router Multi-Tenant SaaS
                        </span>
                      </div>
                      <Badge variant="violet">RSC Server Render</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-mono text-slate-500 uppercase">First Contentful Paint</span>
                        <p className="text-xl font-bold text-purple-700 font-mono mt-0.5">0.38 s</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-mono text-slate-500 uppercase">PostgreSQL RLS</span>
                        <p className="text-xl font-bold text-emerald-600 font-mono mt-0.5">Tenant Isolated</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 text-slate-200 font-mono text-xs space-y-1">
                      <p className="text-purple-400">&gt; Server Component data fetch: 18ms</p>
                      <p className="text-emerald-400">&gt; WebSocket real-time operations feed connected</p>
                    </div>
                  </div>
                )}

                {activeMode === 'ai' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Bot size={18} className="text-emerald-600" />
                        <span className="text-xs font-mono font-bold text-navy-900">
                          Autonomous AI Agent & Vector RAG Node
                        </span>
                      </div>
                      <Badge variant="emerald">Tool-Calling Agent</Badge>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 text-slate-200 font-mono text-xs space-y-1.5">
                      <p className="text-slate-400">&gt; Vector Index Search: Qdrant [1,536 dim]</p>
                      <p className="text-gold-400">&gt; Similarity Match: 0.962 (Clause #4.2 found)</p>
                      <p className="text-emerald-400">&gt; Tool Action: Executing ERP_Contract_Update.post()</p>
                    </div>
                  </div>
                )}

                {activeMode === 'iot' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Cpu size={18} className="text-gold-600" />
                        <span className="text-xs font-mono font-bold text-navy-900">
                          Industrial IoT Gateway & Sensor Cluster
                        </span>
                      </div>
                      <Badge variant="primary">MQTT Broker QoS 1</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-mono text-slate-500 uppercase">Active Hardware Nodes</span>
                        <p className="text-xl font-bold text-gold-600 font-mono mt-0.5">248 PLCs</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-mono text-slate-500 uppercase">Ingestion Latency</span>
                        <p className="text-xl font-bold text-emerald-600 font-mono mt-0.5">&lt; 50 ms</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 text-slate-200 font-mono text-xs space-y-1">
                      <p className="text-gold-400">&gt; Modbus RTU gateway stream verified</p>
                      <p className="text-emerald-400">&gt; Telemetry written to InfluxDB time-series</p>
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Mode: {activeMode.toUpperCase()}</span>
                  </span>
                  <Link href="/services" className="text-gold-600 hover:text-gold-700 font-semibold flex items-center gap-1">
                    <span>Explore Specifications</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
