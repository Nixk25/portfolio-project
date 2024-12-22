"use client";
import { WORKS } from "@/app/constants";
import React from "react";
import { motion, MotionValue } from "motion/react";
const HeroContent = ({ opacity }: { opacity: MotionValue<number> }) => {
  return (
    <div className="z-10 text-3xl text-black min-h-dvh">
      <motion.span
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 5, ease: "easeIn", duration: 1 }}
        style={{ opacity }}
        className="absolute left-5 flex justify-start w-full font-light uppercase md:top-[50%] top-[30%] heroDesc "
      >
        Creative developer
      </motion.span>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 6, ease: "easeIn", duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-0 flex flex-col items-start w-full gap-20 mb-5 font-light tracking-wide text-md md:gap-0 md:flex-row"
      >
        <p className="flex md:flex-[2] w-full px-5 ">
          I am a creative front-end developer focused on modern web
          technologies, user-friendly design, and attention to detail.
        </p>
        <ul className="flex flex-col items-end justify-end w-full gap-2 pr-5 text-sm md:px-5 md:flex-1 text-end">
          {WORKS.map(({ title }, i) => (
            <li key={i}>{title}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default HeroContent;
