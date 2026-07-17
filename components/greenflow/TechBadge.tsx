import React from 'react'

type Props = { name: string }

export default function TechBadge({ name }: Props) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-slate-800/40 border border-white/5 text-slate-200">{name}</span>
  )
}
