import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ürünlerimiz | Bereket Çiçekçilik",
  description: "Taze çiçekler, buketler, aranjmanlar ve organizasyon malzemeleri.",
};

const products = [
  { img:"/product-1.jpg", name:"Kırmızı Gül Buketi",    cat:"Taze Çiçek",  tag:"Popüler" },
  { img:"/product-2.jpg", name:"Karma Çiçek Aranjmanı",  cat:"Aranjman",    tag:"" },
  { img:"/product-3.jpg", name:"Beyaz Gelin Buketi",     cat:"Düğün",       tag:"Trend" },
  { img:"/product-4.jpg", name:"Renkli Buket",           cat:"Taze Çiçek",  tag:"" },
  { img:"/product-5.jpg", name:"Özel Tasarım Sepet",     cat:"Aranjman",    tag:"Popüler" },
  { img:"/product-6.jpg", name:"Masa Aranjmanı",         cat:"Organizasyon",tag:"" },
  { img:"/product-7.jpg", name:"Çiçek Çelengi",          cat:"Organizasyon",tag:"" },
  { img:"/product-8.jpg", name:"Güneş Çiçeği Buketi",   cat:"Taze Çiçek",  tag:"Yeni" },
  { img:"/product-9.jpg", name:"Pastel Tonlar Buketi",   cat:"Aranjman",    tag:"" },
  { img:"/product-10.jpg",name:"Doğum Günü Aranjmanı",  cat:"Özel Gün",    tag:"Popüler" },
  { img:"/product-11.jpg",name:"Mevsim Buketi",          cat:"Taze Çiçek",  tag:"Yeni" },
  { img:"/product-1.jpg", name:"Kır Çiçekleri Buketi",  cat:"Taze Çiçek",  tag:"" },
];

export default function ProductPage() {
  return (
    <>
      <div className="relative h-64 sm:h-96 overflow-hidden">
        <Image src="/product-1.jpg" alt="Ürünlerimiz" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1a1f18]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 text-center px-4">
          <div className="badge mb-4" style={{color:"#EDDD5E",background:"rgba(237,221,94,0.1)",borderColor:"rgba(237,221,94,0.25)"}}>Koleksiyonumuz</div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">Ürünlerimiz</h1>
          <p className="text-[#EDDD5E] text-xs mt-3"><Link href="/" className="hover:underline">Anasayfa</Link> / Ürünlerimiz</p>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="badge mb-4 mx-auto">Ürünlerimiz</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f18]">3000+ Ürün Çeşidi</h2>
            <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">Taze çiçeklerden organizasyon malzemelerine geniş ürün yelpazemizle hizmetinizdeyiz.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {products.map((p,i) => (
              <div key={i} className="group bg-[#faf9f7] rounded-2xl overflow-hidden hover-lift">
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  {p.tag && (
                    <span className="absolute top-2 right-2 px-2.5 py-0.5 bg-[#EDDD5E] text-[#1a1f18] text-[10px] font-bold rounded-full">{p.tag}</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href="/iletisim" className="px-4 py-1.5 bg-white text-[#5B8C51] text-xs font-bold rounded-full shadow">Fiyat Sor</Link>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <span className="text-[10px] font-semibold text-[#5B8C51] uppercase tracking-wide">{p.cat}</span>
                  <h3 className="font-semibold text-[#1a1f18] text-xs sm:text-sm mt-0.5 leading-tight">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-7 sm:p-10 bg-[#faf9f7] rounded-3xl text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#1a1f18] mb-2">3 Katlı Mağazamızda Çok Daha Fazlası</p>
            <p className="text-gray-400 text-sm mb-6">Buradakiler koleksiyonumuzun küçük bir kısmı. Fiyat sormak için iletişime geçin.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/iletisim" className="px-8 py-3 bg-[#5B8C51] text-white font-bold rounded-full text-sm hover:bg-[#4a7342] transition shadow-md">Fiyat Sor</Link>
              <a href="tel:+905366463306" className="px-8 py-3 border-2 border-[#5B8C51] text-[#5B8C51] font-bold rounded-full text-sm hover:bg-[#5B8C51] hover:text-white transition">📞 Hemen Ara</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
