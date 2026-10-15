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
      <div data-enter="hero-visual" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[68%] xl:block" aria-hidden="true">
        <Image src={landingAssets.stadium} alt="" fill priority sizes="68vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/25" />
        <Image src={landingAssets.athlete} alt="" width={1122} height={1402} priority sizes="(min-width: 1280px) 34vw, 38vw" className="absolute bottom-0 right-[20%] z-10 h-[95%] w-auto object-contain object-bottom xl:max-[90rem]:right-[14%] xl:max-[90rem]:h-[94%] min-[90rem]:right-[20%] min-[90rem]:h-[95%] min-[100rem]:right-[27%] min-[100rem]:h-[100%]" />
        <Image src={landingAssets.phone} alt="Schermata Betpassion mostrata su uno smartphone" width={1122} height={1402} priority sizes="(min-width: 1280px) 22vw, 25vw" className="absolute bottom-2 right-[2%] z-20 h-[88%] w-auto object-contain object-bottom drop-shadow-2xl xl:max-[90rem]:right-0 xl:max-[90rem]:h-[80%] min-[90rem]:right-[2%] min-[90rem]:h-[88%] min-[100rem]:right-[4%]" />
      </div>

      <Container className="relative z-10 pb-8 pt-7 sm:pb-10 sm:pt-9 md:min-h-[560px] md:max-xl:flex md:max-xl:min-h-0 md:max-xl:flex-col md:pb-8 md:pt-7 xl:flex xl:flex-col xl:justify-center min-[100rem]:min-h-[820px]">
        <div data-enter="hero-copy" className="max-w-2xl md:max-xl:max-w-full xl:max-w-[58%] xl:max-[90rem]:max-w-[560px] min-[90rem]:max-w-[58%]">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-text-secondary">
            <span className="h-1 w-6 bg-accent" aria-hidden="true" /> Sport <span aria-hidden="true">·</span> Casinò <span aria-hidden="true">·</span> Live
          </p>
          <h1 className="max-w-[720px] font-display text-[clamp(3.1rem,calc(28.5714vw_-_4.042857rem),3.8143rem)] font-bold uppercase leading-[0.9] tracking-[-0.025em] text-text-primary sm:text-7xl md:text-[clamp(2.8rem,5.7vw,7rem)] md:max-xl:text-[clamp(3.2rem,7vw,5.2rem)] xl:max-[90rem]:text-[clamp(2.8rem,6.2vw,6.5rem)] min-[90rem]:text-[clamp(2.8rem,5.7vw,7rem)]">
            <span className="block">Apri il tuo conto</span>
            <span className="block text-accent">Betpassion</span>
            <span className="block">con Bar Lamanna</span>
          </h1>
          <p className="mt-5 max-w-[560px] text-lg leading-7 text-text-secondary sm:text-xl md:text-2xl md:leading-9 md:max-xl:text-xl md:max-xl:leading-8 xl:max-[90rem]:text-lg xl:max-[90rem]:leading-7 min-[90rem]:max-w-[720px] min-[90rem]:text-2xl min-[90rem]:leading-9">
            Registrati online con Betpassion tramite <span className="whitespace-nowrap font-semibold text-accent">Bar Lamanna</span><br />e attiva il tuo bonus di benvenuto.
          </p>

          <div className="mt-6 flex max-w-[560px] flex-col gap-3 sm:flex-row min-[90rem]:max-w-[720px]">
            <ActionButton href={landingLinks.registration} className="min-h-14 w-full justify-between sm:min-w-0 sm:flex-1">
              <AppIcon name="solar:user-plus-linear" /> Registrati ora <AppIcon name="solar:arrow-right-linear" />
            </ActionButton>
            <ActionButton href={landingLinks.bonus} variant="secondary" className="min-h-14 w-full justify-between border-white/90 bg-transparent sm:min-w-0 sm:flex-1 hover:bg-white/10">
              Scopri il bonus <AppIcon name="solar:arrow-right-linear" />
            </ActionButton>
          </div>

          <p className="mt-4 flex max-w-[560px] items-start gap-3 text-sm leading-6 text-text-secondary min-[90rem]:max-w-xl">
            <AppIcon name="solar:phone-linear" size={20} className="mt-0.5 shrink-0 text-accent" />
            <span>Per informazioni, chiama direttamente <a href="tel:+393711316797" className="font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">+39 371 131 6797</a>.</span>
          </p>
        </div>

        <ul data-enter="hero-highlights" className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:max-w-2xl sm:grid-cols-4 md:mt-8 md:max-xl:order-1 xl:max-[90rem]:max-w-[560px] min-[90rem]:max-w-2xl">
          {highlights.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-xs leading-4 text-text-primary sm:text-sm">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/75 bg-background/70 text-accent">
                {item.icon === "18+" ? <span className="text-xs font-bold text-text-primary">18+</span> : <AppIcon name={item.icon} size={22} />}
              </span>
              {item.label}
            </li>
          ))}
        </ul>

        <div data-enter="hero-visual" className="relative -mx-[5.555556%] mt-8 h-[340px] overflow-hidden min-[360px]:max-[441px]:aspect-[107/85] min-[360px]:max-[441px]:h-auto sm:h-[420px] md:max-xl:order-2 md:max-xl:aspect-[5/2] md:max-xl:h-auto xl:hidden" aria-label="Visual Betpassion con calciatore e smartphone" role="img">
          <Image src={landingAssets.stadium} alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/25 to-background/70" />
          <div className="absolute inset-y-0 left-[5%] w-[90%] md:max-xl:left-[27.5%] md:max-xl:w-[45%]">
            <Image src={landingAssets.athlete} alt="" width={1122} height={1402} sizes="75vw" className="absolute bottom-0 left-[13%] z-10 h-[96%] w-auto object-contain object-bottom" />
            <Image src={landingAssets.phone} alt="" width={1122} height={1402} sizes="42vw" className="absolute bottom-2 right-[4%] z-20 h-[76%] w-auto object-contain object-bottom drop-shadow-2xl min-[360px]:max-[441px]:bottom-[2.352941%] md:max-xl:bottom-[2.352941%]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
