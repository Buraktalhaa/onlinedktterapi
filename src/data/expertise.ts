import {
  Waves,          // Kekemelik (Akıcılık simgesi)
  Sparkles,       // Gecikmiş Dil (Gelişim/Işıltı)
  Mic2,           // Artikülasyon (Ses üretimi)
  Puzzle,         // Otizm (Sosyal etkileşim/Parçaları birleştirme)
  Activity,       // Afazi (Nörolojik aktivite)
  HeartHandshake, // Ebeveyn Danışmanlığı (Destek ve Güven)
} from "lucide-react";

export const services = [
  {
    title: "Kekemelik Terapisi",
    description:
      "Çocuk ve yetişkinlerde akıcılık bozukluklarına yönelik güncel ve kanıta dayalı terapi yöntemleri.",
    icon: Waves, 
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Gecikmiş Dil ve Konuşma",
    description:
      "Konuşmaya başlamada gecikme yaşayan çocuklarda dil becerilerini destekleyici oyun temelli süreçler.",
    icon: Sparkles,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Artikülasyon Bozuklukları",
    description:
      "Seslerin (R, S, K gibi) yanlış üretilmesi durumunda doğru ses üretimini hedefleyen çalışmalar.",
    icon: Mic2,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Otizmde İletişim",
    description:
      "Otizm spektrumundaki bireylerde sosyal etkileşim ve iletişim becerilerinin geliştirilmesi.",
    icon: Puzzle,
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Afazi ve Nörojenik Bozukluklar",
    description:
      "Beyin hasarı sonrası oluşan konuşma ve dil kayıplarında rehabilitasyon süreçleri.",
    icon: Activity,
    color: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    title: "Ebeveyn Danışmanlığı",
    description:
      "Terapi sürecinin evde desteklenmesi için ailelere yönelik rehberlik ve eğitim programları.",
    icon: HeartHandshake,
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
] as const;