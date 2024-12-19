import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Navbar />
      <Preloader />
      <Hero />
    </>
  );
}
