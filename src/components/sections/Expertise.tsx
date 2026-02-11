"use client";

import { services } from "@/data/expertise";
import { motion } from "framer-motion";
import { PageSection } from "@/components/layout/PageSection";
import { Sparkles } from "lucide-react";

export function Expertise() {
  return (
    <PageSection id="uzmanliklar" variant="gray" className="py-20">
      {/* Üst Başlık Grubu */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="size-3.5" />
          Klinik Yaklaşım
        </div>
        <h2 className="mb-4 text-4xl font-extrabold text-slate-900 tracking-tight">
          Uzmanlık <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">Alanlarım</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Her yaş grubuna özel, bilimsel temelli ve etik değerlere bağlı online terapi hizmetleri sunuyorum.
        </p>
      </div>

      {/* Modernize Edilmiş Kartlar */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-8 border border-slate-100 shadow-xl shadow-slate-200/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="absolute -right-4 -top-4 size-24 rounded-full bg-slate-50 opacity-0 transition-opacity" />

              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:scale-110 ${service.color}`}
              >
                <Icon className={`h-7 w-7 ${service.iconColor}`} strokeWidth={1.5} />
              </div>

              {/* İçerik */}
              <h4 className="mb-3 text-xl font-bold text-slate-900">
                {service.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </PageSection>
  );
}