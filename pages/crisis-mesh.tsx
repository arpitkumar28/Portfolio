import React from 'react'
import Head from 'next/head'
import CrisisMeshShowcase from '../components/crisismesh/CrisisMeshShowcase'

export default function CrisisMeshPage() {
  return (
    <>
      <Head>
        <title>CrisisMesh | Disaster Response Concept</title>
        <meta name="description" content="CrisisMesh is a visual concept for organizing incident coordination and situational information. It is not an emergency service." />
      </Head>
      <div className="min-h-screen bg-[#0a0a0a]">
        <CrisisMeshShowcase />
      </div>
    </>
  )
}
