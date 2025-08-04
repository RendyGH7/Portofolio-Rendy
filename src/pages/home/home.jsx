// home.jsx
import Navbar from '../../components/navbar/navbar'
import Project from '../project/project'
import About from '../about/about'
import Experience from '../experience/experience'
import Contact from '../contact/contact'
import { useState, useEffect } from 'react'

const portorendy = '/portorendy.jpg' 

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [textAnimation, setTextAnimation] = useState(false)
  const [imageAnimation, setImageAnimation] = useState(false)

  useEffect(() => {
    // Delayed animations for smooth entrance
    const timer1 = setTimeout(() => setIsVisible(true), 200)
    const timer2 = setTimeout(() => setTextAnimation(true), 600)
    const timer3 = setTimeout(() => setImageAnimation(true), 1000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Tailwind', icon: '🌀' },
    { name: 'Python', icon: '🐍' },
    { name: 'UI/UX', icon: '🎨' }
  ]

  const backgroundStyle = {
    backgroundImage: [
      'radial-gradient(circle at 20% 25%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
      'radial-gradient(circle at 80% 30%, rgba(236, 72, 153, 0.08) 0%, transparent 60%)',
      'radial-gradient(circle at 40% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
      'radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)'
    ].join(', ')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-violet-950/15 to-slate-950/30"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0" style={backgroundStyle}></div>
        
        {/* Floating particles with better positioning */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-3/5 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-25"></div>
          <div className="absolute top-1/2 left-1/12 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-1/4 right-1/6 w-0.5 h-0.5 bg-violet-400 rounded-full animate-pulse opacity-35"></div>
          <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-blue-400 rounded-full animate-ping opacity-30"></div>
        </div>
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section - Optimized Height */}
      <section id="home" className="h-screen flex items-center justify-center px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left Content - Better Positioning */}
            <div className={`space-y-6 lg:space-y-8 text-center lg:text-left transition-all duration-1000 ease-out ${
              textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              
              {/* Status Badge with Animation */}
              <div className={`inline-flex items-center space-x-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/20 rounded-full px-5 py-2.5 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-medium text-gray-200">Available for Work</span>
              </div>
              
              {/* Main Heading with Staggered Animation */}
              <div className="space-y-3">
                <div className={`transition-all duration-800 delay-500 ${
                  textAnimation ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}>
                  <h2 className="text-lg lg:text-xl font-medium text-gray-300 mb-2">Hi there! 👋 I'm</h2>
                </div>
                
                <div className={`transition-all duration-1000 delay-700 ${
                  textAnimation ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                      Rendy Fernando
                    </div>
                    <div className="text-gray-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2">
                      Tambunan
                    </div>
                  </h1>
                </div>
                
                <div className={`flex items-center justify-center lg:justify-start space-x-4 transition-all duration-800 delay-900 ${
                  textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-16"></div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    Frontend Developer
                  </span>
                  <div className="h-px bg-gradient-to-l from-pink-500 to-transparent w-16"></div>
                </div>
              </div>
              
              {/* Description */}
              <div className={`transition-all duration-1000 delay-1100 ${
                textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                  Passionate dalam menciptakan 
                  <span className="text-purple-300 font-medium"> pengalaman digital yang memukau </span>
                  dengan teknologi modern dan design yang user-friendly.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 transition-all duration-1000 delay-1300 ${
                textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transform"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Let's Work Together</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </button>
                
                <button className="group px-8 py-4 border-2 border-purple-400/50 text-purple-300 font-semibold rounded-full hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-105 transform">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Download CV</span>
                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </span>
                </button>
              </div>
              
              {/* Tech Stack Pills */}
              <div className={`flex flex-wrap gap-3 justify-center lg:justify-start pt-6 transition-all duration-1000 delay-1500 ${
                textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {techStack.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className={`flex items-center space-x-2 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 hover:border-purple-400/50 hover:bg-purple-900/20 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                      textAnimation ? 'animate-fade-in-up' : ''
                    }`}
                    style={{ animationDelay: `${1.7 + index * 0.1}s` }}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - Hero Image with Real Photo */}
            <div className={`relative flex justify-center lg:justify-end transition-all duration-1200 ease-out ${
              imageAnimation ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
            }`}>
              <div className="relative">
                {/* Main Photo Container */}
                <div className="relative w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-slate-800/30 to-slate-900/50 rounded-full flex items-center justify-center backdrop-blur-md border border-slate-700/30 shadow-2xl overflow-hidden">
                  {/* Inner gradient background */}
                  <div className="absolute inset-6 bg-gradient-to-br from-purple-600/20 via-pink-600/15 to-cyan-600/20 rounded-full"></div>
                  
                  {/* Profile Photo */}
                  <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl shadow-purple-500/20 z-10 hover:scale-105 transition-transform duration-500 border-4 border-gradient-to-br from-purple-600 via-pink-600 to-cyan-600">
                    <img 
                      src="portorendy.jpg" 
                      alt="Rendy Fernando Tambunan"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback avatar if image fails to load */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-full flex items-center justify-center text-7xl lg:text-8xl" style={{display: 'none'}}>
                      <span className="filter drop-shadow-lg animate-pulse">👨‍💻</span>
                    </div>
                  </div>
                  
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-30 animate-spin" style={{animationDuration: '8s'}}></div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className={`absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 transition-all duration-1000 delay-1400 ${
                  imageAnimation ? 'animate-bounce opacity-100' : 'opacity-0'
                }`}>
                  <span className="text-xl">⚡</span>
                </div>
                
                <div className={`absolute -bottom-8 -left-8 w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50 transition-all duration-1000 delay-1600 ${
                  imageAnimation ? 'animate-pulse opacity-100' : 'opacity-0'
                }`}>
                  <span className="text-lg">🚀</span>
                </div>
                
                <div className={`absolute top-1/4 -left-10 w-8 h-8 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 delay-1800 ${
                  imageAnimation ? 'animate-ping opacity-60' : 'opacity-0'
                }`}>
                  <span className="text-sm">✨</span>
                </div>
                
                {/* Enhanced Code Snippets */}
                <div className={`absolute -top-6 left-1/4 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-2 text-sm text-gray-300 shadow-lg transition-all duration-1000 delay-2000 ${
                  imageAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  <code className="text-purple-300">&lt;Developer /&gt;</code>
                </div>
                
                <div className={`absolute -bottom-6 right-1/4 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-2 text-sm text-gray-300 shadow-lg transition-all duration-1000 delay-2200 ${
                  imageAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <code className="text-cyan-300">&#123; creative: <span className="text-green-400">true</span> &#125;</code>
                </div>
                
                <div className={`absolute top-1/2 -right-12 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-lg px-3 py-2 text-xs text-gray-300 shadow-lg transition-all duration-1000 delay-2400 ${
                  imageAnimation ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                }`}>
                  <code className="text-pink-300">UI/UX</code>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2600 ${
            imageAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group" onClick={() => scrollToSection('about')}>
              <span className="text-sm text-gray-400 group-hover:text-purple-300 transition-colors">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-purple-400 rounded-full flex justify-center transition-colors">
                <div className="w-1 h-3 bg-gray-600 group-hover:bg-purple-400 rounded-full mt-2 animate-bounce transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Home