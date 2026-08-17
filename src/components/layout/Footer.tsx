'use client';

import React from 'react';
import Link from 'next/link';

const LOCAL_LOGO_URL = '/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-deep border-t border-glass-border w-full pt-24 pb-12">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Left Column: Branding & Social */}
          <div className="flex flex-col gap-6">
            <Link className="inline-flex items-center gap-3" href="/" prefetch={true}>
              <img
                alt="Enteglow Logo"
                className="h-8 w-auto object-contain"
                width={32}
                height={32}
                src={LOCAL_LOGO_URL}
              />
              <span className="font-headline-md text-xl tracking-wider font-bold text-on-surface">
                ENTE<span className="text-primary">GLOW</span>
              </span>
            </Link>
            <p className="text-on-surface-variant text-body-md max-w-xs">
              Precision product engineering for the modern enterprise. We transform business ideas into scalable digital realities.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                href="https://www.facebook.com/enteglow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                href="https://x.com/enteglow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                href="https://www.linkedin.com/company/enteglow/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined text-[20px]">group</span>
              </a>
            </div>
          </div>

          {/* Column 2: Platform/Services */}
          <div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-6 uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/services" prefetch={true}>
                  AI Application Development
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/services" prefetch={true}>
                  Web Application Development
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/services" prefetch={true}>
                  Website Development
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/services" prefetch={true}>
                  Web Maintenance &amp; Hosting
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/services" prefetch={true}>
                  Mobile Application Development
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/services" prefetch={true}>
                  IoT Application Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/services" prefetch={true}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/about" prefetch={true}>
                  Company
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/contact" prefetch={true}>
                  Legal
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/contact" prefetch={true}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/contact" prefetch={true}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-6 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                <a className="hover:text-primary transition-colors" href="tel:+919495634648">
                  +91 9495634648
                </a>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                <a className="hover:text-primary transition-colors" href="mailto:info@enteglow.com">
                  info@enteglow.com
                </a>
              </li>
              <li className="mt-6">
                <p className="text-xs text-on-surface-variant mb-4">Ready to take the next step?</p>
                <Link
                  className="group bg-primary-container text-on-primary-container px-6 py-2.5 rounded font-bold text-label-sm uppercase inline-flex items-center gap-2 shimmer-btn hover:shadow-[0_0_20px_rgba(227,30,36,0.4)] transition-all hover:-translate-y-0.5"
                  href="/contact"
                  prefetch={true}
                >
                  <span>Enquire Now</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">
            © {new Date().getFullYear()} ENTEGLOW. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link className="text-on-surface-variant hover:text-primary text-xs uppercase tracking-widest transition-colors" href="/contact" prefetch={true}>
              Terms
            </Link>
            <Link className="text-on-surface-variant hover:text-primary text-xs uppercase tracking-widest transition-colors" href="/contact" prefetch={true}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
