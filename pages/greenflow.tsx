import React from 'react'
import Head from 'next/head'
import GreenFlowShowcase from '../components/greenflow/GreenFlowShowcase'

export default function GreenflowPage() {
  return (
    <>
      <Head>
        <title>GreenFlow AI | Traffic Intelligence & Emergency Green Corridor</title>
        <meta name="description" content="GreenFlow AI explores traffic monitoring, map-based visualization, real-time communication, and emergency green-corridor workflows." />
      </Head>
      <main className="min-h-screen bg-[#061225]">
        <GreenFlowShowcase />
      </main>
    </>
  )
}
