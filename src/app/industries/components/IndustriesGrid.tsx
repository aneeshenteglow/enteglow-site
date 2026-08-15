import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { industriesData } from '../services/industriesData';
import { CheckCircle2 } from 'lucide-react';

export const IndustriesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Domain Engineering"
          title="Industries We Build Software For"
          description="Entelgow engineers software tailored to specific domain environments—addressing compliance, latency, security, and integration challenges."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <Card key={ind.id} className="flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center font-bold">
                    <DynamicIcon name={ind.iconName} size={20} />
                  </div>
                  <Badge variant="neutral">{ind.useCases.length} Use Cases</Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy-900">{ind.name}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  <span className="font-mono uppercase text-slate-500 block mb-1">
                    Key Domain Capabilities Solved
                  </span>
                  {ind.supportedCapabilities.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700 font-medium">
                      <CheckCircle2 size={14} className="text-gold-500 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
