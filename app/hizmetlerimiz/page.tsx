import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Bereket Çiçekçilik",
  description: "Mekan süsleme, toptan çiçekçilik, organizasyon ve yapay bitki hizmetleri.",
};

const services = [
  { img:"/service-1.jpg", icon:"🌸", title:"Mekan Süsleme", desc:"Kafe, restaurant, apartman ve düğün salonlarını profesyonel çiçek aranjmanları ile canlandırıyoruz.", features:["Düğün & Nişan","Restoran & Kafe","Kurumsal Mekan","Özel Günler"] },
  { img:"/service-2.jpg", icon:"💐", title:"Taze Çiçekçilik", desc:"Her gün taze temin edilen çiçeklerimizle özel tasarım buketler ve aranjmanlar hazırlıyoruz.", features:["Taze Buket","Özel Aranjman","Toptan Sipariş","Hızlı Teslimat"] },
  { img:"/service-3.jpg", icon:"🎀", title:"Organizasyon Malzemeleri", desc:"3 katlı mağazamızda organizasyonlarınız için A'dan Z'ye her türlü malzemeyi bulabilirsiniz.", features:["Balon & Dekorasyon","Şerit & Kurdele","Hediye Paketi","Tematik Süsleme"] },
  { img:"/service-5.jpg", icon:"🌳", title:"Yapay Bitki Tasarımı", desc:"Bakım gerektirmeyen yapay ağaç ve bitkilerle mekanlarınıza doğallık katıyoruz.", features:["İç Mekan Ağacı","Dış Mekan","Özel Boyut","Uzun Ömürlü"] },
  { img:"/service-4.jpg", icon:"💒", title:"Düğün Organizasyonu", desc:"Hayallerinizdeki düğün için gelin buketi, salon süsleme ve tüm çiçek ihtiyaçlarınız.", features:["Gelin Buketi","Salon Süsleme","Masa Aranjmanı","Kır Düğünü"] },
  { img:"/service-6.jpg", icon:"🏢", title:"Kurumsal Hizmetler", desc:"Düzenli mekan süsleme ve toplu sipariş seçenekleriyle kurumsal ihtiyaçlarınızı karşılıyoruz.", features:["Haftalık Yenileme","Toplu Sipariş","Sözleşmeli","Faturalı Hizmet"] },
];

export default function ServicePage() {
  return (
    <>
      <div className="relative h-64 sm:h-96 overflow-hidden">
        <Image src="/service-1.jpg" alt="Hizmetlerimiz" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1a1f18]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 text-center px-4">
          <div className="badge mb-4" style={{color:"#EDDD5E",background:"rgba(237,221,94,0.1)",borderColor:"rgba(237,221,94,0.25)"}}>Ne Yapıyoruz?</div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">Hizmetlerimiz</h1>
          <p className="text-[#EDDD5E] text-xs mt-3"><Link href="/" className="hover:underline">Anasayfa</Link> / Hizmetlerimiz</p>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto">Hizmetlerimiz</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f18]">Sunduğumuz Çözümler</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Küçük bir buket siparişinden kurumsal mekan tasarımına kadar yanınızdayız.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="group bg-[#faf9f7] rounded-2xl overflow-hidden hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-2xl">{s.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a1f18] mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {s.features.map(f => (
                      <span key={f} className="px-2 py-0.5 bg-[#5B8C51]/10 text-[#5B8C51] text-[11px] font-medium rounded-full">{f}</span>
                    ))}
                  </div>
                  <Link href="/iletisim" className="text-xs font-bold text-[#5B8C51] hover:underline">Teklif Al →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto">Süreç</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f18]">Nasıl Çalışırız?</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              {n:"01",icon:"📞",title:"İletişim",text:"Bizi arayın"},
              {n:"02",icon:"💬",title:"Danışmanlık",text:"İhtiyaçlarınızı belirleyelim"},
              {n:"03",icon:"🎨",title:"Tasarım",text:"Size özel hazırlıyoruz"},
              {n:"04",icon:"✅",title:"Teslimat",text:"Zamanında, özenle"},
            ].map(p => (
              <div key={p.n} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm mx-auto mb-3 flex items-center justify-center text-2xl">{p.icon}</div>
                <span className="text-[10px] font-bold text-[#5B8C51] tracking-widest">{p.n}</span>
                <h4 className="font-bold text-[#1a1f18] text-sm mt-1">{p.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#5B8C51]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ücretsiz Teklif Alın</h2>
          <Link href="/iletisim" className="inline-flex px-9 py-4 bg-[#EDDD5E] text-[#1a1f18] font-bold rounded-full hover:bg-yellow-400 transition shadow-xl text-sm">
            İletişime Geç →
          </Link>
        </div>
      </section>
    </>
  );
}
