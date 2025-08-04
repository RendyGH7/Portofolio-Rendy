import { useState, useEffect } from 'react'

// Import gambar dengan try-catch atau langsung dari public folder
const figma1 = '/figma1.png' // atau bisa juga '/assets/figma1.png'
const figma3 = '/figma3.png'
const figma4 = '/figma4.png' 
const web1 = '/web1.png'

const Project = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: false,
    stats: false,
    filters: false,
    projects: false,
    featured: false,
    cta: false
  })

  useEffect(() => {
    const timers = [
      setTimeout(() => setIsVisible(true), 100),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, hero: true })), 300),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, stats: true })), 600),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, filters: true })), 900),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, projects: true })), 1200),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, featured: true })), 1500),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, cta: true })), 1800)
    ]

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

const projects = [
    {
      id: 1,
      title: 'ZonaHP E-commerce',
      category: 'web',
      image: web1, // Menggunakan gambar asli
      description: 'Modern e-commerce platform dengan real-time inventory dan payment gateway terintegrasi. Fitur lengkap untuk smart lifestyle accessories.',
      technologies: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
      status: 'Completed',
      year: '2025',
      featured: true,
      liveDemo: 'https://zonahp.example.com',
      figmaLink: 'https://figma.com/design/zonahp'
    },
    {
      id: 2,
      title: 'Smart Waste Management',
      category: 'uiux',
      image: figma1, // Menggunakan gambar asli
      description: 'Aplikasi manajemen sampah pintar dengan sistem tracking, reward, dan fitur edukasi lingkungan untuk mendorong daur ulang.',
      technologies: ['Figma', 'Adobe XD', 'Principle'],
      status: 'Completed',
      year: '2025',
      figmaLink: 'https://www.figma.com/design/FlKWhJxVNPjYAOO5aQrdQP/SMART-WASTE?node-id=0-1&t=UieIIofadT1zWSQN-1'
    },
    {
      id: 3,
      title: 'HealthyCare Apps',
      category: 'uiux',
      image: figma4, // Menggunakan gambar asli
      description: 'Clean dan modern mobile banking app design dengan user-friendly interface, advanced security, dan fitur finansial lengkap.',
      technologies: ['Figma', 'Framer', 'After Effects'],
      status: 'Completed',
      year: '2024',
      figmaLink: 'https://www.figma.com/design/wBA810dhNxmbehdrWay4Hu/HEALTYCARE-%7C-LANGIT---TSDN?node-id=0-1&t=xWIV8qEtb6GmlJaY-1'
    },
    {
      id: 4,
      title: 'Relieve',
      category: 'uiux',
      image: figma3, // Menggunakan gambar asli
      description: 'Aplikasi food delivery dengan fitur real-time tracking, multiple payment options, rating system, dan UI yang appetizing.',
      technologies: ['Figma', 'Principle', 'Lottie'],
      status: 'Completed',
      year: '2025',
      figmaLink: 'https://www.figma.com/design/i2z6U6nSXEA8oZi3GcoCX5/RELIEVE-%7C-DuoMan---TECHOMFEST?node-id=0-1&t=DP82wxtEkhrSTQf2-1'
    },
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎯', count: projects.length, color: 'from-purple-400 to-pink-400' },
    { id: 'web', name: 'Web Apps', icon: '🌐', count: projects.filter(p => p.category === 'web').length, color: 'from-blue-400 to-cyan-400' },
    { id: 'uiux', name: 'UI/UX Design', icon: '🎨', count: projects.filter(p => p.category === 'uiux').length, color: 'from-pink-400 to-rose-400' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const stats = [
    { number: '10+', label: 'Projects Completed', icon: '🚀', color: 'from-purple-400 to-pink-400' },
    { number: '5+', label: 'Happy Clients', icon: '😊', color: 'from-cyan-400 to-blue-400' },
    { number: '6+', label: 'Technologies Used', icon: '⚡', color: 'from-green-400 to-emerald-400' },
    { number: '90%', label: 'Success Rate', icon: '🎯', color: 'from-yellow-400 to-orange-400' }
  ]

  const backgroundStyle = {
    backgroundImage: [
      'radial-gradient(circle at 20% 25%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
      'radial-gradient(circle at 80% 30%, rgba(236, 72, 153, 0.08) 0%, transparent 60%)',
      'radial-gradient(circle at 40% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
      'radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)'
    ].join(', ')
  }

  const featuredProject = projects.find(p => p.featured)

  // Component untuk menampilkan gambar dengan fallback yang lebih baik
  const ProjectImage = ({ project, className = "" }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)
    
    const handleImageLoad = () => {
      setImageLoaded(true)
    }
    
    const handleImageError = () => {
      setImageError(true)
      console.error(`Failed to load image: ${project.image}`)
    }

    return (
      <div className={`relative ${className}`}>
        {/* Loading skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 animate-pulse flex items-center justify-center">
            <div className="text-4xl">📱</div>
          </div>
        )}
        
        {/* Actual Image */}
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: imageError ? 'none' : 'block' }}
        />
        
        {/* Fallback hanya jika image error */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex flex-col items-center justify-center text-white">
            <div className="text-6xl mb-2">
              {project.category === 'web' ? '🌐' : '🎨'}
            </div>
            <p className="text-sm opacity-75">Image not found</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-violet-950/15 to-slate-950/30"></div>
        <div className="absolute inset-0" style={backgroundStyle}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-3/5 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-25"></div>
          <div className="absolute top-1/2 left-1/12 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-1/4 right-1/6 w-0.5 h-0.5 bg-violet-400 rounded-full animate-pulse opacity-35"></div>
          <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-blue-400 rounded-full animate-ping opacity-30"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ease-out ${
            sectionsVisible.hero ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-125 translate-y-8'
          }`}>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 mb-8">
              <span className="text-xl font-medium text-gray-200">Portfolio</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                My Projects
              </span>
              <br />
              <span className="text-gray-100 text-4xl lg:text-6xl">
                & Portfolio
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-24"></div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Creative • Innovative • Impactful
              </span>
              <div className="h-px bg-gradient-to-l from-pink-500 to-transparent w-24"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Koleksi karya terbaik dalam mengembangkan 
              <span className="text-purple-300 font-medium"> solusi digital inovatif </span>
              untuk berbagai kebutuhan bisnis dan teknologi.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className={`group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 ${
                sectionsVisible.stats ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
              }`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="px-6 lg:px-12 mb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ease-out ${
            sectionsVisible.filters ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
          }`}>
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 group ${
                  activeFilter === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-purple-500/25 transform scale-105 border border-transparent`
                    : 'bg-slate-800/30 text-gray-300 hover:bg-slate-800/50 border border-slate-700/50 hover:scale-105 hover:border-purple-500/30'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-12 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:border-purple-500/30 ${
                  sectionsVisible.projects ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center overflow-hidden">
                  <ProjectImage project={project} className="w-full h-full object-cover" />
                  
                  {/* Overlay with quick actions */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {project.liveDemo && (
                      <button 
                        onClick={() => window.open(project.liveDemo, '_blank')}
                        className="p-3 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 hover:scale-110"
                        title="Live Demo"
                      >
                        🔗
                      </button>
                    )}
                    {project.figmaLink && (
                      <button 
                        onClick={() => window.open(project.figmaLink, '_blank')}
                        className="p-3 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-colors duration-300 hover:scale-110"
                        title="View Design"
                      >
                        🎨
                      </button>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 bg-slate-700/50 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 text-sm font-medium">
                      View Details
                    </button>
                    <button 
                      onClick={() => project.liveDemo ? window.open(project.liveDemo, '_blank') : window.open(project.figmaLink, '_blank')}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium hover:scale-105"
                    >
                      {project.liveDemo ? 'Live Demo' : 'View Design'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Showcase */}
      {featuredProject && (
        <section className="py-20 px-6 lg:px-12 bg-black/20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
              sectionsVisible.featured ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
            }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Project</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>
            
            <div className={`max-w-6xl mx-auto bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 transition-all duration-500 hover:border-purple-500/30 ${
              sectionsVisible.featured ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
            }`}>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Visual */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <ProjectImage project={featuredProject} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-white">{featuredProject.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    {featuredProject.description} Platform yang dikembangkan dengan teknologi modern dan user experience yang optimal.
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-purple-400 font-semibold mb-4 text-lg">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-3">
                      {featuredProject.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => featuredProject.liveDemo ? window.open(featuredProject.liveDemo, '_blank') : window.open(featuredProject.figmaLink, '_blank')}
                      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold hover:scale-105 shadow-lg shadow-purple-500/25"
                    >
                      {featuredProject.liveDemo ? 'View Live Demo' : 'View Design'}
                    </button>
                    <button className="px-8 py-3 bg-slate-700/50 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-slate-700/70 transition-all duration-300 font-semibold hover:scale-105">
                      View Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out ${
            sectionsVisible.cta ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
          }`}>
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-12 hover:bg-slate-800/60 transition-all duration-300">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Have a Project <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">in Mind?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Mari wujudkan ide Anda menjadi solusi teknologi yang inovatif dan powerful bersama dengan pengalaman 5+ tahun!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transform">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Start a Project</span>
                    <span className="text-xl">🚀</span>
                  </span>
                </button>
                
                <button className="group px-10 py-4 border-2 border-purple-400/50 text-purple-300 font-semibold rounded-full hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-105 transform">
                  <span className="flex items-center justify-center space-x-2">
                    <span>View All Projects</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project