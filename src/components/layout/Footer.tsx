import React from 'react';
import Link from 'next/link';
import { Layers, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { companyData } from '@/data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gold-500 flex items-center justify-center text-white font-bold">
                <Layers size={20} />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Entelgow
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {companyData.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 text-slate-400 hover:text-white hover:border-gold-500 flex items-center justify-center transition-all text-xs font-mono font-bold"
                aria-label="GitHub"
              >
                GH
              </a>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 text-slate-400 hover:text-white hover:border-gold-500 flex items-center justify-center transition-all text-xs font-mono font-bold"
                aria-label="LinkedIn"
              >
                IN
              </a>
              <a
                href={companyData.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 text-slate-400 hover:text-white hover:border-gold-500 flex items-center justify-center transition-all text-xs font-mono font-bold"
                aria-label="Twitter"
              >
                X
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Product Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#desktop-applications" className="hover:text-gold-400 transition-colors">
                  Desktop Applications
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-applications" className="hover:text-gold-400 transition-colors">
                  Mobile Products
                </Link>
              </li>
              <li>
                <Link href="/services#web-applications" className="hover:text-gold-400 transition-colors">
                  Web SaaS Portals
                </Link>
              </li>
              <li>
                <Link href="/services#ai-agents" className="hover:text-gold-400 transition-colors">
                  AI Agents & RAG
                </Link>
              </li>
              <li>
                <Link href="/services#iot-solutions" className="hover:text-gold-400 transition-colors">
                  IoT Hardware Telemetry
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions" className="hover:text-gold-400 transition-colors">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-gold-400 transition-colors">
                  Tech Spectrum
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-gold-400 transition-colors">
                  7-Stage SDLC
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-gold-400 transition-colors">
                  Domain Industries
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Contact Headquarters
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-gold-500 shrink-0 mt-0.5" />
                <span>{companyData.contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-gold-500 shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold-500 shrink-0" />
                <a href={`tel:${companyData.contact.phone}`} className="hover:text-white transition-colors">
                  {companyData.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Entelgow. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about#engineering-philosophy" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <span>Engineering Craftsmanship Guarantee</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
