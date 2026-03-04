"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    ClipboardCheck, TrendingUp, Globe, Building2, FileText,
    Calculator, Scale, Briefcase, Search, ChevronRight, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
    {
        category: "Audit & Assurance",
        color: "from-blue-500 to-blue-700",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
        services: [
            {
                icon: Search,
                title: "Peer Review – ICAI",
                desc: "Authorised Peer Reviewer ensuring audit quality and standards compliance as mandated by ICAI's Quality Review Board.",
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
        category: "Taxation & Wealth",
        color: "from-amber-500 to-amber-700",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/30",
        services: [
            {
                icon: Calculator,
                title: "Income Tax Planning",
                desc: "End-to-end personal and corporate income tax planning, filing, and litigation support to maximise legitimate savings.",
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
        category: "Corporate & Startup Advisory",
        color: "from-emerald-500 to-emerald-700",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
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

function ServiceCard({ service, delay, categoryColor }: { 
    service: typeof categories[0]["services"][0]; 
    delay: number;
    categoryColor: string;
}) {
    const [hovered, setHovered] = useState(false);
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="group relative p-8 bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-500 hover-lift"
        >
            {/* Gradient Background on Hover */}
            <div 
                className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            />
            
            {/* Top Border Accent */}
            <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
            />
            
            <div className="relative z-10">
                {/* Icon */}
                <motion.div
                    animate={{
                        scale: hovered ? 1.1 : 1,
                        rotate: hovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                        hovered ? `bg-gradient-to-br ${categoryColor} shadow-lg` : "bg-slate-50"
                    }`}
                >
                    <Icon
                        className={`w-6 h-6 transition-all duration-500 ${
                            hovered ? "text-white" : "text-slate-700"
                        }`}
                    />
                </motion.div>

                {/* Title */}
                <h4 className="font-bold text-lg mb-3 text-slate-900 group-hover:text-slate-800 transition-colors">
                    {service.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                </p>

                {/* Learn More Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className={`flex items-center gap-2 text-sm font-bold transition-all duration-300 ${
                        hovered ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <span className={`bg-gradient-to-r ${categoryColor} bg-clip-text text-transparent`}>
                        Learn More
                    </span>
                    <ChevronRight className={`w-4 h-4 bg-gradient-to-r ${categoryColor} bg-clip-text text-transparent`} />
                </motion.div>
            </div>

            {/* Corner Decoration */}
            <div 
                className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
            />
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-28 bg-gradient-mesh">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-bold tracking-widest uppercase text-gold-600">
                            Professional Services
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-black text-slate-900 mb-6"
                    >
                        End-to-End{" "}
                        <span className="text-gradient">Advisory Services</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        From compliance to strategic advisory, a comprehensive suite of services designed
                        for modern businesses and discerning individuals.
                    </motion.p>
                </div>

                {/* Categories */}
                <div className="space-y-16">
                    {categories.map((cat, catI) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catI * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${cat.color} shadow-lg`}>
                                    {cat.category}
                                </div>
                                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
                            </div>

                            {/* Services Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cat.services.map((service, i) => (
                                    <ServiceCard
                                        key={service.title}
                                        service={service}
                                        delay={i * 0.1}
                                        categoryColor={cat.color}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center px-4"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            variant="secondary"
                            size="xl"
                            className="w-full sm:w-auto max-w-md mx-auto"
                        >
                            Discuss Your Requirements
                        </Button>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

// Sparkles icon component
function Sparkles({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3L14.5 8.5L20 9L15.5 13.5L16.5 19L12 16L7.5 19L8.5 13.5L4 9L9.5 8.5L12 3Z" />
        </svg>
    );
}
