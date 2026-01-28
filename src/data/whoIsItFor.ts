import { Baby, GraduationCap, Users } from "lucide-react";

export const groups = [
  {
    title: "Çocuklar",
    description:
      "Dil gelişimi, konuşma sesi bozuklukları ve akıcılık problemleri yaşayan çocuklar için uygundur.",
    icon: Baby,
  },
  {
    title: "Ergenler",
    description:
      "Akademik ve sosyal yaşamda iletişim güçlüğü yaşayan ergen bireyler için destekleyici bir seçenektir.",
    icon: GraduationCap,
  },
  {
    title: "Yetişkinler",
    description:
      "Kekemelik, ses bozuklukları veya nörolojik kökenli iletişim sorunları yaşayan yetişkinler için uygundur.",
    icon: Users,
  },
] as const;

export const conditions = [
  "Kekemelik ve hızlı-bozuk konuşma",
  "Gecikmiş dil ve konuşma",
  "Sesletim (artikülasyon) bozuklukları",
  "Otizm spektrumunda iletişim güçlükleri",
  "Afazi ve nörolojik konuşma bozuklukları",
  "Yoğun program nedeniyle yüz yüze terapiye zaman ayıramama",
] as const;
