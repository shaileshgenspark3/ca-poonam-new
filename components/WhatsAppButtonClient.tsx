"use client";
import dynamic from "next/dynamic";

const DeferredWhatsAppButton = dynamic(() => import("@/components/DeferredWhatsAppButton"), {
    ssr: false,
});

export default function WhatsAppButtonClient() {
    return <DeferredWhatsAppButton />;
}
