# React Multi-Agent Environment

This directory contains the self-contained multi-agent environment, skills, and architecture plans for **React** and **Next.js** frontend development.

---

## Architectural Pattern: Feature-Based App Router Architecture

React / Next.js applications built from this template enforce a **feature-based architecture directly inside `src/app/`**:

```text
src/
├── app/
│   ├── page.tsx                    # Home page implementation directly here
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
│   ├── common/                     # UI primitives (Button, Badge, Card, Modal, ErrorBoundary)
│   ├── layout/                     # Header, Footer, Navigation
│   └── sections/                   # Reusable page sections (HeroSection, AIAgentShowcase)
│
├── services/                       # Global API clients & HTTP fetchers (base client, auth client)
├── hooks/                          # Shared React hooks (useDebounce, useTheme)
├── utils/                          # Pure helper functions & formatters
└── types/                          # Core global TS declarations
```

> **Feature-Based App Folder Rule**: Each feature directory under `src/app/<feature>/` is the single home for feature-specific page implementations, components, services, state, hooks, types, routes, and tests. Do NOT create or maintain a separate `src/modules/` directory for feature code. Global `src/components/`, `src/services/`, `src/hooks/`, `src/utils/`, and `src/types/` contain strictly code that is genuinely shared across multiple features.

---

## Agent Team

| Agent | File | Role |
|---|---|---|
| **Planner** | [`agents/planner.agent.md`](agents/planner.agent.md) | Analyzes requirements, component hierarchy, and RSC boundaries. |
| **Orchestrator** | [`agents/orchestrator.agent.md`](agents/orchestrator.agent.md) | Sequences tasks across specialist agents. |
| **Implementer** | [`agents/implementer.agent.md`](agents/implementer.agent.md) | Writes TSX components, hooks, and pages within feature modules. |
| **Tester** | [`agents/tester.agent.md`](agents/tester.agent.md) | Runs `npx tsc --noEmit`, Vitest, and `npm run build`. |
| **Reviewer** | [`agents/reviewer.agent.md`](agents/reviewer.agent.md) | Audits TSX code for performance, accessibility, and security. |

---

## Skills Catalog

| Skill | Description |
|---|---|
| [`react-graphify`](skills/react-graphify/SKILL.md) | Structural AST graph analysis of React TSX components, custom hooks, and Server Actions. |
| [`react-docker`](skills/react-docker/SKILL.md) | Docker container management for Next.js SSR and static React builds. |
| [`react-git-hooks`](skills/react-git-hooks/SKILL.md) | Mandatory pre-commit TypeScript compilation checks (`npx tsc --noEmit`) and post-commit Graphify graph updates (`graphify-out/graph.json`). |
| [`react-server-components`](skills/react-server-components/SKILL.md) | Next.js Server vs Client Component boundaries. |
| [`react-hooks-state`](skills/react-hooks-state/SKILL.md) | Custom hooks, state management, and side effects. |
| [`react-form-security`](skills/react-form-security/SKILL.md) | Form validation, honeypots, and anti-XSS standards. |
| [`react-testing`](skills/react-testing/SKILL.md) | Vitest, React Testing Library, and TypeScript compilation. |
| [`react-code-standards`](skills/react-code-standards/SKILL.md) | Baseline React coding standards, module-based folder rules, and git safety. |
| [`react-implementation-planning`](skills/react-implementation-planning/SKILL.md) | 6-step planning workflow for React tasks. |
| [`react-cross-agent-coordination`](skills/react-cross-agent-coordination/SKILL.md) | Handoff protocol between React agents. |
| [`react-project-onboarding`](skills/react-project-onboarding/SKILL.md) | Auto-detection and mapping protocol for React projects. |

---

## Architecture Plans

| Plan | Description |
|---|---|
| [`react-component-architecture.md`](architecture_plans/react-component-architecture.md) | Module-based component architecture and Server vs Client boundaries. |
| [`react-state-management.md`](architecture_plans/react-state-management.md) | Hooks and module-isolated state management architecture. |
| [`react-api-integration.md`](architecture_plans/react-api-integration.md) | Resilient data fetching and Server Actions architecture. |

---

## Foundation Code (Optional Template)

The `foundation/` directory contains **optional starter/template code** for initializing new React / Next.js projects. It is NOT mandatory agent infrastructure. When working on an existing project, agents should inspect and work with the project's actual codebase.

---

## Tool Integration Instructions

To adopt this React agent environment in a project:

1. Run `./automation/linux/setup-project.sh --framework react` (or `.\automation\windows\setup-project.ps1 -Framework react`).
2. Point tool entry points (`CLAUDE.md`, `GEMINI.md`, `.codex/instructions.md`, `.antigravity/README.md`) to `AGENTS.md`.

