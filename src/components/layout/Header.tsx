'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileNav } from './MobileNav';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';
import { HomeHeader } from '@/app/_home/components/HomeHeader';

const ENTEGLOW_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AP1WRLuSl1wksfHbxl-SjNQycyf8pz9gS_hPn8Me6Vdo-7ySZBvIY_3If95ZpVbhdyCLF30fVMjHycV3V99zXHdOxNz2pcp8WKM6l6iscFcodw0NFh0IbJ7I1ZxKWAWBbIRXGsLao_NgjkQEBzklSBoK4htPoZPWkZFsnBJef9fPF6tZ2X1xg7-CIjvf0Gd5PFy3VLBtlmrL1exA7-hIqfqfTdy-VqIfgUp6KHgq7o8ZvZ0se1cE-MBK3B4M6pka';

const navLinks = [
  { href: '/about', label: 'Company' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Case Studies' },
  { href: '/process', label: 'Resources' },
];

export const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const pathname = usePathname();

  // The homepage uses the Brand Book 2026 header; inner pages keep this one.
  if (pathname === '/') return <HomeHeader />;

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-container-max rounded-full border border-glass-stroke bg-surface/80 backdrop-blur-xl shadow-2xl z-50 flex justify-between items-center px-8 py-4">
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-4 group">
          <img
            src={ENTEGLOW_LOGO_URL}
            alt="Enteglow Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-headline font-bold text-headline-md text-primary tracking-tight">
            Enteglow
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md text-label-md transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? 'text-electric-blue font-bold border-b-2 border-electric-blue pb-1'
                    : 'text-on-surface font-medium hover:text-electric-blue'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={() => setPlannerOpen(true)}
            className="btn-primary font-label-md text-label-md px-6 py-3 uppercase tracking-wider font-semibold cursor-pointer active:scale-95 transition-all"
          >
            Book a Meeting
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          className="md:hidden text-primary flex items-center justify-center"
          aria-label="Open navigation menu"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={navLinks}
        onOpenPlanner={() => setPlannerOpen(true)}
      />

      {/* Interactive Scope & Meeting Planner Modal */}
      <ProjectPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
};
