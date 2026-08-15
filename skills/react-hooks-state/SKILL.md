---
name: react-hooks-state
description: >
  Guidelines for custom React hooks, state management, context providers, and
  side-effect management in React applications.
version: "1.0"
framework: react
---

# React Hooks & State Management Skill

## Guidelines

- Encapsulate reusable stateful logic inside custom hooks (`use<Name>`).
- Follow the Rules of Hooks (never call hooks inside loops or conditions).
- Use `useReducer` or state libraries (Zustand/Redux) for complex nested state.
- Keep state local to the component that needs it before elevating to context.
