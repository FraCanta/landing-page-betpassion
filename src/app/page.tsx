import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { RegistrationSteps } from "@/components/landing/RegistrationSteps";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { LegalFooter } from "@/components/landing/LegalFooter";
import { LandingMotion } from "@/components/landing/LandingMotion";

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
