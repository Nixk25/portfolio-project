import Hero from "@/components/Hero/Hero";
import Lines from "@/components/Lines";
import Navbar from "@/components/Navbar/Navbar";
import Preloader from "@/components/Preloader/Preloader";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Navbar />
      <Lines />
      <Preloader />
      <Hero />
      <Skills />
    </div>
  );
}
