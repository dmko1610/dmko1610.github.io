import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import ThemeToggler from './components/ThemeToggler'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="bg-stone-300 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-mono">
      <div className="max-w-5xl w-11/12 mx-auto">
        <ThemeToggler />
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div >
  )
}

export default App
