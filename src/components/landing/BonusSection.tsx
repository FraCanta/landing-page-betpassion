import Image from "next/image";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";
import { ActionButton } from "@/components/ui/ActionButton";
import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const bonusPreview = {
  items: [
    { icon: "solar:football-linear", amount: "20€", label: "Freebet Sport" },
    { icon: "solar:gameboy-linear", amount: "600€", label: "Missioni Casinò" },
    { icon: "solar:ticket-linear", amount: "4€", label: "Coupon GoS" },
  ],
} as const;

export function BonusSection() {
  return (
    <SectionWrapper id="bonus" className="py-7 sm:py-10">
      <Container>
        <section className="relative isolate overflow-hidden rounded-2xl border border-border bg-surface/80 p-5 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full md:w-[55%]" aria-hidden="true">
            <Image src={landingAssets.bonus} alt="" fill sizes="(min-width: 768px) 55vw, 100vw" className="object-contain object-center md:object-right" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/15 md:from-surface md:via-surface/75 md:to-transparent" />
          </div>
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-text-secondary">Il tuo bonus di benvenuto</p>
            <h2 className="max-w-[12ch] font-display text-5xl font-bold uppercase leading-[0.9] text-text-primary sm:text-6xl lg:text-7xl">
              Fino a <span className="text-accent">624€</span> senza deposito
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-text-secondary sm:text-base">Tre vantaggi per iniziare subito a giocare con Betpassion.</p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-3">
              {bonusPreview.items.map((item) => (
                <li key={item.label} className="flex min-h-[68px] items-center gap-3 rounded-lg border border-border bg-background/80 px-3 py-2">
                  <AppIcon name={item.icon} size={27} className="shrink-0 text-accent" />
                  <span className="min-w-0"><strong className="block font-display text-2xl leading-none text-accent">{item.amount}</strong><span className="mt-1 block text-xs leading-4 text-text-primary">{item.label}</span></span>
                </li>
              ))}
            </ul>

            <p className="mt-4 flex max-w-2xl items-start gap-2 text-xs leading-5 text-text-secondary">
              <AppIcon name="solar:info-circle-linear" size={18} className="mt-0.5 shrink-0" />
              <span>Per nuovi iscritti maggiorenni che aprono e identificano il conto tramite PVR. L’offerta è composta da strumenti di gioco e non da denaro liberamente prelevabile.</span>
            </p>
            <ActionButton href={landingLinks.bonus} variant="secondary" className="mt-5">
              Scopri il bonus <AppIcon name="solar:arrow-right-linear" size={18} />
            </ActionButton>
          </div>
        </section>
      </Container>
    </SectionWrapper>
  );
}
