import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";
import { privacyConfig } from "@/config/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Betpassion × Bar Lamanna",
  description: "Informativa sul trattamento dei dati personali relativa alla landing Betpassion × Bar Lamanna.",
  robots: { index: false, follow: false },
};

const sections = [
  { id: "titolare", title: "Titolare del trattamento" },
  { id: "dati-finalita", title: "Dati trattati e finalità" },
  { id: "cookie", title: "Cookie e tracciamento" },
  { id: "conservazione", title: "Hosting, destinatari e conservazione" },
  { id: "servizi-esterni", title: "Servizi esterni" },
  { id: "diritti", title: "Diritti degli interessati" },
] as const;

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
            <p className="mt-7 text-sm text-text-secondary">Ultimo aggiornamento: {privacyConfig.lastUpdated}</p>
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
              <PolicySection id="titolare" number="01" title="Titolare del trattamento">
                <p>Per i trattamenti relativi a questa landing, i riferimenti del punto vendita sono:</p>
                <dl className="grid gap-x-5 gap-y-3 rounded-xl border border-border bg-surface p-5 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
                  <dt>Denominazione commerciale</dt><dd>{privacyConfig.business.name}</dd>
                  <dt>Titolare</dt><dd>{privacyConfig.business.owner}</dd>
                  <dt>Intestazione dell’attività</dt><dd>{privacyConfig.business.legalName}</dd>
                  <dt>Partita IVA</dt><dd>{privacyConfig.business.vatNumber}</dd>
                  <dt>Indirizzo</dt><dd>{privacyConfig.business.streetAddress}<br />{privacyConfig.business.postalAddress}</dd>
                  <dt>Telefono e recapito privacy</dt><dd><a href="tel:+393711316797" className={linkClass}>+39 371 131 6797</a></dd>
                </dl>
              </PolicySection>

              <PolicySection id="dati-finalita" number="02" title="Dati trattati e finalità">
                <h3 className="font-display text-2xl font-bold text-text-primary">Navigazione sul sito</h3>
                <p>Il sito è ospitato su Vercel. Durante la navigazione possono essere trattati dati tecnici, come indirizzo IP, informazioni sul browser e richieste al server, necessari al funzionamento e alla sicurezza del servizio.</p>
                <p>La base giuridica è il legittimo interesse al corretto funzionamento e alla protezione del sito (art. 6, par. 1, lett. f del GDPR), ove applicabile.</p>
                <h3 className="pt-3 font-display text-2xl font-bold text-text-primary">Analisi delle visite</h3>
                <p>Solo dopo il consenso, il sito utilizza Google Analytics 4 per produrre statistiche sulle visite. Il servizio può trattare informazioni sulla navigazione, sulle pagine visitate, sul browser e sul dispositivo, oltre a identificatori associati ai cookie analitici. La base giuridica è il consenso (art. 6, par. 1, lett. a del GDPR).</p>
                <h3 className="pt-3 font-display text-2xl font-bold text-text-primary">Registrazione</h3>
                <p>La landing non raccoglie dati di registrazione e non consente di caricare documenti. La registrazione e la verifica dei documenti avvengono direttamente sulla piattaforma esterna Betpassion, secondo la sua informativa privacy.</p>
                <p>Bar Lamanna non riceve né conserva documenti attraverso la landing. Il sito non utilizza WhatsApp.</p>
              </PolicySection>

              <PolicySection id="cookie" number="03" title="Cookie e tracciamento">
                <p>Il tag di Google Analytics 4 (ID G-C863WHXE15) viene caricato soltanto dopo che l&apos;utente ha accettato i cookie analitici. In caso di rifiuto, il tag non viene caricato e la navigazione resta disponibile. Non sono implementati Meta Pixel o altri strumenti di tracciamento pubblicitario.</p>
                <p>Con il consenso, Google Analytics può utilizzare i cookie <code>_ga</code> e <code>_ga_*</code> per distinguere utenti e sessioni. La durata predefinita indicata da Google è di due anni, soggetta alle impostazioni del browser e del servizio. La preferenza espressa viene conservata nel <code>localStorage</code> del dispositivo per ricordare la scelta.</p>
                <p>Il pulsante “Preferenze cookie”, disponibile sul sito, permette di cambiare scelta o revocare il consenso. La revoca interrompe il caricamento del tag nelle visite successive e rimuove i cookie analitici accessibili dal sito. Eventuali cookie tecnici dell&apos;infrastruttura di hosting restano distinti da quelli analitici.</p>
              </PolicySection>

              <PolicySection id="conservazione" number="04" title="Hosting, destinatari e conservazione">
                <p>Vercel fornisce l&apos;infrastruttura di hosting e può trattare i dati tecnici necessari a rendere disponibile e proteggere il sito, secondo le condizioni applicabili al servizio.</p>
                <p>Quando viene prestato il consenso ai cookie analitici, Google riceve i dati di misurazione tramite Google Analytics 4. I tempi di conservazione dei dati di Analytics dipendono dalla configurazione effettiva della proprietà Google Analytics.</p>
                <p>Per maggiori informazioni è disponibile l&apos;<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={linkClass}>informativa privacy di Vercel<span className="sr-only"> (si apre in una nuova scheda)</span></a>.</p>
              </PolicySection>

              <PolicySection id="servizi-esterni" number="05" title="Servizi esterni">
                <p>La registrazione e le informazioni sul bonus sono accessibili tramite collegamenti a pagine esterne. I dati inseriti direttamente nelle pagine di destinazione non vengono raccolti da questa landing.</p>
                <ul className={listClass}>
                  <li><a href={landingLinks.registration} target="_blank" rel="noopener noreferrer" className={linkClass}>Registrazione Betpassion<span className="sr-only"> (si apre in una nuova scheda)</span></a></li>
                  <li><a href={landingLinks.bonus} target="_blank" rel="noopener noreferrer" className={linkClass}>Informazioni sul bonus<span className="sr-only"> (si apre in una nuova scheda)</span></a></li>
                </ul>
                <p>Per il trattamento dei dati sulla piattaforma di registrazione, consulta l&apos;<a href="https://www.betpassion.it/info/privacy" target="_blank" rel="noopener noreferrer" className={linkClass}>informativa privacy ufficiale di Betpassion<span className="sr-only"> (si apre in una nuova scheda)</span></a>.</p>
                <p>Per il servizio di analisi delle visite, consulta l&apos;<a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer" className={linkClass}>informativa privacy di Google<span className="sr-only"> (si apre in una nuova scheda)</span></a>.</p>
              </PolicySection>

              <PolicySection id="diritti" number="06" title="Diritti degli interessati">
                <p>Nei casi previsti dal GDPR, gli interessati possono chiedere l&apos;accesso, la rettifica, la cancellazione, la limitazione e la portabilità dei propri dati, nonché opporsi al trattamento.</p>
                <p>Per le richieste relative ai trattamenti del punto vendita è possibile contattare il numero <a href="tel:+393711316797" className={linkClass}>+39 371 131 6797</a> oppure scrivere all&apos;indirizzo postale:</p>
                <address className="not-italic text-text-primary">{privacyConfig.business.legalName}<br />{privacyConfig.business.streetAddress}<br />{privacyConfig.business.postalAddress}</address>
                <p>È inoltre possibile presentare reclamo al <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer" className={linkClass}>Garante per la protezione dei dati personali<span className="sr-only"> (si apre in una nuova scheda)</span></a>.</p>
              </PolicySection>
            </article>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-7 text-center text-sm text-text-secondary">
        <p>Betpassion × {privacyConfig.business.name} · Privacy Policy</p>
      </footer>
    </>
  );
}
