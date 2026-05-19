"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#404A3D] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#5B8C51] flex items-center justify-center">
              <span className="text-[#EDDD5E] text-xl font-bold">B</span>
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">Bereket</p>
              <p className="text-gray-400 text-xs tracking-widest uppercase">Çiçekçilik</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Çorum'un kalbinde, 20 yılı aşkın süredir çiçekçilik ve organizasyon sektörüne yön veriyoruz.
          </p>
          <div className="flex gap-3 mt-5">
            {["facebook", "instagram", "whatsapp"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5B8C51] transition-colors"
                aria-label={s}
              >
                <SocialIcon name={s} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Hızlı Menü</h3>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Anasayfa" },
              { href: "/hakkimizda", label: "Hakkımızda" },
              { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
              { href: "/urunlerimiz", label: "Ürünlerimiz" },
              { href: "/iletisim", label: "İletişim" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-[#EDDD5E] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#5B8C51]">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">İletişim</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-[#5B8C51] mt-0.5">📍</span>
              <span>Üçtutlar, Üçtutlar Cd. No:38, 19030 Çorum Merkez/Çorum</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B8C51]">📞</span>
              <a href="tel:+905366463306" className="hover:text-[#EDDD5E] transition-colors">
                +90 536 646 33 06
              </a>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B8C51]">✉️</span>
              <a href="mailto:bilgi@bereketcicek.com" className="hover:text-[#EDDD5E] transition-colors">
                bilgi@bereketcicek.com
              </a>
            </li>
          </ul>
        </div>

        {/* Hours + newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Çalışma Saatleri</h3>
          <div className="text-sm space-y-2 mb-6">
            <div className="flex justify-between">
              <span>Pzt - Cmt</span>
              <span className="text-[#EDDD5E] font-semibold">09:00 – 19:30</span>
            </div>
            <div className="flex justify-between">
              <span>Pazar</span>
              <span className="text-red-400 font-semibold">Kapalı</span>
            </div>
          </div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-widest">E-Bülten</h3>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 min-w-0 bg-white/10 text-sm rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B8C51]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#5B8C51] text-white text-sm font-semibold rounded-full hover:bg-[#4a7342] transition-colors whitespace-nowrap"
            >
              Kayıt
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© 2025 Bereket Çiçekçilik & Organizasyon. Tüm hakları saklıdır.</span>
          <span>
            Tasarım &amp; Kodlama{" "}
            <a href="https://assyazilim.net" className="text-[#EDDD5E] hover:underline">
              Ass Yazılım
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "facebook")
    return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
  if (name === "instagram")
    return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/></svg>;
  return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.5 2a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 11.5 2zm5.952 14.452a11.5 11.5 0 0 1-1.8 1.08 8.5 8.5 0 0 1-2.69.553 9.5 9.5 0 1 1 4.49-1.633z"/></svg>;
}
