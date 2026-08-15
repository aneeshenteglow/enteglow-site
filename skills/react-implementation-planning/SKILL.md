---
name: react-implementation-planning
description: 6-step implementation planning workflow for React/Next.js applications with feature module placement rules.
version: "1.1"
framework: react
---

# React Implementation Planning Skill

## Planning Steps

1. Analyze React UI, state, and API integration requirements.
2. Determine feature module placement (`src/modules/<feature>/` for feature logic vs `src/components/common/` for shared UI primitives).
3. Assess Server vs Client Component boundaries (`RSC` vs `'use client'`).
4. Create step-by-step implementation plan.
5. Identify security and performance risks.
6. Specify validation commands (`npx tsc --noEmit`, `npm run test`, `npm run build`).
