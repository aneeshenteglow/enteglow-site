import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/common/Badge';
import { companyData } from '@/data/company';
import { ContactForm } from './components/ContactForm';

export const metadata: Metadata = {
  title: 'Start Your Software Project & Discovery Session | Enteglow',
  description:
    'Schedule a consultation with our senior engineering team to discuss your project requirements, architecture constraints, and product roadmap.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-12 pt-32 bg-background">
      {/* Top Banner */}
      <section className="py-12 bg-surface-deep border-b border-glass-border">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Badge className="mb-4">
            Technical Discovery Session
          </Badge>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
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
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface text-3xl">
                Get in Touch
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Whether you need AI Agent integration, Web App engineering, high-performance Corporate Websites, or Cloud Hosting—our senior team is ready to assist.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-panel p-6 rounded-xl flex items-start gap-4 glow-hover">
                <div className="w-12 h-12 rounded bg-primary-container/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Email Engineering Team</span>
                  <a href={`mailto:${companyData.contact.email}`} className="font-body-md font-bold text-on-surface hover:text-primary transition-colors">
                    {companyData.contact.email}
                  </a>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl flex items-start gap-4 glow-hover">
                <div className="w-12 h-12 rounded bg-primary-container/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Direct Phone Contact</span>
                  <a href={`tel:${companyData.contact.phone}`} className="font-body-md font-bold text-on-surface hover:text-primary transition-colors">
                    {companyData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl flex items-start gap-4 glow-hover">
                <div className="w-12 h-12 rounded bg-primary-container/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Headquarters Office</span>
                  <p className="font-body-md font-bold text-on-surface">
                    {companyData.contact.address}
                  </p>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl flex items-start gap-4 glow-hover">
                <div className="w-12 h-12 rounded bg-primary-container/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">schedule</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Support Hours</span>
                  <p className="font-body-md font-bold text-on-surface">
                    {companyData.contact.supportHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
