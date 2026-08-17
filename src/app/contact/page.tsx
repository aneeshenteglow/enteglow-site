'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/common/Badge';
import { companyData } from '@/data/company';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Application Development',
    budget: '$10k - $25k',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-12 pt-32">
      {/* Top Banner */}
      <section className="py-12 bg-surface-container-lowest border-b border-surface-variant">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Technical Discovery Session
          </Badge>
          <h1 className="font-headline font-bold text-headline-lg text-on-surface">
            Start Your Software Project
          </h1>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Schedule a consultation with our senior engineering team to discuss your project requirements, architecture constraints, and product roadmap.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline font-bold text-headline-lg text-on-surface text-3xl">
                Get in Touch
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Whether you need AI Agent integration, Web App engineering, high-performance Corporate Websites, or Cloud Hosting—our senior team is ready to assist.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric-blue/10 text-electric-blue flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <span className="font-label-md text-label-md text-outline uppercase block">Email Engineering Team</span>
                  <a href={`mailto:${companyData.contact.email}`} className="font-body-md font-bold text-on-surface hover:text-electric-blue transition-colors">
                    {companyData.contact.email}
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-vibrant-purple/10 text-vibrant-purple flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <span className="font-label-md text-label-md text-outline uppercase block">Direct Phone Contact</span>
                  <a href={`tel:${companyData.contact.phone}`} className="font-body-md font-bold text-on-surface hover:text-electric-blue transition-colors">
                    {companyData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <span className="font-label-md text-label-md text-outline uppercase block">Headquarters Office</span>
                  <p className="font-body-md font-bold text-on-surface">
                    {companyData.contact.address}
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric-blue/10 text-electric-blue flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">schedule</span>
                </div>
                <div>
                  <span className="font-label-md text-label-md text-outline uppercase block">Support Hours</span>
                  <p className="font-body-md font-bold text-on-surface">
                    {companyData.contact.supportHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h3 className="font-headline font-bold text-headline-lg text-on-surface text-3xl">Project Inquiry Received!</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                    Thank you for reaching out. A senior software architect from Enteglow will review your submission and contact you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary font-label-md text-label-md px-6 py-3 uppercase tracking-wider font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-headline font-bold text-headline-lg text-on-surface text-2xl">Project Discovery Inquiry</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                      Fill out your technical requirements below to initiate project evaluation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-on-surface uppercase block font-semibold">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high text-on-surface text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-on-surface uppercase block font-semibold">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high text-on-surface text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-on-surface uppercase block font-semibold">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high text-on-surface text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-on-surface uppercase block font-semibold">Target Software Discipline</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high text-on-surface text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      >
                        <option value="AI Application Development">AI Application Development</option>
                        <option value="Web App Development">Web App Development</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Web Maintenance & Hosting">Web Maintenance & Hosting</option>
                        <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface uppercase block font-semibold">Project Requirements & Details *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project vision, key technical features, desired target launch date, and existing systems to integrate..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high text-on-surface text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary font-label-md text-label-md px-8 py-4 uppercase tracking-wider font-semibold w-full cursor-pointer text-center"
                  >
                    Submit Technical Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
