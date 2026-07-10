"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, any>) => void;
    dataLayer?: any[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
  const isProdGaActive = process.env.NEXT_PUBLIC_GA_ID !== undefined;

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && isProdGaActive) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
      });
    }

    // Developer telemetry: log clean diagnostic event to browser console in development/demo mode
    if (process.env.NODE_ENV === "development") {
      console.debug(`[Telemetry] Page transition captured -> ${pathname}`);
    }
  }, [pathname, GA_TRACKING_ID, isProdGaActive]);

  // Global click listener to track outbound interactions (Live sites, GitHub, CV download, email)
  useEffect(() => {
    const handleOutboundClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      const isOutbound = href.startsWith("http") && !href.includes(window.location.host);
      const isDownload = href.endsWith(".pdf");
      const isMail = href.startsWith("mailto:");

      if (isOutbound || isDownload || isMail) {
        const eventCategory = isDownload ? "download" : isMail ? "contact" : "outbound_link";
        const eventLabel = href;

        // Dispatch GA4 event if active
        if (typeof window !== "undefined" && window.gtag && isProdGaActive) {
          window.gtag("event", "click", {
            event_category: eventCategory,
            event_label: eventLabel,
            transport_type: "beacon",
          });
        }

        // Diagnostic log
        console.debug(`[Telemetry Event] Category: ${eventCategory} | Target: ${eventLabel}`);
      }
    };

    window.addEventListener("click", handleOutboundClick, { passive: true });
    return () => window.removeEventListener("click", handleOutboundClick);
  }, [isProdGaActive]);

  return (
    <>
      {/* Google Analytics 4 Script injection */}
      {isProdGaActive ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      ) : null}
    </>
  );
}
