"use client";
import { useEffect, useState } from "react";
import { CalendarClock, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const updateScrollState = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks
                .filter((link) => link.href.startsWith("#"))
                .map((link) => link.href.replace("#", ""));

            let current = "hero";
            for (const sectionId of sections) {
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement && window.scrollY >= sectionElement.offsetTop - 120) {
                    current = sectionId;
                }
            }
            setActiveSection(current);
        };

        updateScrollState();
        window.addEventListener("scroll", updateScrollState, { passive: true });
        return () => window.removeEventListener("scroll", updateScrollState);
    }, []);

    useEffect(() => {
        if (!mobileOpen) {
            document.body.style.removeProperty("overflow");
            return;
        }

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.removeProperty("overflow");
        };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
                    scrolled
                        ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
                        : "border-b border-slate-100 bg-white/90 backdrop-blur"
                }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <a href="#hero" className="flex flex-col leading-none">
                        <span className="text-lg font-black text-navy-deep sm:text-xl">CA Poonam Pathak</span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                            Chartered Accountant
                        </span>
                    </a>

                    <nav className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => {
                            const sectionId = link.href.startsWith("#") ? link.href.replace("#", "") : "";
                            const isActive = sectionId && activeSection === sectionId;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                                        isActive
                                            ? "bg-gold-500/10 text-gold-700"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="hidden items-center gap-2 lg:flex">
                        <a
                            href={`tel:${CONTACT_PHONE}`}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-gold-500 hover:text-slate-900"
                        >
                            <Phone className="h-4 w-4" />
                            {CONTACT_PHONE_DISPLAY}
                        </a>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-gold-500 hover:text-slate-900"
                            aria-label="Send email"
                        >
                            <Mail className="h-4 w-4" />
                            Email
                        </a>
                        <a href="#contact">
                            <Button size="sm" className="h-10 px-4">
                                <CalendarClock className="h-4 w-4" />
                                Book Consultation
                            </Button>
                        </a>
                    </div>

                    <button
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="inline-flex rounded-lg border border-slate-200 bg-white p-2 text-slate-700 lg:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </header>

            {mobileOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden" aria-label="Mobile menu" id="mobile-menu">
                    <button
                        className="absolute inset-0 bg-slate-900/45"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close mobile menu"
                    />
                    <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-2xl">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-lg font-bold text-navy-deep">Menu</p>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg border border-slate-200 p-2 text-slate-700"
                                aria-label="Close menu"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="mt-auto space-y-3 pt-8">
                            <a
                                href={`tel:${CONTACT_PHONE}`}
                                className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
                            >
                                <Phone className="h-4 w-4" />
                                {CONTACT_PHONE_DISPLAY}
                            </a>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
                            >
                                <Mail className="h-4 w-4" />
                                {CONTACT_EMAIL}
                            </a>
                            <a href="#contact" onClick={() => setMobileOpen(false)} className="block">
                                <Button className="w-full">
                                    <CalendarClock className="h-4 w-4" />
                                    Book Consultation
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
