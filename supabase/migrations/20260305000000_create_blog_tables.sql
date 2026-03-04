create extension if not exists "pgcrypto";

create table if not exists public.blog_categories (
    id uuid primary key default gen_random_uuid(),
    name text not null unique,
    slug text not null unique,
    description text,
    created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.blog_posts (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    slug text not null unique,
    content text not null,
    excerpt text,
    featured_image text,
    author text not null default 'CA Poonam Pathak',
    author_email text not null default 'connect@capoonampathak.com',
    published_at timestamptz,
    updated_at timestamptz not null default timezone('utc', now()),
    status text not null default 'draft' check (status in ('draft', 'published')),
    category text,
    tags text[] not null default '{}',
    meta_data jsonb,
    read_time integer not null default 1,
    created_at timestamptz not null default timezone('utc', now())
);

create index if not exists blog_posts_status_published_at_idx
    on public.blog_posts (status, published_at desc);

create index if not exists blog_posts_category_idx
    on public.blog_posts (category);

create index if not exists blog_posts_created_at_idx
    on public.blog_posts (created_at desc);

create index if not exists blog_posts_tags_gin_idx
    on public.blog_posts using gin (tags);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = timezone('utc', now());
    return new;
end;
$$;

drop trigger if exists trg_blog_posts_set_updated_at on public.blog_posts;

create trigger trg_blog_posts_set_updated_at
before update on public.blog_posts
for each row
execute function public.set_updated_at();

alter table public.blog_posts enable row level security;
alter table public.blog_categories enable row level security;

drop policy if exists "Published posts are viewable by everyone" on public.blog_posts;
create policy "Published posts are viewable by everyone"
    on public.blog_posts
    for select
    using (status = 'published');

drop policy if exists "Published categories are viewable by everyone" on public.blog_categories;
create policy "Published categories are viewable by everyone"
    on public.blog_categories
    for select
    using (true);

insert into public.blog_posts (
    title,
    slug,
    content,
    excerpt,
    featured_image,
    status,
    category,
    tags,
    meta_data,
    published_at,
    read_time
)
values
(
    'Income Tax Planning Checklist for FY 2025-26',
    'income-tax-planning-checklist-fy-2025-26',
    '<h2>Why early tax planning matters</h2><p>Tax planning works best when done proactively. Waiting until the last month often leads to missed deductions and poor documentation.</p>',
    'A practical checklist for salaried professionals and business owners to optimize tax planning before year-end.',
    '/images/headshot.png',
    'published',
    'Taxation',
    array['Income Tax', 'Tax Planning', 'Compliance'],
    '{"title":"Income Tax Planning Checklist for FY 2025-26","description":"Step-by-step tax planning checklist by CA Poonam Pathak for FY 2025-26.","keywords":["income tax planning","fy 2025-26","tax checklist"]}'::jsonb,
    timezone('utc', now()),
    4
)
on conflict (slug) do nothing;
