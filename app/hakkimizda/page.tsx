import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hakkımızda | Bereket Çiçekçilik",
  description: "20 yılı aşkın tecrübemizle Çorum'da çiçekçilik ve organizasyon hizmetleri sunuyoruz.",
};

const team = [
  { name: "Ahmet Usta", role: "Kurucu & Baş Çiçek Tasarımcısı", img: "/testimonial-1.jpg" },
  { name: "Mekan Süsleme Ekibi", role: "Profesyonel Dekorasyon", img: "/service-1.jpg" },
  { name: "Organizasyon Birimi", role: "Etkinlik Planlama", img: "/service-4.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <Image src="/banner.jpg" alt="Hakkımızda" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#404A3D]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16">
          <span className="text-[#EDDD5E] text-sm font-semibold tracking-widest uppercase mb-3">Bizi Tanıyın</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">Hakkımızda</h1>
          <div className="flex gap-2 mt-4 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#EDDD5E] transition-colors">Anasayfa</Link>
            <span>/</span>
            <span className="text-[#EDDD5E]">Hakkımızda</span>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-64 col-span-2">
              <Image src="/carousel-1.jpg" alt="Mağazamız" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image src="/service-2.jpg" alt="Çiçekler" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image src="/service-5.jpg" alt="Organizasyon" fill className="object-cover" />
            </div>
          </div>

          <div>
            <span className="section-title">Hikayemiz</span>
            <h2 className="text-4xl font-bold text-[#404A3D] mt-4 mb-6">
              Çorum'un En Köklü Çiçekçisi
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              1990'ların ortasında Çorum'un kalbinde küçük bir çiçekçi dükkanıyla başlayan yolculuğumuz, bugün 3 katlı mağazamız ve geniş ürün yelpazemizle bölgenin en köklü çiçekçi ve organizasyon firması haline geldi.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              20 yılı aşkın sürede binlerce düğün, nişan, doğum günü ve ticari mekan projesine imza attık. Her çiçeğe, her aranjmana ve her organizasyona kalbimizin bir parçasını katıyoruz.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-[#f7faf6] rounded-2xl">
              {[
                { value: "1995", label: "Kuruluş Yılı" },
                { value: "3 Kat", label: "Mağaza Alanı" },
                { value: "Çorum", label: "Merkezi Konum" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-[#5B8C51]">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f7faf6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-title">Değerlerimiz</span>
            <h2 className="text-4xl font-bold text-[#404A3D] mt-4">Bizi Biz Yapan İlkeler</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌿", title: "Tazelik", text: "Her gün taze çiçek tedariki, solmayan güzellik garantisi." },
              { icon: "💎", title: "Kalite", text: "Ürünlerimizi titizlikle seçiyor, her detayı özenle işliyoruz." },
              { icon: "🤝", title: "Güven", text: "20 yıldır aynı güvenilirlik anlayışıyla hizmet veriyoruz." },
              { icon: "❤️", title: "Tutku", text: "Çiçekçiliği bir meslek değil, bir yaşam biçimi olarak görüyoruz." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 text-center shadow-sm card-hover">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-[#404A3D] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-title">Ekibimiz</span>
            <h2 className="text-4xl font-bold text-[#404A3D] mt-4">Profesyonel Ekibimizle Tanışın</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-[#EDDD5E] group-hover:ring-[#5B8C51] transition-all">
                  <Image src={m.img} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-[#404A3D] text-lg">{m.name}</h3>
                <p className="text-sm text-[#5B8C51] mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#5B8C51]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Özel Anlarınız İçin Buradayız</h2>
          <p className="text-green-100 mb-8">Ücretsiz danışmanlık için hemen iletişime geçin.</p>
          <Link href="/iletisim" className="inline-flex px-10 py-4 bg-[#EDDD5E] text-[#404A3D] font-bold rounded-full hover:bg-yellow-400 transition-all shadow-xl">
            İletişime Geç →
          </Link>
        </div>
      </section>
    </>
  );
}
