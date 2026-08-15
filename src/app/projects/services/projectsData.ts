import { ProjectDetail } from '../types/project';

export const projectsData: ProjectDetail[] = [
  {
    id: "industrial-iot-telemetry-suite",
    slug: "industrial-iot-telemetry-suite",
    title: "Industrial IoT Telemetry & Hardware Control Suite",
    tagline: "Sub-second telemetry ingestion and supervisory control for 240+ plant machinery PLCs.",
    category: "IoT",
    overview:
      "Engineered an end-to-end telemetry platform bridging shop-floor Modbus RTU gateways with cloud-based time-series analytics and real-time supervisory web control dashboards.",
    problem:
      "A manufacturing facility experienced unmonitored equipment spikes and intermittent network drops, resulting in lost sensor telemetry and costly unplanned machine downtime.",
    solution:
      "Implemented local edge gateway parsers with store-and-forward caching, an EMQX MQTT telemetry broker processing 50,000 evt/sec, and InfluxDB time-series storage with WebSocket alerts.",
    architectureHighlights: [
      "Store-and-forward edge gateway caching preventing data loss during network drops",
      "EMQX MQTT message broker cluster with QoS 1 telemetry ingestion",
      "Sub-50ms WebSocket alert push to supervisory React dashboard"
    ],
    keyFeatures: [
      "Real-time machine health state visualizers",
      "Automated temperature & vibration threshold alert triggers",
      "Historical time-series trend analysis and CSV reporting"
    ],
    outcomes: [
      "100% telemetry data preservation during facility network outages",
      "Sub-50ms alert latency for critical hardware temperature threshold spikes",
      "40% reduction in unplanned machine downtime incidents"
    ],
    techStack: ["MQTT", "EMQX", "InfluxDB", "Python", "React", "WebSockets", "Docker"]
  },
  {
    id: "enterprise-document-ai-agent",
    slug: "enterprise-document-ai-agent",
    title: "Autonomous Enterprise Document AI & RAG Agent",
    tagline: "Multi-agent RAG reasoning engine executing contract audits and automated ERP updates.",
    category: "AI",
    overview:
      "Architected an autonomous AI agent microservice capable of embedding enterprise contracts into Qdrant vector space, extracting compliance clauses, and updating ERP systems via tool calls.",
    problem:
      "Legal and operations teams spent over 120 hours per month manually reading 500+ page vendor contracts to extract liability caps and compliance expiration dates.",
    solution:
      "Built a LlamaIndex/LangChain RAG pipeline with Qdrant vector indexing, semantic search, prompt guardrails, and automated REST API tool execution.",
    architectureHighlights: [
      "1,536-dimensional vector embedding store with page-level citation mapping",
      "Strict output JSON schema validation preventing hallucinated API payloads",
      "Autonomous tool-calling agent microservice integrated with enterprise ERP"
    ],
    keyFeatures: [
      "Natural language document semantic query search",
      "Automatic liability cap extraction & risk scoring",
      "One-click ERP record synchronization with complete audit trail"
    ],
    outcomes: [
      "95% reduction in contract audit execution time (from hours to 1.4 seconds)",
      "Zero hallucinated parameter payload errors across 10,000+ API tool executions",
      "100% source document paragraph citation traceability"
    ],
    techStack: ["Python", "LangChain", "LlamaIndex", "Qdrant", "OpenAI API", "FastAPI"]
  },
  {
    id: "cross-platform-field-service-app",
    slug: "cross-platform-field-service-app",
    title: "Offline-First Mobile Field Operations App",
    tagline: "Field technician mobile product with bi-directional delta queue synchronization.",
    category: "Mobile",
    overview:
      "Built a cross-platform mobile application for utility field service technicians operating in subterranean sites with zero cellular coverage.",
    problem:
      "Field inspection checklists recorded on paper or web tools were lost whenever technicians lost internet connectivity in basement utility rooms.",
    solution:
      "Engineered an offline-first React Native mobile application equipped with local SQLite storage, camera geotagging, biometric signature capture, and background queue delta sync.",
    architectureHighlights: [
      "Local SQLite delta sync queue preventing inspection data loss",
      "Biometric hardware enclave security for technician sign-offs",
      "Background sync task transmitting queued payloads when LTE returns"
    ],
    keyFeatures: [
      "Interactive offline site inspection checklists",
      "Geotagged high-resolution photo attachment capture",
      "Digital customer signature capture and PDF receipt generation"
    ],
    outcomes: [
      "Zero data loss reported across 25,000 subterranean field inspections",
      "60 FPS smooth mobile UI transitions on budget rugged tablet devices",
      "50% faster inspection checklist submission cycle times"
    ],
    techStack: ["React Native", "TypeScript", "SQLite", "Node.js", "PostgreSQL", "AWS S3"]
  },
  {
    id: "tauri-native-desktop-workstation",
    slug: "tauri-native-desktop-workstation",
    title: "Tauri & Rust Native Desktop Workstation",
    tagline: "High-frequency native desktop binary consuming sub-15MB memory for engineering simulation.",
    category: "Desktop",
    overview:
      "Developed a low-overhead desktop workstation application for structural engineering analysis, combining a memory-safe Rust computation engine with a WebGL rendering frontend.",
    problem:
      "Existing Electron desktop software suffered from 400MB+ RAM usage and UI freezing during high-density WebGL point cloud rendering.",
    solution:
      "Replaced Electron with Tauri and Rust core threads, moving heavy mathematical calculations off the main UI thread to achieve sub-16ms 60 FPS rendering.",
    architectureHighlights: [
      "Memory-isolated Rust IPC thread handling local SQLite database file WAL stream",
      "Sub-15MB baseline RAM memory footprint with zero Chromium overhead",
      "60 FPS Canvas & WebGL 3D model visualization loop"
    ],
    keyFeatures: [
      "Low-latency 3D structural model manipulation",
      "Local encrypted project file saving and exporting",
      "Silent background application auto-updater service"
    ],
    outcomes: [
      "96% RAM memory footprint reduction (from 420MB down to 14.2MB)",
      "Zero UI thread freezing during high-density 3D rendering tasks",
      "Cross-platform binary installer packages (.msi, .dmg, .AppImage)"
    ],
    techStack: ["Tauri", "Rust", "TypeScript", "WebGL", "SQLite", "C# / .NET"]
  },
  {
    id: "multi-tenant-saas-enterprise-portal",
    slug: "multi-tenant-saas-enterprise-portal",
    title: "Next.js App Router Multi-Tenant SaaS Portal",
    tagline: "B2B SaaS platform with PostgreSQL Row-Level Security and sub-200ms page load speeds.",
    category: "Web",
    overview:
      "Engineered a Next.js App Router multi-tenant B2B enterprise SaaS platform serving enterprise clients with strict tenant data isolation and real-time dashboard analytics.",
    problem:
      "Legacy client SPA web application suffered from slow initial request waterfalls, client JS bundle inflation, and complex tenant data isolation checks.",
    solution:
      "Migrated to Next.js App Router with Server Components (RSC), PostgreSQL Row-Level Security (RLS) policies, and WebSocket real-time operational feeds.",
    architectureHighlights: [
      "Zero-waterfall Server Component data fetching executed on the edge",
      "PostgreSQL RLS policies preventing cross-tenant data access",
      "Tailwind CSS WCAG AA compliant design system tokens"
    ],
    keyFeatures: [
      "Multi-tenant executive performance dashboards",
      "Custom domain mapping and SAML 2.0 Single Sign-On (SSO)",
      "Real-time operational task updates via WebSockets"
    ],
    outcomes: [
      "0.38-second First Contentful Paint (FCP) with Lighthouse score of 99/100",
      "100% verified tenant data isolation backed by PostgreSQL RLS",
      "65% reduction in client-side JS bundle download size"
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL RLS", "Tailwind CSS", "Docker"]
  }
];
