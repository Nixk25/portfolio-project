import React from "react";
import { motion } from "framer-motion";

const HeroText = () => {
  const textToAnimate = `Hi, my name is Nicolas and I like to build new web applications. My main focus is front-end in React (Next.js).`;

  return (
    <p className="text-stroke max-[320px]:text-2xl sm:text-5xl text-3xl text-center max-w-[550px] sm:max-w-[90%] leading-tighter tracking-tighter p-5 transition-all duration-200">
      {textToAnimate.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: index * 0.02 }}
          className={
            char === "f" ? "whitespace-nowrap hovering-text" : "hovering-text"
          }
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

export default HeroText;
