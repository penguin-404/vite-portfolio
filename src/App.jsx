import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Updates from './components/Updates'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] dark:bg-[#0B0C0E] text-[#1B1F27] dark:text-[#E8E6DE] font-sans transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        <Home />
        <Updates />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
