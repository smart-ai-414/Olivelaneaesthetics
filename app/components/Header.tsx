"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { site } from "../site";
import BookLink from "./BookLink";

const links = [
  { label: "Home", href: "#top" },
  { label: "Treatments", href: "#treatments" },
  { label: "Contact", href: "#contact" },
];

function BookMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="btn btn-primary btn-sm"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        Book
        <span
          aria-hidden="true"
          className={`inline-block border-x-[4px] border-t-[5px] border-x-transparent border-t-current transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 z-50 mt-2 w-64 rounded-2xl border border-beige bg-white p-2 shadow-[0_16px_40px_-24px_rgba(75,73,62,0.5)]"
        >
          <BookLink
            role="menuitem"
            className="block rounded-xl px-3 py-3 text-left text-sm font-semibold tracking-normal text-deep normal-case hover:bg-ivory"
            onClick={() => setOpen(false)}
          >
            Book appointment
          </BookLink>
          <BookLink
            href={site.consultationUrl}
            role="menuitem"
            className="block rounded-xl px-3 py-3 text-left text-sm font-semibold tracking-normal text-deep normal-case hover:bg-ivory"
            onClick={() => setOpen(false)}
          >
            Book a free consultation
          </BookLink>
        </div>
      ) : null}
    </div>
  );
}

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
          <BookMenu />
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 lg:hidden">
          <BookMenu />
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
        <BookLink onClick={() => setOpen(false)} className="block py-3 text-base font-semibold text-deep">
          Book appointment
        </BookLink>
        <BookLink
          href={site.consultationUrl}
          onClick={() => setOpen(false)}
          className="block pb-3 text-base font-semibold text-deep"
        >
          Book a free consultation
        </BookLink>
      </nav>
    </header>
  );
}
