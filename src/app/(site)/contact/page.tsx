import type { Metadata } from "next";

import { PageBanner } from "@/components/sections/page-banner";
import { ContactInfo } from "@/components/sections/contact-info";
import {
  JsonLd,
  breadcrumbSchema,
  restaurantSchema,
} from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Nakhon Thai vind je in de Philipstockstraat 12, 8000 Brugge. 7 op 7 open voor lunch en diner. Reserveer of bel 050 33 18 48.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          restaurantSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageBanner title="Contact" />
      <ContactInfo />
    </>
  );
}
