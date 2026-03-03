"use client";
import Image from "next/image";

const credentials = [
    { label: "ICAI Member", sub: "Institute of Chartered Accountants", logo: "/images/icai-logo.png", hasLogo: true },
    { label: "Josh Talks Speaker", sub: "Featured National Speaker", logo: "/images/josh-talk-logo.png", hasLogo: true },
    { label: "WIRC Star Women", sub: "Excellence in CA", logo: "/images/wirc-logo.jpg", hasLogo: true },
    { label: "Top 40 FinFluencer", sub: "FTLD – Year 2024", hasLogo: false },
    { label: "IICA Qualified", sub: "Independent Director", hasLogo: false },
    { label: "Peer Reviewer", sub: "ICAI Audit Quality", hasLogo: false },
    { label: "POSH Author", sub: "Published Handbook", hasLogo: false },
    { label: "Direct Tax Committee", sub: "ICAI Member", hasLogo: false },
];

const items = [...credentials, ...credentials];

export default function TrustBanner() {
    return (
        <section className="py-12 bg-gradient-mesh border-y border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400">
                    Credentialed & Recognized By
                </p>
            </div>
            <div className="relative overflow-hidden">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #fafbfe, transparent)" }}
                />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #fafbfe, transparent)" }}
                />

                  <div className="logo-scroll ticker-animate flex gap-16 items-center py-2 select-none">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex flex-col items-center text-center px-6 min-w-[180px] group cursor-default"
                        >
                            {/* Logo or Initials */}
                            {item.hasLogo ? (
                                <div className="w-14 h-14 rounded-2xl border-2 border-slate-200 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 flex items-center justify-center mb-3 transition-all duration-300 shadow-sm group-hover:shadow-md p-1 bg-white">
                                    <Image
                                        src={item.logo!}
                                        alt={item.label}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="w-14 h-14 rounded-2xl border-2 border-slate-200 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 flex items-center justify-center mb-3 transition-all duration-300 shadow-sm group-hover:shadow-md">
                                    <span className="text-sm font-black text-slate-400 group-hover:text-gold-600 transition-colors">
                                        {item.label.split(" ").map(w => w[0]).join("").slice(0, 2)}
                                    </span>
                                </div>
                            )}
                            <p className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors leading-tight">
                                {item.label}
                            </p>
                            <p className="text-[10px] text-slate-400 leading-tight mt-1 max-w-[150px]">
                                {item.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
