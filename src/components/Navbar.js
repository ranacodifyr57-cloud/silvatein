"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Emblem } from "./Logo";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-ink text-ivory/70">
        <div className="container-x flex items-center justify-center gap-3 py-2 text-center text-[0.6rem] uppercase tracking-[0.22em]">
          <span>{site.delivery}</span>
          <span className="hidden h-3 w-px bg-ivory/20 sm:inline-block" />
          <span className="hidden sm:inline">{site.ordering}</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-ivory/12 bg-noir/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-ivory transition-opacity hover:opacity-70"
          >
            <Emblem className="h-9 w-9 shrink-0" />
            <span className="hidden font-sans text-[0.95rem] font-medium uppercase tracking-brand sm:inline">
              Silvatein
            </span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-[0.7rem] uppercase tracking-widest text-ivory/85 hover:text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn-solid hidden md:inline-flex"
          >
            DM to Order
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            <span className="space-y-[5px]">
              <span
                className={`block h-px w-6 bg-ivory transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-ivory transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-ivory transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-ivory/10 bg-noir transition-[max-height] duration-500 md:hidden ${
            open ? "max-h-96" : "max-h-0 border-transparent"
          }`}
        >
          <ul className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-solid w-full"
              >
                DM to Order
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
