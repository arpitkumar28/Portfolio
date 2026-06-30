import React, { useState } from 'react'
import Image from 'next/image'
import ImageModal from './ui/ImageModal'

type ProjectImage = {
  src: string
  alt: string
  projectTitle: string
  projectSubtitle: string
}

const featuredProjectImages: ProjectImage[] = [
  { src: '/assets/images/greenflow-1.jpeg', alt: 'Dashboard overview', projectTitle: 'Smart Traffic Management', projectSubtitle: 'GreenFlow AI' },
  { src: '/assets/images/greenflow-2.jpeg', alt: 'Mobile command center', projectTitle: 'Hospital Digital Attendance', projectSubtitle: 'Healthcare Management' },
  { src: '/assets/images/greenflow-3.jpeg', alt: 'Emergency corridor', projectTitle: 'NCC Buddy', projectSubtitle: 'Cadet Companion App' },
  { src: '/assets/images/greenflow-4.jpeg', alt: 'Route optimization', projectTitle: 'EduAI Nexus X', projectSubtitle: 'AI-Powered Learning' },
  { src: '/assets/images/greenflow-5.jpeg', alt: 'Signal analytics', projectTitle: 'Krishi Sahayak', projectSubtitle: 'Agriculture App' },
  { src: '/assets/images/photo2.jpeg', alt: 'Misc project highlight', projectTitle: 'Misc Projects', projectSubtitle: 'Assorted' },
]

export default function ImageGallery() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)

  const openModal = (src: string, alt: string) => setModalImage({ src, alt })
  const closeModal = () => setModalImage(null)

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects Gallery</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Visual highlights from my featured projects showcasing traffic management, mobile applications, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProjectImages.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openModal(image.src, image.alt)}
              aria-label={`Open full view for ${image.projectTitle}`}
              className="relative group overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/5 border border-white/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-base">{image.projectTitle}</h3>
                  <p className="text-cyan-400 text-sm">{image.projectSubtitle}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-2 border border-cyan-500/30">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted text-sm">
            Click on any image to view in full size
          </p>
        </div>
      </div>

      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={closeModal}
        />
      )}
    </section>
  )
}
