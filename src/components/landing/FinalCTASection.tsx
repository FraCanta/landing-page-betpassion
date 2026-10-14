import Image from "next/image";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";
import { ActionButton } from "@/components/ui/ActionButton";
import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";
import { QRCodeCard } from "@/components/landing/QRCodeCard";

export function FinalCTASection() {
  return (
    <section id="registrazione" className="relative isolate overflow-hidden py-10 sm:py-14">
      <Image src={landingAssets.stadium} alt="" fill sizes="100vw" className="-z-20 object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-background/80" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/65 to-background/75" aria-hidden="true" />
      <Container>
        <div className="grid gap-4 rounded-2xl border border-border bg-background/75 p-4 shadow-2xl backdrop-blur-sm sm:p-6 lg:grid-cols-[1.2fr_0.9fr_0.8fr] lg:gap-3 lg:p-5">
          <div className="flex flex-col items-start justify-center p-2 sm:p-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-text-secondary">È il momento di giocare</p>
            <h2 className="max-w-[12ch] font-display text-5xl font-bold uppercase leading-[0.9] text-text-primary sm:text-6xl">Inizia ora con <span className="text-accent">Betpassion</span></h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-text-secondary sm:text-base">Crea il tuo conto con Bar Lamanna, completa l’identificazione e attiva il bonus.</p>
            <ActionButton href={landingLinks.registration} className="mt-5 min-w-56 justify-between">
              <AppIcon name="solar:user-plus-linear" /> Registrati ora <AppIcon name="solar:arrow-right-linear" />
            </ActionButton>
          </div>

          <section aria-labelledby="whatsapp-heading" className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-background/90 p-5 text-center">
            <h3 id="whatsapp-heading" className="text-xs font-bold uppercase tracking-wide text-text-primary">Invia i tuoi documenti<br /><span className="text-accent">su WhatsApp</span></h3>
            <AppIcon name="logos:whatsapp-icon" size={52} className="my-3" />
            <ActionButton href={landingLinks.whatsapp} variant="whatsapp" className="w-full justify-center text-sm">
              Contattaci su WhatsApp <AppIcon name="solar:arrow-right-linear" size={18} />
            </ActionButton>
            <p className="mt-3 text-xs leading-5 text-text-secondary">Dopo la registrazione, invia i documenti per completare il tuo conto.</p>
          </section>

          <QRCodeCard />
        </div>
      </Container>
    </section>
  );
}
