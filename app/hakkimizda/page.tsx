import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | Bereket Çiçekçilik",
  description: "20+ yıldır Çorum'da çiçekçilik ve organizasyon hizmetleri.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-64 sm:h-96 overflow-hidden">
        <Image src="/banner.jpg" alt="Hakkımızda" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1a1f18]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 text-center px-4">
          <div className="badge mb-4" style={{color:"#EDDD5E", background:"rgba(237,221,94,0.1)", borderColor:"rgba(237,221,94,0.25)"}}>Bizi Tanıyın</div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">Hakkımızda</h1>
          <p className="text-[#EDDD5E] text-xs mt-3 tracking-widest"><Link href="/" className="hover:underline">Anasayfa</Link> / Hakkımızda</p>
        </div>
      </div>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden h-56 sm:h-72 col-span-2">
              <Image src="/service-4.jpg" alt="Mağazamız" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-36 sm:h-44">
              <Image src="/service-2.jpg" alt="Çiçekler" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-36 sm:h-44">
              <Image src="/service-3.jpg" alt="Organizasyon" fill className="object-cover" />
            </div>
          </div>
          <div>
            <div className="badge mb-5">Hikayemiz</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f18] leading-tight mb-5">Çorum&apos;un En Köklü Çiçekçisi</h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-base">1995&apos;te Çorum&apos;da küçük bir dükkanla başlayan yolculuğumuz, bugün 3 katlı mağazamız ve geniş ürün yelpazemizle bölgenin en köklü çiçekçi ve organizasyon firması haline geldi.</p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm sm:text-base">Binlerce düğün, nişan ve ticari mekan projesine imza attık. Her çiçeğe kalbimizin bir parçasını katıyoruz.</p>
            <div className="grid grid-cols-3 gap-4 p-5 bg-[#faf9f7] rounded-2xl">
              {[["1995","Kuruluş"],["3 Kat","Mağaza"],["Çorum","Konum"]].map(([v,l]) => (
                <div key={l} className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-[#5B8C51]">{v}</p>
                  <p className="text-xs text-gray-400 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto">Değerlerimiz</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f18]">Bizi Biz Yapan İlkeler</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {icon:"🌿",title:"Tazelik",text:"Her gün taze çiçek tedariki, solmayan güzellik garantisi."},
              {icon:"💎",title:"Kalite",text:"Ürünlerimizi titizlikle seçiyor, her detayı özenle işliyoruz."},
              {icon:"🤝",title:"Güven",text:"20+ yıldır aynı güvenilirlik anlayışıyla hizmet veriyoruz."},
              {icon:"❤️",title:"Tutku",text:"Çiçekçiliği bir meslek değil, bir yaşam biçimi olarak görüyoruz."},
            ].map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover-lift">
                <span className="text-4xl block mb-3">{v.icon}</span>
                <h3 className="font-bold text-[#1a1f18] mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#5B8C51]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Özel Anlarınız İçin Buradayız</h2>
          <p className="text-green-100 mb-7 text-sm">Ücretsiz danışmanlık için hemen iletişime geçin.</p>
          <Link href="/iletisim" className="inline-flex px-9 py-4 bg-[#EDDD5E] text-[#1a1f18] font-bold rounded-full hover:bg-yellow-400 transition shadow-xl text-sm">
            İletişime Geç →
          </Link>
        </div>
      </section>
    </>
  );
}
