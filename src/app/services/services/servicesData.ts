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
    related: ['web-application-development', 'custom-software-engineering', 'api-development'],
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
    related: ['application-maintenance', 'api-development', 'ui-ux-design'],
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
    related: ['web-application-development', 'website-maintenance', 'cloud-infrastructure-devops'],
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
    related: ['website-maintenance', 'domain-registration-hosting', 'ui-ux-design'],
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
    related: ['website-development', 'website-maintenance', 'cloud-infrastructure-devops'],
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
    related: ['api-development', 'ui-ux-design', 'iot-application-development'],
  },
  {
    slug: 'iot-application-development',
    title: 'IoT Application Development',
    summary: 'End-to-end telemetry ingestion, MQTT brokers, and edge device monitoring.',
    overview: [
      'We bridge physical hardware devices with cloud platforms. Enteglow engineers high-concurrency MQTT telemetry ingestion pipelines, edge gateway parsers, time-series database storage, and real-time supervisory web control portals.',
    ],
    visual: 'iot',
    accent: AMBER,
    problemsSolved: [
      'High message loss during hardware telemetry spikes',
      'Incompatible industrial protocols (Modbus, CAN Bus, OPC UA)',
      'High cloud data storage costs for raw time-series streams',
      'Lack of real-time alert notifications for critical machine thresholds',
    ],
    keyCapabilities: [
      'High-throughput MQTT broker clusters (EMQX / HiveMQ)',
      'Edge gateway binary Protobuf parser microservices',
      'Time-series database optimization (InfluxDB / TimescaleDB)',
      'Sub-second threshold alert push over WebSockets',
    ],
    deliverables: [
      'Telemetry ingestion pipeline infrastructure code',
      'Edge device firmware parser modules',
      'Real-time supervisory control dashboard',
    ],
    technologies: ['MQTT', 'EMQX', 'InfluxDB', 'Python', 'C++ / Embedded C', 'React'],
    approach:
      'Our IoT systems utilize store-and-forward edge caching to preserve hardware telemetry readings locally whenever network connectivity drops.',
    related: ['ai-application-development', 'cloud-infrastructure-devops', 'mobile-app-development'],
  },
  {
    slug: 'desktop-application-development',
    title: 'Desktop Application Development',
    summary: 'Low-latency, memory-efficient native workstations for Windows, macOS, and Linux.',
    overview: [
      'When web browsers hit performance caps, memory limits, or offline constraints, Enteglow builds high-frequency desktop applications. Using Tauri, Rust, Electron, and C#/.NET, we deliver software capable of direct hardware communication, local file encryption, and multi-monitor data visualization.',
    ],
    visual: 'desktop',
    accent: GREEN,
    problemsSolved: [
      'Browser memory limitations during high-density data rendering',
      'Lack of offline persistence in remote or subterranean job sites',
      'Direct hardware peripheral integration (USB, Serial, Bluetooth, GPU)',
      'Strict data privacy requiring local encrypted database storage',
    ],
    keyCapabilities: [
      'Native cross-platform binaries for Windows, macOS, and Linux',
      'Rust and C# backend integration for sub-millisecond thread execution',
      'Offline-first SQLite/RocksDB local database synchronization',
      'Multi-window dashboard layouts and low-overhead WebGL rendering',
    ],
    deliverables: [
      'Signed production installers (.msi, .dmg, .AppImage)',
      'Silent auto-updater background service pipeline',
      'Complete source code repository with CI/CD build scripts',
    ],
    technologies: ['Tauri', 'Rust', 'Electron', 'C# / .NET', 'C++', 'SQLite'],
    approach:
      'We design desktop software with a microservice architecture separating the UI shell from native background worker threads to guarantee zero UI freezing during heavy compute loads.',
    related: ['custom-software-engineering', 'mobile-app-development', 'application-maintenance'],
  },
  {
    slug: 'custom-software-engineering',
    title: 'Custom Software Engineering',
    summary: 'Tailored enterprise software designed for unique operational requirements.',
    overview: [
      'When commercial off-the-shelf software falls short of complex business requirements, Enteglow builds custom software products. We handle the full product lifecycle: discovery, system architecture, database modeling, agile development, testing, and cloud deployment.',
    ],
    visual: 'custom-software',
    accent: CORAL,
    problemsSolved: [
      'Inflexible COTS software forcing inefficient workarounds',
      'Fragmented data across legacy databases and disconnected tools',
      'Scaling bottlenecks during rapid company growth',
      'Security gaps in aging custom software legacy codebases',
    ],
    keyCapabilities: [
      'Custom domain-driven system architecture blueprinting',
      'Microservice & monolithic database refactoring',
      'Legacy software modernization without operational downtime',
      'Automated CI/CD pipeline deployment setup',
    ],
    deliverables: [
      'Complete custom software application suite',
      'Comprehensive system architecture documentation',
      'SLA technical support and maintenance coverage',
    ],
    technologies: ['TypeScript', 'Go', 'C# / .NET', 'Python', 'PostgreSQL', 'Docker'],
    approach:
      'We use domain-driven design (DDD) to align code modules directly with real-world business operations, keeping software readable and maintainable long-term.',
    related: ['web-application-development', 'api-development', 'application-maintenance'],
  },
  {
    slug: 'api-development',
    title: 'API Development & Microservice Backend',
    summary: 'High-concurrency REST, gRPC, and GraphQL API microservices.',
    overview: [
      'We design resilient API microservices that power desktop, mobile, and web applications. Built using Node.js, Go, Python, and C#, our API backends handle authentication, database ORM queries, rate-limiting, and background message queues.',
    ],
    visual: 'api',
    accent: AMBER,
    problemsSolved: [
      'API request timeouts during peak traffic loads',
      'Inconsistent error responses breaking mobile and web clients',
      'Unauthorized access caused by flawed JWT/OAuth implementation',
      'Database connection pooling exhaustion under high concurrency',
    ],
    keyCapabilities: [
      'RESTful, gRPC, and GraphQL API architecture',
      'OAuth2, SAML 2.0, and JWT secure token authentication',
      'Redis distributed caching and Rate-limiting middleware',
      'RabbitMQ / Kafka asynchronous background job queues',
    ],
    deliverables: [
      'API microservice source code',
      'OpenAPI / Swagger interactive documentation',
      'Automated API integration test suite',
    ],
    technologies: ['Node.js', 'Go', 'Python', 'C#', 'PostgreSQL', 'Redis'],
    approach:
      'We enforce strict API contract schemas using Zod and Protocol Buffers to catch payload errors at compile time before reaching production.',
    related: ['web-application-development', 'mobile-app-development', 'cloud-infrastructure-devops'],
  },
  {
    slug: 'cloud-infrastructure-devops',
    title: 'Cloud Infrastructure & DevOps',
    summary: 'Automated CI/CD pipelines, Docker containerization, and cloud orchestration.',
    overview: [
      'Enteglow provisions resilient, secure cloud infrastructure on AWS, Google Cloud, and Azure. We automate build pipelines, containerize applications, configure SSL/DNS, and monitor uptime telemetry so your engineering team can release code with confidence.',
    ],
    visual: 'cloud',
    accent: GREEN,
    problemsSolved: [
      'Manual deployment errors causing unexpected downtime',
      'Uncontrolled cloud infrastructure hosting costs',
      'Lack of automated rollbacks during failed deployments',
      'Missing log aggregation for root cause incident analysis',
    ],
    keyCapabilities: [
      'Infrastructure as Code (Terraform / CloudFormation)',
      'Docker containerization & Kubernetes orchestration',
      'GitHub Actions & GitLab CI/CD zero-downtime deployment pipelines',
      'Prometheus & Grafana system telemetry dashboard monitoring',
    ],
    deliverables: [
      'Terraform infrastructure scripts',
      'Automated CI/CD pipeline configurations',
      'System health monitoring setup',
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Terraform', 'GitHub Actions'],
    approach:
      'We enforce Infrastructure as Code (IaC), making every server environment version-controlled, repeatable, and easily scalable.',
    related: ['domain-registration-hosting', 'api-development', 'application-maintenance'],
  },
  {
    slug: 'ui-ux-design',
    title: 'Product UI/UX & Design Systems',
    summary: 'Ergonomic user interfaces and scalable component design systems.',
    overview: [
      'Great software requires intuitive interface ergonomics. Enteglow designs clean UI wireframes, interactive Figma prototypes, and Tailwind CSS component libraries that streamline complex multi-step workflows for enterprise operators.',
    ],
    visual: 'design',
    accent: CORAL,
    problemsSolved: [
      'High user error rates due to confusing navigation menus',
      'Cluttered interfaces overwhelming operators with excessive data',
      'Inaccessible visual designs failing WCAG standards',
      'Design-to-engineering disconnect slowing feature delivery',
    ],
    keyCapabilities: [
      'User journey mapping & high-fidelity Figma prototypes',
      'Custom UI design systems with reusable component tokens',
      'Responsive layout engineering across desktop, tablet, and mobile',
      'WCAG 2.1 AA accessibility compliance audits',
    ],
    deliverables: [
      'Interactive Figma design system file',
      'Tailwind CSS theme token configuration',
      'Component library design documentation',
    ],
    technologies: ['Figma', 'Tailwind CSS', 'Storybook', 'React', 'TypeScript'],
    approach:
      'We design directly with production CSS tokens, ensuring prototypes match the final implemented code pixel-for-pixel.',
    related: ['website-development', 'web-application-development', 'mobile-app-development'],
  },
];

export const getService = (slug: string) => servicesData.find((s) => s.slug === slug);
