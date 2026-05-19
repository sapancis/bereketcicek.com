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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sayfa değişince menüyü kapat
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "bg-white shadow-sm py-2 sm:py-3" : "bg-white/95 backdrop-blur-sm py-3 sm:py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#5B8C51] flex items-center justify-center shadow-md">
              <span className="text-[#EDDD5E] text-lg sm:text-xl font-bold">B</span>
            </div>
            <div className="hidden xs:block">
              <p className="text-[#5B8C51] font-bold text-base sm:text-lg leading-tight">Bereket</p>
              <p className="text-[#404A3D] text-[10px] tracking-widest uppercase">Çiçekçilik</p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative group ${
                  pathname === link.href ? "text-[#5B8C51]" : "text-[#404A3D] hover:text-[#5B8C51]"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#EDDD5E] transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            <Link href="/iletisim" className="ml-2 px-5 py-2 bg-[#5B8C51] text-white text-sm font-semibold rounded-full hover:bg-[#4a7342] transition-colors shadow-md">
              Teklif Al
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <span className={`block w-5 h-0.5 bg-[#404A3D] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#404A3D] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#404A3D] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu — tam ekran overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Arka plan */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        {/* Menü panel — sağdan kayar */}
        <div className={`absolute top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#5B8C51] flex items-center justify-center">
                <span className="text-[#EDDD5E] text-lg font-bold">B</span>
              </div>
              <div>
                <p className="text-[#5B8C51] font-bold text-base leading-tight">Bereket</p>
                <p className="text-[#404A3D] text-[10px] tracking-widest uppercase">Çiçekçilik</p>
              </div>
            </div>
            <button onClick={() => setMenuOpen(false)} className="p-2 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#5B8C51]/10 text-[#5B8C51]"
                    : "text-[#404A3D] hover:bg-gray-50"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pathname === link.href ? "bg-[#5B8C51]" : "bg-gray-300"}`} />
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 py-6 border-t border-gray-100">
            <Link
              href="/iletisim"
              className="flex items-center justify-center w-full px-5 py-3.5 bg-[#5B8C51] text-white text-sm font-semibold rounded-full hover:bg-[#4a7342] transition-colors shadow-md mb-4"
            >
              Teklif Al
            </Link>
            <a href="tel:+905366463306" className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#5B8C51] transition-colors">
              <span>📞</span> +90 536 646 33 06
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
