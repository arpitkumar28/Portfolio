import React from 'react'
import Head from 'next/head'
import GreenFlowShowcase from '../components/greenflow/GreenFlowShowcase'

export default function GreenflowPage() {
  return (
    <>
      <Head>
        <title>GreenFlow AI | Traffic Intelligence Prototype</title>
        <meta name="description" content="GreenFlow AI is a traffic dashboard and emergency green-corridor workflow concept shown through interface screenshots." />
      </Head>
      <div className="min-h-screen bg-[#061225]">
        <GreenFlowShowcase />
      </div>
    </>
  )
}
