import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  author: string;
  author_email: string;
  published_at: string | null;
  updated_at: string | null;
  status: 'draft' | 'published';
  category: string | null;
  tags: string[] | null;
  meta_data: {
    title: string;
    description: string;
    keywords: string[];
  } | null;
  created_at: string;
};

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
};

export type BlogPostFormData = {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: File | null;
  author: string;
  category: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  status: 'draft' | 'published';
  read_time: number;
};
