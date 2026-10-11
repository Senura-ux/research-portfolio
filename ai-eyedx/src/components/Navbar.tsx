"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/domain", label: "Domain", dropdown: [
    { href: "/domain#literature-survey", label: "Literature Survey" },
    { href: "/domain#research-gap", label: "Research Gap" },
    { href: "/domain#research-gap", label: "Research Problem & Solution" },
    { href: "/domain#research-objectives", label: "Research Objectives" },
    { href: "/domain#methodology", label: "Methodology" },
    { href: "/domain#technologies", label: "Technologies" },
  ] },
  { href: "/milestones", label: "Milestones" },
  { href: "/documents", label: "Documents" },
  { href: "/presentations", label: "Presentations" },
  { href: "/research-modules", label: "Modules" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [domainOpen, setDomainOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const domainMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeDomainMenu = (event: PointerEvent) => {
      if (!domainMenuRef.current?.contains(event.target as Node)) {
        setDomainOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDomainOpen(false);
    };

    document.addEventListener("pointerdown", closeDomainMenu);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", closeDomainMenu);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav
      ref={domainMenuRef}
      className={`sticky top-0 z-50 -mb-16 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/75 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.18)] border-b border-white/10"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-white">
                AI EyeDx
              </span>
              <span className="text-[10px] text-slate-300">
                R26-IT-043 · SLIIT
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              const dropdown = link.dropdown;

              if (dropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => setDomainOpen((prev) => !prev)}
                      aria-expanded={domainOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        active || domainOpen
                          ? "text-white bg-white/10 font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                          : "text-slate-200 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      <svg className={`h-4 w-4 transition-transform ${domainOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>

                    <div
                      className={`absolute left-0 top-full z-50 w-72 pt-2 transition-all duration-150 ${
                        domainOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-[0_25px_60px_rgba(2,6,23,0.55)] backdrop-blur-xl">
                        {dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setDomainOpen(false);
                              setMenuOpen(false);
                            }}
                            className="block rounded-xl px-3 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setDomainOpen(false);
                  }}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-white bg-white/10 font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/domain"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-blue-300/30 bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(59,130,246,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(59,130,246,0.4)]"
            >
              Explore Research
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <div className="flex h-4 w-5 flex-col justify-between">
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu ${menuOpen ? "open" : ""}`}
        style={{
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.08)" : "none",
          backgroundColor: "rgba(2,6,23,0.82)",
        }}
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            if (link.dropdown) {
              return (
                <div key={link.href} className="rounded-xl border border-white/10 bg-white/5 p-2">
                  <button
                    type="button"
                    onClick={() => setDomainOpen((prev) => !prev)}
                    aria-expanded={domainOpen}
                    aria-haspopup="true"
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm font-semibold text-white"
                  >
                    <span>{link.label}</span>
                    <svg className={`h-4 w-4 text-slate-300 transition-transform ${domainOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className={`${domainOpen ? "mt-1 space-y-1" : "hidden"}`}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setDomainOpen(false);
                        }}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMenuOpen(false);
                  setDomainOpen(false);
                }}
                className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white font-semibold"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/domain"
            onClick={() => {
              setMenuOpen(false);
              setDomainOpen(false);
            }}
            className="mt-2 block rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_10px_25px_rgba(59,130,246,0.35)]"
          >
            Explore Research →
          </Link>
        </div>
      </div>
    </nav>
  );
}
