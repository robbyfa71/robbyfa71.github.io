import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function HomePage() {
    return (
        <main className="container mx-auto px-5 md:px-20 pb-20">
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}
