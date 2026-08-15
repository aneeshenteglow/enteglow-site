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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl glass-card-dark rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800 flex items-center justify-between bg-navy-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">Start a Project Consultation</h3>
              <p className="text-xs text-slate-400 font-mono">Scope your software solution with senior engineers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-slate-200">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">Project Brief Received!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-gold-400 font-semibold">{formData.name || 'Valued Client'}</span>. One of our lead software architects will review your scope and contact you within 24 business hours.
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
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-4">
                <span className={`px-3 py-1 rounded-full ${step === 1 ? 'bg-gold-500 text-slate-950 font-bold' : 'text-slate-400'}`}>
                  1. Business Goal
                </span>
                <span className={`px-3 py-1 rounded-full ${step === 2 ? 'bg-gold-500 text-slate-950 font-bold' : 'text-slate-400'}`}>
                  2. Solutions & Timeline
                </span>
                <span className={`px-3 py-1 rounded-full ${step === 3 ? 'bg-gold-500 text-slate-950 font-bold' : 'text-slate-400'}`}>
                  3. Contact Info
                </span>
              </div>

              {/* Step 1: Goals */}
              {step === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <h4 className="text-lg font-bold text-white">What is your primary business objective?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {goals.map((g) => {
                      const isSelected = formData.goal === g.id;
                      return (
                        <div
                          key={g.id}
                          onClick={() => setFormData({ ...formData, goal: g.id })}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-gold-500/10 border-gold-500 text-white shadow-glow-gold'
                              : 'bg-navy-900/40 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h5 className="font-bold text-sm text-gold-400">{g.title}</h5>
                            {isSelected && <CheckCircle2 size={16} className="text-gold-500" />}
                          </div>
                          <p className="text-xs text-slate-400 mt-2 leading-relaxed">{g.desc}</p>
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
                    <h4 className="text-lg font-bold text-white">Select required software platforms:</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {serviceOptions.map((srv) => {
                        const isSelected = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                              isSelected
                                ? 'bg-gold-500 text-slate-950 border-gold-400 shadow-md font-bold'
                                : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-500'
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
                    <h4 className="text-sm font-bold text-white font-mono">Target Deployment Timeline</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {timelines.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`p-3 rounded-xl border text-xs text-center transition-all ${
                            formData.timeline === t
                              ? 'bg-techBlue-600 text-white border-techBlue-400 font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
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
                  <h4 className="text-lg font-bold text-white">Where should we send your software proposal?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <User size={13} /> Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-slate-700 text-white text-sm focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Mail size={13} /> Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-slate-700 text-white text-sm focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Building2 size={13} /> Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-slate-700 text-white text-sm focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Phone size={13} /> Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2831"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-slate-700 text-white text-sm focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <FileText size={13} /> Project Brief / Overview
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly describe the business problem or software requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-slate-700 text-white text-sm focus:border-gold-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Footer Controls */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
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
                  <Button type="submit" variant="primary" size="lg" className="shadow-glow-gold">
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
