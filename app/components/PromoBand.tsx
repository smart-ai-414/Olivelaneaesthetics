import { site } from "../site";

/**
 * Port of the Divi promo row. Its `custom_css_free_form` is the authority on
 * layout, not the module settings:
 *
 *   selector { display:flex; align-items:stretch; min-height:0 !important }
 *   selector .et_pb_column { display:flex; flex-direction:column;
 *     justify-content:flex-start; align-items:center; padding:0 30px }
 *   selector .et_pb_column:nth-child(2) { justify-content:center }
 *   col 1/3 inner blocks: width 280px, text-align left
 *   col 2 inner blocks:   width 340px, text-align left, titles nowrap
 *   selector .et_pb_column + .et_pb_column { border-left:1px solid #C8A96E }
 *
 * Two consequences worth spelling out, because the module settings suggest
 * otherwise: `min-height: 0` cancels the row's `min_height="428.3px"`, so the
 * band is only as tall as its content; and `align-items: center` centers each
 * fixed-width block inside its column, so the copy sits well right of the
 * 30px column padding.
 *
 * Below 767px the same stylesheet stacks the columns, makes every block full
 * width and centred, and turns the vertical rules into horizontal ones.
 */

/**
 * Both blurb icons are sized to the full height of the two text lines beside
 * them and centred against that block, so icon and copy read as one row.
 */
const ICON_CLASS = "h-[50px] w-[50px] shrink-0 pr-2";

/** Divi icon f274 — calendar with a check. */
function CalendarCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#383838"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={ICON_CLASS}
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
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={ICON_CLASS}
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
      <div className="mx-auto flex max-w-[1442px] flex-col items-stretch md:flex-row">
        {/* Column 1 — the offer */}
        <div className="flex flex-col items-center justify-start px-[30px] py-5 md:w-[33%] md:py-[34px]">
          <div className="w-full text-center md:w-[280px] md:text-left">
            <p className="text-base font-bold tracking-[2px] text-brand uppercase">
              {promo.eyebrow}
            </p>
            <p className="mt-5 font-display text-[48px] font-bold leading-none tracking-[4px] text-ink">
              {promo.headline}
            </p>
            <p className="mt-5 font-display text-[27px] leading-none tracking-[1.5px] text-ink uppercase">
              {promo.subject}
            </p>
            <p className="mt-6 text-[15px] font-semibold">
              when you spend{" "}
              <strong className="text-black">$600 or more</strong>
            </p>
          </div>
        </div>

        {/* Column 2 — reassurance. Vertically centred against the tallest column. */}
        <div className="flex flex-col items-center justify-center border-t border-gold px-[30px] py-6 md:w-[34%] md:border-t-0 md:border-l md:py-[34px]">
          <div className="flex w-full items-center text-center md:w-[340px] md:text-left">
            <CalendarCheckIcon />
            <div>
              <h4 className="text-base font-bold text-ink md:whitespace-nowrap">
                LIMITED TIME ONLY!
              </h4>
              <p className="mt-1 text-[14.5px] font-semibold">{promo.expires}</p>
            </div>
          </div>
          <div className="mt-[30px] flex w-full items-center text-center md:w-[340px] md:text-left">
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
        <div className="flex flex-col items-center justify-start border-t border-gold px-[30px] py-6 md:w-[33%] md:border-t-0 md:border-l md:py-[34px]">
          <div className="w-full text-center md:w-[280px] md:text-left">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand px-4 py-[6px] text-[19px] leading-[1.7em] text-white transition-opacity hover:opacity-90 md:whitespace-nowrap"
            >
              BOOK YOUR APPOINTMENT
            </a>
            <div className="mt-[41px] text-[15px] font-semibold">
              <p className="leading-[0.8em]">How to Redeem:</p>
              <p className="mt-[15px] leading-[0.8em]">
                Mention code{" "}
                <span className="text-base font-bold text-brand">
                  {promo.code}
                </span>
              </p>
              <p className="mt-[15px] leading-[0.8em]">
                when booking or at your visit.
              </p>
              <p className="mt-[15px] leading-[0.8em]">
                New and existing patients welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
