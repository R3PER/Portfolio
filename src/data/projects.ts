import { getAssetPath } from "../../utils/paths"

export const PROJECTS = [
  {
    category: {
      pl: "Gra Tekstowa RPG",
      en: "Text RPG Game"
    },
    title: "Wisielec RPG",
    src: getAssetPath("/images/2d-rpg-text-game/1.png"),
    techStack: ["Go", "ASCII Art", "Obsługa plików JSON", "Wielojęzyczność"],
    description: {
      pl: "Rozbudowana implementacja klasycznej gry 'Wisielec' działająca w konsoli. To interaktywna gra z elementami RPG, w której gracz musi odgadnąć ukryte słowo, podając litery. Gra posiada kolorowy interfejs, system poziomów i doświadczenia, ekwipunek oraz sklep z przedmiotami.",
      en: "An advanced implementation of the classic 'Hangman' game running in the console. It's an interactive game with RPG elements, where the player has to guess a hidden word by providing letters. The game features a colorful interface, level and experience system, inventory, and an item shop."
    },
    features: {
      pl: [
        "Kolorowy interfejs konsolowy z wizualizacją ASCII",
        "System poziomów trudności (łatwy, średni, trudny)",
        "Elementy RPG: poziomy, doświadczenie, ekwipunek",
        "System zadań (questów) i sklep z przedmiotami",
        "Wielojęzyczność (polski i angielski)"
      ],
      en: [
        "Colorful console interface with ASCII visualization",
        "Difficulty level system (easy, medium, hard)",
        "RPG elements: levels, experience, inventory",
        "Quest system and item shop",
        "Multilingual support (Polish and English)"
      ]
    },
    images: [
      getAssetPath("/public/images/2d-rpg-text-game/1.png"),
      getAssetPath("/images/2d-rpg-text-game/2.png"),
      getAssetPath("/images/2d-rpg-text-game/3.png"),
      getAssetPath("/images/2d-rpg-text-game/4.png"),
      getAssetPath("/images/2d-rpg-text-game/5.png"),
      getAssetPath("/images/2d-rpg-text-game/6.png"),
      getAssetPath("/images/2d-rpg-text-game/7.png")
    ]
  },
  {
    category: {
      pl: "System Zarządzania Magazynem",
      en: "Warehouse Management System"
    },
    title: "Storage-App",
    src: getAssetPath("/images/storage-app/1.png"),
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "NextAuth.js", "React Icons"],
    description: {
      pl: "Aplikacja internetowa do zarządzania magazynem, umożliwiająca śledzenie produktów, tworzenie notatek oraz zarządzanie użytkownikami. System zapewnia kompleksowe rozwiązanie do kontroli stanów magazynowych z intuicyjnym interfejsem użytkownika.",
      en: "Web application for warehouse management, allowing product tracking, note creation, and user management. The system provides a comprehensive solution for inventory control with an intuitive user interface."
    },
    features: {
      pl: [
        "Rejestracja i logowanie użytkowników z różnymi rolami",
        "Zarządzanie produktami (dodawanie, edycja, usuwanie)",
        "System notatek do produktów z historią zmian",
        "Panel administracyjny z zarządzaniem użytkownikami",
        "Responsywny interfejs działający na różnych urządzeniach"
      ],
      en: [
        "User registration and login with different roles",
        "Product management (adding, editing, deleting)",
        "Product notes system with change history",
        "Admin panel with user management",
        "Responsive interface working on various devices"
      ]
    },
    images: [
      getAssetPath("/images/storage-app/1.png"),
      getAssetPath("/images/storage-app/2.png"),
      getAssetPath("/images/storage-app/3.png"),
      getAssetPath("/images/storage-app/4.png"),
      getAssetPath("/images/storage-app/5.png"),
      getAssetPath("/images/storage-app/6.png"),
      getAssetPath("/images/storage-app/7.png"),
      getAssetPath("/images/storage-app/8.png"),
      getAssetPath("/images/storage-app/9.png"),
      getAssetPath("/images/storage-app/10.png"),
      getAssetPath("/images/storage-app/11.png"),
      getAssetPath("/images/storage-app/12.png"),
      getAssetPath("/images/storage-app/13.png"),
      getAssetPath("/images/storage-app/14.png"),
      getAssetPath("/images/storage-app/15.png")
    ]
  },
  {
    category: {
      pl: "Baza danych NoSQL",
      en: "NoSQL Database"
    },
    title: "EngineNoSQL",
    src: getAssetPath("/images/enginenosql/1.png"),
    techStack: ["Golang", "Wails", "React", "TypeScript", "Ant Design", "Vite"],
    description: {
      pl: "Profesjonalna aplikacja do zarządzania bazami danych NoSQL, która umożliwia tworzenie, zarządzanie i manipulowanie danymi bez konieczności definiowania schematu. Aplikacja łączy prostotę i wydajność, dostarczając kompletne rozwiązanie do pracy z danymi w formacie dokumentowym.",
      en: "Professional NoSQL database management application that enables creating, managing, and manipulating data without the need to define a schema. The application combines simplicity and efficiency, providing a complete solution for working with document-format data."
    },
    features: {
      pl: [
        "Zarządzanie bazami danych i kolekcjami",
        "Zaawansowane zapytania z filtrowaniem i sortowaniem",
        "Import/Eksport danych z różnych formatów",
        "System uwierzytelniania użytkowników",
        "Tworzenie kopii zapasowych baz danych"
      ],
      en: [
        "Database and collection management",
        "Advanced queries with filtering and sorting",
        "Import/Export data from various formats",
        "User authentication system",
        "Database backup creation"
      ]
    },
    images: [
      getAssetPath("/images/enginenosql/1.png"),
      getAssetPath("/images/enginenosql/2.png"),
      getAssetPath("/images/enginenosql/3.png"),
      getAssetPath("/images/enginenosql/4.png"),
      getAssetPath("/images/enginenosql/5.png"),
      getAssetPath("/images/enginenosql/6.png"),
      getAssetPath("/images/enginenosql/7.png"),
      getAssetPath("/images/enginenosql/8.png"),
      getAssetPath("/images/enginenosql/9.png"),
      getAssetPath("/images/enginenosql/10.png"),
      getAssetPath("/images/enginenosql/11.mp4")
    ]
  },
  {
    category: {
      pl: "Aplikacja Pogodowa",
      en: "Weather App"
    },
    title: "WeatherApp",
    src: getAssetPath("/images/weatherapp/1.png"),
    techStack: ["Go", "Wails", "React", "TypeScript", "Framer Motion", "OpenWeather API"],
    description: {
      pl: "Nowoczesna aplikacja pogodowa umożliwiająca użytkownikom sprawdzanie aktualnej pogody oraz prognoz dla dowolnego miasta na świecie. Aplikacja prezentuje dane w eleganckim, responsywnym interfejsie z dynamicznymi animacjami i intuicyjną nawigacją.",
      en: "Modern weather application allowing users to check current weather conditions and forecasts for any city in the world. The app presents data in an elegant, responsive interface with dynamic animations and intuitive navigation."
    },
    features: {
      pl: [
        "Wyszukiwanie pogody dla dowolnego miasta",
        "Aktualna pogoda i szczegółowe dane atmosferyczne",
        "Prognoza godzinowa na najbliższe 12 godzin",
        "Prognoza 7-dniowa z temperaturami min/max",
        "Dynamiczny interfejs zmieniający się w zależności od warunków"
      ],
      en: [
        "Weather search for any city",
        "Current weather and detailed atmospheric data",
        "Hourly forecast for the next 12 hours",
        "7-day forecast with min/max temperatures",
        "Dynamic interface changing based on weather conditions"
      ]
    },
    images: [
      getAssetPath("/images/weatherapp/1.png"),
      getAssetPath("/images/weatherapp/2.mp4")
    ]
  },
  {
    category: {
      pl: "Menedżer Haseł",
      en: "Password Manager"
    },
    title: "NexoPass",
    src: getAssetPath("/images/nexopass/1.png"),
    techStack: ["Go", "React", "TypeScript", "Tailwind CSS", "Wails", "MongoDB", "AES-256-GCM"],
    description: {
      pl: "Zaawansowana aplikacja do bezpiecznego zarządzania danymi osobistymi, hasłami i plikami. Zapewnia kompleksowe rozwiązanie do przechowywania poufnych informacji z silnym szyfrowaniem, które działa zarówno w trybie online jak i offline.",
      en: "Advanced application for secure management of personal data, passwords, and files. Provides a comprehensive solution for storing confidential information with strong encryption, working in both online and offline modes."
    },
    features: {
      pl: [
        "Bezpieczne przechowywanie poświadczeń",
        "Generator silnych haseł",
        "Zaawansowane szyfrowanie plików",
        "Dwuskładnikowe uwierzytelnianie (2FA)",
        "Synchronizacja między urządzeniami"
      ],
      en: [
        "Secure credential storage",
        "Strong password generator",
        "Advanced file encryption",
        "Two-factor authentication (2FA)",
        "Cross-device synchronization"
      ]
    },
    images: [
      getAssetPath("/images/nexopass/1.png"),
      getAssetPath("/images/nexopass/2.png"),
      getAssetPath("/images/nexopass/3.png"),
      getAssetPath("/images/nexopass/4.png"),
      getAssetPath("/images/nexopass/5.png"),
      getAssetPath("/images/nexopass/6.png"),
      getAssetPath("/images/nexopass/7.png"),
      getAssetPath("/images/nexopass/8.png"),
      getAssetPath("/images/nexopass/9.png"),
      getAssetPath("/images/nexopass/10.png"),
      getAssetPath("/images/nexopass/11.png"),
      getAssetPath("/images/nexopass/12.png")
    ]
  },
  {
    category: {
      pl: "Portfel Płatniczy",
      en: "Payment Wallet"
    },
    title: "Pocket Wallet",
    src: getAssetPath("/images/pocket-wallet/1.png"),
    techStack: ["Go", "React", "TypeScript", "Material-UI", "Wails", "Couchbase", "Stripe", "AES-256-GCM"],
    description: {
      pl: "Kompletna aplikacja portfela płatniczego zbudowana z wykorzystaniem nowoczesnych technologii i najwyższych standardów bezpieczeństwa. Oferuje end-to-end szyfrowanie danych użytkownika oraz integrację z systemami płatności.",
      en: "Complete payment wallet application built using modern technologies and the highest security standards. Offers end-to-end encryption of user data and integration with payment systems."
    },
    features: {
      pl: [
        "End-to-End Encryption danych użytkownika",
        "Integracja płatności Stripe",
        "Automatyczne przetwarzanie płatności przez webhooks",
        "Bezpieczne przechowywanie salda"
      ],
      en: [
        "End-to-End Encryption of user data",
        "Stripe payment integration",
        "Automatic payment processing via webhooks",
        "Secure balance storage"
      ]
    },
    images: [
      getAssetPath("/images/pocket-wallet/1.png"),
      getAssetPath("/images/pocket-wallet/2.png"),
      getAssetPath("/images/pocket-wallet/3.png"),
      getAssetPath("/images/pocket-wallet/4.mp4")
    ]
  },
  {
    category: {
      pl: "Komunikator P2P",
      en: "P2P Messenger"
    },
    title: "ExecP2P",
    src: getAssetPath("/images/execp2p/1.png"),
    techStack: ["Go", "React", "TypeScript", "Tailwind CSS", "Wails", "QUIC", "CRYSTALS-Kyber-1024"],
    description: {
      pl: "Nowoczesny komunikator peer-to-peer wykorzystujący zaawansowane technologie do zapewnienia bezpiecznej komunikacji. Aplikacja implementuje post-kwantowe algorytmy kryptograficzne i zdecentralizowaną sieć do odkrywania peerów.",
      en: "Modern peer-to-peer messenger using advanced technologies to ensure secure communication. The application implements post-quantum cryptographic algorithms and a decentralized network for peer discovery."
    },
    features: {
      pl: [
        "Protokół QUIC do zaszyfrowanej komunikacji",
        "Post-kwantowe algorytmy kryptograficzne",
        "BitTorrent DHT do odkrywania peerów",
        "mDNS/UDP do odkrywania w sieci lokalnej",
        "Modułowa struktura kodu"
      ],
      en: [
        "QUIC protocol for encrypted communication",
        "Post-quantum cryptographic algorithms",
        "BitTorrent DHT for peer discovery",
        "mDNS/UDP for local network discovery",
        "Modular code structure"
      ]
    },
    images: [
      getAssetPath("/images/execp2p/1.png"),
      getAssetPath("/images/execp2p/2.png"),
      getAssetPath("/images/execp2p/3.png"),
      getAssetPath("/images/execp2p/4.png"),
      getAssetPath("/images/execp2p/5.png"),
      getAssetPath("/images/execp2p/6.png"),
      getAssetPath("/images/execp2p/7.png")
    ]
  },
  {
    category: {
      pl: "Program do Szyfrowania",
      en: "Encryption Software"
    },
    title: "Win Encrypt",
    src: getAssetPath("/images/win-encrypt/winencrypt.png"),
    techStack: ["Go", "AES", "GUI", "Szyfrowanie plików"],
    description: {
      pl: "Program do szyfrowania i deszyfrowania plików z interfejsem graficznym, napisany w języku Go. Aplikacja wykorzystuje zaawansowane algorytmy kryptograficzne (AES) do zabezpieczenia danych użytkownika, oferując szybkie szyfrowanie z intuicyjnym interfejsem.",
      en: "File encryption and decryption program with a graphical interface, written in Go language. The application uses advanced cryptographic algorithms (AES) to secure user data, offering fast encryption with an intuitive interface."
    },
    features: {
      pl: [
        "Szyfrowanie pojedynczych plików i całych folderów",
        "Deszyfrowanie zabezpieczonych plików",
        "System odzyskiwania informacji o kluczu",
        "Przyjazny interfejs graficzny",
        "Zabezpieczenie przed debugowaniem i analizą kodu"
      ],
      en: [
        "Encryption of individual files and entire folders",
        "Decryption of protected files",
        "Key info recovery system",
        "User-friendly graphical interface",
        "Protection against debugging and code analysis"
      ]
    },
    images: [
      getAssetPath("/images/win-encrypt/winencrypt.png")
    ]
  },
  {
    category: {
      pl: "Aplikacja do Zarządzania Zadaniami",
      en: "Task Management Application"
    },
    title: "Todo List",
    src: getAssetPath("/images/todo-list/1.gif"),
    techStack: ["React", "Material-UI", "Emotion", "React Beautiful DnD", "Date-fns", "Recharts", "JavaScript"],
    description: {
      pl: "Rozbudowana aplikacja do zarządzania zadaniami stworzona w React. Aplikacja umożliwia tworzenie, organizowanie i śledzenie zadań w wydajny sposób, z intuicyjnym interfejsem i zaawansowanymi funkcjami sortowania i kategoryzacji.",
      en: "A feature-rich task management application built with React. This app allows users to create, organize, and track their tasks efficiently, with an intuitive interface and advanced sorting and categorization features."
    },
    features: {
      pl: [
        "Tworzenie i zarządzanie zadaniami",
        "Ustawianie priorytetów i kategorii zadań",
        "Terminy wykonania i zadania cykliczne",
        "Filtrowanie zadań według statusu",
        "Interfejs z trybem ciemnym"
      ],
      en: [
        "Create and manage tasks",
        "Set task priorities and categories",
        "Due dates and recurring tasks",
        "Filter tasks by status",
        "Dark mode interface"
      ]
    },
    images: [
      getAssetPath("/images/todo-list/1.gif"),
      getAssetPath("/images/todo-list/2.gif")
    ]
  },
  {
    category: {
      pl: "Aplikacja Kalkulatora",
      en: "Calculator Application"
    },
    title: "Calculator",
    src: getAssetPath("/images/calculator/1.gif"),
    techStack: ["C#"],
    description: {
      pl: "Prosta, ale funkcjonalna aplikacja kalkulatora. Kalkulator obsługuje podstawowe operacje arytmetyczne, takie jak dodawanie, odejmowanie, mnożenie i dzielenie. Został zaprojektowany z myślą o prostocie obsługi i intuicyjnym interfejsie użytkownika.",
      en: "A simple yet powerful calculator application. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division. It's designed to be user-friendly, making it easy to perform quick calculations."
    },
    features: {
      pl: [
        "Podstawowe operacje matematyczne",
        "Przejrzysty interfejs użytkownika",
        "Modularny kod łatwy do rozszerzenia",
        "Tryb naukowy z zaawansowanymi funkcjami",
        "Tryb programisty z operacjami bitowymi"
      ],
      en: [
        "Basic mathematical operations",
        "Clear user interface",
        "Modular code easy to extend",
        "Scientific mode with advanced functions",
        "Programmer mode with bitwise operations"
      ]
    },
    images: [
      getAssetPath("/images/calculator/1.gif"),
      getAssetPath("/images/calculator/2.png"),
      getAssetPath("/images/calculator/3.png"),
      getAssetPath("/images/calculator/4.png")
    ]
  }
]
