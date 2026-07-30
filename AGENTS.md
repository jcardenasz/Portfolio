# AGENTS.md

This file provides guidance to Codex when working on this repository.

# Project

Personal portfolio website of Juan Camilo Cárdenas, a Systems Engineer focused on Backend Development, Cloud Infrastructure, AI Automation and Enterprise Software.

The website serves as a professional portfolio rather than a personal blog. Every change should improve clarity, professionalism and user experience.

---

# Tech Stack

Framework
- Angular 20
- Angular SSR
- TypeScript

Styling
- Tailwind CSS v4

Server
- Express

Build
- Angular CLI

---

# Main Goals

The portfolio should:

- Load quickly.
- Be fully responsive.
- Follow modern UI/UX practices.
- Showcase projects professionally.
- Maintain excellent code readability.
- Be easy to extend.

Performance and maintainability are more important than adding animations or visual effects.

---

# Design Philosophy

The design should feel:

- modern
- minimal
- professional
- clean
- technical

Avoid:

- unnecessary animations
- flashy gradients
- excessive shadows
- cluttered layouts

Whitespace is preferred over visual noise.

---

# Angular Guidelines

Always use modern Angular APIs.

Prefer:

- standalone components
- inject()
- Signals for local state
- @if
- @for
- @switch

Avoid:

- NgModules
- deprecated APIs
- unnecessary RxJS when Signals solve the problem more simply

---

# Component Design

Components should:

- have a single responsibility
- remain under roughly 250 lines whenever practical
- be reusable
- avoid duplicated markup

Business logic belongs in services.

Presentation logic belongs in components.

---

# Styling Guidelines

Use Tailwind utilities first.

Avoid creating custom CSS unless:

- Tailwind cannot express the layout
- animations require it
- browser compatibility requires it

Prefer utility classes over long stylesheet files.

---

# TypeScript Guidelines

Always:

- use strict typing
- avoid any
- define interfaces
- use readonly whenever appropriate
- keep functions small

Prefer explicit code over clever code.

---

# Folder Structure

Preferred organization:

src/
    app/
        core/
        shared/
        components/
        pages/
        layouts/
        models/
        services/
        assets/

Shared UI belongs inside shared/.

Business logic belongs inside services/.

---

# Performance

Always optimize for:

- lazy loading
- image optimization
- minimal bundle size
- SSR compatibility

Do not introduce dependencies without a strong reason.

---

# Accessibility

Every UI change should consider:

- semantic HTML
- keyboard navigation
- screen readers
- heading hierarchy
- color contrast

---

# Dependencies

Before installing a package:

1. Check if Angular already provides the feature.
2. Prefer lightweight libraries.
3. Explain why the dependency is necessary.

Avoid dependency bloat.

---

# Code Quality

Favor:

- readable names
- small functions
- reusable utilities
- simple abstractions

Avoid:

- premature optimization
- unnecessary inheritance
- deeply nested conditionals

---

# Git

Commit messages should follow Conventional Commits.

Examples:

feat: add certifications section

fix: correct mobile navbar alignment

refactor: simplify project card component

style: improve hero spacing

---

# Documentation

When implementing new functionality:

- update README if needed
- document architectural decisions
- avoid redundant comments

Code should be self-explanatory.

---

# Testing

Before considering a task complete, ensure:

npm install

completes successfully.

Then verify:

npm run build

Builds must complete without errors.

---

# Assistant Instructions

When modifying this repository:

- Preserve the existing project architecture.
- Do not rewrite working code unnecessarily.
- Prefer Angular-native solutions.
- Keep responses concise.
- Explain significant architectural decisions before implementing them.
- If multiple implementations are possible, recommend the simplest maintainable solution first.

When generating code:

- Ensure Angular 20 compatibility.
- Ensure SSR compatibility.
- Use strict TypeScript.
- Avoid deprecated APIs.
- Avoid introducing new dependencies unless justified.

If a requested change negatively affects performance, accessibility, maintainability, or responsiveness, explain the trade-offs before implementing it.

---

# Project Vision

This portfolio should communicate:

- technical competence
- clean software engineering practices
- attention to detail
- maintainable architecture
- enterprise-ready development skills

Every contribution should move the project toward being a portfolio that would impress recruiters and senior software engineers reviewing the codebase.
