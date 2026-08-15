'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Layers, ArrowRight, Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { MobileNav } from './MobileNav';
import { companyData } from '@/data/company';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/projects', label: 'Projects' },
  { href: '/process', label: 'Process' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
];

export const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-navy-800 hidden md:block">
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
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock size={13} className="text-gold-500" />
              <span>{companyData.contact.supportHours}</span>
            </div>
            <Link
              href="/contact"
              className="font-medium text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1"
            >
              <span>Request Quote</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gold-500 group-hover:bg-gold-600 transition-colors flex items-center justify-center text-white shadow-md shadow-gold-500/30">
                <Layers size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-navy-900 tracking-tight leading-none group-hover:text-gold-600 transition-colors">
                  Entelgow
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-0.5">
                  Software Engineering
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
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-gold-600 bg-gold-50'
                        : 'text-navy-700 hover:text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowRight size={16} />}
              >
                Start a Project
              </Button>
            </div>

            <div className="flex items-center lg:hidden gap-2">
              <button
                onClick={() => setMobileNavOpen(true)}
                className="p-2 rounded-lg text-navy-700 hover:text-navy-900 hover:bg-slate-100 transition-colors"
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
  );
};
