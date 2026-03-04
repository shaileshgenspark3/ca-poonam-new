"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";
import {
    ArrowLeft,
    Calendar,
    Clock,
    Facebook,
    Link2,
    Linkedin,
    Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    featured_image: string | null;
    author: string;
    published_at: string | null;
    updated_at: string | null;
    status: string;
    category: string | null;
    tags: string[] | null;
    created_at: string;
}

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPost() {
            if (!slug) {
                return;
            }

            setLoading(true);
            setError("");

            try {
                const response = await fetch(`/api/blog/${slug}`);
                const data = await response.json().catch(() => ({}));

                if (!response.ok) {
                    const message =
                        typeof data.error === "string" ? data.error : "Failed to load blog post";
                    setError(message);
                    setPost(null);
                    return;
                }

                setPost(data.post || null);
            } catch (fetchError) {
                console.error("Failed to fetch post:", fetchError);
                setError("Failed to load blog post");
            } finally {
                setLoading(false);
            }
        }

        void loadPost();
    }, [slug]);

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

    const sanitizedContent = useMemo(() => {
        if (!post?.content) {
            return "";
        }

        return DOMPurify.sanitize(post.content, { USE_PROFILES: { html: true } });
    }, [post?.content]);

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-gold-400 border-t-transparent" />
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="text-center">
                    <p className="mb-4 text-xl text-slate-600">{error || "Blog post not found"}</p>
                    <Button variant="default" size="lg" onClick={() => window.history.back()}>
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Go Back
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-slate-50">
            <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Button variant="ghost" size="lg" onClick={() => window.history.back()}>
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Blog
                    </Button>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500">Insights & Updates</span>
                    </div>
                </div>
            </nav>

            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                {post.featured_image && (
                    <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl shadow-2xl sm:aspect-[16/9]">
                        <Image
                            src={post.featured_image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-6 right-6">
                            <span
                                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                                    post.status === "published"
                                        ? "bg-green-500 text-white"
                                        : "bg-yellow-500 text-white"
                                }`}
                            >
                                {post.status}
                            </span>
                        </div>
                    </div>
                )}

                {post.category && (
                    <div className="mb-4 flex items-center gap-2">
                        <span className="rounded-full bg-gold-500/10 px-4 py-2 text-sm font-semibold text-gold-600">
                            {post.category}
                        </span>
                    </div>
                )}

                <h1 className="mb-4 text-4xl leading-tight font-black text-slate-900 sm:text-5xl">
                    {post.title}
                </h1>

                <div className="mb-6 flex items-center gap-6 text-slate-600">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span>{formatDate(post.published_at || post.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>{getReadTime(post.content)}</span>
                    </div>
                    <span className="ml-auto">By {post.author}</span>
                </div>

                {post.tags && post.tags.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="prose prose prose-lg mb-8 max-w-none text-slate-800">
                    <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
                </div>

                <div className="mb-8 flex items-center gap-4 border-b border-slate-200 pb-8">
                    <span className="text-sm text-slate-500">Share this article:</span>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                if (typeof window !== "undefined") {
                                    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                                    window.open(url, "_blank");
                                }
                            }}
                        >
                            <Facebook className="h-5 w-5" />
                            Share
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                if (typeof window !== "undefined") {
                                    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
                                    window.open(url, "_blank");
                                }
                            }}
                        >
                            <Twitter className="h-5 w-5" />
                            Tweet
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                if (typeof window !== "undefined") {
                                    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
                                    window.open(url, "_blank");
                                }
                            }}
                        >
                            <Linkedin className="h-5 w-5" />
                            Share
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                if (typeof window !== "undefined") {
                                    navigator.clipboard.writeText(shareUrl);
                                }
                            }}
                        >
                            <Link2 className="h-5 w-5" />
                            Copy Link
                        </Button>
                    </div>
                </div>

                <div className="pb-12 text-center">
                    <Button
                        variant="outline"
                        size="xl"
                        onClick={() => {
                            window.location.href = "/blog";
                        }}
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to All Posts
                    </Button>
                </div>
            </div>
        </article>
    );
}
