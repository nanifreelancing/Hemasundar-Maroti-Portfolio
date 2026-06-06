import React from 'react'

// Custom SVG Icons representing official brand designs:
const LovableIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FF4B6E" fillRule="evenodd" clipRule="evenodd" d="M7.082 0c3.91 0 7.081 3.179 7.081 7.1v2.7h2.357c3.91 0 7.082 3.178 7.082 7.1 0 3.923-3.17 7.1-7.082 7.1H0V7.1C0 3.18 3.17 0 7.082 0z" />
  </svg>
)

const CursorIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="url(#cursor-grad)" d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
    <defs>
      <linearGradient id="cursor-grad" x1="1.8" y1="0.1" x2="22.1" y2="22.9" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#00e5ff" />
      </linearGradient>
    </defs>
  </svg>
)

const AntigravityIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#0c111d" stroke="#ef4444" strokeWidth="1" />
    <path d="M6 18c3-3 4-8 8-10s6 1 6 4-2 6-6 6-6-6-3-9" stroke="url(#antigravity-curve-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="antigravity-curve-grad" x1="6" y1="18" x2="20" y2="8" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00f2fe" />
        <stop offset="100%" stopColor="#4facfe" />
      </linearGradient>
    </defs>
  </svg>
)

const MultisimIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#1e40af" />
    <path d="M5 12h5m0-4v8l6-4-6-4zm6 4h4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="5" cy="12" r="1" fill="#ffffff" />
    <circle cx="19" cy="12" r="1" fill="#ffffff" />
  </svg>
)

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="7.5" stroke="#374151" strokeWidth="1" strokeDasharray="1.5 1.5" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="#10b981" strokeWidth="1" />
    <path d="M12 5.5c0 0-2.5 3-2.5 6.5s2.5 6.5 2.5 6.5 2.5-3 2.5-6.5S12 5.5 12 5.5z" fill="#10b981" />
    <path d="M12 5.5c0 0-1.25 3-1.25 6.5s1.25 6.5 1.25 6.5V5.5z" fill="#059669" />
  </svg>
)

const RailwayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#090d16" stroke="#475569" strokeWidth="1" />
    <path d="M7 10h10M7 14h10" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 10v4M12 10v4M15 10v4" stroke="#ffffff" strokeWidth="1.5" />
  </svg>
)

const techSkills = [
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
]

const toolsSkills = [
  { name: "Expo", icon: "https://cdn.simpleicons.org/expo/ffffff" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { name: "Lovable", icon: LovableIcon },
  { name: "Cursor", icon: CursorIcon },
  { name: "Antigravity", icon: AntigravityIcon },
  { name: "Multisim 11.0", icon: MultisimIcon },
  { name: "Arduino IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "MongoDB Compass", icon: CompassIcon },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
  { name: "Railway Deploy", icon: RailwayIcon },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" }
]

const renderIcon = (Icon) => {
  if (typeof Icon === 'string') {
    return <img src={Icon} alt="" className="h-10 w-10 mb-2 object-contain" />
  }
  const IconComponent = Icon;
  return <IconComponent />
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#030712] relative z-10 grid-bg">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk gradient-text mb-4">Skills &amp; Tools</h2>
          <p className="text-xl text-gray-400 font-dm-sans">Technologies I work with</p>
        </div>

        <div className="space-y-16">
          
          {/* Technical Skills Category */}
          <div>
            <h3 className="text-2xl font-bold font-space-grotesk mb-8 text-center text-white">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {techSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md border border-red-500/10 bg-slate-950/40 hover:border-red-500/30 hover:scale-105 transition-all duration-300"
                >
                  {renderIcon(skill.icon)}
                  <p className="text-sm font-medium text-gray-300 font-dm-sans">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms Category */}
          <div>
            <h3 className="text-2xl font-bold font-space-grotesk mb-8 text-center text-white">Tools &amp; Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {toolsSkills.map((tool, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md border border-red-500/10 bg-slate-950/40 hover:border-red-500/30 hover:scale-105 transition-all duration-300"
                >
                  {renderIcon(tool.icon)}
                  <p className="text-sm font-medium text-gray-300 font-dm-sans text-center">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
