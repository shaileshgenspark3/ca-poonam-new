"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
    CheckCircle2,
    ChevronRight,
    Clock,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Instagram,
    Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ca-poonam-pathak/?originalSubdomain=in", color: "hover:bg-[#0077b5]" },
    { icon: Twitter, label: "Twitter / X", href: "https://twitter.com/capoonampathak", color: "hover:bg-[#1da1f2]" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/capoonampathak", color: "hover:bg-[#e1306c]" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@capoonampathak", color: "hover:bg-[#ff0000]" },
];

const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Speaking", href: "#speaking" },
    { label: "Resources", href: "#resources" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

const services = [
    "Audit & Assurance",
    "NRI Taxation",
    "GST Compliance",
    "Corporate Advisory",
    "POSH Compliance",
    "Fractional CFO",
];

type FormData = {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
};

const INITIAL_FORM: FormData = {
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
};

export default function Footer() {
    const shouldReduceMotion = useReducedMotion();
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formData.name || !formData.email) {
            return;
        }

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setFormData(INITIAL_FORM);
        setIsSubmitted(false);
    };

    return (
        <footer id="contact" className="relative overflow-hidden bg-gradient-navy">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative border-b border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-500/20 bg-gold-500/10 px-8 py-3">
                                <span className="text-sm font-bold tracking-widest uppercase text-gold-400">Let&apos;s Connect</span>
                            </div>

                            <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl">
                                Ready to Elevate Your <span className="text-gradient">Financial Strategy?</span>
                            </h2>

                            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/60">
                                Book a consultation to map your tax, compliance, and governance roadmap with
                                clear execution support from day one.
                            </p>

                            <div className="mb-8 space-y-4">
                                <motion.a
                                    href="tel:+917506665063"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 text-white/80 transition-colors hover:text-gold-400"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <span className="font-semibold">+91 7506665063</span>
                                </motion.a>

                                <motion.a
                                    href="mailto:connect@capoonampathak.com"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 text-white/80 transition-colors hover:text-gold-400"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <span className="font-semibold">connect@capoonampathak.com</span>
                                </motion.a>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    "Priority slots for time-sensitive filings",
                                    "Structured onboarding with clear milestones",
                                ].map((item) => (
                                    <div key={item} className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white/70">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                                            className="flex min-h-[420px] flex-col items-center justify-center text-center"
                                        >
                                            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/20">
                                                <CheckCircle2 className="h-10 w-10 text-gold-400" />
                                            </div>
                                            <p className="text-2xl font-black text-white">Consultation Request Received</p>
                                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                                                Thank you, {formData.name}. We will reach out at {formData.email} shortly with the next available slot.
                                            </p>
                                            <button
                                                onClick={handleReset}
                                                className="mt-6 text-sm font-semibold text-gold-300 underline underline-offset-4"
                                            >
                                                Submit another request
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            <div className="grid gap-5 sm:grid-cols-2">
                                                <div>
                                                    <label className="mb-2 block text-sm text-white/50">Name *</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Your name"
                                                        value={formData.name}
                                                        onChange={(event) => handleChange("name", event.target.value)}
                                                        autoComplete="name"
                                                        required
                                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-gold-500/50 focus:bg-white/10"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="mb-2 block text-sm text-white/50">Phone</label>
                                                    <input
                                                        type="tel"
                                                        placeholder="+91 XXXXX XXXXX"
                                                        value={formData.phone}
                                                        onChange={(event) => handleChange("phone", event.target.value)}
                                                        autoComplete="tel"
                                                        inputMode="tel"
                                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-gold-500/50 focus:bg-white/10"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm text-white/50">Email *</label>
                                                <input
                                                    type="email"
                                                    placeholder="you@company.com"
                                                    value={formData.email}
                                                    onChange={(event) => handleChange("email", event.target.value)}
                                                    autoComplete="email"
                                                    inputMode="email"
                                                    required
                                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-gold-500/50 focus:bg-white/10"
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm text-white/50">Service Required</label>
                                                <select
                                                    value={formData.service}
                                                    onChange={(event) => handleChange("service", event.target.value)}
                                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-gold-500/50 focus:bg-white/10 [&>option]:bg-navy-deep"
                                                >
                                                    <option value="">Select a service</option>
                                                    {services.map((service) => (
                                                        <option key={service} value={service}>
                                                            {service}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm text-white/50">Message</label>
                                                <textarea
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={(event) => handleChange("message", event.target.value)}
                                                    placeholder="Tell us your objective or challenge"
                                                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-gold-500/50 focus:bg-white/10"
                                                />
                                            </div>

                                            <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                                                {isSubmitting ? "Submitting..." : "Book a Consultation"}
                                            </Button>

                                            <p className="text-center text-xs text-white/35">
                                                By submitting, you consent to being contacted for consultation scheduling.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-6">
                            <p className="mb-2 text-3xl font-black text-white">
                                CA <span className="text-gradient">Poonam</span> Pathak
                            </p>
                            <p className="text-xs font-medium tracking-[0.25em] text-gold-400/80 uppercase">
                                Chartered Accountant · Business Advisor · Independent Director
                            </p>
                        </div>

                        <p className="mb-8 max-w-md text-sm leading-relaxed text-white/50">
                            Empowering businesses, NRIs, and entrepreneurs with expert financial advisory,
                            compliance, and strategic leadership.
                        </p>

                        <div className="mb-8 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                    <MapPin className="h-5 w-5 text-gold-400" />
                                </div>
                                <p className="text-sm leading-relaxed text-white/50">
                                    204, Suncity Avenue, Sector 10, Kharghar,
                                    <br />
                                    Navi Mumbai – 410210, Maharashtra, India
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                    <Clock className="h-5 w-5 text-gold-400" />
                                </div>
                                <p className="text-sm text-white/50">Mon – Fri: 9:30 AM – 6:30 PM IST</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, label, href, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:text-white ${color}`}
                                    aria-label={label}
                                >
                                    <Icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="mb-6 text-sm font-bold text-white">Quick Links</p>
                        <ul className="space-y-3">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="group flex items-center gap-2 text-sm text-white/50 transition-all duration-300 hover:text-gold-400"
                                    >
                                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="mb-6 text-sm font-bold text-white">Find Us</p>
                        <div className="mb-4 overflow-hidden rounded-2xl border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.316093454!2d73.06809521490136!3d19.04686558711439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3b9b6d3b1c9%3A0x6000000000000000!2sSector%2010%2C%20Kharghar%2C%20Navi%20Mumbai%2C%20Maharashtra%20410210!5e0!3m2!1sen!2sin!4v1614000000000!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ filter: "grayscale(100%) contrast(1.2) invert(92%)", border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            />
                        </div>
                        <motion.a
                            href="https://maps.google.com/?q=Sector+10+Kharghar+Navi+Mumbai+410210"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 3 }}
                            className="flex items-center gap-2 text-xs text-gold-400 transition-colors hover:text-gold-300"
                        >
                            <MapPin className="h-3.5 w-3.5" />
                            Open in Google Maps
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative border-t border-white/5"
            >
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-xs text-white/30">© {new Date().getFullYear()} CA Poonam Pathak. All rights reserved.</p>
                        <div className="flex gap-6">
                            {[
                                { label: "Privacy Policy", href: "#" },
                                { label: "Terms of Use", href: "#" },
                                { label: "Disclaimer", href: "#" },
                            ].map((link) => (
                                <a key={link.label} href={link.href} className="text-xs text-white/30 transition-colors hover:text-white/60">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
