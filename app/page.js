import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Circles from "@/components/Circles";

export default function Home() {
  return (
    <main className="relative w-full mt-24 overflow-hidden  cont">
      <Navbar />
      <Menu />
      <Hero />
      <Circles />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
