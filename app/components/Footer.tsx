import Image from "next/image";
import { site } from "../site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-beige bg-white">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={1214}
            height={294}
            className="h-10 w-auto"
          />
        </a>
        <div className="flex flex-col gap-2 sm:items-end">
          {site.instagram ? (
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-deep hover:underline"
            >
              Instagram
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
