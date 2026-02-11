"use client";

import { education } from "@/data/about";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Heart, Sparkles } from "lucide-react";
import { PageSection } from "@/components/layout/PageSection";
import { expertise } from "@/data/expertise";

export function About() {
  return (
    <PageSection id="hakkimda" variant="gray" className="py-24">
      {/* items-stretch: Her iki sütunun yüksekliğini eşitler */}
      <div className="flex flex-col gap-12 lg:flex-row items-stretch">

        {/* SOL: ANLATIM - Flex-1 ve h-full ile içerik yayılır */}
        <div className="flex-1 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4" />
                Hakkımda
              </h3>
              <h2 className="mb-6 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Her Bireyin İletişim Yolculuğu <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">
                  Birbirinden Farklıdır
                </span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                <p>
                  Merhaba, ben <strong>Feyza Şahan</strong>. Dil ve konuşma
                  terapisti olarak iletişimin yaşam kalitesindeki hayati yerinin
                  farkındayım.
                </p>
                <p>
                  Terapi sürecini bilimsel temellere dayalı, danışan odaklı ve tamamen
                  kişiye özel bir yaklaşımla, online konforunda yürütüyorum.
                </p>
              </div>
            </div>

            {/* ÖZELLİKLER */}
            <div className="grid gap-4 pt-4 md:grid-cols-2">
              {[
                { icon: Heart, title: "Danışan Odaklı", desc: "Güvenli ve destekleyici süreç.", gradient: "from-teal-500 to-teal-600", shadow: "shadow-teal-100/50" },
                { icon: Award, title: "Bilimsel Yaklaşım", desc: "Kanıta dayalı, güncel yöntemler.", gradient: "from-blue-500 to-blue-600", shadow: "shadow-blue-100/50" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg ${item.shadow} border border-slate-50`}>
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${item.gradient} text-white`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{item.title}</h4> {/* text-sm -> text-base */}
                    <p className="text-sm text-slate-500">{item.desc}</p> {/* text-xs -> text-sm */}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SAĞ: EĞİTİM VE UZMANLIKLAR */}
        <div className="flex-1 w-full flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative rounded-[2.5rem] bg-white p-8 shadow-[0_20px_50px_rgba(37,99,235,0.06)] border border-slate-100 overflow-hidden"
          >
            <div className="mb-8 flex items-center gap-4 relative">
              <div className="p-2.5 bg-linear-to-br from-teal-500 to-blue-600 rounded-xl">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Eğitim Bilgileri</h3>
            </div>

            <div className="space-y-8 relative">
              {education.map((item, i) => (
                <div key={i} className="relative border-l-2 border-slate-100 pl-6 ml-3">
                  <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-linear-to-br from-teal-400 to-blue-500 shadow-sm" />

                  {/* Tarih Etiketi */}
                  <div className="text-xs font-bold text-blue-600 mb-2 px-3 py-1 bg-blue-50 inline-block rounded-md uppercase tracking-wider">
                    {item.year}
                  </div>

                  {/* Okul İsmi */}
                  <div className="text-xl font-extrabold text-slate-900 leading-tight">
                    {item.school}
                  </div>

                  {/* Bölüm/Derece */}
                  <div className="text-base text-slate-500 mt-1 font-semibold italic">
                    {item.degree}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">Çalışma Alanları</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item, i) => (
                <span key={i} className="rounded-lg bg-slate-50 border border-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageSection>
  );
}