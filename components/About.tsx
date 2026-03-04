"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BookOpen, Award, Heart, Users, Star, CheckCircle } from "lucide-react";
import Button from "./Button";

const highlights = [
    { icon: Award, text: "IICA Qualified Independent Director", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: BookOpen, text: "Published POSH Compliance Handbook author", color: "text-amber-500", bg: "bg-amber-500/10" },
    { icon: Heart, text: "Advocate for Work-Life Balance in Corporate India", color: "text-rose-500", bg: "bg-rose-500/10" },
    { icon: Users, text: "Direct Tax Committee Member, ICAI", color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

const stats = [
    { value: "8+", label: "Years Experience", suffix: "+" },
    { value: "500", label: "Happy Clients", suffix: "+" },
    { value: "50", label: "Speaking Events", suffix: "+" },
    { value: "100%", label: "Client Satisfaction", suffix: "" },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-28 bg-white overflow-hidden" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center lg:items-center">

                    {/* Left – Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Background Decorations */}
                        <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-gold-400/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl" />
                        
                        {/* Main Image Container */}
                        <div className="relative">
                            {/* Image Frame */}
                            <div
                                className="relative rounded-3xl overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] shadow-2xl"
                                style={{
                                    background: "linear-gradient(160deg, #f8f6f0 0%, #ede8db 100%)",
                                    border: "1px solid rgba(212, 175, 55, 0.2)",
                                }}
                            >
                                 {/* Professional Headshot */}
                                 <Image
                                     src="/images/headshot.png"
                                     alt="CA Poonam Pathak - Professional Portrait"
                                     fill
                                     className="object-cover"
                                     priority
                                     sizes="(max-width: 768px) 100vw, 50vw"
                                 />

                                {/* Quote Overlay */}
                                <div 
                                    className="absolute bottom-0 left-0 right-0 p-8"
                                    style={{ 
                                        background: "linear-gradient(to top, rgba(15,23,42,0.95), transparent)",
                                        backdropFilter: "blur(10px)",
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="text-6xl text-gold-400/50 font-serif leading-none">"</div>
                                        <p className="text-white text-base italic leading-relaxed font-medium">
                                            Finance is not just about numbers — it's about empowering people to build the life they envision.
                                        </p>
                                    </div>
                                    <p className="text-gold-400 text-sm mt-4 font-semibold">— CA Poonam Pathak</p>
                                </div>
                            </div>

                            {/* Floating Badge 1 - WIRC Award */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute -right-6 top-12 p-5 rounded-2xl shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #0f172a, #1e293b)",
                                    border: "1px solid rgba(212, 175, 55, 0.3)",
                                    minWidth: "200px",
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg">
                                        <Award className="w-7 h-7 text-navy-deep" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-bold leading-tight">WIRC Star Women</p>
                                        <p className="text-gold-400 text-xs">Excellence Award</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 - FinFluencer */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="absolute -left-6 bottom-32 p-5 rounded-2xl shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #d4af37, #b8941f)",
                                    minWidth: "180px",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <Star className="w-8 h-8 text-navy-deep fill-navy-deep" />
                                    <div>
                                        <p className="text-navy-deep text-sm font-black leading-tight">Top 40</p>
                                        <p className="text-navy-deep/80 text-xs">FinFluencer 2024</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right – Content */}
                    <div>
                        {/* Section Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-4">
                                <span className="text-xs font-bold tracking-widest uppercase text-gold-600">
                                    About
                                </span>
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-8"
                        >
                            Strategic Authority in{" "}
                            <span className="text-gradient">Finance & Corporate Law</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-slate-600 leading-relaxed mb-6 text-lg"
                        >
                            With over <strong className="text-slate-900 font-semibold">8+ years of deep expertise</strong> spanning
                            taxation, audit, corporate law, and regulatory compliance, CA Poonam Pathak has built
                            a reputation as a trusted advisor to businesses, NRIs, and high-net-worth individuals
                            across India and globally.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-slate-600 leading-relaxed mb-10"
                        >
                            As an <strong className="text-slate-900 font-semibold">IICA Qualified Independent Director</strong>,
                            she brings board-level governance perspective to startups and established corporations.
                            Featured as a national speaker at <strong className="text-slate-900 font-semibold">Josh Talks</strong>,
                            she empowers professionals with practical financial wisdom.
                        </motion.p>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-4 mb-10"
                        >
                            {highlights.map(({ icon: Icon, text, color, bg }, i) => (
                                <motion.div
                                    key={text}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                    <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-5 h-5 ${color}`} />
                                    </div>
                                    <p className="text-slate-700 font-medium mt-1">{text}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 p-6 rounded-2xl bg-gradient-mesh border border-slate-200"
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <p className="text-3xl font-black text-gradient">{stat.value}{stat.suffix}</p>
                                    <p className="text-xs text-slate-500 font-medium mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            <Button
                                href="#contact"
                                variant="navy"
                                size="lg"
                                icon="arrow"
                                motionProps={{ whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }}
                            >
                                Schedule a Meeting
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
