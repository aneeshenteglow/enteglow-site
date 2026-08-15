# Enteglow Enterprise AI & IoT Platform — Official Repository Guide

Welcome to the official repository for **Enteglow**, the next-generation Enterprise AI, Edge Computing, and Industrial IoT platform web application built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and modern visual engineering practices.

---

## 📌 Table of Contents

1. [Why Post-Commit Hooks Don't Work By Default & Fix](#1-why-post-commit-hooks-dont-work-by-default--fix)
2. [Platform Features & Components](#2-platform-features--components)
3. [Feature-Based App Router Architecture](#3-feature-based-app-router-architecture)
4. [Multi-Agent AI Development System](#4-multi-agent-ai-development-system)
5. [Git Hooks & Graphify AST Analysis](#5-git-hooks--graphify-ast-analysis)
6. [Getting Started & Development Scripts](#6-getting-started--development-scripts)
7. [SEO, Performance & Deployment](#7-seo-performance--deployment)

---

## 1. Why Post-Commit Hooks Don't Work By Default & Fix

### ❓ Why `post-commit` didn't work previously:
1. **Local-Only Scope of `.git/hooks/`**: Git hooks live inside the local `.git/hooks/` directory, which is **never committed to remote Git repositories** (like GitHub). When a project is freshly initialized or cloned, Git only generates `.sample` files.
2. **Missing Executable Permissions**: Git hooks require explicit execution permissions (`chmod +x .git/hooks/post-commit`).
3. **Unconfigured Hook Paths**: By default, Git looks inside `.git/hooks/`. Unless `git config core.hooksPath .githooks` or local scripts are run, Git completely skips post-commit tasks.

### 🛠️ The Fix Implemented:
We have established a version-controlled `.githooks/` directory containing:
* **`.githooks/post-commit`**: Automatically regenerates the [Graphify AST Graph](graphify-out/graph.json) after every commit.
* **`.githooks/pre-commit`**: Automatically runs `npx tsc --noEmit` to verify zero TypeScript errors before committing.
* **`automation/setup-hooks.sh`**: Automated installer script.

### ⚡ Quick Enable Command:
To activate hooks on any machine or setup, simply run:
```bash
npm run setup:hooks
# or
bash automation/setup-hooks.sh
```

---

## 2. Platform Features & Components

The **Enteglow** platform web app showcases cutting-edge enterprise AI, edge computing, real-time IoT telemetry, and digital transformation solutions:

### 🌌 1. Interactive Hero Section (`/`)
* **Dynamic Visual Engine**: Custom CSS particle animations, glassmorphism overlays, and neon gradient titles.
* **Real-time Enterprise Metrics**: Live counting indicators for active IoT sensors, AI inference speeds, and enterprise uptime.
* **Action Triggers**: Quick action CTAs linking directly to solutions and interactive product demos.

### 🤖 2. Autonomous AI Agent Showcase (`/components/sections/AIAgentShowcase.tsx`)
* **Agent Simulator**: Live interactive demonstration of autonomous AI agents executing tasks in parallel.
* **Execution Status Tracker**: Real-time status indicators (`Initializing`, `Processing`, `Completed`) with simulated log feeds.
* **Interactive AI Chat & Workflow**: Visual tab navigation showing code generation, data processing, and predictive maintenance agents.

### 📡 3. Real-Time IoT & Edge Telemetry Flow (`/components/sections/IoTDataFlow.tsx`)
* **Sensor Node Simulator**: Interactive node diagram illustrating data stream flow: `Edge Devices` ➡️ `Industrial Gateway` ➡️ `AI Processing Unit` ➡️ `Cloud Analytics`.
* **Telemetry Data Inspector**: Real-time payload monitor inspecting latency, CPU load, and sensor temperature metrics.

### 🚀 4. Product Ecosystem & Platform Storytelling (`/components/sections/`)
* **Product Ecosystem Grid**: Comprehensive layout showcasing Entelgow Edge OS, Entelgow AI Hub, and Entelgow Cloud Core.
* **Architectural Storytelling**: Interactive architectural blueprints showing high-frequency data pipelines, multi-layer encryption, and zero-trust security.

### 💡 5. Interactive Services Engine (`/services`)
* **Custom AI & ML Fine-Tuning**: Bespoke LLM deployment, computer vision, and neural network optimization.
* **Industrial IoT Infrastructure**: Edge hardware provisioning, MQTT/OPC-UA protocol integration, and real-time telemetry.
* **Cloud Architecture & DevOps**: High-availability cloud infrastructure, Kubernetes orchestration, and serverless pipelines.
* **Embedded Systems Engineering**: Low-level firmware development, microcontroller programming, and FPGA synthesis.

### 🏗️ 6. Technology Spectrum (`/technologies`)
* **Filterable Tech Stack Matrix**: Categorized exploration across:
  * **Frontend**: Next.js, React, TypeScript, Tailwind CSS, WebGL.
  * **Backend**: Node.js, Go, Rust, Python, GraphQL, gRPC.
  * **AI & Machine Learning**: PyTorch, TensorFlow, TensorRT, ONNX, LangChain.
  * **Cloud & Edge Computing**: AWS, GCP, Azure, Docker, Kubernetes, WebAssembly.
  * **IoT & Protocols**: MQTT, OPC-UA, Modbus, ROS2, LoRaWAN.

### 🏭 7. Industry Solutions Grid (`/industries`)
* Tailored digital transformation solutions for:
  * **Smart Manufacturing**: Predictive maintenance, automated QA, and digital twin simulation.
  * **Healthcare & Life Sciences**: AI diagnostics, HIPAA-compliant data pipelines, and medical IoT.
  * **Automotive & Mobility**: Connected vehicle telemetry, fleet management, and autonomous systems.
  * **Energy & Utilities**: Grid load forecasting, renewable energy tracking, and smart metering.
  * **Smart Logistics**: Automated warehouse routing, RFID asset tracking, and supply chain AI.

### 🔄 8. 5-Step Engineering Process (`/process`)
* Interactive workflow breakdown:
  1. **Discovery & Auditing**: Requirements mapping & legacy system analysis.
  2. **Architectural Blueprinting**: System topology, edge-cloud boundaries & security design.
  3. **Rapid Prototyping**: Proof-of-concept building and hardware-in-the-loop testing.
  4. **Enterprise Deployment**: Production rollout, CI/CD setup & zero-downtime integration.
  5. **Continuous AI Optimization**: Model retraining, latency reduction & 24/7 telemetry monitoring.

### 💼 9. Filterable Case Studies Showcase (`/projects` & `/projects/[id]`)
* **Dynamic Filtering**: Filter projects by domain (AI, IoT, Cloud, Edge).
* **Quantified ROI**: Hard impact statistics for each case study (e.g., 99.4% precision, 40% energy reduction).
* **Dynamic Route Pages**: Dedicated deep-dive pages for every case study with architecture diagrams and technical outcomes.

### 🏢 10. Corporate Vision & Leadership (`/about`)
* Mission statement, company vision, technological milestones, core value pillars, and leadership team overview.

### 📩 11. Interactive Contact & Consultation Hub (`/contact`)
* Interactive consultation scheduler form, office location maps, direct communication channels, and strict input validation.

---

## 3. Feature-Based App Router Architecture

This project strictly enforces a **feature-based architecture** under `src/app/`:

```text
src/
├── app/
│   ├── page.tsx                    # Home page implementation
│   ├── layout.tsx                  # Root layout & global metadata
│   ├── globals.css                 # Global CSS design system & Tailwind styles
│   ├── sitemap.ts                  # Dynamic SEO Sitemap generator
│   ├── robots.ts                   # Search engine crawler directive
│   │
│   ├── about/                      # About feature module
│   ├── contact/                    # Contact & Consultation module
│   ├── industries/                 # Industry solutions module
│   │   ├── page.tsx
│   │   ├── components/             # Feature-specific components
│   │   ├── services/               # Feature-specific data providers
│   │   └── types/                  # Feature-specific TS interfaces
│   │
│   ├── process/                    # 5-Step Engineering Process module
│   ├── projects/                   # Case studies & dynamic routing module
│   ├── services/                   # Core Services matrix module
│   ├── solutions/                  # Solution architectures module
│   └── technologies/               # Technology spectrum module
│
├── components/
│   ├── common/                     # Reusable UI primitives (Button, Badge, Card, DynamicIcon)
│   ├── layout/                     # Header, Footer, MobileNav
│   └── sections/                   # Home page sections (HeroSection, AIAgentShowcase, IoTDataFlow)
│
├── data/                           # Global static data declarations
└── types/                          # Core TypeScript declarations
```

---

## 4. Multi-Agent AI Development System

This codebase contains an integrated **React Multi-Agent Framework** designed for AI pair-programming and automated code quality governance:

| Agent | Specification File | Role |
|---|---|---|
| 🧠 **Planner** | [`agents/planner.agent.md`](agents/planner.agent.md) | Analyzes requirements, component hierarchy, and Server vs Client boundaries. |
| 🎼 **Orchestrator** | [`agents/orchestrator.agent.md`](agents/orchestrator.agent.md) | Sequences tasks across specialist agents. |
| 💻 **Implementer** | [`agents/implementer.agent.md`](agents/implementer.agent.md) | Writes TSX components, custom hooks, and pages following feature rules. |
| 🧪 **Tester** | [`agents/tester.agent.md`](agents/tester.agent.md) | Runs `npx tsc --noEmit`, linters, and verification builds. |
| 🔍 **Reviewer** | [`agents/reviewer.agent.md`](agents/reviewer.agent.md) | Audits code for performance, accessibility, security, and design adherence. |

---

## 5. Git Hooks & Graphify AST Analysis

### 📊 Graphify Codebase Graph Generation
Graphify parses the TSX/TS codebase into a structural Abstract Syntax Tree (AST) graph (`graphify-out/graph.json`), mapping imports, component relationships, and Server/Client boundaries.

* **Manual Rebuild**:
  ```bash
  python3 -m graphify .
  ```
* **Automated Rebuild**: Configured via `.githooks/post-commit` to execute automatically every time `git commit` succeeds!

---

## 6. Getting Started & Development Scripts

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher
* **Python**: 3.8+ (optional, for Graphify AST analysis)

### Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aneeshenteglow/enteglow-site.git
   cd enteglow-site
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Enable Git Hooks**:
   ```bash
   npm run setup:hooks
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Scripts Summary

| Command | Action |
|---|---|
| `npm run dev` | Starts Next.js development server with Hot Module Replacement |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Runs built production application |
| `npm run typecheck` | Validates TypeScript types (`tsc --noEmit`) |
| `npm run lint` | Runs Next.js ESLint verification |
| `npm run setup:hooks` | Installs and configures Git pre-commit & post-commit hooks |

---

## 7. SEO, Performance & Deployment

### Search Engine Optimization (SEO)
* **Metadata API**: Comprehensive Open Graph, Twitter Cards, and canonical URL settings in `src/app/layout.tsx`.
* **Dynamic Sitemap**: Automatically generated at `/sitemap.xml` via `src/app/sitemap.ts`.
* **Robots Directive**: Configured via `src/app/robots.ts`.

### Deployment Options
* **Vercel (Recommended)**: Push to `main` for automatic edge deployments.
* **Node.js / Docker**: Build standalone bundle (`npm run build`) and run via `npm run start` or Docker container.

---

*© Enteglow. Enterprise AI & Edge Intelligence Systems.*
