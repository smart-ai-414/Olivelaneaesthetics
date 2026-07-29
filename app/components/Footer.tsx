import { site } from "../site";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M13.5 21v-8.2h2.75l.41-3.19h-3.16V7.55c0-.92.26-1.55 1.58-1.55h1.68V3.14C15.89 3.05 14.88 3 13.7 3c-2.46 0-4.14 1.5-4.14 4.26v2.35H6.8v3.19h2.76V21h3.94Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
      <path d="M18.9 3H22l-7.3 8.3L23 21h-6.5l-5.1-6.5L5.4 21H2.3l7.8-8.9L2 3h6.6l4.6 5.9L18.9 3Zm-1.1 16.2h1.7L7.3 4.7H5.5l12.3 14.5Z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  facebook: { Icon: FacebookIcon, bg: "#3b5998", label: "Facebook" },
  instagram: { Icon: InstagramIcon, bg: "#c8315a", label: "Instagram" },
  x: { Icon: XIcon, bg: "#000000", label: "X (Twitter)" },
} as const;

/**
 * Mirrors the MedCove footer's structure, palette and proportions exactly —
 * full-width blue band, map card on the left, stacked hours/contact/social
 * on the right, plain copyright line below. Only the copy (address, phone,
 * email, links) is Olive Lane's.
 */
export default function Footer() {
  const socialEntries = (
    Object.keys(SOCIAL_ICONS) as Array<keyof typeof SOCIAL_ICONS>
  ).filter((key) => site.social[key]);

  return (
    <footer id="contact" className="mt-auto bg-footer text-white">
      {/*
        Same mx-auto/max-w-[1442px]/px-6 container as the header, so "Upland
        Location" lines up with the logo above it at every viewport width
        instead of matching by a hand-tuned padding value.
      */}
      <div className="mx-auto grid max-w-[1442px] gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-lg font-bold tracking-wide uppercase">
            Upland Location
          </h2>
          <div className="mt-6 max-w-[600px] overflow-hidden bg-white">
            <iframe
              src={site.address.mapEmbed}
              title={`Map to ${site.name}, ${site.address.line1}, ${site.address.line2}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0"
            />
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-lg font-bold">Business Hours</h2>
            <p className="mt-4 text-base">{site.hours}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-wide uppercase">
              Contact Us
            </h2>
            <p className="mt-4">
              <a href={site.phoneHref} className="hover:underline">
                {site.phone}
              </a>
            </p>
            <p className="mt-2">
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </p>
          </div>

          {socialEntries.length > 0 && (
            <div>
              <h2 className="text-lg font-bold tracking-wide uppercase">
                Follow Us
              </h2>
              <div className="mt-4 flex gap-3">
                {socialEntries.map((key) => {
                  const { Icon, bg, label } = SOCIAL_ICONS[key];
                  return (
                    <a
                      key={key}
                      href={site.social[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.name} on ${label}`}
                      style={{ backgroundColor: bg }}
                      className="flex h-9 w-9 items-center justify-center rounded-sm text-white"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/15 px-6 py-6">
        <p className="mx-auto max-w-[1442px] text-sm text-white/80">
          {`Copyright © 2026 ${site.name} - All Rights Reserved`}
        </p>
      </div>
    </footer>
  );
}
