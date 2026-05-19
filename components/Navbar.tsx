"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/urunlerimiz", label: "Ürünlerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow py-2" : "bg-white/90 backdrop-blur-md py-3"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#5B8C51] flex items-center justify-center text-[#EDDD5E] font-bold text-lg shadow-md">B</span>
            <div className="hidden sm:block leading-tight">
              <p className="font-bold text-[#5B8C51] text-[15px]">Bereket Çiçekçilik</p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400">& Organizasyon</p>
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={`text-[13px] font-semibold tracking-wide transition-colors relative group py-1 ${path === l.href ? "text-[#5B8C51]" : "text-gray-600 hover:text-[#5B8C51]"}`}>
                {l.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#EDDD5E] rounded transition-all duration-300 ${path === l.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+905366463306" className="text-[12px] text-gray-500 hover:text-[#5B8C51] transition-colors">📞 0536 646 33 06</a>
            <Link href="/iletisim" className="px-5 py-2 bg-[#5B8C51] text-white text-[13px] font-semibold rounded-full hover:bg-[#4a7342] transition shadow-md">
              Teklif Al
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} aria-label="Menü" className="lg:hidden p-2 -mr-1">
            <div className="flex flex-col gap-[5px]">
              <span className={`w-5 h-[2px] bg-gray-700 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`w-5 h-[2px] bg-gray-700 rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`w-5 h-[2px] bg-gray-700 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${open ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <span className="font-bold text-[#5B8C51]">Menü</span>
            <button onClick={() => setOpen(false)} className="text-gray-400 text-xl">✕</button>
          </div>
          <nav className="flex-1 p-4 flex flex-col gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${path === l.href ? "bg-[#5B8C51]/10 text-[#5B8C51]" : "text-gray-700 hover:bg-gray-50"}`}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="p-5 border-t space-y-3">
            <Link href="/iletisim" className="flex justify-center w-full py-3 bg-[#5B8C51] text-white text-sm font-semibold rounded-full">Teklif Al</Link>
            <a href="tel:+905366463306" className="flex justify-center text-sm text-gray-500">📞 0536 646 33 06</a>
          </div>
        </div>
      </div>
    </>
  );
}
