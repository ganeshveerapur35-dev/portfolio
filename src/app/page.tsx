import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Education } from "@/components/Education"
import { Achievements } from "@/components/Achievements"
import { Certifications } from "@/components/Certifications"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Certifications />
      <Contact />
    </div>
  )
}
