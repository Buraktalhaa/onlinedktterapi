"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import { groups, conditions } from "@/data/whoIsItFor";
import { PageSection } from "@/components/layout/PageSection";

export function WhoIsItFor() {
  return (
    <PageSection id="kimler-icin" variant="white" className="py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        {/* Badge: Daha canlı */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-600 uppercase tracking-wider">
          <Sparkles className="h-4 w-4" />
          Kimler İçin Uygun?
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Online Terapi <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">Sizin İçin mi?</span>
        </h2>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Farklı yaş grupları için esnek, bilimsel ve her yerden erişilebilir terapi modeli.
        </p>
      </div>

      {/* Üst Kartlar: Renkli İkonlar ve Mumlu Gölgeler */}
      <div className="grid gap-8 md:grid-cols-3">
        {groups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-[1.5rem] bg-white p-6 text-center shadow-xl shadow-slate-200/50 border border-slate-50 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-linear-to-br from-teal-50 to-blue-50 group-hover:from-teal-500 group-hover:to-blue-600 transition-all duration-500">
                <Icon className="h-9 w-9 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">{group.title}</h3>
              <p className="text-base text-slate-500 leading-relaxed">{group.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Alt Liste: Degrade Kenarlık ve İç Aydınlık */}
      <div className="mx-auto mt-6 max-w-3xl rounded-[2.5rem] bg-white p-1 shadow-xl shadow-blue-100/30 border border-blue-50">
        <div className="bg-linear-to-br from-slate-50 to-white rounded-[2.3rem] p-5 md:p-7">
          {/* Başlık marjini azaltıldı (mb-4) */}
          <h4 className="mb-4 text-center text-xl font-bold text-slate-900">
            Hangi Durumlarda <span className="text-blue-600">Tercih Edilmeli?</span>
          </h4>

          {/* Gap-6 yerine gap-y-2 ve gap-x-8 kullanılarak dikeyde sıkıştırıldı */}
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {conditions.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
                // p-3 yerine p-1.5 yapılarak satır arası boşluk daraltıldı
                className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-white hover:shadow-xs transition-all"
              >
                <div className="shrink-0 bg-teal-100 rounded-full p-1">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                </div>
                {/* Yazı boyutu text-base'den text-sm'e çekildi */}
                <span className="text-sm font-semibold text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}