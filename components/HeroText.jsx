import React from "react";
import { motion } from "framer-motion";
const HeroText = () => {
  return (
    <p className="text-stroke max-[320px]:text-2xl sm:text-5xl text-3xl text-center max-w-[550px] sm:max-w-[90%] leading-tighter tracking-tighter p-5">
      {"Hi, my name is Nicolas and I like to build new web applications. My main focus is front-end in React (Next.js)."
        .split("")
        .map((child, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: i * 0.02 }}
            className="hovering-text"
            key={i}
          >
            {child}
          </motion.span>
        ))}
    </p>
  );
};

export default HeroText;
