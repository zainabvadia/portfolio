import { useState } from 'react'
import {
  FaJava, FaPython, FaJs, FaReact, FaNode, FaDocker,
  FaGit, FaDatabase, FaHtml5,
  FaUsers, FaLightbulb, FaClock, FaComments
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiSpringboot,
  SiPostgresql, SiMongodb, SiRedis, SiGooglecloud,
  SiVercel, SiFlutter, SiDart, SiExpress, SiFastapi,
  SiDjango, SiJira, SiFirebase, SiCplusplus
} from 'react-icons/si'

const categories = [
  { id: 'all', label: 'All', icon: '⟨/⟩' },
  { id: 'languages', label: 'Languages', icon: '{}' },
  { id: 'frontend', label: 'Frontend', icon: '◻' },
  { id: 'backend', label: 'Backend', icon: '⚙' },
  { id: 'database', label: 'Database', icon: '🗄' },
  { id: 'tools', label: 'Tools', icon: '🔧' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'soft', label: 'Soft Skills', icon: '🤝' },
]

const skills = [
  // Languages
  { name: 'JavaScript', desc: 'Core language for web development across frontend and backend', icon: <FaJs size={24} color="#f7df1e" />, category: 'languages', color: 'from-yellow-500 to-yellow-700', favorite: true },
  { name: 'Python', desc: 'Used for data analysis, AI pipelines, and backend services', icon: <FaPython size={24} color="#3776ab" />, category: 'languages', color: 'from-blue-500 to-blue-700' },
  { name: 'Java', desc: 'Primary language for backend development with Spring Boot', icon: <FaJava size={24} color="#f89820" />, category: 'languages', color: 'from-orange-500 to-orange-700' },
  { name: 'C/C++', desc: 'Systems programming and algorithm implementation', icon: <SiCplusplus size={24} color="#00599c" />, category: 'languages', color: 'from-blue-600 to-blue-800' },
  { name: 'HTML/CSS', desc: 'Markup and styling for modern web interfaces', icon: <FaHtml5 size={24} color="#e34f26" />, category: 'languages', color: 'from-orange-400 to-orange-600' },
  { name: 'Dart', desc: 'Primary language for Flutter mobile development', icon: <SiDart size={24} color="#0175c2" />, category: 'languages', color: 'from-blue-400 to-blue-600' },
  { name: 'SQL', desc: 'Database querying and management across multiple systems', icon: <FaDatabase size={24} color="#336791" />, category: 'languages', color: 'from-gray-500 to-gray-700' },

  // Frontend
  { name: 'React', desc: 'Building dynamic and responsive user interfaces', icon: <FaReact size={24} color="#61dafb" />, category: 'frontend', color: 'from-cyan-400 to-cyan-600', favorite: true },
  { name: 'Next.js', desc: 'Full-stack React framework for production web apps', icon: <SiNextdotjs size={24} color="#ffffff" />, category: 'frontend', color: 'from-gray-600 to-gray-800' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid UI development', icon: <SiTailwindcss size={24} color="#38bdf8" />, category: 'frontend', color: 'from-sky-400 to-sky-600' },
  { name: 'TypeScript', desc: 'Type-safe JavaScript for scalable frontend applications', icon: <SiTypescript size={24} color="#3178c6" />, category: 'frontend', color: 'from-blue-500 to-blue-700' },

  // Backend
  { name: 'Node.js', desc: 'Efficient backend runtime for scalable full-stack projects', icon: <FaNode size={24} color="#339933" />, category: 'backend', color: 'from-green-500 to-green-700', favorite: true },
  { name: 'Spring Boot', desc: 'Java framework for building production-grade backend APIs', icon: <SiSpringboot size={24} color="#6db33f" />, category: 'backend', color: 'from-green-400 to-green-600' },
  { name: 'Express.js', desc: 'Lightweight Node.js framework for REST APIs and middleware', icon: <SiExpress size={24} color="#ffffff" />, category: 'backend', color: 'from-gray-500 to-gray-700' },
  { name: 'FastAPI', desc: 'Modern Python framework for high-performance APIs', icon: <SiFastapi size={24} color="#009688" />, category: 'backend', color: 'from-teal-400 to-teal-600' },
  { name: 'Django', desc: 'Python web framework for scalable backend systems', icon: <SiDjango size={24} color="#092e20" />, category: 'backend', color: 'from-green-800 to-green-950' },

  // Database
  { name: 'PostgreSQL', desc: 'Relational database for structured data and complex queries', icon: <SiPostgresql size={24} color="#336791" />, category: 'database', color: 'from-blue-600 to-blue-800', favorite: true },
  { name: 'MongoDB', desc: 'NoSQL database for flexible document-based storage', icon: <SiMongodb size={24} color="#47a248" />, category: 'database', color: 'from-green-500 to-green-700' },
  { name: 'Redis', desc: 'In-memory data store for caching and real-time processing', icon: <SiRedis size={24} color="#dc382d" />, category: 'database', color: 'from-red-500 to-red-700' },
  { name: 'Firebase', desc: 'Real-time database and auth for mobile and web apps', icon: <SiFirebase size={24} color="#ffca28" />, category: 'database', color: 'from-yellow-400 to-orange-500' },

  // Tools
  { name: 'Git', desc: 'Version control for all projects and team collaboration', icon: <FaGit size={24} color="#f05032" />, category: 'tools', color: 'from-orange-500 to-red-600', favorite: true },
  { name: 'Docker', desc: 'Containerization for consistent deployment environments', icon: <FaDocker size={24} color="#2496ed" />, category: 'tools', color: 'from-blue-400 to-blue-600' },
  { name: 'Vercel', desc: 'Deployment platform for frontend and full-stack apps', icon: <SiVercel size={24} color="#ffffff" />, category: 'tools', color: 'from-gray-600 to-gray-800' },
  { name: 'Google Cloud', desc: 'Cloud infrastructure for scalable app deployment', icon: <SiGooglecloud size={24} color="#4285f4" />, category: 'tools', color: 'from-blue-400 to-blue-600' },
  { name: 'Jira', desc: 'Project management and issue tracking for team workflows', icon: <SiJira size={24} color="#0052cc" />, category: 'tools', color: 'from-blue-600 to-blue-800' },

  // Mobile
  { name: 'Flutter', desc: 'Cross-platform mobile development for iOS and Android', icon: <SiFlutter size={24} color="#02569b" />, category: 'mobile', color: 'from-blue-500 to-blue-700', favorite: true },
  { name: 'Dart', desc: 'Primary language powering Flutter applications', icon: <SiDart size={24} color="#0175c2" />, category: 'mobile', color: 'from-blue-400 to-blue-600' },

  // Soft Skills
  { name: 'Communication', desc: 'Clear written and verbal communication across teams', icon: <FaComments size={24} color="#a855f7" />, category: 'soft', color: 'from-purple-500 to-purple-700', favorite: true },
  { name: 'Leadership', desc: 'Leading teams, directing initiatives, and driving results', icon: <FaUsers size={24} color="#f97316" />, category: 'soft', color: 'from-orange-400 to-orange-600' },
  { name: 'Problem Solving', desc: 'Breaking down complex problems into workable solutions', icon: <FaLightbulb size={24} color="#eab308" />, category: 'soft', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Time Management', desc: 'Balancing academics, projects, and extracurriculars effectively', icon: <FaClock size={24} color="#22c55e" />, category: 'soft', color: 'from-green-400 to-green-600' },
  { name: 'Teamwork', desc: 'Collaborating across hackathons, clubs, and class projects', icon: <FaUsers size={24} color="#38bdf8" />, category: 'soft', color: 'from-sky-400 to-sky-600' },
  { name: 'Adaptability', desc: 'Quickly picking up new stacks, tools, and environments', icon: <FaLightbulb size={24} color="#fb923c" />, category: 'soft', color: 'from-orange-300 to-orange-500' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  const featured = filtered.find(s => s.favorite) || filtered[0]
  const categoryLabel = categories.find(c => c.id === activeCategory)?.label || 'All'

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <p className="text-gray-500 text-base tracking-widest uppercase mb-3">What I Know</p>
      <h2 className="text-6xl font-black mb-16">Skills<span className="text-orange-400">.</span></h2>

      {/* Mac window wrapper */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">

        {/* Mac traffic lights */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-56 border-r border-white/10 bg-white/3 p-4 shrink-0">
            <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 mb-6 flex items-center gap-2">
              <span className="text-gray-500 text-sm">🔍</span>
              <span className="text-gray-600 text-sm">Search</span>
            </div>

            <p className="text-gray-600 text-xs tracking-widest uppercase mb-3">Categories</p>

            <div className="flex flex-col gap-1">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                    activeCategory === cat.id
                      ? 'bg-orange-400/20 text-orange-400 border border-orange-400/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-8 overflow-auto">
            <h3 className="text-white text-3xl font-bold mb-6 pb-4 border-b border-white/10">{categoryLabel}</h3>

            {/* Featured skill */}
            {featured && (
              <div className="mb-8">
                <p className="text-orange-400 text-sm font-semibold mb-2">{categoryLabel} Favorite</p>
                <h4 className="text-white text-2xl font-bold mb-1">{featured.name}</h4>
                <p className="text-gray-500 text-sm mb-4">{featured.desc}</p>
                <div className={`bg-gradient-to-br ${featured.color} rounded-xl h-40 flex items-center justify-center`}>
                  <div className="text-white opacity-80 scale-150">
                    {featured.icon}
                  </div>
                </div>
              </div>
            )}

            {/* Skills grid */}
            <p className="text-white text-xl font-bold mb-4">{categoryLabel} Skills</p>
            <div className="grid grid-cols-2 gap-0">
              {filtered.map((skill, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                  <div className="mt-1 shrink-0">{skill.icon}</div>
                  <div>
                    <p className="text-white font-semibold text-base">{skill.name}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}