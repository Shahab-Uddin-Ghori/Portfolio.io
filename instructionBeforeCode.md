# Project Architecture & Engineering Guidelines (`instructionBeforeCode.md`)

> **MANDATORY DIRECTIVE FOR ALL AGENTS & DEVELOPERS:**  
> Read this document completely BEFORE writing, modifying, or proposing any code in this repository. Every instruction here is non-negotiable.

---

## 1. Executive Summary & Core Rules

This project is a high-performance, award-winning grade portfolio built on **Next.js (App Router)** and **TypeScript**. 
To deliver a butter-smooth, 60–120 FPS experience with instantaneous page response times and maximum SEO reach, adhere to these fundamental principles:

1. **Strictly follow user directions**: Never assume, hallucinate, or arbitrarily invent layout, copy, or styling. Build exactly what is specified or provided in reference designs.
2. **Zero duplicate work (DRY & Modular)**: Extract reusable primitives, components, and utility functions. No duplicate styling or repeated markup.
3. **Performance First**: Ultra-fast Time-to-First-Byte (TTFB), minimal Total Blocking Time (TBT), zero Cumulative Layout Shift (CLS), and butter-smooth scrolling without micro-stutters.
4. **Clear Server vs. Client Boundary**: Next.js Server Components (RSC) by default. Push `'use client'` strictly to leaf nodes (interactive components, animation triggers).
5. **Centralized SEO Architecture**: Dynamic OpenGraph, Twitter cards, canonical tags, automated XML sitemaps, robots.txt, and Schema.org JSON-LD structured data.
6. **Pixel-Perfect Reference Match**: When UI reference images are provided, replicate their typography, spacing, proportions, contrast, and micro-interactions with microscopic fidelity.
7. **Zero TypeScript Errors**: Every pull request, feature, and task must pass `npx tsc --noEmit` cleanly without using unsafe `any` types.

---

## 2. Brutally Honest Technical Review & Corrections

The user explicitly requested: *"Be brutally honest and real, don't be sugar coated. If something is illogical, correct it professionally."* Here are the critical technical realities that govern this codebase:

### 2.1 The Locomotive Scroll Dilemma: Legacy v4 vs. Modern Smooth Scroll (Lenis / Locomotive v5)
* **The Problem with Legacy Locomotive Scroll (v4)**:
  - Locomotive Scroll v4 hijacked the native browser scroll container using CSS 3D transforms (`translate3d`).
  - **Why this fails in modern web development**:
    - Breaks native browser accessibility (keyboard tab-indexing and screen readers fail to follow).
    - Breaks CSS `position: sticky` and `position: fixed` (forces awkward, buggy wrapper hacks).
    - Breaks browser native scroll restoration and in-page anchor navigation (`#about`, `#contact`).
    - Destroys mobile touch performance: Mobile OS already has hardware-accelerated momentum scrolling. Hijacking it with JavaScript results in rubber-banding, input lag, and battery drain.
    - Negative SEO impact on Googlebot's viewport rendering.
* **The Modern Professional Solution**:
  - We use **Lenis** (or **Locomotive Scroll v5**, which was completely rewritten natively on top of Lenis).
  - **Why this is superior**:
    - Enhances native scroll instead of hijacking the DOM.
    - Preserves native `window.scrollY`, `position: sticky`, native anchor links, and SEO accessibility.
    - Integrates flawlessly with modern animation libraries like GSAP ScrollTrigger and Framer Motion.
    - Runs at native 60–120 FPS on high-refresh displays.
    - Smooth scroll is strictly disabled on mobile touch devices and when users enable `prefers-reduced-motion`.

### 2.2 Client vs. Server Components (RSC Discipline)
* **The Common Mistake**: Adding `'use client'` at the top of page layouts or section containers just to trigger a hover or scroll animation. This forces the entire subtree into the client bundle, ballooning JS payload and causing hydration delay.
* **Our Strict Rule**:
  - Pages and layouts must remain **Server Components** (`async` by default).
  - Centralize client-side animations into micro-wrappers (e.g., `<SmoothScrollProvider>`, `<RevealAnimation>`, `<MagneticButton>`).
  - Pass server-rendered content as `children` into client animation wrappers so HTML is pre-rendered for search engines and instant display.

### 2.3 Single Source of Truth for Data (No Hardcoded Content in JSX)
* Never hardcode portfolio projects, skills, biography, social links, or SEO keywords directly inside JSX markup.
* Store all data in dedicated, strongly-typed files in `@/data/` or `@/config/` (e.g., `projects.ts`, `siteConfig.ts`, `experience.ts`).
* When content changes, you modify the data file, NOT the layout or component code.

---

## 3. SEO & Metadata Architecture

SEO is not an afterthought; it is an architectural pillar:

