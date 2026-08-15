import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Badge } from '@/components/common/Badge';
import { Monitor, Smartphone, Globe, Bot, Cpu, CheckCircle2 } from 'lucide-react';

export const ProductEcosystem: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Product Convergence"
          title="One Connected Software Ecosystem"
          description="Entelgow builds complete digital software systems where Desktop Apps, Mobile Interfaces, Web SaaS Portals, AI Reasoning Agents, and IoT Hardware communicate as one unified product suite."
        />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="primary">Central Product Hub</Badge>
            <h3 className="text-2xl font-bold text-navy-900">Unified Core Microservice & Data Layer</h3>
            <p className="text-xs text-slate-600">
              High-concurrency API layer, PostgreSQL RLS database, Redis pub/sub broker, and vector embedding store powering all client touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            <div className="p-5 rounded-2xl bg-slate-50 border border-gold-300 text-center space-y-3 hover:border-gold-500 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center mx-auto">
                <Monitor size={20} />
              </div>
              <h4 className="text-sm font-bold text-navy-900">Desktop Application</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Tauri & C# offline workstation binaries for heavy computation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-techBlue-300 text-center space-y-3 hover:border-techBlue-500 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-techBlue-100 text-techBlue-600 flex items-center justify-center mx-auto">
                <Smartphone size={20} />
              </div>
              <h4 className="text-sm font-bold text-navy-900">Mobile Product</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                React Native field technician apps with delta queue sync.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-purple-300 text-center space-y-3 hover:border-purple-500 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto">
                <Globe size={20} />
              </div>
              <h4 className="text-sm font-bold text-navy-900">Web Platform</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Next.js App Router multi-tenant SaaS dashboards.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-emerald-300 text-center space-y-3 hover:border-emerald-500 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Bot size={20} />
              </div>
              <h4 className="text-sm font-bold text-navy-900">AI Agent Node</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Autonomous vector RAG reasoning & API tool calling.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-gold-300 text-center space-y-3 hover:border-gold-500 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center mx-auto">
                <Cpu size={20} />
              </div>
              <h4 className="text-sm font-bold text-navy-900">IoT System</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                MQTT telemetry brokers & sensor hardware gateways.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-gold-500" />
              <span>Unified Data & Authorization Protocol</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-gold-500" />
              <span>Zero Cross-Platform Data Fragmentation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-gold-500" />
              <span>Full Source Code IP Ownership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
