'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Badge } from '@/components/common/Badge';
import { Cpu, Activity, RefreshCw } from 'lucide-react';

export const IoTDataFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const pipelineStages = [
    {
      step: 1,
      name: '01. Hardware & Sensors',
      tech: 'Modbus / CAN Bus',
      desc: 'Physical sensors and industrial PLCs on shop floor machinery generate continuous hardware readings.'
    },
    {
      step: 2,
      name: '02. Edge Gateway',
      tech: 'Embedded C / Rust',
      desc: 'Local edge gateway aggregates hardware signals, applies binary Protobuf serialization, and buffers data.'
    },
    {
      step: 3,
      name: '03. Telemetry Broker',
      tech: 'MQTT / EMQX Cluster',
      desc: 'High-density MQTT broker cluster ingests thousands of telemetry messages per second with QoS 1 reliability.'
    },
    {
      step: 4,
      name: '04. Time-Series Engine',
      tech: 'InfluxDB / Timescale',
      desc: 'Partitioned time-series database logs telemetry streams for historical trend analysis and anomaly detection.'
    },
    {
      step: 5,
      name: '05. Live UI Control Portal',
      tech: 'React / WebSockets',
      desc: 'Sub-second real-time supervisory web dashboard displays live sensor states and triggers threshold alerts.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Hardware & Telemetry Architecture"
          title="End-to-End Industrial IoT Data Flow"
          description="Entelgow bridges physical hardware and software platforms—engineering telemetry ingestion engines, edge gateways, time-series storage, and real-time control dashboards."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {pipelineStages.map((ps) => {
            const isActive = activeStage === ps.step;
            return (
              <button
                key={ps.step}
                onClick={() => setActiveStage(ps.step)}
                className={`p-4 rounded-2xl text-left border transition-all space-y-2 ${
                  isActive
                    ? 'bg-gold-500 border-gold-600 text-white shadow-md'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isActive ? 'text-white font-bold' : 'text-gold-600 font-bold'}>Stage 0{ps.step}</span>
                  {isActive && <Activity size={14} className="text-white animate-pulse" />}
                </div>
                <h4 className={`text-sm font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-navy-900'}`}>{ps.name.split('.')[1]}</h4>
                <p className={`text-[11px] font-mono ${isActive ? 'text-white/80' : 'text-slate-500'}`}>{ps.tech}</p>
              </button>
            );
          })}
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gold-100 border border-gold-200 text-gold-600">
                <Cpu size={22} />
              </div>
              <div>
                <Badge variant="primary">Telemetry Architecture Stage 0{activeStage}</Badge>
                <h3 className="text-xl font-bold text-navy-900 mt-1">
                  {pipelineStages[activeStage - 1].name}
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-600 flex items-center gap-1.5 font-bold">
              <RefreshCw size={14} className="animate-spin" />
              <span>Telemetry Stream: Active</span>
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {pipelineStages[activeStage - 1].desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
              <span className="font-mono text-slate-500 uppercase text-[11px]">Hardware Protocol</span>
              <p className="text-sm font-bold text-navy-900 font-mono">Modbus RTU / TCP & CAN Bus</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
              <span className="font-mono text-slate-500 uppercase text-[11px]">Store & Forward Caching</span>
              <p className="text-sm font-bold text-gold-600 font-mono">Local Gateway Buffer Active</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
              <span className="font-mono text-slate-500 uppercase text-[11px]">Telemetry Ingestion Latency</span>
              <p className="text-sm font-bold text-emerald-600 font-mono">Sub-50ms Global Processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
