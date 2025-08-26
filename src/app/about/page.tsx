import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"
// Import zostanie przywrócony, jeśli odkomentowane zostaną odniesienia do obrazów
// import { getAssetPath } from "@/utils/paths"

export const metadata: Metadata = {
  title: "About | Kinh Dev",
  description:
    "Learn more about Kinh Dev - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Kinh Dev",
    "About Kinh",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Kinh Dev",
    description:
      "Discover the story and journey of Kinh Dev in the world of web development.",
    url: "https://kinhdev.id.vn/about",
    siteName: "Kinh Dev",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: getAssetPath("/images/seo/about-og-image.png"),
      //   width: 1200,
      //   height: 630,
      //   alt: "Kinh Dev About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Kinh Dev",
    description:
      "Learn more about Kinh Dev - Frontend Developer and tech enthusiast.",
    // images: [getAssetPath("/images/seo/about-og-image.png")],
  },
  alternates: {
    canonical: "https://kinhdev.id.vn/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
