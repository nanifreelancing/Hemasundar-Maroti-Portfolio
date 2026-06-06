import React, { useEffect, useRef, useState } from 'react'
import { Calendar, Award, Briefcase, GraduationCap, ArrowRight, ExternalLink } from 'lucide-react'

const roadmapEvents = [
  {
    id: 1,
    title: 'Early Tech Seeds & Schooling',
    subtitle: 'Government High School Srikakulam',
    duration: 'June 2021 - May 2022',
    category: 'education',
    icon: GraduationCap,
    glowColor: 'var(--cyan)',
    metrics: [
      { label: 'SSC (10th) Grade', value: '85%' },
      { label: 'Focus', value: 'Mathematics & Basic Science' }
    ],
    description: 'Developed critical problem solving skills and interest in electronic systems and computing early on in native Srikakulam, Andhra Pradesh.',
  },
  {
    id: 2,
    title: 'Electronics Base & Project Expos',
    subtitle: 'Government Polytechnic Parvathipuram',
    duration: 'Sept 2022 - May 2025',
    category: 'education',
    icon: Award,
    glowColor: 'var(--green)',
    metrics: [
      { label: 'Diploma ECE GPA', value: '83.2%' },
      { label: 'Expos Won', value: '5 First Prizes' }
    ],
    achievements: [
      '1st Prize in Project Expo at Chalapathy, Guntur',
      '1st Prize in Project Expo at RISE, Ongole',
      '1st Prize in Project Expo at SITE, Tadepalligudem',
      '1st Prize in Project Expo at LAAM Chalapathy, Guntur',
      '3rd Prize in Project Expo at QISCET, Ongole'
    ],
    description: 'Hands-on curriculum in Electronics and Communication Engineering. Led award-winning hardware/software project exhibitions in regional colleges.',
  },
  {
    id: 3,
    title: 'React & Frontend Developer Intern',
    subtitle: 'Spotmies LLP',
    duration: 'Nov 2024 - May 2025 (7 Months)',
    category: 'work',
    icon: Briefcase,
    glowColor: 'var(--purple)',
    metrics: [
      { label: 'Role', value: 'Frontend Developer' },
      { label: 'Core tech', value: 'React, Tailwind, Responsive UI' }
    ],
    bullets: [
      'Contributed to Reaidy admin panel by identifying and resolving critical bugs, enhancing overall stability.',
      'Refined the corporate landing page UI designs and performance metrics for a seamless consumer journey.',
      'Successfully worked on the Lucy project, ensuring smooth functionality and code optimization.',
      'Built fully responsive grids and UI components ensuring cross-browser device compatibility.'
    ],
    description: 'Immersed in industrial software workflows, building reusable React components, and collaborating daily with designers and engineers.',
  },
  {
    id: 4,
    title: 'GeeksforGeeks Campus Mantri',
    subtitle: 'GeeksforGeeks Campus Ambassador',
    duration: 'Jan 2026 - May 2026 (5 Months)',
    category: 'leadership',
    icon: Award,
    glowColor: 'var(--orange)',
    metrics: [
      { label: 'Students Engaged', value: '500+' },
      { label: 'Events Organized', value: 'Coding contests, Webinars' }
    ],
    bullets: [
      'Represented GFG on campus to promote strong programming culture and tech awareness.',
      'Increased student participation in coding challenges, scholarships, and hiring tests.',
      'Organized structured contests, mock placements, and workshops for engineering peers.'
    ],
    description: 'Spearheaded college-wide student engagement initiatives, coordinating with GFG directors to distribute technical resources.',
  },
  {
    id: 5,
    title: 'B.Tech in ECE & Product Innovation',
    subtitle: 'QIS College of Engineering and Technology',
    duration: 'July 2025 - 2028 (Present)',
    category: 'education',
    icon: GraduationCap,
    glowColor: 'var(--pink)',
    metrics: [
      { label: 'Degree', value: 'Bachelor of Technology' },
      { label: 'Focus', value: 'ECE, MERN stack, ML & IoT' }
    ],
    projects: [
      {
        name: 'AIoT Vertical Farming (Agrinex)',
        link: 'https://agrinex.vercel.app/',
        desc: 'Smart crop dashboard displaying real-time humidity, temperature, and automated water irrigation feedback.'
      },
      {
        name: 'Telugu Info Student Portal',
        link: 'https://telugu-info-student.vercel.app/',
        desc: 'Dynamic info site serving regional Telugu users with curated job openings, resources, and scholarship databases.'
      }
    ],
    description: 'Developing AI-powered IoT agricultural tools, writing full-stack MERN products, and structuring startups. Developer today, founder in progress.',
  }
]

