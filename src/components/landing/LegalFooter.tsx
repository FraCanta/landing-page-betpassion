import Image from "next/image";
import Link from "next/link";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";
import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";

export function LegalFooter() {
  return (
    <footer className="border-t border-white/10 bg-background py-5">
      <Container className="flex flex-wrap items-center gap-x-4 gap-y-3 text-xs leading-5 text-text-secondary xl:flex-nowrap xl:justify-between xl:gap-x-3 xl:text-[11px] 2xl:text-xs">
        <Image src={landingAssets.logo} alt="Betpassion" width={150} height={42} className="h-auto w-28 shrink-0 2xl:w-36" />
        <span className="shrink-0">con <strong className="text-text-primary">Bar Lamanna</strong></span>
        <span className="flex shrink-0 items-center gap-2 border-l border-border pl-3 font-bold text-text-primary"><span className="grid size-8 place-items-center rounded-full border border-text-secondary">18+</span> Solo maggiorenni</span>
        <p className="flex min-w-0 items-start gap-2 xl:items-center xl:whitespace-nowrap"><AppIcon name="solar:danger-triangle-linear" size={18} className="mt-0.5 shrink-0 text-text-primary xl:mt-0" /> Il gioco può causare dipendenza patologica.</p>
        <p className="flex shrink-0 items-center gap-2"><AppIcon name="solar:shield-check-linear" size={17} className="shrink-0 text-accent" /> Gioco responsabile</p>
        <nav aria-label="Informazioni legali" className="flex flex-wrap items-center gap-x-4 gap-y-2 xl:shrink-0 xl:flex-nowrap xl:gap-x-3">
          <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Privacy Policy</Link>
          <a href={landingLinks.bonus} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Condizioni del bonus sul sito ufficiale</a>
        </nav>
      </Container>
    </footer>
  );
}
