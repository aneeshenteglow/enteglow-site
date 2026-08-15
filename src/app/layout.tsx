import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Entelgow — Software Product Engineering (Desktop, Mobile, Web, AI, IoT)',
    template: '%s | Entelgow Software Engineering',
  },
  description:
    'From idea to production — Entelgow designs, architects, and engineers software products across Desktop, Mobile, Web, AI Agents, and IoT for forward-thinking enterprises.',
  keywords: [
    'Software Development Company',
    'Desktop Application Development',
    'Mobile Application Development',
    'Web Application Engineering',
    'AI Agent Development',
    'IoT Telemetry Solutions',
    'Custom Software Engineering',
    'Next.js Enterprise Development',
  ],
  authors: [{ name: 'Entelgow Engineering Team' }],
  creator: 'Entelgow',
  publisher: 'Entelgow',
  metadataBase: new URL('https://entelgow.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://entelgow.com',
    title: 'Entelgow — Software Product Engineering across Desktop, Mobile, Web, AI & IoT',
    description:
      'Entelgow builds complete digital software products for business operations. Desktop, Mobile, Web, AI Agents, and IoT Platforms.',
    siteName: 'Entelgow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entelgow — Software Product Engineering',
    description:
      'Complete digital software products across desktop, mobile, web, AI, and IoT.',
    creator: '@entelgow',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className="bg-white text-navy-900 min-h-screen flex flex-col font-sans selection:bg-gold-500 selection:text-white">
        <Header />
        <main className="flex-grow pt-[104px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
