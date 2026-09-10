import { useState, useEffect } from 'react'

export default function Navbar() {
  const sections = ['about', 'experience', 'leadership', 'projects', 'skills', 'education', 'contact']
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center py-3 px-4">
      {/* Desktop navbar */}
      <div className="hidden md:flex items-center gap-2 bg-[#111111] border border-gray-800 rounded-2xl px-6 py-3">
        <span
          className="font-bold text-lg mr-6 px-2"
          style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          &lt;Zainab /&gt;
        </span>
        {sections.map(s => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
              active === s ? 'text-white border' : 'text-gray-400 hover:text-white'
            }`}
            style={active === s ? {
              background: 'linear-gradient(135deg, #06b6d420, #8b5cf620)',
              borderColor: '#8b5cf650'
            } : {}}
          >
            {s}
          </button>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          className="ml-6 px-4 py-2 text-sm font-medium"
          style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Resume
        </a>
      </div>

      {/* Mobile navbar */}
      <div className="flex md:hidden w-full items-center justify-between bg-[#111111] border border-gray-800 rounded-2xl px-4 py-3">
        <span
          className="font-bold text-base"
          style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          &lt;Zainab /&gt;
        </span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-400 hover:text-white transition-colors text-xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-[#111111] border border-gray-800 rounded-2xl p-4 flex flex-col gap-2">
          {sections.map(s => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all text-left ${
                active === s ? 'text-white border' : 'text-gray-400 hover:text-white'
              }`}
              style={active === s ? {
                background: 'linear-gradient(135deg, #06b6d420, #8b5cf620)',
                borderColor: '#8b5cf650'
              } : {}}
            >
              {s}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 text-sm font-medium"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
