import React from 'react'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030712] text-white">
      {/* Dynamic Cursor */}
      <CustomCursor />
      
      {/* Foreground Sections */}
      <div className="relative z-10">
        <Header />
        <main>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App