'use client';

import React, { useState } from 'react';
import {
  Factory,
  Truck,
  HeartPulse,
  ShoppingBag,
  Zap,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

interface DomainSpec {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  workflowSteps: string[];
  solvedProblems: string[];
  productionMetrics: string;
}

const DOMAINS: DomainSpec[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing & Smart Plants',
    category: 'Industrial Operations',
    icon: <Factory size={22} className="text-amber-600" />,
    description: 'OEE production monitoring, automated quality assurance inspection, and shop-floor PLC telemetry integrations.',
    workflowSteps: ['Production Line', 'Inventory ERP', 'Plant Operations', 'Executive Reporting'],
    solvedProblems: ['Unscheduled Machine Downtime', 'Manual QA Inspection Bottlenecks', 'Siloed Inventory Tracking'],
    productionMetrics: '99.4% Machine Uptime | 30% QA Speedup',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    category: 'Fleet & Fleet Telemetry',
    icon: <Truck size={22} className="text-cyan-600" />,
    description: 'Real-time vehicle GPS tracking, dynamic route optimization, offline field driver apps, and warehouse WMS platforms.',
    workflowSteps: ['Fleet Vehicle', 'GPS Tracking', 'Operations Platform', 'On-Time Delivery'],
    solvedProblems: ['Fuel Wastage & Inefficient Routes', 'Driver App Connectivity Drop-offs', 'Delayed Proof-of-Delivery'],
    productionMetrics: '22% Fuel Cost Reduction | 98.8% On-Time',
  },
  {
    id: 'retail',
    title: 'Omnichannel Commerce',
    category: 'Retail & POS Systems',
    icon: <ShoppingBag size={22} className="text-purple-600" />,
    description: 'Unified inventory synchronization across online storefronts, physical POS terminals, and fulfillment warehouses.',
    workflowSteps: ['Customer Order', 'Commerce Platform', 'Warehouse Inventory', 'Analytics Insights'],
    solvedProblems: ['Stockout & Overselling Errors', 'Slow Peak Checkout Speeds', 'Fragmented Loyalty Programs'],
    productionMetrics: 'sub-200ms POS Checkout | 0 Inventory Desync',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & HealthTech',
    category: 'Medical Workflows',
    icon: <HeartPulse size={22} className="text-rose-600" />,
    description: 'HIPAA-ready patient portals, EHR data interoperability, Telehealth video suites, and clinical workflow tools.',
    workflowSteps: ['Patient Intake', 'Clinical Workflow', 'Secure Medical Data', 'Continuity of Care'],
    solvedProblems: ['Manual Charting Administrative Burden', 'Brittle Telehealth Video Calls', 'Patient No-Show Rates'],
    productionMetrics: '100% HIPAA Compliance | 45% No-Show Cut',
  },
  {
    id: 'energy',
    title: 'Energy & Smart Grid',
    category: 'Telemetry & Utilities',
    icon: <Zap size={22} className="text-emerald-600" />,
    description: 'Smart meter data ingestion, grid telemetry monitoring, predictive maintenance alerts, and asset optimization.',
    workflowSteps: ['Grid Sensors', 'Telemetry Ingestion', 'Predictive Maintenance', 'Power Output'],
    solvedProblems: ['Grid Outage Detection Lag', 'Manual Field Meter Readings', 'High Peak Transmission Loss'],
    productionMetrics: '< 50ms Telemetry | 99.99% Reliability',
  },
  {
    id: 'agriculture',
    title: 'AgriTech & Smart Farming',
    category: 'Field & Precision Farming',
    icon: <Sprout size={22} className="text-green-600" />,
    description: 'Soil moisture sensor telemetry, drone imagery processing, automated irrigation dispatchers, and yield forecasting.',
    workflowSteps: ['Field Sensor', 'Soil Telemetry', 'Automated Irrigation', 'Yield Analytics'],
    solvedProblems: ['Water & Fertilizer Wastage', 'Crop Disease Detection Delays', 'Unpredictable Harvest Forecasts'],
    productionMetrics: '28% Water Savings | 15% Crop Yield Gain',
  },
];

export const IndustriesGrid: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DomainSpec>(DOMAINS[0]);
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Domain Expertise"
            title="Engineered Solutions Across Specialized Industries"
            description="We build software customized for domain-specific operational challenges. Select an industry to inspect its tailored workflow pipeline."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block px-2">
                Select Industry Domain:
              </span>

              {DOMAINS.map((domain) => {
                const isSelected = selectedDomain.id === domain.id;
                return (
                  <div
                    key={domain.id}
                    onClick={() => setSelectedDomain(domain)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-navy-950 text-white border-gold-500 shadow-xl shadow-gold-500/10'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-navy-900 border border-slate-800' : 'bg-white border border-slate-200'}`}>
                          {domain.icon}
                        </div>
                        <div>
                          <h3 className={`font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-navy-900'}`}>
                            {domain.title}
                          </h3>
                          <p className={`text-xs font-mono mt-0.5 ${isSelected ? 'text-gold-400' : 'text-slate-500'}`}>
                            {domain.category}
                          </p>
                        </div>
                      </div>
                      <ArrowRight size={16} className={`transition-transform shrink-0 ${isSelected ? 'text-gold-400 translate-x-1' : 'opacity-0'}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-navy-950 text-white border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                    <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-wider">
                      {selectedDomain.title} Pipeline
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                    {selectedDomain.productionMetrics}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedDomain.description}
                </p>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Domain Workflow Visualizer:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                    {selectedDomain.workflowSteps.map((step, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] text-gold-400 block font-bold">STAGE 0{idx + 1}</span>
                        <span className="font-bold text-white block">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Domain Operational Friction Solved:
                  </span>
                  <div className="space-y-2 text-xs">
                    {selectedDomain.solvedProblems.map((prob, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 font-medium">
                        <CheckCircle2 size={14} className="text-gold-400 shrink-0" />
                        <span>{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Layers size={13} className="text-gold-400" />
                    Deep Domain Engineering Experience
                  </span>
                  <button
                    onClick={() => setPlannerOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-gold-500 text-slate-950 font-bold text-xs hover:bg-gold-400 transition-all flex items-center gap-2 shadow-lg shadow-gold-500/20"
                  >
                    <span>Discuss Domain Solution</span>
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
