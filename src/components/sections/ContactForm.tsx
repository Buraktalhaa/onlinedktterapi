"use client";

import { useState } from "react";
import { 
  Mail, MessageCircle, Send, 
  Clock, Sparkles, Shield 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { emailAddress, phoneNumber } from "@/data/contact";
import { PageSection } from "@/components/layout/PageSection";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    if (formData.get("company")) return setLoading(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        toast.success("Mesajınız iletildi! 🎉");
        (e.target as HTMLFormElement).reset();
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
        {/* Header: mb-8'e düşürüldü */}
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
          
          {/* SOL: Kartlar daha küçük ve kompakt */}
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/50 border border-slate-50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center mb-3 shadow-md shadow-blue-100">
                  <Mail className="size-5 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">E-posta</h4>
                <p className="text-xs text-slate-500 break-all">{emailAddress}</p>
              </div>

              <a href={`https://wa.me/${phoneNumber}`} target="_blank" className="bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/50 border border-slate-50 hover:bg-slate-50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center mb-3 shadow-md shadow-green-100">
                  <MessageCircle className="size-5 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">WhatsApp</h4>
                <p className="text-xs text-green-600 font-bold">Hemen Yazın</p>
              </a>
            </div>

            {/* Çalışma Saatleri: p-8'den p-6'ya düştü */}
            <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Clock className="size-4 text-teal-400" />
                 Çalışma Saatleri
               </h3>
               <div className="space-y-2.5 text-sm">
                 {[
                   { days: "Pazartesi - Cuma", hours: "09:00 - 18:00" },
                   { days: "Cumartesi", hours: "10:00 - 15:00" },
                   { days: "Pazar", hours: "Kapalı", isClosed: true }
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-2 last:border-0">
                     <span className="text-slate-400 font-medium">{item.days}</span>
                     <span className={`font-bold ${item.isClosed ? 'text-red-400' : 'text-teal-400'}`}>{item.hours}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
               <Shield className="size-6 text-blue-600 shrink-0" />
               <p className="text-[11px] text-blue-800 font-semibold leading-snug">
                 Tüm bilgiler KVKK kapsamında gizli tutulur.
               </p>
            </div>
          </div>

          {/* SAĞ: Form - p-12'den p-8'e düştü, gap-5'ten gap-4'e düştü */}
          <div className="bg-white rounded-[2.5rem] p-7 md:p-8 shadow-2xl shadow-slate-200/60 border border-slate-50">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Bilgi Formu</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="company" className="hidden" />
              
              <div className="grid gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 ml-1">Adınız Soyadınız</label>
                  <Input name="name" placeholder="Ad Soyad" className="h-12 rounded-xl bg-slate-50 border-slate-100 text-sm" required />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 ml-1">E-posta</label>
                    <Input name="email" type="email" placeholder="E-posta" className="h-12 rounded-xl bg-slate-50 border-slate-100 text-sm" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 ml-1">Telefon</label>
                    <Input name="phone" type="tel" placeholder="05XX..." className="h-12 rounded-xl bg-slate-50 border-slate-100 text-sm" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 ml-1">Mesajınız</label>
                  <Textarea name="message" placeholder="Destek almak istediğiniz konu..." className="min-h-25 rounded-xl bg-slate-50 border-slate-100 text-sm p-3" required />
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