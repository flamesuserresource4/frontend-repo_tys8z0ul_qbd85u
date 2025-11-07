import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="bg-[#05040A] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Nebula UI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Changelog</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
