"use client";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, MapPin } from "lucide-react";

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

function ReviewAvatar({ initials, color }: Readonly<{ initials: string; color: string }>) {
    return (
        <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${color} text-lg font-bold text-white shadow-strong`}>
            {initials}
        </div>
    );
}

export default function Testimonials() {
    const shouldReduceMotion = useReducedMotion();
    const [current, setCurrent] = useState(0);
    const [isTouchLayout, setIsTouchLayout] = useState(false);

    const featured = reviews[current];
    const related = reviews.filter((_, index) => index !== current).slice(0, 3);

    const handlePrev = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    const handleNext = () => setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    const handleCardDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (!isTouchLayout || shouldReduceMotion) {
            return;
        }

        if (info.offset.x > 90) {
            handlePrev();
        } else if (info.offset.x < -90) {
            handleNext();
        }
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const updateLayout = () => setIsTouchLayout(mediaQuery.matches);

        updateLayout();
        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", updateLayout);
            return () => mediaQuery.removeEventListener("change", updateLayout);
        }

        mediaQuery.addListener(updateLayout);
        return () => mediaQuery.removeListener(updateLayout);
    }, []);

    return (
        <section id="testimonials" className="py-28 bg-gradient-mesh relative overflow-hidden">
            <div className="absolute inset-0 pattern-dots opacity-[0.02]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8 shadow-glow"
                    >
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                            <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                        </motion.div>
                        <span className="text-sm font-bold tracking-widest uppercase text-gold-600">Client Testimonials</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4"
                    >
                        Trusted by <span className="text-gradient">500+ Clients</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        A snapshot of real outcomes across businesses, founders, and global professionals.
                    </motion.p>
                </div>

                <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-5 w-5 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <span className="text-3xl font-black text-gradient">4.8/5</span>
                        <span className="text-sm text-slate-500">Based on 50+ Google & LinkedIn reviews</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <motion.button
                            onClick={handlePrev}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-12 w-12 rounded-xl border-2 border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-gold-500 hover:text-gold-600"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="mx-auto h-5 w-5" />
                        </motion.button>
                        <motion.button
                            onClick={handleNext}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-12 w-12 rounded-xl border-2 border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-gold-500 hover:text-gold-600"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="mx-auto h-5 w-5" />
                        </motion.button>
                    </div>
                </div>

                <div className="mb-8 flex items-center justify-center gap-2 lg:justify-end">
                    {reviews.map((review, index) => (
                        <button
                            key={review.name}
                            onClick={() => setCurrent(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                current === index ? "w-8 bg-gold-500" : "w-2 bg-slate-300 hover:bg-slate-400"
                            }`}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {isTouchLayout && (
                    <p className="mb-6 text-center text-xs font-medium text-slate-500 lg:text-right">
                        Swipe the main testimonial card to browse more reviews.
                    </p>
                )}

                <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                    <motion.article
                        key={featured.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 0.4 }}
                        drag={isTouchLayout && !shouldReduceMotion ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.14}
                        onDragEnd={handleCardDragEnd}
                        className="relative min-h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-medium"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${featured.color} opacity-[0.06]`} />
                        <div className="relative z-10">
                            <Quote className="h-12 w-12 text-slate-300" />
                            <p className="mt-5 text-lg leading-relaxed text-slate-700">&quot;{featured.text}&quot;</p>
                            <div className="mt-8 flex items-center gap-4">
                                <ReviewAvatar initials={featured.initials} color={featured.color} />
                                <div>
                                    <p className="font-bold text-slate-900">{featured.name}</p>
                                    <p className="text-sm text-slate-600">{featured.designation}</p>
                                    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {featured.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    <div className="space-y-4">
                        {related.map((review, index) => (
                            <motion.button
                                key={review.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                onClick={() => setCurrent(reviews.findIndex((item) => item.name === review.name))}
                                className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:border-gold-500/35 hover:shadow-soft"
                            >
                                <div className="flex items-start gap-3">
                                    <ReviewAvatar initials={review.initials} color={review.color} />
                                    <div className="min-w-0 flex-1">
                                        <p className="font-semibold text-slate-900">{review.name}</p>
                                        <p className="text-xs text-slate-500">{review.designation}</p>
                                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">&quot;{review.text}&quot;</p>
                                    </div>
                                </div>
                            </motion.button>
                        ))}

                        <a
                            href="https://g.co/kgs/6mTpUkf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                        >
                            Read all reviews on Google
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
