"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    featured_image: string | null;
    author: string;
    published_at: string | null;
    updated_at: string | null;
    status: string;
    category: string | null;
    tags: string[] | null;
    created_at: string;
}

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [error, setError] = useState("");

    const categories = [
        { id: "", name: "All Posts" },
        { id: "Taxation", name: "Taxation" },
        { id: "Audit & Assurance", name: "Audit & Assurance" },
        { id: "Corporate Advisory", name: "Corporate Advisory" },
        { id: "NRI Services", name: "NRI Services" },
        { id: "GST Compliance", name: "GST Compliance" },
        { id: "POSH Compliance", name: "POSH Compliance" },
        { id: "Financial Planning", name: "Financial Planning" },
    ];

    const fetchPosts = useCallback(
        async (requestedPage: number, append: boolean) => {
            if (!append) {
                setLoading(true);
            }

            try {
                const params = new URLSearchParams();
                if (selectedCategory) {
                    params.set("category", selectedCategory);
                }
                if (searchQuery) {
                    params.set("search", searchQuery);
                }
                params.set("page", String(requestedPage));
                params.set("limit", "9");

                const response = await fetch(`/api/blog/posts?${params.toString()}`);
                if (!response.ok) {
                    const responseData = await response.json().catch(() => ({}));
                    const message =
                        typeof responseData.error === "string"
                            ? responseData.error
                            : "Failed to fetch posts";
                    throw new Error(message);
                }

                const data = await response.json();
                const fetchedPosts = Array.isArray(data.posts) ? data.posts : [];

                setPosts((prev) => (append ? [...prev, ...fetchedPosts] : fetchedPosts));
                setHasMore(Boolean(data.pagination?.hasMore));
                setError("");
            } catch (fetchError) {
                const message =
                    fetchError instanceof Error ? fetchError.message : "Failed to fetch posts";
                setError(message);
                if (!append) {
                    setPosts([]);
                }
                setHasMore(false);
            } finally {
                if (!append) {
                    setLoading(false);
                }
            }
        },
        [searchQuery, selectedCategory]
    );

    useEffect(() => {
        setPage(1);
        void fetchPosts(1, false);
    }, [fetchPosts]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    const getReadTime = (content: string) => {
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        const readMinutes = Math.ceil(wordCount / wordsPerMinute);
        if (readMinutes < 1) {
            return "< 1 min read";
        }
        return `~${readMinutes} min read`;
    };

    const handleLoadMore = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        await fetchPosts(nextPage, true);
    };

    return (
        <section id="blog" className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-black text-slate-900 sm:text-5xl">
                        Insights & <span className="text-gradient">Updates</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        Stay informed with expert insights on taxation, audit, compliance, and
                        financial planning
                    </p>
                </div>

                <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                    placeholder="Search blog posts..."
                                    className="w-full rounded-xl border-2 border-slate-300 py-3 pr-4 pl-10 focus:ring-2 focus:ring-gold-400 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 md:mt-0">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                                    selectedCategory === cat.id
                                        ? "bg-gradient-gold text-white shadow-lg"
                                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold-400 border-t-transparent" />
                    </div>
                ) : posts.length === 0 ? (
                    <div className="py-12 text-center">
                        <p className="mb-4 text-lg text-slate-500">
                            {error || "No blog posts found"}
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            onClick={() => {
                                setSelectedCategory("");
                                setSearchQuery("");
                            }}
                        >
                            Clear Filters
                        </Button>
                    </div>
                ) : (
                    <>
                        {error && (
                            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                                {error}
                            </div>
                        )}

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <article
                                    key={post.id}
                                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                                >
                                    {post.featured_image && (
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="relative block aspect-video overflow-hidden bg-slate-100 sm:aspect-[3/2]"
                                        >
                                            <Image
                                                src={post.featured_image}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <span
                                                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                                                        post.status === "published"
                                                            ? "bg-green-500 text-white"
                                                            : "bg-yellow-500 text-white"
                                                    }`}
                                                >
                                                    {post.status}
                                                </span>
                                            </div>
                                        </Link>
                                    )}

                                    <div className="p-6">
                                        {post.category && (
                                            <div className="mb-4 inline-flex items-center gap-2">
                                                <Tag className="h-4 w-4 text-gold-600" />
                                                <span className="rounded-full bg-gold-500/10 px-3 py-1.5 text-xs font-semibold text-gold-600">
                                                    {post.category}
                                                </span>
                                            </div>
                                        )}

                                        <h2 className="mb-3 text-xl leading-tight font-bold text-slate-900 transition-colors group-hover:text-gold-600">
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h2>

                                        {post.excerpt && (
                                            <p className="mb-4 line-clamp-3 text-slate-600">
                                                {post.excerpt}
                                            </p>
                                        )}

                                        <div className="mb-4 flex items-center gap-4 text-sm text-slate-500">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{formatDate(post.published_at || post.created_at)}</span>
                                            </div>
                                            {post.content && (
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{getReadTime(post.content)}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
                                            <span>By {post.author}</span>
                                        </div>

                                        {post.tags && post.tags.length > 0 && (
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <Button variant="default" size="lg" className="w-full" asChild>
                                            <Link href={`/blog/${post.slug}`}>
                                                Read Article
                                                <Calendar className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                )}

                {!loading && posts.length > 0 && hasMore && (
                    <div className="mt-12 text-center">
                        <Button variant="outline" size="lg" onClick={handleLoadMore}>
                            Load More Posts
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
