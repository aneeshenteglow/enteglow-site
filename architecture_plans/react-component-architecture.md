# React Component & App Router Architecture Plan

## Architectural Overview

React and Next.js applications in this template follow a **feature-based architecture directly inside `src/app/`**. Each feature folder under `src/app/<feature>/` serves as the single home for feature-specific code (page implementations, components, services, state, hooks, types, routes, and tests).

### Why Separate `modules/` Directories Are Prohibited

Creating a separate `src/modules/` directory alongside `src/app/` splits feature code across multiple top-level abstractions (`src/app/customer/page.tsx` vs `src/modules/customer/components/`). Placing feature code directly inside `src/app/<feature>/` establishes clear boundaries and high cohesion.

### Feature-Based App Router Folder Structure

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
│   ├── common/                     # Globally reusable UI components (Button, Badge, Card, Modal)
│   ├── layout/                     # Header, Footer, Navigation
│   └── sections/                   # Reusable page sections
│
├── services/                       # Global API clients & HTTP fetchers (base client, auth client)
├── hooks/                          # Shared React hooks (useDebounce, useTheme)
├── utils/                          # Pure helper functions & formatters
└── types/                          # Core global TS declarations
```

## Architectural Rules

1. **Feature Ownership Boundary**: Place all feature-specific page implementations, components, services, state, hooks, types, routes, and tests directly inside `src/app/<feature>/`. Do not create a separate `src/modules/` directory.
2. **Global Directory Purpose**: `src/components/`, `src/services/`, `src/hooks/`, `src/utils/`, and `src/types/` contain ONLY code that is genuinely shared across multiple features.
3. **Next.js RSC Boundary**:
   - Default to Server Components (`RSC`) inside `src/app/<feature>/page.tsx` for server-side data fetching and metadata exports.
   - Add `'use client'` at the top of component files that require interactive state (`useState`), side effects (`useEffect`), or browser DOM events.
