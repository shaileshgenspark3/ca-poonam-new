# CA Poonam Pathak Website

Next.js 16 + React 19 marketing website for CA Poonam Pathak.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Blog

The blog is available at `/blog` and has two runtime modes:

- Fallback mode (default): serves local sample posts if Supabase is not configured.
- Supabase mode: serves posts from `public.blog_posts`.

For full Supabase setup, follow:

- `BLOG-SETUP.md`
- `supabase/migrations/20260305000000_create_blog_tables.sql`

## Environment

Copy `.env.local.example` to `.env.local` and set required values.
