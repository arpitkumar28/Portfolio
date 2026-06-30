import React from 'react'
import Image from 'next/image'

type Props = {
  label: string
  value: string
  image?: string
  onImageClick?: (src: string, alt: string) => void
}

export default function MetricCard({ label, value, image, onImageClick }: Props) {
  return (
    <div className="p-3 rounded-lg bg-gradient-to-tr from-white/3 to-white/2 border border-white/5 backdrop-blur-sm text-center">
      {image && (
        <button
          type="button"
          onClick={() => onImageClick?.(image, label)}
          className="relative w-full h-20 overflow-hidden rounded-lg mb-2 cursor-pointer group"
          aria-label={`Open image for ${label}`}
        >
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
          <span className="sr-only">Open image for {label}</span>
        </button>
      )}
      <div className="text-sm text-slate-300">{label}</div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  )
}
