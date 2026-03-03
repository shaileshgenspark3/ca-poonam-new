"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Mic, Star, Award, TrendingUp, Sparkles } from "lucide-react";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-navy"
        >
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(102,126,234,0.3) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(118,75,162,0.15) 0%, transparent 70%)",
                        filter: "blur(80px)",
                    }}
                />
                
                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
                
                {/* Floating Particles - Client only */}
                {mounted && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                        }}
                        animate={{
                            y: [null, Math.random() * -100 - 50],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                        className="absolute w-1 h-1 bg-gold-400 rounded-full"
                        style={{
                            background: "rgba(212, 175, 55, 0.6)",
                            boxShadow: "0 0 10px rgba(212, 175, 55, 0.8)",
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center lg:items-center">

                    {/* Left Content */}
                    <div className="text-left lg:text-left">
                        {/* Animated Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm"
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="w-4 h-4 text-gold-400" />
                            </motion.div>
                            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">
                                Top 40 FinFluencer of the Year 2024
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
                        >
                            CA Poonam
                            <br />
                            <span className="text-gradient">Pathak</span>
                        </motion.h1>

                        {/* Role Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {["Chartered Accountant", "Business Advisor", "Independent Director"].map((role, i) => (
                                <motion.span
                                    key={role}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="px-4 py-2 text-xs font-semibold text-white/90 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
                                >
                                    {role}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl"
                        >
                            Empowering Corporates, NRIs, and Entrepreneurs to navigate complex
                            regulatory landscapes with <span className="text-gold-400 font-semibold">clarity</span>, <span className="text-gold-400 font-semibold">confidence</span>, and <span className="text-gold-400 font-semibold">strategic precision</span>.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-3 px-8 py-4 text-sm font-bold text-navy-deep bg-gradient-gold rounded-xl hover:shadow-gold transition-all duration-300"
                            >
                                Book a Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#speaking"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-8 py-4 text-sm font-bold text-white border-2 border-white/30 rounded-xl hover:border-gold-400 hover:text-gold-400 transition-all duration-300 backdrop-blur-sm bg-white/5"
                            >
                                <Mic className="w-4 h-4" />
                                Invite to Speak
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
                        >
                            {[
                                { value: "8+", label: "Years Expertise", icon: TrendingUp },
                                { value: "4.8★", label: "Client Rating", icon: Star },
                                { value: "500+", label: "Clients Served", icon: Award },
                            ].map(({ value, label, icon: Icon }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex flex-col"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <Icon className="w-4 h-4 text-gold-400" />
                                        <span className="text-3xl font-black text-gold-400">{value}</span>
                                    </div>
                                    <span className="text-xs text-white/50 font-medium">{label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right – Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Decorative Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-3xl border-2 border-dashed border-gold-500/20"
                                style={{ transform: "translate(-20px, -20px)" }}
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-3xl border-2 border-dashed border-gold-500/10"
                                style={{ transform: "translate(20px, 20px)" }}
                            />
                            
                            {/* Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-3xl"
                                style={{
                                    background: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.3), transparent 70%)",
                                    filter: "blur(40px)",
                                }}
                            />
                            
                            {/* Main Portrait Box */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative w-80 h-[480px] sm:w-96 sm:h-[540px] rounded-3xl overflow-hidden"
                                style={{
                                    background: "linear-gradient(160deg, #1e3a5f 0%, #0a1628 100%)",
                                    border: "1px solid rgba(212, 175, 55, 0.3)",
                                    boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(212,175,55,0.2)",
                                }}
                            >
                                 {/* Professional Headshot */}
                                 <Image
                                     src="/images/headshot.png"
                                     alt="CA Poonam Pathak - Professional Headshot"
                                     fill
                                     className="object-cover"
                                     priority
                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                 />

                                {/* Gradient Overlay */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1/3"
                                    style={{ background: "linear-gradient(to top, #0a1628, transparent)" }}
                                />

                                {/* Name Card */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="absolute bottom-6 left-6 right-6"
                                >
                                    <div
                                        className="p-5 rounded-2xl"
                                        style={{
                                            background: "rgba(10,22,40,0.95)",
                                            backdropFilter: "blur(20px)",
                                            border: "1px solid rgba(212,175,55,0.3)",
                                            boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        <p className="text-white font-bold text-sm">CA Poonam Pathak</p>
                                        <p className="text-gold-400 text-xs mt-1 flex items-center gap-1">
                                            <Award className="w-3 h-3" />
                                            IICA Qualified Independent Director
                                        </p>
                                    </div>
                                </motion.div>
                                
                                {/* Top Badge */}
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="absolute top-6 right-6"
                                >
                                    <div
                                        className="px-3 py-2 rounded-full text-xs font-bold"
                                        style={{
                                            background: "linear-gradient(135deg, #d4af37, #b8941f)",
                                            color: "#0a1628",
                                            boxShadow: "0 4px 15px rgba(212,175,55,0.4)",
                                        }}
                                    >
                                        ★ Top Rated
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div 
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: "linear-gradient(to bottom, transparent, #fafbfe)" }}
            />
        </section>
    );
}
