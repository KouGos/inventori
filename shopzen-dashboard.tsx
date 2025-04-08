"use client"

import { useState } from "react"
import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar"
import { MainContent } from "./components/main-content"

export default function ShopZenDashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content */}
        <MainContent />
      </div>
    </div>
  )
}
