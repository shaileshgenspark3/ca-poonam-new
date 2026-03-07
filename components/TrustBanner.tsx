"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Award, Shield, CheckCircle, BookOpen, Users, Star } from "lucide-react";

const credentials = [
    { label: "ICAI Member", sub: "Institute of Chartered Accountants", logo: "/images/icai-logo.png", hasLogo: true, icon: Shield },
    { label: "Josh Talks Speaker", sub: "Featured National Speaker", logo: "/images/josh-talk-logo.png", hasLogo: true, icon: Star },
    { label: "WIRC Star Women", sub: "Excellence in CA", logo: "/images/wirc-logo.jpg", hasLogo: true, icon: Award },
    { label: "Top 40 FinFluencer", sub: "FTLD – Year 2024", hasLogo: false, icon: Award },
    { label: "IICA Qualified", sub: "Independent Director", hasLogo: false, icon: Shield },
    { label: "Peer Reviewer", sub: "ICAI Audit Quality", hasLogo: false, icon: CheckCircle },
    { label: "POSH Author", sub: "Published Handbook", hasLogo: false, icon: BookOpen },
    { label: "Direct Tax Committee", sub: "ICAI Member", hasLogo: false, icon: Users },
];

const duplicatedCredentials = [...credentials, ...credentials];

export default function TrustBanner() {
    const shouldReduceMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const updateLayout = () => setIsMobile(mediaQuery.matches);

        updateLayout();
        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", updateLayout);
            return () => mediaQuery.removeEventListener("change", updateLayout);
        }

        mediaQuery.addListener(updateLayout);
        return () => mediaQuery.removeListener(updateLayout);
    }, []);

    const shouldAnimateTicker = !shouldReduceMotion && !isMobile;
    const bannerItems = shouldAnimateTicker ? duplicatedCredentials : credentials;

    return (
        <section className="relative overflow-hidden border-y border-slate-200 bg-gradient-mesh py-16">
            <div className="absolute inset-0 pattern-dots opacity-[0.02]" />

            <div className="relative z-10 mx-auto mb-10 max-w-7xl px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 rounded-full border border-gold-500/20 bg-gold-500/10 px-6 py-3 shadow-glow"
                >
                    <motion.div
                        animate={shouldAnimateTicker ? { rotate: [0, 360] } : { rotate: 0 }}
                        transition={shouldAnimateTicker ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
                    >
                        <Award className="h-5 w-5 text-gold-500" />
                    </motion.div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gold-600">
                        Credentialed & Recognized By
                    </span>
                </motion.div>
            </div>

            <div className="relative overflow-hidden">
                {shouldAnimateTicker && (
                    <>
                        <div
                            className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32"
                            style={{ background: "linear-gradient(to right, #fafbfe, transparent)" }}
                        />
                        <div
                            className="pointer-events-none absolute top-0 bottom-0 right-0 z-10 w-32"
                            style={{ background: "linear-gradient(to left, #fafbfe, transparent)" }}
                        />
                    </>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 px-4 py-4 select-none sm:gap-12 sm:px-8 ${
                        shouldAnimateTicker ? "logo-scroll ticker-animate whitespace-nowrap" : "flex-wrap justify-center"
                    }`}
                >
                    {bannerItems.map((item, index) => (
                        <motion.div
                            key={`${item.label}-${index}`}
                            initial={shouldAnimateTicker ? { opacity: 0, y: 20 } : false}
                            whileInView={shouldAnimateTicker ? { opacity: 1, y: 0 } : undefined}
                            viewport={{ once: true }}
                            transition={shouldAnimateTicker ? { delay: index * 0.03 } : undefined}
                            whileHover={isMobile ? undefined : { scale: 1.04 }}
                            className="group flex min-w-[160px] flex-shrink-0 cursor-default flex-col items-center px-4 text-center sm:min-w-[180px] sm:px-6"
                        >
                            <motion.div
                                whileHover={isMobile ? undefined : { y: -4, rotate: 3 }}
                                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border-2 p-2 shadow-soft transition-all duration-500 sm:h-16 sm:w-16 ${
                                    item.hasLogo
                                        ? "border-slate-200 bg-white group-hover:border-gold-500/50 group-hover:shadow-glow"
                                        : "border-slate-200 bg-slate-50 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 group-hover:shadow-glow"
                                }`}
                            >
                                {item.hasLogo ? (
                                    <Image
                                        src={item.logo!}
                                        alt={item.label}
                                        width={56}
                                        height={56}
                                        sizes="56px"
                                        loading={index > 3 ? "lazy" : "eager"}
                                        className="h-full w-full object-contain transition-transform group-hover:scale-110"
                                    />
                                ) : (
                                    <item.icon className="h-6 w-6 text-gold-500 transition-transform group-hover:scale-110" />
                                )}
                            </motion.div>
                            <p className="mb-1 text-sm leading-tight font-bold text-slate-800 transition-colors group-hover:text-slate-900">
                                {item.label}
                            </p>
                            <p className="max-w-[150px] text-xs leading-tight text-slate-400 transition-colors group-hover:text-slate-500">
                                {item.sub}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
