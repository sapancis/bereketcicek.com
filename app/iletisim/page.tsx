import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Bereket Çiçekçilik",
  description: "Çiçek siparişi veya mekan süsleme teklifi için bize ulaşın.",
};

export default function ContactPage() {
  return (
    <>
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image src="/service-3.jpg" alt="İletişim" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1a1f18]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 text-center px-4">
          <div className="badge mb-4" style={{color:"#EDDD5E",background:"rgba(237,221,94,0.1)",borderColor:"rgba(237,221,94,0.25)"}}>Bize Ulaşın</div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">İletişim</h1>
          <p className="text-[#EDDD5E] text-xs mt-3"><Link href="/" className="hover:underline">Anasayfa</Link> / İletişim</p>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Sol: Bilgiler */}
            <div>
              <div className="badge mb-5">İletişim</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f18] mb-5 leading-tight">
                Hayalinizdeki Organizasyon için Konuşalım
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Çiçek siparişi, mekan süsleme teklifi ya da her türlü sorunuz için bize ulaşın. En kısa sürede geri dönüş sağlıyoruz.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon:"📍", title:"Adresimiz",         val:"Üçtutlar Cd. No:38, 19030 Çorum Merkez", href:"https://maps.google.com/?q=Çorum+Üçtutlar+Cd+No:38" },
                  { icon:"📞", title:"Telefon",            val:"0536 646 33 06",                          href:"tel:+905366463306" },
                  { icon:"✉️", title:"E-posta",            val:"bilgi@bereketcicek.com",                  href:"mailto:bilgi@bereketcicek.com" },
                  { icon:"🕐", title:"Çalışma Saatleri",  val:"Pzt–Cmt: 09:00–19:30 | Pazar: Kapalı",   href:null },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 p-4 bg-[#faf9f7] rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-[#5B8C51]/10 flex items-center justify-center text-lg shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-[10px] font-bold text-[#5B8C51] uppercase tracking-widest mb-0.5">{item.title}</p>
                      {item.href
                        ? <a href={item.href} className="text-sm text-[#1a1f18] font-medium hover:text-[#5B8C51] transition-colors">{item.val}</a>
                        : <p className="text-sm text-[#1a1f18] font-medium">{item.val}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Harita */}
              <div className="rounded-2xl overflow-hidden h-52 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.5!2d34.9776!3d40.5495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMyJzU4IlMgMzTCsDU4JzM5IkU!5e0!3m2!1str!2str!4v1"
                  width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Sağ: Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
