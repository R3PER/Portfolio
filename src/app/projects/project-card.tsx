"use client"
import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { IconX, IconArrowNarrowLeft, IconArrowNarrowRight, IconPlayerPlay } from "@tabler/icons-react"
import { useLanguage } from "@/components/language-toggle"

type ProjectCardProps = {
  project: {
    title: string
    category: {
      pl: string
      en: string
    }
    src: string
    description?: {
      pl: string
      en: string
    }
    techStack?: string[]
    features?: {
      pl: string[]
      en: string[]
    }
    repoLink?: string
    images?: string[]
  }
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useLanguage()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  
  const isVideo = (path: string) => {
    return path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.mov')
  }

  const openModal = () => {
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
  }

  const openGalleryImage = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeGalleryImage = () => {
    setSelectedImageIndex(null)
  }

  return (
    <>
      <motion.div
        onClick={openModal}
        className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white dark:bg-neutral-900"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="flex flex-col h-60 md:h-80 w-full">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={project.src}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
            <p className="text-white/80 text-sm font-medium mb-2">{project.category[language]}</p>
            <h3 className="text-white text-xl md:text-2xl font-bold">{project.title}</h3>
            
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal projektu */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-50 bg-white dark:bg-neutral-900 rounded-xl shadow-2xl max-w-5xl max-h-[90vh] w-[90vw] overflow-auto m-4 p-4 md:p-8"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 h-10 w-10 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                onClick={closeModal}
                aria-label={language === 'pl' ? 'Zamknij' : 'Close'}
              >
                <IconX className="h-6 w-6 text-black dark:text-white" />
              </button>
              
              <div className="mb-6">
                <p className="text-base font-medium text-blue-600 dark:text-blue-400">
                  {project.category[language]}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mt-2 dark:text-white">
                  {project.title}
                </h2>
              </div>
              
              {/* Zdjęcie projektu */}
              <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-xl mb-8">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Opis projektu */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 dark:text-white">
                    {language === 'pl' ? 'Opis projektu' : 'Project Description'}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {project.description?.[language]}
                  </p>
                </div>

                {/* Galeria zdjęć */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 dark:text-white">
                    {language === 'pl' ? 'Galeria' : 'Gallery'}
                  </h3>
                  {project.images && project.images.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {project.images.map((image, idx) => (
                        <button
                          key={idx}
                          onClick={() => openGalleryImage(idx)}
                          className="relative h-36 md:h-48 w-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                          {isVideo(image) ? (
                            <div className="w-full h-full bg-black flex items-center justify-center">
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                                <IconPlayerPlay className="h-12 w-12 text-white" />
                              </div>
                              <video
                                src={image}
                                className="object-cover w-full h-full"
                                muted
                                playsInline
                                preload="metadata"
                              />
                            </div>
                          ) : (
                            <Image
                              src={image}
                              alt={`${project.title} - zdjęcie ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-center items-center h-24 bg-gray-100 dark:bg-neutral-800 rounded-lg">
                      <p className="text-neutral-500 dark:text-neutral-400">
                        {language === 'pl' ? 'Brak zdjęć dla tego projektu' : 'No images for this project'}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Funkcje projektu */}
                {project.features && project.features[language].length > 0 && (
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 dark:text-white">
                      {language === 'pl' ? 'Główne funkcje' : 'Main Features'}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features[language].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-1">
                            <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Technologie */}
                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 dark:text-white">
                      {language === 'pl' ? 'Technologie' : 'Technologies'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Link do repozytorium (opcjonalnie) */}
                {project.repoLink && (
                  <div className="pt-4">
                    <a 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      {language === 'pl' ? 'Zobacz kod na GitHub' : 'View code on GitHub'}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal z pełnoekranowym zdjęciem */}
      <AnimatePresence>
        {selectedImageIndex !== null && project.images && project.images[selectedImageIndex] && (
          <div 
            className="fixed inset-0 h-screen z-[70] overflow-hidden bg-black flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              closeGalleryImage();
            }}
          >
            <button
              className="absolute top-4 right-4 h-12 w-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors z-[80]"
              onClick={(e) => {
                e.stopPropagation();
                closeGalleryImage();
              }}
              aria-label={language === 'pl' ? 'Zamknij zdjęcie' : 'Close image'}
            >
              <IconX className="h-8 w-8" />
            </button>
            
            <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 flex justify-between z-[80]">
              <button
                className="h-12 w-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.images && selectedImageIndex !== null) {
                    const newIndex = selectedImageIndex === 0 
                      ? project.images.length - 1 
                      : selectedImageIndex - 1;
                    setSelectedImageIndex(newIndex);
                  }
                }}
                disabled={!project.images || project.images.length <= 1}
                aria-label={language === 'pl' ? 'Poprzednie zdjęcie' : 'Previous image'}
              >
                <IconArrowNarrowLeft className="h-6 w-6" />
              </button>
              
              <button
                className="h-12 w-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.images && selectedImageIndex !== null) {
                    const newIndex = selectedImageIndex === project.images.length - 1 
                      ? 0 
                      : selectedImageIndex + 1;
                    setSelectedImageIndex(newIndex);
                  }
                }}
                disabled={!project.images || project.images.length <= 1}
                aria-label={language === 'pl' ? 'Następne zdjęcie' : 'Next image'}
              >
                <IconArrowNarrowRight className="h-6 w-6" />
              </button>
            </div>
            
            <div className="relative h-[80vh] w-[90vw] max-w-7xl">
              {project.images && selectedImageIndex !== null && isVideo(project.images[selectedImageIndex]) ? (
                <video
                  src={project.images[selectedImageIndex]}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                />
              ) : (
                <Image
                  src={project.images[selectedImageIndex]}
                  alt={`${project.title} - zdjęcie ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="flex gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === selectedImageIndex ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(idx);
                    }}
                    aria-label={language === 'pl' 
                      ? `Przejdź do zdjęcia ${idx + 1}` 
                      : `Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
