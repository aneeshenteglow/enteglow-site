import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Eyebrow } from '@/app/_home/components/primitives';

// Dark 404 so unknown URLs (and missing case studies) keep the site's header and theme legible.
export default function NotFound() {
  return (
    <div className="eg-home eg-atmosphere eg-grid relative isolate flex min-h-[80vh] items-center overflow-hidden font-sans">
      <Container className="relative py-40 text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.02] tracking-[-0.02em] text-mist-100">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[17px] leading-[1.7] text-mist-500">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="eg-btn eg-btn-primary">
            Back to Home <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="eg-btn eg-btn-secondary">
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
}
