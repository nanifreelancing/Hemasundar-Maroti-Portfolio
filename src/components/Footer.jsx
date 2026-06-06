import React, { useState } from 'react'
import { Mail, Github, Linkedin, Cpu, Instagram } from 'lucide-react'

const Footer = () => {
  const [showIgMenu, setShowIgMenu] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#030712] text-white py-12 border-t border-red-500/10 z-10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cpu className="h-5 w-5 text-red-400" />
              <span className="text-md font-bold font-mono uppercase tracking-wider">Hemasundar<span className="text-red-400">.</span></span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-dm-sans">
              MERN Stack Developer building full-stack web platforms and custom IoT systems.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="mailto:marothihemasundar03@gmail.com"
                className="w-8 h-8 rounded bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Hemasundar2006"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/hemasundar-maroti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              {/* Instagram dropdown in footer */}
              <div 
                className="relative inline-block" 
                onMouseEnter={() => setShowIgMenu(true)} 
                onMouseLeave={() => setShowIgMenu(false)}
              >
                <button
                  className="w-8 h-8 rounded bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors pt-0.5"
                  aria-label="Instagram Profiles"
                >
                  <Instagram className="h-4 w-4" />
                </button>
                {showIgMenu && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-9 w-44 bg-slate-950 border border-red-500/20 rounded-lg shadow-xl p-2 z-50 text-[10px] space-y-1 text-left">
                    <a href="https://instagram.com/pixelix18" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-red-500/10 text-gray-300 hover:text-white rounded transition-colors font-mono">
                      💼 Freelance: @pixelix18
                    </a>
                    <a href="https://instagram.com/grow_vth_nani" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-red-500/10 text-gray-300 hover:text-white rounded transition-colors font-mono">
                      🚀 Professional: @grow_vth_nani
                    </a>
                    <a href="https://instagram.com/mr_mca_00" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 hover:bg-red-500/10 text-gray-300 hover:text-white rounded transition-colors font-mono">
                      👤 Personal: @mr_mca_00
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider font-mono text-gray-400 mb-4">Links</h3>
            <ul className="space-y-2 text-sm font-dm-sans">
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-red-400 transition-colors">Education</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-red-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-red-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-red-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider font-mono text-gray-400 mb-4">Availability</h3>
            <div className="space-y-2 text-sm text-gray-400 font-dm-sans">
              <p>Srikakulam, Andhra Pradesh, India</p>
              <p className="text-xs text-red-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></span>
                Open to internships and projects
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {currentYear} Hemasundar Maroti. All rights reserved.</p>
          <p className="font-mono">React 18 & Cyber Grid Layout</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
