import { landingLinks } from "@/config/site";
import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

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
    <SectionWrapper id="procedura" className="py-12 sm:py-16">
      <Container>
        <SectionHeading eyebrow="" title="Come funziona" />
        <span className="mt-2 block h-1 w-8 bg-accent" aria-hidden="true" />
        <ol className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.number} className="relative flex gap-4 border-l border-border pl-4 md:border-l-0 md:pl-0">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-base font-bold text-background">{step.number}</span>
              <div className="min-w-0 pt-1">
                <AppIcon name={step.icon} size={25} className="text-accent" />
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{step.description}</p>
                {"href" in step && <a className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent underline decoration-accent/50 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={step.href}>Vai alla registrazione <AppIcon name="solar:arrow-right-linear" size={16} /></a>}
              </div>
              {index < steps.length - 1 && <AppIcon name="solar:arrow-right-linear" size={21} className="absolute -bottom-6 left-3 rotate-90 text-text-secondary md:bottom-auto md:left-auto md:right-[-1.35rem] md:top-3 md:rotate-0" />}
            </li>
          ))}
        </ol>
      </Container>
    </SectionWrapper>
  );
}
