import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hizmetlerimiz | Bereket Çiçekçilik",
  description: "Mekan süsleme, toptan çiçekçilik, organizasyon malzemeleri ve yapay ağaç tasarımı hizmetleri.",
};

const services = [
  {
    img: "/service-1.jpg",
    icon: "🌸",
    title: "Mekan Süsleme ve Organizasyon",
    desc: "Kafe, restaurant, apartman ve düğün salonlarını profesyonel çiçek aranjmanları ve dekorasyon ürünleriyle canlandırıyoruz. Mekanınızı hayalinizdeki atmosfere kavuşturuyoruz.",
    features: ["Düğün & Nişan Süsleme", "Restoran & Kafe Dekorasyonu", "Kurumsal Mekan Tasarımı", "Özel Günler"],
  },
  {
    img: "/service-2.jpg",
    icon: "💐",
    title: "Toptan ve Perakende Çiçekçilik",
    desc: "Her gün taze temin edilen çiçeklerimizle özel tasarım buketler ve aranjmanlar hazırlıyoruz. Hem bireysel hem kurumsal ihtiyaçlara özel fiyatlarla hizmet veriyoruz.",
    features: ["Taze Buket Tasarımı", "Özel Aranjmanlar", "Toptan Sipariş", "Hızlı Teslimat"],
  },
  {
    img: "/service-3.jpg",
    icon: "🎀",
    title: "Organizasyon Malzemeleri",
    desc: "3 katlı mağazamızda her türlü organizasyon malzemesini bulabilirsiniz. Şeritler, balonlar, süslemeler ve daha fazlası tek adreste.",
    features: ["Balon & Dekorasyon", "Şerit & Kurdele", "Hediye Paketleme", "Tematik Süslemeler"],
  },
  {
    img: "/service-5.jpg",
    icon: "🌳",
    title: "Yapay Ağaç Tasarımı",
    desc: "Gerçeğe en yakın doku ve detaylarla hazırlanan yapay ağaçlarımız mekanlarınıza doğallığın estetik halini kazandırır. Bakımsız, uzun ömürlü çözümler.",
    features: ["İç Mekan Ağaçları", "Dış Mekan Tasarımı", "Özel Boyut & Şekil", "Bakım Gerektirmez"],
  },
  {
    img: "/service-5.jpg",
    icon: "🌿",
    title: "Yapay Çiçek & Bitkiler",
    desc: "Solmayan güzellik için yapay çiçek ve bitkilerle mekanlarınızı yıl boyu canlı tutun. Her tarz ve bütçeye uygun geniş ürün seçeneği.",
    features: ["Yapay Buketler", "Yapay Saksı Bitkileri", "Duvar Panelleri", "Çelenk Tasarımı"],
  },
  {
    img: "/service-6.jpg",
    icon: "🏢",
    title: "Kurumsal Hizmetler",
    desc: "Düzenli mekan süsleme, toplu sipariş ve kurumsal sözleşme seçenekleriyle işletmenizin çiçek ihtiyacını sürekli karşılıyoruz.",
    features: ["Haftalık Yenileme", "Toplu Sipariş", "Sözleşmeli Hizmet", "Fatura Desteği"],
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <Image src="/service-1.jpg" alt="Hizmetlerimiz" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#404A3D]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16">
          <span className="text-[#EDDD5E] text-sm font-semibold tracking-widest uppercase mb-3">Ne Yapıyoruz?</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">Hizmetlerimiz</h1>
          <div className="flex gap-2 mt-4 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#EDDD5E] transition-colors">Anasayfa</Link>
            <span>/</span>
            <span className="text-[#EDDD5E]">Hizmetlerimiz</span>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-title">Hizmetlerimiz</span>
            <h2 className="text-4xl font-bold text-[#404A3D] mt-4">Sunduğumuz Profesyonel Çözümler</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Her ihtiyacınıza özel çözümler üretiyoruz. Küçük bir buket siparişinden kurumsal mekan tasarımına kadar yanınızdayız.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl overflow-hidden shadow-md card-hover bg-white border border-gray-100">
                <div className="relative h-52 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-3xl">{s.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#404A3D] text-lg mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B8C51] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center mt-5 text-sm font-semibold text-[#5B8C51] hover:underline"
                  >
                    Teklif Al →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#f7faf6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-title">Nasıl Çalışırız?</span>
            <h2 className="text-4xl font-bold text-[#404A3D] mt-4">Hizmet Sürecimiz</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-6 relative">
            <div className="hidden sm:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-[#5B8C51]/20" />
            {[
              { step: "01", icon: "📞", title: "İletişim", text: "Bizi arayın veya form doldurun" },
              { step: "02", icon: "💬", title: "Danışmanlık", text: "İhtiyaçlarınızı birlikte belirleyelim" },
              { step: "03", icon: "🎨", title: "Tasarım", text: "Size özel tasarım hazırlıyoruz" },
              { step: "04", icon: "✅", title: "Teslimat", text: "Zamanında, özenli teslimat" },
            ].map((p) => (
              <div key={p.step} className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-white shadow-md mx-auto mb-4 flex items-center justify-center border-2 border-[#5B8C51]/20">
                  <span className="text-3xl">{p.icon}</span>
                </div>
                <span className="text-xs font-bold text-[#5B8C51] tracking-widest">{p.step}</span>
                <h4 className="font-bold text-[#404A3D] mt-1">{p.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#5B8C51]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Projeniz İçin Ücretsiz Teklif Alın</h2>
          <p className="text-green-100 mb-8">Hizmetlerimiz hakkında daha fazla bilgi için bize ulaşın.</p>
          <Link href="/iletisim" className="inline-flex px-10 py-4 bg-[#EDDD5E] text-[#404A3D] font-bold rounded-full hover:bg-yellow-400 transition-all shadow-xl">
            İletişime Geç →
          </Link>
        </div>
      </section>
    </>
  );
}
