"use client";
import React, { useState, useEffect, useRef } from "react";
import MainText from "./MainText";
import SVGPreloader from "./SVGPreloader";
import { useScroll } from "motion/react";

const Preloader = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isPreloader, setIsPreloader] = useState(true);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 4000);
    const preloaderTimer = setTimeout(() => {
      setIsPreloader(false);
    }, 4200);

    if (typeof window !== "undefined") {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(preloaderTimer);
    };
  }, []);

  useEffect(() => {
    if (isPreloader) {
      document.body.style.setProperty("height", "100vh", "important");
      document.body.style.setProperty("overflow", "hidden", "important");
    } else {
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("overflow", "auto", "important");
    }

    return () => {
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("overflow", "auto", "important");
    };
  }, [isPreloader]);

  return (
    <div
      ref={ref}
      className={`h-[100svh]  absolute w-full flex items-center justify-center overflow-y-hidden transition-all duration-500 ${
        isHidden ? "z-[5]" : "z-[9999]"
      }`}
    >
      <SVGPreloader />
      <MainText scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default Preloader;
