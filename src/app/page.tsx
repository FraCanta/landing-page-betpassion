import type { Metadata } from "next";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { RegistrationSteps } from "@/components/landing/RegistrationSteps";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { LegalFooter } from "@/components/landing/LegalFooter";
import { LandingMotion } from "@/components/landing/LandingMotion";

const title = "Betpassion con Bar Lamanna | Registrazione online";
const description = "Informazioni sulla registrazione online a Betpassion tramite Bar Lamanna di Peschici. Scopri come funziona la procedura e consulta le condizioni disponibili.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    locale: "it_IT",
    title,
    description,
    images: [{ url: "/og-betpassion.png", width: 1731, height: 909, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-betpassion.png"],
  },
};

export default function LandingPage() {
  return (
    <>
      <LandingMotion />
      <LandingHeader />
      <main className="[&>#bonus]:py-7 sm:[&>#bonus]:py-10">
        <HeroSection />
        <RegistrationSteps />
        <BonusSection />
        <FinalCTASection />
      </main>
      <LegalFooter />
    </>
  );
}
