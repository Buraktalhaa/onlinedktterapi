"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail, MessageCircle, Send,
  Clock, Sparkles, Shield, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { emailAddress, phoneNumber } from "@/data/contact";
import { PageSection } from "@/components/layout/PageSection";

// ✅ Zod Şeması
const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Ad soyad en az 3 karakter olmalıdır")
    .max(50, "Ad soyad en fazla 30 karakter olmalıdır"),
  email: z
    .string()
    .email("Geçerli bir e-posta adresi giriniz")
    .max(100, "E-posta adresi en fazla 100 karakter olabilir"),
  phone: z
    .string()
    .min(10, "Telefon numarası en az 10 hane olmalıdır")
    .max(13, "Telefon numarası en fazla 13 hane olabilir")
    .regex(/^[0-9+]+$/, "Geçerli bir telefon numarası giriniz"),
  message: z
    .string()
    .min(10, "Mesajınız çok kısa (en az 10 karakter)")
    .max(150, "Mesajınız en fazla 150 karakter olabilir"),
  company: z.string().optional(), // Honeypot (bot koruması)
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  // ✅ Hataları çözen kısım: useForm tanımlaması
  const {
    register,
    handleSubmit: handleHookFormSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // ✅ Form gönderim fonksiyonu
  const onSubmit = async (data: ContactFormData) => {
    if (data.company) return; // Honeypot bot koruması
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Mesajınız iletildi! 🎉");
        reset(); // Formu temizle
      } else {
        toast.error("Bir hata oluştu.");
      }
    } catch {
      toast.error("Bağlantı hatası.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageSection id="iletisim" variant="gray" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-teal-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full" />

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="size-3.5" />
            İletişime Geçin
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Online Terapi İçin <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">İlk Adımı Atın</span>
          </h2>
          <p className="text-base text-slate-600">Ücretsiz ön görüşme için formu doldurun veya WhatsApp&apos;tan yazın.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/50 border border-slate-50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center mb-3 shadow-md shadow-blue-100">
                  <Mail className="size-5 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">E-posta</h4>
                <p className="text-xs text-slate-500 break-all">{emailAddress}</p>
              </div>

              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/50 border border-slate-50 hover:bg-slate-50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center mb-3 shadow-md shadow-green-100">
                  <MessageCircle className="size-5 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">WhatsApp</h4>
                <p className="text-xs text-green-600 font-bold">Hemen Yazın</p>
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-r from-blue-600 via-blue-500 to-teal-500 p-6 text-white shadow-lg shadow-blue-200/50">
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
              <h3 className="relative z-10 text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="size-4 text-blue-100" />
                Çalışma Saatleri
              </h3>
              <div className="relative z-10 space-y-3 text-sm">
                {[
                  { days: "Pazartesi - Cuma", hours: "09:00 - 22:00" },
                  { days: "Cumartesi", hours: "09:00 - 22:00" },
                  { days: "Pazar", hours: "09:00 - 22:00" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0">
                    <span className="text-blue-50 font-medium">{item.days}</span>
                    <span className="font-black text-white">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="relative z-10 mt-4 py-1.5 text-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Online Terapi • Her Gün
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
              <Shield className="size-6 text-blue-600 shrink-0" />
              <p className="text-[11px] text-blue-800 font-semibold leading-snug">
                Tüm bilgiler KVKK kapsamında gizli tutulur.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-7 md:p-8 shadow-2xl shadow-slate-200/60 border border-slate-50">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Bilgi Formu</h3>
            {/* handleHookFormSubmit(onSubmit) kullanımı hatayı çözer */}
            <form onSubmit={handleHookFormSubmit(onSubmit)} className="space-y-4">
              <input type="text" {...register("company")} className="hidden" />

              <div className="grid gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 ml-1">Adınız Soyadınız</label>
                  <Input
                    {...register("name")}
                    placeholder="Ad Soyad"
                    className={`h-12 rounded-xl bg-slate-50 border-slate-100 text-sm ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-bold ml-1 flex items-center gap-1"><AlertCircle className="size-3" /> {errors.name.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 ml-1">E-posta</label>
                    <Input
                      {...register("email")}
                      placeholder="E-posta"
                      className={`h-12 rounded-xl bg-slate-50 border-slate-100 text-sm ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold ml-1 flex items-center gap-1"><AlertCircle className="size-3" /> {errors.email.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 ml-1">Telefon</label>
                    <Input
                      {...register("phone")}
                      placeholder="05XX..."
                      className={`h-12 rounded-xl bg-slate-50 border-slate-100 text-sm ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-bold ml-1 flex items-center gap-1"><AlertCircle className="size-3" /> {errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 ml-1">Mesajınız</label>
                  <Textarea
                    {...register("message")}
                    placeholder="Destek almak istediğiniz konu..."
                    className={`min-h-25 rounded-xl bg-slate-50 border-slate-100 text-sm p-3 ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-[10px] text-red-500 font-bold ml-1 flex items-center gap-1"><AlertCircle className="size-3" /> {errors.message.message}</p>}
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full h-14 rounded-xl bg-linear-to-r from-teal-500 to-blue-600 text-white font-bold text-base shadow-lg shadow-blue-500/20 active:scale-95 transition-all cursor-pointer">
                {loading ? "Gönderiliyor..." : "Mesajı Gönder"}
                <Send className="size-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageSection>
  );
}