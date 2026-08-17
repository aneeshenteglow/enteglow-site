'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';
import { AnimatedCounter } from '@/components/common/motion/AnimatedCounter';

const TEAM_IMAGE_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBJHIC90k-5sfIvEgn1IactLa26iFt8NSLyN780lGcVjv-ZXBAPMj4v09qKBygBcT6HpZyNi27YeG6koe79WrhnaDVT3e7WbA1xqAh9VpuQLVDycURwpI-b2REy6hzeMQt_ufXGB_4HDr-Rl5cSxrjs7E0jdclY_jEcR7qOdjYz-5_gBFzxX2I4ayLO5TpJBpsLSkpfgojs_94CXHeD5iDDqFii9mZ7JL5uHebQhvn1lb6EyfwBYbiHlw';

const DEV_IMAGE_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCtNuzeblCiSCeV0LtzSQAME3bD1xPxUtd9-pRmdjtvUS0aKAoF-LuI7Boko0IVqzZpJCkiJ5M6zHa-xTMFgY3E_QhEf2XCbnIY80YApqFZB4crN4ddzMAR_FOe3HT2apXSIjSgOwVgmkLTT_OpMNJ8QA1R7kZrpghdgDyfFuvvCmMq0KmMJYBKxJhWY0JEatkLbeCn1PnGyRt4-KHyxiaYpeNse8ns7m9lwPApK9T_jTz8DswIiXy_6A';

export const WhyEntelgowSection: React.FC = () => {
  const { openPlanner } = useProjectPlanner();

  return (
    <section className="py-section-padding-lg bg-surface border-t border-glass-border relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter space-y-16 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-label-sm text-xs font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full glass-panel border border-primary/20 inline-block">
              ENGINEERING GUARANTEES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Built for Enterprise Reliability &amp; IP Ownership
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              We engineer software to handle scaling milestones effortlessly—with zero vendor lock-in and complete IP source code ownership.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-6 space-y-6">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface text-3xl sm:text-4xl leading-tight">
              Rigorous Technical Standards &amp; Agile Delivery
            </h3>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Our engineering methodology is rooted in strict technical standards, zero mock fallbacks, and feature-isolated architecture—ensuring complex operational challenges are met with sustainable, scalable software solutions.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-4 font-body-md text-on-surface">
                <span className="w-6 h-6 rounded-full bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-sm">check</span>
                </span>
                <span>Enterprise-grade system architecture &amp; 100% IP source ownership.</span>
              </li>
              <li className="flex items-start gap-4 font-body-md text-on-surface">
                <span className="w-6 h-6 rounded-full bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-sm">check</span>
                </span>
                <span>Agile, transparent development cycles with direct senior engineer access.</span>
              </li>
              <li className="flex items-start gap-4 font-body-md text-on-surface">
                <span className="w-6 h-6 rounded-full bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-sm">check</span>
                </span>
                <span>Post-deployment scaling, SOC 2 readiness, and zero-downtime CI/CD.</span>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={openPlanner}
                className="group bg-primary-container text-on-primary-container font-headline-md text-[14px] uppercase px-8 py-4 rounded font-bold shimmer-btn hover:shadow-[0_0_25px_rgba(227,30,36,0.45)] transition-all transform hover:-translate-y-1 cursor-pointer flex items-center gap-2"
              >
                <span>Schedule Architecture Audit</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">
                  arrow_forward
                </span>
              </button>
            </div>
          </ScrollReveal>

          {/* Right Asymmetric Composition */}
          <ScrollReveal direction="right" delay={0.3} className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto lg:ml-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-glass-border group"
              >
                <img
                  src={TEAM_IMAGE_1}
                  alt="Enteglow engineering team collaborating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-8 -left-8 w-48 h-64 rounded-xl overflow-hidden shadow-2xl border border-glass-border hidden sm:block group"
              >
                <img
                  src={DEV_IMAGE_2}
                  alt="Senior developer coding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <div className="absolute top-6 -right-4 glass-panel rounded-xl p-5 shadow-2xl border border-primary/30 animate-float-slow">
                <div className="font-headline-lg text-primary leading-none mb-1 text-4xl font-bold">
                  <AnimatedCounter value="100+" />
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Products Delivered
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal direction="up" delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-2xl border border-glass-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(227,30,36,0.2)] space-y-3"
            >
              <div className="flex items-center gap-3 text-primary font-headline-md text-xl">
                <span className="material-symbols-outlined text-3xl">code</span>
                <span>Strict Code Quality</span>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Every pull request undergoes peer review, static type checking (<code className="text-primary font-mono text-xs">tsc --noEmit</code>), and automated test suite verification.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-2xl border border-glass-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(227,30,36,0.2)] space-y-3"
            >
              <div className="flex items-center gap-3 text-primary font-headline-md text-xl">
                <span className="material-symbols-outlined text-3xl">lock</span>
                <span>100% IP &amp; Data Ownership</span>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                All source code, Docker configs, and architecture blueprints belong entirely to your organization upon project delivery.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-2xl border border-glass-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(227,30,36,0.2)] space-y-3"
            >
              <div className="flex items-center gap-3 text-primary font-headline-md text-xl">
                <span className="material-symbols-outlined text-3xl">speed</span>
                <span>Architectural Longevity</span>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                We design software to handle scaling milestones effortlessly—whether serving 100 or 100,000 concurrent users.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
