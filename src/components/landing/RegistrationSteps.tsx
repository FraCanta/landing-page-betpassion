import { landingLinks } from "@/config/site";
import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "1",
    icon: "solar:pen-new-square-linear",
    title: "Registrati online",
    description: "Compila il modulo di registrazione.",
    href: landingLinks.registration,
  },
  {
    number: "2",
    icon: "logos:whatsapp-icon",
    title: "Invia i documenti su WhatsApp",
    description: "Manda i documenti richiesti al numero dedicato.",
  },
  {
    number: "3",
    icon: "solar:gift-linear",
    title: "Completa l’attivazione",
    description: "Bar Lamanna finalizza la procedura e attiva il bonus.",
  },
] as const;

export function RegistrationSteps() {
  return (
    <section id="procedura" className="py-7 sm:py-10">
      <Container data-reveal>
        <SectionHeading eyebrow="" title="Come funziona" />
        <span className="mt-2 block h-1 w-8 bg-accent" aria-hidden="true" />
        <ol className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-3 lg:gap-10 xl:gap-14">
          {steps.map((step) => (
            <li key={step.number} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 sm:gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-accent font-display text-3xl font-bold text-background sm:size-16 sm:text-4xl">{step.number}</span>
              <div className="min-w-0 pt-2 sm:pt-3">
                <AppIcon name={step.icon} size={40} className="block size-10 text-accent" />
                <h3 className="mt-4 font-display text-[clamp(1.75rem,2.4vw,2.25rem)] font-bold leading-[1.1] text-text-primary lg:min-h-[2.2em]">{step.title}</h3>
                <p className="mt-3 max-w-[38ch] text-base leading-relaxed text-text-secondary xl:text-lg">{step.description}</p>
                {"href" in step && <a className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent underline decoration-accent/50 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={step.href} target="_blank" rel="noopener noreferrer">Vai alla registrazione <AppIcon name="solar:arrow-right-linear" size={16} /></a>}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
