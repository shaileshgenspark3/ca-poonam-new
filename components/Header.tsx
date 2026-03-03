"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Speaking", href: "#speaking" },
    { label: "Resources", href: "#resources" },
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

            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
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
                    scrolled
                        ? "glass-dark shadow-2xl"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#" className="flex flex-col leading-none group items-center">
                            <span className="font-black text-2xl text-white tracking-tight transition-all duration-300 group-hover:text-gold-400 flex items-baseline">
                                CA <span className="text-gradient">Poonam</span> Pathak
                            </span>
                            <span className="text-[10px] text-gold-400/80 tracking-[0.25em] uppercase font-medium">
                                Chartered Accountant
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    whileHover={{ scale: 1.05 }}
                                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                                        activeSection === link.href.replace("#", "")
                                            ? "text-gold-400"
                                            : "text-white/80 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                    {activeSection === link.href.replace("#", "") && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {/* Hover Background */}
                                    <div 
                                        className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
                                            activeSection === link.href.replace("#", "") 
                                                ? "bg-gold-500/10" 
                                                : "opacity-0 hover:opacity-100 hover:bg-white/5"
                                        }`}
                                    />
                                </motion.a>
                            ))}
                        </nav>

                        {/* Right Actions */}
                        <div className="hidden lg:flex items-center gap-3">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gold-400 border border-gold-500/30 rounded-xl hover:border-gold-500/60 hover:bg-gold-500/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                <Lock className="w-3.5 h-3.5" />
                                Client Portal
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 text-sm font-bold text-navy-deep bg-gradient-gold rounded-xl hover:shadow-gold transition-all duration-300"
                            >
                                Book Consultation
                            </motion.a>
                        </div>

                        {/* Mobile Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-40 bg-navy-deep/80 backdrop-blur-sm lg:hidden"
                        />
                        
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-gradient-navy shadow-2xl lg:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <div>
                                        <p className="text-xl font-black text-white">Menu</p>
                                        <p className="text-xs text-gold-400/60">Navigate the site</p>
                                    </div>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setMobileOpen(false)}
                                        className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.button>
                                </div>

                                {/* Nav Links */}
                                <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                                    {navLinks.map((link, i) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            onClick={() => setMobileOpen(false)}
                                            className={`block px-4 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                                                activeSection === link.href.replace("#", "")
                                                    ? "bg-gold-500/20 text-gold-400 border border-gold-500/30"
                                                    : "text-white/80 hover:bg-white/5 hover:text-white"
                                            }`}
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))}
                                </nav>

                                {/* Footer Actions */}
                                <div className="p-6 border-t border-white/10 space-y-3">
                                    <motion.a
                                        href="#contact"
                                        onClick={() => setMobileOpen(false)}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-gold-400 border border-gold-500/30 rounded-xl bg-gold-500/10"
                                    >
                                        <Lock className="w-4 h-4" />
                                        Client Portal
                                    </motion.a>
                                    <motion.a
                                        href="#contact"
                                        onClick={() => setMobileOpen(false)}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center py-4 text-center text-sm font-bold text-navy-deep bg-gradient-gold rounded-xl"
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
