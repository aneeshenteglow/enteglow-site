# React / Next.js Production Project Guide & Setup Manual

This document provides a step-by-step guide to initializing, configuring, developing, testing, containerizing, and deploying a new **production-ready React / Next.js application** using this foundation template.

> 💡 **Looking for AI Agent Instructions?**  
> If you are working with AI agents (Claude, Gemini, Codex, Antigravity), see [`AGENT_USAGE.md`](AGENT_USAGE.md) for detailed guidelines on leveraging specialist agents, skills, and graph-based analysis. This `README.md` is strictly dedicated to human developers building and deploying projects.

---

## Reusable React Agent Synchronization & Maintenance System

This framework-isolated React agent system provides automated synchronization tools to provision, update, and maintain AI agent capabilities across target React projects (such as `enteglow-site`).

### 1. Purpose of the React Agent System
The React Agent system provisions specialized AI personas (`implementer`, `planner`, `reviewer`, `tester`, `orchestrator`), actionable skills, Next.js Server/Client component architecture plans, and mandatory pre-commit/post-commit Git automation hooks tailored specifically for React and Next.js applications.

### 2. How to Apply/Update React Agents in Target Projects

Use the framework-isolated `update-agent` scripts in `react/automation/` to apply or synchronize the React agent system to any target project directory:

#### Linux / macOS Bash Command
```bash
# From template repository root:
bash react/automation/update-agent.sh /path/to/your/react-project

# Or from inside react/automation:
./update-agent.sh --target-dir /path/to/your/react-project
```

#### Windows PowerShell Command
```powershell
# From template repository root:
powershell -File react\automation\update-agent.ps1 -TargetDir C:\Users\name\Documents\react\enteglow-site

# Or from inside react\automation:
.\update-agent.ps1 -TargetDir C:\Users\name\Documents\react\enteglow-site
```

### 3. Which Files Are Copied or Synchronized
The synchronization script copies and updates the following framework-isolated assets:
* `AGENTS.md` & `AGENT_USAGE.md` — Core React agent entry point & execution protocol.
* `agents/` — Specialist React agent roles (`implementer.agent.md`, `planner.agent.md`, `reviewer.agent.md`, `tester.agent.md`, `orchestrator.agent.md`).
* `skills/` — Actionable React skills (`react-code-standards`, `react-git-hooks`, `react-graphify`, `react-testing`, etc.).
* `architecture_plans/` — Standard React architectural blueprints (`react-component-architecture.md`, `react-state-management.md`, `react-api-integration.md`).
* `automation/` — Framework-isolated pre-commit/post-commit Git hooks and installer scripts (`pre-commit.sh`, `pre-commit.ps1`, `post-commit.sh`, `post-commit.ps1`, `install-hooks.sh`, `install-hooks.ps1`).
* AI Tool Entry Points — Configures `CLAUDE.md`, `GEMINI.md`, `.codex/instructions.md`, and `.antigravity/README.md`.
* Graphify & GitIgnore Boundaries — `.graphifyignore` and `.gitignore` templates.

### 4. How Existing Project-Specific Context Is Preserved
The sync script evaluates existing files in the target project before applying changes:
* **`[ADDED]`**: Created if the asset is missing in the target project.
* **`[UPDATED]`**: Updated if the template asset contains new framework standards or rules.
* **`[PRESERVED]`**: Retained unchanged if target files already match or contain custom project-specific context. Project-specific custom skills or agent files in the target project are never deleted.

### 5. Future Maintenance Workflow
1. **Update Central React Agent**: Make enhancements or add new React skills in `react/`.
2. **Propagate to Existing Projects**: Run `./update-agent.sh /path/to/target-project` for each active React application (e.g. `enteglow-site`).
3. **Verify Target Integrity**: Run pre-commit typechecks (`npx tsc --noEmit`) and post-commit Graphify AST graph updates inside the target project.

---

## 1. Feature-Based App Router Architecture Standard

This project foundation enforces a **feature-based architecture directly inside `src/app/`**. Each feature directory under `src/app/<feature>/` is the single home for feature-specific page implementations, components, services, state, hooks, types, routes, and tests.

