'use client'
import React from 'react'
import Dashboard from '@/components/Dashboards'
import Header from '@/components/Headerss'
import { ProjectDataProvider } from '@/context/ProjectDataContext'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    <ProjectDataProvider>
      <Header/>
      <Dashboard />
    </ProjectDataProvider>
  </div>
  )
}

export default page