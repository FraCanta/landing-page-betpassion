import Image from "next/image";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";
import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";

export function LegalFooter() {
  return (
    <footer className="border-t border-white/10 bg-background py-6">
      <Container className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <Image src={landingAssets.logo} alt="Betpassion" width={150} height={42} className="h-auto w-36" />
          <span className="text-xs text-text-secondary">con <strong className="text-text-primary">Bar Lamanna</strong></span>
          <span className="flex items-center gap-2 border-l border-border pl-4 text-xs font-bold text-text-primary"><span className="grid h-9 w-9 place-items-center rounded-full border border-text-secondary">18+</span> Solo maggiorenni</span>
        </div>
        <div className="flex flex-col gap-2 text-xs leading-5 text-text-secondary lg:max-w-md">
          <p className="flex items-start gap-2"><AppIcon name="solar:danger-triangle-linear" size={20} className="mt-0.5 shrink-0 text-text-primary" /> Il gioco può causare dipendenza patologica.</p>
          <p className="flex items-start gap-2"><AppIcon name="solar:shield-check-linear" size={17} className="mt-0.5 shrink-0 text-accent" /> Gioco responsabile</p>
          <p>Informativa privacy, termini, riferimenti del concessionario e ulteriori avvertenze legali: in attesa dei collegamenti ufficiali approvati.</p>
          <a href={landingLinks.bonus} className="w-fit underline decoration-border underline-offset-4 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Condizioni del bonus sul sito ufficiale</a>
        </div>
      </Container>
    </footer>
  );
}
