"use client";

import { useState } from "react";
import { site } from "../site";

/**
 * MedCove's header carried a seven-item nav for the whole urgent-care site
 * (Home, About Us, Forms, Telemedicine, Aesthetics, IV Therapy, Contact Us).
 * Olive Lane is a single page, so those become in-page anchors.
 */
const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-[1442px] items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-[0.14em] text-ink uppercase sm:text-2xl">
            Olive Lane
          </span>
          <span className="mt-1 text-[10px] font-semibold tracking-[0.34em] text-brand uppercase sm:text-[11px]">
            Aesthetics
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-ink transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="rounded-full bg-brand px-6 py-3 text-[15px] font-bold whitespace-nowrap text-white transition-opacity hover:opacity-90"
          >
            Call Us {site.phone}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className="block h-[2px] w-6 bg-ink" />
          <span className="block h-[2px] w-6 bg-ink" />
          <span className="block h-[2px] w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-gold/40 bg-white px-6 pt-2 pb-6 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-semibold text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="mt-3 inline-block rounded-full bg-brand px-6 py-3 text-[15px] font-bold text-white"
          >
            Call Us {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
