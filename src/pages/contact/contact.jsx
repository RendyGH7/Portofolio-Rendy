// contact.jsx
import Navbar from '../../components/navbar/navbar'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'steven.dev@example.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+62 812 3456 7890',
      description: 'Call me for urgent projects'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Jakarta, Indonesia',
      description: 'Available for remote work'
    },
    {
      icon: '⏰',
      title: 'Response Time',
      value: '< 24 Hours',
      description: 'I reply fast!'
    }
  ]

  const socialMedia = [
    { name: 'GitHub', icon: '💻', link: '#', color: 'from-gray-400 to-gray-600' },
    { name: 'LinkedIn', icon: '💼', link: '#', color: 'from-blue-400 to-blue-600' },
    { name: 'Twitter', icon: '🐦', link: '#', color: 'from-sky-400 to-blue-500' },
    { name: 'Instagram', icon: '📷', link: '#', color: 'from-pink-400 to-purple-500' },
    { name: 'Discord', icon: '🎮', link: '#', color: 'from-indigo-400 to-purple-500' },
    { name: 'Telegram', icon: '✈️', link: '#', color: 'from-blue-400 to-cyan-400' }
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

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Punya proyek menarik? Mari diskusikan dan wujudkan ide kamu menjadi kenyataan!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-purple-400 font-semibold text-lg mb-2">{info.title}</h3>
                <p className="text-white font-medium mb-2">{info.value}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-400 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-purple-400 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-purple-400 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="Project subject"
                  required
                />
              </div>
              
              <div>
                <label className="block text-purple-400 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
              >
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* FAQ */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">💰 How much do you charge?</h4>
                  <p className="text-gray-300 text-sm">Project pricing varies based on complexity and timeline. Let's discuss your specific needs!</p>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">⏱️ How long does a project take?</h4>
                  <p className="text-gray-300 text-sm">Typical projects take 2-8 weeks depending on scope. Rush projects available with extra cost.</p>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">🔧 Do you provide maintenance?</h4>
                  <p className="text-gray-300 text-sm">Yes! I offer ongoing maintenance and support packages for all my projects.</p>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">🌍 Do you work remotely?</h4>
                  <p className="text-gray-300 text-sm">Absolutely! I work with clients worldwide and am comfortable with remote collaboration.</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`group bg-gray-700/30 border border-purple-500/20 rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25`}
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
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for New Projects</span>
              </div>
              <p className="text-gray-300 text-sm">
                Currently accepting new clients for Q1 2024. Book your slot now!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Based in Jakarta, Indonesia 🇮🇩</h3>
            <p className="text-gray-300 mb-6">Available for remote work worldwide</p>
            <div className="h-64 bg-gray-700/30 rounded-xl flex items-center justify-center border border-purple-500/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-purple-400 font-semibold">Interactive Map</p>
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