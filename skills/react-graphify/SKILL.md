---
name: react-graphify
description: >
  React/Next.js structural codebase graph analysis skill. Maps relationships between Next.js
  Server Components, Client Components, custom hooks, API routes, and state stores.
version: "2.0"
framework: react
---

# React Graphify Codebase Analysis Skill

## Purpose

Enables React AI agents to perform mandatory AST codebase analysis, mapping Server vs Client component boundaries, custom hooks, Server Actions, and state managers.

---

## Actionable Instructions

### 1. What to Inspect

- Check `graphify-out/graph.json` in React project root.
- Inspect `src/app/` feature-based App Router directory hierarchy.

### 2. What to Do

- Run `graphify .` or `python3 -m graphify .`.
- Query `graphify-out/graph.json` to map Component -> Custom Hook -> Server Action -> API Route relationships before editing code.
- Verify post-commit Git hook (`.githooks/post-commit` or `automation/git/post-commit.sh`) updates `graphify-out/graph.json` after committing changes.

### 3. What NOT to Do

- Do not commit `node_modules/` or `graphify-out/cache/`.
- Do not disable post-commit Graphify graph updates.

### 4. Tools & Commands to Use

- `graphify .`
- `python3 -m graphify .`
- `npx tsc --noEmit`

### 5. How to Validate

- Verify component import trees match TSX module graphs in `graphify-out/graph.json`.
- Confirm `graphify-out/graph.json` is updated post-commit.
