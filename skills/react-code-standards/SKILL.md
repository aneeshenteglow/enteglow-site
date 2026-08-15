---
name: react-code-standards
description: Baseline coding standards for React and Next.js applications enforcing feature-based app folders in src/app/<feature>/, simplicity, git safety, and TypeScript strictness.
version: "1.4"
framework: react
---

# React Code Standards Skill

## Mandatory Architectural Rules

1. **Feature-Based App Router Structure**:
   - Feature-specific page implementations, components, services, state, hooks, types, routes, and tests MUST live directly inside `src/app/<feature>/`.
   - Do NOT create or maintain a separate `src/modules/` directory for Next.js App Router applications.
   - Global `src/components/`, `src/services/`, `src/hooks/`, `src/utils/`, and `src/types/` are strictly reserved for code genuinely shared across multiple features.

2. **Junior-Developer Simplicity**: Write clean, explicit, readable TSX code.
3. **🚨 Git Safety**: Never run `git commit`, `git push`, `git merge`, or `git checkout -b`.
4. **TypeScript Strictness**: `npx tsc --noEmit` must pass cleanly without type suppressions (`@ts-ignore`).
5. **Build Verification**: `npm run build` must succeed before declaring completion.
