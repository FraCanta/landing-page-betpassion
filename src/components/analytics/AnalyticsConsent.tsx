"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const measurementId = "G-C863WHXE15";
const storageKey = "betpassion-analytics-consent-v1";
const consentEvent = "betpassion-analytics-consent-change";

type ConsentChoice = "accepted" | "rejected" | null;
type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

let inMemoryChoice: ConsentChoice = null;

function readChoice(): ConsentChoice {
  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored === "accepted" || stored === "rejected" ? stored : null;
  } catch {
    return inMemoryChoice;
  }
}

function subscribeToChoice(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(consentEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(consentEvent, onChange);
  };
}

function saveChoice(choice: Exclude<ConsentChoice, null>) {
  inMemoryChoice = choice;
  try {
    window.localStorage.setItem(storageKey, choice);
  } catch {
    // Keep the choice for this page load when browser storage is unavailable.
  }
  window.dispatchEvent(new Event(consentEvent));
}

function removeAnalyticsCookies() {
  const hostname = window.location.hostname;
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0]?.trim();
    if (!name || !/^_ga(?:_|$)/.test(name)) continue;
    document.cookie = `${name}=; Max-Age=0; path=/`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${hostname}`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${hostname}`;
  }
}

export function AnalyticsConsent() {
  const choice = useSyncExternalStore(subscribeToChoice, readChoice, () => null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    if (choice !== "accepted") return;

    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.dataLayer ??= [];
    analyticsWindow.gtag = (...args: unknown[]) => {
      analyticsWindow.dataLayer?.push(args);
    };

    analyticsWindow.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    analyticsWindow.gtag("consent", "update", { analytics_storage: "granted" });
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: `${window.location.origin}${window.location.pathname}`,
      page_path: window.location.pathname,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    return () => {
      analyticsWindow.gtag?.("consent", "update", { analytics_storage: "denied" });
      script.remove();
    };
  }, [choice]);

  function updateChoice(nextChoice: Exclude<ConsentChoice, null>) {
    if (choice === "accepted" && nextChoice === "rejected") {
      (window as AnalyticsWindow).gtag?.("consent", "update", { analytics_storage: "denied" });
      removeAnalyticsCookies();
      saveChoice(nextChoice);
      window.location.reload();
      return;
    }

    saveChoice(nextChoice);
    setPreferencesOpen(false);
  }

  if (choice !== null && !preferencesOpen) {
    return (
      <button
        type="button"
        onClick={() => setPreferencesOpen(true)}
        className="fixed bottom-4 right-4 z-50 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-primary shadow-lg transition-colors hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
      >
        Preferenze cookie
      </button>
    );
  }

  return (
    <section
      aria-labelledby="analytics-consent-title"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-lg rounded-xl border border-border bg-surface p-5 text-text-primary shadow-2xl sm:inset-x-auto sm:right-6 sm:mx-0 sm:w-[min(32rem,calc(100vw-3rem))]"
    >
      <h2 id="analytics-consent-title" className="font-display text-2xl font-bold uppercase">Preferenze cookie</h2>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        Usiamo Google Analytics solo con il tuo consenso per misurare le visite. Puoi rifiutare senza limitazioni e cambiare scelta in qualsiasi momento. Leggi la{" "}
        <a href="/privacy-policy#cookie" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Privacy Policy</a>.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={() => updateChoice("rejected")} className="min-h-11 flex-1 rounded-lg border border-white/80 px-4 py-2 text-sm font-bold text-text-primary transition-colors hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none">
          Rifiuta
        </button>
        <button type="button" onClick={() => updateChoice("accepted")} className="min-h-11 flex-1 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-background transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none">
          Accetta analytics
        </button>
      </div>
    </section>
  );
}
