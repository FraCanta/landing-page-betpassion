import { AppIcon } from "@/components/ui/AppIcon";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const benefits = [
  {
    icon: "solar:gift-linear",
    title: "Bonus di benvenuto",
    description: <>Fino a <strong className="font-semibold text-accent">624€</strong> senza deposito per iniziare a giocare.</>,
  },
  {
    icon: "solar:bill-list-linear",
    title: "Registrazione online veloce",
    description: "Pochi minuti per aprire il tuo conto.",
  },
  {
    icon: "logos:whatsapp-icon",
    title: "Invio documenti su WhatsApp",
    description: "Non si caricano documenti sul sito. Dopo la registrazione li invii su WhatsApp.",
  },
] as const;

export function BenefitSection() {
  return (
    <SectionWrapper id="informazioni" className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto grid max-w-md gap-4 md:max-w-none md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="@container min-w-0 rounded-xl border border-border bg-surface/80 md:max-xl:last:col-span-2 md:max-xl:last:w-[calc((100%_-_1rem)/2)] md:max-xl:last:justify-self-center">
              <div className="p-[clamp(1.25rem,6cqw,2.5rem)]">
                <span className="mb-4 grid size-[clamp(4rem,17cqw,6rem)] place-items-center rounded-full border border-text-secondary/70 text-accent">
                  <AppIcon name={benefit.icon} size={42} />
                </span>
                <h3 className="font-display text-[clamp(2rem,8cqw,2.75rem)] font-bold leading-[1.1] text-text-primary">{benefit.title}</h3>
                <p className="mt-3 text-[clamp(1.125rem,4.5cqw,1.625rem)] leading-normal text-text-secondary">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
