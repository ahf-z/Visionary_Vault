import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import ThemeToggle from '@/components/ThemeToggle'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}
