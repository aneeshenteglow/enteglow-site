'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileNav } from './MobileNav';
import { useProjectPlanner } from '@/context/ProjectPlannerContext';

const LOCAL_LOGO_URL = '/logo.png';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Company' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Case Studies' },
  { href: '/process', label: 'Resources' },
];

export const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { openPlanner } = useProjectPlanner();
  const pathname = usePathname();

  return (
    <>
      <header className="bg-background/80 backdrop-blur-xl border-b border-glass-border fixed top-0 w-full z-50">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
          {/* Brand Logo */}
          <Link href="/" prefetch={true} className="flex items-center gap-3 group">
            <img
              src={LOCAL_LOGO_URL}
              alt="Enteglow Logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-headline-md text-xl tracking-wider font-bold text-on-surface">
              ENTE<span className="text-primary">GLOW</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
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
              onClick={openPlanner}
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
        onOpenPlanner={openPlanner}
      />
    </>
  );
};
