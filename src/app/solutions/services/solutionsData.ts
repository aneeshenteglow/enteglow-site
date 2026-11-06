import { SolutionDetail } from '../types/solution';

export const solutionsData: SolutionDetail[] = [
  {
    id: "business-management-erp",
    slug: "business-management-erp",
    title: "Business Management ERP & CRM Suite",
    tagline: "Unified operational hubs connecting inventory, orders, customer data, and financial reporting.",
    description:
      "We engineer custom ERP and CRM software platforms tailored to your business rules. By connecting sales channels, multi-location inventory repositories, supplier workflows, and financial ledgers, we eliminate manual data re-entry and operational bottlenecks.",
    iconName: "Briefcase",
    businessOutcome:
      "Reduces manual administrative data entry time by up to 70% while providing real-time executive visibility into cross-department metrics.",
    keyFeatures: [
      "Multi-location inventory tracking with low-stock reorder triggers",
      "Role-Based Access Control (RBAC) with audit trail logging",
      "Automated PDF invoice generation and payment gateway sync",
      "Custom reporting dashboards with CSV/Excel export functionality"
    ],
    applicableIndustries: ["Retail", "Manufacturing", "Logistics", "Construction"]
  },
  {
    id: "enterprise-platforms",
    slug: "enterprise-platforms",
    title: "Enterprise Multi-Tenant SaaS Platforms",
    tagline: "Scalable B2B cloud architectures engineered for high enterprise concurrency.",
    description:
      "Enteglow designs multi-tenant B2B SaaS web platforms. Utilizing PostgreSQL Row-Level Security (RLS), isolated database schema patterns, and Next.js App Router, our enterprise software provides strict tenant data isolation, custom white-label branding, and sub-second page performance.",
    iconName: "Building2",
    businessOutcome:
      "Enables technology companies to onboard enterprise B2B customers seamlessly with zero risk of cross-tenant data leakage.",
    keyFeatures: [
      "PostgreSQL RLS guaranteeing enterprise tenant data privacy",
      "SAML 2.0 & OAuth2 Single Sign-On (SSO) integration (Okta, Azure AD)",
      "Custom domain mapping & white-label styling customization",
      "Granular feature flag management per subscription tier"
    ],
    applicableIndustries: ["Fintech", "Healthcare", "EdTech", "Enterprise Operations"]
  },
  {
    id: "ai-rag-solutions",
    slug: "ai-rag-solutions",
    title: "AI Document Reasoning & RAG Platforms",
    tagline: "Autonomous vector search engines that transform unstructured files into verified actions.",
    description:
      "We build domain AI solutions that index enterprise documentation (contracts, technical manuals, blueprints) using high-dimensional vector embeddings. Our RAG platforms retrieve exact citations and execute external ERP tool actions without hallucinating.",
    iconName: "Bot",
    businessOutcome:
      "Accelerates contract review and technical document auditing from hours to seconds while maintaining 100% citation traceability.",
    keyFeatures: [
      "Vector document indexing across Qdrant and Pinecone vector stores",
      "Exact page and paragraph source citation mapping",
      "Autonomous tool-calling agents executing REST/gRPC API actions",
      "Strict output JSON validation preventing invalid hallucinated parameters"
    ],
    applicableIndustries: ["Finance", "Healthcare", "Legal / Compliance", "Construction"]
  },
  {
    id: "iot-telemetry-monitoring",
    slug: "iot-telemetry-monitoring",
    title: "Industrial IoT Telemetry & Control Suites",
    tagline: "Sub-second supervisory control and data acquisition (SCADA) for shop-floor hardware.",
    description:
      "Enteglow develops end-to-end industrial telemetry platforms. From edge gateway parsers to time-series database storage and WebSocket dashboards, our IoT software monitors hardware sensors, detects anomalies, and sends real-time threshold alerts.",
    iconName: "Cpu",
    businessOutcome:
      "Prevents costly unplanned hardware downtime by detecting sensor telemetry anomalies prior to equipment failure.",
    keyFeatures: [
      "High-throughput MQTT broker cluster processing thousands of msg/sec",
      "Edge gateway store-and-forward local buffering during offline drops",
      "InfluxDB time-series stream aggregation and trend charting",
      "Real-time WebSocket push notifications to supervisory UI dashboards"
    ],
    applicableIndustries: ["Manufacturing", "Agriculture", "Logistics", "Energy"]
  },
  {
    id: "workflow-automation",
    slug: "workflow-automation",
    title: "Workflow Automation & Data Pipelines",
    tagline: "Eliminate repetitive manual tasks through automated system integration pipelines.",
    description:
      "We build event-driven automation engines that connect legacy databases, third-party REST APIs, webhooks, and cloud storage. By automating document generation, status notifications, and data transformations, we streamline operational velocity.",
    iconName: "Workflow",
    businessOutcome:
      "Eliminates human data copy-paste errors and speeds up cross-system process execution by 10x.",
    keyFeatures: [
      "Asynchronous background task processing via RabbitMQ & Redis queues",
      "Automated email, SMS, and Slack webhook alert notifications",
      "Third-party API webhook ingestion microservices",
      "Automated ETL data extraction and schema normalization"
    ],
    applicableIndustries: ["Logistics", "Retail", "Education", "Enterprise Operations"]
  },
  {
    id: "field-service-mobile",
    slug: "field-service-mobile",
    title: "Field Operations & Mobile Workforce Products",
    tagline: "Offline-first mobile applications engineered for subterranean and remote technicians.",
    description:
      "Our field service mobile software empowers technicians to execute inspection checklists, capture customer signatures, attach geotagged photos, and log equipment updates in areas with zero cellular signal.",
    iconName: "Smartphone",
    businessOutcome:
      "Guarantees 100% field data capture in remote sites without requiring active cellular network connections.",
    keyFeatures: [
      "Offline local SQLite delta sync queue preventing data loss",
      "Geotagged photo capture & digital customer signature recording",
      "Interactive mobile job dispatching and turn-by-turn routing",
      "Rugged tablet UI ergonomics designed for high outdoor visibility"
    ],
    applicableIndustries: ["Construction", "Utilities", "Logistics", "Agriculture"]
  },
  {
    id: "custom-digital-products",
    slug: "custom-digital-products",
    title: "Custom Digital Software Products",
    tagline: "Turnkey software engineering for high-growth tech startups and innovators.",
    description:
      "Enteglow partners with tech founders and product leaders to design, architect, and build new digital software products from scratch. We deliver clean TypeScript/Go codebases ready for venture scaling or enterprise deployment.",
    iconName: "Sparkles",
    businessOutcome:
      "Accelerates time-to-market for new technology products with a scalable, production-grade software architecture.",
    keyFeatures: [
      "Full-stack software product development (Desktop, Mobile, Web)",
      "Production-ready Docker containers and CI/CD pipelines",
      "Full source code ownership with zero IP encumbrances",
      "Extensive architecture documentation and developer onboarding guides"
    ],
    applicableIndustries: ["Startups", "Fintech", "Healthtech", "EdTech"]
  }
];
