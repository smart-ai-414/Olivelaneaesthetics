import { site } from "../site";

/** Divi icon f274 — calendar with a check. */
function CalendarCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#383838"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 shrink-0"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4" />
    </svg>
  );
}

/** Divi icon f007 — person. */
function PersonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#383838"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21c0-4.1 3.4-6.5 7.5-6.5s7.5 2.4 7.5 6.5" />
    </svg>
  );
}

export default function PromoBand() {
  const { promo } = site;

  return (
    <section
      id="top"
      className="bg-cream bg-cover bg-center py-[5px]"
      style={{ backgroundImage: "url(/images/promo-bg.png)" }}
      aria-label={promo.eyebrow}
    >
      <div className="mx-auto grid max-w-[1442px] items-stretch gap-0 px-0 py-6 md:min-h-[428px] md:grid-cols-[33%_34%_33%] md:py-0">
        {/* Column 1 — the offer */}
        <div className="flex flex-col items-center justify-center px-[30px] py-6 text-center md:items-start md:justify-start md:pt-10 md:text-left">
          <p className="text-base font-bold tracking-[2px] text-brand uppercase">
            {promo.eyebrow}
          </p>
          <p className="mt-6 font-display text-[48px] leading-none tracking-[4px] text-ink">
            {promo.headline}
          </p>
          <p className="mt-5 font-display text-[27px] leading-none tracking-[1.5px] text-ink uppercase">
            {promo.subject}
          </p>
          <p className="mt-7 text-[15px] font-semibold">
            when you spend <strong className="text-black">$600 or more</strong>
          </p>
        </div>

        {/* Column 2 — reassurance */}
        <div className="flex flex-col items-center justify-center gap-8 border-t border-gold px-[30px] py-8 md:items-start md:border-t-0 md:border-l md:py-0">
          <div className="flex w-full max-w-[340px] items-start gap-2 text-center md:text-left">
            <CalendarCheckIcon />
            <div>
              <h4 className="text-base font-bold text-ink md:whitespace-nowrap">
                LIMITED TIME ONLY!
              </h4>
              <p className="mt-1 text-[14.5px] font-semibold">{promo.expires}</p>
            </div>
          </div>
          <div className="flex w-full max-w-[340px] items-start gap-2 text-center md:text-left">
            <PersonIcon />
            <div>
              <h4 className="text-base font-bold text-ink md:whitespace-nowrap">
                NATURAL-LOOKING RESULTS
              </h4>
              <p className="mt-1 text-[14.5px] font-semibold">
                by experienced medical providers
              </p>
            </div>
          </div>
        </div>

        {/* Column 3 — call to action */}
        <div className="flex flex-col items-center border-t border-gold px-[30px] py-8 text-center md:items-start md:border-t-0 md:border-l md:pt-[54px] md:text-left">
          <div className="w-full max-w-[280px]">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand px-[22px] py-[10px] text-[19px] font-medium text-white transition-opacity hover:opacity-90 md:whitespace-nowrap"
            >
              BOOK YOUR APPOINTMENT
            </a>
            <div className="mt-6 space-y-2 text-[15px] font-semibold">
              <p>How to Redeem:</p>
              <p>
                Mention code{" "}
                <span className="text-base font-bold text-brand">
                  {promo.code}
                </span>
              </p>
              <p>when booking or at your visit.</p>
              <p>New and existing patients welcome.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
