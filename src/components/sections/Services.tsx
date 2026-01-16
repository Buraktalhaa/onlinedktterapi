"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageCircle,
  Baby,
  Zap,
  Waves,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Artikülasyon Bozuklukları",
    description:
      "Sesleri doğru ve net bir şekilde çıkarma problemi yaşayan çocuklar için online terapi.",
    tags: ["Online", "Çocuk"],
    icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Dil Gelişim Gecikmesi",
    description:
      "Yaşına uygun dil becerilerini geliştiremeyen çocuklar için bireysel terapi programları.",
    tags: ["Online", "Çocuk"],
    icon: <Baby className="h-6 w-6 text-cyan-600" />,
    bgColor: "bg-cyan-100",
  },
  {
    title: "Kekemelik Terapisi",
    description:
      "Akıcı konuşma becerilerini destekleyen, kanıta dayalı online terapi yaklaşımları.",
    tags: ["Online", "Çocuk", "Ergen", "Yetişkin"],
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
    bgColor: "bg-indigo-100",
  },
  {
    title: "Yutma Bozuklukları",
    description:
      "Güvenli beslenme ve yutma için uzman terapistler eşliğinde online değerlendirme.",
    tags: ["Online", "Yetişkin"],
    icon: <Waves className="h-6 w-6 text-sky-600" />,
    bgColor: "bg-sky-100",
  },
];

export function Services() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h3 className="mb-2 text-sm font-semibold text-blue-600">
            Hizmetlerimiz
          </h3>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Online Dil ve Konuşma Terapisi Alanlarımız
          </h2>
          <p className="text-slate-600">
            İhtiyacınıza uygun alanda, uzman terapistlerle online olarak
            eşleşin.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-none bg-slate-50 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
            >
              <CardHeader>
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${service.bgColor} transition-transform group-hover:scale-110`}
                >
                  {service.icon}
                </div>

                <div className="mb-3 flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <CardTitle className="text-lg font-bold text-slate-900">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 transition group-hover:opacity-100">
                  Uygun Terapistleri Gör
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            variant="ghost"
            className="gap-2 text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
          >
            Tüm Hizmetleri Gör
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
