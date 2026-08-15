'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { companyData } from '@/data/company';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Desktop Applications',
    budget: '$10k - $25k',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-12">
      <section className="pt-8 pb-12 bg-radial-gold border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" className="mb-4">
            Technical Discovery Session
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Start Your Software Engineering Project
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation with our senior engineering team to discuss your project requirements, architecture constraints, and product roadmap.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">Get in Touch</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you need a Desktop workstation app, Mobile field product, Next.js Web platform, AI reasoning agent, or IoT telemetry broker—our senior engineers are ready to assist.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase block">Email Engineering Team</span>
                  <a href={`mailto:${companyData.contact.email}`} className="text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors">
                    {companyData.contact.email}
                  </a>
                </div>
              </Card>

              <Card className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase block">Direct Phone Contact</span>
                  <a href={`tel:${companyData.contact.phone}`} className="text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors">
                    {companyData.contact.phone}
                  </a>
                </div>
              </Card>

              <Card className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase block">Headquarters Office</span>
                  <p className="text-sm font-bold text-navy-900">
                    {companyData.contact.address}
                  </p>
                </div>
              </Card>

              <Card className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-100 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase block">Support Hours</span>
                  <p className="text-sm font-bold text-navy-900">
                    {companyData.contact.supportHours}
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Project Inquiry Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A senior software architect from Entelgow will review your submission and contact you within 24 business hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Project Discovery Inquiry</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your technical requirements below to initiate project evaluation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-navy-800">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-navy-800">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-navy-800">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-navy-800">Target Software Discipline</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                      >
                        <option value="Desktop Applications">Desktop Applications (Tauri / Rust / C#)</option>
                        <option value="Mobile Applications">Mobile Applications (React Native / Flutter)</option>
                        <option value="Web Applications">Web Applications (Next.js / React)</option>
                        <option value="AI Agents">AI Agents & RAG Integration</option>
                        <option value="IoT Telemetry">IoT Telemetry & MQTT Systems</option>
                        <option value="Custom Software">Custom Enterprise Software</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-navy-800">Project Requirements & Details *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project vision, key technical features, desired target launch date, and existing systems to integrate..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Send size={18} />}
                    className="w-full shadow-lg shadow-gold-500/25"
                  >
                    Submit Technical Inquiry
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
