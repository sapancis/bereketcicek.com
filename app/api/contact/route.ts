import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Zorunlu alanlar eksik." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f7faf6; padding: 24px; border-radius: 12px;">
      <div style="background: #5B8C51; padding: 20px 24px; border-radius: 8px 8px 0 0; margin: -24px -24px 24px;">
        <h2 style="color: white; margin: 0; font-size: 20px;">🌸 Yeni İletişim Formu Mesajı</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666; width: 140px;"><strong>Ad Soyad:</strong></td><td style="padding: 8px 0; color: #404A3D;">${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;"><strong>E-posta:</strong></td><td style="padding: 8px 0; color: #404A3D;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;"><strong>Telefon:</strong></td><td style="padding: 8px 0; color: #404A3D;">${phone || "—"}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;"><strong>Konu:</strong></td><td style="padding: 8px 0; color: #404A3D;">${subject || "—"}</td></tr>
      </table>
      <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #5B8C51;">
        <strong style="color: #404A3D;">Mesaj:</strong>
        <p style="color: #555; margin: 8px 0 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
      </div>
      <p style="margin-top: 24px; color: #999; font-size: 12px; text-align: center;">
        Bu e-posta bereketcicek.com iletişim formundan gönderilmiştir.
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Bereket Çiçekçilik Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `[bereketcicek.com] ${subject || "İletişim Formu"} - ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email gönderme hatası:", err);
    return NextResponse.json({ error: "Email gönderilemedi." }, { status: 500 });
  }
}
