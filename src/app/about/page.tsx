import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"
// Import zostanie przywrócony, jeśli odkomentowane zostaną odniesienia do obrazów
// import { getAssetPath } from "@/utils/paths"

export const metadata: Metadata = {
  title: "O mnie | Aleksander",
  description:
    "Poznaj mnie lepiej — informacje o mnie, technologiach i podejściu do tworzenia aplikacji.",
  keywords: [
    "Aleksander",
    "O mnie",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "O mnie | Aleksander",
    description:
      "Poznaj mnie lepiej — informacje o mnie, technologiach i podejściu do tworzenia aplikacji.",
    url: "https://portfolio-six-snowy-38.vercel.app/about",
    siteName: "Aleksander — Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: getAssetPath("/images/seo/about-og-image.png"),
      //   width: 1200,
      //   height: 630,
      //   alt: "About page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "O mnie | Aleksander",
    description:
      "Poznaj mnie lepiej — informacje o mnie, technologiach i podejściu do tworzenia aplikacji.",
    // images: [getAssetPath("/images/seo/about-og-image.png")],
  },
  alternates: {
    canonical: "https://portfolio-six-snowy-38.vercel.app/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
