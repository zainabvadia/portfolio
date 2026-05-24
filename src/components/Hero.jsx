import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const gradientText = {
    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <p className="text-gray-400 text-base mb-3 tracking-widest uppercase">Hey, I'm</p>

      <h2 className="text-8xl font-black mb-5 tracking-tight uppercase">Zainab Vadia</h2>

      <span className="border text-base px-5 py-2 rounded-full mb-8"
        style={{ borderColor: '#8b5cf6', backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#c4b5fd' }}>
        CS Student · Full Stack & AI
      </span>

      <div className="text-2xl leading-relaxed mb-10 max-w-2xl text-center">
  <p className="text-gray-400 mb-2">
    I'm a <span className="text-white font-semibold">Computer Science student and</span>
  </p>
    <div>
      <span className="text-gray-400">I'm into </span>
      <TypeAnimation
        sequence={[
          'software development',
          2000,
          'full stack development',
          2000,
          'web development',
          2000,
          'artificial intelligence',
          2000,
          'building real products',
          2000,
          'solving hard problems',
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        style={{ ...gradientText, fontWeight: '600' }}
      />
    </div>
  </div>

      <button
        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        className="text-white font-semibold text-base px-8 py-3 rounded-full transition-all mb-10 hover:opacity-90 hover:scale-105"
        style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
      >
        View My Work →
      </button>

      <div className="flex gap-6">
        <a  
          href="https://github.com/zainabvadia"
          target="_blank"
          className="text-white hover:text-cyan-400 transition-all hover:scale-110 transform"
        >
          <FaGithub size={36} />
        </a>
        
        <a
          href="https://linkedin.com/in/zainabvadia"
          target="_blank"
          className="text-white hover:text-cyan-400 transition-all hover:scale-110 transform"
        >
          <FaLinkedin size={36} />
        </a>
      </div>

    </section>
  )
}