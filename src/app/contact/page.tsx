import ContactForm from "./contact-form"

export const metadata = {
  title: "Kontakt | Portfolio",
  description:
    "Skontaktuj się ze mną w sprawie współpracy, projektów lub zapytań dotyczących mojego portfolio.",
  openGraph: {
    title: "Kontakt | Portfolio",
    description:
      "Skontaktuj się ze mną w sprawie współpracy, projektów lub zapytań dotyczących mojego portfolio.",
    url: "https://portfolio.example.pl/contact",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Portfolio",
    description:
      "Skontaktuj się ze mną w sprawie współpracy, projektów lub zapytań dotyczących mojego portfolio.",
  },
  alternates: {
    canonical: "https://portfolio.example.pl/contact",
  },
}

export default function Contact() {
  return <ContactForm />
}
