"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, User } from "lucide-react";

export function ContactForm() {
  async function handleSubmit() {
    alert("İletişim formu yakında aktif olacaktır.");
  }


  return (
    <section id="iletisim" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ücretsiz Ön Görüşme İsteyin</h2>
            <p className="text-slate-600 mb-8">
              Feyza Şahan ile online terapi süreci hakkında bilgi almak için formu doldurmanız yeterlidir.
            </p>
          </div>

          <form action={handleSubmit} className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input name="name" required placeholder="Adınız Soyadınız" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input name="phone" required placeholder="Telefon Numaranız" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Textarea name="message" placeholder="Hangi konuda destek istiyorsunuz?" className="pl-10 pt-3 min-h-30 rounded-xl" />
            </div>
            <Button type="submit" className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-lg">
              Bilgi Almak İstiyorum
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}