"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const FlowerScene = dynamic(() => import("./FlowerScene"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f0f7ee] via-white to-[#fffde7]">
      {/* 3D background scene */}
      <div className="absolute inset-0 opacity-80">
        <FlowerScene />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-[#5B8C51] uppercase mb-4 bg-[#5B8C51]/10 px-4 py-1.5 rounded-full">
            Çorum&apos;un Çiçekçisi
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#404A3D] leading-[1.1] mb-6">
            Uzun Ömürlü,{" "}
            <span className="text-[#5B8C51] relative">
              Solmayan
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#EDDD5E] rounded-full" />
            </span>{" "}
            Güzellik
          </h1>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
            20 yılı aşkın tecrübemizle taze çiçekler, mekan süsleme ve organizasyon hizmetleri sunuyoruz. Hayallerinizdeki anı birlikte yaşatalım.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/urunlerimiz"
              className="px-8 py-4 bg-[#5B8C51] text-white font-semibold rounded-full hover:bg-[#4a7342] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Ürünleri Keşfet
            </Link>
            <Link
              href="/iletisim"
              className="px-8 py-4 bg-white text-[#5B8C51] font-semibold rounded-full border-2 border-[#5B8C51] hover:bg-[#5B8C51] hover:text-white transition-all shadow-md"
            >
              Teklif Al
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-8">
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Aşağı Kaydır</span>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-[#5B8C51] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
