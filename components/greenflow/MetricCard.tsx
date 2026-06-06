import React from 'react'

type Props = {
  label: string
  value: string
}

export default function MetricCard({ label, value }: Props) {
  return (
    <div className="p-3 rounded-lg bg-gradient-to-tr from-white/3 to-white/2 border border-white/5 backdrop-blur-sm text-center">
      <div className="text-sm text-slate-300">{label}</div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  )
}
