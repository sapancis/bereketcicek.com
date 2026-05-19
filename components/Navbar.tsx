"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/urunlerimiz", label: "Ürünlerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-[#5B8C51] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-[#EDDD5E] text-xl font-bold">B</span>
          </div>
          <div>
            <p className="text-[#5B8C51] font-bold text-lg leading-tight">Bereket</p>
            <p className="text-[#404A3D] text-xs tracking-widest uppercase">Çiçekçilik</p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                pathname === link.href
                  ? "text-[#5B8C51]"
                  : "text-[#404A3D] hover:text-[#5B8C51]"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#EDDD5E] transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="ml-2 px-5 py-2 bg-[#5B8C51] text-white text-sm font-semibold rounded-full hover:bg-[#4a7342] transition-colors shadow-md"
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span
            className={`block w-6 h-0.5 bg-[#404A3D] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#404A3D] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#404A3D] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-2 border-b border-gray-50 ${
                pathname === link.href ? "text-[#5B8C51]" : "text-[#404A3D]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2 bg-[#5B8C51] text-white text-sm font-semibold rounded-full text-center"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </nav>
  );
}