const ScrollRoadmap = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeNode, setActiveNode] = useState(1)
  const roadmapRef = useRef(null)
  const lineRef = useRef(null)
  const nodeRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (!roadmapRef.current || !lineRef.current) return

      const rect = roadmapRef.current.getBoundingClientRect()
      const elementHeight = rect.height
      const elementTop = rect.top
      const viewportHeight = window.innerHeight

      // Calculate the scroll percentage within this roadmap section
      let progress = 0
      const startPoint = viewportHeight / 2 // Starts filling when container hits center
      
      if (elementTop < startPoint) {
        const scrolledDistance = startPoint - elementTop
        progress = Math.min(100, (scrolledDistance / (elementHeight - startPoint)) * 100)
      } else {
        progress = 0
      }

      setScrollProgress(progress)

      // Determine active node based on distance to center of viewport
      let closestNode = 1
      let minDistance = Infinity

      nodeRefs.current.forEach((node, index) => {
        if (!node) return
        const nodeRect = node.getBoundingClientRect()
        const nodeCenter = nodeRect.top + nodeRect.height / 2
        const viewportCenter = viewportHeight / 2
        const distance = Math.abs(nodeCenter - viewportCenter)

        if (distance < minDistance) {
          minDistance = distance
          closestNode = index + 1
        }
      })

      setActiveNode(closestNode)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    // Run initially
    setTimeout(handleScroll, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section id="roadmap" ref={roadmapRef} className="relative py-28 bg-[#020b18] grid-bg overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title text-white mb-4">
            Interactive <span className="gradient-text-cyan">Roadmap</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Scroll down to watch the developer node timeline travel through academic credentials, hands-on internships, and startup products.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Vertical Center Line */}
          <div className="roadmap-line">
            <div 
              ref={lineRef}
              className="roadmap-line-progress" 
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Timeline Nodes & Details */}
          <div className="space-y-28">
            {roadmapEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0
              const isActive = activeNode >= event.id

              return (
                <div 
                  key={event.id}
                  className={`flex flex-col md:flex-row items-center justify-between relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left/Right Content Card */}
                  <div className="w-full md:w-[45%] mb-8 md:mb-0">
                    <div 
                      className={`glass-card-hover p-8 relative overflow-hidden transition-all duration-500 ${
                        isActive ? 'border-t-4' : ''
                      }`}
                      style={{ 
                        borderTopColor: isActive ? event.glowColor : 'rgba(0,245,255,0.15)',
                        boxShadow: isActive ? `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 15px ${event.glowColor}15` : ''
                      }}
                    >
                      {/* Timeline duration tag */}
                      <div className="flex items-center gap-2 mb-4 text-xs font-mono" style={{ color: event.glowColor }}>
                        <Calendar size={13} />
                        <span>{event.duration}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                      <h4 className="text-md font-semibold text-cyan-400/90 mb-4">{event.subtitle}</h4>
                      
                      <p className="text-gray-300 leading-relaxed text-sm mb-6">
                        {event.description}
                      </p>

                      {/* Render Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6 border-t border-b border-gray-800 py-4">
                        {event.metrics.map((metric, mi) => (
                          <div key={mi}>
                            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{metric.label}</p>
                            <p className="text-md font-bold text-white mt-1" style={{ color: isActive ? event.glowColor : '#fff' }}>
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Render Bullet Lists if present */}
                      {event.bullets && (
                        <ul className="space-y-3 mb-6 text-sm text-gray-300">
                          {event.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex gap-2 items-start">
                              <span className="text-purple-400 mt-1.5 font-bold">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Render Achievements if present */}
                      {event.achievements && (
                        <div className="mb-4">
                          <p className="text-xs font-mono text-gray-400 uppercase mb-3 tracking-wider">Expo Laurels:</p>
                          <div className="space-y-2">
                            {event.achievements.map((ach, ai) => (
                              <div key={ai} className="flex items-center gap-2 text-sm text-gray-300">
                                <Award size={14} className="text-green-400 flex-shrink-0" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Render Projects Links if present */}
                      {event.projects && (
                        <div className="space-y-4">
                          <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Live Deployments:</p>
                          {event.projects.map((proj, pi) => (
                            <div key={pi} className="p-3 bg-dark3/40 rounded-lg border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-white text-sm">{proj.name}</span>
                                <a 
                                  href={proj.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-cyan-400 hover:text-white transition-colors"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              </div>
                              <p className="text-xs text-gray-400">{proj.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Node Center Dot */}
                  <div 
                    ref={el => nodeRefs.current[index] = el}
                    className={`roadmap-node absolute left-1/2 -translate-x-1/2 ${isActive ? 'active' : ''}`}
                    style={{ 
                      backgroundColor: isActive ? event.glowColor : 'var(--dark)',
                      boxShadow: isActive ? `0 0 15px ${event.glowColor}, 0 0 30px ${event.glowColor}60` : 'none',
                      borderColor: isActive ? event.glowColor : 'rgba(0, 245, 255, 0.3)'
                    }}
                  >
                    {/* Animated pulsing wave for active current step */}
                    {activeNode === event.id && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-current opacity-75" style={{ color: event.glowColor }} />
                    )}
                  </div>

                  {/* Empty Spacer Column for balance */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollRoadmap
