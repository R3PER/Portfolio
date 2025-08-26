"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Button } from "./ui/button"

type Language = 'pl' | 'en'

type TranslationKey = 
  | 'nav.home' | 'nav.experience' | 'nav.projects' | 'nav.contact'
  | 'home.title' | 'home.projects' | 'home.projects.desc' | 'home.tech' | 'home.tech.desc' | 'home.services' | 'home.services.desc'
  | 'home.hello' | 'home.im' | 'home.about' | 'home.intro' | 'home.quote'
  | 'exp.title' | 'exp.timeline.1.title' | 'exp.timeline.2.title' | 'exp.timeline.3.title' | 'exp.timeline.4.title'
  | 'exp.timeline.5.title' | 'exp.timeline.6.title' | 'exp.timeline.7.title' | 'exp.timeline.8.title' | 'exp.timeline.9.title'
  | 'exp.summary'
  | 'contact.title' | 'contact.email' | 'contact.subject' | 'contact.message' | 'contact.send' | 'contact.details' | 'contact.social'
  | 'projects.title' | 'projects.subtitle' | 'projects.myprojects' | 'projects.myprojects.desc'
  | 'technologies.title' | 'technologies.desc'
  | 'services.title' | 'services.desc' | 'services.fast.desc' | 'services.clean.desc' | 'services.support.desc'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const translations: Record<Language, Record<TranslationKey, string>> = {
  pl: {
    // Navigation
    'nav.home': 'Strona główna',
    'nav.experience': 'Doświadczenie',
    'nav.projects': 'Projekty',
    'nav.contact': 'Kontakt',
    
    // Home page
    'home.title': 'Moja droga do zostania Fullstack Developerem',
    'home.projects': 'Moje Projekty',
    'home.projects.desc': 'Sprawdź moje najnowsze realizacje - strony internetowe, aplikacje i inne projekty programistyczne.',
    'home.tech': 'Technologie',
    'home.tech.desc': 'Narzędzia i technologie, których używam do tworzenia wydajnych, nowoczesnych aplikacji webowych.',
    'home.services': 'Tworzenie Stron i Aplikacji',
    'home.services.desc': 'Oferuję tworzenie nowoczesnych stron internetowych i aplikacji dostosowanych do Twoich potrzeb. Wykorzystuję najnowsze technologie, aby zapewnić szybkość, responsywność i intuicyjność Twojego projektu.',
    'home.hello': 'Cześć,',
    'home.im': 'Jestem',
    'home.about': 'O mnie',
    'home.intro': 'Jestem początkującym programistą FullStack. Posiadam wiedzę z różnych dziedzin informatyki, ale wciąż uczę się języków programowania. Mam nadzieję, że każdy, kto odwiedza mój profil GitHub, znajdzie coś wartościowego w jednym z moich repozytoriów. Jeśli dotarłeś aż tutaj, to serdecznie zapraszam do zapoznania się z moimi projektami i rozwiązaniami, które mogą okazać się dla Ciebie przydatne.',
    'home.quote': 'Nic nie dzieje się bez przyczyny — Albert Einstein',
    
    // Projects section
    'projects.title': 'Kryptografia',
    'projects.subtitle': 'Twoje dane potrzebują więcej niż tylko hasła — daj im realną ochronę',
    'projects.myprojects': 'Szyfrowanie',
    'projects.myprojects.desc': 'W moich projektach wykorzystuję nowoczesne technologie szyfrowania takie jak AES-256-GCM, ChaCha20-Poly1305, Argon2id jako KDF, oraz bezpieczne mechanizmy 2FA i recovery key — wszystko po to, by zapewnić najwyższy poziom ochrony danych w aplikacjach lokalnych i online.',
    
    // Technologies section
    'technologies.title': 'Technologie',
    'technologies.desc': 'Narzędzia i technologie, których używam do tworzenia wydajnych, nowoczesnych aplikacji webowych.',
    
    // Services section
    'services.title': 'Tworzenie Stron i Aplikacji',
    'services.desc': 'Oferuję tworzenie nowoczesnych stron internetowych i aplikacji dostosowanych do Twoich potrzeb. Wykorzystuję najnowsze technologie, aby zapewnić szybkość, responsywność i intuicyjność Twojego projektu.',
    'services.fast.desc': 'Szybki czas realizacji, terminowość i stały kontakt podczas całego procesu',
    'services.clean.desc': 'Czysty, zoptymalizowany kod zgodny z najnowszymi standardami',
    'services.support.desc': 'Wsparcie techniczne po zakończeniu projektu i elastyczne warunki współpracy',
    
    // Experience page
    'exp.title': 'Moja droga do zostania Fullstack Developerem',
    'exp.timeline.1.title': '2012 – Początki z programowaniem i społecznością SA-MP',
    'exp.timeline.2.title': '2013 – C++ i C#',
    'exp.timeline.3.title': '2015–2018 – Cracking, Linux, sieci i pentesting',
    'exp.timeline.4.title': '2019–2020 – Inżynieria wsteczna i debuggery',
    'exp.timeline.5.title': '2016–2023 – Nauka, kursy i odkrycie Go',
    'exp.timeline.6.title': '2024 – GTA V, frontend i backend',
    'exp.timeline.7.title': '2024 – Projekty komercyjne i współpraca z korporacjami',
    'exp.timeline.8.title': '2023–2024 – Wsparcie dla firm i studentów',
    'exp.timeline.9.title': 'Od 2025 – Freelancer, produkty SaaS i narzędzia AI',
    'exp.summary': 'Podsumowanie',
    
    // Contact page
    'contact.title': 'Skontaktuj się ze mną',
    'contact.email': 'Adres email',
    'contact.subject': 'Temat',
    'contact.message': 'Wiadomość',
    'contact.send': 'Wyślij wiadomość',
    'contact.details': 'Dane kontaktowe',
    'contact.social': 'Profile społecznościowe',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Home page
    'home.title': 'My Journey to Becoming a Fullstack Developer',
    'home.projects': 'My Projects',
    'home.projects.desc': 'Check out my latest work - websites, applications and other programming projects.',
    'home.tech': 'Technologies',
    'home.tech.desc': 'Tools and technologies I use to create efficient, modern web applications.',
    'home.services': 'Web & App Development',
    'home.services.desc': 'I offer development of modern websites and applications tailored to your needs. I use the latest technologies to ensure speed, responsiveness and intuitiveness of your project.',
    'home.hello': 'Hello',
    'home.im': 'I\'m',
    'home.about': 'About Me',
    'home.intro': 'I am an aspiring FullStack developer. I have knowledge in various areas of computer science, but I am not yet advanced in programming languages as I am continuously learning them. I hope that anyone who visits my GitHub profile finds some value in one of my repositories. If you\'ve made it this far, I warmly invite you to explore my projects and solutions that might be useful.',
    'home.quote': 'Nothing happens without a reason — Albert Einstein',
    
    // Projects section
    'projects.title': 'Projects',
    'projects.subtitle': '(Check out my work)',
    'projects.myprojects': 'My Projects',
    'projects.myprojects.desc': 'Check out my latest work - websites, applications and other programming projects.',
    
    // Technologies section
    'technologies.title': 'Technologies',
    'technologies.desc': 'Tools and technologies I use to create efficient, modern web applications.',
    
    // Services section
    'services.title': 'Web & App Development',
    'services.desc': 'I offer development of modern websites and applications tailored to your needs. I use the latest technologies to ensure speed, responsiveness and intuitiveness of your project.',
    'services.fast.desc': 'Fast delivery time, punctuality and constant contact throughout the entire process',
    'services.clean.desc': 'Clean, optimized code compliant with the latest standards',
    'services.support.desc': 'Technical support after project completion and flexible cooperation conditions',
    
    // Experience page
    'exp.title': 'My Journey to Becoming a Fullstack Developer',
    'exp.timeline.1.title': '2012 – First Steps with Programming and SA-MP Community',
    'exp.timeline.2.title': '2013 – C++ and C#',
    'exp.timeline.3.title': '2015–2018 – Cracking, Linux, Networks and Pentesting',
    'exp.timeline.4.title': '2019–2020 – Reverse Engineering and Debuggers',
    'exp.timeline.5.title': '2016–2023 – Learning, Courses and Discovering Go',
    'exp.timeline.6.title': '2024 – GTA V, Frontend and Backend',
    'exp.timeline.7.title': '2024 – Commercial Projects and Corporate Collaboration',
    'exp.timeline.8.title': '2023–2024 – Support for Companies and Students',
    'exp.timeline.9.title': 'Since 2025 – Freelancer, SaaS Products and AI Tools',
    'exp.summary': 'Summary',
    
    // Contact page
    'contact.title': 'Contact Me',
    'contact.email': 'Email address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.details': 'Contact details',
    'contact.social': 'Social profiles',
  }
}

const defaultLanguage: Language = 'pl'

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: TranslationKey) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  // Load language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'pl' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        size="icon"
        className={`rounded-full h-8 w-8 text-xs font-medium transition-colors ${
          language === 'pl' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-white dark:bg-gray-800'
        }`}
        onClick={() => setLanguage('pl')}
        aria-label="Switch to Polish"
      >
        PL
      </Button>
      <div className="mx-1">|</div>
      <Button
        variant="outline"
        size="icon"
        className={`rounded-full h-8 w-8 text-xs font-medium transition-colors ${
          language === 'en' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' : 'bg-white dark:bg-gray-800'
        }`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </Button>
    </div>
  )
}
