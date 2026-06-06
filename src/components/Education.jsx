import React from 'react'
import { GraduationCap, Calendar, BookOpen } from 'lucide-react'

const educationList = [
  {
    institution: 'QIS College of Engineering and Technology',
    degree: 'Bachelor of Technology (B.Tech) - Electronics & Communication Engineering',
    duration: 'July 2025 - 2028 (Ongoing)',
    description: 'Focusing on electronics, hardware-software integration, and full-stack software development.'
  },
  {
    institution: 'Government Polytechnic Parvathipuram',
    degree: 'Diploma - Electronics & Communication Engineering',
    duration: 'September 2022 - May 2025',
    score: 'GPA: 83.2%',
    description: 'Acquired strong foundational knowledge in network theory, digital logic circuits, and microprocessors.'
  },
  {
    institution: 'Government High School Srikakulam',
    degree: 'Secondary School Certificate (SSC - 10th Grade)',
    duration: 'June 2021 - May 2022',
    score: 'GPA: 85%',
    description: 'Completed secondary education with high marks in science and mathematics.'
  }
]

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#0a0f1d]/40 grid-bg relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-red-500 mb-2 font-mono text-sm uppercase">
            <GraduationCap size={16} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title text-white">Education</h2>
          <p className="text-gray-400 mt-2 font-dm-sans">Details of my academic timeline and study history.</p>
        </div>

        {/* Section List */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div key={idx} className="glassmorphism p-6 hover:border-red-500/30 transition-all duration-300 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-space-grotesk">{edu.institution}</h3>
                  <p className="text-sm text-red-400 font-semibold mt-1 font-dm-sans">{edu.degree}</p>
                </div>
                <div className="flex flex-col sm:items-end text-xs font-mono text-gray-500 gap-1 flex-shrink-0">
                  <span className="flex items-center gap-1 text-gray-400"><Calendar size={12} /> {edu.duration}</span>
                  {edu.score && <span className="text-red-400 font-bold bg-red-950/20 border border-red-500/20 px-2 py-0.5 rounded">{edu.score}</span>}
                </div>
              </div>
              <p className="text-sm text-gray-450 leading-relaxed border-t border-red-500/10 pt-4 flex items-start gap-2 font-dm-sans">
                <BookOpen size={14} className="text-red-500 mt-1 flex-shrink-0" />
                <span>{edu.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
