import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import CertificatesCourses from "@/components/certificates-courses"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Community from "@/components/community"
import Chatbot from "@/components/chatbot"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Fixed backgrounds */}
      <div className="fixed inset-0 -z-10">
        <ParticleBackground />
      </div>

      <Header />
      <Chatbot />

      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <CertificatesCourses />
      <Skills />
      <Community />
      <Contact />
      <Footer />
    </main>
  )
}

