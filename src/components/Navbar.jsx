import { useState, useEffect } from 'react'

export default function Navbar() {
const sections = ['about', 'experience', 'leadership', 'projects', 'skills', 'education', 'contact']
  const [active, setActive] = useState('about')

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
  }

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center py-6">
      <div className="flex items-center gap-3 bg-[#111111] border border-gray-800 rounded-2xl px-8 py-4">

        <span className="font-black text-white text-2xl mr-8 px-2">
          <span className="text-orange-400">&lt;</span>
          Zainab
          <span className="text-orange-400"> /&gt;</span>
        </span>

        {sections.map(s => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className={`px-6 py-3 rounded-xl text-base font-semibold capitalize transition-all ${
              active === s
                ? 'bg-[#1a1a2a] text-white border border-orange-900'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {s}
          </button>
        ))}

        <a
          href="/resume.pdf"
          target="_blank"
          className="ml-8 px-6 py-3 text-base font-semibold text-orange-400 hover:text-orange-300 transition-colors"
        >
          Resume
        </a>

      </div>
    </nav>
  )
}