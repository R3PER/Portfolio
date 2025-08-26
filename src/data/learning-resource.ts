import { Rocket, Paintbrush, HeartHandshake } from "lucide-react"
import { useLanguage } from "@/components/language-toggle"

// Ikony dostępne jako komponenty React
export const ServiceIcons = {
  fastDelivery: Rocket,
  cleanCode: Paintbrush,
  support: HeartHandshake
}

export const LearningResourceComponent = () => {
  const { t } = useLanguage();
  
  return [
    {
      href: "#",
      imgSrc: "/images/mockup/growing_mockup.png",
      alt: "Fast Delivery",
      description: t('services.fast.desc'),
      imageWrapperClass: "p-1 rounded-lg bg-blue-500/20",
    },
    {
      href: "#",
      imgSrc: "/images/mockup/hivello_mockup.png",
      alt: "Quality",
      description: t('services.clean.desc'),
      imageWrapperClass: "p-1 rounded-lg bg-green-500/20",
    },
    {
      href: "#",
      imgSrc: "/images/mockup/tracki_mockup.png",
      alt: "Support",
      description: t('services.support.desc'),
      imageWrapperClass: "p-1 rounded-lg bg-purple-500/20",
    },
  ];
};

// Wersja statyczna dla kompatybilności ze starym kodem
export const LEARNING_RESOURCES = [
  {
    href: "#",
    imgSrc: "/images/mockup/growing_mockup.png",
    alt: "Fast Delivery",
    description: "Szybki czas realizacji, terminowość i stały kontakt podczas całego procesu",
    imageWrapperClass: "p-1 rounded-lg bg-blue-500/20",
  },
  {
    href: "#",
    imgSrc: "/images/mockup/hivello_mockup.png",
    alt: "Quality",
    description: "Czysty, zoptymalizowany kod zgodny z najnowszymi standardami",
    imageWrapperClass: "p-1 rounded-lg bg-green-500/20",
  },
  {
    href: "#",
    imgSrc: "/images/mockup/tracki_mockup.png",
    alt: "Support",
    description: "Wsparcie techniczne po zakończeniu projektu i elastyczne warunki współpracy",
    imageWrapperClass: "p-1 rounded-lg bg-purple-500/20",
  },
]
