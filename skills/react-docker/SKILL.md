---
name: react-docker
description: >
  React and Next.js containerization skill. Manages Docker setups for Next.js SSR and React static builds.
version: "2.0"
framework: react
---

# React Docker Containerization Skill

## Purpose

Enables React agents to build, optimize, and debug multi-stage Docker containers for Next.js Node.js servers or static SPA Nginx hosts.

---

## Actionable Instructions

### 1. Inspect

- Inspect `Dockerfile` for `node:18-alpine` or `node:20-alpine` base images.

### 2. Action

- Run `docker compose -f docker/docker-compose.dev.yml up --build`.

### 3. Validation

- Verify Next.js app loads at `http://localhost:3000`.
