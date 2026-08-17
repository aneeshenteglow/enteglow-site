'use client';

import React from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ href: string; label: string }>;
  onOpenPlanner?: () => void;
}

const ENTEGLOW_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AP1WRLuSl1wksfHbxl-SjNQycyf8pz9gS_hPn8Me6Vdo-7ySZBvIY_3If95ZpVbhdyCLF30fVMjHycV3V99zXHdOxNz2pcp8WKM6l6iscFcodw0NFh0IbJ7I1ZxKWAWBbIRXGsLao_NgjkQEBzklSBoK4htPoZPWkZFsnBJef9fPF6tZ2X1xg7-CIjvf0Gd5PFy3VLBtlmrL1exA7-hIqfqfTdy-VqIfgUp6KHgq7o8ZvZ0se1cE-MBK3B4M6pka';

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
        className="fixed inset-0 bg-deep-slate/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface-container-lowest/95 backdrop-blur-2xl shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-glass-stroke">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-surface-container-high pb-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <img
                src={ENTEGLOW_LOGO_URL}
                alt="Enteglow Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="font-headline font-bold text-headline-md text-primary">
                Enteglow
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
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
                className="px-4 py-3 rounded-xl font-label-md text-label-md font-semibold text-on-surface hover:text-electric-blue hover:bg-surface-container-low transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-surface-container-high space-y-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenPlanner?.();
            }}
            className="btn-primary font-label-md text-label-md w-full py-4 uppercase tracking-wider font-semibold cursor-pointer"
          >
            Book a Meeting
          </button>
        </div>
      </div>
    </div>
  );
};
