import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { landingAssets } from "@/config/landing-assets";
import { privacyConfig } from "@/config/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Betpassion × Bar Lamanna",
  description: "Informativa sul trattamento dei dati personali relativa alla landing Betpassion × Bar Lamanna.",
  robots: { index: false, follow: false },
};

const sections = [
  { id: "titolare", title: "Chi tratta i dati" },
  { id: "dati-finalita", title: "Quali dati vengono trattati e perché" },
  { id: "cookie", title: "Cookie e tracciamento" },
  { id: "conservazione", title: "Conservazione e destinatari" },
  { id: "diritti", title: "Diritti degli utenti" },
  { id: "servizi-esterni", title: "Servizi esterni e aggiornamenti" },
] as const;

function Pending({ children }: { children: ReactNode }) {
  return <span className="inline rounded bg-accent/10 px-1.5 py-0.5 font-semibold text-accent ring-1 ring-inset ring-accent/30">{children}</span>;
}

function PolicySection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-8 border-t border-border py-9 first:border-t-0 first:pt-0 sm:py-11">
      <div className="mb-5 flex items-start gap-4">
        <span className="pt-1 font-display text-xl font-bold text-accent" aria-hidden="true">{number}</span>
        <h2 id={`${id}-heading`} className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight text-text-primary">{title}</h2>
      </div>
      <div className="space-y-4 text-[0.9375rem] leading-7 text-text-secondary sm:text-base sm:leading-8">{children}</div>
    </section>
  );
}

