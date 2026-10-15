import Image from "next/image";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";
import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BonusNumberAnimation } from "@/components/landing/BonusNumberAnimation";

const bonusPreview = {
  items: [
    { icon: "solar:football-linear", amount: "20€", value: 20, label: "Freebet Sport" },
    { icon: "solar:gameboy-linear", amount: "600€", value: 600, label: "Missioni Casinò" },
    { icon: "solar:ticket-linear", amount: "4€", value: 4, label: "Coupon GoS" },
  ],
} as const;

export function BonusSection() {
  return (
    <SectionWrapper id="bonus" className="py-7 sm:py-10">
      <Container>
        <section data-reveal className="@container relative isolate overflow-hidden rounded-xl border border-border bg-background p-5 sm:p-7 lg:p-9">
          <BonusNumberAnimation />
          <div className="relative z-10 md:w-[62%]">
            <p className="mb-3 text-[clamp(0.625rem,1cqw,0.875rem)] font-semibold uppercase tracking-[0.3em] text-text-secondary">Il tuo bonus di <span className="text-accent">benvenuto</span></p>
            <h2 className="font-display text-[clamp(2.5rem,6.4cqw,7rem)] font-bold uppercase leading-[0.92] tracking-tight text-text-primary">
              <span className="block">Fino a <span className="text-[1.18em] italic text-accent"><span className="sr-only">624€</span><span data-bonus-main aria-hidden="true" className="inline-block">624€</span></span></span>
              <span className="block">senza deposito</span>
            </h2>
            <p className="mt-4 max-w-[32ch] text-[clamp(1rem,2cqw,1.875rem)] leading-snug text-text-primary">Tre vantaggi per iniziare subito a giocare con Betpassion.</p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-3">
              {bonusPreview.items.map((item) => (
                <li key={item.label} className="flex items-center gap-3 rounded-lg border border-border bg-background/90 px-3 py-3 lg:px-4 lg:py-4">
                  <AppIcon name={item.icon} size={32} className="shrink-0 text-accent" />
                  <span className="min-w-0"><strong className="block font-display text-[clamp(1.75rem,3cqw,3rem)] leading-none text-accent"><span className="sr-only">{item.amount}</span><span aria-hidden="true"><span className="relative inline-block tabular-nums"><span className="invisible">{item.value}</span><span data-bonus-target={item.value} className="absolute inset-0 text-right">{item.value}</span></span>€</span></strong><span className="mt-1 block font-display text-[clamp(1rem,1.5cqw,1.5rem)] leading-tight text-text-primary">{item.label}</span></span>
                </li>
              ))}
            </ul>

            <p className="mt-4 flex max-w-2xl items-start gap-2 text-xs leading-5 text-text-secondary">
              <AppIcon name="solar:info-circle-linear" size={18} className="mt-0.5 shrink-0" />
              <span>Per nuovi iscritti maggiorenni che aprono e identificano il conto tramite PVR. L’offerta è composta da strumenti di gioco e non da denaro liberamente prelevabile.</span>
            </p>
            <a href={landingLinks.bonus} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent underline decoration-accent/50 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              Scopri il bonus <AppIcon name="solar:arrow-right-linear" size={18} />
              <span className="sr-only"> (si apre in una nuova scheda)</span>
            </a>
          </div>
          <div className="pointer-events-none relative mt-5 aspect-[4/3] md:absolute md:inset-y-0 md:right-0 md:mt-0 md:aspect-auto md:w-[55%]" aria-hidden="true">
            <Image src={landingAssets.bonus} alt="" fill sizes="(min-width: 768px) 50vw, 90vw" className="object-contain object-center md:object-right-bottom" />
            <div className="absolute inset-0 md:bg-gradient-to-r md:from-background md:via-transparent md:to-transparent" />
          </div>
        </section>
      </Container>
    </SectionWrapper>
  );
}
