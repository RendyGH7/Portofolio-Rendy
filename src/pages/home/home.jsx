// home.jsx
import Navbar from '../../components/navbar/navbar'
import Project from '../project/project'
import About from '../about/about'
import Experience from '../experience/experience'
import Contact from '../contact/contact'
import { useState, useEffect } from 'react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: 'React.js', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 88 }
  ]

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Modern responsive websites dengan teknologi terkini'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Aplikasi mobile cross-platform yang powerful'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Design interface yang user-friendly dan modern'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimasi performa aplikasi untuk kecepatan maksimal'
    },
    {
      icon: '🔧',
      title: 'Maintenance',
      description: 'Support dan maintenance aplikasi jangka panjang'
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Deploy dan hosting aplikasi di cloud platform'
    }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce dengan React, Node.js, dan MongoDB',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan real-time collaboration',
      image: '📋',
      tech: ['React', 'Socket.io', 'Express']
    },
    {
      title: 'Portfolio Website',
      description: 'Website portofolio modern dengan animasi smooth',
      image: '🌐',
      tech: ['React', 'Tailwind', 'Framer Motion']
    }
  ]

  const backgroundStyle = {
    backgroundImage: [
      'radial-gradient(circle at 15% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
      'radial-gradient(circle at 85% 20%, rgba(236, 72, 153, 0.12) 0%, transparent 50%)',
      'radial-gradient(circle at 45% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
      'radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)'
    ].join(', ')
  }

  const gridStyle = {
    backgroundImage: [
      'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)'
    ].join(', '),
    backgroundSize: '50px 50px'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-violet-950/20 to-slate-950/40"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0" style={backgroundStyle}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={gridStyle}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-violet-400 rounded-full animate-pulse opacity-40"></div>
        </div>
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative z-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm font-medium text-gray-200">Available for work</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <div className="text-gray-100 mb-2">Hi, I'm</div>
                <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Steven
                </div>
              </h1>
              <div className="flex items-center space-x-4">
                <div className="text-5xl animate-bounce">👋</div>
                <div className="h-px bg-gradient-to-r from-purple-500 to-transparent flex-1"></div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl font-light">
              Full-stack Developer & UI/UX Designer yang passionate dalam menciptakan 
              <span className="text-purple-300 font-medium"> pengalaman digital yang luar biasa </span>
              dengan teknologi modern.
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'UI/UX'].map((tech, index) => (
                <span 
                  key={tech}
                  className={`px-4 py-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-full text-sm text-gray-300 transition-all duration-300 hover:border-purple-500/50 hover:text-purple-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transform">
                <span className="flex items-center space-x-2">
                  <span>Download CV</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-purple-400/50 text-purple-300 font-semibold rounded-full hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center space-x-2">
                  <span>Contact Me</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          {/* Hero Image/Avatar */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative flex justify-center">
              {/* Main Avatar Container */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-full flex items-center justify-center backdrop-blur-md border border-slate-700/50 shadow-2xl">
                {/* Inner gradient background */}
                <div className="absolute inset-4 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-cyan-600/30 rounded-full"></div>
                
                {/* Avatar */}
                <div className="relative w-64 h-64 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-full flex items-center justify-center text-8xl shadow-2xl shadow-purple-500/30 z-10">
                  <span className="filter drop-shadow-lg">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-bounce">
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50 animate-pulse">
                <span className="text-lg">🚀</span>
              </div>
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-ping opacity-60">
                <span className="text-sm">✨</span>
              </div>
              
              {/* Code Snippets Floating */}
              <div className="absolute -top-4 left-1/4 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2 text-xs text-gray-300 shadow-lg">
                <code>&lt;Developer /&gt;</code>
              </div>
              <div className="absolute -bottom-4 right-1/4 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2 text-xs text-gray-300 shadow-lg">
                <code>&#123; creativity: true &#125;</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Project />
      </section>

      {/* Projects Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
    </div>
  )
}

export default Home