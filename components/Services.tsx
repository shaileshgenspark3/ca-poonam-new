"use client";
import { motion } from "framer-motion";
import {
    ClipboardCheck,
    TrendingUp,
    Globe,
    Building2,
    FileText,
    Calculator,
    Scale,
    Briefcase,
    Search,
    ChevronRight,
    Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
    {
        id: "audit-assurance",
        category: "Audit & Assurance",
        color: "from-blue-500 to-blue-700",
        services: [
            {
                icon: Search,
                title: "Peer Review – ICAI",
                desc: "Authorised Peer Reviewer ensuring audit quality and standards compliance as mandated by ICAI's Quality Review Board.",
                featured: true,
            },
            {
                icon: ClipboardCheck,
                title: "Concurrent Audits",
                desc: "Real-time risk assessment and control evaluation for banking and financial institutions through concurrent audit engagements.",
            },
            {
                icon: FileText,
                title: "Statutory & Tax Audit",
                desc: "Comprehensive statutory audits, tax audits under Section 44AB, and certification services for businesses of all sizes.",
            },
        ],
    },
    {
        id: "taxation-wealth",
        category: "Taxation & Wealth",
        color: "from-amber-500 to-amber-700",
        services: [
            {
                icon: Calculator,
                title: "Income Tax Planning",
                desc: "End-to-end personal and corporate income tax planning, filing, and litigation support to maximise legitimate savings.",
                featured: true,
            },
            {
                icon: Globe,
                title: "NRI Taxation (Specialised)",
                desc: "Expert advisory on DTAA, FEMA compliance, foreign asset disclosures, and cross-border income taxation for global Indians.",
            },
            {
                icon: TrendingUp,
                title: "Financial Goal Planning",
                desc: "Holistic wealth planning integrating tax efficiency with investment strategy for individuals and families.",
            },
        ],
    },
    {
        id: "corporate-startup",
        category: "Corporate & Startup Advisory",
        color: "from-emerald-500 to-emerald-700",
        services: [
            {
                icon: Scale,
                title: "Company Law & MCA",
                desc: "Company incorporation, ROC compliance, annual filings, and MCA advisory for startups to listed companies.",
            },
            {
                icon: Briefcase,
                title: "Fractional CFO Services",
                desc: "Strategic financial leadership on-demand — budgeting, investor readiness, board reporting, and fundraising advisory.",
                featured: true,
            },
            {
                icon: Building2,
                title: "POSH Compliance",
                desc: "End-to-end POSH Act implementation: policy drafting, Internal Committee setup, training, and annual report filing.",
            },
            {
                icon: FileText,
                title: "GST Compliance & Advisory",
                desc: "Registration, return filing, reconciliation, ITC optimisation, and GST litigation support across industries.",
            },
            {
                icon: Scale,
                title: "Independent Director Services",
                desc: "Professional independent directorship with governance expertise, board oversight, and regulatory compliance assurance.",
            },
        ],
    },
];

function ServiceCard({
    service,
    delay,
    categoryColor,
}: Readonly<{
    service: (typeof categories)[number]["services"][number];
    delay: number;
    categoryColor: string;
}>) {
    const Icon = service.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay }}
            whileHover={{ y: -6 }}
            className="group relative h-full rounded-3xl border border-white/60 bg-white/88 p-7 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-gold-500/35 hover:shadow-medium"
        >
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${categoryColor} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.07]`} />

            <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between gap-3">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${categoryColor} shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    {service.featured && (
                        <span className="rounded-full border border-gold-500/40 bg-gold-500/12 px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase text-gold-700">
                            Most Requested
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold leading-tight text-slate-900">{service.title}</h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{service.desc}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors duration-300 group-hover:text-slate-900">
                    <span className={`bg-gradient-to-r ${categoryColor} bg-clip-text text-transparent`}>Learn More</span>
                    <ChevronRight className="h-4 w-4" />
                </div>
            </div>
        </motion.article>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-28 bg-gradient-mesh relative overflow-hidden">
            <div className="absolute inset-0 pattern-dots opacity-[0.02]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8 shadow-glow"
                    >
                        <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                            <Sparkles className="w-5 h-5 text-gold-500" />
                        </motion.div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gold-600">Professional Services</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 text-balance"
                    >
                        End-to-End <span className="text-gradient">Advisory Services</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        Structured engagements across compliance, strategy, and governance so founders,
                        professionals, and global Indians can make decisions with confidence.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 flex gap-3 overflow-x-auto pb-2"
                >
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={`#${category.id}`}
                            className="shrink-0 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-gold-500/40 hover:text-slate-900"
                        >
                            {category.category}
                        </a>
                    ))}
                </motion.div>

                <div className="space-y-20">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            id={category.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
                        >
                            <div className="mb-10 flex items-center gap-4">
                                <div className={`rounded-full bg-gradient-to-r ${category.color} px-6 py-3 text-sm font-bold text-white shadow-glow sm:text-base`}>
                                    {category.category}
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />
                            </div>

                            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                                {category.services.map((service, index) => (
                                    <ServiceCard
                                        key={service.title}
                                        service={service}
                                        delay={index * 0.09}
                                        categoryColor={category.color}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-24 text-center px-4"
                >
                    <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button variant="secondary" size="xl" className="w-full sm:w-auto max-w-md mx-auto group">
                            Discuss Your Requirements
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
