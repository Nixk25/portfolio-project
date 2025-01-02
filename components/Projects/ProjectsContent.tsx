"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { PROJECTS } from "@/app/constants";
import Image from "next/image";

const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const ProjectsContent = () => {
  const containerRef = useRef(null);
  const controlsArray = PROJECTS.map(() => useAnimation());
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      PROJECTS.forEach((_, index) => {
        const initialZ = index === 0 ? -2500 : index * -4000;
        const maxZIncrement = 25000;
        const currentZ = initialZ + progress * maxZIncrement;
        const opacity = mapRange(currentZ, -25000, -2500, 0, 1);

        controlsArray[index].start({
          z: currentZ,
          opacity: opacity,
          scale: mapRange(currentZ, -25000, 2500, 0.5, 1.2),
        });

        if (currentZ > 100) {
          controlsArray[index].start({
            opacity: 0,
          });
        } else {
          controlsArray[index].start({
            opacity: 1,
          });
        }
      });
    });
  }, [scrollYProgress, controlsArray]);

  return (
    <div
      ref={containerRef}
      className="bg-black w-full h-[1000vh] relative z-10 text-white"
    >
      {/* Slider */}
      <div className="sticky top-0 w-full h-screen slider">
        {PROJECTS.map(({ name, description, image }, i) => {
          return (
            <motion.div
              key={i}
              animate={controlsArray[i]}
              initial={{
                z: i * 2500,
                opacity: 1,
              }}
              style={{
                position: "absolute",

                left: i % 2 === 0 ? "30%" : "70%",

                zIndex: PROJECTS.length - i,
              }}
              className="h-[500px] top-[30%] w-[400px] overflow-hidden"
            >
              <div className="flex flex-col gap-5">
                <h3 className="uppercase font-bold">{name}</h3>
                <p className="font-thin text-white/70 tracking-tighter leading-tight">
                  {description}
                </p>
              </div>
              <div>
                <Image
                  src={image}
                  alt={name}
                  height={500}
                  width={500}
                  placeholder="blur"
                  blurDataURL={image}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsContent;
