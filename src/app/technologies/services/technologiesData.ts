import { TechnologyCategory } from '../types/technology';

export const technologiesData: TechnologyCategory[] = [
  {
    category: "Frontend Web",
    description: "Modern, type-safe frameworks delivering sub-second page performance.",
    items: [
      {
        name: "Next.js (App Router)",
        level: "Primary Stack",
        description: "React Server Components (RSC), static site compilation, and edge routing."
      },
      {
        name: "React 18",
        level: "Primary Stack",
        description: "Declarative UI rendering, concurrent mode, and custom hooks."
      },
      {
        name: "TypeScript",
        level: "Primary Stack",
        description: "Strict static typing preventing runtime type errors across all modules."
      },
      {
        name: "Tailwind CSS",
        level: "Primary Stack",
        description: "Utility-first design token styling with responsive custom layouts."
      }
    ]
  },
  {
    category: "Mobile",
    description: "Cross-platform mobile frameworks with native device capabilities.",
    items: [
      {
        name: "React Native",
        level: "Primary Stack",
        description: "Cross-platform iOS and Android native bridge rendering."
      },
      {
        name: "Flutter",
        level: "Production",
        description: "High-performance Skia Canvas rendering for complex mobile UI."
      },
      {
        name: "Swift / Kotlin",
        level: "Specialized",
        description: "Native iOS/Android extensions for hardware BLE and camera sensors."
      }
    ]
  },
  {
    category: "Desktop Workstation",
    description: "Low-overhead, native binary runtimes for Windows, macOS, and Linux.",
    items: [
      {
        name: "Tauri",
        level: "Primary Stack",
        description: "Sub-15MB native desktop application wrapper leveraging Rust."
      },
      {
        name: "Rust Core",
        level: "Primary Stack",
        description: "Memory-safe systems programming for multi-threaded computations."
      },
      {
        name: "Electron",
        level: "Production",
        description: "Cross-platform desktop application shell for web-heavy suites."
      },
      {
        name: "C# / .NET",
        level: "Production",
        description: "Windows enterprise WPF and WinUI native application development."
      }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Agentic reasoning frameworks, vector databases, and LLM tool integration.",
    items: [
      {
        name: "Python",
        level: "Primary Stack",
        description: "Primary runtime for AI vector RAG and data science pipelines."
      },
      {
        name: "LangChain / LlamaIndex",
        level: "Primary Stack",
        description: "Multi-agent orchestration and document chunking frameworks."
      },
      {
        name: "Qdrant Vector DB",
        level: "Primary Stack",
        description: "High-dimensional vector embedding similarity search."
      },
      {
        name: "OpenAI & Claude API",
        level: "Production",
        description: "State-of-the-art LLM reasoning models with tool-calling capabilities."
      }
    ]
  },
  {
    category: "Backend & APIs",
    description: "High-concurrency microservices, authentication systems, and database layers.",
    items: [
      {
        name: "Node.js / Express",
        level: "Primary Stack",
        description: "Event-driven asynchronous REST API microservices."
      },
      {
        name: "Go (Golang)",
        level: "Production",
        description: "Low-latency microservices handling high concurrent network traffic."
      },
      {
        name: "PostgreSQL & RLS",
        level: "Primary Stack",
        description: "Relational database with Row-Level Security multi-tenant policies."
      },
      {
        name: "Redis",
        level: "Primary Stack",
        description: "In-memory key-value caching, rate limiting, and pub/sub broker."
      }
    ]
  },
  {
    category: "IoT & Telemetry",
    description: "Industrial hardware protocols, time-series stores, and message brokers.",
    items: [
      {
        name: "MQTT / EMQX",
        level: "Primary Stack",
        description: "High-throughput IoT message broker with QoS 1/2 delivery."
      },
      {
        name: "InfluxDB",
        level: "Primary Stack",
        description: "Optimized time-series database for hardware sensor streams."
      },
      {
        name: "C++ / Embedded C",
        level: "Specialized",
        description: "Microcontroller firmware and edge hardware gateway parsers."
      }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Containerization, infrastructure as code, and CI/CD pipelines.",
    items: [
      {
        name: "Docker & Kubernetes",
        level: "Primary Stack",
        description: "Containerized application packaging and cluster orchestration."
      },
      {
        name: "AWS / Google Cloud",
        level: "Primary Stack",
        description: "Cloud compute, object storage, serverless, and managed databases."
      },
      {
        name: "GitHub Actions",
        level: "Primary Stack",
        description: "Automated testing, linting, and zero-downtime deployment pipelines."
      }
    ]
  }
];
