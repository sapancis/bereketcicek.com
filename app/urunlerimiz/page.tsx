import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ürünlerimiz | Bereket Çiçekçilik",
  description: "Taze çiçekler, buketler, aranjmanlar, yapay çiçekler ve organizasyon malzemeleri.",
};

const categories = ["Tümü", "Taze Çiçekler", "Yapay Çiçekler", "Aranjmanlar", "Organizasyon"];

const products = [
  { img: "/product-1.jpg", name: "Kırmızı Gül Buketi", category: "Taze Çiçekler", tag: "Popüler" },
  { img: "/product-2.jpg", name: "Karma Aranjman", category: "Aranjmanlar", tag: "" },
  { img: "/product-3.jpg", name: "Beyaz Lilyum", category: "Taze Çiçekler", tag: "Yeni" },
  { img: "/product-4.jpg", name: "Yapay Orkide", category: "Yapay Çiçekler", tag: "" },
  { img: "/product-5.jpg", name: "Gelin Buketi", category: "Aranjmanlar", tag: "Popüler" },
  { img: "/product-6.jpg", name: "Lavanta Demeti", category: "Taze Çiçekler", tag: "" },
  { img: "/product-7.jpg", name: "Organizasyon Şeridi", category: "Organizasyon", tag: "" },
  { img: "/product-8.jpg", name: "Yapay Güller Kutu", category: "Yapay Çiçekler", tag: "Trend" },
  { img: "/product-9.jpg", name: "Masa Aranjmanı", category: "Aranjmanlar", tag: "" },
  { img: "/product-10.jpg", name: "Balon Süsleme Seti", category: "Organizasyon", tag: "" },
  { img: "/product-11.jpg", name: "Mevsim Buketi", category: "Taze Çiçekler", tag: "Yeni" },
  { img: "/product-1.jpg", name: "Doğum Günü Aranjmanı", category: "Aranjmanlar", tag: "" },
];

export default function ProductPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <Image src="/product-1.jpg" alt="Ürünlerimiz" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#404A3D]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16">
          <span className="text-[#EDDD5E] text-sm font-semibold tracking-widest uppercase mb-3">Koleksiyonumuz</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">Ürünlerimiz</h1>
          <div className="flex gap-2 mt-4 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#EDDD5E] transition-colors">Anasayfa</Link>
            <span>/</span>
            <span className="text-[#EDDD5E]">Ürünlerimiz</span>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-title">Ürünlerimiz</span>
            <h2 className="text-4xl font-bold text-[#404A3D] mt-4">3000+ Ürün Çeşidi</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Taze çiçeklerden yapay aranjmanlara, organizasyon malzemelerinden yapay ağaçlara kadar geniş ürün yelpazemizle hizmetinizdeyiz.
            </p>
          </div>

          {/* Category pills (visual only — server component) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-default ${
                  i === 0
                    ? "bg-[#5B8C51] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-[#5B8C51]/10 hover:text-[#5B8C51]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden shadow-sm card-hover bg-white border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.tag && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-[#EDDD5E] text-[#404A3D] text-xs font-bold rounded-full">
                      {p.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href="/iletisim"
                      className="px-5 py-2 bg-white text-[#5B8C51] font-semibold text-sm rounded-full shadow-md hover:bg-[#5B8C51] hover:text-white transition-colors"
                    >
                      Fiyat Sor
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-[#5B8C51] font-medium">{p.category}</span>
                  <h3 className="font-semibold text-[#404A3D] mt-1">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 text-center p-8 bg-[#f7faf6] rounded-2xl">
            <p className="text-2xl font-bold text-[#404A3D] mb-2">3 Katlı Mağazamızda Çok Daha Fazlası</p>
            <p className="text-gray-500 mb-6">
              Burada gösterilen ürünler koleksiyonumuzun küçük bir kısmıdır. Mağazamızı ziyaret edin veya fiyat sormak için iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/iletisim"
                className="px-8 py-3 bg-[#5B8C51] text-white font-semibold rounded-full hover:bg-[#4a7342] transition-all shadow-md"
              >
                Fiyat Sor
              </Link>
              <a
                href="tel:+905366463306"
                className="px-8 py-3 border-2 border-[#5B8C51] text-[#5B8C51] font-semibold rounded-full hover:bg-[#5B8C51] hover:text-white transition-all"
              >
                📞 Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
