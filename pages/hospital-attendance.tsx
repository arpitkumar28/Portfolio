import React from 'react'
import Head from 'next/head'
import HospitalAttendanceShowcase from '../components/hospital-attendance/HospitalAttendanceShowcase'

export default function HospitalAttendancePage() {
  return (
    <>
      <Head>
        <title>CarePulse | Hospital Attendance & Management System</title>
        <meta name="description" content="CarePulse is a Flutter-focused hospital attendance and management project covering authentication, staff workflows, and backend integration." />
      </Head>
      <main className="min-h-screen bg-background text-white">
        <HospitalAttendanceShowcase />
      </main>
    </>
  )
}
