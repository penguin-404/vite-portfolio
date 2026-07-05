import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F1] dark:bg-[#0B1120] text-[#1B1F27] dark:text-[#E4E7EC] font-sans">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
