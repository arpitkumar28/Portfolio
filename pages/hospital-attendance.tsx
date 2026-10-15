import React from 'react'
import Head from 'next/head'
import HospitalAttendanceShowcase from '../components/hospital-attendance/HospitalAttendanceShowcase'

export default function HospitalAttendancePage() {
  return (
    <>
      <Head>
        <title>CarePulse | Hospital Workflow Concept</title>
        <meta name="description" content="CarePulse is a mobile-first concept for hospital attendance and staff workflow management." />
      </Head>
      <div className="min-h-screen bg-background text-white">
        <HospitalAttendanceShowcase />
      </div>
    </>
  )
}
