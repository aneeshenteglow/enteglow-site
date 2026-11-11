import { heroSlides } from '@/app/_home/data/homeContent';
import type { ServiceDetail } from '../types/service';

// One list for the /services grid and every /services/[slug] page.
//
// Sources, in order of preference:
//  1. Approved homepage copy (titles, taglines, descriptions, banner photos) — read from `heroSlides`
//     so the wording stays identical to the homepage.
//  2. The previous /services page content (descriptions, capabilities, challenges, deliverables,
//     approach and technologies), reused verbatim.
// Services with no content in either source keep only what exists; gaps are noted inline.

// Homepage service palette (see ServicesSection).
const CORAL = '#F06A4F';
const AMBER = '#FFB86B';
const GREEN = '#38B67A';

const slide = (id: string) => {
  const found = heroSlides.find((s) => s.id === id);
  if (!found) throw new Error(`Missing hero slide: ${id}`);
  return found;
};
/** First sentence of an approved description, for the short card copy. */
const firstSentence = (text: string) => text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text;

const ai = slide('ai-application-development');
const webApp = slide('web-application-development');
const appMaintenance = slide('application-maintenance');
const websiteMaintenance = slide('website-maintenance');
const mobile = slide('mobile-app-development');

export const servicesData: ServiceDetail[] = [
  {
    slug: 'ai-application-development',
    title: ai.title,
    tagline: ai.subtitle,
    summary: 'Domain artificial intelligence embedded directly into enterprise software.',
    overview: [
      ai.description,
      'Enteglow builds functional AI agents capable of autonomous reasoning, semantic vector document search (RAG), and executing API tool actions. We replace simple chatbots with structured agentic workflows that integrate into your existing ERP, CRM, or database systems.',
    ],
    visual: 'ai',
    accent: CORAL,
    image: ai.image,
    problemsSolved: [
      'Manual repetitive document audit and data extraction tasks',
      'Unstructured enterprise document search across thousands of PDFs',
      'LLM hallucination risks in compliance-critical workflows',
      'Lack of real API action execution in standard chat interfaces',
    ],
    keyCapabilities: [
      'Retrieval-Augmented Generation (RAG) using Qdrant vector databases',
      'LangChain & LlamaIndex multi-agent orchestration frameworks',
      'Autonomous tool-calling agents executing REST/gRPC actions',
      'Strict prompt guardrails and output schema verification',
    ],
    deliverables: [
      'Deployed AI Agent microservice API',
      'Vector database indexing pipelines',
      'Token usage & cost auditing dashboard',
    ],
    technologies: ['Python', 'LangChain', 'LlamaIndex', 'Qdrant', 'OpenAI / Claude API', 'FastAPI'],
    approach:
      'We apply strict output schema validation on all LLM responses, ensuring AI agents only trigger external API tools when payload parameters meet exact validation rules.',
    related: ['web-application-development', 'mobile-app-development', 'application-maintenance'],
  },
  {
    slug: 'web-application-development',
    title: webApp.title,
    tagline: webApp.subtitle,
    summary: 'We specialise in creating innovative custom software applications that meet unique business needs.',
    overview: [
      webApp.description,
      'Enteglow designs and develops Next.js App Router web applications engineered for high tenant concurrency. We implement strict Row-Level Security (RLS), Server Component data fetching, responsive accessible UI design systems, and real-time WebSocket feeds.',
    ],
    visual: 'web-app',
    accent: AMBER,
    image: webApp.image,
    problemsSolved: [
      'Slow initial page loading waterfalls and unoptimized client bundles',
      'Insecure multi-tenant data leakage across enterprise accounts',
      'Complex state management bugs in large React codebases',
      'Inconsistent UI design across disparate web portals',
    ],
    keyCapabilities: [
      'Next.js Server Components (RSC) for zero-waterfall initial page loads',
      'PostgreSQL Row-Level Security (RLS) multi-tenant authorization',
      'Real-time bi-directional WebSockets and Server-Sent Events (SSE)',
      'Tailwind CSS custom design systems with full WCAG accessibility',
    ],
    deliverables: [
      'Production Next.js application codebase',
      'Dockerized container builds with Kubernetes deployment manifests',
      'OpenAPI / Swagger API documentation',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    approach:
      'We leverage Next.js Server Components to fetch data directly on the server, drastically reducing client JS bundle size and delivering sub-second page loads.',
    related: ['application-maintenance', 'website-development', 'mobile-app-development'],
  },
  {
    // Content gap: only the approved homepage description exists for this service.
    slug: 'application-maintenance',
    title: appMaintenance.title,
    tagline: appMaintenance.subtitle,
    summary: firstSentence(appMaintenance.description),
    overview: [appMaintenance.description],
    visual: 'app-maintenance',
    accent: GREEN,
    image: appMaintenance.image,
    related: ['web-application-development', 'website-maintenance', 'mobile-app-development'],
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    // Tagline from the current enteglow.com homepage banner.
    tagline: 'Go global, get noticed',
    summary: 'High-performance company websites built for speed, SEO, and visual excellence.',
    overview: [
      'We build marketing and corporate websites that communicate technical credibility. Structured using Next.js static generation (SSG) with dynamic CMS hooks, our websites achieve 95+ Lighthouse performance scores, perfect mobile responsiveness, and strong SEO foundations.',
    ],
    visual: 'website',
    accent: CORAL,
    problemsSolved: [
      'Slow page speeds hurting conversion and Google search rankings',
      'Fragile template themes vulnerable to security exploits',
      'Poor mobile viewport responsiveness and layout shift (CLS)',
      'Inflexible static sites that cannot scale to dynamic portals later',
    ],
    keyCapabilities: [
      'Static Site Generation (SSG) with Incremental Static Regeneration (ISR)',
      'Lighthouse 95+ performance optimization across mobile and desktop',
      'Structured SEO JSON-LD schema markup and XML sitemap generation',
      'Headless CMS integration (Strapi, Sanity, Contentful)',
    ],
    deliverables: [
      'Static production website bundle ready for CDN deployment',
      'SEO metadata implementation report',
      'Content editing documentation',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel / Cloudflare'],
    approach:
      'We compile marketing pages ahead of time into static HTML on the edge, guaranteeing instant page delivery and zero server maintenance overhead.',
    related: ['website-maintenance', 'domain-registration-hosting', 'web-application-development'],
  },
  {
    // Content gap: only the approved homepage description exists for this service.
    slug: 'website-maintenance',
    title: websiteMaintenance.title,
    tagline: websiteMaintenance.subtitle,
    summary: 'We ensure continuous performance, security, reliability, and adaptability through proactive monitoring.',
    overview: [websiteMaintenance.description],
    visual: 'website-maintenance',
    accent: GREEN,
    image: websiteMaintenance.image,
    related: ['website-development', 'domain-registration-hosting', 'application-maintenance'],
  },
  {
    // Content gap: no approved tagline or description exists yet. The summary only restates the
    // service name; replace it once copy is approved.
    slug: 'domain-registration-hosting',
    title: 'Domain Registration & Hosting',
    summary: 'Domain registration and hosting for your business website.',
    visual: 'domain',
    accent: AMBER,
    related: ['website-development', 'website-maintenance', 'web-application-development'],
  },
  {
    slug: 'mobile-app-development',
    title: mobile.title,
    tagline: mobile.subtitle,
    summary: mobile.description,
    overview: [
      'We engineer mobile applications for field technicians, enterprise operations, and consumer platforms. Built with React Native, Flutter, Swift, and Kotlin, our mobile products feature background synchronization queues, biometric security, camera/sensor capture, and fluid 60 FPS interfaces.',
    ],
    visual: 'mobile',
    accent: CORAL,
    problemsSolved: [
      'Intermittent cellular connection causing data loss during field inspections',
      'Sluggish UI performance on enterprise-issued rugged devices',
      'Complex cross-platform code drift between iOS and Android',
      'Security vulnerabilities in local token and file storage',
    ],
    keyCapabilities: [
      'Bi-directional offline delta synchronization queues',
      'Biometric login (FaceID/TouchID) and secure hardware enclave storage',
      'Real-time GPS tracking and background location telemetry',
      'Custom camera image processing and barcode/QR scanning engines',
    ],
    deliverables: [
      'App Store & Google Play production release builds',
      'Private Enterprise MDM distribution packages (.ipa, .apk)',
      'Automated E2E mobile testing suites',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'TypeScript', 'SQLite'],
    approach:
      'Our mobile architecture isolates network operations inside persistent background tasks, ensuring user interactions remain instant regardless of network latency.',
    related: ['web-application-development', 'ai-application-development', 'application-maintenance'],
  },
];

export const getService = (slug: string) => servicesData.find((s) => s.slug === slug);
