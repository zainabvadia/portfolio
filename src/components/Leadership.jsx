export default function Leadership() {
  const roles = [
    {
      title: 'International Director',
      company: 'Lassonde Student Congress · York University',
      date: 'Sept 2025 – Present',
      location: 'Toronto, ON',
      bullets: [
        'Supported 1,000+ international students with academic guidance, cultural transition support, and campus resource navigation',
        'Led initiatives and events fostering cross-cultural engagement, community building, and an inclusive student environment'
      ],
      tags: ['Leadership', 'Event Planning', 'Community Building']
    },
    {
      title: 'Administration Director',
      company: 'MIA Muslims in Academia',
      date: 'Present',
      location: 'Toronto, ON',
      bullets: [
        'Created and managed trackers for tasks, events, and members to streamline organization operations',
        'Coordinated event logistics and maintained clear communication between executives and members',
        'Tracked and evaluated event successes to improve planning and execution for future initiatives'
      ],
      tags: ['Administration', 'Event Coordination', 'Operations']
    },
    {
      title: 'Volunteer',
      company: 'UofTHacks',
      date: 'Jan 2026',
      location: 'Toronto, ON',
      bullets: [
        'Helped support a 36 hour hackathon with over 600 participants where students collaborated on innovative tech projects, coordinated logistics, and enhanced the overall event experience'
      ],
      tags: ['Hackathon', 'Volunteering', 'Logistics']
    }
  ]

  return (
    <section id="leadership" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <p className="text-gray-500 text-base tracking-widest uppercase mb-3">Beyond the Code</p>
      <h2 className="text-2xl font-black mb-4">Leadership<span className="text-orange-400">.</span></h2>
      <p className="text-gray-500 text-sm mb-8">Leading, building, and giving back</p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />
        <div className="flex flex-col gap-6">
          {roles.map((role, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-orange-400 bg-black -translate-x-1/2" />
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-400/30 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold text-xl">{role.title}</h3>
                  <span className="text-gray-500 text-sm whitespace-nowrap ml-4">{role.date}</span>
                </div>
                <p className="text-orange-400 font-medium text-xl mb-1">{role.company}</p>
                <p className="text-gray-600 text-sm mb-5">{role.location}</p>
                <ul className="flex flex-col gap-3 mb-7">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-orange-400 mt-1">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span key={tag} className="text-sm px-4 py-1.5 rounded-full border border-gray-700 text-gray-400">
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