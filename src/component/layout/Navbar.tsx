"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, HeartPulse, Menu, Phone, X } from "lucide-react";
import { navLinks, services } from "../lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => {
    setOpen(false);
    setMobileServices(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      {/* Floating pill */}
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-primary/10 bg-white/85 shadow-lg shadow-primary/10 backdrop-blur-xl"
            : "border-white/60 bg-white/60 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-primary-dark">
            Physio<span className="text-accent">Care</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-body hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  Services
                  <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                </Link>

                {/* Dropdown panel */}
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-2xl border border-primary/10 bg-white p-2 shadow-xl shadow-primary/10">
                    {services.map((s, i) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-body transition hover:bg-surface hover:text-primary"
                        >
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            {i + 1}
                          </span>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-body hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Book Appointment
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary-dark md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu (animated) */}
      <div
        className={`mx-auto mt-2 grid max-w-6xl transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-3xl border border-primary/10 bg-white/95 p-3 shadow-xl backdrop-blur-xl">
            <ul className="flex flex-col">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileServices(!mobileServices)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-body"
                    >
                      Services
                      <ChevronDown
                        className={`h-4 w-4 transition ${mobileServices ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServices && (
                      <ul className="mb-2 ml-4 border-l-2 border-primary/20 pl-3">
                        <li>
                          <Link href="/services" onClick={closeMenu} className="block py-2 text-sm font-medium text-primary">
                            All Services
                          </Link>
                        </li>
                        {services.map((s) => (
                          <li key={s.href}>
                            <Link href={s.href} onClick={closeMenu} className="block py-2 text-sm text-body">
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block rounded-xl px-4 py-3 ${
                        isActive(link.href) ? "bg-primary/10 font-medium text-primary" : "text-body"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 block rounded-full bg-accent py-3 text-center font-semibold text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}