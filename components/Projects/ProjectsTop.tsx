"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ProjectsTop = () => {
  const sectionRef = useRef(null);
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 30]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isLaptop ? "150%" : "200%"]
  );

  return (
    <div className="relative">
      <div ref={sectionRef} className=" h-[300vh] relative z-10">
        <div className="sticky top-0 w-full">
          <div className="overflow-hidden w-full h-screen">
            <motion.h2
              style={{ scale, x }}
              className="projectHeadline mt-[200px] md:mt-0  text-black z-10 font text-center relative"
            >
              Projects
            </motion.h2>
          </div>
        </div>

        <motion.div
          style={{ opacity }}
          className="bg-black absolute top-0 w-full h-full z-20"
        />
      </div>
    </div>
  );
};

export default ProjectsTop;
