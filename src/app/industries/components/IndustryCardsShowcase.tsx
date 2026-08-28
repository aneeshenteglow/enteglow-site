'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industriesData } from '../services/industriesData';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

const CATEGORIES = [
  { id: 'all', label: 'All Industries' },
  { id: 'industrial', label: 'Industrial & Supply Chain' },
  { id: 'health', label: 'Healthcare & Life Sciences' },
  { id: 'finance', label: 'Finance & Retail' },
  { id: 'enterprise', label: 'Enterprise & EdTech' },
];

interface IndustryCardsShowcaseProps {
  onSelectIndustry: (id: string) => void;
}

export const IndustryCardsShowcase: React.FC<IndustryCardsShowcaseProps> = ({
  onSelectIndustry,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredIndustries = industriesData.filter((ind) => {
    if (activeCategory === 'all') return true;
    return ind.category === activeCategory;
  });

  const handleCardClick = (id: string) => {
    onSelectIndustry(id);
    const element = document.getElementById('domain-explorer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-surface-deep border-b border-glass-border relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter relative z-10 space-y-12">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Explore All <span className="text-gradient">Domain Solutions</span>
            </h2>
            <p className="font-body-lg text-body-lg max-w-2xl mx-auto">
              Filter software product capabilities across specialized enterprise sectors.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-4 rounded-xl font-label-sm text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'text-on-primary-container font-bold shadow-md'
                    : 'glass-panel hover:text-on-surface hover:border-primary/30'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryFilter"
                    className="absolute inset-0 bg-primary-container rounded-full z-0 shadow-[0_0_15px_rgba(227,30,36,0.3)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredIndustries.map((ind) => (
              <motion.div
                layout
                key={ind.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, scale: 1.01 }}
                onClick={() => handleCardClick(ind.id)}
                className="group glass-panel rounded-2xl p-8 flex flex-col justify-between border border-glass-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(227,30,36,0.25)] cursor-pointer relative overflow-hidden"
              >
                {/* Accent spotlight on hover */}
                <div
                  className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: ind.colorAccent }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-on-primary-container shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: ind.colorAccent }}
                    >
                      <DynamicIcon name={ind.iconName} size={28} />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-surface-container-high border border-glass-border text-primary font-bold">
                      {ind.metricROI.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm mb-6 leading-relaxed">
                    {ind.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-glass-border flex items-center justify-between text-xs font-label-sm uppercase">
                  <span className="text-primary font-bold flex items-center gap-1">
                    <span>Inspect Pipeline</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                  <span className="font-mono">{ind.relevantTech.length} Tech Stack</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
