"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Video arka plan */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/carousel-1.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Video yoksa poster görseli gösterir */}
      </video>

      {/* Koyu overlay — okunabilirlik için */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* İçerik */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-2xl">

          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-[#EDDD5E] uppercase mb-5 border border-[#EDDD5E]/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Çorum&apos;un Çiçekçisi
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-5">
            Uzun Ömürlü,{" "}
            <span className="relative text-[#EDDD5E]">
              Solmayan
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#EDDD5E]/60 rounded-full" />
            </span>
            <br />
            <span className="text-white/90">Güzellik</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
            20 yılı aşkın tecrübemizle taze çiçekler, mekan süsleme ve organizasyon hizmetleri sunuyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Link
              href="/urunlerimiz"
              className="px-7 py-3.5 bg-[#5B8C51] text-white font-semibold rounded-full hover:bg-[#4a7342] transition-all shadow-lg text-sm text-center"
            >
              Ürünleri Keşfet
            </Link>
            <Link
              href="/iletisim"
              className="px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/40 hover:bg-white/20 transition-all text-sm text-center"
            >
              Teklif Al
            </Link>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-5 gap-x-8 pt-6 border-t border-white/20">
            {[
              { value: "20+", label: "Yıllık Deneyim" },
              { value: "75+", label: "Dizayn İşletme" },
              { value: "3000+", label: "Ürün Çeşidi" },
              { value: "7500+", label: "Mutlu Müşteri" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-[#EDDD5E]">{stat.value}</p>
                <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aşağı kaydır */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-widest uppercase hidden sm:block">Aşağı Kaydır</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
