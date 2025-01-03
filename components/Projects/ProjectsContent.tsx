"use client";

import React, { useEffect, useRef } from "react";
import { useAnimation, useScroll, useInView } from "motion/react";
import { PROJECTS } from "@/app/constants";
import { useAppContext } from "@/app/AppContext";
import { useMediaQuery } from "react-responsive";
import Project from "./Project";
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
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  const { setIsBlackBg } = useAppContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const controlsArray = PROJECTS.map(() => useAnimation());
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(containerRef);
  useEffect(() => {
    if (isInView) {
      setIsBlackBg(true);
    } else {
      setIsBlackBg(false);
    }
  }, [isInView, setIsBlackBg]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress: number) => {
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

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, controlsArray]);

  return (
    <div
      ref={containerRef}
      className="bg-black w-full h-[1000vh] relative z-[8] text-white"
    >
      <div className="sticky top-0 w-full h-screen slider">
        {PROJECTS.map(({ name, description, image, url, githubUrl }, i) => {
          const leftPositionClass =
            i % 2 === 0
              ? isLaptop
                ? "left-[20%]"
                : "left-[0%]"
              : isLaptop
              ? "left-[50%]"
              : "left-[10%]";
          return (
            <Project
              key={i}
              name={name}
              description={description}
              image={image}
              url={url}
              githubUrl={githubUrl}
              leftPositionClass={leftPositionClass}
              controls={controlsArray[i]}
              zIndex={PROJECTS.length - i}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsContent;
