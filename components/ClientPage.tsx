"use client";
import React from "react";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import Cursor from "@/components/Ui/Cursor";
import Navbar from "@/components/Navbar/Navbar";
import Lines from "@/components/Ui/Lines";
import Preloader from "@/components/Preloader/Preloader";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer";
const ClientPage = () => {
  const [isPreloader, setIsPreloader] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => t * (2 - t),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.scrollTo(0, { duration: 0.01 });

    const timer = setTimeout(() => {
      setIsPreloader(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [isPreloader]);
  return (
    <div className={`relative ${isPreloader ? "overflow-hidden" : ""}`}>
      <Cursor />
      <Navbar />
      <Lines />
      <Preloader />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default ClientPage;
