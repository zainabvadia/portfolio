import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-2xl mx-auto text-center">

        <p className="text-gray-500 text-base tracking-widest uppercase mb-3">
          Get in Touch
        </p>

        <h2 className="text-6xl font-black mb-4">
          Let's Talk<span className="text-orange-400">.</span>
        </h2>

        <p className="text-gray-400 text-xl mb-12">
          Have a project in mind or just want to say hello?
        </p>

        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center gap-3 text-gray-300 text-lg">
            <FaEnvelope className="text-orange-400" size={20} />
            <span>zmvadia@my.yorku.ca</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300 text-lg">
            <FaMapMarkerAlt className="text-orange-400" size={20} />
            <span>Toronto, ON · Canada</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12">

          <a
            href="https://github.com/zainabvadia"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 px-8 py-3 rounded-xl text-base font-medium transition-all flex items-center gap-2"
          >
            <FaGithub size={18} /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/zainabvadia"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 px-8 py-3 rounded-xl text-base font-medium transition-all flex items-center gap-2"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>

        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 mb-12 text-left">

          <p className="text-white font-semibold text-xl mb-6">
            Send a Message
          </p>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-base placeholder-gray-600 focus:outline-none focus:border-orange-400/50 transition-colors"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-base placeholder-gray-600 focus:outline-none focus:border-orange-400/50 transition-colors"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-base placeholder-gray-600 focus:outline-none focus:border-orange-400/50 transition-colors resize-none"
            />

            <a
              href="mailto:zmvadia@my.yorku.ca"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base"
            >
              <FaEnvelope size={18} /> Send me an email
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-white/10 pt-8 flex justify-between items-center max-w-6xl mx-auto">

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <span>·</span>
          <span>© 2026 Zainab Vadia. All rights reserved.</span>
        </div>

        <div className="flex gap-6 items-center">

          <a
            href="mailto:zmvadia@my.yorku.ca"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <FaEnvelope size={16} />
          </a>

          <a
            href="https://linkedin.com/in/zainabvadia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <FaLinkedin size={16} />
          </a>

          <a
            href="https://github.com/zainabvadia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <FaGithub size={16} />
          </a>

        </div>
      </div>

    </section>
  )
}