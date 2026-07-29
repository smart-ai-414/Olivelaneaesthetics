import Image from "next/image";

const botoxUnits = [
  ["Glabella (between the eyes)", "15-20 units"],
  ["Forehead", "10-21 units"],
  ["Crowsfeet", "5-20 units"],
  ["Eyebrow Lift", "10-20 units"],
  ["Full Upper Face", "30-60 units"],
  ["Chin", "6-12 units"],
  ["Downturned Smile", "6-26 units"],
  ["TMJ/Facial Slimming", "30-40 units"],
  ["Nefertiti Neck Lift", "40-80 units"],
  ["Migraine/Heachaches", "30-100 units"],
  ["Underarms (sweating)", "30-60 units"],
];

const fillers = [
  {
    name: "Restylane L",
    price: "$500 per syringe",
    detail: "Smooth filler for fine lines, subtle volume, and light lip enhancement",
  },
  {
    name: "Restylane Lyft",
    price: "$600 per syringe",
    detail: "Thicker filler for deeper volume and facial structure (cheeks, midface)",
  },
  {
    name: "Restylane Defyne",
    price: "$650 per syringe",
    detail: "Flexible filler for natural movement and deeper lines (lower face)",
  },
  {
    name: "Restylane Kysse",
    price: "$750 per syringe",
    detail: "Our preferred lip filler for soft, natural-looking lips",
  },
];

function ServicePhoto({
  src,
  alt,
  align,
}: {
  src: string;
  alt: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`mb-5 ${align === "right" ? "lg:ml-auto" : ""} mx-auto w-full max-w-[410px] lg:mx-0`}
    >
      <Image
        src={src}
        alt={alt}
        width={410}
        height={400}
        sizes="410px"
        className="h-[400px] w-full rounded-tr-[20px] rounded-bl-[20px] border border-stone object-cover shadow-[0_1px_10px_rgba(0,0,0,0.3)]"
      />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="pt-[5px] pb-[10px]">
      <div className="mx-auto grid max-w-[1080px] gap-12 px-6 py-8 lg:grid-cols-2">
        {/* Wrinkle reducers */}
        <div>
          <ServicePhoto
            src="/images/wrinkle-reducers.avif"
            alt="Diagram of typical neurotoxin treatment areas and unit ranges across the face"
            align="left"
          />
          <h2 className="text-[20px] text-cocoa uppercase">Wrinkle Reducers</h2>
          <p className="mt-3 max-w-[380px] font-serif-alt text-[18px] font-bold text-black">
            Botox|Xeomin|Dysport
          </p>
          <div className="rich-text mt-3 max-w-[380px] text-base leading-[1.7]">
            <p>
              Turn back the clock with our wrinkle-reducing treatments, designed
              to smooth expression lines and prevent new ones from forming. Using
              advanced neurotoxins such as Botox, Dysport and Xeomin our skilled
              providers target the tiny muscles that cause fine lines, leaving
              your skin refreshed, youthful and naturally radiant. Treatments can
              enhance features with options like a subtle lip flip for a
              fuller-looking smile.
            </p>
          </div>

          <div id="pricing" className="mt-5 max-w-[380px] scroll-mt-28">
            <p className="font-serif-alt text-[18px] text-black">
              Botox &nbsp;$11/Unit
            </p>
            <p className="mt-3 font-serif-alt text-[18px] text-black">
              Dysport/Xeomin $10/Unit
            </p>
            <div className="rich-text mt-4 text-base leading-[1.7]">
              <p>The following are approximate units per area:</p>
              <ul>
                {botoxUnits.map(([area, units]) => (
                  <li key={area}>
                    {area}: {units}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dermal fillers */}
        <div>
          <ServicePhoto
            src="/images/dermal-fillers.avif"
            alt="Diagram of dermal filler treatment areas across the face, neck and hands"
            align="right"
          />
          <div className="lg:ml-auto lg:max-w-[395px]">
            <h2 className="text-[20px] text-cocoa uppercase">Dermal Fillers</h2>
            <div className="rich-text mt-3 text-base leading-[1.7]">
              <p>
                As we age, the natural volume and elasticity of our youthful skin
                diminishes which leads to the formation of fine lines, wrinkles,
                and folds. Dermal filler is a gel-like injectable that instantly
                restores volume loss and smooths away deep lines and facial
                creases, revealing a more youthful appearance.
              </p>
              <p>
                Dermal filler injections are FDA-approved and a generally safe
                alternative to more invasive surgical treatments. Dermal filler
                treatments are extremely popular, with over 1 million men and
                women undergoing the treatment each year.
              </p>
            </div>

            <div className="mt-5 space-y-4 text-base text-black">
              {fillers.map((filler) => (
                <div key={filler.name}>
                  <ul className="list-disc pl-6">
                    <li>
                      <strong>
                        {filler.name} &ndash; {filler.price}
                      </strong>
                    </li>
                  </ul>
                  <p className="mt-2 leading-[1.5]">{filler.detail}</p>
                </div>
              ))}
            </div>

            <div className="rich-text mt-5 text-base leading-[1.7]">
              <p>
                Don&rsquo;t worry, we don&rsquo;t expect you to know which
                product to choose. We&rsquo;re transparent with our pricing so
                you know exactly what to expect. Our aesthetic experts will guide
                you and recommend the best option to achieve natural-looking
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
