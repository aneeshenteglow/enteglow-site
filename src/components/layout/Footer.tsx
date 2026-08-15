import React from 'react';
import Link from 'next/link';
import { Layers, Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';
import { companyData } from '@/data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-slate-950 font-bold">
                <Layers size={22} />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Entelgow
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Entelgow architects, engineers, and scales custom software products for forward-thinking enterprises—unifying Web SaaS, Mobile Applications, Desktop Workstations, Agentic AI, and IoT Systems.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck size={13} />
                <span>SOC 2 Type II Ready</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                <Cpu size={13} />
                <span>Zero-Trust Architecture</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Product Engineering
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#custom-software" className="hover:text-gold-400 transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#web-saas" className="hover:text-gold-400 transition-colors">
                  Web SaaS Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-apps" className="hover:text-gold-400 transition-colors">
                  Mobile Field Applications
                </Link>
              </li>
              <li>
                <Link href="/services#desktop-workstations" className="hover:text-gold-400 transition-colors">
                  Native Workstations (Rust/Tauri)
                </Link>
              </li>
              <li>
                <Link href="/services#agentic-ai" className="hover:text-gold-400 transition-colors">
                  Agentic AI & Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Solutions & Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions#automate-operations" className="hover:text-gold-400 transition-colors">
                  Operations Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions#legacy-modernization" className="hover:text-gold-400 transition-colors">
                  Legacy Modernization
                </Link>
              </li>
              <li>
                <Link href="/industries#manufacturing" className="hover:text-gold-400 transition-colors">
                  Manufacturing & Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/industries#healthcare" className="hover:text-gold-400 transition-colors">
                  Healthcare & MedTech
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold-400 transition-colors">
                  Case Studies & Metrics
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
          <p>© {new Date().getFullYear()} Entelgow Software Engineering. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <span>Production Quality Guarantee</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

