'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Bot, Database, Terminal, ArrowRight, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';

interface AgentStep {
  id: number;
  title: string;
  sub: string;
  icon: React.ReactNode;
  detail: string;
  payload: string;
}

export const AIAgentShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps: AgentStep[] = [
    {
      id: 1,
      title: '1. User Request',
      sub: 'Natural language task initiation',
      icon: <Terminal size={18} className="text-gold-600" />,
      detail: 'User submits non-deterministic natural language query requiring domain knowledge retrieval and multi-system execution.',
      payload: `Prompt: "Analyze the 2026 Master Service Agreement for clause risk, calculate maximum liability cap, and update ERP record #48102."`
    },
    {
      id: 2,
      title: '2. Vector RAG Retrieval',
      sub: 'Semantic similarity search',
      icon: <Database size={18} className="text-techBlue-600" />,
      detail: 'Query is embedded (1,536-dimensional vector) and matched against Qdrant vector database containing domain document chunks.',
      payload: `Embedding: [0.0241, -0.1942, 0.8410, ...]\nMatched: MSA_2026_Final.pdf (Page 18, Clause 4.2)\nSimilarity Score: 0.962 (Exact Paragraph Match)`
    },
    {
      id: 3,
      title: '3. LLM Reasoning',
      sub: 'Autonomous tool decisioning',
      icon: <Bot size={18} className="text-purple-600" />,
      detail: 'Agent evaluates retrieved context against defined guardrail policies and selects the exact API tool required to complete the task.',
      payload: `Selected Tool: ERP_Contract_Gateway.update()\nGuardrail Policy: Verified (User role: Senior Systems Admin)\nAction Decision: Execute Tool Call`
    },
    {
      id: 4,
      title: '4. Tool Execution & Action',
      sub: 'External API & DB update',
      icon: <Cpu size={18} className="text-emerald-600" />,
      detail: 'Agent formats structured JSON payload and executes secure REST/gRPC API call with automatic error retry handling.',
      payload: `HTTP POST /api/v1/erp/contracts/48102\nPayload: {\n  "liabilityCapUSD": 5000000,\n  "clauseReference": "MSA-2026-C4.2",\n  "auditStatus": "Verified"\n}`
    },
    {
      id: 5,
      title: '5. Verified Result',
      sub: 'Audited output & notification',
      icon: <ShieldCheck size={18} className="text-emerald-600" />,
      detail: 'Task completes with full audit log, token metrics tracking, source page citations, and status broadcast via WebSockets.',
      payload: `Status: 200 OK (Execution Time: 1.42s)\nAudit Log ID: AUD-992014-X\nPage Citation: MSA_2026_Final.pdf #L142-L168`
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Autonomous AI Systems"
          title="Functional AI Agents — Not Just Chatbots"
          description="Entelgow builds autonomous AI agent platforms capable of multi-step reasoning, vector document retrieval, and executing real-world API tool calls."
        />

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 p-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {steps.map((st) => {
            const isActive = activeStep === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStep(st.id)}
                className={`px-4 py-4 rounded-xl text-xs font-mono font-semibold transition-all flex flex-col items-center gap-1 text-center ${
                  isActive
                    ? 'bg-gold-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className={isActive ? 'text-white' : ''}>{st.icon}</span>
                  <span className={isActive ? 'text-white/80' : 'text-slate-400'}>0{st.id}</span>
                </div>
                <span className="truncate w-full">{st.title.split('.')[1]}</span>
              </button>
            );
          })}
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gold-100 border border-gold-200 text-gold-600">
                {steps[activeStep - 1].icon}
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500">Step 0{activeStep} of 05</span>
                <h3 className="text-xl font-bold text-navy-900 mt-0.5">
                  {steps[activeStep - 1].title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activeStep === 1}
                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                className="px-4 py-4 rounded-xl bg-slate-100 text-navy-800 disabled:opacity-40 text-xs font-mono"
              >
                Previous Step
              </button>
              <button
                disabled={activeStep === 5}
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                className="px-4 py-4 rounded-xl bg-gold-500 text-white disabled:opacity-40 text-xs font-mono flex items-center gap-1 shadow-sm"
              >
                <span>Next Step</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h4 className="text-base font-bold text-navy-900">Execution Process Details</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {steps[activeStep - 1].detail}
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <span className="font-mono text-slate-500 uppercase font-semibold block">
                  AI Architecture Capabilities
                </span>
                <ul className="space-y-1.5 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-gold-500" />
                    <span>LlamaIndex & LangChain multi-agent delegation frameworks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-gold-500" />
                    <span>Strict prompt guardrails preventing hallucinated responses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-gold-500" />
                    <span>Full token auditing and cost optimization tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-2 text-xs font-mono text-slate-200">
              <div className="flex items-center justify-between text-slate-400 border-b border-navy-800 pb-2 text-[11px]">
                <span>AGENT TERMINAL_V1.2</span>
                <span className="text-emerald-400">EXECUTION STEP 0{activeStep}</span>
              </div>
              <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                {steps[activeStep - 1].payload}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
