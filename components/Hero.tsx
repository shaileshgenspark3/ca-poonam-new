"use client";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Mic, Star, Award, TrendingUp, Sparkles, ChevronRight, Play, CheckCircle2, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";

const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
        size: Math.random() * 2 + 1,
    }));
};

function HeroParticles({ particleCount }: Readonly<{ particleCount: number }>) {
    const particles = useMemo(() => generateParticles(particleCount), [particleCount]);

    return (
        <>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    initial={{
                        x: particle.x,
                        y: particle.y,
                    }}
                    animate={{
                        y: [null, particle.y - 150 - 75],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        background: "rgba(212, 175, 55, 0.7)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.9)",
                    }}
                />
            ))}
        </>
    );
}

const ClientOnlyHeroParticles = dynamic(() => Promise.resolve(HeroParticles), {
    ssr: false,
});

const confidencePoints = [
    "Board-ready financial governance guidance",
    "Dedicated advisory for NRIs and founders",
    "Clear action plans, not generic templates",
];

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);
    const [particleCount, setParticleCount] = useState(12);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const shouldSimplifyMotion = prefersReducedMotion || isMobile;

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const updateDeviceMode = () => {
            const mobileView = mediaQuery.matches;
            setIsMobile(mobileView);
            setParticleCount(mobileView ? 6 : 12);
        };

        updateDeviceMode();
        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", updateDeviceMode);
            return () => mediaQuery.removeEventListener("change", updateDeviceMode);
        }

        mediaQuery.addListener(updateDeviceMode);
        return () => mediaQuery.removeListener(updateDeviceMode);
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
        >
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary Gradient Orbs */}
                <motion.div
                    style={{ 
                        y: shouldSimplifyMotion ? "0%" : y1,
                        background: "radial-gradient(circle, rgba(212,175,55,0.35) 0%, transparent 70%)",
                        filter: shouldSimplifyMotion ? "blur(38px)" : "blur(80px)",
                    }}
                    animate={
                        shouldSimplifyMotion
                            ? { scale: 1, opacity: 0.4 }
                            : {
                                  scale: [1, 1.3, 1],
                                  opacity: [0.4, 0.6, 0.4],
                              }
                    }
                    transition={
                        shouldSimplifyMotion
                            ? { duration: 0.3 }
                            : { duration: 10, repeat: Infinity }
                    }
                    className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full"
                />
                <motion.div
                    style={{ 
                        y: shouldSimplifyMotion ? "0%" : y2,
                        background: "radial-gradient(circle, rgba(102,126,234,0.35) 0%, transparent 70%)",
                        filter: shouldSimplifyMotion ? "blur(38px)" : "blur(80px)",
                    }}
                    animate={
                        shouldSimplifyMotion
                            ? { scale: 1.15, opacity: 0.3 }
                            : {
                                  scale: [1.4, 1, 1.4],
                                  opacity: [0.25, 0.45, 0.25],
                              }
                    }
                    transition={
                        shouldSimplifyMotion
                            ? { duration: 0.3 }
                            : { duration: 12, repeat: Infinity }
                    }
                    className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full"
                />
                {!shouldSimplifyMotion && (
                    <motion.div
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.2, 0.35, 0.2],
                        }}
                        transition={{ duration: 14, repeat: Infinity }}
                        className="absolute top-1/3 left-1/3 w-[900px] h-[900px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(118,75,162,0.18) 0%, transparent 70%)",
                            filter: "blur(100px)",
                        }}
                    />
                )}

                {/* Secondary Accent Orbs */}
                {!shouldSimplifyMotion && (
                    <>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.15, 0.25, 0.15],
                            }}
                            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                            className="absolute top-20 right-1/4 w-64 h-64 rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 60%)",
                                filter: "blur(40px)",
                            }}
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                            className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(30,58,95,0.3) 0%, transparent 60%)",
                                filter: "blur(50px)",
                            }}
                        />
                    </>
                )}
                
                {/* Animated Grid Pattern */}
                <motion.div 
                    animate={
                        shouldSimplifyMotion
                            ? { opacity: 0.02 }
                            : {
                                  opacity: [0.02, 0.04, 0.02],
                              }
                    }
                    transition={shouldSimplifyMotion ? { duration: 0.3 } : { duration: 6, repeat: Infinity }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
                        `,
                        backgroundSize: "48px 48px"
                    }}
                />
                
                {/* Subtle Noise Texture */}
                <div className="absolute inset-0 texture-noise opacity-[0.03]" />
                
                {!prefersReducedMotion && <ClientOnlyHeroParticles particleCount={particleCount} />}
            </div>

            {!shouldSimplifyMotion && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/4 right-[10%] w-16 h-16 opacity-10"
                    >
                        <Sparkles className="w-full h-full text-gold-400" />
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, -25, 0],
                            rotate: [0, -5, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-1/3 left-[5%] w-12 h-12 opacity-10"
                    >
                        <Star className="w-full h-full text-gold-400" />
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, -35, 0],
                            rotate: [0, 8, 0],
                        }}
                        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                        className="absolute top-1/2 right-[20%] w-10 h-10 opacity-10"
                    >
                        <Award className="w-full h-full text-gold-400" />
                    </motion.div>
                </div>
            )}

            <motion.div 
                style={{ opacity: shouldSimplifyMotion ? 1 : opacity }}
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full"
            >
                <div className="grid lg:grid-cols-2 gap-16 items-center lg:items-center">

                    {/* Left Content */}
                    <div className="text-left lg:text-left relative z-10">
                        {/* Animated Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="inline-flex items-center gap-3 px-8 py-4 mb-10 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm shadow-glow"
                            style={{ zIndex: 50 }}
                        >
                            <motion.div
                                animate={shouldSimplifyMotion ? { rotate: 0 } : { rotate: [0, 360] }}
                                transition={
                                    shouldSimplifyMotion
                                        ? { duration: 0.2 }
                                        : { duration: 4, repeat: Infinity, ease: "linear" }
                                }
                            >
                                <Sparkles className="w-5 h-5 text-gold-400" />
                            </motion.div>
                            <span className="text-gold-400 text-sm font-bold tracking-widest uppercase">
                                Award-Winning Advisory Excellence
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8"
                        >
                            CA Poonam
                            <br />
                            <motion.span 
                                className="text-gradient inline-block"
                                animate={
                                    shouldSimplifyMotion
                                        ? { backgroundPosition: "0% 50%" }
                                        : {
                                              backgroundPosition: ["0% 50%", "200% 50%"],
                                          }
                                }
                                transition={
                                    shouldSimplifyMotion
                                        ? { duration: 0.2 }
                                        : { duration: 4, repeat: Infinity, ease: "linear" }
                                }
                            >
                                Pathak
                            </motion.span>
                        </motion.h1>

                        {/* Role Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-wrap gap-3 mb-10"
                        >
                            {[
                                { label: "Chartered Accountant", delay: 0 },
                                { label: "Business Advisor", delay: 0.1 },
                                { label: "Independent Director", delay: 0.2 }
                            ].map((role, i) => (
                                <motion.span
                                    key={role.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + role.delay, ease: "easeOut" }}
                                    className="px-6 py-3 text-sm font-semibold text-white/90 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/15 hover:border-gold-500/30 transition-all duration-300"
                                >
                                    {role.label}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                            className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl text-balance"
                        >
                            Empowering Corporates, NRIs, and Entrepreneurs to navigate complex
                            regulatory landscapes with{" "}
                            <span className="text-gold-400 font-semibold">clarity</span>,{" "}
                            <span className="text-gold-400 font-semibold">confidence</span>, and{" "}
                            <span className="text-gold-400 font-semibold">strategic precision</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
                            className="mb-10 grid gap-3 sm:grid-cols-2"
                        >
                            {confidencePoints.map((point) => (
                                <div
                                    key={point}
                                    className="flex items-start gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm"
                                >
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                                    <p className="text-sm text-white/80">{point}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.36, ease: "easeOut" }}
                            className="mb-12 flex flex-wrap gap-3"
                        >
                            {["ICAI Peer Reviewer", "IICA Independent Director", "500+ Advisory Engagements"].map((proof) => (
                                <span
                                    key={proof}
                                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white/80"
                                >
                                    {proof}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-wrap gap-3 sm:gap-4 mb-14 w-full sm:w-auto items-center"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex-1 sm:flex-none"
                            >
                                <Button size="xl" className="w-full group">
                                    Book a Consultation
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.a>
                            <motion.a
                                href="#speaking"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex-1 sm:flex-none"
                            >
                                <Button variant="outline" size="xl" className="w-full group">
                                    <Mic className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                    Invite to Speak
                                    <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </Button>
                            </motion.a>
                            <motion.a
                                href="#services"
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-gold-300 transition-colors"
                            >
                                Explore Services
                                <ChevronRight className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                href="https://www.youtube.com/watch?v=Vr67olnhfSk"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/80 hover:border-gold-500/40 hover:text-gold-300 transition-all"
                            >
                                <Play className="w-4 h-4" />
                                Watch Featured Talk
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 26 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                            className="mb-10 inline-flex max-w-xl items-center gap-3 rounded-2xl border border-gold-500/25 bg-gold-500/10 px-5 py-3"
                        >
                            <CalendarClock className="h-5 w-5 text-gold-400" />
                            <p className="text-sm text-white/80">
                                Next onboarding slots available this week for tax planning and compliance retainers.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                            className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-white/10 pt-10"
                        >
                            {[
                                { value: "8+", label: "Years Expertise", icon: TrendingUp, delay: 0 },
                                { value: "4.8★", label: "Client Rating", icon: Star, delay: 0.1 },
                                { value: "500+", label: "Clients Served", icon: Award, delay: 0.2 },
                            ].map(({ value, label, icon: Icon, delay }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + delay, ease: "easeOut" }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col group cursor-default"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <motion.div
                                            animate={shouldSimplifyMotion ? { rotate: 0 } : { rotate: [0, 360] }}
                                            transition={
                                                shouldSimplifyMotion
                                                    ? { duration: 0.2 }
                                                    : { duration: 20 + i * 5, repeat: Infinity, ease: "linear" }
                                            }
                                        >
                                            <Icon className="w-4 h-4 text-gold-400 group-hover:text-gold-300 transition-colors" />
                                        </motion.div>
                                        <motion.span 
                                            className="text-3xl font-black text-gold-400 group-hover:text-gold-300 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {value}
                                        </motion.span>
                                    </div>
                                    <span className="text-[11px] sm:text-xs text-white/50 font-medium">{label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right – Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {!shouldSimplifyMotion && (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-3xl border-2 border-dashed border-gold-500/15"
                                        style={{ transform: "translate(-30px, -30px)" }}
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-3xl border-2 border-dashed border-gold-500/10"
                                        style={{ transform: "translate(30px, 30px)" }}
                                    />
                                    <motion.div
                                        animate={{ rotate: 180 }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-3xl border border-solid border-gold-500/5"
                                        style={{ transform: "translate(-15px, -15px)" }}
                                    />
                                </>
                            )}
                            
                            {/* Glow Effect */}
                            {!shouldSimplifyMotion && (
                                <div
                                    className="absolute inset-0 rounded-3xl animate-pulse-slow"
                                    style={{
                                        background: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.35), transparent 70%)",
                                        filter: "blur(60px)",
                                    }}
                                />
                            )}
                            
                            {/* Main Portrait Box */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] md:w-[380px] md:h-[520px] lg:w-[420px] lg:h-[560px] rounded-3xl overflow-hidden shadow-strong"
                                style={{
                                    background: "linear-gradient(160deg, #1e3a5f 0%, #0a1628 100%)",
                                    border: "1px solid rgba(212, 175, 55, 0.4)",
                                    boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 80px rgba(212,175,55,0.25)",
                                }}
                            >
                                 {/* Professional Headshot */}
                                 <Image
                                     src="/images/headshot.png"
                                     alt="CA Poonam Pathak - Professional Headshot"
                                     fill
                                     className="object-cover"
                                     priority
                                     sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                                 />

                                {/* Gradient Overlay */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1/3"
                                    style={{ background: "linear-gradient(to top, #0a1628, transparent)" }}
                                />

                                {/* Name Card */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                                    className="absolute bottom-6 left-6 right-6"
                                >
                                    <div
                                        className="p-6 rounded-2xl glass-premium"
                                    >
                                        <p className="text-white font-bold text-base">CA Poonam Pathak</p>
                                        <p className="text-gold-400 text-xs mt-2 flex items-center gap-2 font-medium">
                                            <Award className="w-4 h-4" />
                                            IICA Qualified Independent Director
                                        </p>
                                    </div>
                                </motion.div>
                                
                                {/* Top Badge */}
                                <motion.div
                                    initial={{ x: 30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
                                    className="absolute top-6 right-6"
                                >
                                    <div
                                        className={`px-4 py-2 rounded-full text-xs font-bold shadow-glow ${shouldSimplifyMotion ? "" : "animate-bounce-subtle"}`}
                                        style={{
                                            background: "linear-gradient(135deg, #d4af37, #e8c547)",
                                            color: "#0a1628",
                                        }}
                                    >
                                        ★ Top Rated
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.35, duration: 0.6, ease: "easeOut" }}
                                    className="absolute top-6 left-6 max-w-[200px]"
                                >
                                    <div className="rounded-xl border border-white/20 bg-navy-deep/65 px-4 py-3 backdrop-blur-md">
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                                            Client Experience
                                        </p>
                                        <p className="mt-1 text-sm font-bold text-white">
                                            Dedicated advisory + fast response workflow
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Side Accent Lines */}
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0" />
                                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0" />
                            </motion.div>

                            {/* Floating Elements */}
                            {!shouldSimplifyMotion && (
                                <>
                                    <motion.div
                                        animate={{ 
                                            y: [0, -15, 0],
                                            rotate: [0, 5, 0],
                                        }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 backdrop-blur-sm border border-gold-500/30 flex items-center justify-center shadow-glow"
                                    >
                                        <Star className="w-10 h-10 text-gold-400 fill-gold-400" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ 
                                            y: [0, -12, 0],
                                            rotate: [0, -5, 0],
                                        }}
                                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                                    >
                                        <Award className="w-8 h-8 text-blue-400" />
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Fade */}
            <div 
                className="absolute bottom-0 left-0 right-0 h-40"
                style={{ background: "linear-gradient(to bottom, transparent, #fafbfe)" }}
            />

            {/* Scroll Indicator */}
            {!shouldSimplifyMotion && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                >
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ChevronRight className="w-5 h-5 rotate-90" />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
