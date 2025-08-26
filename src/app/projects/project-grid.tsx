"use client"
import React, { useState, useMemo } from "react"
import { ProjectCard } from "./project-card"
import { PROJECTS } from "@/data/projects"
import { motion } from "motion/react"
import { IconSearch, IconX } from "@tabler/icons-react"
import { useLanguage } from "@/components/language-toggle"

export function ProjectGrid() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  // Filtruj projekty na podstawie zapytania wyszukiwania
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return PROJECTS

    const query = searchQuery.toLowerCase()
    
    return PROJECTS.filter(project => {
      // Sprawdź czy zapytanie zawiera się w tytule lub kategorii
      const titleMatch = project.title.toLowerCase().includes(query)
      const categoryMatch = project.category[language].toLowerCase().includes(query)
      
      // Sprawdź czy zapytanie pasuje do którejkolwiek technologii
      const techMatch = project.techStack?.some(tech => 
        tech.toLowerCase().includes(query)
      )
      
      // Sprawdź czy zapytanie pasuje do opisu
      const descriptionMatch = project.description?.[language].toLowerCase().includes(query)
      
      return titleMatch || categoryMatch || techMatch || descriptionMatch
    })
  }, [searchQuery, language])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {language === 'pl' ? 'Projekty' : 'Projects'}
        </h1>
        
        {/* Wyszukiwarka */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'pl' ? "Szukaj projektu lub technologii..." : "Search for project or technology..."}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-neutral-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <IconX className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
              </button>
            )}
          </div>
        </div>
      </div>
      
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="w-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {language === 'pl' 
              ? `Nie znaleziono projektów pasujących do "${searchQuery}"` 
              : `No projects found matching "${searchQuery}"`}
          </p>
        </div>
      )}
    </div>
  )
}
