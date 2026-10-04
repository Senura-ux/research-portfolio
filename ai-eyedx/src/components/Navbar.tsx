"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/domain", label: "Domain" },
  { href: "/milestones", label: "Milestones" },
  { href: "/documents", label: "Documents" },
  { href: "/presentations", label: "Presentations" },
  { href: "/research-modules", label: "Modules" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
      style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
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
              <span className="text-base font-bold" style={{ color: "#1e3a8a" }}>
                AI EyeDx
              </span>
              <span className="text-xs" style={{ color: "#6b7280", fontSize: "10px" }}>
                R26-IT-043 · SLIIT
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-lg transition-all hover:opacity-90 hover:shadow-md"
              style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
            >
              Explore Research
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
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
          borderTop: menuOpen ? "1px solid #e5e7eb" : "none",
          backgroundColor: "white",
        }}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/domain"
            className="block mt-2 text-center text-sm font-semibold text-white px-4 py-2.5 rounded-lg"
            style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
          >
            Explore Research →
          </Link>
        </div>
      </div>
    </nav>
  );
}
