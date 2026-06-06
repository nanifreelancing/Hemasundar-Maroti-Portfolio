import React from 'react'
import { Briefcase, Calendar, CheckSquare } from 'lucide-react'

const experienceList = [
  {
    role: 'Campus Mantri',
    company: 'GeeksforGeeks',
    duration: 'January 2026 - May 2026 (5 months)',
    bullets: [
      'Promoted coding contests, workshops, and career development initiatives on campus.',
      'Shared resources and placement opportunities with engineering students to increase technical skills.',
      'Organized and hosted educational events and coding challenges.',
      'Collaborated with the GFG team and campus student leaders to encourage programming culture.'
    ]
  },
  {
    role: 'React Developer Intern',
    company: 'Spotmies LLP',
    duration: 'November 2024 - May 2025 (7 months)',
    location: 'Visakhapatnam, Andhra Pradesh, India',
    bullets: [
      'Contributed to the Reaidy admin panel by finding and fixing critical software bugs to improve system stability.',
      'Refined the landing page design and improved loading speeds for a better user experience.',
      'Worked on the Lucy project to ensure smooth web features and maintainable frontend code.',
      'Implemented responsive design rules across user interface elements for mobile and desktop screens.'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#030712] grid-bg relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-red-500 mb-2 font-mono text-sm uppercase">
            <Briefcase size={16} />
            <span>Work & Positions</span>
          </div>
          <h2 className="section-title text-white">Experience</h2>
          <p className="text-gray-400 mt-2 font-dm-sans">Professional internships and community leadership roles.</p>
        </div>

        {/* List */}
        <div className="space-y-8">
          {experienceList.map((exp, idx) => (
            <div key={idx} className="glassmorphism p-6 hover:border-red-500/30 transition-all duration-300 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-space-grotesk">{exp.role}</h3>
                  <p className="text-sm text-red-400 font-semibold mt-1 font-dm-sans">{exp.company}</p>
                  {exp.location && <p className="text-xs text-gray-450 mt-0.5 font-dm-sans">{exp.location}</p>}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-red-950/20 border border-red-500/20 px-3 py-1 rounded-full flex-shrink-0">
                  <Calendar size={12} className="text-red-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-3">
                {exp.bullets.map((bullet, bi) => (
                  <div key={bi} className="flex gap-2.5 items-start text-sm text-gray-300 font-dm-sans">
                    <CheckSquare size={14} className="text-red-500 mt-1 flex-shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience