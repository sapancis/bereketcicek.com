import type { Metadata } from "next";
import { Open_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Bereket Çiçekçilik & Organizasyon | Çorum",
  description:
    "Çorum'da 20 yılı aşkın tecrübeyle çiçekçilik, mekan süsleme ve organizasyon hizmetleri. Toptan ve perakende çiçek satışı.",
  keywords: "çiçekçi, Çorum, organizasyon, mekan süsleme, toptan çiçek, buket",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${openSans.variable} ${libreBaskerville.variable}`}>
      <body className="bg-white text-[#404A3D]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
