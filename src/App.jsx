import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Leadership />
        <Projects />
        <Skills />
      </main>
    </>
  )
}

export default App