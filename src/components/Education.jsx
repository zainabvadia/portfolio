export default function Education() {
  const gradientText = {
    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  }

  const awards = [
    { title: 'Provost\'s Award', org: 'York University · Sep 2025' },
    { title: 'York International Transfer Award ($2,500)', org: 'York University · Sep 2025' },
    { title: 'President\'s Honour List', org: 'Seneca Polytechnic · Aug 2024' },
    { title: '2nd Place — HackThe6ix', org: 'HackThe6ix · 2026' },
    { title: 'Best Use of DigitalOcean — ElleHacks', org: 'ElleHacks · 2026' },
  ]

  return (
    <section id="education" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">My Background</p>
      <h2 className="text-4xl font-black mb-10">Education<span style={gradientText}>.</span></h2>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* York */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors">
          <div className="flex justify-between items-start mb-3">
            <p className="font-semibold text-xl" style={gradientText}>York University</p>
            <span className="text-gray-500 text-sm whitespace-nowrap ml-4">2025 – 2028</span>
          </div>
          <h3 className="text-white font-bold text-xl mb-1">Honours BA in Computer Science</h3>
          <p className="text-gray-500 text-sm mb-4">Lassonde School of Engineering · Toronto, ON</p>
          <div className="flex flex-wrap gap-2">
            {['Advanced OOP', 'Data Structures & Algorithms', 'Software Design', 'Computer Organization', 'Discrete Math'].map(c => (
              <span key={c} className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-400">{c}</span>
            ))}
          </div>
        </div>

        {/* Seneca */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors">
          <div className="flex justify-between items-start mb-3">
            <p className="font-semibold text-lg" style={gradientText}>Seneca Polytechnic</p>
            <span className="text-gray-500 text-sm whitespace-nowrap ml-4">2023 – 2025</span>
          </div>
          <h3 className="text-white font-bold text-xl mb-1">Diploma in Computer Programming</h3>
          <p className="text-gray-500 text-sm mb-4">Toronto, ON · GPA 3.7/4.0</p>
          <div className="flex flex-wrap gap-2">
            {['President\'s Honour List', 'Dean\'s List', 'Databases'].map(c => (
              <span key={c} className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-400">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors">
        <p className="text-xl tracking-widest uppercase font-semibold mb-5" style={gradientText}>Awards & Recognition</p>
        <div className="grid grid-cols-2 gap-3">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col border-b border-white/5 pb-3 last:border-0">
              <p className="text-white font-medium text-l">{award.title}</p>
              <p className="text-gray-500 text-xs">{award.org}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}