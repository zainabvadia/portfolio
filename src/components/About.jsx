export default function About() {
  const cards = [
    { 
      title: 'Build', 
      desc: 'From idea to deployment, end to end',
      color: 'border-orange-500/30 bg-orange-500/10',
      text: 'text-orange-400'
    },
    { 
      title: 'Learn', 
      desc: 'Obsessively curious, always leveling up',
      color: 'border-blue-500/30 bg-blue-500/10',
      text: 'text-blue-400'
    },
    { 
      title: 'Impact', 
      desc: 'Technology should make lives better',
      color: 'border-purple-500/30 bg-purple-500/10',
      text: 'text-purple-400'
    }
  ]

  const bullets = [
    '📚 Currently: Building more projects · diving deeper into AI · grinding LeetCode',
    '🎯 Goals: Land an internship · build more projects · read more · discover new passions',
    '🎮 Hobbies: Reading · binge watching shows & movies',
    '⚡ Fun Fact: I\'ve read over 100 books and can do a surprising amount of mental math',
    '✅ Availability: Open to Fall 2026 internships'
  ]

  return (
    <section id="about" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">Who I Am</p>
      <h2 className="text-3xl font-black mb-10">About Me</h2>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">/ Bio</p>
          <p className="text-gray-400 leading-relaxed text-base">
            Hi, my name is{' '}
            <span className="text-white font-bold">Zainab</span>. I'm a{' '}
            <span className="text-white font-bold">Computer Science student</span>
            {' '}at York University with a passion for{' '}
            <span className="text-white font-bold">full stack development</span>
            {' '}and{' '}
            <span className="text-white font-bold">artificial intelligence</span>
            . I've built{' '}
            <span className="text-white font-bold">award-winning projects</span>
            , won{' '}
            <span className="text-white font-bold">hackathons</span>
            , and worked across several different tech stacks. I believe the best developers aren't just coders but are{' '}
            <span className="text-white font-bold">problem solvers</span>
            ,{' '}
            <span className="text-white font-bold">communicators</span>
            , and{' '}
            <span className="text-white font-bold">builders</span>
            . I'm constantly learning, constantly building, and constantly pushing myself to create software that delivers{' '}
            <span className="text-white font-bold">real impact</span>
            . Currently seeking{' '}
            <span className="text-white font-bold">internship opportunities</span>
            {' '}to bring my skills to a team that's building something meaningful.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">/ Quick Facts</p>
          <ul className="flex flex-col gap-5">
            {bullets.map((b, i) => (
              <li key={i} className="text-gray-300 text-base">{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.title} className={`backdrop-blur-sm border rounded-2xl p-8 ${card.color}`}>
            <p className={`text-xs tracking-widest uppercase font-semibold mb-3 ${card.text}`}>{card.title}</p>
            <p className="text-gray-300 text-base">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}