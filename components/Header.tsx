"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Speaking", href: "#speaking" },
    { label: "Resources", href: "#resources" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sectionIds = navLinks
                .filter((link) => link.href.startsWith("#"))
                .map((link) => link.href.replace("#", ""));

            for (const id of sectionIds.reverse()) {
                const sectionElement = document.getElementById(id);
                if (sectionElement && window.scrollY >= sectionElement.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled ? "glass-dark shadow-2xl" : "bg-transparent"
                }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <a href="#" className="group flex flex-col items-center leading-none">
                            <span className="flex items-baseline text-xl font-black tracking-tight text-white transition-all duration-300 group-hover:text-gold-400 sm:text-2xl">
                                CA <span className="text-gradient">Poonam</span> Pathak
                            </span>
                            <span className="text-[9px] font-medium tracking-[0.2em] text-gold-400/80 uppercase sm:text-[10px] sm:tracking-[0.25em]">
                                Chartered Accountant
                            </span>
                        </a>

                        <nav className="hidden items-center gap-1 lg:flex">
                            {navLinks.map((link) => {
                                const sectionId = link.href.startsWith("#")
                                    ? link.href.replace("#", "")
                                    : "";
                                const isActive = sectionId ? activeSection === sectionId : false;

                                return (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        whileHover={{ scale: 1.05 }}
                                        className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                            isActive
                                                ? "text-gold-400"
                                                : "text-white/80 hover:text-white"
                                        }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold-400"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                        <div
                                            className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
                                                isActive
                                                    ? "bg-gold-500/10"
                                                    : "opacity-0 hover:opacity-100 hover:bg-white/5"
                                            }`}
                                        />
                                    </motion.a>
                                );
                            })}
                        </nav>

                        <div className="hidden items-center gap-3 lg:flex">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 rounded-xl border border-gold-500/30 px-6 py-3 text-sm font-semibold text-gold-400 transition-all duration-300 hover:border-gold-500/60 hover:bg-gold-500/10"
                            >
                                <Lock className="h-4 w-4" />
                                Client Portal
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-xl bg-gradient-gold px-8 py-4 text-base font-bold text-navy-deep transition-all duration-300 hover:shadow-gold"
                            >
                                Book Consultation
                            </motion.a>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                            className="fixed inset-0 z-40 bg-navy-deep/80 backdrop-blur-sm lg:hidden"
                        />

                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-gradient-navy shadow-2xl lg:hidden"
                        >
                            <div className="flex h-full flex-col">
                                <div className="flex items-center justify-between border-b border-white/10 p-6">
                                    <div>
                                        <p className="text-xl font-black text-white">Menu</p>
                                        <p className="text-xs text-gold-400/60">Navigate the site</p>
                                    </div>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-lg p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.button>
                                </div>

                                <nav className="flex-1 space-y-2 overflow-y-auto p-6">
                                    {navLinks.map((link, index) => {
                                        const sectionId = link.href.startsWith("#")
                                            ? link.href.replace("#", "")
                                            : "";
                                        const isActive = sectionId ? activeSection === sectionId : false;

                                        return (
                                            <motion.a
                                                key={link.href}
                                                href={link.href}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                onClick={() => setMobileOpen(false)}
                                                className={`block rounded-xl px-4 py-4 text-lg font-semibold transition-all duration-300 ${
                                                    isActive
                                                        ? "border border-gold-500/30 bg-gold-500/20 text-gold-400"
                                                        : "text-white/80 hover:bg-white/5 hover:text-white"
                                                }`}
                                            >
                                                {link.label}
                                            </motion.a>
                                        );
                                    })}
                                </nav>

                                <div className="space-y-3 border-t border-white/10 p-6">
                                    <motion.a
                                        href="#contact"
                                        onClick={() => setMobileOpen(false)}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-2 rounded-xl border border-gold-500/30 bg-gold-500/10 py-4 text-sm font-semibold text-gold-400"
                                    >
                                        <Lock className="h-4 w-4" />
                                        Client Portal
                                    </motion.a>
                                    <motion.a
                                        href="#contact"
                                        onClick={() => setMobileOpen(false)}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center rounded-xl bg-gradient-gold py-4 text-center text-sm font-bold text-navy-deep"
                                    >
                                        Book Consultation
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
