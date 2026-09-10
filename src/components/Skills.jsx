import { useState } from 'react'
import {
  FaJava, FaPython, FaJs, FaReact, FaNode, FaDocker,
  FaGit, FaDatabase, FaHtml5,
  FaUsers, FaLightbulb, FaClock, FaComments, FaAws
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiSpringboot,
  SiPostgresql, SiMongodb, SiGooglecloud,
  SiVercel, SiExpress, SiFastapi,
  SiJira, SiFirebase, SiCplusplus, SiMysql
} from 'react-icons/si'

const categories = [
  { id: 'all', label: 'All', icon: '⟨/⟩' },
  { id: 'languages', label: 'Languages', icon: '{}' },
  { id: 'frontend', label: 'Frontend', icon: '◻' },
  { id: 'backend', label: 'Backend', icon: '⚙' },
  { id: 'database', label: 'Database', icon: '🗄' },
  { id: 'tools', label: 'Tools', icon: '🔧' },
  { id: 'soft', label: 'Soft Skills', icon: '🤝' },
]

const skills = [
  // Languages
  { name: 'Python', desc: 'AI pipelines, backend services, and data processing', icon: <FaPython size={22} color="#3776ab" />, category: 'languages', color: 'from-blue-500 to-blue-700', favorite: true },
  { name: 'JavaScript', desc: 'Core language for web development across frontend and backend', icon: <FaJs size={22} color="#f7df1e" />, category: 'languages', color: 'from-yellow-500 to-yellow-700' },
  { name: 'TypeScript', desc: 'Type-safe JavaScript for scalable applications', icon: <SiTypescript size={22} color="#3178c6" />, category: 'languages', color: 'from-blue-500 to-blue-700' },
  { name: 'Java', desc: 'Backend development with Spring Boot and REST APIs', icon: <FaJava size={22} color="#f89820" />, category: 'languages', color: 'from-orange-500 to-orange-700' },
  { name: 'C/C++', desc: 'Systems programming and algorithm implementation', icon: <SiCplusplus size={22} color="#00599c" />, category: 'languages', color: 'from-blue-600 to-blue-800' },
  { name: 'SQL', desc: 'Database querying and management across multiple systems', icon: <FaDatabase size={22} color="#336791" />, category: 'languages', color: 'from-gray-500 to-gray-700' },
  { name: 'HTML/CSS', desc: 'Markup and styling for modern web interfaces', icon: <FaHtml5 size={22} color="#e34f26" />, category: 'languages', color: 'from-orange-400 to-orange-600' },

  // Frontend
  { name: 'React', desc: 'Building dynamic and responsive user interfaces', icon: <FaReact size={22} color="#61dafb" />, category: 'frontend', color: 'from-cyan-400 to-cyan-600', favorite: true },
  { name: 'Next.js', desc: 'Full-stack React framework for production web apps', icon: <SiNextdotjs size={22} color="#ffffff" />, category: 'frontend', color: 'from-gray-600 to-gray-800' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid UI development', icon: <SiTailwindcss size={22} color="#38bdf8" />, category: 'frontend', color: 'from-sky-400 to-sky-600' },

  // Backend
  { name: 'Node.js', desc: 'Efficient backend runtime for scalable full-stack projects', icon: <FaNode size={22} color="#339933" />, category: 'backend', color: 'from-green-500 to-green-700', favorite: true },
  { name: 'FastAPI', desc: 'Modern Python framework for high-performance APIs', icon: <SiFastapi size={22} color="#009688" />, category: 'backend', color: 'from-teal-400 to-teal-600' },
  { name: 'Spring Boot', desc: 'Java framework for building production-grade backend APIs', icon: <SiSpringboot size={22} color="#6db33f" />, category: 'backend', color: 'from-green-400 to-green-600' },
  { name: 'Express.js', desc: 'Lightweight Node.js framework for REST APIs and middleware', icon: <SiExpress size={22} color="#ffffff" />, category: 'backend', color: 'from-gray-500 to-gray-700' },

  // Database
  { name: 'PostgreSQL', desc: 'Relational database for structured data and complex queries', icon: <SiPostgresql size={22} color="#336791" />, category: 'database', color: 'from-blue-600 to-blue-800', favorite: true },
  { name: 'MongoDB', desc: 'NoSQL database for flexible document-based storage', icon: <SiMongodb size={22} color="#47a248" />, category: 'database', color: 'from-green-500 to-green-700' },
  { name: 'MySQL', desc: 'Relational database for structured data management', icon: <SiMysql size={22} color="#4479a1" />, category: 'database', color: 'from-blue-500 to-blue-700' },
  { name: 'Firebase', desc: 'Real-time database and auth for mobile and web apps', icon: <SiFirebase size={22} color="#ffca28" />, category: 'database', color: 'from-yellow-400 to-orange-500' },
  { name: 'ChromaDB', desc: 'Vector database for semantic search and RAG systems', icon: <FaDatabase size={22} color="#ff6b6b" />, category: 'database', color: 'from-red-400 to-red-600' },

  // Tools
  { name: 'Git', desc: 'Version control for all projects and team collaboration', icon: <FaGit size={22} color="#f05032" />, category: 'tools', color: 'from-orange-500 to-red-600', favorite: true },
  { name: 'Docker', desc: 'Containerization for consistent deployment environments', icon: <FaDocker size={22} color="#2496ed" />, category: 'tools', color: 'from-blue-400 to-blue-600' },
  { name: 'AWS', desc: 'Cloud infrastructure including Amplify, S3, and SageMaker', icon: <FaAws size={22} color="#ff9900" />, category: 'tools', color: 'from-orange-400 to-orange-600' },
  { name: 'Google Cloud', desc: 'Cloud infrastructure for scalable app deployment', icon: <SiGooglecloud size={22} color="#4285f4" />, category: 'tools', color: 'from-blue-400 to-blue-600' },
  { name: 'Vercel', desc: 'Deployment platform for frontend and full-stack apps', icon: <SiVercel size={22} color="#ffffff" />, category: 'tools', color: 'from-gray-600 to-gray-800' },
  { name: 'Jira', desc: 'Project management and issue tracking for team workflows', icon: <SiJira size={22} color="#0052cc" />, category: 'tools', color: 'from-blue-600 to-blue-800' },

  // Soft Skills
  { name: 'Communication', desc: 'Clear written and verbal communication across teams', icon: <FaComments size={22} color="#a855f7" />, category: 'soft', color: 'from-purple-500 to-purple-700', favorite: true },
  { name: 'Leadership', desc: 'Leading teams, directing initiatives, and driving results', icon: <FaUsers size={22} color="#f97316" />, category: 'soft', color: 'from-orange-400 to-orange-600' },
  { name: 'Problem Solving', desc: 'Breaking down complex problems into workable solutions', icon: <FaLightbulb size={22} color="#eab308" />, category: 'soft', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Time Management', desc: 'Balancing academics, projects, and extracurriculars effectively', icon: <FaClock size={22} color="#22c55e" />, category: 'soft', color: 'from-green-400 to-green-600' },
  { name: 'Teamwork', desc: 'Collaborating across hackathons, clubs, and class projects', icon: <FaUsers size={22} color="#38bdf8" />, category: 'soft', color: 'from-sky-400 to-sky-600' },
  { name: 'Adaptability', desc: 'Quickly picking up new stacks, tools, and environments', icon: <FaLightbulb size={22} color="#fb923c" />, category: 'soft', color: 'from-orange-300 to-orange-500' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages')

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  const featured = filtered.find(s => s.favorite) || filtered[0]
  const categoryLabel = categories.find(c => c.id === activeCategory)?.label || 'Languages'

  const gradientText = {
    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  }

  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">What I Know</p>
      <h2 className="text-3xl font-black mb-6">Skills<span style={gradientText}>.</span></h2>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-44 border-b md:border-b-0 md:border-r border-white/10 p-3 shrink-0">
            <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 mb-3 flex items-center gap-2">
              <span className="text-gray-500 text-xs">🔍</span>
              <span className="text-gray-600 text-xs">Search</span>
            </div>
            <p className="text-gray-600 text-xs tracking-widest uppercase mb-2">Categories</p>
            <div className="flex flex-row flex-wrap md:flex-col gap-1">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                    activeCategory === cat.id
                      ? 'text-white border'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={activeCategory === cat.id ? {
                    background: 'linear-gradient(135deg, #06b6d420, #8b5cf620)',
                    borderColor: '#8b5cf650'
                  } : {}}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 p-4 overflow-auto">
            <h3 className="text-white text-base font-bold mb-3 pb-2 border-b border-white/10">{categoryLabel}</h3>

            {featured && (
              <div className="mb-4">
                <p className="text-xs font-semibold mb-1" style={gradientText}>{categoryLabel} Favorite</p>
                <h4 className="text-white text-sm font-bold mb-1">{featured.name}</h4>
                <p className="text-gray-500 text-xs mb-2">{featured.desc}</p>
                <div className={`bg-gradient-to-br ${featured.color} rounded-xl h-20 flex items-center justify-center`}>
                  <div className="text-white opacity-80 scale-150">
                    {featured.icon}
                  </div>
                </div>
              </div>
            )}

            <p className="text-white text-xs font-bold mb-2">{categoryLabel} Skills</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {filtered.map((skill, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 border-b border-white/5 hover:bg-white/5 transition-colors">
                  <div className="mt-0.5 shrink-0">{skill.icon}</div>
                  <div>
                    <p className="text-white font-semibold text-xs">{skill.name}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{skill.desc}</p>
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