export default function Leadership() {
  const roles = [
    {
      title: 'International Director',
      company: 'Lassonde Student Congress · York University',
      date: 'Sept 2025 – Present',
      location: 'Toronto, ON',
      bullets: [
        'Advised 1,000+ international students on academic guidance, cultural transition, and campus resource navigation',
        'Designed and led cross-cultural initiatives and events that grew engagement across York\'s international community'
      ],
      tags: ['Leadership', 'Event Planning', 'Community Building']
    },
    {
      title: 'Administration Director',
      company: 'MIA Muslims in Academia',
      date: 'Present',
      location: 'Toronto, ON',
      bullets: [
        'Built and managed trackers for tasks, events, and members to streamline organization operations',
        'Coordinated event logistics and maintained clear communication between executives and members'
      ],
      tags: ['Administration', 'Event Coordination', 'Operations']
    },
    {
      title: 'Volunteer',
      company: 'UofTHacks',
      date: 'Jan 2026',
      location: 'Toronto, ON',
      bullets: [
        'Supported a 36-hour hackathon with 600+ participants, coordinating logistics and enhancing the overall event experience'
      ],
      tags: ['Hackathon', 'Volunteering', 'Logistics']
    }
  ]

  const gradientText = {
    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  }

  return (
    <section id="leadership" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">Beyond the Code</p>
      <h2 className="text-4xl font-black mb-3">Leadership<span style={gradientText}>.</span></h2>
      <p className="text-gray-500 text-base mb-8">Leading, building, and giving back</p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />
        <div className="flex flex-col gap-4">
          {roles.map((role, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute left-0 top-5 w-2.5 h-2.5 rounded-full border-2 bg-black -translate-x-1/2" style={{ borderColor: '#06b6d4' }} />
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-400/30 transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-white font-bold text-lg">{role.title}</h3>
                  <span className="text-gray-500 text-sm whitespace-nowrap ml-4">{role.date}</span>
                </div>
                <p className="font-semibold text-base mb-0.5" style={gradientText}>{role.company}</p>
                <p className="text-gray-500 text-sm mb-3">{role.location}</p>
                <ul className="flex flex-col gap-1.5 mb-4">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="text-gray-300 text-sm flex gap-2">
                      <span style={{ color: '#06b6d4' }} className="shrink-0 mt-0.5">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {role.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}