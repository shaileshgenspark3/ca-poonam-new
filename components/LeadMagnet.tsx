"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Download, FileText, Shield, CheckCircle, Sparkles, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const guides = [
    {
        id: "nri",
        icon: FileText,
        title: "2024 NRI Taxation Guide",
        desc: "A comprehensive 20-page guide covering DTAA benefits, FEMA regulations, repatriation rules, and tax-efficient investment strategies for Non-Resident Indians.",
        highlights: ["DTAA Treaty Benefits", "FEMA Compliance", "Repatriation Guidelines", "NRE/NRO Account Rules"],
        badge: "Most Popular",
        badgeColor: "from-gold-400 to-gold-600",
        badgeText: "text-navy-deep",
    },
    {
        id: "posh",
        icon: Shield,
        title: "POSH Compliance Checklist",
        desc: "A step-by-step implementation checklist for the Prevention of Sexual Harassment Act, authored by CA Poonam Pathak — India's leading POSH consultant.",
        highlights: ["IC Committee Setup", "Policy Templates", "Training Framework", "Annual Report Format"],
        badge: "By CA Poonam",
        badgeColor: "from-navy-deep to-navy-mid",
        badgeText: "text-gold-400",
    },
];

export default function LeadMagnet() {
    const [selected, setSelected] = useState<"nri" | "posh">("nri");
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    const active = guides.find((g) => g.id === selected)!;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
            className="py-28 bg-gradient-mesh relative overflow-hidden"
        >
            <div className="absolute inset-0 pattern-dots opacity-[0.02]" />
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8 shadow-glow"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-5 h-5 text-gold-500" />
                        </motion.div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gold-600">
                            Free Resources
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4"
                    >
                        Download Expert Guides —{" "}
                        <span className="text-gradient inline-block">Free</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Practical, expert-authored guides to help you navigate India&apos;s regulatory landscape
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-10 items-stretch"
                >
                    <div className="flex flex-col gap-5">
                        {guides.map((guide) => {
                            const Icon = guide.icon;
                            const isActive = selected === guide.id;
                            return (
                                <motion.button
                                    key={guide.id}
                                    onClick={() => { setSelected(guide.id as "nri" | "posh"); setSubmitted(false); }}
                                    onHoverStart={() => setHovered(guide.id)}
                                    onHoverEnd={() => setHovered(null)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`min-h-[250px] text-left p-7 rounded-2xl border-2 transition-all duration-300 card-modern ${
                                        isActive
                                            ? "border-gold-500 bg-gold-500/5 shadow-glow"
                                            : "border-slate-200 bg-white hover:border-slate-300"
                                    }`}
                                >
                                    <div className="flex items-start gap-5">
                                        <motion.div
                                            animate={{ 
                                                scale: hovered === guide.id || isActive ? 1.1 : 1,
                                                rotate: hovered === guide.id || isActive ? 5 : 0 
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                                                isActive 
                                                    ? "bg-gradient-navy shadow-lg" 
                                                    : "bg-slate-100"
                                            }`}
                                        >
                                            <Icon className={`w-7 h-7 ${isActive ? "text-gold-400" : "text-slate-400"}`} />
                                        </motion.div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 flex-wrap mb-3">
                                                <p className={`font-bold text-lg ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                                                    {guide.title}
                                                </p>
                                                <motion.span
                                                    animate={{ scale: isActive ? [1, 1.05, 1] : 1 }}
                                                    transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
                                                    className={`px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r ${guide.badgeColor} ${guide.badgeText} shadow-glow`}
                                                >
                                                    {guide.badge}
                                                </motion.span>
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-4">{guide.desc}</p>
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="grid grid-cols-2 gap-3"
                                                    >
                                                        {guide.highlights.map((h) => (
                                                            <motion.div
                                                                key={h}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.1 }}
                                                                className="flex items-center gap-2"
                                                            >
                                                                <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                                                                <span className="text-sm text-slate-600">{h}</span>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    <motion.div
                        className="relative flex min-h-[560px] flex-col justify-center overflow-hidden rounded-3xl p-8 sm:min-h-[620px]"
                        style={{
                            background: "linear-gradient(160deg, #0f172a, #1e3a5f)",
                            border: "1px solid rgba(212,175,55,0.2)",
                            boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                        
                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center text-center gap-6 py-8 relative z-10"
                                >
                                    <motion.div 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                        className="w-24 h-24 rounded-full bg-gold-500/20 flex items-center justify-center"
                                    >
                                        <motion.div
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        >
                                            <CheckCircle className="w-12 h-12 text-gold-400" />
                                        </motion.div>
                                    </motion.div>
                                    <div>
                                        <p className="text-white font-black text-2xl mb-3">
                                            {active.title} Sent!
                                        </p>
                                        <p className="text-white/60 text-sm leading-relaxed">
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
                                            className="text-white/40 text-sm hover:text-white/70 underline underline-offset-4 transition-colors font-medium"
                                        >
                                            Download another guide
                                        </button>
                                    </motion.div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="relative z-10 min-h-[460px]"
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-16 h-16 rounded-xl bg-gold-500/20 flex items-center justify-center"
                                        >
                                            <Download className="w-8 h-8 text-gold-400" />
                                        </motion.div>
                                        <div>
                                            <p className="text-white font-bold text-lg">
                                                Get Your Free {active.title}
                                            </p>
                                            <p className="text-white/50 text-sm">Delivered instantly to your inbox</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="text-white/60 text-sm mb-2.5 block font-medium">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your name"
                                                value={form.name}
                                                autoComplete="name"
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                className="w-full px-5 py-4 sm:px-6 sm:py-4.5 rounded-xl text-white placeholder-white/30 outline-none focus:border-gold-500/50 transition-all bg-white/5 border-2 border-white/10 text-sm focus:bg-white/10"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white/60 text-sm mb-2.5 block font-medium">Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="you@email.com"
                                                value={form.email}
                                                autoComplete="email"
                                                inputMode="email"
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="w-full px-5 py-4 sm:px-6 sm:py-4.5 rounded-xl text-white placeholder-white/30 outline-none focus:border-gold-500/50 transition-all bg-white/5 border-2 border-white/10 text-sm focus:bg-white/10"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white/60 text-sm mb-2.5 block font-medium">Phone (Optional)</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 XXXXX XXXXX"
                                                value={form.phone}
                                                autoComplete="tel"
                                                inputMode="tel"
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                className="w-full px-5 py-4 sm:px-6 sm:py-4.5 rounded-xl text-white placeholder-white/30 outline-none focus:border-gold-500/50 transition-all bg-white/5 border-2 border-white/10 text-sm focus:bg-white/10"
                                            />
                                        </div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                type="submit"
                                                variant="default"
                                                size="lg"
                                                disabled={loading}
                                                className="w-full group"
                                            >
                                                {loading ? (
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    >
                                                        <Send className="w-5 h-5 mr-2" />
                                                    </motion.div>
                                                ) : (
                                                    <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                                                )}
                                                {loading ? "Sending..." : "Download Now — Free"}
                                            </Button>
                                        </motion.div>

                                        <p className="text-white/30 text-xs text-center leading-relaxed">
                                            No spam. Unsubscribe anytime. Your data is secure with 256-bit encryption.
                                        </p>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
