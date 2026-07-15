# 🚀 Launch checklist — Meirlaen

Af te werken **op het moment dat het echte domein gekoppeld wordt**. Zolang de site op
`meirlaen.vercel.app` draait, staat ze bewust op **noindex** (niet vindbaar in Google).

## ⚠️ BIJ DOMEINKOPPELING — indexering terug aanzetten
1. **`src/app/robots.ts`** → verwijder de `disallow: "/"` (zet toe: `allow: "/"`) en voeg de
   sitemap-verwijzing toe.
2. **`src/app/(site)/layout.tsx`** → verwijder `robots: { index: false, follow: false }`
   uit de `metadata` (of zet op `index: true`).
3. **`NEXT_PUBLIC_SERVER_URL`** (lokaal `.env` + Vercel production) → zet op het echte
   domein (bv. `https://www.meirlaen-bvba.be`) i.p.v. `https://meirlaen.vercel.app`.
4. Verifieer met Google Search Console dat de site indexeerbaar is + dien de sitemap in.

## Andere launch-taken
- [ ] Custom domein koppelen in Vercel + DNS.
- [ ] Admin-wachtwoord wijzigen (nu init-wachtwoord voor victor@vicaragency.com).
- [ ] `RESEND_API_KEY` + `EMAIL_TO` zetten (Vercel + `.env`) zodat contactformulier-mails
      echt verstuurd worden i.p.v. naar de serverconsole.
- [ ] Echte content bevestigen door klant (realisaties, nieuws, jobs, FAQ-antwoorden).
- [ ] Social media links: klant heeft momenteel geen socials — footer-icons zijn verwijderd/uit;
      terugzetten met echte URL's zodra beschikbaar.
- [ ] OG-preview-afbeelding(en) controleren.
