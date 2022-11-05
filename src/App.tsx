import Footer from './components/Footer'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="bg-stone-300 text-stone-900 min-h-screen font-mono">
      <Intro />
      <Portfolio />
      {/* <Timeline />
      <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
