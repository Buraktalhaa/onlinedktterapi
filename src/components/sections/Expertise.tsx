"use client";

import { services } from "@/data/expertise";
import { motion } from "framer-motion";
import { PageSection } from "@/components/layout/PageSection";

export function Expertise() {
  return (
    <PageSection id="uzmanliklar" variant="gray">
      {/* Başlık */}
      <div className="mx-auto mb-6 max-w-2xl text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-600">
          Neler Yapıyorum?
        </h3>
        <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
          Uzmanlık Alanlarım
        </h2>
        <p className="text-lg text-slate-600">
          Her yaş grubuna özel, bilimsel temelli online terapi hizmetleri.
        </p>
      </div>

      {/* Kartlar */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}
              >
                <Icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>

              {/* İçerik */}
              <h4 className="mb-3 text-xl font-bold transition group-hover:text-teal-600">
                {service.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </PageSection>
  );
}
