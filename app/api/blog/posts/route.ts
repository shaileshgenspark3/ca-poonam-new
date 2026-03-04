import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    if (!supabase) {
        return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");
        const search = searchParams.get("search");
        const status = searchParams.get("status") || "published";

        const rawPage = Number.parseInt(searchParams.get("page") || "1", 10);
        const rawLimit = Number.parseInt(searchParams.get("limit") || "10", 10);

        const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
        const limit = Number.isNaN(rawLimit) ? 10 : Math.min(Math.max(rawLimit, 1), 50);

        let query = supabase
            .from("blog_posts")
            .select("*")
            .order("published_at", { ascending: false, nullsFirst: true })
            .eq("status", status);

        if (category) {
            query = query.eq("category", category);
        }

        if (search) {
            query = query.ilike("title", `%${search}%`);
        }

        const from = (page - 1) * limit;
        const to = from + limit - 1;

        const { data: posts, error } = await query.range(from, to);

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        const safePosts = posts ?? [];

        return NextResponse.json({
            posts: safePosts,
            pagination: {
                page,
                limit,
                hasMore: safePosts.length === limit,
            },
        });
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}
