"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "../site";
import BookLink from "./BookLink";

const links = [
  { label: "Home", href: "#top" },
  { label: "Treatments", href: "#treatments" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-beige bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="min-w-0">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={1214}
            height={294}
            priority
            className="h-8 w-auto max-w-[148px] sm:h-11 sm:max-w-none"
          />
        </a>

        <nav className="ml-auto hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-deep/80 transition-colors hover:text-deep"
            >
              {link.label}
            </a>
          ))}
          <BookLink className="btn btn-primary btn-sm">Book now</BookLink>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 lg:hidden">
          <BookLink className="btn btn-primary btn-sm">
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book now</span>
          </BookLink>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute top-1/2 left-0 h-0.5 w-5 rounded-full bg-deep transition ${open ? "rotate-45" : "-translate-y-[6px]"}`}
              />
              <span
                className={`absolute top-1/2 left-0 h-0.5 w-5 rounded-full bg-deep transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute top-1/2 left-0 h-0.5 w-5 rounded-full bg-deep transition ${open ? "-rotate-45" : "translate-y-[6px]"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary"
        className={`border-t border-beige bg-white px-5 py-2 lg:hidden ${open ? "block" : "hidden"}`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block py-3 text-base text-deep"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
