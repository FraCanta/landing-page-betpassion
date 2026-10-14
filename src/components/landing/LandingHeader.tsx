import Image from "next/image";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";
import { ActionButton } from "@/components/ui/ActionButton";
import { Container } from "@/components/ui/Container";
import { AppIcon } from "@/components/ui/AppIcon";

export function LandingHeader() {
  return (
    <header className="relative z-20 border-b border-white/10 bg-background/90">
      <Container className="flex min-h-[72px] items-center justify-between gap-4 py-3">
        <a href="#inizio" aria-label="Betpassion con Bar Lamanna, inizio pagina" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Image src={landingAssets.logo} alt="Betpassion" width={240} height={67} priority className="h-auto w-36 sm:w-52 lg:w-60" />
          <span className="hidden border-l border-white/40 pl-4 text-sm text-text-primary sm:inline">con <strong className="font-bold">Bar Lamanna</strong></span>
        </a>
        <ActionButton href={landingLinks.registration} className="shrink-0 px-3 sm:px-5">
          <AppIcon name="solar:user-plus-linear" size={19} />
          <span>Registrati ora</span>
        </ActionButton>
      </Container>
      <span className="sr-only sm:hidden">con Bar Lamanna</span>
    </header>
  );
}
