import React from 'react'

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
        <img 
          src={image} 
          alt={label} 
          className="w-full h-20 object-cover rounded-lg mb-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onImageClick?.(image, label)}
        />
      )}
      <div className="text-sm text-slate-300">{label}</div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  )
}
