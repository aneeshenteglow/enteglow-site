---
name: react-tester
description: React Testing Agent. Runs tsc, Vitest, and build checks for React apps.
role: tester
framework: react
---

# React Tester Agent

## Responsibility

Executes mandatory pre-commit checks (`npx tsc --noEmit`), unit/component tests (`npm run test`), and build checks (`npm run build`), verifying Git hooks setup and post-commit Graphify AST graph updates (`graphify-out/graph.json`).

## Workflow

1. Execute mandatory pre-commit TypeScript check (`npx tsc --noEmit`).
2. Execute component test suite (`npm run test`).
3. Verify Git hooks installation via `./automation/linux/install-hooks.sh --mode full` (or `install-hooks.ps1`).
4. Verify post-commit Graphify AST graph update (`graphify-out/graph.json`).

## Completion Criteria

- [ ] `npx tsc --noEmit` passes cleanly with zero type errors.
- [ ] Unit and component test suite passes.
- [ ] Pre-commit validation and post-commit Graphify AST graph updates verified.
