export default function Education() {
  return (
    <section id="education" className="py-16 px-6 max-w-7xl mx-auto scroll-mt-24">
      <p className="text-gray-500 text-base tracking-widest uppercase mb-3">My Background</p>
      <h2 className="text-3xl font-black mb-8">Education<span className="text-cyan-400">.</span></h2>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Bachelor of Arts in Computer Science</h3>
            <p className="text-cyan-400 font-medium text-sm">York University</p>
            <p className="text-gray-600 text-base mt-1">Toronto, ON</p>
          </div>
          <span className="text-gray-500 text-base whitespace-nowrap ml-4">Sept 2023 – Apr 2028</span>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6 grid grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-cyan-400 text-xs tracking-widest uppercase font-semibold mb-2">Degree</p>
            <p className="text-white text-base">Bachelor of Arts</p>
            <p className="text-gray-400 text-sm">Computer Science</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-cyan-400 text-xs tracking-widest uppercase font-semibold mb-2">Expected Graduation</p>
            <p className="text-white text-base">April 2028</p>
            <p className="text-gray-400 text-sm">York University</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-cyan-400 text-xs tracking-widest uppercase font-semibold mb-2">Status</p>
            <p className="text-white text-base">Currently Enrolled</p>
            <p className="text-gray-400 text-sm">Full-time Student</p>
          </div>
        </div>
      </div>
    </section>
  )
}