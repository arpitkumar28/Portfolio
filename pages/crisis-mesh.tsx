import React from 'react'
import Head from 'next/head'
import CrisisMeshShowcase from '../components/crisismesh/CrisisMeshShowcase'

export default function CrisisMeshPage() {
  return (
    <>
      <Head>
        <title>CrisisMesh | AI-Powered Disaster Management Platform</title>
        <meta name="description" content="CrisisMesh is a disaster-management platform concept exploring real-time coordination, AI-assisted analysis, and connected emergency workflows." />
      </Head>
      <main className="min-h-screen bg-[#0a0a0a]">
        <CrisisMeshShowcase />
      </main>
    </>
  )
}
