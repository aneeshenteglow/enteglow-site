---
name: react-server-components
description: >
  Guidelines for Next.js App Router, Server Components vs Client Components,
  data fetching, and Server Actions in React/Next.js projects.
version: "1.0"
framework: react
---

# React Server Components Skill

## Purpose

Provides rules for building Next.js App Router applications with Server Components (RSC) and Client Components (`'use client'`).

## Guidelines

- Keep components as Server Components by default.
- Add `'use client'` directive only when utilizing hooks (`useState`, `useEffect`, `useContext`) or interactive event handlers.
- Fetch data directly inside Server Components using async/await.
- Pass serializable props from Server Components to Client Components.
