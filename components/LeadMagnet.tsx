"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Download, FileText, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const guides = [
    {
        id: "nri",
        icon: FileText,
        title: "2024 NRI Taxation Guide",
        desc: "A comprehensive 20-page guide covering DTAA benefits, FEMA regulations, repatriation rules, and tax-efficient investment strategies for Non-Resident Indians.",
        highlights: ["DTAA Treaty Benefits", "FEMA Compliance", "Repatriation Guidelines", "NRE/NRO Account Rules"],
        badge: "Most Popular",
        badgeColor: "bg-gradient-gold",
    },
    {
        id: "posh",
        icon: Shield,
        title: "POSH Compliance Checklist",
        desc: "A step-by-step implementation checklist for the Prevention of Sexual Harassment Act, authored by CA Poonam Pathak — India's leading POSH consultant.",
        highlights: ["IC Committee Setup", "Policy Templates", "Training Framework", "Annual Report Format"],
        badge: "By CA Poonam",
        badgeColor: "bg-gradient-navy",
    },
];

export default function LeadMagnet() {
    const [selected, setSelected] = useState<"nri" | "posh">("nri");
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const active = guides.find((g) => g.id === selected)!;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email) return;
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section
            id="leadmagnet"
            className="py-28 bg-gradient-mesh"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
                    >
                        <Download className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-bold tracking-widest uppercase text-gold-600">
                            Free Resources
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-black text-slate-900 mb-4"
                    >
                        Download Expert Guides — <span className="text-gradient">Free</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-xl mx-auto"
                    >
                        Practical, expert-authored guides to help you navigate India&apos;s regulatory landscape
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-8 items-stretch"
                >
                    {/* Left – Guide Selector */}
                    <div className="flex flex-col gap-4">
                        {guides.map((guide) => {
                            const Icon = guide.icon;
                            const isActive = selected === guide.id;
                            return (
                                <motion.button
                                    key={guide.id}
                                    onClick={() => { setSelected(guide.id as "nri" | "posh"); setSubmitted(false); }}
                                    whileHover={{ scale: 1.02 }}
                                    className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                                        isActive
                                            ? "border-gold-500 bg-gold-500/5 shadow-lg"
                                            : "border-slate-200 bg-white hover:border-slate-300"
                                    }`}
                                >
                                    <div className="flex items-start gap-5">
                                        <div
                                            className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                                                isActive 
                                                    ? "bg-gradient-navy shadow-lg" 
                                                    : "bg-slate-100"
                                            }`}
                                        >
                                            <Icon className={`w-7 h-7 ${isActive ? "text-gold-400" : "text-slate-400"}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap mb-2">
                                                <p className={`font-bold text-base ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                                                    {guide.title}
                                                </p>
                                                <span
                                                    className={`px-4 py-2 rounded-full text-xs font-bold text-white ${guide.badgeColor}`}
                                                >
                                                    {guide.badge}
                                                </span>
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-3">{guide.desc}</p>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="grid grid-cols-2 gap-2"
                                                >
                                                    {guide.highlights.map((h) => (
                                                        <div key={h} className="flex items-center gap-2">
                                                            <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                                                            <span className="text-sm text-slate-600">{h}</span>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Right – Download Form */}
                    <motion.div
                        className="rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
                        style={{
                            background: "linear-gradient(160deg, #0f172a, #1e3a5f)",
                            border: "1px solid rgba(212,175,55,0.2)",
                            boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
                        }}
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
                        
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center text-center gap-6 py-8 relative z-10"
                            >
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", delay: 0.2 }}
                                    className="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center"
                                >
                                    <CheckCircle className="w-10 h-10 text-gold-400" />
                                </motion.div>
                                <div>
                                    <p className="text-white font-black text-2xl mb-3">
                                        {active.title} Sent!
                                    </p>
                                    <p className="text-white/60 text-sm">
                                        Check your inbox at <span className="text-gold-400 font-semibold">{form.email}</span>
                                    </p>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <button
                                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "" }); }}
                                        className="text-white/40 text-sm hover:text-white/70 underline transition-colors"
                                    >
                                        Download another guide
                                    </button>
                                </motion.div>
                            </motion.div>
                        ) : (
                            <>
                                <div className="flex items-center gap-4 mb-8 relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center">
                                        <Download className="w-7 h-7 text-gold-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg">
                                            Get Your Free {active.title}
                                        </p>
                                        <p className="text-white/50 text-sm">Delivered instantly to your inbox</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                    <div>
                                        <label className="text-white/50 text-sm mb-2 block">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-white placeholder-white/30 outline-none focus:border-gold-500/50 transition-all bg-white/5 border border-white/10 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white/50 text-sm mb-2 block">Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="you@email.com"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-white placeholder-white/30 outline-none focus:border-gold-500/50 transition-all bg-white/5 border border-white/10 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white/50 text-sm mb-2 block">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-white placeholder-white/30 outline-none focus:border-gold-500/50 transition-all bg-white/5 border border-white/10 text-sm"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="default"
                                        size="lg"
                                        className="w-full"
                                    >
                                        {loading ? "Sending..." : "Download Now — Free"}
                                    </Button>

                                    <p className="text-white/30 text-xs text-center">
                                        No spam. Unsubscribe anytime. Your data is secure.
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
