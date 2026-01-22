"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  Phone,
  User,
  Mail,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const whatsappNumber = "905071808810";
  const whatsappMessage = encodeURIComponent(
    "Merhaba Feyza Hanım, online terapi süreci hakkında bilgi almak istiyorum."
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    // 🛑 Honeypot (bot koruması)
    if (formData.get("company")) {
      setLoading(false);
      return;
    }

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && !result.error) {
        toast.success("Mesajınız iletildi 🎉", {
          description: "En kısa sürede sizinle iletişime geçilecektir.",
        });

        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Bir hata oluştu", {
          description: "Lütfen daha sonra tekrar deneyin.",
        });
      }
    } catch (error) {
      console.error("İletişim formu hatası:", error);
      toast.error("Bağlantı hatası oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="iletisim"
      className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white py-28"
    >
      {/* Arka plan blur */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-125 w-125 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="grid gap-20 md:grid-cols-2 items-start">

          {/* SOL – METİN */}
          <div className="space-y-10">
            <div>
              <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                İlk Adımı Atın
              </span>

              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                Ücretsiz Ön Görüşme
              </h2>

              <p className="text-lg leading-relaxed text-slate-600 max-w-xl">
                Online terapi süreci hakkında merak ettiklerinizi paylaşın.
                Size en uygun yol haritasını birlikte belirleyelim.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-3xl border border-green-200 bg-white/80 p-6 shadow-lg backdrop-blur hover:-translate-y-1 transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <div className="font-bold text-slate-900">
                  WhatsApp ile Yazın
                </div>
                <div className="text-sm text-green-700">
                  Genellikle aynı gün dönüş yapılır
                </div>
              </div>
            </a>
          </div>

          {/* SAĞ – FORM */}
          <div className="relative rounded-[2.8rem] border border-white/60 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">
            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              Bilgi Formu
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <input type="text" name="company" className="hidden" />

              {[
                { icon: User, name: "name", placeholder: "Adınız Soyadınız" },
                { icon: Phone, name: "phone", placeholder: "Telefon Numaranız", type: "tel" },
                { icon: Mail, name: "email", placeholder: "E-posta Adresiniz", type: "email" },
              ].map(({ icon: Icon, ...field }, i) => (
                <div key={i} className="relative">
                  <Icon className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input
                    {...field}
                    required
                    className="h-16 rounded-2xl border border-slate-200 bg-white pl-14 text-base shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div className="relative">
                <MessageSquare className="absolute left-5 top-5 h-5 w-5 text-slate-400" />
                <Textarea
                  name="message"
                  placeholder="Hangi konuda destek istiyorsunuz?"
                  className="min-h-35 rounded-2xl border border-slate-200 bg-white pl-14 pt-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="mt-6 h-16 w-full rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-lg font-bold shadow-xl shadow-blue-200 hover:scale-[1.02] transition"
              >
                {loading ? "Gönderiliyor..." : "Ücretsiz Ön Görüşme Talep Et"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
}
