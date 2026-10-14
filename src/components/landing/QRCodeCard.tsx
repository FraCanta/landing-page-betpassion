import Image from "next/image";
import { landingAssets } from "@/config/landing-assets";
import { landingLinks } from "@/config/site";

export function QRCodeCard() {
  return (
    <section aria-labelledby="qr-heading" className="flex h-full flex-col items-center rounded-xl border border-border bg-background/90 p-5 text-center">
      <h3 id="qr-heading" className="font-display text-xl font-bold uppercase leading-tight text-text-primary">Scansiona e registrati</h3>
      <a href={landingLinks.registration} className="mt-4 block rounded-lg bg-white p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Apri la registrazione Betpassion; QR code della registrazione">
        <span className="relative block bg-white p-2">
          <Image src={landingAssets.qrCode} alt="QR code per la registrazione Betpassion" width={128} height={128} sizes="128px" className="h-32 w-32 object-contain" />
          <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-4 border-t-4 border-accent" aria-hidden="true" />
          <span className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-4 border-t-4 border-accent" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-4 border-l-4 border-accent" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-4 border-r-4 border-accent" aria-hidden="true" />
        </span>
      </a>
      <p className="mt-3 text-xs leading-5 text-text-secondary">Apri il tuo conto in pochi minuti.</p>
    </section>
  );
}
