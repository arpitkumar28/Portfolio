import React from 'react'
import Image from 'next/image'

type Props = {
  title: string
  description: string
  image?: string
  onImageClick?: (src: string, alt: string) => void
}

export default function FeatureCard({ title, description, image, onImageClick }: Props) {
  return (
    <div className="p-4 rounded-xl bg-slate-900/30 border border-white/5 backdrop-blur-md hover:scale-105 transition-transform">
      <div className="flex items-start gap-3">
        {image ? (
          <button
            type="button"
            onClick={() => onImageClick?.(image, title)}
            className="relative w-12 h-12 rounded-lg overflow-hidden cursor-pointer"
            aria-label={`Open image for ${title}`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-opacity duration-300 hover:opacity-80"
            />
          </button>
        ) : (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center shadow-md text-slate-900 font-semibold">AI</div>
        )}
        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="text-sm text-slate-300 mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}
