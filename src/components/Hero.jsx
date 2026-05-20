import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <p className="text-gray-400 text-sm mb-3 tracking-widest uppercase">Hey, I'm</p>

      <h2 className="text-7xl font-black mb-5 tracking-tight uppercase">Zainab Vadia</h2>

      <span className="border border-orange-800 bg-orange-950/60 text-orange-300 text-sm px-5 py-2 rounded-full mb-8">
        CS Student · Full Stack & AI
      </span>

      <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xl">
        I'm a{' '}
        <span className="text-white font-semibold">Computer Science student</span>
        {' '}<br />
        building{' '}
        <span className="text-orange-400 font-semibold">full stack</span>
        {' '}&{' '}
        <span className="text-orange-400 font-semibold">AI</span>
        {' '}experiences that deliver{' '}
        <span className="text-orange-400 font-semibold">real impact</span>
      </p>

      <button
        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        className="bg-orange-700 hover:bg-orange-600 text-white font-semibold text-base px-8 py-3 rounded-full transition-colors mb-10"
      >
        View My Work →
      </button>

      <div className="flex gap-6">
        <a href="https://github.com/zainabvadia" target="_blank" className="text-white hover:text-orange-400 transition-all hover:scale-110 transform">
          <FaGithub size={32} />
        </a>
        <a href="https://linkedin.com/in/zainabvadia" target="_blank" className="text-white hover:text-orange-400 transition-all hover:scale-110 transform">
          <FaLinkedin size={32} />
        </a>
      </div>

    </section>
  )
}