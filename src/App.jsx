import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import SocialPosts from './components/SocialPosts'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="app" style={{background: 'linear-gradient(135deg, #0f0a1a 0%, #1a0d2e 50%, #0d0410 100%)'}}>
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <SocialPosts />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
