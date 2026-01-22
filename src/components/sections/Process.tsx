"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Ücretsiz Online Ön Görüşme",
    description:
      "Kısa bir online görüşme ile sizi ve yaşadığınız iletişim zorluklarını dinliyor, ihtiyaçlarınızı birlikte değerlendiriyoruz.",
  },
  {
    number: "2",
    title: "Değerlendirme & Terapi Planı",
    description:
      "Gerekli değerlendirmelerin ardından, bireye özel ve bilimsel temelli bir terapi planı oluşturuyorum.",
  },
  {
    number: "3",
    title: "Online Terapi Süreci",
    description:
      "Belirlenen plan doğrultusunda, güvenli online seanslarla terapi sürecine başlıyoruz. Aile bilgilendirmeleri ve ev destekleriyle süreci birlikte takip ediyoruz.",
  },
];

export function Process() {
  return (
    <section className="bg-slate-50 py-24" id="surec">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Süreç
          </h3>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nasıl Çalışıyorum?
          </h2>
          <p className="mt-4 text-slate-600">
            Online terapi sürecini, danışanın ihtiyacına göre planlanan
            güvenli ve yapılandırılmış adımlarla yürütüyorum.
          </p>
        </div>

        {/* Adımlar */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-200">
                {step.number}
              </div>

              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="rounded-full bg-blue-600 px-10 hover:bg-blue-700"
          >
            Ücretsiz Ön Görüşme Talep Et
          </Button>
        </div>
      </div>
    </section>
  );
}
