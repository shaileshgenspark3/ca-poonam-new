# QWEN.md - Project Context

## Project Overview

**CA Poonam Pathak** is a complete professional portfolio and business website built with **Next.js 16** for Chartered Accountant Poonam Pathak. The site showcases professional services, credentials, speaking engagements, and provides contact/consultation booking capabilities with lead generation features.

### Key Technologies

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4 with custom CSS layers
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Fonts:** Next.js Font Optimization (Inter, Montserrat, Playfair Display)
- **Linting:** ESLint 9 with Next.js configs

### Architecture

The project follows the **Next.js App Router** structure:

```
ca-poonam/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO metadata & fonts
│   ├── page.tsx            # Home page (assembles components)
│   └── globals.css         # Global styles with Tailwind
├── components/             # Reusable UI components
│   ├── Header.tsx          # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Animated hero with CTA and stats
│   ├── TrustBanner.tsx     # Credential ticker animation
│   ├── About.tsx           # Professional background section
│   ├── Services.tsx        # Service offerings with hover effects
│   ├── Speaking.tsx        # Speaking engagements showcase
│   ├── Resources.tsx       # Compliance deadlines & tools hub
│   ├── Testimonials.tsx    # Client reviews carousel
│   ├── LeadMagnet.tsx      # Free guide download form
│   ├── Footer.tsx          # Contact form, links, map
│   ├── WhatsAppButton.tsx  # Floating WhatsApp chat widget
│   └── SchemaOrg.tsx       # Structured data for SEO
└── public/                 # Static assets
```

### Design System

- **Color Palette:**
  - Navy: `#0a1628`, `#0f2044`, `#122454`
  - Gold: `#c9a84c`, `#e4c06e`, `#a8842a`
  - Cream: `#fafaf8`
  - Slate: `#4a5568`, `#718096`

- **Typography:**
  - Body: Inter (Google Fonts via `next/font`)
  - Headings: Montserrat (Google Fonts via `next/font`)
  - Accents: Playfair Display (Google Fonts via `next/font`)

- **Visual Style:** Professional, premium aesthetic with:
  - Gold shimmer effects
  - Glass morphism cards
  - Smooth scroll animations
  - Gradient backgrounds
  - Custom ticker animations

## Building and Running

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build    # Build for production
npm run start    # Start production server
```

### Linting

```bash
npm run lint     # Run ESLint
```

## Development Conventions

### Code Style

- **TypeScript:** Strict mode enabled with isolated modules
- **Component Pattern:** Functional components with TypeScript
- **Styling:** Tailwind CSS with custom utility classes in `globals.css`
- **Animations:** Framer Motion (`motion` components, `AnimatePresence`)
- **Client Components:** All interactive components use `"use client"` directive

### File Naming

- Components: PascalCase (e.g., `Header.tsx`, `Hero.tsx`)
- Configuration: lowercase with extensions (e.g., `next.config.ts`, `tsconfig.json`)

### Path Aliases

- `@/*` maps to the project root (configured in `tsconfig.json`)
- Use `@/components/ComponentName` for component imports

### Component Structure

```tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconName } from "lucide-react";

export default function ComponentName() {
    // Component logic here
    return (
        <section id="section-id" className="py-28 bg-white">
            {/* Section content */}
        </section>
    );
}
```

### SEO & Metadata

The `app/layout.tsx` contains comprehensive metadata:
- Open Graph tags for social sharing
- Twitter card configuration
- Schema.org structured data via `SchemaOrg` component
- Robot indexing directives
- Optimized Google Fonts loading

### Key Sections

The home page (`app/page.tsx`) assembles these sections in order:
1. **Header** - Fixed navigation with mobile menu, active section highlighting
2. **Hero** - Animated introduction with credentials, CTAs, stats
3. **TrustBanner** - Infinite scrolling credential ticker
4. **About** - Professional background with staggered animations
5. **Services** - 11 service cards in 3 categories with hover effects
6. **Speaking** - Josh Talks video placeholder, engagement cards
7. **Resources** - Compliance deadline ticker, financial tools, client portal
8. **Testimonials** - 6 review carousel with navigation
9. **LeadMagnet** - Guide selector with email capture form
10. **Footer** - Contact form, social links, Google Maps embed
11. **WhatsAppButton** - Floating chat widget with popup

### Special Features

- **Smooth Scroll:** `scroll-smooth` on HTML for anchor navigation
- **Active Section Tracking:** Header highlights current section
- **Form Handling:** Contact and lead magnet forms with loading states
- **Responsive Design:** Mobile-first with lg: breakpoints
- **Accessibility:** ARIA labels, semantic HTML, keyboard navigation
- **Performance:** Static generation, optimized fonts, lazy loading

## Deployment

The project is optimized for deployment on **Vercel**. The build generates static pages that can be served via Next.js server or exported.

### Environment Variables

No environment variables are currently required. For production:
- Consider adding API endpoints for form submissions
- Configure WhatsApp number in `WhatsAppButton.tsx`
- Update Google Maps embed URL in `Footer.tsx`

## Current Status

✅ **Complete and Production-Ready**
- All 11 sections implemented
- Lint-free codebase
- Successful production build
- Responsive design tested
- SEO optimized with structured data
