import { supabase } from "@/lib/supabase";

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
    status: "draft" | "published";
    category: string | null;
    tags: string[] | null;
    meta_data: {
        title: string;
        description: string;
        keywords: string[];
    } | null;
    read_time: number;
    created_at: string;
};

export type BlogPostsQuery = {
    category?: string | null;
    search?: string | null;
    status?: "draft" | "published";
    page?: number;
    limit?: number;
};

export type BlogPostsResult = {
    posts: BlogPost[];
    pagination: {
        page: number;
        limit: number;
        hasMore: boolean;
    };
    source: "supabase" | "fallback";
};

const FALLBACK_BLOG_POSTS: BlogPost[] = [
    {
        id: "fallback-1",
        title: "Income Tax Planning Checklist for FY 2025-26",
        slug: "income-tax-planning-checklist-fy-2025-26",
        excerpt:
            "A practical checklist for salaried professionals and business owners to optimize tax planning before year-end.",
        content:
            "<h2>Why early tax planning matters</h2><p>Tax planning works best when done proactively. Waiting until the last month often leads to missed deductions and poor documentation.</p><h2>Checklist for this financial year</h2><ul><li>Review salary structure and exemptions.</li><li>Track Section 80C, 80D, and eligible deductions.</li><li>Plan advance tax payments for non-salary income.</li><li>Maintain invoice-level records for professional expenses.</li><li>Reconcile AIS and Form 26AS before filing.</li></ul><p>If you need help structuring your plan, book a consultation and we can create a personalized tax roadmap.</p>",
        featured_image: "/images/headshot.png",
        author: "CA Poonam Pathak",
        author_email: "connect@capoonampathak.com",
        published_at: "2026-02-15T10:00:00.000Z",
        updated_at: "2026-02-15T10:00:00.000Z",
        status: "published",
        category: "Taxation",
        tags: ["Income Tax", "Tax Planning", "Compliance"],
        meta_data: {
            title: "Income Tax Planning Checklist for FY 2025-26",
            description:
                "Step-by-step tax planning checklist by CA Poonam Pathak for FY 2025-26.",
            keywords: ["income tax planning", "fy 2025-26", "tax checklist"],
        },
        read_time: 4,
        created_at: "2026-02-15T10:00:00.000Z",
    },
    {
        id: "fallback-2",
        title: "GST Compliance Calendar for Growing Businesses",
        slug: "gst-compliance-calendar-growing-businesses",
        excerpt:
            "Avoid penalties with a clean monthly and quarterly GST filing calendar for startups and SMEs.",
        content:
            "<h2>Build a monthly GST rhythm</h2><p>Consistent reconciliation and filing controls reduce notices, interest, and late fees.</p><h2>Core monthly controls</h2><ul><li>Reconcile GSTR-2B with purchase register.</li><li>Validate outward supplies before GSTR-1 submission.</li><li>Track reverse charge entries correctly.</li><li>Review e-invoice and e-way bill exceptions.</li><li>File GSTR-3B with approved working papers.</li></ul><p>Set up a shared compliance calendar with reminders for finance and operations teams.</p>",
        featured_image: "/images/headshot.png",
        author: "CA Poonam Pathak",
        author_email: "connect@capoonampathak.com",
        published_at: "2026-01-28T09:00:00.000Z",
        updated_at: "2026-01-28T09:00:00.000Z",
        status: "published",
        category: "GST Compliance",
        tags: ["GST", "SME", "Compliance Calendar"],
        meta_data: {
            title: "GST Compliance Calendar for Growing Businesses",
            description:
                "A practical GST compliance schedule for startups and growing businesses.",
            keywords: ["gst compliance", "gstr-1", "gstr-3b"],
        },
        read_time: 3,
        created_at: "2026-01-28T09:00:00.000Z",
    },
    {
        id: "fallback-3",
        title: "Statutory Audit Readiness: 10-Point Pre-Audit Review",
        slug: "statutory-audit-readiness-pre-audit-review",
        excerpt:
            "Prepare your books, controls, and documentation before statutory audit to reduce cycle time and audit queries.",
        content:
            "<h2>Pre-audit readiness saves time</h2><p>Most audit delays happen because supporting schedules and reconciliations are incomplete.</p><h2>Pre-audit review points</h2><ul><li>Close trial balance with mapped ledgers.</li><li>Finalize fixed asset register and depreciation workings.</li><li>Reconcile receivables, payables, and bank balances.</li><li>Document related party transactions.</li><li>Prepare management representation drafts.</li></ul><p>A structured pre-audit pack improves audit quality and shortens closure timelines.</p>",
        featured_image: "/images/headshot.png",
        author: "CA Poonam Pathak",
        author_email: "connect@capoonampathak.com",
        published_at: "2026-01-10T11:30:00.000Z",
        updated_at: "2026-01-10T11:30:00.000Z",
        status: "published",
        category: "Audit & Assurance",
        tags: ["Audit", "Financial Reporting", "Controls"],
        meta_data: {
            title: "Statutory Audit Readiness: 10-Point Pre-Audit Review",
            description:
                "A 10-point readiness framework for a smoother statutory audit cycle.",
            keywords: ["statutory audit", "audit readiness", "pre-audit"],
        },
        read_time: 4,
        created_at: "2026-01-10T11:30:00.000Z",
    },
];

