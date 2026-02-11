"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartPulse } from "lucide-react";
import { PageSection } from "@/components/layout/PageSection";
import { universalApproach } from "@/data/whoIsItFor";

export function WhoIsItFor() {
  return (
    <PageSection id="kimler-icin" variant="white" className="pt-8 pb-16 md:pb-28">
      {/* Arka plan dekoru */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-20 blur-3xl">
        <div className="h-96 w-xl rounded-full bg-linear-to-r from-blue-400 to-teal-400" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="relative flex flex-col items-center gap-14 lg:flex-row">
          
          {/* SOL: METİN ALANI */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
                <Sparkles className="h-4 w-4" />
                Kapsayıcı Terapi Modeli
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                {universalApproach.title.split(' ')[0]}{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
                  {universalApproach.title.split(' ').slice(1).join(' ')}
                </span>
              </h2>

              <p className="mb-10 mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl lg:mx-0">
                {universalApproach.mainDescription}
              </p>

              <div className="mt-14 flex flex-wrap justify-center gap-x-12 gap-y-6 lg:justify-start">
                {[
                  { label: "Yaş Aralığı", value: "2 - 70+ Yaş" },
                  { label: "Terapi Türü", value: "Bireye Özel" },
                  { label: "Erişim", value: "Her Yerden" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="text-xl font-bold text-slate-900">{item.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SAĞ: KARTLAR ALANI */}
          <div className="relative w-full max-w-lg flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              {universalApproach.segments.map((segment, i) => {
                const Icon = segment.icon;
                return (
                  <div
                    key={i}
                    className="relative group flex items-center gap-5 rounded-[2rem] bg-slate-50 p-6 transition-all duration-300 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm text-blue-600 group-hover:bg-linear-to-br group-hover:from-blue-600 group-hover:to-teal-500 group-hover:text-white transition-all duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">
                        {segment.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 mt-1">
                        {segment.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* YENİ ZARİF CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 w-full"
        >
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden rounded-[2rem] bg-linear-to-r from-blue-600 via-blue-500 to-teal-500 py-6 px-10 text-white shadow-lg shadow-blue-200/50">
            {/* Soft Glow Efekti */}
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
            
            <div className="flex items-center gap-5 relative z-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md shadow-inner">
                <HeartPulse className="h-6 w-6 text-white animate-pulse" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold tracking-tight">Yaşam Boyu İletişim</h4>
                <p className="text-blue-50/90 text-sm font-medium">
                  {universalApproach.ctaMessage}
                </p>
              </div>
            </div>

            <div className="relative z-10 hidden md:block">
               <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                 <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
                   Bilimsel & Online
                 </span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageSection>
  );
}