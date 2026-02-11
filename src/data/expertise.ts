import {
  Waves,
  Sparkles,
  Mic2,
  Puzzle,
  HeartHandshake,
  Brain,
} from "lucide-react";

// Çalışma Alanlarım
export const expertise = [
  "Gecikmiş Dil ve Konuşma",
  "Artikülasyon ve Fonolojik Bozukluklar",
  "Akıcılık Bozuklukları (Kekemelik)",
  "Otizm Spektrum Bozukluğu",
  "Aile Danışmanlığı ve Ev Programları",
] as const; 

export const services = [
  {
    title: expertise[0], 
    description:
      "Konuşmaya başlamada gecikme yaşayan çocuklarda dil becerilerini destekleyici oyun temelli süreçler.",
    icon: Sparkles,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: expertise[1], 
    description:
      "Seslerin doğru üretilmesi ve ses sistemindeki bozukluklara yönelik kanıta dayalı değerlendirme ve terapi.",
    icon: Mic2,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: expertise[2],
    description:
      "Kekemelik ve hızlı bozuk konuşma gibi akıcılık sorunlarına yönelik güncel terapi yaklaşımları.",
    icon: Waves,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: expertise[3],
    description:
      "Otizm spektrumundaki bireylerde sosyal etkileşim ve iletişim becerilerinin oyun yoluyla desteklenmesi.",
    icon: Puzzle,
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: expertise[4],
    description:
      "Terapi sürecinin evde desteklenmesi için ailelere yönelik kapsamlı rehberlik ve eğitim süreçleri.",
    icon: HeartHandshake,
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "Afazi ve Nörojenik Bozukluklar",
    description:
      "Beyin hasarı sonrası oluşan konuşma ve dil kayıplarında nörolojik temelli rehabilitasyon.",
    icon: Brain,
    color: "bg-rose-50",
    iconColor: "text-rose-600",
  },
] as const;