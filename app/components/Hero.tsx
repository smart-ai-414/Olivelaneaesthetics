import BookLink from "./BookLink";

export default function Hero() {
  return (
    <section id="top" className="px-4 pt-5 pb-6 sm:px-6 sm:pt-6 lg:px-8" aria-labelledby="hero-heading">
      <div className="mx-auto w-full max-w-[1120px] rounded-[28px] border border-beige bg-white p-3 shadow-[0_24px_60px_-40px_rgba(75,73,62,0.55)] sm:p-4">
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
      </div>
    </section>
  );
}
