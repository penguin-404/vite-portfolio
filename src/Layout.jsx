import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 text-black dark:text-white">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout