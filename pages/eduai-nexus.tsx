import React from 'react'
import Head from 'next/head'
import EduAIShowcase from '../components/eduai/EduAIShowcase'

export default function EduAIPage() {
  return (
    <>
      <Head>
        <title>EduAI Nexus X | AI-Powered Learning Platform</title>
        <meta name="description" content="EduAI Nexus X is an AI-powered learning platform project exploring personalized study paths, knowledge retrieval, and learning workflows." />
      </Head>
      <main className="min-h-screen bg-background text-white">
        <EduAIShowcase />
      </main>
    </>
  )
}
