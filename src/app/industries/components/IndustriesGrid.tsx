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
import { Badge } from '@/components/common/Badge';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';

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
    icon: <Factory size={22} className="text-primary" />,
    description: 'OEE production monitoring, automated quality assurance inspection, and shop-floor PLC telemetry integrations.',
    workflowSteps: ['Production Line', 'Inventory ERP', 'Plant Operations', 'Executive Reporting'],
    solvedProblems: ['Unscheduled Machine Downtime', 'Manual QA Inspection Bottlenecks', 'Siloed Inventory Tracking'],
    productionMetrics: '99.4% Machine Uptime | 30% QA Speedup',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    category: 'Fleet Telemetry',
    icon: <Truck size={22} className="text-primary" />,
    description: 'Real-time vehicle GPS tracking, dynamic route optimization, offline field driver apps, and warehouse WMS platforms.',
    workflowSteps: ['Fleet Vehicle', 'GPS Tracking', 'Operations Platform', 'On-Time Delivery'],
    solvedProblems: ['Fuel Wastage & Inefficient Routes', 'Driver App Connectivity Drop-offs', 'Delayed Proof-of-Delivery'],
    productionMetrics: '22% Fuel Cost Reduction | 98.8% On-Time',
  },
  {
    id: 'retail',
    title: 'Omnichannel Commerce',
    category: 'Retail & POS Systems',
    icon: <ShoppingBag size={22} className="text-primary" />,
    description: 'Unified inventory synchronization across online storefronts, physical POS terminals, and fulfillment warehouses.',
    workflowSteps: ['Customer Order', 'Commerce Platform', 'Warehouse Inventory', 'Analytics Insights'],
    solvedProblems: ['Stockout & Overselling Errors', 'Slow Peak Checkout Speeds', 'Fragmented Loyalty Programs'],
    productionMetrics: 'sub-200ms POS Checkout | 0 Inventory Desync',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & HealthTech',
    category: 'Medical Workflows',
    icon: <HeartPulse size={22} className="text-primary" />,
    description: 'HIPAA-ready patient portals, EHR data interoperability, Telehealth video suites, and clinical workflow tools.',
    workflowSteps: ['Patient Intake', 'Clinical Workflow', 'Secure Medical Data', 'Continuity of Care'],
    solvedProblems: ['Manual Charting Administrative Burden', 'Brittle Telehealth Video Calls', 'Patient No-Show Rates'],
    productionMetrics: '100% HIPAA Compliance | 45% No-Show Cut',
  },
  {
    id: 'energy',
    title: 'Energy & Smart Grid',
    category: 'Telemetry & Utilities',
    icon: <Zap size={22} className="text-primary" />,
    description: 'Smart meter data ingestion, grid telemetry monitoring, predictive maintenance alerts, and asset optimization.',
    workflowSteps: ['Grid Sensors', 'Telemetry Ingestion', 'Predictive Maintenance', 'Power Output'],
    solvedProblems: ['Grid Outage Detection Lag', 'Manual Field Meter Readings', 'High Peak Transmission Loss'],
    productionMetrics: '< 50ms Telemetry | 99.99% Reliability',
  },
  {
    id: 'agriculture',
    title: 'AgriTech & Smart Farming',
    category: 'Field & Precision Farming',
    icon: <Sprout size={22} className="text-primary" />,
    description: 'Soil moisture sensor telemetry, drone imagery processing, automated irrigation dispatchers, and yield forecasting.',
    workflowSteps: ['Field Sensor', 'Soil Telemetry', 'Automated Irrigation', 'Yield Analytics'],
    solvedProblems: ['Water & Fertilizer Wastage', 'Crop Disease Detection Delays', 'Unpredictable Harvest Forecasts'],
    productionMetrics: '28% Water Savings | 15% Crop Yield Gain',
  },
];

export const IndustriesGrid: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DomainSpec>(DOMAINS[0]);
  const { openPlanner } = useProjectPlanner();

  return (
    <section className="py-section-padding-lg bg-surface border-t border-glass-border">
      <div className="max-w-container-max mx-auto px-gutter space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge className="mb-2">Domain Expertise</Badge>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Engineered Solutions Across Specialized Industries
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            We build software customized for domain-specific operational challenges. Select an industry to inspect its tailored workflow pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block px-2">
              Select Industry Domain:
            </span>

            {DOMAINS.map((domain) => {
              const isSelected = selectedDomain.id === domain.id;
              return (
                <div
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain)}
                  className={`p-4 rounded-xl transition-all cursor-pointer ${
                    isSelected
                      ? 'glass-panel border-primary shadow-[0_0_15px_rgba(227,30,36,0.15)] bg-surface-container'
                      : 'glass-panel hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded ${isSelected ? 'bg-primary-container/10 border border-primary/30' : 'bg-surface-container-high border border-glass-border'}`}>
                        {domain.icon}
                      </div>
                      <div>
                        <h3 className={`font-headline-md text-sm sm:text-base ${isSelected ? 'text-on-surface' : 'text-on-surface'}`}>
                          {domain.title}
                        </h3>
                        <p className={`font-label-sm text-xs ${isSelected ? 'text-primary' : 'text-on-surface-variant'}`}>
                          {domain.category}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={16} className={`transition-transform shrink-0 ${isSelected ? 'text-primary translate-x-1' : 'opacity-0'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-surface-deep border border-glass-border shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-glass-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="font-label-sm text-xs font-bold text-primary uppercase tracking-wider">
                    {selectedDomain.title} Pipeline
                  </span>
                </div>
                <span className="font-label-sm text-xs text-primary font-bold bg-primary-container/10 px-3 py-1 rounded-full border border-primary/30">
                  {selectedDomain.productionMetrics}
                </span>
              </div>

              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                {selectedDomain.description}
              </p>

              <div className="space-y-3">
                <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block">
                  Domain Workflow Visualizer:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-label-sm text-xs">
                  {selectedDomain.workflowSteps.map((step, idx) => (
                    <div key={idx} className="p-3 rounded bg-surface-container border border-glass-border space-y-1">
                      <span className="text-[10px] text-primary block font-bold">STAGE 0{idx + 1}</span>
                      <span className="font-bold text-on-surface block">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block">
                  Domain Operational Friction Solved:
                </span>
                <div className="space-y-2 text-xs">
                  {selectedDomain.solvedProblems.map((prob, i) => (
                    <div key={i} className="flex items-center gap-2 text-on-surface-variant font-medium">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-glass-border flex items-center justify-between">
                <span className="font-label-sm text-xs text-on-surface-variant flex items-center gap-1">
                  <Layers size={13} className="text-primary" />
                  Deep Domain Engineering Experience
                </span>
                <button
                  onClick={openPlanner}
                  className="px-5 py-2.5 rounded bg-primary-container text-on-primary-container font-bold text-xs hover:shadow-[0_0_15px_rgba(227,30,36,0.3)] transition-all flex items-center gap-2"
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
  );
};
