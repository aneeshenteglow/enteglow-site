# React Agent Usage Guide

Practical guide for developers: how to use React and Next.js agents, skills, and architecture plans with AI coding tools (Antigravity, Cursor, Claude Code, Codex).

---

## 1. Two Recommended Usage Approaches

### Option 1 — Automatic Agent Selection (Generic Agent)

Use this approach when you want the AI tool to inspect the codebase and choose the correct agent, skills, and architecture plans automatically:

```text
[Describe your React/Next.js task here]

First inspect the project and AGENTS.md.
Automatically select the appropriate React agent, skills, and architecture plans.
Execute the task, run npx tsc --noEmit and npm run build, and report the results.
```

#### Automatic Selection Examples

**UI Feature Example:**
```text
Implement a user settings panel using Next.js App Router.

Inspect AGENTS.md and determine which React agent, skills, and architecture plans are required.
Select the appropriate agent automatically, implement the TSX components and hooks, run type checks, and report the result.
```

**Form Security Example:**
```text
Add anti-bot protection and input validation to the contact form.

Determine which agent and skills should handle this task.
Check relevant architecture plans, implement Zod validation and honeypot protection, and verify the build.
```

---

### Option 2 — Explicit Agent Selection

Use this approach when you already know which specific agent you want to invoke:

```text
@react/agents/implementer.agent.md
@react/skills/react-server-components/SKILL.md

Create a new Next.js Server Component page for displaying user dashboard analytics.
```

---

## 2. Quick Copy-Paste 4-Step Pipeline

For complex features, step through the 4-stage agent pipeline:

### Step 1: Planning (Planner Agent — No Code Changes)

```text
@react/agents/planner.agent.md
@react/skills/react-implementation-planning/SKILL.md

Analyze this requirement: [Insert task description]
Inspect existing components, hooks, and App Router pages.
Determine Server vs Client Component boundaries and create an implementation plan.
```

### Step 2: Implementation (Implementer Agent)

```text
@react/agents/implementer.agent.md
@react/skills/react-server-components/SKILL.md
@react/skills/react-hooks-state/SKILL.md

Implement the approved plan for: [Insert task name]
Follow coding standards in @react/skills/react-code-standards/SKILL.md.
```

### Step 3: Testing (Tester Agent)

```text
@react/agents/tester.agent.md
@react/skills/react-testing/SKILL.md

Run npx tsc --noEmit, Vitest, and npm run build.
Fix any compilation errors or broken tests.
```

### Step 4: Review (Reviewer Agent)

```text
@react/agents/reviewer.agent.md
@react/skills/react-code-standards/SKILL.md

Review recent TSX changes for accessibility, hook dependency arrays, and bundle size.
```

---

## 3. Tool-Specific Instructions

### Antigravity

- **Automatic Selection**: Type your task prompt directly; Antigravity reads `AGENTS.md` and loads matching skills automatically.
- **Explicit Selection**: Use `@` mentions in chat:
  ```text
  @react/agents/planner.agent.md
  Analyze the authentication modal state requirements and create an implementation plan.
  ```

### Cursor & VS Code AI

- **Explicit Selection**: Reference agent/skill files using `@`:
  ```text
  @react/agents/implementer.agent.md @react/skills/react-hooks-state/SKILL.md
  Create a custom useDebouncedSearch hook for live input filtering.
  ```

### Claude Code

- **Usage**: Mention file paths directly in prompt text:
  ```text
  Read react/agents/implementer.agent.md and react/skills/react-server-components/SKILL.md.
  Refactor page.tsx into a Server Component.
  ```

### Codex CLI

- **Usage**: Reference `react/AGENTS.md` inside `.codex/instructions.md` or mention file paths:
  ```text
  Follow react/agents/tester.agent.md to run npx tsc --noEmit and npm run build.
  ```
