"use client";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import Cursor from "@/components/Ui/Cursor";
import Navbar from "@/components/Navbar/Navbar";
import Lines from "@/components/Ui/Lines";
import Preloader from "@/components/Preloader/Preloader";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  const [isPreloader, setIsPreloader] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => t * (2 - t),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleLoad = () => {
      lenis.scrollTo(0, { duration: 0 });
    };

    const timer = setTimeout(() => {
      setIsPreloader(false);
    }, 4000);

    if (typeof window !== "undefined") {
      window.addEventListener("load", handleLoad);
    }

    if (isPreloader) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }

    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <div className={`relative ${isPreloader ? "overflow-hidden" : ""}`}>
      <Cursor />
      <Navbar />
      <Lines />
      <Preloader />
      <Hero />
      <Skills />
    </div>
  );
}
