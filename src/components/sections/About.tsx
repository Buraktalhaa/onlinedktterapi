"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Heart } from "lucide-react";

const education = [
  {
    school: "Üniversite Adı",
    degree: "Dil ve Konuşma Terapisi (Lisans)",
    year: "2014 - 2018",
  },
  {
    school: "Üniversite Adı",
    degree: "Dil ve Konuşma Bozuklukları (Yüksek Lisans)",
    year: "2018 - 2020",
  },
];

const expertise = [
  "Artikülasyon ve Fonolojik Bozukluklar",
  "Akıcılık Bozuklukları (Kekemelik)",
  "Gecikmiş Dil ve Konuşma",
  "Otizm Spektrum Bozukluğu",
  "Nörojenik Konuşma Bozuklukları",
];

export function About() {
  return (
    <section id="hakkimda" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Sol: Biyografi ve Vizyon */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3">
                Tanışalım
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                İletişimin Gücüne İnanan <br /> Profesyonel Bir Yaklaşım
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  Merhaba, ben <strong>Feyza Şahan</strong>. Lisans eğitimimi tamamladığım günden bu yana, dil ve konuşma süreçlerinin bireylerin yaşam kalitesi üzerindeki etkisine odaklanıyorum.
                </p>
                <p>
                  Klinik çalışmalarımda her danışanın ihtiyacının benzersiz olduğunu biliyor, terapi süreçlerimi bilimsel kanıta dayalı yöntemlerle ve aile merkezli bir yaklaşımla şekillendiriyorum.
                </p>
              </div>
            </motion.div>

            {/* İkonlu Özellikler */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Empati Odaklı</h4>
                  <p className="text-sm text-slate-500">Bireye özel hassasiyet.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Bilimsel Temel</h4>
                  <p className="text-sm text-slate-500">Kanıta dayalı yöntemler.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ: Eğitim ve Sertifikalar */}
          <div className="flex-1 w-full space-y-10">
            {/* Eğitim Kronolojisi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                  <h3 className="text-2xl font-bold">Eğitim Geçmişi</h3>
                </div>
                
                <div className="space-y-8">
                  {education.map((item, i) => (
                    <div key={i} className="relative pl-8 border-l border-slate-700">
                      <div className="absolute -left-1.25 top-0 h-2.5 w-2.5 rounded-full bg-blue-500" />
                      <div className="text-blue-400 text-sm font-bold mb-1">{item.year}</div>
                      <div className="text-lg font-bold">{item.school}</div>
                      <div className="text-slate-400 text-sm">{item.degree}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Dekoratif Gradient */}
              <div className="absolute -right-20 -bottom-20 h-64 w-64 bg-blue-600/20 blur-[100px] rounded-full" />
            </motion.div>

            {/* Uzmanlık Alanları Listesi */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Çalışma Alanları</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
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