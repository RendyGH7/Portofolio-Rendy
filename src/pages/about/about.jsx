import Navbar from '../../components/navbar/navbar'
import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: false,
    story: false,
    timeline: false,
    interests: false,
    skills: false,
    cta: false
  })

  useEffect(() => {
    // Sequential animation timing
    const timers = [
      setTimeout(() => setIsVisible(true), 100),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, hero: true })), 300),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, story: true })), 600),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, timeline: true })), 900),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, interests: true })), 1200),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, skills: true })), 1500),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, cta: true })), 1800)
    ]

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  const timeline = [
    {
      year: '2023',
      title: 'Started UI/UX Design Journey',
      description: 'Mulai belajar UI/UX Design dengan fokus pada user-centered design',
      icon: '🎨',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      year: '2023',
      title: 'Started Programming Journey',
      description: 'Mulai belajar programming dengan HTML, CSS, dan JavaScript',
      icon: '🚀',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      year: '2024',
      title: 'First Web Project',
      description: 'Membuat website pertama untuk client lokal',
      icon: '💻',
      color: 'from-green-400 to-emerald-400'
    },
    {
      year: '2024',
      title: 'Tailwind CSS Mastery',
      description: 'Mendalami Tailwind CSS untuk desain yang responsif dan modern',
      icon: '🌀',
      color: 'from-purple-400 to-violet-400'
    },
    {
      year: '2024 - sekarang',
      title: 'React.js Enthusiast',
      description: 'Mulai belajar React.js untuk pengembangan frontend yang dinamis',
      icon: '📱',
      color: 'from-pink-400 to-rose-400'
    },
    {
      year: '2025 - sekarang',
      title: 'Freelance Developer dan Seller digital',
      description: 'Mulai bekerja sebagai freelance developer dan seller digital part-time',
      icon: '💼',
      color: 'from-orange-400 to-red-400'
    }
  ]

  const interests = [
    { name: 'Artificial Intelligence', icon: '🤖', color: 'from-blue-400 to-cyan-400', description: 'Machine Learning & AI Development' },
    { name: 'Blockchain Technology', icon: '⛓️', color: 'from-yellow-400 to-orange-400', description: 'Web3 & Smart Contracts' },
    { name: 'Cloud Computing', icon: '☁️', color: 'from-green-400 to-teal-400', description: 'AWS, Google Cloud & Azure' },
    { name: 'Mobile Development', icon: '📱', color: 'from-purple-400 to-pink-400', description: 'React Native & Flutter' },
    { name: 'UI/UX Design', icon: '🎨', color: 'from-pink-400 to-rose-400', description: 'User Experience Design' },
    { name: 'Cybersecurity', icon: '🔒', color: 'from-red-400 to-pink-400', description: 'Web Security & Penetration Testing' }
  ]

  const achievements = [
    { number: '10+', label: 'Projects Completed', icon: '📊', color: 'from-purple-400 to-pink-400' },
    { number: '10+', label: 'Happy Clients', icon: '😊', color: 'from-cyan-400 to-blue-400' },
    { number: '3', label: 'Years Experience', icon: '⏱️', color: 'from-green-400 to-emerald-400' },
  ]

  const skills = [
    { category: 'Frontend', items: ['JavaScript', 'React', 'Tailwind CSS'], progress: 95 },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma'], progress: 88 }
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
      {/* Enhanced Background Effects - Same as Home */}
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

      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ease-out ${
            sectionsVisible.hero ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-125 translate-y-8'
          }`}>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 mb-8">
              <span className="text-2xl">👨‍💻</span>
              <span className="text-sm font-medium text-gray-200">About Me</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                My Journey
              </span>
              <br />
              <span className="text-gray-100 text-4xl lg:text-6xl">
                as Developer
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-24"></div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Passionate • Creative • Innovative
              </span>
              <div className="h-px bg-gradient-to-l from-pink-500 to-transparent w-24"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Passionate frontend developer dengan visi untuk menciptakan 
              <span className="text-purple-300 font-medium"> solusi digital yang inovatif </span>
              dan berdampak positif bagi masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${
            sectionsVisible.story ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
          }`}>
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Story</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Perjalanan saya di dunia teknologi dimulai dari rasa penasaran terhadap bagaimana 
                  website dan aplikasi bekerja. Dari seorang pemula yang belajar HTML dasar, kini saya 
                  telah berkembang menjadi Frontend developer dan UI/UX Designer yang menguasai berbagai teknologi modern.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Setiap project yang saya kerjakan adalah kesempatan untuk belajar dan berkembang. 
                  Saya percaya bahwa teknologi harus mudah digunakan, efisien, dan memberikan nilai 
                  tambah bagi penggunanya.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Dengan pengalaman lebih dari 2 tahun dan 10+ project yang telah diselesaikan, 
                  saya terus berinovasi untuk menciptakan solusi digital yang impactful.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/30">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - Photo Section */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main Container */}
                <div className="w-96 h-96 bg-gradient-to-br from-slate-800/30 to-slate-900/50 rounded-3xl flex items-center justify-center backdrop-blur-md border border-slate-700/30 shadow-2xl relative overflow-hidden">
                  {/* Inner gradient overlay */}
                  <div className="absolute inset-8 bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-cyan-600/10 rounded-2xl"></div>
                  
                  {/* Photo Container */}
                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 z-10 hover:scale-105 transition-transform duration-500 group">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 p-1 rounded-2xl">
                      <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden">
                        {/* Your Photo */}
                        <img 
                          src="../public/porto rendy 1.jpg" 
                          alt="Developer Portrait" 
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Optional overlay for better integration */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-30 animate-spin" style={{animationDuration: '12s'}}></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-bounce">
                  <span className="text-2xl">⚡</span>
                </div>
                
                <div className="absolute -bottom-8 -left-8 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50 animate-pulse">
                  <span className="text-xl">🚀</span>
                </div>
                
                <div className="absolute top-1/4 -left-12 w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-ping opacity-60">
                  <span className="text-lg">✨</span>
                </div>
                
                {/* Code snippets */}
                <div className="absolute -top-4 left-1/4 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-sm text-gray-300 shadow-lg">
                  <code className="text-purple-300">&lt;Developer /&gt;</code>
                </div>
                
                <div className="absolute -bottom-4 right-1/4 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-sm text-gray-300 shadow-lg">
                  <code className="text-cyan-300">&#123; passionate: <span className="text-green-400">true</span> &#125;</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 lg:px-12 bg-black/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ease-out ${
            sectionsVisible.timeline ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Dari pemula hingga menjadi developer berpengalaman dengan berbagai milestone penting
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 rounded-full"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-1000 ease-out ${
                  sectionsVisible.timeline ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
                }`} style={{ transitionDelay: `${index * 200}ms` }}>
                  
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                        {item.year}
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-gray-900 shadow-lg`}></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ease-out ${
            sectionsVisible.skills ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Teknologi dan tools yang saya kuasai dalam pengembangan aplikasi modern
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 ${
                sectionsVisible.skills ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
              }`} style={{ transitionDelay: `${index * 200}ms` }}>
                <h3 className="text-2xl font-bold text-white mb-6">{skill.category}</h3>
                
                <div className="space-y-4 mb-11">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">{item}</span>
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                  ))}
                </div>
                
                <div className="relative">
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-2000 ease-out"
                      style={{ width: sectionsVisible.skills ? `${skill.progress}%` : '0%' }}
                    ></div>
                  </div>
                  <span className="absolute -top-8 right-0 text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {skill.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out ${
            sectionsVisible.cta ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
          }`}>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default About