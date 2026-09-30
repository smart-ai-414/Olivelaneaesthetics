function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path strokeLinecap="round" d="M5.5 19.5c.7-3.4 3.3-5 6.5-5s5.8 1.6 6.5 5" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinejoin="round" d="M5 19C5 11 11.5 4.5 20 4c0 8.5-6.5 15-15 15Z" />
      <path strokeLinecap="round" d="M8.5 15.5C11 13 14 10 17 8" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinejoin="round" d="M12 3.5 19 6.2v5.6c0 4-2.7 6.8-7 8.2-4.3-1.4-7-4.2-7-8.2V6.2L12 3.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 10h8M8 14h5" />
    </svg>
  );
}

const points = [
  {
    title: "Personalized Care",
    body: "Treatments tailored to your individual features and aesthetic goals.",
    Icon: PersonIcon,
  },
  {
    title: "Natural\u2011Looking Results",
    body: "A thoughtful approach to enhancing your features while maintaining your natural appearance.",
    Icon: LeafIcon,
  },
  {
    title: "Medical-Led Treatments",
    body: "Injectable treatments provided by medical professionals with patient safety in mind.",
    Icon: ShieldIcon,
  },
  {
    title: "Transparent Pricing",
    body: "Clear starting prices and personalized recommendations to help you understand your options.",
    Icon: CardIcon,
  },
];

export default function WhyOliveLane() {
  return (
    <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="why-heading">
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-2xl">
          <h2 id="why-heading" className="text-4xl sm:text-5xl">
            Your Beauty, Your Way.
          </h2>
          <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed">
            <p>Every face is unique. Your treatment plan should be, too.</p>
            <p>
              At Olive Lane Aesthetics, we take a personalized approach to aesthetic
              care, focusing on your goals, facial features, and natural beauty.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {points.map(({ title, body, Icon }) => (
            <li
              key={title}
              className="rounded-[22px] border border-beige bg-white p-6 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-olive-ink">
                <Icon />
              </div>
              <h3 className="mt-5 text-[1.55rem] leading-tight text-wrap-pretty sm:text-[1.7rem]">
                {title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
