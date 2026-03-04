"use client";
import { motion } from "framer-motion";
import {
    MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Youtube,
    ArrowRight, Clock, ChevronRight, Send
} from "lucide-react";
import Button from "./Button";

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

export default function Footer() {
    return (
        <footer id="contact" className="bg-gradient-navy relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            
            {/* Contact CTA Strip */}
            <div className="relative border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
                                <span className="text-xs font-bold tracking-widest uppercase text-gold-400">
                                    Let's Connect
                                </span>
                            </div>
                            
                            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                                Ready to Scale Your{" "}
                                <span className="text-gradient">Financial Strategy?</span>
                            </h2>
                            
                            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                                Book a consultation today and let CA Poonam Pathak guide your business,
                                tax planning, or compliance journey with precision and clarity.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="space-y-4">
                                <motion.a
                                    href="tel:+917506665063"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 text-white/80 hover:text-gold-400 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold">+91 7506665063</span>
                                </motion.a>
                                
                                <motion.a
                                    href="mailto:connect@capoonampathak.com"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 text-white/80 hover:text-gold-400 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold">connect@capoonampathak.com</span>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div 
                                className="p-8 rounded-3xl"
                                style={{
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    backdropFilter: "blur(20px)",
                                }}
                            >
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="text-white/50 text-sm mb-2 block">Name</label>
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-white placeholder-white/30 outline-none transition-all bg-white/5 border border-white/10 focus:border-gold-500/50 focus:bg-white/10 text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white/50 text-sm mb-2 block">Phone</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-white placeholder-white/30 outline-none transition-all bg-white/5 border border-white/10 focus:border-gold-500/50 focus:bg-white/10 text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-white/50 text-sm mb-2 block">Email</label>
                                        <input
                                            type="email"
                                            placeholder="you@company.com"
                                            className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-white placeholder-white/30 outline-none transition-all bg-white/5 border border-white/10 focus:border-gold-500/50 focus:bg-white/10 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white/50 text-sm mb-2 block">Service Required</label>
                                        <select
                                            className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-white outline-none transition-all bg-white/5 border border-white/10 focus:border-gold-500/50 focus:bg-white/10 [&>option]:bg-navy-deep text-sm"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="md"
                                        icon="arrow"
                                        fullWidth
                                        motionProps={{ whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } }}
                                    >
                                        Book a Consultation
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer Main */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-6">
                            <p className="text-3xl font-black text-white mb-2">
                                CA <span className="text-gradient">Poonam</span> Pathak
                            </p>
                            <p className="text-gold-400/80 text-xs tracking-[0.25em] uppercase font-medium">
                                Chartered Accountant · Business Advisor · Independent Director
                            </p>
                        </div>
                        
                        <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
                            Empowering businesses, NRIs, and entrepreneurs with expert financial advisory,
                            compliance, and strategic leadership. Top 40 FinFluencer of the Year 2024.
                        </p>

                        {/* Address */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-gold-400" />
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    204, Suncity Avenue, Sector 10, Kharghar,<br />
                                    Navi Mumbai – 410210, Maharashtra, India
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-gold-400" />
                                </div>
                                <p className="text-white/50 text-sm">Mon – Fri: 9:30 AM – 6:30 PM IST</p>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, label, href, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 ${color}`}
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="text-white font-bold text-sm mb-6">Quick Links</p>
                        <ul className="space-y-3">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="flex items-center gap-2 text-white/50 text-sm hover:text-gold-400 transition-all duration-300 group"
                                    >
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-white font-bold text-sm mb-6">Find Us</p>
                        <div className="rounded-2xl overflow-hidden border border-white/10 mb-4">
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
                            className="flex items-center gap-2 text-xs text-gold-400 hover:text-gold-300 transition-colors"
                        >
                            <MapPin className="w-3.5 h-3.5" />
                            Open in Google Maps
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative border-t border-white/5"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-white/30 text-xs">
                            © {new Date().getFullYear()} CA Poonam Pathak. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {["Privacy Policy", "Terms of Use", "Disclaimer"].map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-white/30 text-xs hover:text-white/60 transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