function normalizePage(rawPage: number | undefined): number {
    if (!rawPage || Number.isNaN(rawPage) || rawPage < 1) {
        return 1;
    }

    return rawPage;
}

function normalizeLimit(rawLimit: number | undefined): number {
    if (!rawLimit || Number.isNaN(rawLimit)) {
        return 10;
    }

    return Math.min(Math.max(rawLimit, 1), 50);
}

function applyLocalFilters(posts: BlogPost[], query: BlogPostsQuery): BlogPostsResult {
    const page = normalizePage(query.page);
    const limit = normalizeLimit(query.limit);
    const status = query.status ?? "published";

    const normalizedSearch = query.search?.trim().toLowerCase() ?? "";

    const filteredPosts = posts
        .filter((post) => post.status === status)
        .filter((post) => (query.category ? post.category === query.category : true))
        .filter((post) => {
            if (!normalizedSearch) {
                return true;
            }

            const haystack = [
                post.title,
                post.excerpt ?? "",
                post.content,
                post.category ?? "",
                ...(post.tags ?? []),
            ]
                .join(" ")
                .toLowerCase();

            return haystack.includes(normalizedSearch);
        })
        .sort((a, b) => {
            const left = new Date(a.published_at ?? a.created_at).getTime();
            const right = new Date(b.published_at ?? b.created_at).getTime();
            return right - left;
        });

    const from = (page - 1) * limit;
    const to = from + limit;

    return {
        posts: filteredPosts.slice(from, to),
        pagination: {
            page,
            limit,
            hasMore: filteredPosts.length > to,
        },
        source: "fallback",
    };
}

export async function getBlogPosts(query: BlogPostsQuery): Promise<BlogPostsResult> {
    const page = normalizePage(query.page);
    const limit = normalizeLimit(query.limit);
    const status = query.status ?? "published";

    if (!supabase) {
        return applyLocalFilters(FALLBACK_BLOG_POSTS, { ...query, page, limit, status });
    }

    try {
        let supabaseQuery = supabase
            .from("blog_posts")
            .select("*")
            .eq("status", status)
            .order("published_at", { ascending: false, nullsFirst: false })
            .order("created_at", { ascending: false });

        if (query.category) {
            supabaseQuery = supabaseQuery.eq("category", query.category);
        }

        const normalizedSearch = query.search?.trim();
        if (normalizedSearch) {
            supabaseQuery = supabaseQuery.or(
                `title.ilike.%${normalizedSearch}%,excerpt.ilike.%${normalizedSearch}%,content.ilike.%${normalizedSearch}%`
            );
        }

        const from = (page - 1) * limit;
        const to = from + limit - 1;

        const { data, error } = await supabaseQuery.range(from, to);

        if (error) {
            return applyLocalFilters(FALLBACK_BLOG_POSTS, { ...query, page, limit, status });
        }

        const posts = (data as BlogPost[] | null) ?? [];

        return {
            posts,
            pagination: {
                page,
                limit,
                hasMore: posts.length === limit,
            },
            source: "supabase",
        };
    } catch {
        return applyLocalFilters(FALLBACK_BLOG_POSTS, { ...query, page, limit, status });
    }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    if (!slug) {
        return null;
    }

    if (!supabase) {
        return (
            FALLBACK_BLOG_POSTS.find((post) => post.slug === slug && post.status === "published") ??
            null
        );
    }

    try {
        const { data, error } = await supabase
            .from("blog_posts")
            .select("*")
            .eq("slug", slug)
            .eq("status", "published")
            .maybeSingle();

        if (error) {
            return (
                FALLBACK_BLOG_POSTS.find(
                    (post) => post.slug === slug && post.status === "published"
                ) ?? null
            );
        }

        return (data as BlogPost | null) ?? null;
    } catch {
        return (
            FALLBACK_BLOG_POSTS.find((post) => post.slug === slug && post.status === "published") ??
            null
        );
    }
}
