"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageSection } from "@/components/layout/PageSection";
import { scrollToId } from "@/lib/scrollTo";

export function Hero() {
  return (
    <PageSection variant="white" className="pt-8 pb-16 md:pb-28">
      {/* Arka plan dekoru */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-25 blur-3xl">
        <div className="h-96 w-xl rounded-full bg-linear-to-r from-teal-400 to-blue-400" />
      </div>

      <div className="relative flex flex-col items-center gap-14 lg:flex-row">
        {/* SOL */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
              <CheckCircle className="h-4 w-4" />
              Uzman Dil ve Konuşma Terapisti
            </div>

            {/* Başlık */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Konuşmanın Gücünü{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-blue-600">
                Birlikte Keşfedelim
              </span>
            </h1>

            {/* Açıklama */}
            <p className="mb-10 mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl lg:mx-0">
              Merhaba, ben <strong>Feyza Şahan</strong>. Çocuk ve yetişkinlerde
              dil ve konuşma bozukluklarına yönelik, bilimsel temelli ve kişiye
              özel online terapi süreçleri yürütüyorum.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollToId("iletisim")}
                className="h-14 rounded-full px-8 text-lg font-bold cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                Ücretsiz Ön Görüşme
              </Button>

              <Button
                size="lg"
                variant="expertise"
                onClick={() => scrollToId("uzmanliklar")}
                className="h-14 rounded-full px-8 text-lg font-fold cursor-pointer"
              >
                Uzmanlık Alanlarım
              </Button>
            </div>

            {/* Alt bilgiler */}
            <div className="mt-14 flex flex-wrap justify-center gap-x-14 gap-y-6 lg:justify-start">
              {[
                { label: "Danışan Profili", value: "Çocuk & Yetişkin" },
                { label: "Terapi Türü", value: "Online" },
                { label: "Yaklaşım", value: "Bilimsel Temelli" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="text-lg font-bold">{item.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SAĞ */}
        <div className="relative w-full max-w-lg flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Ana Fotoğraf */}
            <div className="relative aspect-4/5 overflow-hidden rounded-[3.5rem] border-12 border-white bg-slate-50 shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
              <Image
                src="/feyza-sahan-hero.jpeg"
                alt="Feyza Şahan"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* YENİ TASARIM: Alt Köşe Bilgi Kartı */}
            <div className="absolute -bottom-6 -right-6 md:right-0 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white max-w-60">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-blue-600 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <span className="font-bold text-slate-900 leading-tight">Uzman Destek</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Her bireyin iletişim yolculuğuna özel, bilimsel temelli online terapi yaklaşımları.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageSection>
  );
}
