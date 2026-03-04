# Blog Setup Guide

The blog works in two modes:

- Fallback mode (no Supabase config): the API serves built-in sample posts.
- Supabase mode: the API reads published posts from your Supabase database.

## 1) Configure environment variables

Copy `.env.local.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
ADMIN_PASSWORD=change_this_to_a_strong_password
```

## 2) Create database schema in Supabase

1. Open Supabase Dashboard → SQL Editor.
2. Run the SQL file:

```text
supabase/migrations/20260305000000_create_blog_tables.sql
```

This creates:

- `public.blog_posts`
- `public.blog_categories`
- indexes for listing/search support
- `updated_at` trigger
- RLS policies allowing public read access for published blog posts

## 3) Verify API endpoints

After running the migration and setting env vars, restart the app and verify:

- `GET /api/blog/posts`
- `GET /api/blog/<slug>`

## Notes

- If Supabase is unavailable or env vars are missing, blog APIs automatically fall back to local sample data.
- The fallback mode avoids `503 Database not configured` errors.