```text
src/
├── app/
│   ├── page.tsx                    # Home page implementation
│   ├── layout.tsx                  # Root layout
│   │
│   ├── customer/
│   │   ├── page.tsx                # Customer page implementation
│   │   ├── components/             # Customer-specific components (CustomerTable, CustomerForm)
│   │   ├── services/               # Customer-specific API endpoints (customerApi.ts)
│   │   ├── store/                  # Customer-specific state (customerSlice.ts)
│   │   ├── hooks/                  # Customer-specific hooks (useCustomers.ts)
│   │   ├── types/                  # Customer-specific TS types (customer.ts)
│   │   ├── routes/                 # Customer-specific route definitions (customerRoutes.ts)
│   │   ├── tests/                  # Customer-specific tests
│   │   └── index.ts                # Public feature export
│   │
│   ├── order/
│   │   ├── page.tsx                # Order page implementation
│   │   ├── components/
│   │   ├── services/
│   │   ├── store/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── index.ts
│   │
│   └── ...
│
├── components/
│   ├── common/                     # Globally reusable UI components (Button, Badge, Card, Modal)
│   ├── layout/                     # Header, Footer, Navigation
│   └── sections/                   # Reusable page sections
│
├── services/                       # Global API clients & HTTP fetchers (base client, auth client)
├── hooks/                          # Shared React hooks (useDebounce, useTheme)
├── utils/                          # Shared helper utilities & formatters
└── types/                          # Core global TypeScript type declarations
```

> **Principle**: Feature folders inside `src/app/<feature>/` serve as the feature boundary. Do not create a separate `src/modules/` layer. Global `src/components/`, `src/services/`, `src/hooks/`, `src/utils/`, and `src/types/` are reserved for code genuinely shared across multiple features.

---

## 2. Core vs. Optional Components

This template provides a modular React foundation supporting both Next.js Server Components (RSC) and Client-side React SPA architectures:

```text
react/
├── Core Foundation (Always Included)
│   ├── Module-Based Architecture    # Feature modules in src/modules/<feature>/
│   ├── React Component Foundation   # Common UI primitives in src/components/common/
│   ├── Custom Hooks State Manager   # Resilient state management & custom hooks
│   ├── Form Security & Anti-XSS     # Input validation, honeypots & sanitization standards
│   └── Testing & Quality Standards  # Vitest, React Testing Library & tsc typechecking
│
└── Optional Modular Features
    ├── Next.js App Router (RSC)      # React Server Components & Server Actions architecture
    ├── Resilient API Client         # Data fetching, caching, revalidation & SWR/TanStack Query
    ├── Docker Containerization      # Next.js standalone Node.js server container
    └── React Graphify               # AST structural graph analysis for React TSX files
```


---

## 2. Production-Grade Architecture Flow

### Runtime Application Architecture (Next.js App Router)

```text
Client Browser Application
            │
            ▼
Next.js App Router (Server Node.js Runtime / Edge)
            │
   ┌────────┴────────┐
   ▼                 ▼
Server Component  Client Component ('use client')
(RSC Data Fetch)  (Interactive State / Custom Hooks)
   │                 │
   │                 ▼
   │          Server Actions / REST API Interceptor
   │                 │
   └────────┬────────┘
            ▼
  Backend Database / Microservices API
```

### Production CI/CD & Standalone Docker Container Pipeline

```text
Git Repository (Commit / Push)
              │
              ▼
   CI Pipeline (GitHub Actions / Vercel CI)
              │
    ┌─────────┴─────────┐
    ▼                   ▼
TypeScript Check    Unit & Component Tests
(npx tsc --noEmit)  (npm run test)
    │                   │
    └─────────┬─────────┘
              ▼
    Next.js Production Build
    (npm run build -> .next/standalone)
              │
              ▼
  Multi-Stage Docker Image Packaging
              │
              ▼
 Container Registry (GHCR / AWS ECR)
              │
              ▼
 Production Deployment (Vercel / AWS ECS / Kubernetes)
```

---

## 3. Step-by-Step New Project Setup

Follow these 16 steps to initialize a new React / Next.js application from scratch.

### Step 1 — Copy / Initialize Template
Run the root project bootstrapper script:

```bash
# Linux / macOS
./automation/linux/setup-project.sh --framework react --target-dir ../my-react-app --git-hooks basic

# Windows PowerShell
.\automation\windows\setup-project.ps1 -Framework react -TargetDir ..\my-react-app
```

### Step 2 — Select the Framework
Confirm that the framework target directory contains React / Next.js assets (`package.json`, `src/`, `next.config.js` or `vite.config.ts`).

### Step 3 — Create / Initialize Project
Navigate to your project directory and install packages:

```bash
cd ../my-react-app
npm install
```

### Step 4 — Configure Project Name & Metadata
Update `package.json` name, version, and set SEO metadata / title in `src/app/layout.tsx`.

