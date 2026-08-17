import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectPlannerProvider } from '@/context/ProjectPlannerContext';

export const metadata: Metadata = {
  title: {
    default: 'Enteglow | We Build Software That Moves Your Business Forward',
    template: '%s | Enteglow Technology Consultancy',
  },
  description:
    'Elevating business concepts to robust digital realities with cutting-edge technology. We engineer scalable, high-performance software solutions for the modern enterprise.',
  keywords: [
    'Enteglow Technology Consultancy',
    'AI Application Development',
    'Web App Development',
    'Website Development',
    'Web Maintenance and Cloud Hosting',
    'Custom Software Engineering',
    'Enterprise Architecture',
  ],
  authors: [{ name: 'Enteglow Team' }],
  creator: 'Enteglow',
  publisher: 'Enteglow',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://entelgow.com',
    title: 'Enteglow | We Build Software That Moves Your Business Forward',
    description:
      'Elevating business concepts to robust digital realities with cutting-edge technology.',
    siteName: 'Enteglow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enteglow | Software That Moves Your Business Forward',
    description:
      'Scalable, high-performance software solutions for the modern enterprise.',
    creator: '@enteglow',
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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-on-surface antialiased overflow-x-hidden min-h-screen flex flex-col font-sans selection:bg-primary-container selection:text-on-primary-container">
        <ProjectPlannerProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ProjectPlannerProvider>
      </body>
    </html>
  );
}
