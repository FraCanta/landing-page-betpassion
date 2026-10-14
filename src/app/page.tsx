import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { BenefitSection } from "@/components/landing/BenefitSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { RegistrationSteps } from "@/components/landing/RegistrationSteps";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { LegalFooter } from "@/components/landing/LegalFooter";

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <HeroSection />
        <BenefitSection />
        <BonusSection />
        <RegistrationSteps />
        <FinalCTASection />
      </main>
      <LegalFooter />
    </>
  );
}
