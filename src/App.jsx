import { LanguageProvider } from './context/LanguageContext.jsx'
import { TimeThemeProvider } from './context/TimeThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <LanguageProvider>
      <TimeThemeProvider>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </TimeThemeProvider>
    </LanguageProvider>
  )
}

export default App
