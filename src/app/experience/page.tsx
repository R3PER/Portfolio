"use client"

import { FullScreen } from "@/components/full-screen"
import { useLanguage } from "@/components/language-toggle"
// Timeline został usunięty zgodnie z instrukcją

export default function Page() {
  const { t, language } = useLanguage();
  
  return (
    <div>
      <FullScreen>
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-24"></div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('exp.title')}</h1>
          
          <div className="mb-12 space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-bold mb-4">🔹 {t('exp.timeline.1.title')}</h3>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "It all started in 2012, when I first encountered the Pawn language. I created plugins and extensive gamemodes for servers based on the San Andreas MultiPlayer (SA-MP) platform. I didn't just code - I actively built a community around projects, helping others and creating something bigger than just code. These were my first steps in the IT world - seemingly small but significant." :
                  "Wszystko zaczęło się w 2012 roku, gdy po raz pierwszy zetknąłem się z językiem Pawn. Tworzyłem pluginy oraz rozbudowane gamemody do serwerów opartych na platformie San Andreas MultiPlayer (SA-MP). Nie tylko kodowałem – aktywnie budowałem społeczność wokół projektów, pomagając innym i tworząc coś większego niż tylko kod. To były moje pierwsze kroki w świecie IT – pozornie małe, ale znaczące."
                }
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-bold mb-4">🔹 {t('exp.timeline.2.title')}</h3>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "Motivated by my previous experiences, in 2013 I started learning C++ and C#. Due to the syntax similarities with Pawn, the transition was natural. I wrote my first simple applications - games like hangman, text-based RPGs, CLI tools - learning the basics of structured and object-oriented programming." :
                  "Zmotywowany wcześniejszymi doświadczeniami, w 2013 roku zacząłem naukę języków C++ i C#. Dzięki podobieństwom składni z Pawn, przejście było naturalne. Pisałem pierwsze proste aplikacje – gry typu wisielec, tekstowe RPG, narzędzia CLI – poznając podstawy programowania strukturalnego i obiektowego."
                }
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-bold mb-4">🔹 {t('exp.timeline.3.title')}</h3>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "This stage ignited my passion for IT security. I explored cracking, Linux operating systems, computer networks, and penetration testing. To this day, IT security remains one of my main hobbies, and the knowledge gained then allowed me to understand how systems work from the lowest level." :
                  "Ten etap rozbudził moje zamiłowanie do bezpieczeństwa IT. Zgłębiałem temat crackingu, systemów operacyjnych Linux, sieci komputerowych i pentestingu. Do dziś bezpieczeństwo IT to jedno z moich głównych hobby, a wiedza zdobyta wtedy pozwoliła mi rozumieć działanie systemów od najniższego poziomu."
                }
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-bold mb-4">🔹 {t('exp.timeline.4.title')}</h3>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "I began more serious experiments with reverse engineering, using tools such as IDA Pro, OllyDbg, and other debuggers. Analyzing binaries, understanding code operation without sources, and reconstructing application logic taught me patience and analytical thinking." :
                  "Rozpocząłem poważniejsze eksperymenty z reverse engineeringiem, wykorzystując narzędzia takie jak IDA Pro, OllyDbg i inne debugery. Analiza binarek, zrozumienie działania kodu bez źródeł oraz rekonstrukcja logiki aplikacji nauczyły mnie cierpliwości i myślenia analitycznego."
                }
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-bold mb-4">🔹 {t('exp.timeline.5.title')}</h3>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "Over these years, I invested in programming courses, learning various languages and technologies. That's when I discovered Golang - which quickly became my favorite language for building fast, efficient, and reliable applications." :
                  "Na przestrzeni tych lat inwestowałem w kursy programowania, poznając różne języki i technologie. To wtedy odkryłem Golang – który szybko stał się moim ulubionym językiem do budowy szybkich, wydajnych i niezawodnych aplikacji."
                }
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-bold mb-4">🔹 {t('exp.timeline.6.title')}</h3>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "In 2024, I became a co-owner of a large project on the Grand Theft Auto V platform. The server backend was based on C#, the website ran on Invision Power Suite (IPS), and the in-game interface was created by me and two other programmers in TypeScript + Vue.js. The project is still running today - even though I resigned from participation due to lack of time, I am proud that I contributed to the success and development of the community." :
                  "W 2024 roku zostałem współwłaścicielem dużego projektu na platformie Grand Theft Auto V. Backend serwera oparty był na C#, strona internetowa działała na silniku Invision Power Suite (IPS), a interfejs w grze tworzony był przeze mnie i dwóch innych programistów w TypeScript + Vue.js. Projekt działa do dziś – mimo że zrezygnowałem z udziału z powodu braku czasu, jestem dumny, że dołożyłem swoją cegiełkę do sukcesu i rozwoju społeczności."
                }
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-bold mb-4">🔹 {t('exp.timeline.7.title')}</h3>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "That same year, I joined another group of developers, working on projects for large companies, including Prettl Group - an international corporation. We co-created an advanced invoice scanning and processing system, though the project was eventually taken over by a private individual for financial reasons. Nevertheless, the experience of working for such a large brand was extremely valuable to me." :
                  "W tym samym roku dołączyłem do innej grupy programistów, realizując projekty na zlecenie dla dużych firm, w tym dla Prettl Group – międzynarodowej korporacji. Współtworzyliśmy zaawansowany system skanowania i przetwarzania faktur, jednak projekt ostatecznie przejęła prywatna osoba z powodów finansowych. Mimo to, doświadczenie z pracy dla tak dużej marki było dla mnie ogromnie cenne."
                }
              </p>
              <p className="text-base dark:text-gray-300 mt-4">
                {language === 'en' ? 
                  "As part of this collaboration, we also created websites and applications for sale - some were completed, others sold as MVPs. If you want to see them - I invite you to the Projects section." :
                  "W ramach tej współpracy realizowaliśmy również strony i aplikacje na sprzedaż – część z nich została ukończona, inne sprzedane w formie MVP. Jeśli chcesz je zobaczyć – zapraszam do zakładki Projekty."
                }
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-bold mb-4">🔹 {t('exp.timeline.8.title')}</h3>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "During this time, I modified or created websites for companies such as:" :
                  "W tym czasie modyfikowałem lub tworzyłem strony internetowe dla firm takich jak:"
                }
              </p>
              <ul className="list-disc pl-8 my-3 dark:text-gray-300">
                <li>Eksabit</li>
                <li>Grupa PKKM</li>
              </ul>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "I also supported IT students in implementing their semester and engineering projects - all of them successfully completed their work, which I am particularly proud of." :
                  "Dodatkowo wspierałem studentów IT w realizacji ich projektów semestralnych i inżynierskich – wszyscy z sukcesem zaliczyli swoje prace, z czego jestem szczególnie dumny."
                }
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-bold mb-4">🔹 {t('exp.timeline.9.title')}</h3>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "I am currently developing my business as a freelancer. My latest products include:" :
                  "Aktualnie rozwijam swoją działalność jako freelancer. Moje najnowsze produkty to:"
                }
              </p>
              <ul className="list-disc pl-8 my-3 dark:text-gray-300">
                <li>{language === 'en' ? 
                  "NexoPass – a data management program with advanced offline/online encryption, recovery key option, 2FA, etc." : 
                  "NexoPass – program do zarządzania danymi z zaawansowanym szyfrowaniem offline/online, z opcją recovery key, 2FA itd."}</li>
                <li>{language === 'en' ? 
                  "ExecP2P – a peer-to-peer communicator with built-in signaling server, operating in LAN networks." : 
                  "ExecP2P – komunikator peer-to-peer z wbudowanym serwerem sygnalizacyjnym, działający w sieciach LAN."}</li>
                <li>{language === 'en' ? 
                  "WeatherApp – a minimalist weather application." : 
                  "WeatherApp – minimalistyczna aplikacja pogodowa."}</li>
                <li>{language === 'en' ? 
                  "Pocket-Wallet – a wallet for virtual funds with Stripe integration." : 
                  "Pocket-Wallet – portfel na wirtualne środki z integracją Stripe."}</li>
                <li>{language === 'en' ? 
                  "EngineNoSQL – a custom data storage engine with an extensible structure." : 
                  "EngineNoSQL – własny silnik do przechowywania danych z rozszerzalną strukturą."}</li>
              </ul>
              <p className="text-base dark:text-gray-300">
                {language === 'en' ? 
                  "This is just part of what I'm working on - you'll find more in the Projects section. Some applications are not yet public because I plan to refine and commercialize them." :
                  "To tylko część tego, nad czym pracuję – więcej znajdziesz w sekcji Projekty. Niektóre aplikacje nie są jeszcze publiczne, ponieważ planuję je dopracować i komercjalizować."
                }
              </p>
              <p className="text-base dark:text-gray-300 mt-4">
                {language === 'en' ? 
                  "I use AI tools on a daily basis to speed up work. I believe that a good programmer should use available tools and keep up with the times - today we can do more than ever before." :
                  "Na co dzień wspomagam się narzędziami AI, by przyspieszyć pracę. Uważam, że dobry programista powinien korzystać z dostępnych narzędzi i iść z duchem czasu – dziś możemy więcej niż kiedykolwiek wcześniej."
                }
              </p>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">{t('exp.summary')}</h2>
              <p className="text-base dark:text-gray-300">
                {t('exp.summary').includes('Summary') ? 
                  "My career path is one of continuous development - from simple scripts in Pawn, through reverse engineering, to creating professional web and desktop applications. I work with passion, I'm not afraid of challenges, and I know that something valuable can be built from every project - even if the path isn't always straightforward." :
                  "Moja ścieżka kariery to ciągły rozwój – od prostych skryptów w Pawn, przez inżynierię wsteczną, aż po tworzenie profesjonalnych aplikacji webowych i desktopowych. Działam z pasją, nie boję się wyzwań i wiem, że z każdego projektu można zbudować coś wartościowego – nawet jeśli droga nie zawsze jest prosta."
                }
              </p>
              <p className="text-base dark:text-gray-300 mt-4">
                {t('exp.summary').includes('Summary') ? 
                  "If you've made it this far - thank you for your time. I hope you'll see me not just as a developer, but also as a person who believes that everything is possible - you just need to want it." :
                  "Jeśli dotarłeś aż tutaj – dziękuję za Twój czas. Mam nadzieję, że spojrzysz na mnie nie tylko jako na developera, ale też człowieka, który wierzy, że wszystko jest możliwe – wystarczy chcieć."
                }
              </p>
            </div>
          </div>
          
          {/* Usunięto wprowadzenie do sekcji timeline */}
        </div>
      </FullScreen>
    </div>
  )
}
