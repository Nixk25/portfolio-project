import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" overflow-hidden mt-24 w-full relative cont ">
      <Navbar />
      <Menu />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}