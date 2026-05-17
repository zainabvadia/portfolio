export default function Navbar() {
  const sections = ['About', 'Experience', 'Leadership', 'Projects', 'Skills', 'Contact']

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase()).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg">Zainab</span>
        <div className="flex gap-6">
          {sections.map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="text-gray-500 hover:text-black transition-colors text-sm">
              {s}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}