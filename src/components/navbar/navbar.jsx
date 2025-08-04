import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'contact']
      const scrollPos = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle navigation without react-router-dom
  const navigateTo = (href) => {
    setCurrentPath(href)
    setIsMobileMenuOpen(false)
    
    // Smooth scroll to section if it's an anchor
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.history.pushState({}, '', href)
    }
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about'},
    { name: 'Projects', href: '#projects'},
    { name: 'Experience', href: '#experience'},
  ]

  const isActive = (href) => {
    const section = href.replace('#', '')
    return activeSection === section
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-xl border-slate-200/10 shadow-lg shadow-slate-900/10' 
        : 'bg-transparent'
    }`}>
      {/* Subtle gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 via-slate-500/10 to-slate-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 z-10">
            <button 
              onClick={() => navigateTo('#home')} 
              className="group flex items-center space-x-4 cursor-pointer focus:outline-none"
            >
              {/* Logo dengan warna yang lebih kalem */}
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-lg flex items-center justify-center shadow-lg shadow-slate-500/20 group-hover:shadow-slate-500/30 transition-all duration-300 group-hover:scale-105 transform">
                  <span className="text-white font-bold text-sm filter drop-shadow-lg">R</span>
                </div>
                {/* Subtle floating particles */}
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-slate-400 rounded-full animate-ping opacity-40"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-slate-500 rounded-full animate-pulse opacity-50"></div>
              </div>
              
              <div className="hidden sm:block">
                <div className="space-y-0.5">
                  <h2 className="text-base font-bold bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-slate-200 group-hover:via-slate-100 group-hover:to-slate-300 transition-all duration-300">
                    Rendy Fernando 
                  </h2>
                </div>
              </div>
            </button>
          </div>

          {/* Professional Desktop Navigation - Text Only */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  onClick={() => navigateTo(item.href)}
                  className={`group relative cursor-pointer transition-all duration-300 font-medium text-sm ${
                  isActive(item.href)
                    ? 'text-slate-200' 
                    : 'text-slate-400 hover:text-slate-200'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span>{item.name}</span>
                  
                  {/* Subtle bottom line indicator */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Professional CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => navigateTo('#contact')}
              className="group relative px-6 py-2.5 bg-slate-800 text-slate-100 font-medium rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:scale-105 transform border border-slate-600/50 hover:border-slate-500/70 outline-none focus:outline-none"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Hire Me</span>
              </span>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-lg"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative inline-flex items-center justify-center p-3 rounded-full text-slate-400 hover:text-slate-200 transition-all duration-300 hover:scale-105 transform outline-none focus:outline-none"
            >
              <div className="space-y-1.5 relative z-10">
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-slate-300' : ''
                }`}></div>
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-slate-300' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Professional Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="mx-4 my-2 bg-slate-900/95 backdrop-blur-xl border-slate-600/20 rounded-xl shadow-xl shadow-slate-900/20 overflow-hidden">
          {/* Mobile menu header */}
          <div className="px-6 py-4 border-b border-slate-700/50 bg-slate-800/30">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">R</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Navigation</div>
                <div className="text-xs text-slate-400">Choose your destination</div>
              </div>
            </div>
          </div>
          
          {/* Mobile nav items - Text Style */}
          <div className="px-2 py-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                onClick={() => navigateTo(item.href)}
                className={`group flex items-center space-x-4 px-4 py-3 transition-all duration-300 w-full text-left relative cursor-pointer outline-none focus:outline-none rounded-lg ${
                  isActive(item.href)
                    ? 'text-slate-100 bg-slate-800/50'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/30'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-medium flex-1">{item.name}</span>
                
                {/* Simple arrow indicator */}
                <div className={`flex items-center space-x-2 ${
                  isActive(item.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                } transition-opacity duration-300`}>
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
          
          {/* Mobile CTA - Professional Style */}
          <div className="px-4 pb-4 pt-2">
            <button 
              onClick={() => navigateTo('#contact')}
              className="group w-full px-4 py-3 bg-slate-800 text-slate-100 font-medium rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-lg shadow-slate-900/20 border border-slate-600/50 relative overflow-hidden outline-none focus:outline-none"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Let's Work Together</span>
              </span>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Professional border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
    </nav>
  )
}

export default Navbar