const listClass = "list-disc space-y-1.5 pl-6 marker:text-accent";
const linkClass = "rounded-sm text-accent underline underline-offset-4 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex w-[90%] max-w-[1240px] flex-col items-start justify-between gap-4 py-5 sm:flex-row sm:items-center">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Image src={landingAssets.logo} alt="Betpassion" width={240} height={67} className="h-auto w-32 shrink-0 sm:w-44" />
            <span className="border-l border-border pl-3 text-sm text-text-primary sm:pl-4">con <strong>{privacyConfig.business.name}</strong></span>
          </div>
          <Link href="/" className="inline-flex min-h-11 items-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none">
            <span aria-hidden="true" className="mr-2">←</span> Torna al sito
          </Link>
        </div>
      </header>

      <main>
        <div className="mx-auto w-[90%] max-w-[1240px]">
          <div className="border-b border-border py-12 sm:py-16 lg:py-20">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-accent">Informazioni legali</p>
            <h1 className="font-display text-[clamp(3.5rem,8vw,6rem)] font-bold uppercase leading-none text-text-primary">Privacy Policy</h1>
            <p className="mt-3 text-sm font-semibold text-text-primary sm:text-base">Betpassion × {privacyConfig.business.name}</p>
            <p className="mt-6 max-w-[68ch] text-base leading-8 text-text-secondary sm:text-lg">La presente informativa descrive come vengono trattati i dati personali degli utenti che visitano il sito <strong className="font-semibold text-text-primary">{privacyConfig.siteDomain}</strong> e utilizzano i servizi collegati al Bar Lamanna, ai sensi del Regolamento UE 2016/679 (GDPR).</p>
            <p className="mt-7 text-sm text-text-secondary">Ultimo aggiornamento: <Pending>{privacyConfig.lastUpdated}</Pending></p>
            <p role="status" className="mt-5 max-w-[68ch] rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm leading-6 text-text-primary">
              Bozza in preparazione. I dati evidenziati devono essere completati e verificati prima della pubblicazione.
            </p>
          </div>

          <div className="grid gap-10 py-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:py-14">
            <nav aria-label="Indice dell’informativa" className="lg:self-start">
              <div className="rounded-xl border border-border bg-surface p-5">
                <h2 className="font-display text-xl font-bold uppercase text-text-primary">In questa pagina</h2>
                <ol className="mt-4 grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="flex min-h-10 items-start gap-3 rounded-md px-2 py-2 text-sm leading-5 text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none">
                        <span className="shrink-0 font-bold text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <article className="min-w-0 max-w-[82ch]">
              <PolicySection id="titolare" number="01" title="Chi tratta i dati">
                <p>Per i trattamenti di propria competenza, i riferimenti del punto vendita sono:</p>
                <p className="font-semibold text-text-primary">{privacyConfig.business.name}</p>
                <dl className="grid gap-x-5 gap-y-3 rounded-xl border border-border bg-surface p-5 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
                  <dt>Ragione sociale</dt><dd><Pending>{privacyConfig.business.legalName}</Pending></dd>
                  <dt>Partita IVA</dt><dd><Pending>{privacyConfig.business.vatNumber}</Pending></dd>
                  <dt>Sede legale</dt><dd><Pending>{privacyConfig.business.registeredOffice}</Pending></dd>
                  <dt>Recapito per richieste privacy</dt><dd><Pending>{privacyConfig.business.privacyContact}</Pending></dd>
                </dl>
                <p>Il ruolo del punto vendita nella procedura di identificazione viene definito in base agli accordi con il concessionario Betpassion.</p>
              </PolicySection>

              <PolicySection id="dati-finalita" number="02" title="Quali dati vengono trattati e perché">
                <h3 className="font-display text-2xl font-bold text-text-primary">Navigazione sul sito</h3>
                <p>Il sito è ospitato su Vercel. Durante la navigazione possono essere trattati dati tecnici, come indirizzo IP, informazioni sul browser e richieste al server, necessari al funzionamento e alla sicurezza del servizio.</p>
                <p>La base giuridica è il legittimo interesse al corretto funzionamento e alla protezione del sito (art. 6, par. 1, lett. f del GDPR), ove applicabile.</p>
                <h3 className="pt-3 font-display text-2xl font-bold text-text-primary">Registrazione su Betpassion</h3>
                <p>La landing non raccoglie direttamente dati di registrazione. Selezionando i pulsanti dedicati, l&apos;utente viene indirizzato a una piattaforma esterna, che gestisce i dati secondo la propria informativa privacy.</p>
                <h3 className="pt-3 font-display text-2xl font-bold text-text-primary">Comunicazioni e identificazione tramite WhatsApp</h3>
                <p>Il Bar Lamanna utilizza WhatsApp come canale di contatto per la procedura di identificazione.</p>
                <p>Il titolare del punto vendita può ricevere nome, numero telefonico, messaggi e documenti d&apos;identità necessari alla verifica.</p>
                <p>Secondo la procedura dichiarata, i documenti vengono eliminati dopo l&apos;identificazione, fatti salvi eventuali obblighi di conservazione.</p>
                <p>La base giuridica di questo trattamento e il ruolo del punto vendita devono essere confermati in relazione agli obblighi normativi e agli accordi con il concessionario.</p>
              </PolicySection>

              <PolicySection id="cookie" number="03" title="Cookie e tracciamento">
                <p>Il sito non utilizza Google Analytics, Meta Pixel o altri strumenti applicativi di tracciamento pubblicitario e profilazione.</p>
                <p>Non sono presenti form o sistemi interni di raccolta dei dati personali.</p>
                <p>Eventuali dati tecnici trattati dall&apos;infrastruttura di hosting sono gestiti per il funzionamento e la sicurezza del sito.</p>
                <p>L&apos;assenza di cookie e strumenti non tecnici soggetti a consenso deve essere confermata sul sito pubblicato.</p>
              </PolicySection>

              <PolicySection id="conservazione" number="04" title="Conservazione e destinatari">
                <p>I dati tecnici di navigazione possono essere trattati da Vercel secondo le condizioni del servizio e i tempi di conservazione applicabili.</p>
                <p>Le comunicazioni e i documenti ricevuti tramite WhatsApp sono gestiti dal punto vendita nell&apos;ambito delle attività di identificazione.</p>
                <p>I documenti vengono eliminati dal punto vendita al termine delle operazioni, secondo la procedura dichiarata. Restano da confermare le modalità di cancellazione delle eventuali copie e i tempi di conservazione dei messaggi.</p>
                <p>I dati possono essere trattati anche dai fornitori tecnologici e dai soggetti coinvolti nelle rispettive attività, secondo i ruoli privacy applicabili.</p>
                <p>L&apos;utilizzo di fornitori esterni può comportare trasferimenti di dati fuori dallo Spazio Economico Europeo, nel rispetto delle garanzie previste dal GDPR.</p>
                <p><Pending>{privacyConfig.retentionAndTransfersToVerify}</Pending></p>
              </PolicySection>

              <PolicySection id="diritti" number="05" title="Diritti degli utenti">
                <p>Gli utenti possono esercitare, nei casi previsti dal GDPR, i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei propri dati, nonché revocare l&apos;eventuale consenso prestato.</p>
                <p>Per richieste relative ai trattamenti del punto vendita è possibile utilizzare il seguente recapito:</p>
                <p><Pending>{privacyConfig.business.privacyContact}</Pending></p>
                <p>È inoltre possibile presentare reclamo al <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer" className={linkClass}>Garante per la protezione dei dati personali<span className="sr-only"> (si apre in una nuova scheda)</span></a>.</p>
              </PolicySection>

              <PolicySection id="servizi-esterni" number="06" title="Servizi esterni e aggiornamenti">
                <p>Per i trattamenti effettuati direttamente dalle piattaforme esterne, è possibile consultare le rispettive informative:</p>
                <ul className={listClass}>
                  <li>Informativa Privacy Betpassion — <Pending>{privacyConfig.concessionairePrivacyNotice}</Pending></li>
                  <li><a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={linkClass}>Informativa Privacy WhatsApp<span className="sr-only"> (si apre in una nuova scheda)</span></a></li>
                  <li><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={linkClass}>Informativa Privacy Vercel<span className="sr-only"> (si apre in una nuova scheda)</span></a></li>
                </ul>
                <p>La presente informativa potrà essere aggiornata in caso di modifiche ai servizi o alle modalità di trattamento dei dati.</p>
                <p><strong className="font-semibold text-text-primary">Ultimo aggiornamento:</strong> <Pending>{privacyConfig.lastUpdated}</Pending></p>
              </PolicySection>
            </article>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-7 text-center text-sm text-text-secondary">
        <p>Betpassion × {privacyConfig.business.name} · Privacy Policy in preparazione</p>
      </footer>
    </>
  );
}
