import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Layout from './Layout.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Home from './components/Home.jsx'
import Updates from './components/Updates.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path='' element={<Home />}/>
         <Route path='education' element={<Education />}/>
         <Route path='projects' element={<Projects />}/>
         <Route path='skills' element={<Skills />}/>
         <Route path='contact' element={<Contact />}/>
         <Route path='updates' element={<Updates />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
