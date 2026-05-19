"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1f18] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-[#5B8C51] flex items-center justify-center text-[#EDDD5E] font-bold text-lg">B</span>
            <div>
              <p className="text-white font-bold text-base leading-tight">Bereket Çiçekçilik</p>
              <p className="text-[10px] tracking-widest uppercase text-gray-500">& Organizasyon</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-500 mb-5">Çorum'un kalbinde 20+ yıldır çiçek ve organizasyon hizmetleri.</p>
          <div className="flex gap-3">
            {["f","in","wp"].map(s => (
              <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#5B8C51] flex items-center justify-center transition-colors text-xs text-white">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Sayfalar</h4>
          <ul className="space-y-2 text-sm">
            {["/","hakkimizda","hizmetlerimiz","urunlerimiz","iletisim"].map(p => {
              const label = p === "/" ? "Anasayfa" : p.charAt(0).toUpperCase()+p.slice(1).replace("hakkimizda","Hakkımızda").replace("hizmetlerimiz","Hizmetlerimiz").replace("urunlerimiz","Ürünlerimiz").replace("iletisim","İletişim");
              return (
                <li key={p}><Link href={p==="/"?"/":"/"+p} className="hover:text-[#EDDD5E] transition-colors flex items-center gap-2"><span className="text-[#5B8C51] text-xs">›</span>{label}</Link></li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">İletişim</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex gap-2"><span className="text-[#5B8C51] shrink-0 mt-0.5">📍</span><span className="leading-relaxed">Üçtutlar Cd. No:38, Çorum Merkez</span></li>
            <li className="flex gap-2"><span className="text-[#5B8C51]">📞</span><a href="tel:+905366463306" className="hover:text-[#EDDD5E] transition-colors">0536 646 33 06</a></li>
            <li className="flex gap-2"><span className="text-[#5B8C51]">✉</span><a href="mailto:bilgi@bereketcicek.com" className="hover:text-[#EDDD5E] transition-colors break-all">bilgi@bereketcicek.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Çalışma Saatleri</h4>
          <div className="space-y-2 text-xs mb-6">
            <div className="flex justify-between"><span>Pzt – Cmt</span><span className="text-[#EDDD5E] font-semibold">09:00 – 19:30</span></div>
            <div className="flex justify-between"><span>Pazar</span><span className="text-red-400">Kapalı</span></div>
          </div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-3">E-Bülten</h4>
          <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="E-posta" className="flex-1 min-w-0 bg-white/5 text-xs rounded-full px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#5B8C51]" />
            <button className="px-4 py-2 bg-[#5B8C51] text-white text-xs font-semibold rounded-full hover:bg-[#4a7342] transition shrink-0">Kayıt</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>© 2025 Bereket Çiçekçilik. Tüm hakları saklıdır.</span>
          <span>Tasarım <a href="https://assyazilim.net" className="text-[#EDDD5E] hover:underline">Ass Yazılım</a></span>
        </div>
      </div>
    </footer>
  );
}
