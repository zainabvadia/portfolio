import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <p className="text-gray-400 text-xl mb-3 tracking-widest uppercase">Hey, I'm</p>

      <h2 className="text-8xl md:text-9xl font-black mb-6 tracking-tight uppercase">Zainab Vadia</h2>

      <span className="border border-orange-700 bg-orange-950 text-orange-300 text-base px-6 py-2.5 rounded-full mb-10">
        CS Student · Full Stack & AI
      </span>

      <p className="text-gray-400 text-2xl leading-relaxed mb-12 max-w-2xl">
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
        className="bg-orange-600 hover:bg-orange-500 text-white font-semibold text-lg px-10 py-4 rounded-full transition-colors mb-14"
      >
        View My Work →
      </button>

  <div className="flex gap-6">
  
  <a
    href="https://github.com/zainabvadia"
    target="_blank"
    className="text-white-500 hover:text-white transition-all hover:scale-110 transform"
  >
    <FaGithub size={40} />
  </a>
  <a
    href="https://linkedin.com/in/zainabvadia"
    target="_blank"
    className="text-white-500 hover:text-purple-400 transition-all hover:scale-110 transform"
  >
    <FaLinkedin size={40} />
  </a>
  </div>

    </section>
  )
}