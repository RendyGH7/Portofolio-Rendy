import { useState, useEffect } from 'react'

const Project = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '🛒',
      description: 'Modern e-commerce platform with advanced features like real-time inventory, payment gateway integration, and admin dashboard.',
      longDescription: 'A comprehensive e-commerce solution built for scalability and performance. Features include product catalog management, shopping cart, secure checkout, order tracking, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      features: ['Real-time inventory', 'Payment gateway', 'Admin dashboard', 'Order tracking'],
      status: 'Completed',
      duration: '3 months',
      client: 'Tech Startup',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 2,
      title: 'AI-Powered Chat Bot',
      category: 'ai',
      image: '🤖',
      description: 'Intelligent chatbot with natural language processing capabilities for customer service automation.',
      longDescription: 'An advanced AI chatbot that understands context and provides human-like responses. Integrated with multiple messaging platforms and CRM systems.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'WebSocket'],
      features: ['Natural language processing', 'Multi-platform integration', 'Analytics dashboard', 'Custom training'],
      status: 'Completed',
      duration: '4 months',
      client: 'Financial Services',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: '📱',
      description: 'Secure mobile banking application with biometric authentication and advanced security features.',
      longDescription: 'A comprehensive mobile banking solution with end-to-end encryption, biometric authentication, and real-time transaction monitoring.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Blockchain'],
      features: ['Biometric auth', 'Real-time transactions', 'Investment tracking', 'Bill payments'],
      status: 'Completed',
      duration: '6 months',
      client: 'Regional Bank',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 4,
      title: 'Learning Management System',
      category: 'web',
      image: '📚',
      description: 'Complete LMS platform with video streaming, interactive quizzes, and progress tracking.',
      longDescription: 'A full-featured learning management system supporting video lectures, interactive content, assessments, and detailed analytics for both students and instructors.',
      technologies: ['Next.js', 'Express.js', 'MySQL', 'AWS', 'WebRTC'],
      features: ['Video streaming', 'Interactive quizzes', 'Progress tracking', 'Certificates'],
      status: 'Completed',
      duration: '5 months',
      client: 'Education Institute',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 5,
      title: 'IoT Dashboard',
      category: 'iot',
      image: '🌐',
      description: 'Real-time IoT monitoring dashboard with data visualization and alert systems.',
      longDescription: 'An advanced IoT dashboard for monitoring and controlling connected devices with real-time data visualization, predictive analytics, and automated alerts.',
      technologies: ['Vue.js', 'Python', 'InfluxDB', 'MQTT', 'Docker'],
      features: ['Real-time monitoring', 'Predictive analytics', 'Alert system', 'Device control'],
      status: 'In Progress',
      duration: '4 months',
      client: 'Manufacturing Company',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      category: 'web',
      image: '₿',
      description: 'Advanced crypto portfolio tracker with market analysis and trading signals.',
      longDescription: 'A sophisticated cryptocurrency tracking platform with portfolio management, market analysis, trading signals, and news aggregation.',
      technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'WebSocket'],
      features: ['Portfolio tracking', 'Market analysis', 'Trading signals', 'News aggregation'],
      status: 'Completed',
      duration: '3 months',
      client: 'Personal Project',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎯', count: projects.length },
    { id: 'web', name: 'Web Apps', icon: '🌐', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', name: 'AI/ML', icon: '🤖', count: projects.filter(p => p.category === 'ai').length },
    { id: 'iot', name: 'IoT', icon: '🔌', count: projects.filter(p => p.category === 'iot').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '25+', label: 'Happy Clients', icon: '😊' },
    { number: '15+', label: 'Technologies Used', icon: '⚡' },
    { number: '99%', label: 'Success Rate', icon: '🎯' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Koleksi karya terbaik saya dalam mengembangkan solusi teknologi inovatif
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-purple-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="px-4 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 transform scale-105'
                    : 'bg-gray-800/30 text-gray-300 hover:bg-gray-800/50 border border-purple-500/20 hover:scale-105'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  
                  {/* Overlay with quick actions */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 hover:scale-110"
                      title="View Live"
                    >
                      🔗
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-colors duration-300 hover:scale-110"
                      title="View Code"
                    >
                      💻
                    </a>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="mr-2">⏱️</span>
                      <span>{project.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{project.client}</span>
                    </div>
                  </div>

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
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 text-sm font-medium">
                      View Details
                    </button>
                    <a
                      href={project.liveUrl}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium hover:scale-105"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length >= 6 && (
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 text-purple-300 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 font-semibold">
                Load More Projects 🚀
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Project Showcase */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Project</h2>
          <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Visual */}
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <div className="text-8xl">🛒</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">E-Commerce Platform</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm">
                    Featured
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Platform e-commerce modern dengan fitur lengkap seperti manajemen inventory real-time, 
                  integrasi payment gateway, dashboard admin yang powerful, dan sistem tracking order otomatis.
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-purple-400 font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Real-time inventory', 'Payment gateway', 'Admin dashboard', 'Order tracking'].map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-purple-400 font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold hover:scale-105"
                  >
                    View Live Demo
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 bg-gray-700/50 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-gray-700/70 transition-all duration-300 font-semibold"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h3>
            <p className="text-gray-300 mb-6">
              Mari wujudkan ide Anda menjadi solusi teknologi yang inovatif dan powerful!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105">
                Start a Project 🚀
              </button>
              <button className="px-8 py-3 bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 text-purple-300 rounded-lg hover:bg-gray-800/50 transition-all duration-300 font-semibold">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project