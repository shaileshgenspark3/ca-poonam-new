"use client";
import { motion } from "framer-motion";
import { CalendarDays, Calculator, TrendingUp, PiggyBank, Percent, Lock, ExternalLink, ArrowRight } from "lucide-react";

const deadlines = [
    "📅 ITR Filing — July 31, 2025",
    "🧾 GST Monthly Return (GSTR-3B) — 20th of each month",
    "📊 Advance Tax Q1 — June 15, 2025",
    "🏢 MCA Annual Filings — September 30, 2025",
    "📜 POSH Annual Report — January 31, 2026",
    "💼 TDS Q4 Return — May 31, 2025",
    "🌐 FEMA Filing for NRIs — Ongoing",
    "📅 Advance Tax Q2 — September 15, 2025",
    "🧾 GST Annual Return (GSTR-9) — December 31, 2025",
];

const tools = [
    {
        icon: Calculator,
        label: "Income Tax Calculator",
        desc: "Estimate your FY 2024-25 tax liability under new and old regime",
        href: "https://incometax.gov.in/",
        tag: "Official",
        tagColor: "bg-blue-500/20 text-blue-400",
    },
    {
        icon: TrendingUp,
        label: "SIP Returns Calculator",
        desc: "Project your mutual fund SIP growth with compounding",
        href: "#",
        tag: "Tool",
        tagColor: "bg-emerald-500/20 text-emerald-400",
    },
    {
        icon: PiggyBank,
        label: "EMI Calculator",
        desc: "Calculate your home, car, or personal loan EMI instantly",
        href: "#",
        tag: "Tool",
        tagColor: "bg-emerald-500/20 text-emerald-400",
    },
    {
        icon: Percent,
        label: "NRI TDS Rate Finder",
        desc: "Look up applicable TDS rates for NRI income under DTAA",
        href: "#",
        tag: "NRI",
        tagColor: "bg-gold-500/20 text-gold-400",
    },
];

export default function Resources() {
    return (
        <section id="resources" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
                    >
                        <CalendarDays className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-bold tracking-widest uppercase text-gold-600">
                            Client Resources
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-black text-slate-900 mb-4"
                    >
                        Resources & <span className="text-gradient">Tools Hub</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Stay ahead of compliance deadlines and use our curated financial tools
                    </motion.p>
                </div>

                {/* Compliance Ticker */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 rounded-2xl overflow-hidden shadow-xl"
                    style={{
                        background: "linear-gradient(135deg, #0f172a, #1e3a5f)",
                        border: "1px solid rgba(212,175,55,0.2)",
                    }}
                >
                    <div className="flex items-center">
                        <div
                            className="flex items-center gap-3 px-6 py-4 flex-shrink-0 bg-gradient-gold"
                        >
                            <CalendarDays className="w-5 h-5 text-navy-deep" />
                            <span className="text-navy-deep text-sm font-black tracking-wider uppercase whitespace-nowrap">
                                Due Dates
                            </span>
                        </div>
                        <div className="flex-1 overflow-hidden py-4 px-4">
                            <div className="ticker-animate">
                                {[...deadlines, ...deadlines].map((d, i) => (
                                    <span key={i} className="text-white/70 text-sm whitespace-nowrap mx-8 font-medium">
                                        {d}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tools Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {tools.map((tool, i) => {
                        const Icon = tool.icon;
                        return (
                            <motion.a
                                key={tool.label}
                                href={tool.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group p-6 rounded-2xl border border-slate-200 hover:border-gold-500/50 hover:shadow-xl transition-all duration-300 bg-white"
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-gold-500/10 flex items-center justify-center transition-colors">
                                        <Icon className="w-6 h-6 text-slate-700 group-hover:text-gold-600 transition-colors" />
                                    </div>
                                    <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${tool.tagColor}`}>
                                        {tool.tag}
                                    </span>
                                </div>
                                <p className="text-slate-900 font-bold text-base mb-2 group-hover:text-gold-600 transition-colors">
                                    {tool.label}
                                </p>
                                <p className="text-slate-500 text-sm leading-relaxed">{tool.desc}</p>
                                <div className="mt-4 flex items-center gap-2 text-gold-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    Open Tool <ExternalLink className="w-4 h-4" />
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Client Portal CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl"
                    style={{
                        background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                        border: "1px solid rgba(212,175,55,0.2)",
                    }}
                >
                    <div className="flex items-center gap-5 text-left">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                            style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
                        >
                            <Lock className="w-7 h-7 text-gold-400" />
                        </div>
                        <div>
                            <p className="font-black text-slate-900 text-xl">Secure Client Portal</p>
                            <p className="text-slate-500 text-sm mt-1">Access your documents, reports, and filings securely</p>
                        </div>
                    </div>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 flex items-center gap-3 px-8 py-4 text-sm font-bold text-white bg-gradient-navy rounded-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <Lock className="w-4 h-4" />
                        Login to Portal
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
