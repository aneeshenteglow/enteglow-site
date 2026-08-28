'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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
      <header className="bg-background/85 backdrop-blur-xl border-b border-glass-border fixed top-0 w-full z-50 transition-all duration-300">
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
            {/* <span className="font-headline-md text-xl tracking-wider font-bold text-on-surface">
              ENTE<span className="text-primary">GLOW</span>
            </span> */}
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
                  className="relative py-1 font-label-sm text-label-sm uppercase transition-colors duration-300 group"
                >
                  <span
                    className={`${
                      isActive
                        ? 'text-primary font-bold'
                        : 'font-medium group-hover:text-on-surface'
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive ? (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(227,30,36,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/60 transition-all duration-300 group-hover:w-full rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openPlanner}
              className="group bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase px-4 py-4 rounded-xl font-bold shimmer-btn hover:shadow-[0_0_20px_rgba(227,30,36,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Meeting</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden text-on-surface flex items-center justify-center px-4 py-4 rounded-xl border border-glass-border glass-panel"
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
