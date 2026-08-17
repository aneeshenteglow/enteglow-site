'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileNav } from './MobileNav';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

const ENTEGLOW_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AP1WRLuw0xLnjBYNiRdgRTHg_Xnx7s3668S0IvyT8RVwnv7bXUGX9qYOzX9JXqb8HC0okibDP_r453hJUXl3_P4K_hPtCSPagq2aqXWKkZWW0aolMCtBMJ8uv2lXXEJsDezt7tN5bqgFtS_KSXCvxa6nrmMXb746kBzBscfff4zsH2vxN2mVg1BIKIcGBVFqD6G-ZWnypuFnKFbVNPbD0_PkURah0NeLbptJuN3sMm_o79oAjN091oxZ6ijSQnXw';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Company' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Case Studies' },
  { href: '/process', label: 'Resources' },
];

export const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-background/80 backdrop-blur-xl border-b border-glass-border fixed top-0 w-full z-50">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={ENTEGLOW_LOGO_URL}
              alt="Enteglow Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label-sm text-label-sm uppercase transition-colors duration-300 ${
                    isActive
                      ? 'text-primary font-bold border-b-2 border-primary pb-1'
                      : 'text-on-surface-variant font-medium hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPlannerOpen(true)}
              className="bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase px-6 py-2 rounded font-bold hover:shadow-[0_0_15px_rgba(227,30,36,0.3)] transition-all transform hover:-translate-y-px active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              Book a Meeting
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden text-on-surface flex items-center justify-center p-1"
              aria-label="Open navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={navLinks}
        onOpenPlanner={() => setPlannerOpen(true)}
      />

      {/* Project Scope & Planner Modal */}
      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};
