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
        ? 'backdrop-blur-xl  border-purple-500/20 shadow-2xl shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          
          {/* Enhanced Logo - DIPERKECIL */}
          <div className="flex-shrink-0 z-10">
            <button 
              onClick={() => navigateTo('#home')} 
              className="group flex items-center space-x-4 cursor-pointer focus:outline-none"
            >
              {/* Logo dengan ukuran diperkecil */}
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110 transform">
                  <span className="text-white font-bold text-sm filter drop-shadow-lg">R</span>
                </div>
                {/* Floating particles around logo */}
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse opacity-70"></div>
              </div>
              
              <div className="hidden sm:block">
                <div className="space-y-0.5">
                  <h2 className="text-base font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-cyan-300 transition-all duration-300">
                    Rendy Fernando 
                  </h2>
                  <div className="flex items-center space-x-1">
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Enhanced Desktop Navigation - HILANGKAN OUTLINE */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => navigateTo(item.href)}
                  className={`group relative px-3 py-2 transition-all duration-300 font-medium text-sm outline-none focus:outline-none bg-transparent ${
                  isActive(item.href)
                    ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400' 
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="flex items-center">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                  
                  {/* Bottom line indicator */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full transition-900'
                  }`}></div>
                  
                  {/* Active indicator particles */}
                  {isActive(item.href) && (
                    <>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-pink-400 rounded-full animate-pulse"></div>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button - HILANGKAN OUTLINE */}
          <div className="hidden md:block">
            <button 
              onClick={() => navigateTo('#contact')}
              className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 transition-all duration-300 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transform overflow-hidden outline-none focus:outline-none"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Hire Me</span>
                <span className="text-sm group-hover:animate-bounce">🚀</span>
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent  to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Enhanced Mobile menu button - HILANGKAN OUTLINE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative inline-flex items-center justify-center p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform outline-none focus:outline-none"
            >
              <div className="space-y-1.5 relative z-10">
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-purple-400' : ''
                }`}></div>
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-purple-400' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="mx-4 my-2 bg-slate-950/95 backdrop-blur-xl border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden">
          {/* Mobile menu header */}
          <div className="px-6 py-4 border-b border-slate-800/50 bg-gradient-to-r from-purple-950/30 to-pink-950/30">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">R</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Navigation</div>
                <div className="text-xs text-gray-400">Choose your destination</div>
              </div>
            </div>
          </div>
          
          {/* Mobile nav items - HILANGKAN OUTLINE */}
          <div className="px-2 py-3 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.href)}
                className={`group flex items-center space-x-4 px-4 py-3 transition-all duration-300 w-full text-left relative outline-none focus:outline-none ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium flex-1">{item.name}</span>
                
                {/* Active/Hover indicator */}
                <div className={`flex items-center space-x-2 ${
                  isActive(item.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                } transition-opacity duration-300`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
                
                {/* Bottom line indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 transition-all duration-300 ${
                  isActive(item.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
              </button>
            ))}
          </div>
          
          {/* Mobile CTA - HILANGKAN OUTLINE */}
          <div className="px-4 pb-4 pt-2">
            <button 
              onClick={() => navigateTo('#contact')}
              className="group w-full px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 transition-all duration-300 shadow-xl shadow-purple-500/30 relative overflow-hidden outline-none focus:outline-none"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>🚀</span>
                <span>Let's Work Together</span>
                <span>💼</span>
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced futuristic border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/2 right-10 w-0.5 h-0.5 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
      </div>
    </nav>
  )
}

export default Navbar