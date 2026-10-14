import Image from "next/image";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";
import { ActionButton } from "@/components/ui/ActionButton";
import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";

const highlights = [
  { icon: "solar:bolt-circle-linear", label: "Registrazione veloce" },
  { icon: "solar:gift-linear", label: "Bonus senza deposito" },
  { icon: "18+", label: "Solo maggiorenni" },
  { icon: "solar:shield-check-linear", label: "Gioco responsabile" },
] as const;

export function HeroSection() {
  return (
    <section id="inizio" className="relative isolate overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[68%] md:block" aria-hidden="true">
        <Image src={landingAssets.stadium} alt="" fill priority sizes="68vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/25" />
        <Image src={landingAssets.athlete} alt="" width={1122} height={1402} priority sizes="(min-width: 1280px) 34vw, 38vw" className="absolute bottom-0 right-[20%] z-10 h-[95%] w-auto object-contain object-bottom" />
        <Image src={landingAssets.phone} alt="Schermata Betpassion mostrata su uno smartphone" width={1122} height={1402} priority sizes="(min-width: 1280px) 22vw, 25vw" className="absolute bottom-2 right-[2%] z-20 h-[88%] w-auto object-contain object-bottom drop-shadow-2xl" />
      </div>

      <Container className="relative z-10 pb-8 pt-10 sm:pb-10 sm:pt-14 md:min-h-[560px] md:pb-8 md:pt-10">
        <div className="max-w-2xl md:max-w-[58%]">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-text-secondary">
            <span className="h-1 w-6 bg-accent" aria-hidden="true" /> Sport <span aria-hidden="true">·</span> Casinò <span aria-hidden="true">·</span> Live
          </p>
          <h1 className="font-display text-[clamp(2.65rem,9vw,4.8rem)] font-bold uppercase leading-[0.9] tracking-[-0.025em] text-text-primary sm:text-7xl md:text-[clamp(2.8rem,5vw,4.8rem)]">
            <span className="block">Apri il tuo conto</span>
            <span className="block text-accent">Betpassion</span>
            <span className="block">con Bar Lamanna</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-text-secondary sm:text-lg">
            Registrati online, completa l’identificazione con <span className="font-semibold text-accent">Bar Lamanna</span> e attiva il tuo bonus di benvenuto.
          </p>

          <div className="mt-6 flex max-w-[560px] flex-col gap-3 sm:flex-row">
            <ActionButton href={landingLinks.registration} className="w-full justify-between sm:w-auto sm:min-w-60">
              <AppIcon name="solar:user-plus-linear" /> Registrati ora <AppIcon name="solar:arrow-right-linear" />
            </ActionButton>
            <ActionButton href={landingLinks.bonus} variant="secondary" className="w-full justify-between sm:w-auto sm:min-w-52">
              Scopri il bonus <AppIcon name="solar:arrow-right-linear" />
            </ActionButton>
          </div>

          <div className="mt-3 max-w-[560px]">
            <ActionButton href={landingLinks.whatsapp} variant="whatsapp" className="w-full justify-center border border-whatsapp/50 bg-whatsapp/10 text-text-primary hover:bg-whatsapp/20">
              <AppIcon name="logos:whatsapp-icon" size={24} /> Invia documenti su WhatsApp <AppIcon name="solar:arrow-right-linear" />
            </ActionButton>
          </div>

          <p className="mt-4 flex max-w-xl items-start gap-3 text-sm leading-6 text-text-secondary">
            <AppIcon name="solar:document-text-linear" size={22} className="mt-0.5 shrink-0 text-accent" />
            <span>Dopo la registrazione, invia i documenti su WhatsApp per completare la procedura.</span>
          </p>
        </div>

        <div className="relative mt-8 h-[340px] overflow-hidden sm:h-[420px] md:hidden" aria-label="Visual Betpassion con calciatore e smartphone" role="img">
          <Image src={landingAssets.stadium} alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/25 to-background/70" />
          <Image src={landingAssets.athlete} alt="" width={1122} height={1402} sizes="75vw" className="absolute bottom-0 left-[13%] z-10 h-[96%] w-auto object-contain object-bottom" />
          <Image src={landingAssets.phone} alt="" width={1122} height={1402} sizes="42vw" className="absolute bottom-2 right-[4%] z-20 h-[76%] w-auto object-contain object-bottom drop-shadow-2xl" />
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:max-w-2xl sm:grid-cols-4 md:mt-8">
          {highlights.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-xs leading-4 text-text-primary sm:text-sm">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background/70 text-accent">
                {item.icon === "18+" ? <span className="text-[11px] font-bold text-text-primary">18+</span> : <AppIcon name={item.icon} size={19} />}
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
