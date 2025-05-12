"use client"

import { useAuth } from "../hooks/useAuth"
import { signOut } from "firebase/auth"
import { auth } from "../lib/firebase"
import { useRouter } from "next/navigation"
import { ProjectsProvider } from "@/context/ProjectsContext"
import Sidebar from "@/components/Sidebar"
import AllProjects from "@/components/AllProjects"
import React from "react"
import UploadScreen from "@/components/UploadScreen"

export default function MainPage() {
  const user = useAuth()
  const router = useRouter()
  const [currentPage, setCurrentPage] = React.useState<'projects' | 'upload'>('projects');

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push("/login")
    } catch (error) {
      console.error("Failed to sign out", error)
    }
  }

  if (!user) {
    return null // This will be handled by the layout
  }

  return (
    <ProjectsProvider>
    <div className="min-h-screen bg-[#f8fafc] flex">
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onLogout={handleSignOut} 
      />
      <div className="flex-1">
        {currentPage === 'projects' ? <AllProjects /> : <UploadScreen />}
      </div>
    </div>
  </ProjectsProvider>
  )
}


