"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const FlowerScene = dynamic(() => import("./FlowerScene"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#fdf6f9] via-[#f8fff6] to-[#fffde7]">

      {/* 3D çiçek — sağ yarıda, büyük ve belirgin */}
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full opacity-95 pointer-events-none">
        <FlowerScene />
      </div>

      {/* Sol taraf beyaz geçiş */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fdf6f9] via-[#fdf6f9]/80 via-40% to-transparent pointer-events-none" />

      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-xl">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-[#5B8C51] uppercase mb-5 bg-[#5B8C51]/10 px-4 py-1.5 rounded-full">
            Çorum&apos;un Çiçekçisi
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-[#404A3D] leading-[1.08] mb-6">
            Uzun Ömürlü,{" "}
            <span className="relative inline-block text-[#5B8C51]">
              Solmayan
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#EDDD5E] rounded-full" />
            </span>
            <br />Güzellik
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
            20 yılı aşkın tecrübemizle taze çiçekler, mekan süsleme ve organizasyon hizmetleri sunuyoruz.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/urunlerimiz"
              className="px-8 py-4 bg-[#5B8C51] text-white font-semibold rounded-full hover:bg-[#4a7342] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              Ürünleri Keşfet
            </Link>
            <Link
              href="/iletisim"
              className="px-8 py-4 bg-white text-[#5B8C51] font-semibold rounded-full border-2 border-[#5B8C51] hover:bg-[#5B8C51] hover:text-white transition-all shadow-md text-sm"
            >
              Teklif Al
            </Link>
          </div>

          {/* İstatistikler */}
          <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-200/60">
            {[
              { value: "20+", label: "Yıllık Deneyim" },
              { value: "75+", label: "Dizayn İşletme" },
              { value: "3000+", label: "Ürün Çeşidi" },
              { value: "7500+", label: "Mutlu Müşteri" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#5B8C51]">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aşağı kaydır */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Aşağı Kaydır</span>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-[#5B8C51] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
