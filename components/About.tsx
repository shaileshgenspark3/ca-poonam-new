"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BookOpen, Award, Heart, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
    { icon: Award, text: "IICA Qualified Independent Director", color: "text-blue-600", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { icon: BookOpen, text: "Published POSH Compliance Handbook author", color: "text-amber-600", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { icon: Heart, text: "Advocate for Work-Life Balance in Corporate India", color: "text-rose-600", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { icon: Users, text: "Direct Tax Committee Member, ICAI", color: "text-emerald-600", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
];

const stats = [
    { value: "8+", label: "Years Experience", suffix: "+" },
    { value: "500", label: "Happy Clients", suffix: "+" },
    { value: "50", label: "Speaking Events", suffix: "+" },
    { value: "100%", label: "Client Satisfaction", suffix: "" },
];

const achievements = [
    { year: "2016", title: "Became Chartered Accountant", icon: Award },
    { year: "2019", title: "ICAI Peer Reviewer Certification", icon: CheckCircle },
    { year: "2021", title: "IICA Independent Director Qualified", icon: Star },
    { year: "2024", title: "Top 40 FinFluencer Award", icon: Star },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-28 bg-white overflow-hidden relative" ref={ref}>
            <div className="absolute inset-0 pattern-dots opacity-[0.02]" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center lg:items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-gold-400/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl" />
                         
                        <div className="relative">
                            <div
                                className="relative rounded-3xl overflow-hidden h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] shadow-strong group"
                                style={{
                                    background: "linear-gradient(160deg, #f8f6f0 0%, #ede8db 100%)",
                                    border: "1px solid rgba(212, 175, 55, 0.3)",
                                }}
                            >
                                <Image
                                    src="/images/headshot.png"
                                    alt="CA Poonam Pathak - Professional Portrait"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30, x: -30 }}
                                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                whileHover={{ y: -5 }}
                                className="absolute -right-6 sm:-right-8 top-10 sm:top-14 p-7 rounded-2xl shadow-2xl glass-premium hover-lift cursor-default"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-glow">
                                        <Award className="w-8 h-8 text-navy-deep" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 text-sm font-bold leading-tight">WIRC Star Women</p>
                                        <p className="text-gold-600 text-xs font-medium mt-1">Excellence Award</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30, x: 30 }}
                                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="absolute -left-6 sm:-left-8 bottom-28 sm:bottom-36 p-7 rounded-2xl shadow-2xl hover-lift cursor-default"
                                style={{
                                    background: "linear-gradient(135deg, #d4af37, #b8941f)",
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Star className="w-10 h-10 text-navy-deep fill-navy-deep" />
                                    </motion.div>
                                    <div>
                                        <p className="text-navy-deep text-sm font-black leading-tight">Top 40</p>
                                        <p className="text-navy-deep/80 text-xs font-medium mt-1">FinFluencer 2024</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
 
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="mb-10"
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
                                <span className="text-xs font-bold tracking-widest uppercase text-gold-600">
                                    About
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8"
                        >
                            Strategic Authority in{" "}
                            <span className="text-gradient">Finance & Corporate Law</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-slate-600 leading-relaxed mb-6 text-lg"
                        >
                            With over <strong className="text-slate-900 font-semibold">8+ years of deep expertise</strong> spanning
                            taxation, audit, corporate law, and regulatory compliance, CA Poonam Pathak has built
                            a reputation as a trusted advisor to businesses, NRIs, and high-net-worth individuals
                            across India and globally.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-slate-600 leading-relaxed mb-12"
                        >
                            As an <strong className="text-slate-900 font-semibold">IICA Qualified Independent Director</strong>,
                            she brings board-level governance perspective to startups and established corporations.
                            Featured as a national speaker at <strong className="text-slate-900 font-semibold">Josh Talks</strong>,
                            she empowers professionals with practical financial wisdom.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="space-y-4 mb-12"
                        >
                            {highlights.map(({ icon: Icon, text, color, bg, border }, i) => (
                                <motion.div
                                    key={text}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                    whileHover={{ x: 8, backgroundColor: "rgba(248, 250, 252, 0.8)" }}
                                    className={`flex items-start gap-5 p-6 rounded-xl border ${border} ${bg} transition-all duration-300 cursor-default group`}
                                >
                                    <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-6 h-6 ${color}`} />
                                    </div>
                                    <p className="text-slate-700 font-medium mt-1">{text}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 p-8 rounded-2xl glass-premium border border-slate-200"
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-center"
                                >
                                    <p className="text-3xl sm:text-4xl font-black text-gradient">{stat.value}{stat.suffix}</p>
                                    <p className="text-xs text-slate-500 font-medium mt-2">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button variant="secondary" size="xl" className="group">
                                    Schedule a Meeting
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-28"
                >
                    <div className="text-center mb-16">
                        <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                            Journey of Excellence
                        </h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A timeline of professional milestones and achievements
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {achievements.map((achievement, i) => (
                                <motion.div
                                    key={achievement.year}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 1.1 + i * 0.15 }}
                                    whileHover={{ y: -10 }}
                                    className="relative text-center group cursor-default"
                                >
                                    <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-strong border-2 ${
                                        i % 2 === 0 ? "border-gold-500" : "border-blue-500"
                                    } mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <motion.div
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                                        >
                                            <achievement.icon className={`w-7 h-7 ${i % 2 === 0 ? "text-gold-500" : "text-blue-500"}`} />
                                        </motion.div>
                                    </div>
                                    <p className="text-sm font-bold text-slate-400 mb-2">{achievement.year}</p>
                                    <p className="text-sm font-semibold text-slate-900 leading-tight px-2">{achievement.title}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
