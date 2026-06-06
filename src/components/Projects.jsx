import React from 'react'
import { ExternalLink, Github, Award } from 'lucide-react'

const projects = [
  {
    title: "AIoT Vertical Farming (Agrinex)",
    description: "A smart farming prototype built using microcontrollers and IoT web dashboards, integrating ambient sensors for automated agriculture irrigation feedback.",
    image: "https://www.shutterstock.com/image-photo/artificial-intelligence-imagine-how-works-600nw-2508362681.jpg",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "IoT Sensors", "Microcontrollers"],
    link: "https://agrinex.vercel.app/"
  },
  {
    title: "Telugu Info Student Portal",
    description: "Designed a jobs database and scholarship notification utility matching regional requirements for Telugu student users.",
    image: "https://itechindia.co/wp-content/uploads/2025/08/business-handshake-finance-prosperity-money-technology-asset-background-11.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "SMTP Services"],
    link: "https://telugu-info-student.vercel.app/"
  },
  {
    title: "Prani Mitra Website",
    description: "Farmer assistance platform integrating AI-powered query engines and Interactive Voice Response (IVR) architectures.",
    image: "https://www.keyamedical.com/wp-content/uploads/2021/06/SmartHospital.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "IVR Voice APIs", "AI Models"],
    link: "https://prani-mitra1.vercel.app/"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0f1d]/40 relative z-10 grid-bg">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 font-dm-sans">Showcasing my best work and innovations</p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glassmorphism flex flex-col justify-between border border-red-500/10 hover:border-red-500/30 transition-all duration-300 group h-full rounded-xl"
            >
              <div className="p-0">
                {/* Image Banner */}
                <div className="relative overflow-hidden rounded-t-lg h-44 bg-slate-900 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-space-grotesk text-white mb-2 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-405 font-dm-sans leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, ti) => (
                      <span 
                        key={ti} 
                        className="px-2 py-0.5 bg-red-950/20 text-red-400 text-xs rounded-full font-mono border border-red-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 mt-auto">
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid text-xs py-2 px-3 flex-1 flex items-center justify-center gap-1 font-dm-sans"
                  >
                    Live Demo <ExternalLink size={13} />
                  </a>
                  <a 
                    href="https://github.com/Hemasundar2006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-2 px-3 flex-1 flex items-center justify-center gap-1 font-dm-sans"
                  >
                    GitHub <Github size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expo Awards Box */}
        <div className="mt-16 p-8 glassmorphism border border-red-500/15 hover:border-red-500/35 transition-all flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-red-950/20 border border-red-500/20 flex items-center justify-center flex-shrink-0">
              <Award className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-space-grotesk">Project Expo Achievements</h3>
              <p className="text-sm text-gray-400 mt-0.5 font-dm-sans">5 state-wide project exhibition prizes won at regional colleges.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Chalapathy Guntur (1st)', 'RISE Ongole (1st)', 'SITE Tadepalligudem (1st)', 'LAAM Guntur (1st)', 'QISCET (3rd)'].map((award, ai) => (
              <span key={ai} className="text-xs font-mono font-semibold bg-red-950/25 border border-red-500/25 text-red-400 px-3 py-1.5 rounded-full">
                {award}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
