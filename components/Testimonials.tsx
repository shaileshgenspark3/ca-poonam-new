"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
    {
        name: "Rajesh Mehta",
        designation: "CEO, Mehta Exports Pvt. Ltd.",
        rating: 5,
        text: "CA Poonam's expertise in GST and corporate compliance has been invaluable to our business. Her proactive approach to tax planning saved us substantial amounts. Highly recommend for any serious business owner.",
        location: "Mumbai",
        initials: "RM",
        color: "from-blue-500 to-blue-700",
    },
    {
        name: "Priya Sharma",
        designation: "NRI – Software Engineer, USA",
        rating: 5,
        text: "As an NRI, dealing with Indian taxation was always complex and stressful. CA Poonam simplified everything — DTAA benefits, FEMA compliance, and investment planning. Outstanding service and deep expertise.",
        location: "California, USA",
        initials: "PS",
        color: "from-amber-500 to-amber-700",
    },
    {
        name: "Aditya Kulkarni",
        designation: "Founder, TechStart Innovations",
        rating: 5,
        text: "Her Fractional CFO service transformed how we handle our finances. From investor due diligence to board presentations, she brings a level of professionalism that's rare. A true strategic partner.",
        location: "Pune",
        initials: "AK",
        color: "from-emerald-500 to-emerald-700",
    },
    {
        name: "Sunita Nair",
        designation: "HR Director, Fintech Corp",
        rating: 5,
        text: "We engaged CA Poonam for POSH compliance implementation. Her workshop and policy drafting was exceptional — thorough, empathetic, and legally watertight. Our team felt truly empowered.",
        location: "Navi Mumbai",
        initials: "SN",
        color: "from-rose-500 to-rose-700",
    },
    {
        name: "Vikram Patel",
        designation: "Managing Director, Patel Industries",
        rating: 5,
        text: "Professional, knowledgeable, and always available. CA Poonam guided us through a complex company restructuring with remarkable expertise. Will continue to rely on her services for all compliance matters.",
        location: "Kharghar",
        initials: "VP",
        color: "from-purple-500 to-purple-700",
    },
    {
        name: "Ananya Desai",
        designation: "Doctor & Entrepreneur",
        rating: 5,
        text: "I was so confused about tax planning for my clinic versus personal investments. She structured everything brilliantly. The personal attention she gives to each client is what sets her apart.",
        location: "Belapur",
        initials: "AD",
        color: "from-cyan-500 to-cyan-700",
    },
];

function TestimonialCard({ review, index }: { review: typeof reviews[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative p-8 bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-full md:w-[calc(50% - 12px)] lg:w-[calc(33.333% - 16px)]"
        >
            {/* Gradient Border on Hover */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${review.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Quote Icon */}
            <div className="absolute top-6 right-6">
                <Quote className={`w-10 h-10 bg-gradient-to-br ${review.color} bg-clip-text text-transparent opacity-20`} fill="currentColor" />
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                    >
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    </motion.div>
                ))}
            </div>

            {/* Review Text */}
            <p className="text-slate-600 leading-relaxed mb-8 line-clamp-5">
                {review.text}
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {review.initials}
                </div>
                
                {/* Details */}
                <div className="flex-1">
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.designation}</p>
                </div>
            </div>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                {review.location}
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const visibleCount = 3;
    const maxIndex = reviews.length - visibleCount;

    const prev = () => setCurrent((c) => Math.max(0, c - 1));
    const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

    return (
        <section id="testimonials" className="py-28 bg-gradient-mesh overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
                    >
                        <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                        <span className="text-sm font-bold tracking-widest uppercase text-gold-600">
                            Client Testimonials
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-black text-slate-900 mb-4"
                    >
                        Trusted by <span className="text-gradient">500+ Clients</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Don't just take our word for it. Here's what our clients say about working with CA Poonam Pathak.
                    </motion.p>
                </div>

                {/* Rating Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-6 mb-12"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-6 h-6 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <span className="text-4xl font-black text-slate-900">4.8</span>
                    </div>
                    <div className="h-12 w-px bg-slate-200" />
                    <div className="text-left">
                        <p className="text-sm font-bold text-slate-900">Based on 50+ reviews</p>
                        <p className="text-xs text-slate-500">Across Google & LinkedIn</p>
                    </div>
                </motion.div>

                {/* Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-3">
                        <motion.button
                            onClick={prev}
                            disabled={current === 0}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-gold-500 hover:bg-gold-500 hover:text-white transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            onClick={next}
                            disabled={current === maxIndex}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-gold-500 hover:bg-gold-500 hover:text-white transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>

                    <a
                        href="https://g.co/kgs/6mTpUkf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    >
                        Read all reviews on Google
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.slice(0, visibleCount).map((review, i) => (
                        <TestimonialCard key={review.name} review={review} index={i} />
                    ))}
                </div>

                {/* Google CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center sm:hidden"
                >
                    <motion.a
                        href="https://g.co/kgs/6mTpUkf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-slate-200 text-sm font-bold text-slate-700 hover:border-gold-500 hover:text-gold-600 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Read All Reviews on Google
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
