import { ProcessStage } from '../types/process';

export const processData: ProcessStage[] = [
  {
    step: 1,
    title: "Discovery & Requirements Analysis",
    short: "Discovery",
    tagline: "Uncovering technical constraints, latency needs, and user workflows.",
    description:
      "We begin every software engagement with deep discovery sessions. Our senior architects map your business objectives, operational bottlenecks, third-party system dependencies, hardware interfaces, and security compliance constraints.",
    deliverables: [
      "Technical Requirement Document (TRD)",
      "System Integration & Dependency Map",
      "Project Risk Assessment & Architecture Proposal"
    ],
    duration: "Sprint 0 (1 - 2 Weeks)"
  },
  {
    step: 2,
    title: "UI/UX Ergonomics & Design Systems",
    short: "Design",
    tagline: "Designing high-fidelity prototypes and accessible Tailwind CSS design tokens.",
    description:
      "Our product designers model multi-step user workflows, wireframe responsive viewports, and build interactive Figma prototypes. We establish custom Tailwind CSS theme tokens that guarantee design-to-code alignment.",
    deliverables: [
      "Interactive Figma Design System Prototype",
      "Tailwind CSS Theme Token Specs",
      "WCAG 2.1 Accessibility Checklist"
    ],
    duration: "1 - 2 Weeks"
  },
  {
    step: 3,
    title: "Systems Architecture & DB Modeling",
    short: "Architect",
    tagline: "Designing scalable database schemas, OpenAPI contracts, and microservice boundaries.",
    description:
      "Before writing production code, we model database entities (PostgreSQL RLS, InfluxDB time-series), specify REST/gRPC OpenAPI contracts, and map Server vs Client RSC boundaries for Next.js applications.",
    deliverables: [
      "Database Entity Relationship Diagram (ERD)",
      "OpenAPI 3.0 / gRPC Schema Specifications",
      "Security & Data Authorization Protocol Blueprint"
    ],
    duration: "1 - 2 Weeks"
  },
  {
    step: 4,
    title: "Agile Development & Code Iteration",
    short: "Build",
    tagline: "Writing clean, strictly typed TypeScript, C++, Rust, and Python codebases.",
    description:
      "We build software in 2-week agile sprints. Every commit undergoes automated linting, unit testing, and peer code review. Staging preview environments are updated automatically with every pull request.",
    deliverables: [
      "Production Source Code Repository",
      "Live Staging Preview Environment",
      "Bi-Weekly Sprint Demo Walkthroughs"
    ],
    duration: "Iterative Sprints"
  },
  {
    step: 5,
    title: "Testing, QA & Performance Profiling",
    short: "Test",
    tagline: "Automated E2E testing, memory profiling, and security vulnerability auditing.",
    description:
      "Our QA engineers execute automated Vitest unit tests, Playwright end-to-end user flows, memory leak profiling for native desktop binaries, and high-concurrency load testing prior to release.",
    deliverables: [
      "Automated Test Execution Suite (Unit & E2E)",
      "Performance & Memory Profiling Report",
      "Vulnerability Audit Certificate"
    ],
    duration: "Continuous per Sprint"
  },
  {
    step: 6,
    title: "CI/CD Deployment & Release",
    short: "Deploy",
    tagline: "Zero-downtime container deployment and signed binary installation packages.",
    description:
      "We orchestrate automated deployment pipelines to AWS, GCP, or Azure using Docker and Kubernetes. For desktop and mobile software, we generate signed installer binaries (.msi, .dmg, .ipa, .apk) with background update channels.",
    deliverables: [
      "Live Production Cloud Deployment",
      "Signed App Installers & Distribution Feeds",
      "Infrastructure as Code (Terraform) Manifests"
    ],
    duration: "Release Phase"
  },
  {
    step: 7,
    title: "Telemetry Monitoring & SLA Support",
    short: "Scale",
    tagline: "Continuous 24/7 system health monitoring, telemetry alerts, and SLA maintenance.",
    description:
      "Post-launch, Entelgow provides SLA-backed engineering support. We monitor cloud server telemetry, track time-series error logs, execute security patch updates, and optimize database indexing as your user base scales.",
    deliverables: [
      "24/7 Prometheus & Grafana Telemetry Dashboard",
      "SLA Technical Support Coverage",
      "Quarterly Code & Infrastructure Performance Reviews"
    ],
    duration: "Ongoing Operations"
  }
];
