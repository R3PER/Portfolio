"use client"

import React from 'react'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { cn } from "@/lib/utils"
import { Blocks, Rss, Shield, Lock, Code, Server, Paintbrush, Smile } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-toggle"
import { StackCloud } from "./stack-cloud"

export function PersonalInterests() {
  const [mounted, setMounted] = useState(false)
  const { t, language } = useLanguage()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-[352px] rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
    )
  }

  // @ts-expect-error - Type compatibility is ensured by our implementation
  const items = getItems(t, language)
  
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <BentoGrid className="gap-4 w-full">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  )
}

const CryptographyComponent = () => {
  const { language } = useLanguage();
  return (
    <div className="w-full h-full min-h-[280px] relative overflow-hidden flex flex-col">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
          {language === 'en' ? "Cryptography" : "Kryptografia"}
        </h3>
      </div>
      
      <div className="flex-1 flex flex-col justify-between p-4">
        <p className="text-sm mb-8 text-zinc-600 dark:text-zinc-400">
          {language === 'en' 
            ? "Your data needs more than just a password - give them real protection"
            : "Twoje dane potrzebują więcej niż tylko hasła — daj im realną ochronę"}
        </p>
        
        <div className="relative flex-1 mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-40 h-40">
              <motion.div 
                className="absolute inset-0 bg-blue-500/5 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Shield className="absolute inset-0 w-full h-full text-blue-500/20" strokeWidth={1} />
              <Lock className="absolute inset-0 w-12 h-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500" />
            </div>
          </div>
        </div>
        
        <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-auto">
          {language === 'en'
            ? "In my projects, I use modern encryption technologies such as AES-256-GCM, ChaCha20-Poly1305, Argon2id, and secure 2FA mechanisms to ensure the highest level of data protection."
            : "W moich projektach wykorzystuję nowoczesne technologie szyfrowania takie jak AES-256-GCM, ChaCha20-Poly1305, Argon2id jako KDF, oraz bezpieczne mechanizmy 2FA i recovery key — wszystko po to, by zapewnić najwyższy poziom ochrony danych w aplikacjach lokalnych i online."}
        </p>
      </div>
    </div>
  )
}

const TechnologiesComponent = () => {
  const { language } = useLanguage();
  
  return (
    <div className="w-full h-full min-h-[280px] relative overflow-hidden flex flex-col">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
          {language === 'en' ? "Technologies" : "Technologie"}
        </h3>
      </div>
      
      <div className="flex-1 flex flex-col justify-between p-4">
        <p className="text-sm mb-4 text-zinc-600 dark:text-zinc-400">
          {language === 'en'
            ? "Tools and technologies I use to create efficient, modern web applications"
            : "Narzędzia i technologie, których używam do tworzenia wydajnych, nowoczesnych aplikacji webowych"}
        </p>
        
        <div className="relative flex-1 mb-4">
          <StackCloud />
        </div>
        
        <div className="flex items-center gap-3 mt-auto">
          <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
            <Blocks className="h-6 w-6 text-purple-500" />
          </div>
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {language === 'en' ? "Modern stack" : "Nowoczesny stack"}
          </span>
        </div>
      </div>
    </div>
  )
}

const WebDevelopmentComponent = () => {
  const { language } = useLanguage();
  
  const services = [
    { 
      icon: <Rss className="h-8 w-8 text-amber-500" />,
      title: language === 'en' ? "Fast delivery" : "Szybki czas realizacji",
      description: language === 'en' 
        ? "Fast delivery time, meeting deadlines and constant contact throughout the process" 
        : "Szybki czas realizacji, terminowość i stały kontakt podczas całego procesu"
    },
    { 
      icon: <Paintbrush className="h-8 w-8 text-green-500" />,
      title: language === 'en' ? "Clean code" : "Czysty kod",
      description: language === 'en'
        ? "Clean, optimized code that follows the latest standards"
        : "Czysty, zoptymalizowany kod zgodny z najnowszymi standardami"
    },
    { 
      icon: <Smile className="h-8 w-8 text-purple-500" />,
      title: language === 'en' ? "Support" : "Wsparcie",
      description: language === 'en'
        ? "Technical support after project completion and flexible collaboration terms"
        : "Wsparcie techniczne po zakończeniu projektu i elastyczne warunki współpracy"
    }
  ]
  
  return (
    <div className="w-full h-full min-h-[280px] relative overflow-hidden flex flex-col">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
          {language === 'en' ? "Website & App Development" : "Tworzenie Stron i Aplikacji"}
        </h3>
      </div>
      
      <div className="flex-1 flex flex-col justify-between p-4">
        <p className="text-sm mb-4 text-zinc-600 dark:text-zinc-400">
          {language === 'en'
            ? "I offer creation of modern websites and applications tailored to your needs. I use the latest technologies to ensure speed, responsiveness and intuitiveness of your project."
            : "Oferuję tworzenie nowoczesnych stron internetowych i aplikacji dostosowanych do Twoich potrzeb. Wykorzystuję najnowsze technologie, aby zapewnić szybkość, responsywność i intuicyjność Twojego projektu."}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-100/50 dark:bg-zinc-800/50 rounded-xl p-4 flex flex-col items-center">
              <div className="mb-3">
                {service.icon}
              </div>
              <h4 className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-2">{service.title}</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getItems(t: (key: string) => string, language: string) {
  return [
    {
      title: "",
      description: "",
      header: <CryptographyComponent />,
      className: "md:col-span-1",
      icon: <></>,
    },
    {
      title: "",
      description: "",
      header: <TechnologiesComponent />,
      className: "md:col-span-1",
      icon: <></>,
    },
    {
      title: "",
      description: "",
      header: <WebDevelopmentComponent />,
      className: "md:col-span-2",
      icon: <></>,
    },
  ]
}
