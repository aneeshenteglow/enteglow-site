'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { contact } from '@/app/_home/data/homeContent';

const services = [
  'AI Application Development',
  'Web App Development',
  'Website Development',
  'Web Maintenance & Hosting',
  'Custom Enterprise Software',
];

const fieldClass =
  'w-full rounded-2xl border border-ink-700 bg-ink-900 px-4 py-3.5 text-[15px] text-mist-100 placeholder:text-mist-600 transition-colors duration-160 hover:border-ink-600 focus:border-brand-400';
const labelClass = 'mb-2 block text-[13px] font-semibold text-mist-300';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: services[0],
    message: '',
  });

  const update =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [field]: e.target.value });

  // There is no form backend yet, so the enquiry is handed to the visitor's email app, addressed to Enteglow.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.company && `Company: ${formData.company}`,
      `Service: ${formData.service}`,
      '',
      formData.message,
    ]
      .filter((line) => line !== '')
      .join('\n');
    const subject = `Project enquiry: ${formData.service}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-10 text-center" role="status">
        <CheckCircle2 aria-hidden className="mx-auto h-12 w-12 text-brand-400" strokeWidth={1.5} />
        <h3 className="mt-6 font-display text-[2rem] font-normal leading-tight text-mist-100">Your email is ready to send</h3>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.7] text-mist-500">
          We opened your email app with your enquiry addressed to{' '}
          <a href={`mailto:${contact.email}`} className="text-mist-100 underline underline-offset-4">
            {contact.email}
          </a>
          . Press send there to reach our team. If nothing opened, email or call us directly.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="eg-btn eg-btn-secondary mt-8">
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="font-display text-[2rem] font-normal leading-tight text-mist-100">Project Discovery Inquiry</h3>
        <p className="mt-2 text-[15px] text-mist-500">
          Fill out your technical requirements below to initiate project evaluation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Your Full Name *
          </label>
          <input id="cf-name" type="text" required autoComplete="name" value={formData.name} onChange={update('name')} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Work Email Address *
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={update('email')}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-company" className={labelClass}>
            Company Name
          </label>
          <input
            id="cf-company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={update('company')}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-service" className={labelClass}>
            Target Software Discipline
          </label>
          <select id="cf-service" value={formData.service} onChange={update('service')} className={fieldClass}>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Project Requirements &amp; Details *
        </label>
        <textarea
          id="cf-message"
          required
          rows={6}
          value={formData.message}
          onChange={update('message')}
          placeholder="Describe your project vision, key technical features, desired target launch date, and existing systems to integrate..."
          className={fieldClass}
        />
      </div>

      <button type="submit" className="eg-btn eg-btn-primary w-full">
        Submit Technical Inquiry <ArrowRight aria-hidden className="h-4 w-4" />
      </button>
    </form>
  );
};
