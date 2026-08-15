'use client';

import React from 'react';
import Link from 'next/link';
import { X, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/common/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ href: string; label: string }>;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center text-white">
                <Layers size={18} />
              </div>
              <span className="font-bold text-lg text-navy-900">Entelgow</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-navy-900 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-4 py-3 rounded-xl text-base font-semibold text-navy-800 hover:bg-slate-50 hover:text-gold-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-3">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full"
            icon={<ArrowRight size={18} />}
            onClick={onClose}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  );
};
