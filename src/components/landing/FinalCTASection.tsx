import Image from "next/image";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";
import { ActionButton } from "@/components/ui/ActionButton";
import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";
import { QRCodeCard } from "@/components/landing/QRCodeCard";

export function FinalCTASection() {
  return (
    <section id="registrazione" className="relative isolate overflow-hidden py-7 sm:py-10">
      <Image src={landingAssets.stadium} alt="" fill sizes="100vw" className="-z-20 object-cover object-center lg:object-fill" />
      <div className="absolute inset-0 -z-10 bg-background/40" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/60 via-transparent to-background/20" aria-hidden="true" />
      <Container data-reveal>
        <div className="grid gap-3 rounded-2xl border border-border bg-background/75 p-4 shadow-2xl backdrop-blur-sm sm:p-6 lg:min-h-[clamp(16rem,22vw,26rem)] lg:grid-cols-[1.2fr_0.9fr_0.8fr] lg:gap-3 lg:p-5 2xl:gap-4 2xl:p-7">
          <div className="flex flex-col items-start justify-center p-2 sm:p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary 2xl:text-sm">È il momento di giocare</p>
            <h2 className="font-display text-[clamp(3rem,4.3vw,5.5rem)] font-bold uppercase leading-[0.9] text-text-primary">Inizia ora<br />con <span className="text-accent">Betpassion</span></h2>
            <p className="mt-4 max-w-md text-base leading-6 text-text-secondary lg:text-lg 2xl:text-xl">Crea il tuo conto con Bar Lamanna.</p>
            <ActionButton href={landingLinks.registration} className="mt-5 w-full justify-between sm:w-auto sm:min-w-56 lg:min-w-64 lg:text-base 2xl:min-h-14 2xl:min-w-72">
              <AppIcon name="solar:user-plus-linear" /> Registrati ora <AppIcon name="solar:arrow-right-linear" />
            </ActionButton>
          </div>

          <section aria-labelledby="whatsapp-heading" className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-background/90 p-5 text-center">
            <h3 id="whatsapp-heading" className="text-xs font-bold uppercase tracking-wide text-text-primary 2xl:text-base">Contatta Bar Lamanna<br /><span className="text-accent">su WhatsApp</span></h3>
            <AppIcon name="logos:whatsapp-icon" size={52} className="my-3 2xl:my-5" />
            <ActionButton href={landingLinks.whatsapp} variant="whatsapp" className="w-full justify-center text-sm 2xl:min-h-14 2xl:text-base">
              Contattaci su WhatsApp <AppIcon name="solar:arrow-right-linear" size={18} />
            </ActionButton>
            <p className="mt-3 max-w-[36ch] text-xs leading-5 text-text-secondary 2xl:mt-4 2xl:text-sm">Dopo la registrazione, invia i documenti su WhatsApp per completare la procedura.</p>
          </section>

          <QRCodeCard />
        </div>
      </Container>
    </section>
  );
}
