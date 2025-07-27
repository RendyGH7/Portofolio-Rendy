import { useState, useEffect } from 'react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('experience')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const experiences = [
    {
      id: 1,
      company: 'PT Tech Solutions',
      position: 'Senior Frontend Developer',
      period: 'Jan 2023 - Present',
      location: 'Jakarta, Indonesia',
      description: 'Leading frontend development team, building scalable web applications using React.js, Next.js, and modern JavaScript frameworks.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline',
        'Mentored junior developers'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      icon: '💼'
    },
    {
      id: 2,
      company: 'Digital Creative Agency',
      position: 'Full Stack Developer',
      period: 'Mar 2021 - Dec 2022',
      location: 'Remote',
      description: 'Developed end-to-end web solutions for various clients, from e-commerce platforms to corporate websites.',
      achievements: [
        'Delivered 25+ successful projects',
        'Increased client satisfaction by 35%',
        'Reduced development time by 30%',
        'Built reusable component library'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'AWS'],
      icon: '🚀'
    },
    {
      id: 3,
      company: 'Startup Unicorn',
      position: 'Frontend Developer',
      period: 'Jun 2019 - Feb 2021',
      location: 'Bandung, Indonesia',
      description: 'Built responsive web applications and mobile-first interfaces for fintech startup serving 100K+ users.',
      achievements: [
        'Optimized mobile performance',
        'Implemented responsive design',
        'A/B tested UI components',
        'Collaborated with UX team'
      ],
      technologies: ['React', 'Redux', 'Sass', 'Jest', 'GraphQL'],
      icon: '🌟'
    }
  ]

  const education = [
    {
      id: 1,
      school: 'Universitas Indonesia',
      degree: 'Bachelor of Computer Science',
      period: '2015 - 2019',
      gpa: '3.75/4.00',
      description: 'Focused on software engineering, data structures, and web development. Active in programming competitions.',
      achievements: [
        'Cum Laude Graduate',
        'Programming Competition Winner',
        'Student Council Member',
        'Research Assistant'
      ],
      icon: '🎓'
    },
    {
      id: 2,
      school: 'FreeCodeCamp',
      degree: 'Full Stack Web Development',
      period: '2018 - 2019',
      gpa: 'Certified',
      description: 'Comprehensive online certification covering modern web development technologies and best practices.',
      achievements: [
        'Responsive Web Design Certified',
        'JavaScript Algorithms Certified',
        'Frontend Libraries Certified',
        'Backend Development Certified'
      ],
      icon: '💻'
    }
  ]

  const skills = [
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'JavaScript/TypeScript', level: 90, category: 'Programming' },
    { name: 'Node.js/Express', level: 85, category: 'Backend' },
    { name: 'Python/Django', level: 80, category: 'Backend' },
    { name: 'PostgreSQL/MongoDB', level: 85, category: 'Database' },
    { name: 'Docker/AWS', level: 75, category: 'DevOps' },
    { name: 'Figma/Design', level: 70, category: 'Design' },
    { name: 'Git/GitHub', level: 90, category: 'Tools' }
  ]

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: '📊' },
    { number: '50+', label: 'Happy Clients', icon: '😊' },
    { number: '4+', label: 'Years Experience', icon: '⏱️' },
    { number: '15+', label: 'Technologies', icon: '🔧' }
  ]

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: '☁️'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2022',
      icon: '📈'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      icon: '⚛️'
    }
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
                My Experience
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Perjalanan karir saya dalam dunia teknologi dan pengembangan web
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

      {/* Tab Navigation */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            {[
              { id: 'experience', label: 'Work Experience', icon: '💼' },
              { id: 'education', label: 'Education', icon: '🎓' },
              { id: 'skills', label: 'Skills', icon: '⚡' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/30 text-gray-300 hover:bg-gray-800/50 border border-purple-500/20'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          {/* Work Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-white mb-12">Professional Journey</h2>
              {experiences.map((exp, index) => (
                <div key={exp.id} className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-gray-800/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div className="flex-shrink-0 mb-6 lg:mb-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl text-white">
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                          <h4 className="text-xl text-purple-400 font-semibold mb-2">{exp.company}</h4>
                          <p className="text-gray-400 mb-2">{exp.location}</p>
                        </div>
                        <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                          <span className="text-purple-300 font-medium">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-purple-400 font-semibold mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-300 flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-purple-400 font-semibold mb-3">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-700/50 border border-purple-500/30 rounded-full text-sm text-gray-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-white mb-12">Educational Background</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-gray-800/40 transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl text-white mx-auto mb-4">
                        {edu.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <h4 className="text-lg text-purple-400 font-semibold mb-2">{edu.school}</h4>
                      <div className="flex justify-center space-x-4 text-sm text-gray-400">
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span>{edu.gpa}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-center leading-relaxed">{edu.description}</p>
                    
                    <div>
                      <h5 className="text-purple-400 font-semibold mb-3 text-center">Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-2">🏆</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center text-white mb-8">Certifications</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                      <div className="text-3xl mb-4">{cert.icon}</div>
                      <h4 className="text-purple-400 font-semibold mb-2">{cert.name}</h4>
                      <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-xs">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Skills */}
          {activeTab === 'skills' && (
            <div>
              <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className="text-white font-semibold">{skill.name}</h4>
                        <p className="text-gray-400 text-sm">{skill.category}</p>
                      </div>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6">
              Mari diskusikan proyek Anda dan lihat bagaimana pengalaman saya dapat membantu mewujudkan visi Anda.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105">
              Let's Talk! 💬
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience