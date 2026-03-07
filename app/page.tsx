import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";

function SectionFallback({ minHeightClass }: Readonly<{ minHeightClass: string }>) {
    return (
        <section aria-hidden="true" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`w-full rounded-3xl bg-slate-100/80 ${minHeightClass}`} />
            </div>
        </section>
    );
}

const About = dynamic(() => import("@/components/About"), {
    loading: () => <SectionFallback minHeightClass="h-[900px]" />,
});
const Services = dynamic(() => import("@/components/Services"), {
    loading: () => <SectionFallback minHeightClass="h-[980px]" />,
});
const Speaking = dynamic(() => import("@/components/Speaking"), {
    loading: () => <SectionFallback minHeightClass="h-[740px]" />,
});
const Resources = dynamic(() => import("@/components/Resources"), {
    loading: () => <SectionFallback minHeightClass="h-[920px]" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
    loading: () => <SectionFallback minHeightClass="h-[760px]" />,
});
const LeadMagnet = dynamic(() => import("@/components/LeadMagnet"), {
    loading: () => <SectionFallback minHeightClass="h-[760px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
    loading: () => <SectionFallback minHeightClass="h-[880px]" />,
});
import WhatsAppButtonClient from "@/components/WhatsAppButtonClient";

export default function Home() {
    return (
        <>
            <a
                href="#hero"
                className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-navy-deep px-4 py-2 text-sm font-semibold text-gold-400 focus:not-sr-only"
            >
                Skip to main content
            </a>
            <Header />
            <main id="main-content">
                <Hero />
                <TrustBanner />
                <About />
                <Services />
                <Speaking />
                <Resources />
                <Testimonials />
                <LeadMagnet />
            </main>
            <Footer />
            <WhatsAppButtonClient />
        </>
    );
}
