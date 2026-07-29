# Olive Lane Aesthetics

Static marketing site for olivelaneaesthetics.com — a Next.js rebuild of the
Aesthetics page from medcoveupland.com (Divi/WordPress). No backend, no
database.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4
- Fonts via `next/font/google`: Open Sans (body), Zen Antique Soft (promo
  display), Noto Serif KR ("Aesthetic Services" banner), Noto Serif
  Devanagari (service pricing)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

### Note on `HTTP_PROXY`

`next/font` downloads Google Fonts at build time and routes those requests
through `HTTP_PROXY` if it is set. If your shell has an unreachable proxy in
that variable, the build fails with `Failed to fetch font ... Please check
your network connection`. Clear it for the build:

```powershell
$env:HTTP_PROXY=''; npm run build
```

`build` and `dev` are pinned to `--webpack`. Turbopack crashes on some
Windows machines with `Illegal instruction`; webpack builds are slower but
reliable everywhere.

## Where to edit things

| What                                                            | Where                        |
| --------------------------------------------------------------- | ---------------------------- |
| Phone, email, address, hours, booking URL, promo copy and code   | `app/site.ts`                |
| Brand colors (including the footer band)                         | `app/globals.css` (`@theme`) |
| Page section order                                               | `app/page.tsx`               |
| Individual sections                                              | `app/components/`            |

`assets/` holds the original source material: `Aesthetics.json` is the Divi
page export the content was transcribed from. Web-ready copies of the images
live in `public/images/`.

## Carried over from MedCove — needs a decision

- **Booking URL** still points at MedCove's ZipClinical page
  (`zipclinical.com/book/medcove`). Olive Lane needs its own booking link.
- **Phone number** is still MedCove's front desk, `(909) 287-3888`.
- **The "Aesthetic Services" banner renders twice**, because the Divi export
  contains that section twice and the live MedCove page renders it twice too.
  If that was accidental, delete the second `<HeroBanner />` in
  `app/page.tsx`.
- **Footer keeps MedCove's corporate blue** (`--color-footer` in
  `app/globals.css`, `#0b6cb1`) at the client's request.
- **Social links** are empty in `app/site.ts`, so the "Follow Us" block is
  hidden. Fill in `social.facebook` / `social.instagram` / `social.x` to show
  it.
- **No logo asset** exists yet, so the header uses a text wordmark.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project**, import the repo. Framework preset is
   detected as Next.js; no environment variables are needed.
3. Deploy, then **Settings → Domains** and add both `olivelaneaesthetics.com`
   and `www.olivelaneaesthetics.com`.

## DNS at GoDaddy

Vercel will show the exact values to use; these are the current defaults.
Set them under **My Products → Domain → DNS**:

| Type  | Name  | Value                  |
| ----- | ----- | ---------------------- |
| A     | `@`   | `76.76.21.21`          |
| CNAME | `www` | `cname.vercel-dns.com` |

Leave any existing GoDaddy parking/forwarding records removed, or the domain
will not verify.

## Google Workspace mail (info@olivelaneaesthetics.com)

Mail and web hosting are independent — pointing the A record at Vercel does
not affect mail, as long as you **add** the MX records rather than replacing
the whole zone.

1. Sign up for Google Workspace using `olivelaneaesthetics.com`.
2. Verify the domain with the TXT record Google provides.
3. Add Google's MX record at GoDaddy — one record, priority 1:

   | Type | Name | Priority | Value            |
   | ---- | ---- | -------- | ---------------- |
   | MX   | `@`  | 1        | `smtp.google.com` |

4. Add SPF as a TXT record on `@`: `v=spf1 include:_spf.google.com ~all`
5. Turn on DKIM in the Google Admin console (Apps → Google Workspace →
   Gmail → Authenticate email) and add the TXT record it generates.

Transactional email (Mailgun, Resend) is only needed if a contact form is
added later. The page currently has no form — every call to action is a phone
link, a mail link, or the external booking page.
