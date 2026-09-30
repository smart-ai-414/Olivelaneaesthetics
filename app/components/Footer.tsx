import Image from "next/image";
import { site } from "../site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-beige bg-white">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-start lg:px-8">
        <a href="#top" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={1214}
            height={294}
            className="h-10 w-auto"
          />
        </a>

        <div className="grid gap-8 sm:grid-cols-3 lg:justify-items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">
              Visit
            </p>
            <p className="mt-2 text-deep">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">
              Contact
            </p>
            <p className="mt-2">
              <a href={site.phoneHref} className="text-deep hover:underline">
                {site.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${site.email}`} className="text-deep hover:underline">
                {site.email}
              </a>
            </p>
            {site.instagram ? (
              <p className="mt-1">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deep hover:underline"
                >
                  Instagram
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            ) : null}
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">
              Hours
            </p>
            <p className="mt-2 text-deep">{site.hours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-beige/80">
        <p className="mx-auto max-w-[1120px] px-5 py-5 text-sm sm:px-6 lg:px-8">
          Copyright &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
