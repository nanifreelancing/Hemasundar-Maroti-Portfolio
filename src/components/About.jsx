import React, { useState } from 'react'
import { Briefcase, Download, Github, Linkedin, Mail, Award, Instagram } from 'lucide-react'

const About = () => {
  const [showIgMenu, setShowIgMenu] = useState(false)
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center cyber-grid py-20 z-10 bg-[#030712]">
      {/* Background gradients representing the original cyber design */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-[#030712] to-orange-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.08),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-wider uppercase">
              Freelance Web Developer & ECE Student
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Hemasundar <span className="gradient-text">Maroti</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-dm-sans max-w-2xl">
              I am a Freelance Web Developer, MERN Stack, and Python Full Stack Engineer driven by a passion for building functional products. 
              Currently in my second year studying Electronics and Communication Engineering at QIS College, 
              I design robust web platforms and custom agricultural IoT systems.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              As a freelancer, I collaborate with clients and teams to bring software ideas to life, 
              ensuring responsive layouts, clean code, and search engine optimization. I also integrate sensor arrays 
              for IoT dashboards and build mobile applications using React Native.
            </p>

            {/* Quick Highlight of Latest Credential */}
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-950/10 max-w-xl flex items-start gap-3.5 hover:border-red-500/40 transition-colors mx-auto lg:mx-0 text-left">
              <Award className="h-6 w-6 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white font-space-grotesk">Python Full Stack Intern — EduSkills Academy</h4>
                <p className="text-xs text-gray-450 mt-1 leading-relaxed font-dm-sans">
                  Completed an intensive 8-week program in Python, SQL, Django, JS/jQuery, CSS, and Git. Verifiable under Certificate ID: <span className="text-red-400 font-mono">2026-07SD48E776</span>.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <a href="#contact" className="btn-solid min-w-[150px] text-center">
                <Briefcase size={16} className="mr-2 inline" /> Hire Me
              </a>
              <a 
                href="https://hemasundar-maroti-portfolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline min-w-[150px] text-center"
              >
                <Download size={16} className="mr-2 inline" /> Portfolio Link
              </a>
            </div>

            {/* Social handles */}
            <div className="flex justify-center lg:justify-start items-center space-x-6 pt-4">
              <a 
                href="https://github.com/Hemasundar2006" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hemasundar-maroti" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:marothihemasundar03@gmail.com" 
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>

              {/* Instagram Hover dropdown */}
              <div 
                className="relative inline-block" 
                onMouseEnter={() => setShowIgMenu(true)} 
                onMouseLeave={() => setShowIgMenu(false)}
              >
                <button 
                  className="text-gray-400 hover:text-red-400 transition-colors flex items-center pt-1"
                  aria-label="Instagram Links"
                >
                  <Instagram size={22} />
                </button>
                {showIgMenu && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-44 bg-slate-950 border border-red-500/20 rounded-lg shadow-xl p-2 z-50 text-xs space-y-1">
                    <a href="https://instagram.com/pixelix18" target="_blank" rel="noopener noreferrer" className="block px-2.5 py-1.5 hover:bg-red-500/10 text-gray-300 hover:text-white rounded transition-colors font-mono">
                      💼 Freelance: @pixelix18
                    </a>
                    <a href="https://instagram.com/grow_vth_nani" target="_blank" rel="noopener noreferrer" className="block px-2.5 py-1.5 hover:bg-red-500/10 text-gray-300 hover:text-white rounded transition-colors font-mono">
                      🚀 Professional: @grow_vth_nani
                    </a>
                    <a href="https://instagram.com/mr_mca_00" target="_blank" rel="noopener noreferrer" className="block px-2.5 py-1.5 hover:bg-red-500/10 text-gray-300 hover:text-white rounded transition-colors font-mono">
                      👤 Personal: @mr_mca_00
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Pulsing gradient ring */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse opacity-75 blur-md"></div>
              <img 
                src="/hemasundar.jpg" 
                alt="Hemasundar Maroti" 
                className="absolute inset-2 w-[240px] h-[240px] sm:w-[304px] sm:h-[304px] rounded-full object-cover border-4 border-slate-900 shadow-xl"
                onError={(e) => {
                  e.target.src = "https://api.dicebear.com/7.x/bottts/svg?seed=hemasundar"
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
