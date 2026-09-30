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
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-col gap-1 sm:items-end">
            <p className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">Follow</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-olive-ink underline-offset-4 hover:underline"
            >
              Instagram
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
