import {
  MessageCircle,
  Brain,
  UserCheck,
  Baby,
  Users,
  Zap,
} from "lucide-react";

export const services = [
  {
    title: "Kekemelik Terapisi",
    description:
      "Çocuk ve yetişkinlerde akıcılık bozukluklarına yönelik güncel ve kanıta dayalı terapi yöntemleri.",
    icon: Zap,
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Gecikmiş Dil ve Konuşma",
    description:
      "Konuşmaya başlamada gecikme yaşayan çocuklarda dil becerilerini destekleyici oyun temelli süreçler.",
    icon: Baby,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Artikülasyon Bozuklukları",
    description:
      "Seslerin (R, S, K gibi) yanlış üretilmesi durumunda doğru ses üretimini hedefleyen çalışmalar.",
    icon: MessageCircle,
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Otizmde İletişim",
    description:
      "Otizm spektrumundaki bireylerde sosyal etkileşim ve iletişim becerilerinin geliştirilmesi.",
    icon: Users,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Afazi ve Nörojenik Bozukluklar",
    description:
      "Beyin hasarı sonrası oluşan konuşma ve dil kayıplarında rehabilitasyon süreçleri.",
    icon: Brain,
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    title: "Ebeveyn Danışmanlığı",
    description:
      "Terapi sürecinin evde desteklenmesi için ailelere yönelik rehberlik ve eğitim programları.",
    icon: UserCheck,
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
] as const;
