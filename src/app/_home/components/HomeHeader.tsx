'use client';

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { contact, homeNav, servicesMenu } from '../data/homeContent';
import { LogoLockup } from './primitives';
import { cn } from '../cn';

const navLinkClass =
  'rounded-full px-3 py-2 text-sm font-medium text-mist-300 transition-colors duration-160 ease-standard hover:text-mist-100';

const ServicesDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <div className="flex items-center">
        <Link href="/services" className={cn(navLinkClass, 'pr-1')}>
          Services
        </Link>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label="Show service pages"
          // Pointer users already opened it on hover, so only keyboard activation (detail 0) toggles.
          onClick={(e) => setOpen((v) => (e.detail === 0 ? !v : true))}
          className="grid h-8 w-8 place-items-center rounded-full text-mist-500 transition-colors duration-160 hover:text-mist-100"
        >
          <ChevronDown
            aria-hidden
            className={cn('h-4 w-4 transition-transform duration-280 ease-standard', open && 'rotate-180')}
          />
        </button>
      </div>
      {/* pt-3 bridges the gap so the menu stays open while the pointer moves into it */}
      <div id={menuId} hidden={!open} className="absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3">
        <ul className="rounded-[18px] border border-ink-line bg-ink-800 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          {servicesMenu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl px-4 py-2.5 text-sm text-mist-300 transition-colors duration-160 hover:bg-ink-750 hover:text-mist-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-1 border-t border-ink-line pt-1">
            <Link
              href="/services"
              className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-brand-400 transition-colors duration-160 hover:bg-ink-750"
            >
              All services <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

const MobileMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !panelRef.current) return;
      // Keep focus inside the open menu.
      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="eg-chrome fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink-900 lg:hidden"
    >
      <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-ink-line px-4 sm:px-6">
        <LogoLockup onClick={onClose} />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-ink-600 text-mist-100"
        >
          <X aria-hidden className="h-5 w-5" />
        </button>
      </div>
      <nav aria-label="Mobile" className="flex-1 px-4 py-6 sm:px-6">
        <ul className="space-y-1">
          {homeNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-xl px-3 py-3 text-2xl font-semibold tracking-[-0.03em] text-mist-100"
              >
                {item.label}
              </Link>
              {item.href === '/services' && (
                <ul className="mb-2 ml-3 border-l border-ink-line pl-3">
                  {servicesMenu.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} onClick={onClose} className="block py-2 text-[15px] text-mist-500">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-ink-line px-4 py-6 sm:px-6">
        <Link href={contact.contactPage} onClick={onClose} className="eg-btn eg-btn-primary w-full">
          Let&apos;s Talk <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export const HomeHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <>
      <a
        href="#home-content"
        className="eg-chrome sr-only z-[70] rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header
        className={cn(
          'eg-chrome fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-280 ease-standard',
          scrolled ? 'border-ink-line bg-ink-950/85 backdrop-blur-md' : 'border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <LogoLockup />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {homeNav.map((item) =>
                item.href === '/services' ? (
                  <ServicesDropdown key={item.href} />
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className={navLinkClass}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href={contact.contactPage} className="eg-btn eg-btn-primary hidden !min-h-[44px] sm:inline-flex">
              Let&apos;s Talk <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-600 text-mist-100 lg:hidden"
            >
              <Menu aria-hidden className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      {menuOpen && <MobileMenu onClose={closeMenu} />}
    </>
  );
};
