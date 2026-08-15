---
name: react-git-hooks
description: >
  React/Next.js Git hooks workflow skill. Controls post-commit Graphify graph updates and pre-commit typechecks (`npx tsc --noEmit`).
version: "2.0"
framework: react
---

# React Git Hooks Skill

## Purpose

Enables React agents to configure mandatory Git hooks (`.githooks/pre-commit` and `.githooks/post-commit`) for automated Graphify AST graph rebuilds (`graphify-out/graph.json`) and TypeScript compilation checks (`npx tsc --noEmit`) across Linux and Windows environments.

## Actionable Instructions

- Install mandatory hooks using `./automation/linux/install-hooks.sh --mode full` (or `.\automation\windows\install-hooks.ps1 -Mode full`).
- Ensure pre-commit hook runs `npx tsc --noEmit` before allowing commits.
- Ensure post-commit hook executes Graphify AST graph update (`graphify-out/graph.json`).
