'use client';

import React from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ href: string; label: string }>;
  onOpenPlanner?: () => void;
}

const ENTEGLOW_LOGO_URL = 'logo.png';

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
  onOpenPlanner,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full bg-surface-deep/95 backdrop-blur-2xl shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-glass-border">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-glass-border pb-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <img
                src={ENTEGLOW_LOGO_URL}
                alt="Enteglow Logo"
                className="h-7 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="px-4 py-4 rounded-xl hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-4 py-3 rounded font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface hover:text-primary hover:bg-surface-container transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-glass-border space-y-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenPlanner?.();
            }}
            className="bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase w-full px-4 py-4 rounded-xl font-bold hover:shadow-[0_0_15px_rgba(227,30,36,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Book a Meeting
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
