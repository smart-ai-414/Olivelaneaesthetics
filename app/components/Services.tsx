import BookLink from "./BookLink";
import { site } from "../site";

const wrinkleAreas = [
  "Botox",
  "Dysport",
  "Xeomin",
  "Lip Flip",
  "Forehead Lines",
  "Frown Lines",
  "Crow's Feet",
];

const fillerAreas = [
  "Lip Enhancement",
  "Cheeks and Midface",
  "Chin and Jawline",
  "Facial Volume Restoration",
];

const fillers = [
  {
    name: "Restylane L",
    price: "$500",
    detail: "For select facial lines and subtle volume enhancement.",
  },
  {
    name: "Restylane Lyft",
    price: "$600",
    detail: "For select areas requiring structural support and volume.",
  },
  {
    name: "Restylane Defyne",
    price: "$650",
    detail: "For select deeper facial folds and areas requiring flexibility.",
  },
  {
    name: "Restylane Kysse",
    price: "$750",
    detail: "Designed for lip enhancement and natural-looking lip movement.",
  },
];

function AreaList({ areas }: { areas: string[] }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {areas.map((area) => (
        <li
          key={area}
          className="rounded-full border border-beige bg-ivory px-3.5 py-1.5 text-sm text-deep"
        >
          {area}
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  return (
    <section
      id="treatments"
      className="bg-white px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-label="Treatments"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.8fr)] lg:gap-16">
          <div>
            <h2 id="wrinkle-heading" className="text-4xl sm:text-5xl">
              Wrinkle Relaxers
            </h2>
            <div className="mt-5 max-w-xl space-y-4 text-[1.05rem] leading-relaxed">
              <p>
                Smooth the appearance of expression lines with personalized
                injectable treatments.
              </p>
              <p>
                Olive Lane offers Botox, Dysport, and Xeomin to address certain
                facial lines and help create a refreshed, natural-looking
                appearance. Your provider will help determine which treatment may
                be appropriate for your goals.
              </p>
            </div>
            <AreaList areas={wrinkleAreas} />
            <p className="mt-4 text-sm leading-relaxed">
              Other provider-approved treatment areas are available.
            </p>
          </div>

          <div className="rounded-[22px] bg-beige px-6 py-7 sm:px-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">
              Starting prices
            </p>
            <dl className="mt-4 divide-y divide-deep/10">
              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-deep">Botox</dt>
                <dd className="text-right font-serif text-[1.85rem] leading-none text-deep">
                  $11
                  <span className="ml-1 font-sans text-sm font-medium text-body">
                    / unit
                  </span>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-deep">Dysport / Xeomin</dt>
                <dd className="text-right font-serif text-[1.85rem] leading-none text-deep">
                  $10
                  <span className="ml-1 font-sans text-sm font-medium text-body">
                    / unit
                  </span>
                </dd>
              </div>
            </dl>
            <p className="mt-2 text-sm leading-relaxed text-deep">
              These are starting prices. Your provider will review the cost of
              your plan.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-3">
          <BookLink className="btn btn-primary">
            Book your appointment
            <span aria-hidden="true">&rarr;</span>
          </BookLink>
          <BookLink
            href={site.consultationUrl}
            className="text-sm font-semibold text-olive-ink underline-offset-4 hover:underline"
          >
            Book a free consultation
          </BookLink>
        </div>

        <div className="mt-20 border-t border-beige pt-16 sm:mt-24 sm:pt-20">
          <h2 id="filler-heading" className="text-4xl sm:text-5xl">
            Dermal Fillers
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-[1.05rem] leading-relaxed">
            <p>
              Restore facial volume and enhance your natural features with
              personalized dermal filler treatments.
            </p>
            <p>
              Our providers offer filler options designed to address volume loss,
              enhance facial contours, and create balanced, natural-looking
              results. Every treatment plan is tailored to your individual anatomy
              and goals.
            </p>
          </div>
          <AreaList areas={fillerAreas} />
          <p className="mt-4 text-sm leading-relaxed">
            Other provider-approved areas are available.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {fillers.map((filler) => (
              <li
                key={filler.name}
                className="flex flex-col rounded-[22px] border border-beige bg-ivory p-6 sm:p-7"
              >
                <h3 className="text-[1.85rem] leading-tight">{filler.name}</h3>
                <p className="mt-3 font-serif text-[2rem] leading-none text-deep">
                  {filler.price}
                  <span className="ml-2 font-sans text-sm font-medium text-body">
                    per syringe
                  </span>
                </p>
                <p className="mt-4 flex-1 leading-relaxed">{filler.detail}</p>
                <BookLink className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-olive-ink underline-offset-4 hover:underline">
                  Book appointment
                  <span aria-hidden="true">&rarr;</span>
                </BookLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
