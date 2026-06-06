import React from 'react'
import { Award, Calendar } from 'lucide-react'

const certificationsList = [
  {
    title: 'Python Full Stack Internship Certificate',
    issuer: 'EduSkills Academy',
    date: 'June 2026',
    description: 'Completed a structured 8-week internship program covering HTML, CSS, JavaScript, jQuery, Python programming, Django web framework, SQL databases, and Git version control. Certificate ID: 2026-07SD48E776.'
  },
  {
    title: 'TATA Crucible Campus Quiz Participation',
    issuer: 'TATA Crucible',
    date: '2025',
    description: 'Participated in the prestigious campus tech, business, and general analytics quiz.'
  },
  {
    title: 'Certified in Frontend Development',
    issuer: 'United Latino Students Association',
    date: '2024',
    description: 'Validates full responsive coding structures, CSS grid capabilities, and dynamic browser logic.'
  },
  {
    title: 'CSS (Basic) Certificate',
    issuer: 'HackerRank',
    date: '2024',
    description: 'Verified certification in fundamental web styling elements, selections, layouts, and animations.'
  },
  {
    title: '2-Day SEO Training Program',
    issuer: 'Trybinc',
    date: 'March 2025',
    description: 'Practical training on search indexing, search engine optimizations, metadata systems, and site speed structures.'
  },
  {
    title: 'Performance Marketing Masterclass',
    issuer: 'WsCube Tech',
    date: '2025',
    description: 'Acquired core competencies in audience targeting analytics, Google Ads, and campaign monitoring.'
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-[#0a0f1d]/40 relative z-10 grid-bg">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk gradient-text mb-4">Certifications</h2>
          <p className="text-xl text-gray-400 font-dm-sans">Licensing & Credentials</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert, idx) => (
            <div 
              key={idx}
              className="glassmorphism p-6 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between rounded-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-lg bg-red-950/20 border border-red-500/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5 mt-1">
                    <Calendar size={12} className="text-red-400" /> {cert.date}
                  </span>
                </div>

                <h3 className="text-md font-bold text-white mb-1.5 font-space-grotesk">{cert.title}</h3>
                <p className="text-xs font-mono text-red-400 mb-3">{cert.issuer}</p>
                <p className="text-xs text-gray-400 leading-relaxed font-dm-sans">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
