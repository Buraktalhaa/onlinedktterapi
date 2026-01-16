"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Ücretsiz Online Ön Görüşme",
    description:
      "Kısa bir online görüşme ile ihtiyaçlarınızı belirliyor ve size en uygun terapistleri öneriyoruz.",
  },
  {
    number: "2",
    title: "Uzman Terapist Eşleşmesi",
    description:
      "Alanında uzman terapistler arasından ihtiyacınıza en uygun olanla eşleşirsiniz.",
  },
  {
    number: "3",
    title: "Canlı Online Terapi Seansları",
    description:
      "Güvenli video görüşmelerle, evinizden çıkmadan terapi sürecinizi başlatırsınız.",
  },
  {
    number: "4",
    title: "Takip & Gelişim Raporları",
    description:
      "Düzenli değerlendirmeler, aile geri bildirimleri ve gelişim raporlarıyla süreci takip ederiz.",
  },
];

export function Process() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Süreç
          </h3>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Online Terapi Nasıl Çalışır?
          </h2>
          <p className="mt-4 text-slate-600">
            Size en uygun terapistle, tamamen online ve güvenli bir terapi
            süreci.
          </p>
        </div>

        {/* Adımlar */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-12 left-0 hidden h-0.5 w-full bg-slate-200 lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-xl shadow-blue-200">
                {step.number}
              </div>

              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-full bg-blue-600 px-10 hover:bg-blue-700 cursor-pointer">
            Ücretsiz Ön Görüşme Planla
          </Button>
        </div>
      </div>
    </section>
  );
}
