export default function Experience() {
  const experiences = [
    {
      title: 'Incoming AI Automation Extern',
      company: 'Wayfair',
      date: 'Summer 2026',
      location: 'Remote',
      bullets: ['Incoming extern — details to be updated soon'],
      tags: ['AI', 'Automation', 'n8n']
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
      title: 'Software Developer',
      company: 'YU Blueprint',
      date: 'May 2026 – Present',
      location: 'Toronto, ON',
      bullets: [
        'Contributed to a scalable distributed backend system built with Django, Spring Boot, and Docker, improving data management efficiency for a nonprofit platform',
        'Implemented PostgreSQL and Redis to enable asynchronous event-driven processing, supporting near real-time data flow between services and an analytics engine'
      ],
      tags: ['Django', 'Spring Boot', 'Docker', 'PostgreSQL', 'Redis']
    },
    {
      title: 'IT Support & Management Associate',
      company: 'AWS Cloud Club @ York',
      date: 'Dec 2026 – Present',
      location: 'Toronto, ON',
      bullets: [
        'Built and deployed cloud applications including static websites with AWS Amplify, scalable storage systems with Amazon S3, and introductory ML pipelines with Amazon SageMaker',
        'Maintained and organized GitHub repositories for multi-stage projects, ensuring clean version control and reproducible deployments'
      ],
      tags: ['AWS Amplify', 'Amazon S3', 'SageMaker', 'GitHub']
    }
  ]

  return (
    <section id="experience" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <p className="text-gray-500 text-base tracking-widest uppercase mb-3">My Journey</p>
      <h2 className="text-2xl font-black mb-4">Experience<span className="text-orange-400">.</span></h2>
      <p className="text-gray-500 text-sm mb-8">My professional journey</p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-orange-400 bg-black -translate-x-1/2" />
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-400/30 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold text-xl">{exp.title}</h3>
                  <span className="text-gray-500 text-sm whitespace-nowrap ml-4">{exp.date}</span>
                </div>
                <p className="text-orange-400 font-medium text-xl mb-1">{exp.company}</p>
                <p className="text-gray-600 text-sm mb-5">{exp.location}</p>
                <ul className="flex flex-col gap-3 mb-7">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-orange-400 mt-1">·</span>
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