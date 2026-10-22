import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { contact, homeNav, servicesMenu } from '../data/homeContent';
import { socialLinks } from '../data/socialLinks';
import { Container, LogoLockup } from './primitives';

const companyLinks = [...homeNav, { href: contact.contactPage, label: 'Contact' }];

const linkClass = 'text-[15px] text-mist-500 transition-colors duration-160 hover:text-mist-100';

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-mist-600">{title}</h2>
    <div className="mt-5">{children}</div>
  </div>
);

export const HomeFooter: React.FC = () => (
  <footer className="eg-chrome border-t border-ink-line bg-ink-950">
    <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
      <div className="sm:col-span-2 lg:col-span-4">
        <LogoLockup />
        <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-mist-500">
          Ready to take the next step? Let&apos;s connect today.
        </p>
        <ul className="mt-6 flex gap-2" aria-label="Enteglow on social media">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enteglow on ${s.name} (opens in a new tab)`}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-700 text-mist-500 transition-colors duration-160 hover:border-ink-600 hover:text-mist-100"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-2">
        <FooterColumn title="Company">
          <ul className="space-y-3">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>
      </div>

      <div className="lg:col-span-3">
        <FooterColumn title="Services">
          <ul className="space-y-3">
            {servicesMenu.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>
      </div>

      <div className="lg:col-span-3">
        <FooterColumn title="Connect">
          <ul className="space-y-4">
            <li>
              <a href={contact.phoneHref} className={`${linkClass} inline-flex items-center gap-3`}>
                <Phone aria-hidden className="h-4 w-4 text-brand-400" strokeWidth={1.75} />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className={`${linkClass} inline-flex items-center gap-3`}>
                <Mail aria-hidden className="h-4 w-4 text-brand-400" strokeWidth={1.75} />
                {contact.email}
              </a>
            </li>
          </ul>
        </FooterColumn>
      </div>
    </Container>
    <div className="border-t border-ink-line">
      <Container className="py-6">
        <p className="text-sm text-mist-600">© {new Date().getFullYear()} Enteglow. All rights reserved.</p>
      </Container>
    </div>
  </footer>
);
