'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Layers, ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { MobileNav } from './MobileNav';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';
import { companyData } from '@/data/company';


const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/projects', label: 'Case Studies' },
  { href: '/process', label: 'Process' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
];

export const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-navy-900 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
              >
                <Mail size={13} className="text-gold-500" />
                <span>{companyData.contact.email}</span>
              </a>
              <a
                href={`tel:${companyData.contact.phone}`}
                className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
              >
                <Phone size={13} className="text-gold-500" />
                <span>{companyData.contact.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Q3/Q4 Projects</span>
              </div>
              <button
                onClick={() => setPlannerOpen(true)}
                className="font-semibold text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1.5"
              >
                <Sparkles size={13} />
                <span>Request Scope & Quote</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-200'
              : 'bg-white py-4 border-b border-slate-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gold-500 group-hover:bg-gold-600 transition-colors flex items-center justify-center text-slate-950 font-bold shadow-md shadow-gold-500/20">
                  <Layers size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl text-navy-900 tracking-tight leading-none group-hover:text-gold-600 transition-colors">
                    Entelgow
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-0.5 font-semibold">
                    Product Engineering
                  </span>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'text-gold-700 bg-gold-100/70 font-bold'
                          : 'text-navy-700 hover:text-navy-950 hover:bg-slate-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <Button
                  onClick={() => setPlannerOpen(true)}
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight size={16} />}
                  className="shadow-md shadow-gold-500/25"
                >
                  Start a Project
                </Button>
              </div>

              <div className="flex items-center lg:hidden gap-2">
                <button
                  onClick={() => setMobileNavOpen(true)}
                  className="p-2 rounded-xl text-navy-800 hover:text-navy-950 hover:bg-slate-100 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <MobileNav
          isOpen={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
          navLinks={navLinks}
        />
      </header>

      {/* Global Interactive Project Scope Planner Modal */}
      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};

