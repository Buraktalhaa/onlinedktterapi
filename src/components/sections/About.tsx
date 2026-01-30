"use client";

import { education, expertise } from "@/data/about";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Heart, Sparkles } from "lucide-react";
import { PageSection } from "@/components/layout/PageSection";

export function About() {
  return (
    <PageSection id="hakkimda" variant="gray" className="py-24">
      <div className="flex flex-col gap-16 lg:flex-row items-start">
        {/* SOL: ANLATIM VE ÖZELLİKLER */}
        <div className="flex-1 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge: Navbar Degradesiyle Uyumlu */}
            <h3 className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              Hakkımda
            </h3>

            <h2 className="mb-8 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Her Bireyin İletişim Yolculuğu <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">
                Birbirinden Farklıdır
              </span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
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
          </motion.div>

          {/* ÖZELLİKLER: Mumlu ve Gölgeli Kartlar */}
          <div className="grid gap-6 pt-4 md:grid-cols-2">
            {[
              {
                icon: Heart,
                title: "Danışan Odaklı",
                desc: "Güvenli ve destekleyici süreç.",
                gradient: "from-teal-500 to-teal-600",
                shadow: "shadow-teal-100",
              },
              {
                icon: Award,
                title: "Bilimsel Yaklaşım",
                desc: "Kanıta dayalı, güncel yöntemler.",
                gradient: "from-blue-500 to-blue-600",
                shadow: "shadow-blue-100",
              },
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 rounded-3xl bg-white p-6 shadow-xl ${item.shadow} border border-slate-50 transition-transform hover:-translate-y-1 duration-300`}>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${item.gradient} text-white shadow-lg`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 mt-1 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ: EĞİTİM VE UZMANLIKLAR */}
        <div className="flex-1 w-full space-y-10">
          {/* EĞİTİM: Aydınlık, Mumlu ve Modern Tasarım */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] bg-white p-10 shadow-[0_20px_50px_rgba(37,99,235,0.08)] border border-slate-100 overflow-hidden"
          >
            {/* Dekoratif Işık Efekti: Köşeden gelen hafif turkuaz ışıltı */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="mb-10 flex items-center gap-4 relative">
              <div className="p-3 bg-linear-to-br from-teal-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-100">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Eğitim Bilgileri</h3>
            </div>

            <div className="space-y-10 relative">
              {education.map((item, i) => (
                <div key={i} className="relative border-l-2 border-slate-100 pl-8 ml-4">
                  {/* Timeline Noktası: Teal-Blue geçişli mumlu nokta */}
                  <div className="absolute -left-2.75 top-1 h-5 w-5 rounded-full border-4 border-white bg-linear-to-br from-teal-400 to-blue-500 shadow-md" />

                  <div className="text-sm font-bold text-blue-600 mb-1 px-3 py-1 bg-blue-50 inline-block rounded-lg uppercase tracking-wider">
                    {item.year}
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 leading-tight mt-2">
                    {item.school}
                  </div>
                  <div className="text-base text-slate-500 mt-1 font-medium italic">
                    {item.degree}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ÇALIŞMA ALANLARI: Modern Tagler */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Çalışma Alanları</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {expertise.map((item, i) => (
                <span
                  key={i}
                  className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 transition-colors cursor-default"
                >
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