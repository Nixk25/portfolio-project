"use client";
import Lenis from "lenis";
import Hero from "@/components/Hero/Hero";
import Lines from "@/components/Lines";
import Navbar from "@/components/Navbar/Navbar";
import Preloader from "@/components/Preloader/Preloader";
import Skills from "@/components/Skills";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
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
