import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");
        const search = searchParams.get("search");
        const statusParam = searchParams.get("status");
        const status = statusParam === "draft" ? "draft" : "published";

        const rawPage = Number.parseInt(searchParams.get("page") || "1", 10);
        const rawLimit = Number.parseInt(searchParams.get("limit") || "10", 10);

        const result = await getBlogPosts({
            category,
            search,
            status,
            page: rawPage,
            limit: rawLimit,
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}
