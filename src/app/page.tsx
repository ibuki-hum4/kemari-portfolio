import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Blog from "@/components/Blog";
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 space-y-32">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Blog />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
