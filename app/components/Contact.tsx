import { site } from "../site";
import BookLink from "./BookLink";

export default function Contact() {
  return (
    <section id="contact" className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[28px] border border-beige bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
            <h2 id="contact-heading" className="text-4xl leading-[1.05] sm:text-[3.15rem]">
              Your Next Chapter Starts Here.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed">
              Ready to explore your aesthetic goals? We&rsquo;re here to help you
              take the next step.
            </p>
            <BookLink className="btn btn-primary mt-8">
              Book your appointment
              <span aria-hidden="true">&rarr;</span>
            </BookLink>
          </div>

          <div className="bg-ivory px-6 py-10 sm:px-10 sm:py-14 lg:h-full lg:px-12">
            <dl className="space-y-7">
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">
                  Visit
                </dt>
                <dd className="mt-2 text-deep">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </dd>
                <dd className="mt-2">
                  <a
                    href={site.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-olive-ink underline-offset-4 hover:underline"
                  >
                    Get directions
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">
                  Contact
                </dt>
                <dd className="mt-2">
                  <a href={site.phoneHref} className="text-lg text-deep hover:underline">
                    {site.phone}
                  </a>
                </dd>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-deep underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">
                  Hours
                </dt>
                <dd className="mt-2 text-deep">{site.hours}</dd>
              </div>
            </dl>
          </div>
        </div>

        <iframe
          src={site.address.mapEmbed}
          title={`Map showing ${site.name}, ${site.address.line1}, ${site.address.line2}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-64 w-full border-0 bg-beige sm:h-72"
        />
      </div>
    </section>
  );
}
