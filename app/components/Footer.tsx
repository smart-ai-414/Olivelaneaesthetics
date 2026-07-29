import { site } from "../site";

/**
 * MedCove's footer band is its corporate blue (#0b6cb1). Olive Lane is a
 * separate brand, so this uses a deep cocoa drawn from the page palette
 * instead. To go back to the original blue, change --color-footer in
 * globals.css — nothing else depends on it.
 */
export default function Footer() {
  return (
    <footer id="contact" className="mt-auto bg-footer text-white">
      <div className="mx-auto grid max-w-[1080px] gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-lg font-bold tracking-wide uppercase">
            Upland Location
          </h2>
          <div className="mt-6 overflow-hidden bg-white">
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
            <p className="mt-2 text-base">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>

          {(site.social.facebook || site.social.instagram) && (
            <div>
              <h2 className="text-lg font-bold tracking-wide uppercase">
                Follow Us
              </h2>
              <div className="mt-4 flex gap-3">
                {site.social.facebook && (
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on Facebook`}
                    className="flex h-9 w-9 items-center justify-center bg-[#3b5998] text-sm font-bold"
                  >
                    f
                  </a>
                )}
                {site.social.instagram && (
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on Instagram`}
                    className="flex h-9 w-9 items-center justify-center bg-[#e1306c] text-sm font-bold"
                  >
                    ig
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/15 px-6 py-6">
        <p className="mx-auto max-w-[1080px] text-sm text-white/80">
          {`Copyright © 2026 ${site.name} – All Rights Reserved`}
        </p>
      </div>
    </footer>
  );
}
