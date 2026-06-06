import React, { useState, useEffect } from 'react'
import { Menu, X, Mail, Github, Linkedin, Cpu } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-[#030712]/90 backdrop-blur-md border-b border-red-500/10 py-3 shadow-lg'
      : 'bg-transparent py-5'
      }`}>
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-500/20 flex items-center justify-center">
              <Cpu className="h-4.5 w-4.5 text-red-400" />
            </div>
            <span className="text-lg font-black tracking-wider text-white font-mono">
              HEMASUNDAR<span className="text-red-500">.M</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link hover:text-red-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="mailto:marothihemasundar03@gmail.com"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Hemasundar2006"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemasundar-maroti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-red-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800 animate-fadeInUp">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-red-400 transition-colors font-semibold font-mono text-xs uppercase tracking-wider py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
