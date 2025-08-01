import Navbar from '../../components/navbar/navbar'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: false,
    info: false,
    form: false,
    social: false,
    map: false
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    // Sequential animation timing dengan zoom out effect
    const timers = [
      setTimeout(() => setIsVisible(true), 100),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, hero: true })), 300),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, info: true })), 600),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, form: true })), 900),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, social: true })), 1200),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, map: true })), 1500)
    ]

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rendyftbaru@gmail.com',
      description: 'Kirim email kapan saja!',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: '📱',
      title: 'Telepon',
      value: '+62 896 6955 7444',
      description: 'Hubungi untuk diskusikan proyek',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: '📍',
      title: 'Lokasi',
      value: 'Jakarta, Indonesia',
      description: 'Tersedia untuk remote work',
      color: 'from-purple-400 to-violet-400'
    },
    {
      icon: '⏰',
      title: 'Response Time',
      value: '< 24 Jam',
      description: 'Balasan cepat dijamin!',
      color: 'from-orange-400 to-red-400'
    }
  ]

  const socialMedia = [
    { name: 'GitHub', icon: '💻', link: '#', color: 'from-gray-400 to-gray-600' },
    { name: 'LinkedIn', icon: '💼', link: '#', color: 'from-blue-400 to-blue-600' },
    { name: 'Twitter', icon: '🐦', link: '#', color: 'from-sky-400 to-blue-500' },
    { name: 'Instagram', icon: '📷', link: '#', color: 'from-pink-400 to-purple-500' },
    { name: 'Discord', icon: '🎮', link: '#', color: 'from-indigo-400 to-purple-500' },
    { name: 'Facebook', icon: '✈️', link: '#', color: 'from-blue-400 to-cyan-400' }
  ]

  const faqData = [
    {
      icon: '💰',
      question: 'Berapa tarif yang dikenakan?',
      answer: 'Harga proyek bervariasi tergantung kompleksitas dan timeline. Mari diskusikan kebutuhan spesifik Anda!'
    },
    {
      icon: '⏱️',
      question: 'Berapa lama waktu pengerjaan?',
      answer: 'Proyek umumnya memakan waktu 2-8 minggu tergantung scope. Rush project tersedia dengan biaya tambahan.'
    },
    {
      icon: '🔧',
      question: 'Apakah menyediakan maintenance?',
      answer: 'Ya! Saya menyediakan paket maintenance dan support berkelanjutan untuk semua proyek.'
    },
    {
      icon: '🌍',
      question: 'Bekerja remote?',
      answer: 'Tentu! Saya bekerja dengan klien di seluruh dunia dan nyaman dengan kolaborasi remote.'
    }
  ]

  // Background style yang sama dengan about page
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
      {/* Enhanced Background Effects - Same as About */}
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
              <span className="text-2xl">📬</span>
              <span className="text-sm font-medium text-gray-200">Hubungi Saya</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Mari Berkolaborasi
              </span>
              <br />
              <span className="text-gray-100 text-4xl lg:text-6xl">
                Bersama
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-24"></div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Responsive • Professional • Creative
              </span>
              <div className="h-px bg-gradient-to-l from-pink-500 to-transparent w-24"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Punya proyek menarik? Mari diskusikan dan wujudkan 
              <span className="text-purple-300 font-medium"> ide kreatif Anda </span>
              menjadi solusi digital yang luar biasa!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className={`group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 text-center hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 ${
                sectionsVisible.info ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-125 translate-y-8'
              }`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                  {info.title}
                </h3>
                <p className="text-white font-medium mb-2">{info.value}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 lg:px-12 bg-black/20 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <div className={`transition-all duration-1000 ease-out ${
            sectionsVisible.form ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
          }`}>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/40 transition-all duration-300">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Kirim <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pesan</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-400 font-medium mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-purple-400 font-medium mb-2">Alamat Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-purple-400 font-medium mb-2">Subjek</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Subjek proyek Anda"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-purple-400 font-medium mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                    placeholder="Ceritakan tentang proyek Anda..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Kirim Pesan</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* FAQ & Social Section */}
          <div className="space-y-8">
            
            {/* FAQ */}
            <div className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/40 transition-all duration-300 ${
              sectionsVisible.form ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  FAQ <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Singkat</span>
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </div>
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">{faq.question}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/40 transition-all duration-300 ${
              sectionsVisible.social ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
            }`}>
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Terhubung <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dengan Saya</span>
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="group bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:border-purple-500/30"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div className={`text-xs font-medium bg-gradient-to-r ${social.color} bg-clip-text text-transparent`}>
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-800/40 transition-all duration-300 ${
            sectionsVisible.map ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8'
          }`}>
            <div className="mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Berdomisili di <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Jakarta, Indonesia</span> 🇮🇩
              </h3>
              <p className="text-gray-300 text-lg">Tersedia untuk remote work di seluruh dunia</p>
            </div>
            
            <div className="h-64 bg-slate-700/30 rounded-xl flex items-center justify-center border border-slate-600/50 hover:border-purple-500/30 transition-colors duration-300">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">🗺️</div>
                <p className="text-purple-400 font-semibold mb-2">Peta Interaktif</p>
                <p className="text-gray-400 text-sm">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact