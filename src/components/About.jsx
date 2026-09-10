export default function About() {
  const gradientText = {
    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  }

  const cards = [
    { title: 'Build', desc: 'From idea to deployment, end to end', color: 'border-cyan-500/30 bg-cyan-500/10', text: 'text-cyan-400' },
    { title: 'Learn', desc: 'Obsessively curious, always leveling up', color: 'border-blue-500/30 bg-blue-500/10', text: 'text-blue-400' },
    { title: 'Impact', desc: 'Technology should make lives better', color: 'border-purple-500/30 bg-purple-500/10', text: 'text-purple-400' }
  ]

  const bullets = [
    { emoji: '📚', label: 'Currently', value: 'Building more projects · diving deeper into AI · trying to grind more LeetCode' },
    { emoji: '🎯', label: 'Goals', value: 'Land an internship · build more projects · read more · discover new passions' },
    { emoji: '🎮', label: 'Hobbies', value: 'Reading · binge watching shows & movies' },
    { emoji: '⚡', label: 'Fun Fact', value: 'I\'ve read over 210 books and can do a surprising amount of mental math' },
    { emoji: '✅', label: 'Availability', value: 'Open to Winter 2027 internships' },
  ]

  return (
    <section id="about" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <h2 className="text-3xl font-black mb-10">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">/ Bio</p>
          <p className="text-white leading-relaxed text-base md:text-lg">
            CS student at{' '}
            <span style={gradientText}>York University</span>
            {' '}going into my third year. I've won{' '}
            <span style={gradientText}>two hackathons</span>
            , built{' '}
            <span style={gradientText}>AI systems for Pfizer</span>
            , and shipped products across{' '}
            <span style={gradientText}>mobile, full stack, and data</span>
            . Oh, and I've read{' '}
            <span style={gradientText}>210+ books</span>
            {' '}because curiosity isn't just something I code with. Currently seeking{' '}
            <span style={gradientText}>Fall 2026 internships</span>
            {' '}to build something that actually matters.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">/ Quick Facts</p>
          <ul className="flex flex-col gap-3 md:gap-4">
            {bullets.map((b, i) => (
              <li key={i} className="text-gray-300 text-sm md:text-base flex gap-2">
                <span>{b.emoji}</span>
                <span>
                  <span style={gradientText} className="font-semibold">{b.label}:</span>
                  {' '}{b.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {cards.map((card) => (
          <div key={card.title} className={`backdrop-blur-sm border rounded-2xl p-6 md:p-8 ${card.color}`}>
            <p className={`text-xs tracking-widest uppercase font-semibold mb-3 ${card.text}`}>{card.title}</p>
            <p className="text-gray-300 text-sm md:text-base">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
