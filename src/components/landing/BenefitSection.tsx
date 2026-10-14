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
    description: <>Pochi minuti per aprire<br className="hidden sm:block" /> il tuo conto.</>,
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
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-xl border border-border bg-surface/80 p-5 sm:p-6">
              <span className="mb-4 grid h-14 w-14 place-items-center rounded-full border border-text-secondary/70 text-accent">
                <AppIcon name={benefit.icon} size={30} />
              </span>
              <h3 className="font-display text-2xl font-bold leading-tight text-text-primary sm:text-[1.7rem]">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
