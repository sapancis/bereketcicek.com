"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"", message:"" });
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle");

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const r = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      setStatus(r.ok ? "ok" : "err");
      if (r.ok) setForm({ name:"", email:"", phone:"", subject:"", message:"" });
    } catch { setStatus("err"); }
  };

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8C51] focus:border-transparent transition";

  return (
    <div className="bg-[#faf9f7] rounded-3xl p-6 sm:p-8 border border-gray-100">
      <h3 className="text-xl font-bold text-[#1a1f18] mb-1">Mesaj Gönderin</h3>
      <p className="text-gray-400 text-xs mb-6">24 saat içinde geri dönüş yapacağız.</p>

      {status === "ok" && (
        <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
          ✅ Mesajınız iletildi! En kısa sürede size dönüş yapacağız.
        </div>
      )}
      {status === "err" && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          ❌ Hata oluştu. Lütfen telefon ile ulaşın: 0536 646 33 06
        </div>
      )}

      <form onSubmit={submit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Ad Soyad *</label>
            <input name="name" required value={form.name} onChange={change} placeholder="Adınız Soyadınız" className={inputCls} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Telefon</label>
            <input name="phone" type="tel" value={form.phone} onChange={change} placeholder="05xx xxx xx xx" className={inputCls} />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">E-posta *</label>
          <input name="email" type="email" required value={form.email} onChange={change} placeholder="ornek@email.com" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Konu *</label>
          <select name="subject" required value={form.subject} onChange={change} className={inputCls}>
            <option value="">Konu Seçin</option>
            <option>Çiçek Siparişi</option>
            <option>Mekan Süsleme Teklifi</option>
            <option>Organizasyon Malzemeleri</option>
            <option>Yapay Bitki Tasarımı</option>
            <option>Toptan Sipariş</option>
            <option>Diğer</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Mesajınız *</label>
          <textarea name="message" required rows={5} value={form.message} onChange={change} placeholder="Mesajınızı buraya yazın..." className={`${inputCls} resize-none`} />
        </div>
        <button type="submit" disabled={status==="loading"}
          className="w-full py-4 bg-[#5B8C51] text-white font-bold rounded-xl hover:bg-[#4a7342] transition disabled:opacity-50 text-sm shadow-md">
          {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder →"}
        </button>
      </form>
    </div>
  );
}
