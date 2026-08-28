'use client';

import React from 'react';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

export const DomainEngineeringCapability: React.FC = () => {
  return (
    <section className="py-24 bg-surface border-b border-glass-border relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter relative z-10 space-y-16">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary px-3 py-1 rounded-full glass-panel border border-primary/20 inline-block font-semibold">
              Cross-Industry Engineering Standard
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Engineered for Enterprise Compliance &amp; Scalability
            </h2>
            <p className="font-body-lg text-body-lg leading-relaxed">
              No matter your domain, every software solution we deliver adheres to production-grade security, zero-downtime deployment pipelines, and full IP source ownership.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal direction="up" delay={0.15}>
            <div className="glass-panel p-8 rounded-2xl border border-glass-border hover:border-primary/40 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">SOC 2 &amp; HIPAA Readiness</h3>
              <p className="text-sm leading-relaxed">
                Encrypted data pipelines, role-based access control (RBAC), and automated audit logs engineered to satisfy stringent compliance requirements.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="glass-panel p-8 rounded-2xl border border-glass-border hover:border-primary/40 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">code_blocks</span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">100% IP Source Ownership</h3>
              <p className="text-sm leading-relaxed">
                Zero vendor lock-in. Full ownership of all repository code, Docker deployment scripts, and architectural blueprints upon project completion.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.45}>
            <div className="glass-panel p-8 rounded-2xl border border-glass-border hover:border-primary/40 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">speed</span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">Sub-Second System SLA</h3>
              <p className="text-sm leading-relaxed">
                Designed to handle high concurrency, multi-tenant loads, and live WebSockets telemetry without request timeouts or database lockups.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
