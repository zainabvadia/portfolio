import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa'

export default function Contact() {
  const gradientText = {
    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  }

  return (
    <section id="contact" className="py-16 px-6 scroll-mt-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">Get in Touch</p>
        <h2 className="text-3xl font-black mb-3">Let's Talk<span style={gradientText}>.</span></h2>
        <p className="text-gray-400 text-base mb-6">Have a project in mind or just want to say hello?</p>

        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <FaEnvelope size={14} style={{ color: '#06b6d4' }} />
            <span>zmvadia@my.yorku.ca</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <FaMapMarkerAlt size={14} style={{ color: '#06b6d4' }} />
            <span>Toronto, ON · Canada</span>
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <a
            href="https://github.com/zainabvadia"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 px-5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2"
          >
            <FaGithub size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/zainabvadia"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 px-5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-5 text-center">
          <h3 className="text-white font-bold text-base mb-1">Want to know more?</h3>
          <p className="text-gray-400 text-sm mb-3">Download my resume for a detailed look at my experience, skills, and education.</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-xl font-semibold text-sm transition-colors text-white hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
          >
            <FaFileAlt size={14} /> View Resume
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-6 text-left">
          <p className="text-white font-semibold text-base mb-4">Send a Message</p>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 transition-colors w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 transition-colors w-full"
            />
            <textarea
              rows={3}
              placeholder="Your Message"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none w-full"
            />
            <a
              href="mailto:zmvadia@my.yorku.ca"
              className="text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
            >
              <FaEnvelope size={16} /> Send me an email
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8">
        <div className="text-gray-500 text-sm text-center md:text-left">
          © 2026 Zainab Vadia. All rights reserved.
        </div>
        <div className="flex gap-4 items-center">
          <a href="mailto:zmvadia@my.yorku.ca" className="text-gray-500 hover:text-white transition-colors">
            <FaEnvelope size={16} />
          </a>
          <a href="https://linkedin.com/in/zainabvadia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaLinkedin size={16} />
          </a>
          <a href="https://github.com/zainabvadia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
