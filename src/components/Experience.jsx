export default function Experience() {
  const experiences = [
    {
  title: 'Full Stack Software Engineer Intern',
  company: 'KRAFZEN',
  date: 'June 2026 – Present',
  location: 'Remote',
  bullets: [
    'Developing and maintaining full stack web applications using React.js, Node.js, and Python to deliver scalable solutions',
    'Collaborating with a global team to build SaaS products and AI-driven tools for engineering and design workflows',
    'Participating in code reviews, debugging, and application deployment to ensure stability and smooth release processes'
  ],
  tags: ['React.js', 'Node.js', 'Python', 'SaaS', 'AI', 'Full Stack']
    },
    {
      title: 'AI/ML Extern',
      company: 'Extern x Pfizer',
      date: 'May 2026 – Present',
      location: 'Remote',
      bullets: [
        'Developing an AI-powered document intelligence system using Python, OCR, and LLMs to automate extraction and classification of pharmaceutical compliance documents',
        'Building a RAG-based smart search system integrating open-source AI models to enable instant retrieval across thousands of compliance documents',
        'Implementing automated document routing and a chatbot interface using NLP to streamline Pfizer supply chain documentation workflows'
      ],
      tags: ['Python', 'OCR', 'LLMs', 'RAG', 'NLP', 'Google Colab', 'LlamaIndex']
    },
    {
      title: 'Back End / Front End Developer',
      company: 'Cognition In Action @ York University',
      date: 'Mar 2026 – Present',
      location: 'Toronto, ON · On-site',
      bullets: ['Recently joined — contributing to frontend and backend development initiatives'],
      tags: ['React', 'Node.js', 'JavaScript']
    },
    {
      title: 'IT Support & Management Associate',
      company: 'AWS Cloud Club @ York',
      date: 'Dec 2025 – Present',
      location: 'Toronto, ON',
      bullets: [
        'Built and deployed cloud applications including static websites with AWS Amplify, scalable storage systems with Amazon S3, and introductory ML pipelines with Amazon SageMaker',
        'Maintained and organized GitHub repositories for multi-stage projects, ensuring clean version control and reproducible deployments'
      ],
      tags: ['AWS Amplify', 'Amazon S3', 'SageMaker', 'GitHub']
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
      <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">My Journey</p>
      <h2 className="text-4xl font-black mb-3">Experience<span style={gradientText}>.</span></h2>
      <p className="text-gray-500 text-base mb-10">My professional journey</p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full border-2 bg-black -translate-x-1/2" style={{ borderColor: '#06b6d4' }} />
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold text-2xl">{exp.title}</h3>
                  <span className="text-gray-500 text-lg whitespace-nowrap ml-4">{exp.date}</span>
                </div>
                <p className="font-semibold text-xl mb-1" style={gradientText}>{exp.company}</p>
                <p className="text-gray-500 text-lg mb-5">{exp.location}</p>
                <ul className="flex flex-col gap-3 mb-7">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-gray-300 text-lg flex gap-2">
                      <span style={{ color: '#06b6d4' }} className="mt-1">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
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