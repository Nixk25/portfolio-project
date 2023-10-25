import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className=" grow mt-24 w-full relative">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact />
    </main>
  )
}