import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Bereket Çiçekçilik",
  description: "Çiçek siparişi, mekan süsleme teklifi veya her türlü sorunuz için bize ulaşın.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <Image src="/service-4.jpg" alt="İletişim" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#404A3D]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16">
          <span className="text-[#EDDD5E] text-sm font-semibold tracking-widest uppercase mb-3">Bize Ulaşın</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">İletişim</h1>
          <div className="flex gap-2 mt-4 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#EDDD5E] transition-colors">Anasayfa</Link>
            <span>/</span>
            <span className="text-[#EDDD5E]">İletişim</span>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info side */}
            <div>
              <span className="section-title">İletişim</span>
              <h2 className="text-4xl font-bold text-[#404A3D] mt-4 mb-6">
                Hayalinizdeki Organizasyon için Konuşalım
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Çiçek siparişi, mekan süsleme teklifi ya da her türlü sorunuz için bize ulaşın. En kısa sürede geri dönüş sağlıyoruz.
              </p>

              {/* Contact cards */}
              <div className="space-y-5">
                {[
                  {
                    icon: "📍",
                    title: "Adresimiz",
                    content: "Üçtutlar, Üçtutlar Cd. No:38, 19030 Çorum Merkez/Çorum",
                    href: "https://maps.google.com/?q=Çorum+Üçtutlar+Cd+No:38",
                  },
                  {
                    icon: "📞",
                    title: "Telefon",
                    content: "+90 536 646 33 06",
                    href: "tel:+905366463306",
                  },
                  {
                    icon: "✉️",
                    title: "E-posta",
                    content: "bilgi@bereketcicek.com",
                    href: "mailto:bilgi@bereketcicek.com",
                  },
                  {
                    icon: "🕐",
                    title: "Çalışma Saatleri",
                    content: "Pzt–Cmt: 09:00–19:30 | Pazar: Kapalı",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-[#f7faf6] rounded-2xl hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-[#5B8C51]/10 flex items-center justify-center flex-shrink-0 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#5B8C51] uppercase tracking-widest mb-1">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#404A3D] font-medium hover:text-[#5B8C51] transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-[#404A3D] font-medium">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden h-56 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031!2d34.978!3d40.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMyJzUyLjgiTiAzNMKwNTgnNDEuNiJF!5e0!3m2!1str!2str!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form side */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
