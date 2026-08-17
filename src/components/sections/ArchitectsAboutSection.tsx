'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';
import { AnimatedCounter } from '@/components/common/motion/AnimatedCounter';

const TEAM_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBJHIC90k-5sfIvEgn1IactLa26iFt8NSLyN780lGcVjv-ZXBAPMj4v09qKBygBcT6HpZyNi27YeG6koe79WrhnaDVT3e7WbA1xqAh9VpuQLVDycURwpI-b2REy6hzeMQt_ufXGB_4HDr-Rl5cSxrjs7E0jdclY_jEcR7qOdjYz-5_gBFzxX2I4ayLO5TpJBpsLSkpfgojs_94CXHeD5iDDqFii9mZ7JL5uHebQhvn1lb6EyfwBYbiHlw';

const DASHBOARD_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCtNuzeblCiSCeV0LtzSQAME3bD1xPxUtd9-pRmdjtvUS0aKAoF-LuI7Boko0IVqzZpJCkiJ5M6zHa-xTMFgY3E_QhEf2XCbnIY80YApqFZB4crN4ddzMAR_FOe3HT2apXSIjSgOwVgmkLTT_OpMNJ8QA1R7kZrpghdgDyfFuvvCmMq0KmMJYBKxJhWY0JEatkLbeCn1PnGyRt4-KHyxiaYpeNse8ns7m9lwPApK9T_jTz8DswIiXy_6A';

export const ArchitectsAboutSection: React.FC = () => {
  return (
    <section className="py-section-padding-lg bg-surface border-y border-glass-border relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary text-[16px]">info</span>
                <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest font-semibold">
                  Who We Are
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 text-on-surface">
                Architects of the Digital Enterprise
              </h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-4 leading-relaxed">
                We are a collective of senior engineers, product designers, and systems architects dedicated to solving complex operational challenges. Our methodology bridges the gap between ambitious business goals and technical reality.
              </p>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-8 leading-relaxed">
                By combining deep domain expertise with modern software development practices, we deliver solutions that are robust, scalable, and beautifully designed.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </span>
                  <span className="text-on-surface font-medium">Enterprise-grade architecture design</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </span>
                  <span className="text-on-surface font-medium">Agile development methodologies</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </span>
                  <span className="text-on-surface font-medium">Continuous post-deployment scaling</span>
                </li>
              </ul>
              <Link
                href="/about"
                className="group bg-primary-container text-on-primary-container font-headline-md text-[16px] uppercase px-8 py-4 rounded font-bold shimmer-btn hover:shadow-[0_0_25px_rgba(227,30,36,0.45)] transition-all transform hover:-translate-y-1 inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span>Meet the Team</span>
                <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform duration-300">
                  arrow_forward
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column - Layered Image Composition */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden border border-glass-border shadow-2xl relative z-10 group"
              >
                <img
                  alt="Engineering Team"
                  className="w-full h-auto object-cover aspect-square md:aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={TEAM_IMAGE_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              </motion.div>

              {/* Secondary Overlapping Image */}
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-8 -left-8 w-1/2 rounded-xl overflow-hidden border border-glass-border shadow-2xl z-20 hidden md:block group"
              >
                <img
                  alt="Mobile Dashboard"
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                  src={DASHBOARD_IMAGE_URL}
                />
              </motion.div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -right-6 glass-panel rounded-xl p-5 hidden md:flex flex-col items-center justify-center z-20 shadow-[0_0_30px_rgba(227,30,36,0.2)] border border-primary/30 animate-float-slow">
                <span className="text-primary font-headline-lg text-[34px] font-bold leading-none mb-1">
                  <AnimatedCounter value="15+" />
                </span>
                <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest text-center w-24 leading-tight">
                  Years Experience
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
