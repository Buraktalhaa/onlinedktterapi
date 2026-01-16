"use client";

import { motion } from "framer-motion";
import { MessageCircle, Brain, UserCheck, Baby, Users, Zap } from "lucide-react";

const services = [
  {
    title: "Kekemelik Terapisi",
    description: "Çocuk ve yetişkinlerde akıcılık bozukluklarına yönelik güncel ve kanıta dayalı terapi yöntemleri.",
    icon: <Zap className="h-6 w-6 text-orange-600" />,
    color: "bg-orange-50",
  },
  {
    title: "Gecikmiş Dil ve Konuşma",
    description: "Konuşmaya başlamada gecikme yaşayan çocuklarda dil becerilerini destekleyici oyun temelli süreçler.",
    icon: <Baby className="h-6 w-6 text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    title: "Artikülasyon Bozuklukları",
    description: "Seslerin (R, S, K gibi) yanlış üretilmesi durumunda doğru ses üretimini hedefleyen çalışmalar.",
    icon: <MessageCircle className="h-6 w-6 text-green-600" />,
    color: "bg-green-50",
  },
  {
    title: "Otizmde İletişim",
    description: "Otizm spektrumundaki bireylerde sosyal etkileşim ve iletişim becerilerinin geliştirilmesi.",
    icon: <Users className="h-6 w-6 text-purple-600" />,
    color: "bg-purple-50",
  },
  {
    title: "Afazi ve Nörojenik Bozukluklar",
    description: "Beyin hasarı sonrası oluşan konuşma ve dil kayıplarında rehabilitasyon süreçleri.",
    icon: <Brain className="h-6 w-6 text-red-600" />,
    color: "bg-red-50",
  },
  {
    title: "Ebeveyn Danışmanlığı",
    description: "Terapi sürecinin evde desteklenmesi için ailelere yönelik rehberlik ve eğitim programları.",
    icon: <UserCheck className="h-6 w-6 text-teal-600" />,
    color: "bg-teal-50",
  },
];

export function Expertise() {
  return (
    <section id="uzmanliklar" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h3 className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Neler Yapıyoruz?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Uzmanlık Alanlarım
          </h2>
          <p className="text-slate-600 text-lg">
            Feyza Şahan uzmanlığında, her yaş grubuna özel olarak yapılandırılmış online terapi programlarımızla yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`mb-6 h-14 w-14 rounded-2xl ${service.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-6 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-12 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}