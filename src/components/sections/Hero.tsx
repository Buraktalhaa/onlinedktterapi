"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, CheckCircle, Video } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-12 md:pb-24 md:pt-20">
      {/* Arka Plan Dekorasyonu - Tailwind 4.0 Standartlarına Uygun */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20 pointer-events-none">
        <div className="h-100 w-150 bg-linear-to-r from-blue-400 to-indigo-300 rounded-full" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          
          {/* Sol Metin Alanı */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                <CheckCircle className="h-4 w-4" />
                <span>Uzman Dil ve Konuşma Terapisti</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:leading-[1.1]">
                Konuşmanın Gücünü <br />
                <span className="text-blue-600">Birlikte Keşfedelim</span>
              </h1>
              
              <p className="mb-10 text-lg leading-relaxed text-slate-600 md:text-xl max-w-2xl mx-auto lg:mx-0">
                Merhaba, ben <strong>Feyza Şahan</strong>. Çocuk ve yetişkinlerde dil ve konuşma bozukluklarına yönelik, bilimsel temelli ve kişiye özel online terapi süreçleri yürütüyorum.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="h-14 rounded-full bg-blue-600 px-8 text-lg hover:bg-blue-700 shadow-lg shadow-blue-200">
                  <Link href="/randevu" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Ücretsiz Ön Görüşme Al
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 rounded-full px-8 text-lg border-slate-200 hover:bg-slate-50">
                  <Link href="/#uzmanliklar">Uzmanlık Alanlarım</Link>
                </Button>
              </div>

              {/* Güven Veren Bilgiler */}
              <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 lg:justify-start">
                {[
                  { label: "Klinik Deneyim", value: "8+ Yıl" },
                  { label: "Tamamlanan Seans", value: "2000+" },
                  { label: "Memnuniyet", value: "%100" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sağ Görsel Alanı */}
          <div className="relative flex-1 w-full max-w-135">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              {/* Ana Görsel */}
              <div className="relative aspect-4/5 overflow-hidden rounded-[3rem] border-12 border-white shadow-2xl bg-slate-50">
                <Image
                  src="/feyza-sahan-hero.jpg"
                  alt="Feyza Şahan - Dil ve Konuşma Terapisti"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-20 hidden md:flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-slate-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Video className="h-5 w-5" />
                </div>
                <div className="pr-2">
                  <div className="text-sm font-bold text-slate-900">Aktif Randevu</div>
                  <div className="text-[10px] text-green-600 font-medium">Şu an müsait</div>
                </div>
              </motion.div>

              {/* Bilgi Kartı - ESLint Hatası &quot; ile giderildi */}
              <div className="absolute -bottom-8 -left-8 hidden md:block max-w-50 rounded-2xl bg-slate-900 p-5 text-white shadow-2xl">
                <p className="text-sm font-medium leading-relaxed opacity-90">
                  &quot;Her bireyin iletişim yolculuğu kendine hastır.&quot;
                </p>
                <div className="mt-3 h-1 w-8 bg-blue-500 rounded-full" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}