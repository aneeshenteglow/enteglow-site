import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { contact, footerServices, homeNav } from '../data/homeContent';
import { socialLinks } from '../data/socialLinks';
import { Container, LogoLockup } from './primitives';

const companyLinks = [
  ...homeNav.filter((l) => l.href !== '/contact'),
  { href: '/#testimonials', label: 'Testimonials' },
  ...homeNav.filter((l) => l.href === '/contact'),
];

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
        <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-mist-500">
          At Enteglow, we combine creativity, technical expertise, and experience to develop unique, seamless, and
          innovative technology solutions.
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
            {footerServices.map((l) => (
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

    <a
      href="https://wa.me/919495634648"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.47 0 .11 5.36.11 11.95c0 2.11.55 4.17 1.6 5.98L0 24l6.23-1.63a11.9 11.9 0 0 0 5.82 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.49-8.42ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.7.97.99-3.61-.23-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  </footer>
);
