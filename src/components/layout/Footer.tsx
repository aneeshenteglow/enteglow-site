'use client';

import React from 'react';
import Link from 'next/link';

const ENTEGLOW_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AP1WRLuSl1wksfHbxl-SjNQycyf8pz9gS_hPn8Me6Vdo-7ySZBvIY_3If95ZpVbhdyCLF30fVMjHycV3V99zXHdOxNz2pcp8WKM6l6iscFcodw0NFh0IbJ7I1ZxKWAWBbIRXGsLao_NgjkQEBzklSBoK4htPoZPWkZFsnBJef9fPF6tZ2X1xg7-CIjvf0Gd5PFy3VLBtlmrL1exA7-hIqfqfTdy-VqIfgUp6KHgq7o8ZvZ0se1cE-MBK3B4M6pka';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full rounded-t-[32px] border-t border-surface-variant bg-surface-container-lowest transition-all duration-200 mt-24">
      <div className="max-w-container-max mx-auto px-gutter py-section-padding-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Brand info */}
        <div className="md:col-span-1 mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-6">
            <img
              alt="Enteglow Logo"
              className="h-8 w-auto object-contain"
              src={ENTEGLOW_LOGO_URL}
            />
            <span className="font-headline font-bold text-headline-md text-primary">
              Enteglow
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 pr-8">
            High-performance engineering for the modern enterprise.
          </p>
        </div>

        {/* Column 1: Services */}
        <div>
          <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-6">
            Services
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="/services"
              >
                AI Development
              </Link>
            </li>
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="/services"
              >
                Web Apps
              </Link>
            </li>
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="/services"
              >
                Cloud Hosting
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-6">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="/projects"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="/contact"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-6">
            Legal
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="#"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="#"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-electric-blue transition-colors"
                href="/sitemap.xml"
              >
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="md:col-span-4 mt-12 pt-8 border-t border-surface-variant flex flex-col md:flex-row justify-between items-center">
          <p className="font-body-md text-body-md text-on-surface-variant mb-4 md:mb-0">
            © {new Date().getFullYear()} Enteglow Technology Consultancy. All rights reserved.
          </p>
          <div className="flex gap-4 text-outline">
            <span className="material-symbols-outlined hover:text-electric-blue cursor-pointer transition-colors">
              language
            </span>
            <span className="material-symbols-outlined hover:text-electric-blue cursor-pointer transition-colors">
              mail
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
