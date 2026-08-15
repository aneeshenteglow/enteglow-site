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

Enables React AI agents to analyze Next.js and React frontend codebases, mapping Server vs Client component boundaries, custom hooks, Server Actions, and state managers.

---

## Actionable Instructions

### 1. What to Inspect

- Check `graphify-out/graph.json` in React project root.
- Inspect `src/` or `app/` / `pages/` directory hierarchy.

### 2. What to Do

- Run `graphify .`.
- Query `graphify-out/graph.json` to map Component -> Custom Hook -> Server Action -> API Route relationships.

### 3. What NOT to Do

- Do not commit `node_modules/` or `graphify-out/cache/`.

### 4. Tools & Commands to Use

- `graphify .`
- `npx tsc --noEmit`

### 5. How to Validate

- Verify component import trees match TSX module graphs in `graph.json`.
