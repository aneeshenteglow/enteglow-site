import { IndustryDetail } from '../types/industry';

export const industriesData: IndustryDetail[] = [
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    category: "industrial",
    colorAccent: "#e31e24",
    tagline: "IIoT telemetry, predictive equipment monitoring, and plant operations software.",
    description:
      "We design custom software solutions for manufacturing facilities, connecting shop-floor machinery, tracking production metrics, and automating quality control inspections.",
    iconName: "Factory",
    workflowSteps: [
      "Factory Floor",
      "Sensor Telemetry",
      "Automated Dispatch",
      "Inventory Sync",
      "Predictive Analytics"
    ],
    frictionBefore: "Fragmented shop-floor equipment reporting causing unscheduled machine downtime.",
    solutionAfter: "Edge IIoT gateway streaming 60 FPS sensor data directly into predictive maintenance ML models.",
    metricROI: "85% reduction in unscheduled downtime",
    supportedCapabilities: [
      "Real-time IIoT equipment telemetry & sensor monitoring",
      "Automated visual defect detection using computer vision",
      "Predictive equipment maintenance & failure alerting",
      "Inventory, bill-of-materials (BOM) & shop floor scheduling"
    ],
    useCases: [
      "Factory machinery health telemetry dashboards",
      "Automated quality control visual inspection stations",
      "Shop floor operator task tracking & digital checklists"
    ],
    relevantTech: ["IoT / MQTT", "Computer Vision", "Desktop Stations", "Python", "InfluxDB"]
  },
  {
    id: "logistics",
    slug: "logistics",
    name: "Logistics & Supply Chain",
    category: "industrial",
    colorAccent: "#00d2ff",
    tagline: "Fleet telemetry, warehouse automation, and supply chain visibility applications.",
    description:
      "Enteglow builds software products that optimize cargo routing, track fleet telemetry in real time, and manage complex warehouse inventory operations.",
    iconName: "Truck",
    workflowSteps: [
      "Order Intake",
      "Automated Routing",
      "Warehouse Sync",
      "Fleet Tracking",
      "Delivery Analytics"
    ],
    frictionBefore: "Manual driver dispatching and disconnected GPS tracking causing shipment delays.",
    solutionAfter: "Cross-platform fleet tracking mobile apps with live WebSocket routing & automated dispatch.",
    metricROI: "10x faster cross-system inventory throughput",
    supportedCapabilities: [
      "GPS fleet tracking & driver telemetry mobile apps",
      "Warehouse barcode scanning & inventory management",
      "Automated route optimization & dispatch scheduling",
      "Third-party carrier API integrations & EDI processing"
    ],
    useCases: [
      "Cross-platform driver mobile apps with offline sync",
      "Real-time warehouse inventory management web portals",
      "Supply chain shipment tracking & customer notification portals"
    ],
    relevantTech: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "WebSockets"]
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    category: "health",
    colorAccent: "#10b981",
    tagline: "Secure medical data workflows, laboratory telemetry, and HIPAA-compliant portals.",
    description:
      "Enteglow develops healthcare software designed around strict data security, encrypted records handling, laboratory device integration, and patient management.",
    iconName: "HeartPulse",
    workflowSteps: [
      "Patient Intake",
      "EHR Data Pipeline",
      "Telehealth Gateway",
      "Compliance Audit",
      "Clinical Analytics"
    ],
    frictionBefore: "Insecure paper records & legacy portals creating compliance risks and slow patient turnaround.",
    solutionAfter: "Audit-logged, zero-trust HIPAA-compliant data pipelines and instant telehealth portals.",
    metricROI: "100% HIPAA audit compliance guarantee",
    supportedCapabilities: [
      "Encrypted patient records management portals",
      "Laboratory telemetry data capture & instrument integration",
      "Telehealth video & appointment scheduling tools",
      "Audit-logged healthcare data pipeline processing"
    ],
    useCases: [
      "Laboratory instrument data aggregation software",
      "Secure patient self-service portal web applications",
      "Clinical study task tracking & data collection tools"
    ],
    relevantTech: ["TypeScript", "Python", "PostgreSQL", "Docker", "OAuth2 / SAML"]
  },
  {
    id: "finance",
    slug: "finance",
    name: "Finance & Fintech",
    category: "finance",
    colorAccent: "#f59e0b",
    tagline: "Secure transaction processing, automated reporting, and risk calculation engines.",
    description:
      "We build resilient financial software products with sub-second calculations, encrypted data storage, audit trails, and automated compliance reporting.",
    iconName: "Landmark",
    workflowSteps: [
      "Account Auth",
      "Transaction Gateway",
      "Risk & Fraud Scoring",
      "Automated Ledger",
      "Regulatory Audit"
    ],
    frictionBefore: "Slow batch ledger processing and manual loan approval workflows creating bottlenecks.",
    solutionAfter: "High-speed real-time transaction risk calculation engines with sub-second latency.",
    metricROI: "Sub-100ms calculation & reporting latency",
    supportedCapabilities: [
      "High-speed financial calculation & portfolio engines",
      "Automated document auditing using AI parsing agents",
      "Secure payment gateway & subscription billing integrations",
      "Real-time transaction anomaly detection algorithms"
    ],
    useCases: [
      "Enterprise financial reporting & forecasting portals",
      "Automated loan application processing platforms",
      "Custom compliance audit logging & tracking tools"
    ],
    relevantTech: ["C# / .NET", "Go", "Python", "PostgreSQL", "Redis"]
  },
  {
    id: "retail",
    slug: "retail",
    name: "Retail & E-Commerce",
    category: "finance",
    colorAccent: "#a855f7",
    tagline: "Omnichannel inventory sync, custom POS extensions, and customer analytics platforms.",
    description:
      "We engineer custom digital tools that unify physical retail stores and online platforms, automating inventory reconciliation and customer loyalty systems.",
    iconName: "ShoppingBag",
    workflowSteps: [
      "Omnichannel Order",
      "Dynamic Pricing",
      "POS Sync",
      "Fulfillment Hub",
      "Customer Insights"
    ],
    frictionBefore: "Mismatched online vs in-store inventory causing stockouts and lost revenue.",
    solutionAfter: "Real-time multi-location inventory reconciliation engine updating instantly across POS & Web.",
    metricROI: "99.99% multi-store inventory accuracy",
    supportedCapabilities: [
      "Real-time multi-location inventory synchronization",
      "Custom Point of Sale (POS) desktop & tablet applications",
      "Customer behavior analytics & transaction processing APIs",
      "Automated order fulfillment & ERP integrations"
    ],
    useCases: [
      "High-speed tablet POS software for retail stores",
      "Centralized omnichannel inventory management systems",
      "Custom e-commerce web applications & payment portals"
    ],
    relevantTech: ["Next.js", "React Native", "Stripe API", "Node.js", "Redis"]
  },
  {
    id: "construction",
    slug: "construction",
    name: "Construction & Engineering",
    category: "industrial",
    colorAccent: "#f97316",
    tagline: "Site inspection mobile apps, blueprint annotation, and equipment tracking platforms.",
    description:
      "Our construction software solutions connect field engineers with site managers, streamlining job site safety checklists, equipment tracking, and progress reporting.",
    iconName: "HardHat",
    workflowSteps: [
      "Site Inspection",
      "Blueprint Markup",
      "Equipment Telemetry",
      "Subcontractor Sync",
      "Milestone Audit"
    ],
    frictionBefore: "Paper safety forms and lost equipment tracking delaying major build milestones.",
    solutionAfter: "Offline-first rugged mobile field inspection apps with automated cloud sync.",
    metricROI: "60% faster field site compliance sign-off",
    supportedCapabilities: [
      "Offline-first mobile site inspection & safety apps",
      "Heavy machinery GPS telemetry & usage tracking",
      "Subcontractor task assignment & progress dashboards",
      "Architectural blueprint document management"
    ],
    useCases: [
      "Rugged tablet field inspection applications",
      "Construction site equipment telemetry monitors",
      "Project milestone & budget tracking web portals"
    ],
    relevantTech: ["React Native", "Flutter", "Node.js", "IoT Gateways", "AWS S3"]
  },
  {
    id: "agriculture",
    slug: "agriculture",
    name: "Agriculture & AgTech",
    category: "industrial",
    colorAccent: "#22c55e",
    tagline: "Soil sensor telemetry, automated irrigation controls, and crop yield forecasting.",
    description:
      "Enteglow creates AgTech software connecting field sensors with cloud analytics, empowering farm managers to optimize water usage, monitor weather, and track yields.",
    iconName: "Sprout",
    workflowSteps: [
      "Soil IoT Sensors",
      "Weather Telemetry",
      "Automated Valve Ctrl",
      "Yield Prediction",
      "Supply Chain Dispatch"
    ],
    frictionBefore: "Manual water valve management and guesswork in crop harvest schedules.",
    solutionAfter: "Automated valve control interfaces connected to real-time IoT soil sensors & ML models.",
    metricROI: "35% water & fertilizer resource savings",
    supportedCapabilities: [
      "Remote soil moisture & weather sensor IoT monitoring",
      "Automated valve & irrigation control mobile interfaces",
      "Drone imagery mapping & crop health visualizers",
      "Yield forecasting & seasonal historical data analytics"
    ],
    useCases: [
      "Field sensor telemetry dashboard web portals",
      "Mobile irrigation remote control applications",
      "Crop harvest logging and inventory tracking software"
    ],
    relevantTech: ["IoT / MQTT", "Flutter", "Python", "InfluxDB", "WebSockets"]
  },
  {
    id: "education",
    slug: "education",
    name: "Education & EdTech",
    category: "enterprise",
    colorAccent: "#3b82f6",
    tagline: "Interactive learning portals, student assessment engines, and campus portals.",
    description:
      "We engineer accessible educational software products that facilitate remote learning, automated assessment grading, and campus administrative operations.",
    iconName: "GraduationCap",
    workflowSteps: [
      "Student Auth",
      "Course Delivery",
      "Interactive Lab",
      "Automated Grading",
      "Progress Analytics"
    ],
    frictionBefore: "Cluttered legacy LMS systems breaking under concurrent exam submission loads.",
    solutionAfter: "Cloud-native high-concurrency assessment portal maintaining sub-second responsiveness.",
    metricROI: "100,000+ concurrent student exam sessions",
    supportedCapabilities: [
      "Interactive course delivery & media streaming platforms",
      "Automated quiz grading & analytics dashboards",
      "Student information system (SIS) API integrations",
      "Cross-device web & mobile student portals"
    ],
    useCases: [
      "Custom enterprise learning management web applications",
      "Interactive STEM simulation desktop applications",
      "Student enrollment & assessment tracking portals"
    ],
    relevantTech: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "enterprise",
    slug: "enterprise",
    name: "Enterprise Operations",
    category: "enterprise",
    colorAccent: "#e31e24",
    tagline: "Cross-department workflow software, RBAC security, and operational dashboards.",
    description:
      "We build custom enterprise software that breaks down departmental silos, unifies legacy data sources, and enforces modern security and authorization standards.",
    iconName: "Layers",
    workflowSteps: [
      "Department Audit",
      "API Gateway Sync",
      "RBAC Authorization",
      "Workflow Engine",
      "Executive BI Portal"
    ],
    frictionBefore: "Siloed departmental tools requiring duplicate manual data entry and zero central oversight.",
    solutionAfter: "Unified enterprise operations gateway with granular RBAC authorization & automated sync.",
    metricROI: "75% reduction in administrative overhead",
    supportedCapabilities: [
      "Cross-departmental task & workflow automation",
      "Unified executive BI data visualization portals",
      "Legacy system data synchronization middleware",
      "SAML/OAuth2 single sign-on & granular permissioning"
    ],
    useCases: [
      "Internal enterprise operational portals",
      "Global asset & licensing management tools",
      "Executive performance dashboard applications"
    ],
    relevantTech: ["Next.js", "Go", "C# / .NET", "PostgreSQL", "Docker"]
  }
];
