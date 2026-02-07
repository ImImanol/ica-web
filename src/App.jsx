import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
