import BookLink from "./BookLink";

const leafPath = "M0 0C18-13 46-11 62 0C46 11 18 13 0 0Z";

/** Brand mark for the portrait slot until a provider photograph is available. */
function OliveBranch() {
  const leaves = [
    { y: 72, side: 1 },
    { y: 124, side: -1 },
    { y: 176, side: 1 },
    { y: 228, side: -1 },
    { y: 280, side: 1 },
    { y: 332, side: -1 },
  ];

  return (
    <svg viewBox="0 0 220 430" className="h-[82%] w-auto max-h-[480px]" aria-hidden="true">
      <path
        d="M110 28c8 78-6 150 0 230 4 62 6 110 2 164"
        fill="none"
        stroke="#5e6550"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {leaves.map(({ y, side }) => (
        <g key={y} transform={`translate(110 ${y}) rotate(${side === 1 ? -36 : 144})`}>
          <path
            d={leafPath}
            fill="#78806a"
            fillOpacity="0.18"
            stroke="#5e6550"
            strokeWidth="1.15"
            strokeLinejoin="round"
          />
          <path d="M10 0h42" fill="none" stroke="#5e6550" strokeWidth="0.75" />
        </g>
      ))}
      <ellipse cx="92" cy="202" rx="7" ry="10" fill="#78806a" fillOpacity="0.28" stroke="#5e6550" transform="rotate(-20 92 202)" />
      <ellipse cx="128" cy="258" rx="7" ry="10" fill="#78806a" fillOpacity="0.28" stroke="#5e6550" transform="rotate(18 128 258)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="px-4 pt-5 pb-6 sm:px-6 sm:pt-6 lg:px-8" aria-labelledby="hero-heading">
      <div className="mx-auto grid w-full max-w-[1120px] items-stretch gap-3 rounded-[28px] border border-beige bg-white p-3 shadow-[0_24px_60px_-40px_rgba(75,73,62,0.55)] sm:gap-4 sm:p-4 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col justify-center rounded-[20px] bg-ivory px-5 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <h1
            id="hero-heading"
            className="max-w-[11ch] text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.35rem]"
          >
            Enhance Your Natural Beauty.
          </h1>
          <div className="mt-6 max-w-md space-y-4 text-[1.05rem] leading-relaxed">
            <p>
              Discover personalized aesthetic treatments designed to help you look
              refreshed, confident, and beautifully yourself.
            </p>
            <p>
              At Olive Lane Aesthetics, our experienced medical providers offer
              injectable treatments with a focus on natural-looking results and
              individualized care.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <BookLink className="btn btn-primary w-full sm:w-auto">
              Book your appointment
              <span aria-hidden="true">&rarr;</span>
            </BookLink>
            <a href="#treatments" className="btn btn-secondary w-full sm:w-auto">
              Explore treatments
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>

        <div
          className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[20px] sm:min-h-[340px]"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, #efeae2 0%, #d9d0c2 72%)",
          }}
        >
          <OliveBranch />
        </div>
      </div>
    </section>
  );
}
