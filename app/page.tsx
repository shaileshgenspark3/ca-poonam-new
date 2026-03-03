import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Speaking from "@/components/Speaking";
import Resources from "@/components/Resources";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
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
      <WhatsAppButton />
    </>
  );
}
