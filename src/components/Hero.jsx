import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const gradientText = {
    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block',
  }

  const marqueeItems = [
    'PFIZER AI/ML EXTERN',
    'KRAFZEN SWE INTERN',
    'YORK UNIVERSITY CS',
    'OPEN TO FALL 2026 INTERNSHIPS',
    'SWE & AI/ML',
    '210+ BOOKS READ',
    '2x HACKATHON WINNER',
    'TORONTO, ON',
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <p className="text-gray-400 text-sm md:text-base mb-3 tracking-widest uppercase">
        Hey, I'm
      </p>

      <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mb-5 tracking-tight uppercase">
        Zainab Vadia
      </h2>

      <span
        className="border text-xs md:text-base px-4 md:px-5 py-2 rounded-full mb-8 text-center"
        style={{
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          color: '#c4b5fd',
        }}
      >
        CS Student · SWE & AI/ML · Open to Fall 2026 Internships
      </span>

      <div className="text-lg md:text-2xl leading-relaxed mb-10 max-w-2xl text-center">
        <span className="text-gray-400">Building </span>
        <TypeAnimation
          sequence={[
            'AI systems',
            2000,
            'full stack products',
            2000,
            'web applications',
            2000,
            'real world solutions',
            2000,
            'things that matter',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{ ...gradientText, fontWeight: 600 }}
        />
      </div>

      <button
        onClick={() =>
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 rounded-full transition-all mb-10 hover:opacity-90 hover:scale-105"
        style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
      >
        View My Work →
      </button>

      <div className="flex gap-6 mb-12">
        <a
          href="https://github.com/zainabvadia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition-all hover:scale-110 transform"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/zainabvadia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition-all hover:scale-110 transform"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="mailto:zmvadia@my.yorku.ca"
          className="text-white hover:text-cyan-400 transition-all hover:scale-110 transform"
        >
          <FaEnvelope size={30} />
        </a>
      </div>

      <div
        className="w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-xs md:text-sm tracking-widest text-gray-500 uppercase flex items-center gap-8"
            >
              {item}
              <span style={{ color: '#06b6d4' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
