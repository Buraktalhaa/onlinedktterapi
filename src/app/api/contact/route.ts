import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, phone, email, message } = await req.json();

        await resend.emails.send({
            from: "İletişim Formu <onboarding@resend.dev>",
            to: ["talha45879@gmail.com"],
            subject: `Yeni Ön Görüşme Talebi - ${name}`,
            replyTo: email || undefined,
            text: `
Yeni bir ön görüşme talebi geldi.

Ad Soyad: ${name}
Telefon: ${phone}
E-posta: ${email || "Belirtilmedi"}

Mesaj:
${message || "Mesaj bırakılmadı"}
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Mail gönderilemedi" },
            { status: 500 }
        );
    }
}
