import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    if (!supabase) {
        return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    const { slug } = await params;

    if (!slug) {
        return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    try {
        const { data: post, error } = await supabase
            .from("blog_posts")
            .select("*")
            .eq("slug", slug)
            .eq("status", "published")
            .maybeSingle();

        if (error) {
            return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
        }

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json({ post });
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
    }
}
