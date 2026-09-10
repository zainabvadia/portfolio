export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Software Engineer Intern',
      company: 'KRAFZEN',
      date: 'June 2026 – Present',
      location: 'Remote',
      bullets: [
        'Built 10+ RESTful API endpoints in Python and FastAPI across local AI runtime, OCR, and retrieval services',
        'Engineered backend document-processing pipelines integrating AI models to parse varied engineering document formats',
        'Implemented a semantic search system using ChromaDB with scalable retrieval APIs routing queries between local and cloud'
      ],
      tags: ['Python', 'FastAPI', 'ChromaDB', 'OCR', 'RAG', 'REST APIs']
    },
    {
      title: 'AI/ML Extern',
      company: 'Extern x Pfizer',
      date: 'May 2026 – Present',
      location: 'Remote',
      bullets: [
        'Engineered Python pipelines to automate extraction and classification of pharmaceutical compliance documents',
        'Built a semantic search system using vector embeddings, reducing document lookup time by an estimated 60%',
        'Developed an LLM-powered document routing service enabling natural language queries against structured documentation'
      ],
      tags: ['Python', 'LLMs', 'RAG', 'NLP', 'LlamaIndex', 'Gemini API']
    },
    {
      title: 'IT Support & Management Associate',
      company: 'AWS Cloud Club @ York',
      date: 'Dec 2025 – Present',
      location: 'Toronto, ON',
      bullets: [
        'Deployed cloud applications on AWS using Amplify and S3, supporting infrastructure for 5+ club projects',
        'Established Git branching strategies across 5+ projects, improving deployment reliability for 10+ contributors'
      ],
      tags: ['AWS Amplify', 'Amazon S3', 'Git', 'GitHub', 'Cloud']
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
    <section id="experience" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-black mb-3">Experience<span style={gradientText}>.</span></h2>
      <p className="text-gray-500 text-base mb-8">My professional journey</p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />
        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-10">
              <div className="absolute left-0 top-5 w-2.5 h-2.5 rounded-full border-2 bg-black -translate-x-1/2" style={{ borderColor: '#06b6d4' }} />
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:border-cyan-400/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h3 className="text-white font-bold text-base md:text-lg">{exp.title}</h3>
                  <span className="text-gray-500 text-xs md:text-sm whitespace-nowrap">{exp.date}</span>
                </div>
                <p className="font-semibold text-sm md:text-base mb-0.5" style={gradientText}>{exp.company}</p>
                <p className="text-gray-500 text-xs md:text-sm mb-3">{exp.location}</p>
                <ul className="flex flex-col gap-1.5 mb-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-gray-300 text-xs md:text-sm flex gap-2">
                      <span style={{ color: '#06b6d4' }} className="shrink-0 mt-0.5">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 md:px-3 py-1 rounded-full border border-gray-700 text-gray-400">
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
