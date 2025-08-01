import { useState, useEffect } from 'react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('experience')
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: false,
    content: false
  })

  useEffect(() => {
    const timers = [
      setTimeout(() => setIsVisible(true), 100),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, hero: true })), 300),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, content: true })), 900)
    ]
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  const certificates = [
  {
    title: 'Responsible AI Program',
    issuer: 'AI Opportunity, supported by Google.org & ADB',
    period: 'June 2025 - November 2026',
    status: 'Completed (14 hours)',
    description:
      'Successfully completed 14 hours of the AI Upskilling Program focusing on responsible AI practices.',
    achievements: ['Supported by Google.org & ADB', 'Held across Asia Pacific', 'Organized by RSA & AVPN'],
    icon: '🤖',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    title: 'Finalist - Tim Langit',
    issuer: 'Kompetisi Nasional Kategori Pelajar',
    period: '2024',
    status: 'Finalist',
    description:
      'Became a finalist in a national-level competition under the team "Tim Langit".',
    achievements: ['Kategori Pelajar', 'Top finalist recognition', 'Team-based innovation project'],
    icon: '🏅',
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: '',
    issuer: 'Kompetisi Nasional Kategori Pelajar',
    period: '2024',
    status: 'Finalist',
    description:
      'Became a finalist in a national-level competition under the team "Tim Langit".',
    achievements: ['Kategori Pelajar', 'Top finalist recognition', 'Team-based innovation project'],
    icon: '🏅',
    color: 'from-purple-400 to-pink-500'
  }
]


  const backgroundStyle = {
    backgroundImage: [
      'radial-gradient(circle at 20% 25%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
      'radial-gradient(circle at 80% 30%, rgba(236, 72, 153, 0.08) 0%, transparent 60%)',
      'radial-gradient(circle at 40% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
      'radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)'
    ].join(', ')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects - Same as About */}
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
              <span className="text-2xl">💼</span>
              <span className="text-sm font-medium text-gray-200">My Experience</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-gray-100 text-4xl lg:text-6xl">
                Journey
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-24"></div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Experienced • Dedicated • Innovative
              </span>
              <div className="h-px bg-gradient-to-l from-pink-500 to-transparent w-24"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Perjalanan karir saya dalam dunia teknologi dan 
              <span className="text-purple-300 font-medium"> pengembangan aplikasi modern </span>
              dengan berbagai pencapaian yang membanggakan.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-6 lg:px-12 mb-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`flex justify-center space-x-4 transition-all duration-1000 ease-out ${
            sectionsVisible.content ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
          }`}>
            {[
              { id: 'education', label: 'Certificates', icon: '📜' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                    : 'bg-slate-800/30 text-gray-300 hover:bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 lg:px-12 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Education */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                Educational <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Background</span>
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {certificates.map((cert, index) => (
                  <div key={index} className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-500 hover:scale-105 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 ${
                    sectionsVisible.content ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
                  }`} style={{ transitionDelay: `${index * 300}ms` }}>
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}>
                        {edu.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                      <h4 className="text-lg text-purple-400 font-semibold mb-2">{cert.issuer}</h4>
                      <div className="flex justify-center space-x-4 text-sm text-gray-400">
                        <span>{cert.period}</span>
                        <span>•</span>
                        <span>{cert.status}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-center leading-relaxed">{edu.description}</p>
                    
                    <div>
                      <h5 className="text-purple-400 font-semibold mb-3 text-center">Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="text-yellow-400 mr-2 mt-1">🏆</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-12 bg-black/20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-12 hover:bg-slate-800/60 transition-all duration-300">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Collaborate?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Mari diskusikan proyek Anda dan lihat bagaimana pengalaman saya dapat membantu mewujudkan visi digital Anda!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transform">
                <span className="flex items-center justify-center space-x-2">
                  <span>Let's Talk</span>
                  <span className="text-xl">💬</span>
                </span>
              </button>
              
              <button className="group px-10 py-4 border-2 border-purple-400/50 text-purple-300 font-semibold rounded-full hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-105 transform">
                <span className="flex items-center justify-center space-x-2">
                  <span>Download CV</span>
                  <span className="text-xl">📄</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience