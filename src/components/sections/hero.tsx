import Image from "next/image";

import { SITE } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ThaiLantern } from "@/components/brand/ornaments";

export function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-seigaiha">
      {/* Verticale sier-ornamenten (desktop) */}
      <ThaiLantern className="pointer-events-none absolute left-[17%] top-[180px] hidden h-[190px] xl:block" />
      <ThaiLantern className="pointer-events-none absolute right-[17%] top-[180px] hidden h-[190px] xl:block" />

      {/* Tekstblok */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-center px-6 pt-28 text-center lg:pt-32">
        <span className="inline-block rounded-full bg-beige-20 px-5 py-2 text-[15px] font-semibold text-brand">
          Thais restaurant in Brugge
        </span>

        <h1 className="heading-display mt-6 max-w-[900px] text-[40px] text-heading sm:text-[50px] lg:text-[60px]">
          Heerlijke Thaise keuken
          <br />
          in het hart van Brugge
        </h1>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href={SITE.reserveUrl} variant="primary">
            Reserveren
          </Button>
          <Button href={SITE.orderUrl} variant="soft">
            Bestellen
          </Button>
        </div>
      </div>

      {/* Overlappende food-fotografie, bleeding vanaf de onderrand.
          Hover op een bord: komt omhoog, richt zich op en volledig in beeld. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]">
        <div className="relative mx-auto h-full w-full max-w-[1440px]">
          {/* linkerschotel (kleiner, gelijk aan rechts) */}
          <div className="pointer-events-auto absolute -left-24 bottom-[-34px] hidden h-[400px] w-[440px] -rotate-6 transition-transform duration-300 ease-out will-change-transform hover:z-30 hover:-translate-y-8 hover:rotate-0 hover:scale-[1.04] sm:block">
            <Image
              src="/images/cta-dumplings.png"
              alt="Thaise dim sum in een kom"
              fill
              sizes="440px"
              className="object-contain object-bottom"
            />
          </div>
          {/* centraal schelpgerecht, grootst en prominent.
              Geen hover:z-30 → blijft achter de titel zodat die leesbaar blijft. */}
          <div className="pointer-events-auto absolute bottom-[-56px] left-1/2 h-[500px] w-[650px] -translate-x-1/2 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-8 hover:scale-[1.04]">
            <Image
              src="/images/hero-scallops.png"
              alt="Gestoomde sint-jakobsschelpen met orchidee"
              fill
              priority
              sizes="720px"
              className="object-contain object-bottom"
            />
          </div>
          {/* rechterschotel (kleiner, gelijk aan links) */}
          <div className="pointer-events-auto absolute -right-20 bottom-[-34px] hidden h-[400px] w-[440px] rotate-6 transition-transform duration-300 ease-out will-change-transform hover:z-30 hover:-translate-y-8 hover:rotate-0 hover:scale-[1.04] sm:block">
            <Image
              src="/images/cta-soup.png"
              alt="Pittige Thaise soep"
              fill
              sizes="440px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
