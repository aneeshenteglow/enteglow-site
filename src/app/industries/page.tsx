import React from 'react';
import type { Metadata } from 'next';
import { IndustriesPageClient } from './components/IndustriesPageClient';

export const metadata: Metadata = {
  title: 'Enterprise Industry Solutions & Workflows | Enteglow',
  description:
    'Domain-tailored software engineering across IIoT Manufacturing, Fleet Logistics, Healthcare, Fintech, Omnichannel Retail, AgTech, and Enterprise Operations.',
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
