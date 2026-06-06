import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'info', message: 'Sending message...' })
    try {
      const res = await fetch('https://hemasundar-maroti-portfolio-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to send')
      
      setStatus({ type: 'success', message: 'Message sent successfully! I will reach out soon.' })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus({ type: 'error', message: 'Failed to send message. Please email me directly or try again later.' })
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-red-400" />,
      title: "Email",
      value: "marothihemasundar03@gmail.com",
      link: "mailto:marothihemasundar03@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-orange-400" />,
      title: "Phone",
      value: "+91 9666180813",
      link: "tel:+919666180813"
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-400" />,
      title: "Address",
      value: "2-1, Gandhi Nagar Colony, Voppangi, Srikakulam, AP, India",
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-[#030712] z-10 relative grid-bg">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 font-dm-sans">Let's connect and work together</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glassmorphism p-6 border border-red-500/10 rounded-xl">
              <h3 className="text-lg font-bold text-white font-space-grotesk mb-3">Contact Information</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-dm-sans mb-6">
                Feel free to call me or send a message directly. I am active across professional handles and ready to collaborate.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex gap-4 p-3 bg-slate-950/40 rounded-lg border border-red-500/5">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-red-500/10 flex items-center justify-center h-10 w-10 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-sm font-semibold text-white hover:text-red-400 transition-colors break-all font-dm-sans">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-white font-dm-sans">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Grid */}
            <div className="glassmorphism p-6 border border-red-500/10 space-y-4 rounded-xl">
              <h3 className="text-md font-bold text-white font-space-grotesk">Digital Portals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a 
                  href="https://www.linkedin.com/in/hemasundar-maroti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-955/40 border border-red-500/10 hover:border-red-500/35 hover:bg-red-500/5 rounded-lg flex items-center gap-2 text-sm text-gray-300 hover:text-red-400 transition-all font-dm-sans"
                >
                  <Linkedin size={16} className="text-red-400" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Hemasundar2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-955/40 border border-red-500/10 hover:border-red-500/35 hover:bg-red-500/5 rounded-lg flex items-center gap-2 text-sm text-gray-300 hover:text-red-400 transition-all font-dm-sans"
                >
                  <Github size={16} className="text-white" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://instagram.com/pixelix18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-955/40 border border-red-500/10 hover:border-red-500/35 hover:bg-red-500/5 rounded-lg flex items-center gap-2 text-sm text-gray-300 hover:text-red-400 transition-all font-dm-sans"
                >
                  <Instagram size={16} className="text-[#E1306C]" />
                  <span>IG: @pixelix18 (Freelance)</span>
                </a>
                <a 
                  href="https://instagram.com/grow_vth_nani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-955/40 border border-red-500/10 hover:border-red-500/35 hover:bg-red-500/5 rounded-lg flex items-center gap-2 text-sm text-gray-300 hover:text-red-400 transition-all font-dm-sans"
                >
                  <Instagram size={16} className="text-[#E1306C]" />
                  <span>IG: @grow_vth_nani (Pro)</span>
                </a>
                <a 
                  href="https://instagram.com/mr_mca_00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-955/40 border border-red-500/10 hover:border-red-500/35 hover:bg-red-500/5 rounded-lg flex items-center gap-2 text-sm text-gray-300 hover:text-red-400 transition-all font-dm-sans sm:col-span-2"
                >
                  <Instagram size={16} className="text-[#E1306C]" />
                  <span>IG: @mr_mca_00 (Personal)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Details */}
          <div className="lg:col-span-7 glassmorphism p-8 border border-red-500/10 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-6">Send A Message</h3>
            
            {status.message && (
              <div className={`p-4 rounded-lg text-sm mb-6 ${
                status.type === 'success' 
                  ? 'bg-green-950/20 border border-green-500/20 text-green-400' 
                  : status.type === 'error'
                  ? 'bg-red-950/20 border border-red-500/20 text-red-400'
                  : 'bg-red-950/10 border border-red-500/10 text-red-400'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-400 uppercase mb-2 tracking-wider">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-400 uppercase mb-2 tracking-wider">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono text-gray-400 uppercase mb-2 tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 96661 80813"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-400 uppercase mb-2 tracking-wider">Subject *</label>
                  <select 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field bg-[#030712]"
                  >
                    <option value="" disabled>Select subject</option>
                    <option value="Freelancing Web Project">Freelancing React Project</option>
                    <option value="Mobile App (React Native)">Mobile App Integration</option>
                    <option value="Startup Pitch & Collab">Startup Collaboration</option>
                    <option value="General inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-gray-400 uppercase mb-2 tracking-wider">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Draft your message detail here..."
                  className="input-field resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-solid py-3 justify-center text-sm font-semibold flex items-center gap-1.5 font-dm-sans">
                Submit Dispatch <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