1. **Centralized Configuration (`@/config/seo.ts`)**:
   - Contains default titles, templates, descriptions, keywords, author info, OpenGraph URLs, and social handles.
2. **Metadata API**:
   - Root layout exports a comprehensive `metadata` object with `metadataBase`, OpenGraph, Twitter card, robots directives, and icons.
   - Individual subpages or dynamic routes export specific, context-rich metadata using `generateMetadata()`.
3. **Structured Data (JSON-LD)**:
   - Provide valid Schema.org structured data (`Person`, `WebSite`, `ProfilePage`, `CreativeWork`) embedded in `<script type="application/ld+json">`.
4. **Search Engine Discovery**:
   - `src/app/sitemap.ts`: Dynamic XML sitemap generator.
   - `src/app/robots.ts`: Automated crawling permissions and sitemap linking.
5. **Semantic HTML5**:
   - Strict hierarchical headings: Exactly one `<h1>` per page.
   - Proper landmark elements: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<article>`, `<footer>`.
   - Descriptive `alt` attributes on all images and `aria-label` on icon-only interactive controls.

---

## 4. Directory & File Architecture

Follow this strict, scalable folder structure:

```text
portfolio/
├── public/                       # Static assets (favicons, images, logos, fonts)
│   ├── images/
│   └── icons/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (RSC + HTML/Body + Metadata)
│   │   ├── page.tsx              # Home portfolio page (RSC)
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   ├── sitemap.ts            # Dynamic sitemap.xml
│   │   └── globals.css           # Global tokens, resets, typography
│   ├── components/               # UI and Layout Components
│   │   ├── ui/                   # Reusable primitive UI (Button, Badge, Card, Tooltip)
│   │   ├── layout/               # Structural UI (Navbar, Footer, Container)
│   │   ├── sections/             # Portfolio sections (Hero, About, Projects, Experience, Contact)
│   │   └── providers/            # Client providers (SmoothScrollProvider, ThemeProvider)
│   ├── config/                   # Site settings & SEO constants
│   │   ├── site.ts               # Core site configuration
│   │   └── seo.ts                # Metadata and JSON-LD schemas
│   ├── data/                     # Typed data source (projects, skills, experience)
│   │   ├── projects.ts
│   │   └── experience.ts
│   ├── hooks/                    # Reusable custom React hooks
│   ├── lib/                      # Utility functions, classes, and helper libraries
│   │   └── utils.ts              # cn() class merger, formatting helpers
│   └── types/                    # Shared TypeScript interfaces & types
│       └── index.ts
├── instructionBeforeCode.md      # THIS MANDATORY GUIDELINE FILE
├── package.json
├── tsconfig.json
└── tailwind.config.ts / postcss.config.mjs
```

### Naming Conventions:
* **Components**: PascalCase (e.g., `ProjectCard.tsx`, `SmoothScrollProvider.tsx`).
* **Utilities / Hooks / Config**: camelCase (e.g., `useScrollProgress.ts`, `siteConfig.ts`, `utils.ts`).
* **Types / Interfaces**: PascalCase (e.g., `ProjectItem`, `SiteMetadata`).

---

## 5. Responsive Design & Accessibility Matrix

1. **Breakpoints**:
   - Mobile: `< 640px` (`sm`)
   - Tablet: `640px – 1023px` (`md`)
   - Laptop/Desktop: `1024px – 1279px` (`lg`)
   - Large Desktop / Ultra-Wide: `1280px+` (`xl`, `2xl`)
2. **Fluid Typography & Spacing**:
   - Use fluid sizing (`clamp(...)` or standardized Tailwind scaling) to eliminate abrupt layout jumps between screen sizes.
3. **Touch Targets**:
   - Minimum interactive target size: `44px x 44px` on mobile/tablet.
4. **Accessibility (a11y)**:
   - High color contrast ratio complying with WCAG AA standard (4.5:1 for body text, 3:1 for large text).
   - Full keyboard navigability (visible focus states with `focus-visible:ring`).
   - Honor `prefers-reduced-motion`: disable heavy parallax or transform animations for users who request it.

---

## 6. Development Workflow & Validation Checklist

Before marking any feature or code change complete:

1. [ ] **TypeScript Check**: Run `npx tsc --noEmit` — must exit with code 0.
2. [ ] **Component Boundary**: Verify `'use client'` is only present where browser APIs or React hooks are strictly required.
3. [ ] **Performance Audit**: Ensure no unoptimized images (always use `next/image` with explicit dimensions or fill, appropriate `sizes`, and WebP/AVIF formats).
4. [ ] **Fidelity Review**: Compare the rendered UI against any provided reference pictures at mobile (375px), tablet (768px), and desktop (1440px).
5. [ ] **No Unsolicited Work**: Verify no extra unrequested pages or features were added without explicit user approval.
