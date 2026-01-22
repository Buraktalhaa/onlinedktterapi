"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Heart } from "lucide-react";

const education = [
  {
    school: "Hacettepe Üniversitesi",
    degree: "Dil ve Konuşma Terapisi (Lisans)",
    year: "2021 – 2025",
  },
];

const expertise = [
  "Gecikmiş Dil ve Konuşma",
  "Artikülasyon ve Fonolojik Bozukluklar",
  "Akıcılık Bozuklukları (Kekemelik)",
  "Otizm Spektrum Bozukluğu",
  "Aile Danışmanlığı ve Ev Programları",
];

export function About() {
  return (
    <section id="hakkimda" className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* SOL */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Hakkımda
              </h3>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Her Bireyin İletişim Yolculuğu <br /> Birbirinden Farklıdır
              </h2>

              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Merhaba, ben <strong>Feyza Şahan</strong>. Dil ve konuşma
                  terapisti olarak, iletişimin bireylerin sosyal, akademik ve
                  duygusal yaşamındaki yerinin ne kadar önemli olduğunun
                  farkındayım.
                </p>
                <p>
                  Terapi sürecini; danışanın ihtiyaçlarına göre planlanan,
                  bilimsel temelli ve aileyi sürecin aktif bir parçası haline
                  getiren bir yaklaşımla yürütüyorum.
                </p>
              </div>
            </motion.div>

            {/* ÖZELLİKLER */}
            <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Danışan Odaklı Yaklaşım
                  </h4>
                  <p className="text-sm text-slate-500">
                    Güvenli ve destekleyici bir terapi ortamı.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Bilimsel & Güncel
                  </h4>
                  <p className="text-sm text-slate-500">
                    Kanıta dayalı terapi yöntemleri.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ */}
          <div className="flex-1 w-full space-y-10">
            {/* EĞİTİM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl md:p-10"
            >
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                  <h3 className="text-2xl font-bold">Eğitim Bilgileri</h3>
                </div>

                <div className="space-y-8">
                  {education.map((item, i) => (
                    <div
                      key={i}
                      className="relative border-l border-slate-700 pl-8"
                    >
                      <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-blue-500" />
                      <div className="mb-1 text-sm font-bold text-blue-400">
                        {item.year}
                      </div>
                      <div className="text-lg font-bold">{item.school}</div>
                      <div className="text-sm text-slate-400">
                        {item.degree}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />
            </motion.div>

            {/* UZMANLIK */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Çalışma Alanları
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {expertise.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
