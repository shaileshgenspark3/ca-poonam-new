"use client";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CalendarClock,
    Calculator,
    ExternalLink,
    FileCheck,
    Globe,
    Landmark,
    Lock,
    ShieldCheck,
} from "lucide-react";

const deadlines = [
    {
        title: "TDS Return (Q4)",
        dueDate: "May 31, 2026",
        type: "Quarterly",
        level: "High Priority",
    },
    {
        title: "Advance Tax Installment (Q1)",
        dueDate: "June 15, 2026",
        type: "Income Tax",
        level: "High Priority",
    },
    {
        title: "ITR Filing (Non-Audit)",
        dueDate: "July 31, 2026",
        type: "Income Tax",
        level: "Important",
    },
    {
        title: "Tax Audit Report Filing",
        dueDate: "September 30, 2026",
        type: "Audit",
        level: "High Priority",
    },
    {
        title: "ITR Filing (Audit Cases)",
        dueDate: "October 31, 2026",
        type: "Income Tax",
        level: "Important",
    },
    {
        title: "POSH Annual Report",
        dueDate: "January 31, 2027",
        type: "Corporate Compliance",
        level: "Planned",
    },
];

const tools = [
    {
        icon: Calculator,
        label: "Income Tax Portal",
        desc: "Official income tax e-filing portal for filings, notices, and AIS access.",
        href: "https://www.incometax.gov.in/iec/foportal",
        tag: "Official",
        tone: "from-blue-500/15 to-blue-500/5 border-blue-500/25",
    },
    {
        icon: Landmark,
        label: "GST Portal",
        desc: "GST registration, returns, payment tracking, and compliance dashboard.",
        href: "https://www.gst.gov.in/",
        tag: "Official",
        tone: "from-emerald-500/15 to-emerald-500/5 border-emerald-500/25",
    },
    {
        icon: FileCheck,
        label: "MCA Services",
        desc: "Corporate filings, DIN services, and company compliance records.",
        href: "https://www.mca.gov.in/",
        tag: "Official",
        tone: "from-violet-500/15 to-violet-500/5 border-violet-500/25",
    },
    {
        icon: Globe,
        label: "RBI FEMA Resources",
        desc: "Reference framework for cross-border transactions and FEMA compliance.",
        href: "https://www.rbi.org.in/",
        tag: "NRI",
        tone: "from-gold-500/20 to-gold-500/8 border-gold-500/25",
    },
];

export default function Resources() {
    return (
        <section id="resources" className="relative overflow-hidden bg-white py-28">
            <div className="absolute inset-0 pattern-dots opacity-[0.02]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-500/20 bg-gold-500/10 px-8 py-3"
                    >
                        <CalendarClock className="h-5 w-5 text-gold-500" />
                        <span className="text-sm font-bold tracking-widest uppercase text-gold-600">
                            Client Resource Center
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-4 text-4xl font-black text-slate-900 sm:text-5xl"
                    >
                        Compliance Calendar & <span className="text-gradient">Action Tools</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto max-w-3xl text-lg text-slate-600"
                    >
                        Keep your finance and governance workflows on track with curated filing milestones
                        and trusted portals used in CA-led engagements.
                    </motion.p>
                </div>

                <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-900 to-navy-rich p-7 shadow-strong"
                    >
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold tracking-[0.16em] uppercase text-gold-300">Upcoming Milestones</p>
                                <p className="mt-1 text-2xl font-black text-white">2026 Filing Radar</p>
                            </div>
                            <span className="rounded-full border border-gold-500/40 bg-gold-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-gold-300">
                                Updated
                            </span>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {deadlines.map((deadline, index) => (
                                <motion.article
                                    key={deadline.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                                >
                                    <div className="mb-2 flex items-center justify-between gap-2">
                                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-gold-300">
                                            {deadline.type}
                                        </span>
                                        <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/70">
                                            {deadline.level}
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold text-white">{deadline.title}</p>
                                    <p className="mt-2 text-xs text-white/60">Due: {deadline.dueDate}</p>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/10 to-white p-7"
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-navy-deep">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Compliance Confidence</p>
                                <p className="text-xs text-slate-500">Built for founders, corporates, and NRIs</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Deadline tracking across direct and indirect tax filings",
                                "Document-readiness checklist for audits and assessments",
                                "Advisory-first review of high-risk notices and disclosures",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3">
                                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gold-500" />
                                    <p className="text-sm text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-rich hover:text-navy-deep"
                        >
                            Build your compliance plan
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                </div>

                <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {tools.map((tool, index) => {
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
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -8 }}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:border-gold-500/35 hover:shadow-medium"
                            >
                                <div className={`mb-5 rounded-xl border bg-gradient-to-br p-4 ${tool.tone}`}>
                                    <div className="mb-3 flex items-center justify-between gap-2">
                                        <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase text-slate-700">
                                            {tool.tag}
                                        </span>
                                        <ExternalLink className="h-4 w-4 text-slate-500 transition-colors group-hover:text-gold-600" />
                                    </div>
                                    <Icon className="h-6 w-6 text-slate-900" />
                                </div>

                                <p className="text-base font-bold text-slate-900 group-hover:text-gold-700">{tool.label}</p>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{tool.desc}</p>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 sm:flex-row"
                >
                    <div className="flex items-center gap-4 text-left">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-navy text-gold-400">
                            <Lock className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xl font-black text-slate-900">Secure Client Workspace</p>
                            <p className="text-sm text-slate-500">Upload documents and track engagement updates with confidence.</p>
                        </div>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-navy px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-2xl"
                    >
                        Activate Portal Access
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