### Step 5 — Configure Environment Variables
Create local environment files:

```bash
cp .env.example .env.local
cp .env.example .env.production
```

### Step 6 — Select Optional Features
Toggle optional integrations (Next.js Server Actions, Client SPA state, Form Security honeypots) in component boundaries.

### Step 7 — Install Dependencies
Fetch dependencies:

```bash
npm install
```

### Step 8 — Configure API Connection / Server Actions
Set public API URL environment variable:

```env
NEXT_PUBLIC_API_URL=https://api.mycompany.com/v1
```

### Step 9 — Configure Authentication & Session Storage
Initialize authentication providers (NextAuth / JWT session cookies) in layout wrappers.

### Step 10 — Configure Docker (Optional)
Ensure `output: 'standalone'` is set in `next.config.js` for lightweight production Docker images.

### Step 11 — Configure Mandatory Git Hooks & Graphify
Initialize Git repository and enable mandatory pre-commit TypeScript checks (`npx tsc --noEmit`) and post-commit Graphify AST graph updates (`graphify-out/graph.json`):

```bash
git init
./automation/linux/install-hooks.sh --mode full
```

### Step 12 — Configure Graphify (AST Codebase Analysis)
Enable React AST graph analysis:

```bash
python3 -m graphify .
```

### Step 13 — Run Initial Type Checks
Validate TypeScript types:

```bash
npx tsc --noEmit
```

### Step 14 — Run Test Suite
Execute unit and component tests:

```bash
npm run test
```

### Step 15 — Start Local Development Server
Launch Next.js development server:

```bash
npm run dev
```

### Step 16 — Prepare Production Build
Build optimized production bundle:

```bash
npm run build
```

---

## 4. Environment Configuration

### Safe Environment Template (`.env.local`)

```env
# Next.js Environment Variables
NEXT_PUBLIC_APP_NAME=My Production React App
NEXT_PUBLIC_API_URL=https://api.example.com/v1

# Server-Side Only Credentials (Never exposed to browser)
DATABASE_URL=postgresql://user:<your-password>@localhost:5432/mydb
AUTH_SECRET=<your-random-32-character-auth-secret>
```

> ⚠️ **Security Warning**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser bundle. Keep database passwords and private API keys strictly server-side.

---

## 5. Local Development Workflow

```bash
# 1. Install dependencies
npm install

# 2. Run TypeScript compiler check
npx tsc --noEmit

# 3. Run Vitest component tests
npm run test

# 4. Start Next.js HMR development server
npm run dev

# 5. Build production bundle (.next/standalone)
npm run build
```

---

## 6. Docker Operations

### Production Multi-Stage Standalone Next.js Dockerfile

```bash
# Build standalone production image
docker build -t my-react-app:latest -f Dockerfile .

# Run standalone Next.js server container
docker run -d -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.example.com my-react-app:latest
```

---

## 7. Git Workflow & Automation

```bash
# Initialize repo and pre-commit checks
git init
./automation/linux/install-hooks.sh --mode basic

# Commit initial React app setup
git add .
git commit -m "feat: initialize React / Next.js app from production template"
```

For automation details, see the `automation/` directory within this package.

---

## 8. Graphify Codebase Analysis

* **AST Analysis**: Parses TSX components, custom hooks, and Server Actions.
* **Update Graph**: Run `python skills/react-graphify/graphify.py` to regenerate structural graph index.

---

## 9. Production Deployment

### Production Options

1. **Vercel / Cloud Deployment**: Connect Git repository for automatic edge deployments.
2. **Docker / Kubernetes Deployment**: Build Next.js standalone container image and deploy to Node.js application cluster.

---

## 10. Project Setup Checklist

- [ ] Project directory created and template populated
- [ ] Node dependencies installed (`npm install`)
- [ ] Environment variables configured in `.env.local`
- [ ] Server Component vs Client Component boundaries established
- [ ] Form security and input validation implemented
- [ ] `npx tsc --noEmit` passing with zero compilation errors
- [ ] Unit & component test suite passing (`npm run test`)
- [ ] Git repository initialized with pre-commit hooks
- [ ] Production build verified (`npm run build`)

---

## 11. Cross-References & Additional Documentation

* **AI Agent Instructions**: [`AGENT_USAGE.md`](AGENT_USAGE.md)
* **Agent Team & Roles**: [`AGENTS.md`](AGENTS.md)
* **Architecture Plans**: [`architecture_plans/`](architecture_plans/)
* **Project Setup**: See Step-by-Step instructions in this README (Section 3)
