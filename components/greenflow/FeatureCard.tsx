import React from 'react'

type Props = {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="p-4 rounded-xl bg-slate-900/30 border border-white/5 backdrop-blur-md hover:scale-105 transition-transform">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center shadow-md text-slate-900 font-semibold">AI</div>
        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="text-sm text-slate-300 mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}
