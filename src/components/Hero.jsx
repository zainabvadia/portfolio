export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <p className="text-gray-500 mb-2">Hi, I'm</p>
      <h1 className="text-6xl font-bold mb-4">Zainab</h1>
      <h2 className="text-2xl text-gray-500 mb-6">Computer Science Student</h2>
      <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
        I build things for the web and love solving problems. Currently looking for internship opportunities.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          View my work
        </button>
        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="border border-black px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Get in touch
        </button>
      </div>
    </section>
  )
}