import { Baby, GraduationCap, Users2 } from "lucide-react";

export const universalApproach = {
  title: "İletişimin Yaşı Yoktur",
  mainDescription: "Online terapi; ilk kelimelerini bekleyen bir çocuktan, sosyal hayata hazırlanan bir gence veya yaşam kalitesini korumak isteyen bir yetişkine kadar herkes için aynı bilimsel titizlikle uygulanır.",
  ctaMessage: "Küçük bir adımdan büyük bir değişime: Her yaşta yanınızdayız.",
  
  // Özellikler yerine "Yaşam Evreleri" mantığına geçiyoruz
  segments: [
    {
      title: "Çocukluk Dönemi",
      desc: "2-12 yaş arası çocuklarda oyun temelli, merak uyandıran ve eğlenceli seanslarla dil gelişimini destekliyoruz.",
      icon: Baby,
      badge: "Gelişim Odaklı"
    },
    {
      title: "Gençlik & Ergenlik",
      desc: "Sosyal çevre ve okul hayatında kendini daha özgüvenli ifade etmek isteyen gençler için modern yaklaşımlar sunuyoruz.",
      icon: GraduationCap,
      badge: "Özgüven Odaklı"
    },
    {
      title: "Yetişkinlik Dönemi",
      desc: "Kekemelikten nörolojik rehabilitasyona kadar, günlük ve iş hayatında iletişimi güçlendirmeyi hedefliyoruz.",
      icon: Users2,
      badge: "Çözüm Odaklı"
    }
  ]
};