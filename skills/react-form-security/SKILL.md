---
name: react-form-security
description: >
  Guidelines for form validation, honeypots, reCAPTCHA, input sanitization, and
  security against XSS and CSRF in React applications.
version: "1.0"
framework: react
---

# React Form Security Skill

## Guidelines

- Validate inputs with schemas (Zod/Yup).
- Implement honeypot fields for bot protection.
- Never render unsanitized HTML directly via `dangerouslySetInnerHTML`.
- Use CSRF tokens and secure cookie settings on API requests.
