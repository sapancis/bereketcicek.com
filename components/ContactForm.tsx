"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-[#404A3D] mb-2">Mesaj Gönderin</h3>
      <p className="text-gray-500 text-sm mb-8">Formu doldurun, 24 saat içinde geri dönelim.</p>

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
          ✅ Mesajınız iletildi! En kısa sürede size dönüş yapacağız.
        </div>
      )}
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
          ❌ Bir hata oluştu. Lütfen telefon ile ulaşın: +90 536 646 33 06
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Ad Soyad *</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Adınız Soyadınız"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5B8C51] focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefon</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="05xx xxx xx xx"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5B8C51] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">E-posta *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="ornek@email.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5B8C51] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Konu *</label>
          <select
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5B8C51] focus:border-transparent transition-all bg-white"
          >
            <option value="">Konu Seçin</option>
            <option value="Çiçek Siparişi">Çiçek Siparişi</option>
            <option value="Mekan Süsleme Teklifi">Mekan Süsleme Teklifi</option>
            <option value="Organizasyon Malzemeleri">Organizasyon Malzemeleri</option>
            <option value="Yapay Ağaç Tasarımı">Yapay Ağaç Tasarımı</option>
            <option value="Toptan Sipariş">Toptan Sipariş</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Mesajınız *</label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Mesajınızı buraya yazın..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5B8C51] focus:border-transparent transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-[#5B8C51] text-white font-semibold rounded-xl hover:bg-[#4a7342] transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed text-sm"
        >
          {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder →"}
        </button>
      </form>
    </div>
  );
}
