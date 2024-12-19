"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MainText = () => {
  const name = "NICOLAS MELDA";
  const [textUp, setTextUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextUp(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="absolute h-full w-full z-[10] font mainHeadline text-center"
      initial={{ top: "75%" }}
      animate={{
        top: textUp ? "50px" : "75%",
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <span>
        {name.split("").map((char, i) => (
          <motion.span
            initial={{ y: 200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              color: textUp ? "black" : "white",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: textUp ? 0 : 0.2 + i * 0.1,
            }}
            key={i}
            className="inline-block relative"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
};

export default MainText;
