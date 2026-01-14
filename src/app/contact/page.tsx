import ContactForm from "./contact-form"

export const metadata = {
  title: "Kontakt | Portfolio",
  description:
    "Skontaktuj się ze mną w sprawie współpracy, projektów lub zapytań dotyczących mojego portfolio.",
  openGraph: {
    title: "Kontakt | Portfolio",
    description:
      "Skontaktuj się ze mną w sprawie współpracy, projektów lub zapytań dotyczących mojego portfolio.",
    url: "https://portfolio-six-snowy-38.vercel.app/contact",
    siteName: "Aleksander — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Portfolio",
    description:
      "Skontaktuj się ze mną w sprawie współpracy, projektów lub zapytań dotyczących mojego portfolio.",
  },
  alternates: {
    canonical: "https://portfolio-six-snowy-38.vercel.app/contact",
  },
}

export default function Contact() {
  return <ContactForm />
}
