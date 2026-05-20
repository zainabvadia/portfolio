import { FaGithub, FaExternalLinkAlt, FaThumbtack, FaYoutube } from 'react-icons/fa'

const projects = [
  {
    title: 'Packwise',
    desc: 'AI-powered travel packing companion for iOS and Android. Generates personalized packing lists, enforces airline rules, coordinates group trips, and manages travel documents.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Gemini API', 'Swift', 'C++'],
    github: 'https://github.com/Cool-1-2-3-4-5/Travel-helper',
    live: null,
    youtube: 'https://www.youtube.com/watch?v=C6inP6uDqnc',
    devpost: 'https://devpost.com/software/packwise-jmgtqi',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/004/405/547/datas/medium.png',
    pinned: true,
    award: '🏆 2nd Place — HackThe6ix'
  },
  {
    title: 'JustTalk',
    desc: 'Full-stack speech analytics platform for real-time communication analysis. Generates transcripts with percentage-based feedback scores for clarity, filler words, and speech consistency.',
    tags: ['TypeScript', 'Next.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'Gemini API'],
    github: 'https://github.com/zainabvadia/JustTalk',
    live: 'https://justtalk-phi.vercel.app/',
    youtube: null,
    devpost: 'https://devpost.com/software/just-talk-o9jm4n',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/004/227/666/datas/medium.png',
    pinned: true,
    award: '🏆 Best Use of DigitalOcean — ElleHacks'
  },
  {
    title: 'LEGO Collection',
    desc: 'Full-stack web application to manage and visualize LEGO collections. Features RESTful APIs, middleware, server-rendered views, and role-based access control with bcrypt authentication.',
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'HTML/CSS'],
    github: 'https://github.com/zainabvadia/Lego-Collection',
    live: 'https://web-322-lego-sets-wceo.vercel.app/',
    youtube: null,
    devpost: null,
    image: '/images/lego_collection.png',
    pinned: true,
    award: null
  },
  {
    title: 'PricePulse',
    desc: 'Inflation insight dashboard that visualizes Canadian grocery price trends. Features interactive search, dynamic Altair charts, historical price data, and direct store links.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Altair', 'CSV'],
    github: 'https://github.com/zainabvadia/PricePulse',
    live: null,
    youtube: null,
    devpost: null,
    image: '/images/price_pulse.webp',
    pinned: false,
    award: null
  },
  {
    title: 'Seneca Deliveries',
    desc: 'C-based delivery routing system that assigns shipments to trucks using capacity constraints and shortest-path routing on a fixed 25x25 grid map. Built for SFT221 Software Testing.',
    tags: ['C', 'Algorithms', 'Data Structures', 'Unit Testing'],
    github: 'https://github.com/zainabvadia/Seneca_Deliveries',
    live: null,
    youtube: null,
    devpost: null,
    image: '/images/seneca_deliveries.png',
    pinned: false,
    award: null
  },
  {
    title: 'Music Web App',
    desc: 'A music-themed web application with a clean modern interface featuring artist pages, song listings, and music discovery.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/zainabvadia/Music-Web-App',
    live: 'https://music-web-app-snowy.vercel.app/',
    youtube: null,
    devpost: null,
    image: '/images/music_app.png',
    pinned: false,
    award: null
  }
]

const ProjectCard = ({ project, featured }) => (
  <div className={`bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all ${
    featured ? 'border-orange-400/20 hover:border-orange-400/50' : 'border-white/10 hover:border-orange-400/30'
  }`}>
    <div className="bg-[#1a1a1a] h-64 flex items-center justify-center overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
        />
      ) : (
        <span className="text-6xl font-black text-gray-700">{project.title[0]}</span>
      )}
    </div>

    <div className="p-8 flex flex-col flex-grow">
      {project.award && (
        <span className="text-sm text-orange-400 font-semibold mb-3">{project.award}</span>
      )}

      <h3 className="text-white font-bold text-2xl mb-3">{project.title}</h3>
      <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">{project.desc}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="text-sm px-3 py-1.5 rounded-full border border-gray-700 text-gray-400">{tag}</span>
        ))}
      </div>

      <div className="flex gap-5 items-center">
        {project.github && (
          <a href={project.github} target="_blank" className="text-gray-500 hover:text-white transition-colors" title="GitHub">
            <FaGithub size={24} />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" className="text-gray-500 hover:text-orange-400 transition-colors" title="Live Demo">
            <FaExternalLinkAlt size={20} />
          </a>
        )}
        {project.youtube && (
          <a href={project.youtube} target="_blank" className="text-gray-500 hover:text-red-500 transition-colors" title="Watch Demo">
            <FaYoutube size={26} />
          </a>
        )}
        {project.devpost && (
          <a href={project.devpost} target="_blank" className="text-gray-500 hover:text-blue-400 transition-colors text-sm font-semibold" title="Devpost">
            Devpost ↗
          </a>
        )}
      </div>
    </div>
  </div>
)

export default function Projects() {
  const pinned = projects.filter(p => p.pinned)
  const others = projects.filter(p => !p.pinned)

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <p className="text-gray-500 text-base tracking-widest uppercase mb-3">What I've Built</p>
      <h2 className="text-6xl font-black mb-4">Projects<span className="text-orange-400">.</span></h2>
      <p className="text-gray-500 text-lg mb-16">A mix of hackathon wins, personal projects, and everything in between</p>

      <div className="flex items-center gap-3 mb-8">
        <FaThumbtack className="text-orange-400" size={16} />
        <p className="text-orange-400 text-sm tracking-widest uppercase font-semibold">Featured</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {pinned.map(p => <ProjectCard key={p.title} project={p} featured={true} />)}
      </div>

      <div className="flex items-center gap-3 mb-8">
        <p className="text-gray-500 text-sm tracking-widest uppercase font-semibold">Other Projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {others.map(p => <ProjectCard key={p.title} project={p} featured={false} />)}
      </div>
    </section>
  )
}