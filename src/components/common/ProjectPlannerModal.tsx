'use client';

import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Building2, Mail, User, Phone, FileText } from 'lucide-react';
import { Button } from './Button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectPlannerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    goal: 'Launch New Digital Product',
    services: [] as string[],
    timeline: '3-6 months',
    budget: '$50k - $150k',
    name: '',
    email: '',
    company: '',
    phone: '',
    details: '',
  });

  if (!isOpen) return null;

  const goals = [
    { id: 'Launch New Digital Product', title: 'Launch New Digital Product', desc: 'Build a scalable SaaS or customer-facing application from scratch.' },
    { id: 'Modernize Legacy Software', title: 'Modernize Legacy Software', desc: 'Refactor or rebuild legacy monoliths into cloud-native architectures.' },
    { id: 'Automate Business Operations', title: 'Automate Operations & AI', desc: 'Eliminate manual processes with custom workflows & agentic AI.' },
    { id: 'Connect Disparate Systems', title: 'Connect Disparate Systems', desc: 'Build robust APIs, data pipelines, and ERP/CRM integrations.' },
  ];

  const serviceOptions = [
    'Web SaaS Platform',
    'Mobile Product (iOS/Android)',
    'Desktop Workstation App',
    'Agentic AI & LLM Automation',
    'IoT & Hardware Telemetry',
    'Enterprise System Integration',
  ];

  const timelines = ['1-3 Months (Fast Track)', '3-6 Months (Standard)', '6+ Months (Enterprise Build)'];

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== srv) : [...prev.services, srv],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-background/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-surface-deep/95 backdrop-blur-2xl rounded-xl border border-glass-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-glass-border flex items-center justify-between bg-surface-container">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-primary-container/10 text-primary flex items-center justify-center font-bold border border-primary/20">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface text-xl">Start a Project Consultation</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">Scope your software solution with senior engineers</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-on-surface">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mx-auto border border-primary/30">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-lg text-headline-lg-mobile text-on-surface text-2xl">Project Brief Received!</h4>
                <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
                  Thank you, <span className="text-primary font-semibold">{formData.name || 'Valued Client'}</span>. One of our lead software architects will review your scope and contact you within 24 business hours.
                </p>
              </div>
              <div className="pt-4">
                <Button onClick={handleReset} variant="primary" size="lg">
                  Back to Website
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Stepper indicator */}
              <div className="flex items-center justify-between font-label-sm text-xs border-b border-glass-border pb-4">
                <span className={`px-3 py-1.5 rounded uppercase tracking-widest ${step === 1 ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant'}`}>
                  1. Business Goal
                </span>
                <span className={`px-3 py-1.5 rounded uppercase tracking-widest ${step === 2 ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant'}`}>
                  2. Solutions &amp; Timeline
                </span>
                <span className={`px-3 py-1.5 rounded uppercase tracking-widest ${step === 3 ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant'}`}>
                  3. Contact Info
                </span>
              </div>

              {/* Step 1: Goals */}
              {step === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <h4 className="font-headline-md text-headline-md text-on-surface text-lg">What is your primary business objective?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {goals.map((g) => {
                      const isSelected = formData.goal === g.id;
                      return (
                        <div
                          key={g.id}
                          onClick={() => setFormData({ ...formData, goal: g.id })}
                          className={`p-5 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-primary-container/10 border-primary text-on-surface shadow-[0_0_15px_rgba(227,30,36,0.15)]'
                              : 'bg-surface-container border-glass-border text-on-surface-variant hover:border-primary/40'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h5 className="font-headline-md text-primary text-base">{g.title}</h5>
                            {isSelected && <CheckCircle2 size={18} className="text-primary" />}
                          </div>
                          <p className="font-body-md text-on-surface-variant text-xs mt-2 leading-relaxed">{g.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Solutions & Timeline */}
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-3">
                    <h4 className="font-headline-md text-headline-md text-on-surface text-lg">Select required software platforms:</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {serviceOptions.map((srv) => {
                        const isSelected = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-4 py-2.5 rounded font-label-sm text-xs font-semibold border transition-all ${
                              isSelected
                                ? 'bg-primary-container text-on-primary-container border-primary shadow-md'
                                : 'bg-surface-container text-on-surface border-glass-border hover:border-primary'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-headline-md text-headline-md text-on-surface text-base">Target Deployment Timeline</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {timelines.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`p-3.5 rounded border text-xs text-center transition-all font-label-sm ${
                            formData.timeline === t
                              ? 'bg-primary-container text-on-primary-container border-primary font-bold'
                              : 'bg-surface-container border-glass-border text-on-surface-variant hover:text-on-surface'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-headline-md text-headline-md text-on-surface text-lg">Where should we send your software proposal?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface uppercase font-semibold flex items-center gap-1.5">
                        <User size={14} /> Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface uppercase font-semibold flex items-center gap-1.5">
                        <Mail size={14} /> Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface uppercase font-semibold flex items-center gap-1.5">
                        <Building2 size={14} /> Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies"
                        className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface uppercase font-semibold flex items-center gap-1.5">
                        <Phone size={14} /> Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2831"
                        className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface uppercase font-semibold flex items-center gap-1.5">
                      <FileText size={14} /> Project Brief / Overview
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly describe the business problem or software requirements..."
                      className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:border-primary focus:outline-none resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Footer Controls */}
              <div className="pt-6 border-t border-glass-border flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="flex items-center gap-2 px-4 py-2 font-label-sm text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                ) : (
                  <span />
                )}

                {step < 3 ? (
                  <Button type="button" onClick={() => setStep((s) => s + 1)} variant="primary" size="md">
                    <span>Continue to Step {step + 1}</span>
                    <ArrowRight size={14} />
                  </Button>
                ) : (
                  <Button type="submit" variant="primary" size="lg">
                    <span>Submit Project Scope</span>
                    <CheckCircle2 size={16} />
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
