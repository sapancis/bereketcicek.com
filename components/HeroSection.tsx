"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Animasyonlu canvas arka plan */}
      <HeroBackground />

      {/* Sol taraf hafif beyaz geçiş — metin okunabilirliği */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />

      {/* İçerik */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-xl">

          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-[#5B8C51] uppercase mb-5 bg-[#5B8C51]/10 border border-[#5B8C51]/20 px-4 py-1.5 rounded-full">
            Çorum&apos;un Çiçekçisi
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#404A3D] leading-[1.08] mb-5">
            Uzun Ömürlü,{" "}
            <span className="relative inline-block text-[#5B8C51]">
              Solmayan
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#EDDD5E] rounded-full" />
            </span>
            <br />
            <span className="text-[#404A3D]">Güzellik</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
            20 yılı aşkın tecrübemizle taze çiçekler, mekan süsleme ve organizasyon hizmetleri sunuyoruz. Hayallerinizdeki anı birlikte yaşatalım.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Link
              href="/urunlerimiz"
              className="px-8 py-4 bg-[#5B8C51] text-white font-semibold rounded-full hover:bg-[#4a7342] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm text-center"
            >
              🌸 Ürünleri Keşfet
            </Link>
            <Link
              href="/iletisim"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#5B8C51] font-semibold rounded-full border-2 border-[#5B8C51] hover:bg-[#5B8C51] hover:text-white transition-all shadow-md text-sm text-center"
            >
              Teklif Al
            </Link>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-5 gap-x-8 pt-6 border-t border-[#5B8C51]/15">
            {[
              { value: "20+", label: "Yıllık Deneyim" },
              { value: "75+", label: "Dizayn İşletme" },
              { value: "3000+", label: "Ürün Çeşidi" },
              { value: "7500+", label: "Mutlu Müşteri" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-[#5B8C51]">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aşağı kaydır */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-[10px] tracking-widest uppercase hidden sm:block">Aşağı Kaydır</span>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#5B8C51] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
