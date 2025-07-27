// about.jsx
import Navbar from '../../components/navbar/navbar'
import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const timeline = [
    {
      year: '2019',
      title: 'Started Programming Journey',
      description: 'Mulai belajar programming dengan HTML, CSS, dan JavaScript',
      icon: '🚀'
    },
    {
      year: '2020',
      title: 'First Web Project',
      description: 'Membuat website pertama untuk client lokal',
      icon: '💻'
    },
    {
      year: '2021',
      title: 'React & Node.js',
      description: 'Mendalami React.js dan Node.js untuk full-stack development',
      icon: '⚛️'
    },
    {
      year: '2022',
      title: 'Freelance Developer',
      description: 'Mulai bekerja sebagai freelance developer full-time',
      icon: '💼'
    },
    {
      year: '2023',
      title: 'Mobile Development',
      description: 'Ekspansi ke mobile development dengan React Native',
      icon: '📱'
    },
    {
      year: '2024',
      title: 'Senior Developer',
      description: 'Menjadi senior developer dengan 100+ project selesai',
      icon: '🏆'
    }
  ]

  const interests = [
    { name: 'Artificial Intelligence', icon: '🤖', color: 'from-blue-400 to-cyan-400' },
    { name: 'Blockchain Technology', icon: '⛓️', color: 'from-yellow-400 to-orange-400' },
    { name: 'Cloud Computing', icon: '☁️', color: 'from-green-400 to-teal-400' },
    { name: 'Mobile Development', icon: '📱', color: 'from-purple-400 to-pink-400' },
    { name: 'UI/UX Design', icon: '🎨', color: 'from-pink-400 to-rose-400' },
    { name: 'Cybersecurity', icon: '🔒', color: 'from-red-400 to-pink-400' }
  ]

  const achievements = [
    { number: '200+', label: 'Projects Completed', icon: '📊' },
    { number: '150+', label: 'Happy Clients', icon: '😊' },
    { number: '5+', label: 'Years Experience', icon: '⏱️' },
    { number: '50+', label: 'Technologies Mastered', icon: '⚡' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer dengan visi untuk menciptakan solusi digital 
              yang inovatif dan berdampak positif bagi masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Perjalanan saya di dunia teknologi dimulai dari rasa penasaran terhadap bagaimana 
              website dan aplikasi bekerja. Dari seorang pemula yang belajar HTML dasar, kini saya 
              telah berkembang menjadi full-stack developer yang menguasai berbagai teknologi modern.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Setiap project yang saya kerjakan adalah kesempatan untuk belajar dan berkembang. 
              Saya percaya bahwa teknologi harus mudah digunakan, efisien, dan memberikan nilai 
              tambah bagi penggunanya.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center min-w-[120px]">
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-xs text-gray-400">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/30 relative overflow-hidden">
              <div className="text-9xl">👨‍💻</div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <div className="text-purple-400 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-gray-900"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Interests</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Teknologi yang saya minati dan terus pelajari untuk mengikuti perkembangan zaman
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 bg-gradient-to-r ${interest.color} bg-clip-text text-transparent`}>
                  {interest.name}
                </h3>
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${interest.color} rounded-full w-0 group-hover:w-full transition-all duration-1000`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Siap untuk berkolaborasi dalam proyek yang menantang? Mari diskusikan ide kamu!
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  )
}

export default About