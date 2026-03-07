"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarClock, ChevronRight, Mail, Menu, Phone, X } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Speaking", href: "#speaking" },
    { label: "Resources", href: "#resources" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

const CONTACT_PHONE = "+917506665063";
const CONTACT_PHONE_DISPLAY = "+91 75066 65063";
const CONTACT_EMAIL = "connect@capoonampathak.com";

export default function Header() {
    const shouldReduceMotion = useReducedMotion();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrollProgress, setScrollProgress] = useState(0);
    const scrollFrameRef = useRef<number | null>(null);
    const scrollStateRef = useRef({
        scrolled: false,
        activeSection: "",
        scrollProgress: 0,
    });

    useEffect(() => {
        const updateScrollState = () => {
            const nextScrolled = window.scrollY > 16;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const rawProgress = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
            const nextScrollProgress = Math.max(0, Math.min(Math.round(rawProgress * 10) / 10, 100));

            const sectionIds = navLinks
                .filter((link) => link.href.startsWith("#"))
                .map((link) => link.href.replace("#", ""))
                .reverse();

            let nextActive = "";
            for (const id of sectionIds) {
                const sectionElement = document.getElementById(id);
                if (sectionElement && window.scrollY >= sectionElement.offsetTop - 160) {
                    nextActive = id;
                    break;
                }
            }
            const previousState = scrollStateRef.current;

            if (previousState.scrolled !== nextScrolled) {
                setScrolled(nextScrolled);
            }

            if (previousState.activeSection !== nextActive) {
                setActiveSection(nextActive);
            }

            if (Math.abs(previousState.scrollProgress - nextScrollProgress) > 0.2) {
                setScrollProgress(nextScrollProgress);
            }

            scrollStateRef.current = {
                scrolled: nextScrolled,
                activeSection: nextActive,
                scrollProgress: nextScrollProgress,
            };
        };

        const handleScroll = () => {
            if (scrollFrameRef.current !== null) {
                return;
            }

            scrollFrameRef.current = window.requestAnimationFrame(() => {
                scrollFrameRef.current = null;
                updateScrollState();
            });
        };

        updateScrollState();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            if (scrollFrameRef.current !== null) {
                window.cancelAnimationFrame(scrollFrameRef.current);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!mobileOpen) {
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("padding-right");
            return;
        }

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        return () => {
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("padding-right");
        };
    }, [mobileOpen]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMobileOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <motion.header
                initial={shouldReduceMotion ? false : { y: -96 }}
                animate={{ y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                    scrolled ? "glass-nav shadow-strong" : "bg-transparent"
                }`}
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-white/5">
                    <motion.div
                        className="h-full bg-gradient-gold"
                        animate={{ width: `${scrollProgress}%` }}
                        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.12, ease: "easeOut" }}
                    />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <a href="#hero" className="group relative flex flex-col items-start leading-none">
                            <motion.span
                                className="flex items-baseline text-xl font-black tracking-tight text-white transition-all duration-300 group-hover:text-gold-400 sm:text-2xl"
                                whileHover={{ scale: 1.02 }}
                            >
                                CA <span className="text-gradient inline-block">Poonam</span> Pathak
                            </motion.span>
                            <motion.span
                                className="text-[9px] font-medium tracking-[0.22em] text-gold-400/80 uppercase sm:text-[10px] sm:tracking-[0.25em]"
                                whileHover={{ letterSpacing: "0.28em" }}
                                transition={{ duration: 0.28 }}
                            >
                                Chartered Accountant
                            </motion.span>
                            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </a>

                        <nav className="hidden items-center gap-1 lg:flex">
                            {navLinks.map((link) => {
                                const sectionId = link.href.startsWith("#") ? link.href.replace("#", "") : "";
                                const isActive = sectionId ? activeSection === sectionId : false;

                                return (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        whileHover={{ scale: 1.04, y: -1 }}
                                        whileTap={{ scale: 0.97 }}
                                        className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                            isActive
                                                ? "text-gold-400 bg-gold-500/10"
                                                : "text-white/80 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold-400"
                                                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}
                        </nav>

                        <div className="hidden items-center gap-3 lg:flex">
                            <motion.a
                                href={`tel:${CONTACT_PHONE}`}
                                whileHover={{ scale: 1.04, y: -1 }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-gold-300"
                            >
                                <Phone className="h-4 w-4" />
                                {CONTACT_PHONE_DISPLAY}
                            </motion.a>

                            <motion.a
                                href={`mailto:${CONTACT_EMAIL}`}
                                whileHover={{ scale: 1.04, y: -1 }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                                aria-label="Send email"
                            >
                                <Mail className="h-4 w-4" />
                                Email
                            </motion.a>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 0 40px rgba(212,175,55,0.55)" }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3 text-sm font-bold text-navy-deep shadow-glow"
                            >
                                <CalendarClock className="h-4 w-4" />
                                Book Consultation
                                <ArrowRight className="h-4 w-4" />
                            </motion.a>
                        </div>

                        <motion.button
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
                            onClick={() => setMobileOpen((prev) => !prev)}
                            className="rounded-xl border border-white/10 p-2.5 text-white transition-all duration-300 hover:bg-white/10 lg:hidden"
                            aria-label="Toggle menu"
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-menu"
                        >
                            <AnimatePresence mode="wait">
                                {mobileOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-40 bg-navy-deep/90 backdrop-blur-md lg:hidden"
                        />

                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={
                                shouldReduceMotion
                                    ? { duration: 0 }
                                    : { type: "spring", damping: 24, stiffness: 210 }
                            }
                            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-gradient-navy shadow-2xl lg:hidden"
                        >
                            <div className="flex h-full flex-col">
                                <div className="border-b border-white/10 p-6">
                                    <div className="mb-5 flex items-center justify-between">
                                        <div>
                                            <p className="text-xl font-black text-white">Menu</p>
                                            <p className="text-xs text-gold-400/70">Strategic financial advisory</p>
                                        </div>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setMobileOpen(false)}
                                            className="rounded-xl border border-transparent p-2.5 text-white/60 transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:text-white"
                                            aria-label="Close menu"
                                        >
                                            <X className="h-6 w-6" />
                                        </motion.button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <a
                                            href={`tel:${CONTACT_PHONE}`}
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-semibold text-white/80"
                                        >
                                            <Phone className="h-4 w-4" />
                                            Call
                                        </a>
                                        <a
                                            href={`mailto:${CONTACT_EMAIL}`}
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-semibold text-white/80"
                                        >
                                            <Mail className="h-4 w-4" />
                                            Email
                                        </a>
                                    </div>
                                </div>

                                <nav className="flex-1 space-y-2 overflow-y-auto p-6">
                                    {navLinks.map((link, index) => {
                                        const sectionId = link.href.startsWith("#") ? link.href.replace("#", "") : "";
                                        const isActive = sectionId ? activeSection === sectionId : false;

                                        return (
                                            <motion.a
                                                key={link.href}
                                                href={link.href}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                onClick={() => setMobileOpen(false)}
                                                className={`flex items-center justify-between rounded-xl px-5 py-4 text-lg font-semibold transition-all duration-300 ${
                                                    isActive
                                                        ? "border border-gold-500/30 bg-gold-500/20 text-gold-400 shadow-glow"
                                                        : "text-white/80 hover:bg-white/5 hover:text-white"
                                                }`}
                                            >
                                                <span>{link.label}</span>
                                                <ChevronRight className={`h-5 w-5 ${isActive ? "text-gold-400" : "text-white/30"}`} />
                                            </motion.a>
                                        );
                                    })}
                                </nav>

                                <div className="space-y-3 border-t border-white/10 p-6">
                                    <motion.a
                                        href="#contact"
                                        onClick={() => setMobileOpen(false)}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-3 rounded-xl bg-gradient-gold py-4 text-center text-sm font-bold text-navy-deep shadow-glow"
                                    >
                                        <CalendarClock className="h-4 w-4" />
                                        Book Consultation
                                    </motion.a>
                                    <p className="text-center text-xs text-white/40">
                                        Prefer chat? WhatsApp is available from the floating button.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
