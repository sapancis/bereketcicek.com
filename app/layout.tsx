import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Bereket Çiçekçilik & Organizasyon | Çorum",
  description: "Çorum'da 20+ yıldır taze çiçek, mekan süsleme ve organizasyon hizmetleri. Toptan & perakende satış.",
  keywords: "çiçekçi Çorum, organizasyon, mekan süsleme, buket, gelin buketi, toptan çiçek",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={sans.variable}>
      <body style={{ fontFamily: "var(--font-sans, 'Segoe UI', system-ui, sans-serif)" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
