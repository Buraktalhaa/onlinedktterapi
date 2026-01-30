"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/lib/scrollTo";
import { steps } from "@/data/process";
import { PageSection } from "@/components/layout/PageSection";

export function Process() {
  return (
    <PageSection id="surec" variant="white" className="py-8">
      {/* Başlık */}
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h3 className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
          Süreç
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Nasıl Çalışıyorum?
        </h2>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Online terapi sürecini güvenli, şeffaf ve yapılandırılmış adımlarla
          yürütüyorum.
        </p>
      </div>

      {/* Adımlar */}
      <div className="grid gap-16 md:grid-cols-3 relative">
        {/* Arka Plan Bağlantı Çizgisi (Opsiyonel: Adımları birbirine bağlar) */}
        <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-slate-100 -z-10" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative text-center group"
          >
            {/* Numara: Düz yeşil yerine Navbar Degrademizi (Teal-to-Blue) kullandık */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-teal-500 to-blue-600 text-2xl font-bold text-white shadow-xl shadow-blue-200 transition-transform group-hover:scale-110 duration-300">
              {step.number}
            </div>

            <h3 className="mb-4 text-xl font-bold text-slate-900">{step.title}</h3>
            <p className="text-base leading-relaxed text-slate-600 px-4">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA: Hero'daki primary buton varyantını kullandık */}
      <div className="mt-8 text-center">
        <Button
          size="lg"
          variant="primary"
          onClick={() => scrollToId("iletisim")}
          className="h-16 rounded-full px-12 text-lg font-bold shadow-2xl cursor-pointer"
        >
          Ücretsiz Ön Görüşme Talep Et
        </Button>
      </div>
    </PageSection>
  );
}