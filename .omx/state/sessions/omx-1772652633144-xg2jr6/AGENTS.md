# AGENTS.md

This file provides guidance for agentic coding assistants working on this codebase.

## Project Overview

This is a Next.js 16.1.6 + React 19 website for CA Poonam Pathak, a Chartered Accountant and Business Advisor. The site uses TypeScript, Tailwind CSS v4, and Framer Motion for animations.

## Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Build & Production
npm run build        # Build production bundle
npm start            # Start production server

# Linting & Type Checking
npm run lint         # Run ESLint
# No test framework configured - add vitest/jest before implementing tests
```

## Code Style Guidelines

### Imports
- External imports first (React, Next.js, libraries)
- Component imports second (using @/ alias)
- Type imports with `import type { }` when possible
- Group related imports together
- No `export { }` from external libraries

```typescript
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Header from "@/components/Header";
```

### Components
- Use `"use client"` directive for components with hooks or event handlers
- Default export functions: `export default function ComponentName()`
- PascalCase for component names
- Client components in `components/`, server components in `app/`
- Props interface inline with component definition

```typescript
export default function Component({ prop }: Readonly<{ prop: string }>) {
  // component body
}
```

### TypeScript
- Strict mode enabled in tsconfig.json
- Use `Readonly<>` for props to prevent mutation
- Type parameters on the right side: `const value: Type = initial`
- Avoid `any` - use proper types or `unknown`
- Use `import type` for type-only imports
- Path alias `@/*` resolves to root directory

### Naming Conventions
- **Components**: PascalCase (`Header.tsx`, `WhatsAppButton.tsx`)
- **Functions/Variables**: camelCase (`handleClick`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE only for truly global constants
- **CSS classes**: kebab-case for custom classes in globals.css
- **Files**: PascalCase for components, lowercase for utilities

### Styling
- Tailwind utility classes preferred over custom CSS
- Custom CSS in globals.css only for complex effects (gradients, animations, glass morphism)
- Inline styles for dynamic values (animations, gradients)
- Use CSS variables from globals.css: `var(--navy-deep)`, `var(--gold-400)`
- Custom utility classes: `.text-gradient`, `.glass-dark`, `.bg-gradient-navy`
- Responsive design with `sm:`, `md:`, `lg:` prefixes

### State Management
- React hooks: `useState`, `useEffect`, `useRef`
- Boolean state: `isOpen`, `isLoading`, `hasError`
- Arrays: pluralize names (`items`, `navLinks`)
- Objects: descriptive names (`formData`, `activeSection`)
- Destructure state values when needed

### Event Handlers
- Prefix with `handle`: `handleClick`, `handleSubmit`, `handleScroll`
- Arrow functions for inline handlers
- Cleanup event listeners in useEffect returns
- Use `{ passive: true }` for scroll listeners

```typescript
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### Animations (Framer Motion)
- Import specific motion components: `motion`, `AnimatePresence`
- Animate on mount with `initial`, `animate`, `transition`
- Use `layoutId` for shared layout animations
- Hover effects: `whileHover`, `whileTap`
- Stagger animations with `transition={{ delay: i * 0.1 }}`
- Prefer spring animations for natural feel

### JSX/TSX
- Self-closing tags for empty elements
- Consistent indentation (4 spaces, no tabs)
- Fragments (`<>...</>`) for wrapping multiple elements
- Accessibility: include `aria-label`, `aria-label` for interactive elements
- No comments in code (keep it self-documenting)
- Logical grouping with blank lines

### File Structure
```
app/
  layout.tsx       # Root layout with fonts and metadata
  page.tsx         # Home page
  globals.css      # Tailwind directives and custom styles
components/
  Header.tsx       # Navigation
  Hero.tsx         # Landing section
  Footer.tsx       # Site footer
  [Component].tsx  # Feature components
```

### Error Handling
- Validate inputs at component boundaries
- Use TypeScript for compile-time validation
- Provide fallbacks for optional data
- Handle async operations gracefully
- No error boundary implemented - add if needed

### SEO & Metadata
- Export `metadata` const from app/layout.tsx
- Include title, description, keywords, openGraph, twitter
- Add Schema.org via SchemaOrg component
- Use semantic HTML: `<section>`, `<nav>`, `<main>`, `<footer>`
- Include `alt` text for images

### Performance
- Use `next/image` for images (not currently used)
- Lazy load heavy components with `React.lazy()` if needed
- Optimize animations - prefer CSS transforms
- Avoid inline functions in render when possible
- Use `useCallback` for event handlers passed to children

### Accessibility
- Semantic HTML elements
- Keyboard navigation support
- Screen reader labels
- Focus states for interactive elements
- ARIA attributes where needed
- Reduced motion support via `@media (prefers-reduced-motion)`

## Common Patterns

### Client Component with State
```typescript
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Component() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div animate={{ opacity: 1 }}>
      {/* content */}
    </motion.div>
  );
}
```

### Data Array with Map
```typescript
const items = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

{items.map((item) => (
  <a key={item.href} href={item.href}>{item.label}</a>
))}
```

### Conditional Rendering
```typescript
{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
<AnimatePresence>
  {isOpen && <Modal />}
</AnimatePresence>
```

## Notes

- No test framework currently configured - add before implementing tests
- No API routes - static site
- No database - content hardcoded in components
- Uses Lucide React for all icons
- Custom CSS variables defined in globals.css for consistent theming
- Glass morphism and gradient effects are key design elements

<!-- OMX:RUNTIME:START -->
<session_context>
**Session:** omx-1772652633144-xg2jr6 | 2026-03-04T19:30:33.774Z

**Codebase Map:**
  app/: layout, page
  components/: About, Footer, Header, Hero, LeadMagnet, Resources, SchemaOrg, Services, Speaking, Testimonials
  lib/: utils
  (root): eslint.config, next.config, postcss.config

**Compaction Protocol:**
Before context compaction, preserve critical state:
1. Write progress checkpoint via state_write MCP tool
2. Save key decisions to notepad via notepad_write_working
3. If context is >80% full, proactively checkpoint state
</session_context>
<!-- OMX:RUNTIME:END -->
