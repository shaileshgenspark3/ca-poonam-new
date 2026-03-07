"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
    ssr: false,
});

export default function DeferredWhatsAppButton() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const windowWithIdle = window as Window & {
            requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
            cancelIdleCallback?: (handle: number) => void;
        };
        let timeoutId: ReturnType<typeof setTimeout> | undefined;
        let idleCallbackId: number | undefined;

        const activate = () => setIsReady(true);

        if (typeof windowWithIdle.requestIdleCallback === "function") {
            idleCallbackId = windowWithIdle.requestIdleCallback(activate, { timeout: 2200 });
        } else {
            timeoutId = setTimeout(activate, 1300);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            if (idleCallbackId && typeof windowWithIdle.cancelIdleCallback === "function") {
                windowWithIdle.cancelIdleCallback(idleCallbackId);
            }
        };
    }, []);

    if (!isReady) {
        return null;
    }

    return <WhatsAppButton />;
}
