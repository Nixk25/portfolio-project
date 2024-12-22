"use client";

import React, { useRef } from "react";
import HeroContent from "./HeroContent";
import { useScroll, useTransform } from "motion/react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "50% start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative z-[4] h-full overflow-hidden">
      <HeroContent opacity={opacity} />
    </div>
  );
};

export default Hero;
