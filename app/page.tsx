import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    img: "/service-1.jpg",
    title: "Mekan Süsleme ve Organizasyon",
    desc: "Kafe, restaurant, apartman gibi mekanlarınızı çiçeklerimizle canlandırıyoruz.",
  },
  {
    img: "/service-2.jpg",
    title: "Toptan ve Perakende Çiçekçilik",
    desc: "En kaliteli çiçekler, özel tasarım buketler ve aranjmanlarla sevdiklerinizi mutlu edin.",
  },
  {
    img: "/service-3.jpg",
    title: "Organizasyon Malzemeleri",
    desc: "3 katlı mağazamızda organizasyonlarınız için A'dan Z'ye her türlü malzemeyi bulabilirsiniz.",
  },
  {
    img: "/agac.png",
    title: "Yapay Ağaç Tasarımı",
    desc: "Gerçeğe en yakın doku ve detaylarla hazırlanan yapay ağaçlarımız mekanınıza doğallık katar.",
  },
];

const testimonials = [
  {
    img: "/testimonial-1.jpg",
    quote: "Ahmet Abi, nişanımız için tam hayalimizdeki gibi bir buket hazırladı. Herkese tavsiye ederiz!",
    name: "Elif & Murat A.",
    role: "Nişan Organizasyonu",
  },
  {
    img: "/testimonial-2.jpg",
    quote: "Son dakika uğradım, beni hiç geri çevirmedi. Hem çok şık bir süsleme yaptı hem de uygun fiyat.",
    name: "Sevda K.",
    role: "İşletme Sahibi",
  },
  {
    img: "/testimonial-3.jpg",
    quote: "Özel günler için ne zaman çiçek alacak olsam ilk durağım Ahmet Abi'nin dükkanı.",
    name: "Kenan T.",
    role: "Öğretmen",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images grid */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EDDD5E]/30 rounded-full blur-2xl" />
              <div className="col-span-2 sm:col-span-1 row-span-2 relative rounded-2xl overflow-hidden h-80">
                <Image src="/service-1.jpg" alt="Mekan süsleme" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-36">
                <Image src="/service-2.jpg" alt="Çiçek aranjman" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-36">
                <Image src="/service-3.jpg" alt="Organizasyon" fill className="object-cover" />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-[#5B8C51] flex flex-col items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">20+</span>
                <span className="text-xs text-[#EDDD5E] text-center leading-tight">Yıllık Deneyim</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-title">Hakkımızda</span>
              <h2 className="text-4xl font-bold text-[#404A3D] mt-4 mb-6 leading-tight">
                Çorum'da 20 Yılı Aşkın Tecrübe ile Çiçekçilik
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Çorum'un kalbinde, 20 yılı aşkın süredir çiçekçilik ve organizasyon sektörüne yön veriyoruz. 3 katlı mağazamızda en taze çiçekleri, en şık organizasyon malzemelerini sizlerle buluştururken, toptan ve perakende satış seçeneklerimizle her ihtiyaca cevap veriyoruz.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: "🌸", title: "Mekan Süsleme", text: "Restaurant, kafe ve düğün salonları için profesyonel hizmet." },
                  { icon: "🛍️", title: "Toptan & Perakende", text: "Zengin ürün çeşitliliği ve uygun fiyatlarla." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-[#404A3D] mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#5B8C51] text-white font-semibold rounded-full hover:bg-[#4a7342] transition-all shadow-md"
              >
                Daha Fazlasını Keşfet →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-[#f7faf6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-title">Neden Biz?</span>
              <h2 className="text-4xl font-bold text-[#404A3D] mt-4 mb-6">
                Bizi Tercih Etmeniz İçin Birkaç Neden
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                20 yılı aşkın tecrübemiz, kaliteden ödün vermeyen hizmet anlayışımız ve her bütçeye uygun çözümlerimizle en özel anlarınızda yanınızdayız.
              </p>
              {[
                "Sektörde 20 Yılı Aşkın Köklü Tecrübe",
                "Her Zaman En Uygun ve Kaliteli Çiçekler",
                "Profesyonel Tasarım ve Danışmanlık Desteği",
                "Hızlı Teslimat ve Güvenilir Hizmet",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#5B8C51] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center gap-2 mt-4 px-8 py-4 border-2 border-[#5B8C51] text-[#5B8C51] font-semibold rounded-full hover:bg-[#5B8C51] hover:text-white transition-all"
              >
                Hizmetlerimizi İnceleyin
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏆", value: "20", label: "Yıllık Tecrübe", bg: "bg-[#5B8C51]", text: "text-white" },
                { icon: "🎨", value: "75", label: "Dizayn İşletme", bg: "bg-[#EDDD5E]", text: "text-[#404A3D]" },
                { icon: "✨", value: "3000", label: "Ürün Çeşidi", bg: "bg-[#EDDD5E]", text: "text-[#404A3D]" },
                { icon: "😊", value: "7500", label: "Mutlu Müşteri", bg: "bg-[#5B8C51]", text: "text-white" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.bg} ${stat.text} rounded-2xl p-8 flex flex-col items-center text-center card-hover`}
                >
                  <span className="text-4xl mb-3">{stat.icon}</span>
                  <span className="text-4xl font-bold">{stat.value}+</span>
                  <span className="text-sm mt-1 opacity-80">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-title">Hizmetlerimiz</span>
            <h2 className="text-4xl font-bold text-[#404A3D] mt-4">Sunduğumuz Profesyonel Çözümler</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl overflow-hidden shadow-md card-hover bg-white border border-gray-100">
                <div className="relative h-52 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#404A3D] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <Link
                    href="/hizmetlerimiz"
                    className="inline-flex items-center text-sm font-semibold text-[#5B8C51] hover:gap-2 transition-all"
                  >
                    Detaylar →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#404A3D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#EDDD5E] uppercase">Müşteri Yorumları</span>
            <h2 className="text-4xl font-bold text-white mt-4">Onlar Anlattı</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#EDDD5E]">★</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#5B8C51] to-[#4a7342]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Hayalinizdeki Organizasyon için Hazırız</h2>
          <p className="text-green-100 mb-8">Ücretsiz danışmanlık ve teklif almak için şimdi bize ulaşın.</p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#EDDD5E] text-[#404A3D] font-bold rounded-full hover:bg-yellow-400 transition-all shadow-xl text-lg"
          >
            Teklif Al →
          </Link>
        </div>
      </section>
    </>
  );
}
