import { IndustryDetail } from '../types/industry';

export const industriesData: IndustryDetail[] = [
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    tagline: "IoT telemetry, predictive equipment monitoring, and plant operations software.",
    description:
      "We design custom software solutions for manufacturing facilities, connecting shop-floor machinery, tracking production metrics, and automating quality control inspections.",
    iconName: "Factory",
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
    tagline: "Fleet telemetry, warehouse automation, and supply chain visibility applications.",
    description:
      "Entelgow builds software products that optimize cargo routing, track fleet telemetry in real time, and manage complex warehouse inventory operations.",
    iconName: "Truck",
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
    id: "retail",
    slug: "retail",
    name: "Retail & E-Commerce",
    tagline: "Omnichannel inventory sync, custom POS extensions, and customer analytics platforms.",
    description:
      "We engineer custom digital tools that unify physical retail stores and online platforms, automating inventory reconciliation and customer loyalty systems.",
    iconName: "ShoppingBag",
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
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Secure medical data workflows, laboratory telemetry, and HIPAA-compliant portals.",
    description:
      "Entelgow develops healthcare software designed around strict data security, encrypted records handling, laboratory device integration, and patient management.",
    iconName: "HeartPulse",
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
    tagline: "Secure transaction processing, automated reporting, and risk calculation engines.",
    description:
      "We build resilient financial software products with sub-second calculations, encrypted data storage, audit trails, and automated compliance reporting.",
    iconName: "Landmark",
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
    id: "construction",
    slug: "construction",
    name: "Construction & Engineering",
    tagline: "Site inspection mobile apps, blueprint annotation, and equipment tracking platforms.",
    description:
      "Our construction software solutions connect field engineers with site managers, streamlining job site safety checklists, equipment tracking, and progress reporting.",
    iconName: "HardHat",
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
    id: "education",
    slug: "education",
    name: "Education & EdTech",
    tagline: "Interactive learning portals, student assessment engines, and campus portals.",
    description:
      "We engineer accessible educational software products that facilitate remote learning, automated assessment grading, and campus administrative operations.",
    iconName: "GraduationCap",
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
    id: "agriculture",
    slug: "agriculture",
    name: "Agriculture & AgTech",
    tagline: "Soil sensor telemetry, automated irrigation controls, and crop yield forecasting.",
    description:
      "Entelgow creates AgTech software connecting field sensors with cloud analytics, empowering farm managers to optimize water usage, monitor weather, and track yields.",
    iconName: "Sprout",
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
    id: "enterprise",
    slug: "enterprise",
    name: "Enterprise Operations",
    tagline: "Cross-department workflow software, RBAC security, and operational dashboards.",
    description:
      "We build custom enterprise software that breaks down departmental silos, unifies legacy data sources, and enforces modern security and authorization standards.",
    iconName: "Layers",
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
