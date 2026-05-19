import Image from "next/image";
import Link from "next/link";

/* ─── DATA ─────────────────────────────────────────── */
const services = [
  { img: "/service-1.jpg", icon: "🌸", title: "Mekan Süsleme", desc: "Kafe, restaurant ve düğün salonları için profesyonel çiçek süsleme." },
  { img: "/service-2.jpg", icon: "💐", title: "Taze Çiçekler", desc: "Her gün taze temin edilen çiçeklerle özel tasarım buketler." },
  { img: "/service-3.jpg", icon: "🎀", title: "Organizasyon", desc: "Düğün, nişan, doğum günü organizasyonları için A'dan Z'ye hizmet." },
  { img: "/service-5.jpg", icon: "🌿", title: "Yapay Bitkiler", desc: "Bakım gerektirmeyen yapay ağaç ve bitki tasarımları." },
];

const stats = [
  { n: "20+", l: "Yıllık Deneyim" },
  { n: "75+", l: "Dizayn İşletme" },
  { n: "3000+", l: "Ürün Çeşidi" },
  { n: "7500+", l: "Mutlu Müşteri" },
];

const testimonials = [
  { initial: "E", name: "Elif & Murat A.", role: "Nişan Organizasyonu", color: "#e8a0bf", text: "Nişanımız için tam hayalimizdeki buketi hazırladılar. Çiçeklerin tazeliği ve uyumu harikaydı, herkese tavsiye ederiz!" },
  { initial: "S", name: "Sevda K.", role: "İşletme Sahibi", color: "#5B8C51", text: "Son dakika uğradım, beni hiç geri çevirmedi. Çok şık bir süsleme yaptı ve fiyatlar çok uygundu." },
  { initial: "K", name: "Kenan T.", role: "Öğretmen", color: "#EDDD5E", text: "Özel günler için ne zaman çiçek alacak olsam ilk durağım burası. Her seferinde birbirinden güzel aranjmanlar." },
];

/* ─── PAGE ──────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/hero.jpg" alt="Çiçek" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
          <div className="max-w-2xl">
            <div className="badge text-[#EDDD5E] bg-transparent border border-[#EDDD5E]/30 mb-6 animate-fade-up" style={{color:"#EDDD5E"}}>
              Çorum&apos;un Çiçekçisi — 1995&apos;ten beri
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-up-2">
              Uzun Ömürlü,<br />
              <span className="text-[#EDDD5E]">Solmayan</span>{" "}
              Güzellik
            </h1>
            <p className="text-base sm:text-xl text-white/70 mb-10 max-w-lg leading-relaxed animate-fade-up-3">
              20 yılı aşkın tecrübemizle taze çiçekler, mekan süsleme ve organizasyon hizmetleri sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-3">
              <Link href="/urunlerimiz" className="px-8 py-4 bg-[#5B8C51] text-white font-bold rounded-full text-sm text-center hover:bg-[#4a7342] transition shadow-xl hover:-translate-y-0.5">
                🌸 Ürünleri Keşfet
              </Link>
              <Link href="/iletisim" className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full text-sm text-center hover:bg-white/10 transition backdrop-blur-sm">
                Ücretsiz Teklif Al
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-14 pt-8 border-t border-white/10">
              {stats.map(s => (
                <div key={s.l}>
                  <p className="text-2xl sm:text-3xl font-bold text-[#EDDD5E]">{s.n}</p>
                  <p className="text-xs text-white/50 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40">
          <span className="text-[9px] tracking-[0.3em] uppercase">Keşfet</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="bg-[#5B8C51] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-white text-sm font-medium">
            {["✓ Günlük Taze Çiçek", "✓ Ücretsiz Tasarım Danışmanlığı", "✓ Çorum'a Hızlı Teslimat", "✓ 20+ Yıllık Deneyim"].map(t => (
              <span key={t} className="opacity-90">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden col-span-2">
                  <Image src="/service-4.jpg" alt="Mekan süsleme" fill className="object-cover" />
                </div>
                <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden">
                  <Image src="/service-1.jpg" alt="Buket" fill className="object-cover" />
                </div>
                <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden">
                  <Image src="/service-2.jpg" alt="Çiçek" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#EDDD5E] flex flex-col items-center justify-center shadow-xl z-10">
                <span className="text-3xl sm:text-4xl font-black text-[#1a1f18]">20+</span>
                <span className="text-[9px] font-bold text-[#5B8C51] uppercase tracking-wider text-center">Yıllık<br/>Deneyim</span>
              </div>
            </div>

            {/* Text */}
            <div className="pt-4 lg:pt-0">
              <div className="badge mb-5">Hakkımızda</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1f18] leading-tight mb-5">
                Çorum&apos;da 20 Yılı Aşkın Tecrübe
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
                1995&apos;ten bu yana Çorum&apos;un kalbinde hizmet veriyoruz. 3 katlı mağazamızda en taze çiçekleri, en şık organizasyon malzemelerini bulabilirsiniz.
              </p>
              <div className="space-y-3 mb-8">
                {["Sektörde 20+ Yıllık Köklü Tecrübe","Her Gün Taze Çiçek Tedariki","Profesyonel Tasarım Danışmanlığı","Toptan & Perakende Satış"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm sm:text-base">
                    <span className="w-5 h-5 rounded-full bg-[#5B8C51] flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/hakkimizda" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#5B8C51] text-white font-semibold rounded-full text-sm hover:bg-[#4a7342] transition shadow-md">
                Daha Fazla Bilgi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto">Hizmetlerimiz</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f18]">Profesyonel Çözümler</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {services.map(s => (
              <div key={s.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover-lift">
                <div className="relative h-52 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-2xl">{s.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a1f18] mb-2 text-sm sm:text-base">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <Link href="/hizmetlerimiz" className="text-xs font-bold text-[#5B8C51] hover:underline">Detaylar →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/hizmetlerimiz" className="inline-flex px-8 py-3.5 border-2 border-[#5B8C51] text-[#5B8C51] font-semibold rounded-full text-sm hover:bg-[#5B8C51] hover:text-white transition">
              Tüm Hizmetlerimiz
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad bg-[#1a1f18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto text-[#EDDD5E]" style={{color:"#EDDD5E", background:"rgba(237,221,94,0.08)", borderColor:"rgba(237,221,94,0.2)"}}>Müşteri Yorumları</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Onlar Ne Dedi?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white/5 border border-white/8 rounded-2xl p-6 sm:p-8 hover-lift">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_,i) => <span key={i} className="text-[#EDDD5E] text-sm">★</span>)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0" style={{background: t.color}}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#EDDD5E] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/service-6.jpg" alt="Organizasyon" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#5B8C51]/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Hayalinizdeki Organizasyon</h2>
          <p className="text-green-100 mb-8 text-base sm:text-lg">Ücretsiz danışmanlık için hemen iletişime geçin.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iletisim" className="px-10 py-4 bg-[#EDDD5E] text-[#1a1f18] font-bold rounded-full hover:bg-yellow-400 transition shadow-xl text-sm">
              Teklif Al →
            </Link>
            <a href="tel:+905366463306" className="px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition text-sm">
              📞 Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
