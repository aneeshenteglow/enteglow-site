'use client';

import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
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
    <div className="glass-panel p-8 sm:p-10 rounded-xl border border-glass-border">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mx-auto border border-primary/30">
            <span className="material-symbols-outlined text-4xl">check_circle</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface text-3xl">Project Inquiry Received!</h3>
          <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
            Thank you for reaching out. A senior software architect from Enteglow will review your submission and contact you within 24 business hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="glass-panel text-on-surface font-headline-md text-[14px] uppercase px-6 py-3 rounded font-bold hover:border-primary hover:text-primary transition-all glow-hover"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface text-2xl">Project Discovery Inquiry</h3>
            <p className="font-body-md text-on-surface-variant text-sm mt-1">
              Fill out your technical requirements below to initiate project evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-on-surface uppercase block font-semibold">Your Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-on-surface uppercase block font-semibold">Work Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-on-surface uppercase block font-semibold">Company Name</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Corp"
                className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-on-surface uppercase block font-semibold">Target Software Discipline</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="AI Application Development">AI Application Development</option>
                <option value="Web App Development">Web App Development</option>
                <option value="Website Development">Website Development</option>
                <option value="Web Maintenance & Hosting">Web Maintenance &amp; Hosting</option>
                <option value="Custom Enterprise Software">Custom Enterprise Software</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-label-sm text-label-sm text-on-surface uppercase block font-semibold">Project Requirements &amp; Details *</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your project vision, key technical features, desired target launch date, and existing systems to integrate..."
              className="w-full px-4 py-3 rounded bg-surface-container border border-technical-outline text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <button
            type="submit"
            className="bg-primary-container text-on-primary-container font-headline-md text-[14px] uppercase px-8 py-4 rounded font-bold hover:shadow-[0_0_20px_rgba(227,30,36,0.3)] transition-all w-full cursor-pointer text-center"
          >
            Submit Technical Inquiry
          </button>
        </form>
      )}
    </div>
  );
};
