import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-toggle"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { getAssetPath } from "../../utils/paths"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-six-snowy-38.vercel.app"),
  title: "Aleksander | Front-End Developer",
  description:
    "Front-End Developer tworzący nowoczesne aplikacje w React i Next.js. Sprawdź moje projekty, doświadczenie i kontakt.",
  keywords: [
    "Front-End Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "Modern Web Technologies",
  ],
  icons: {
    icon: getAssetPath("favicon.ico"),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LanguageProvider>
            <LayoutWithHeader>{children}</LayoutWithHeader>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
