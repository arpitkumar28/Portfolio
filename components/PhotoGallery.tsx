import React, { useState } from 'react'
import ImageModal from './ui/ImageModal'

type Photo = {
  src: string
  alt: string
  title: string
  category: string
}

const photos: Photo[] = [
  { src: '/assets/images/greenflow-1.jpeg', alt: 'Traffic dashboard', title: 'Smart City Initiative', category: 'Traffic Management' },
  { src: '/assets/images/greenflow-2.jpeg', alt: 'Mobile app interface', title: 'Mobile Command Center', category: 'Mobile Development' },
  { src: '/assets/images/greenflow-3.jpeg', alt: 'Emergency corridor', title: 'Emergency Response', category: 'Public Safety' },
  { src: '/assets/images/greenflow-4.jpeg', alt: 'Route optimization', title: 'AI Route Planning', category: 'Artificial Intelligence' },
  { src: '/assets/images/greenflow-5.jpeg', alt: 'Signal analytics', title: 'Traffic Analytics', category: 'Data Science' },
  { src: '/assets/images/greenflow-6.jpeg', alt: 'Vehicle tracking', title: 'Real-time Tracking', category: 'IoT' },
]

export default function PhotoGallery() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Traffic Management', 'Mobile Development', 'Public Safety', 'Artificial Intelligence', 'Data Science', 'IoT']

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  const openModal = (src: string, alt: string) => setModalImage({ src, alt })
  const closeModal = () => setModalImage(null)

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Photo Gallery</h2>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            A collection of project screenshots and development highlights
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/5 border border-white/10"
              onClick={() => openModal(photo.src, photo.alt)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-cyan-400 text-xs font-medium uppercase tracking-wider">{photo.category}</span>
                  <h3 className="text-white font-semibold text-base mt-1">{photo.title}</h3>
                </div>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No photos found in this category</p>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-muted text-sm">
            {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''} in gallery
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
