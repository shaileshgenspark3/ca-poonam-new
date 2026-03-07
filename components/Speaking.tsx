"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Play, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const YOUTUBE_VIDEO_ID = "Vr67olnhfSk";

const engagements = [
    {
        event: "Josh Talks",
        topic: "Financial Empowerment for Every Indian",
        type: "National Platform",
        desc: "Featured speaker at India's premier motivational and educational platform, reaching millions of young professionals.",
        highlight: true,
        color: "from-red-500 to-red-700",
    },
    {
        event: "Direct Tax Committee – ICAI",
        topic: "NRI Taxation & DTAA Nuances",
        type: "Professional Body",
        desc: "Active contributor and session speaker for ICAI's Direct Tax Committee, shaping professional discourse on taxation.",
        highlight: false,
        color: "from-blue-500 to-blue-700",
    },
    {
        event: "WIRC of ICAI Events",
        topic: "Women Leadership in Finance",
        type: "Industry Conference",
        desc: "Keynote and panel discussions at WIRC events, championing diversity and women's leadership in the CA profession.",
        highlight: false,
        color: "from-purple-500 to-purple-700",
    },
    {
        event: "Corporate POSH Workshops",
        topic: "Building Safe Workplaces",
        type: "Corporate Training",
        desc: "Conducting board-level and HR workshops on POSH Act implementation, compliance, and cultural transformation.",
        highlight: false,
        color: "from-emerald-500 to-emerald-700",
    },
];

export default function Speaking() {
    const shouldReduceMotion = useReducedMotion();
    const [isVideoActive, setIsVideoActive] = useState(false);

    return (
        <section
            id="speaking"
            className="py-28 overflow-hidden relative bg-gradient-navy"
        >
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />
            
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
                    >
                        <Mic className="w-5 h-5 text-gold-400" />
                        <span className="text-sm font-bold tracking-widest uppercase text-gold-400">
                            Thought Leadership
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-black text-white mb-4"
                    >
                        Speaking & <span className="text-gradient">Media</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-xl mx-auto"
                    >
                        Sharing insights that shape India&apos;s financial and corporate landscape
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left – Video Player */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div
                            className="relative rounded-3xl overflow-hidden group"
                            style={{
                                border: "1px solid rgba(212,175,55,0.3)",
                                boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
                                aspectRatio: "16/9",
                            }}
                        >
                            {isVideoActive ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&showinfo=0&modestbranding=1&autoplay=1`}
                                    className="absolute inset-0 w-full h-full"
                                    title="CA Poonam Pathak - Josh Talks Feature"
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            ) : (
                                <button
                                    onClick={() => setIsVideoActive(true)}
                                    className="absolute inset-0 block text-left"
                                    aria-label="Play featured Josh Talks video"
                                >
                                    <Image
                                        src={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                                        alt="CA Poonam Pathak featured on Josh Talks"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                        loading="lazy"
                                    />
                                    <span className="absolute inset-0 bg-black/35" />
                                    <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                                        <Play className="h-4 w-4 fill-white" />
                                        Play Video
                                    </span>
                                </button>
                            )}

                            {/* Josh Talks Badge */}
                            <div
                                className="absolute top-5 left-5 px-4 py-2 rounded-full text-xs font-bold bg-gradient-gold text-navy-deep shadow-lg z-10"
                            >
                                Josh Talks
                            </div>

                            {!isVideoActive && !shouldReduceMotion && (
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 px-8">
                                    <a
                                        href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto max-w-xs"
                                    >
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="bg-white/10 backdrop-blur-sm border-gold-500/50 hover:border-gold-500 hover:bg-gold-500/20 w-full"
                                        >
                                            <Play className="ml-1 w-5 h-5" />
                                            Watch on YouTube
                                        </Button>
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Invite CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    variant="default"
                                    size="xl"
                                    className="w-full"
                                >
                                    Invite CA Poonam to Speak
                                </Button>
                            </motion.a>
                            <p className="text-white/50 text-sm text-center mt-2">
                                Conferences, workshops, corporate events
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right – Engagement Cards */}
                    <div className="space-y-4">
                        {engagements.map((eng, i) => (
                            <motion.div
                                key={eng.event}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ x: 5 }}
                                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                                    eng.highlight
                                        ? "bg-gradient-to-br from-gold-500/20 to-gold-500/5 border-2 border-gold-500/30"
                                        : "bg-white/5 border border-white/10 hover:border-gold-500/30"
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                            eng.highlight
                                                ? "bg-gradient-gold"
                                                : "bg-white/10"
                                        }`}
                                    >
                                        <Mic className={`w-5 h-5 ${eng.highlight ? "text-navy-deep" : "text-gold-400"}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap mb-2">
                                            <p className="text-white font-bold">{eng.event}</p>
                                            <span
                                                className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                                    eng.highlight
                                                        ? "bg-gold-500/20 text-gold-400"
                                                        : "bg-white/10 text-white/50"
                                                }`}
                                            >
                                                {eng.type}
                                            </span>
                                        </div>
                                        <p className="text-gold-400 text-sm font-medium mb-2">&quot;{eng.topic}&quot;</p>
                                        <p className="text-white/50 text-sm leading-relaxed">{eng.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
