import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <section id="experience">Experience</section>
        <section id="leadership">Leadership</section>
        <section id="projects">Projects</section>
        <section id="skills">Skills</section>
        <section id="contact">Contact</section>
      </main>
    </>
  )
}

export default App