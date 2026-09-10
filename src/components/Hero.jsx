import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import FloatingCodebg from './FloatingCodebg'

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
    'OPEN TO WINTER 2027 INTERNSHIPS',
    'SWE & AI',
    '210+ BOOKS READ',
    '2x HACKATHON WINNER',
    'TORONTO, ON',
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <FloatingCodebg />

      <p className="text-gray-400 text-base mb-3 tracking-widest uppercase">
        Hey, I'm
      </p>

      <h2 className="text-8xl font-black mb-5 tracking-tight uppercase">
        Zainab Vadia
      </h2>

      <span
        className="border text-base px-5 py-2 rounded-full mb-8"
        style={{
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          color: '#c4b5fd',
        }}
      >
        CS Student · SWE & AI · Open to Winter 2027 Internships
      </span>

        
      <button
        onClick={() =>
          document
            .getElementById('projects')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="text-white font-semibold text-base px-8 py-3 rounded-full transition-all mb-10 hover:opacity-90 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
        }}
      >
        View My Work →
      </button>

      {/* Social Links */}
      <div className="flex gap-6 mb-12">

        {/* GitHub */}
        <a
          href="https://github.com/zainabvadia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition-all hover:scale-110 transform"
        >
          <FaGithub size={36} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/zainabvadia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition-all hover:scale-110 transform"
        >
          <FaLinkedin size={36} />
        </a>

        {/* Email */}
        <a
          href="mailto:zmvadia@my.yorku.ca"
          className="text-white hover:text-cyan-400 transition-all hover:scale-110 transform"
        >
          <FaEnvelope size={36} />
        </a>

      </div>

      {/* Marquee Ticker */}
      <div
        className="w-screen overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            animation: 'marquee 20s linear infinite',
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-sm tracking-widest text-gray-500 uppercase flex items-center gap-8"
            >
              {item}
              <span style={{ color: '#06b6d4' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}