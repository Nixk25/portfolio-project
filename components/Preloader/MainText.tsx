"use client";
import React, { useEffect, useState } from "react";
import { motion, useTransform } from "motion/react";
import { MotionValue } from "motion/react";
import { useMediaQuery } from "react-responsive";
type MainTextProps = {
  scrollYProgress: MotionValue<number>;
};
const MainText = ({ scrollYProgress }: MainTextProps) => {
  const name = "NICOLAS MELDA";
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  const [textUp, setTextUp] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    ["10%", isLaptop ? "-36%" : "-33%"]
  );

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextUp(true);
    }, 3000);
    const animationTimer = setTimeout(() => {
      setIsAnimationDone(true);
    }, 4300);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-full h-full mt-5 text-center font mainHeadline"
      initial={{ top: "75%" }}
      animate={{
        top: textUp ? "10%" : "75%",
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      style={isAnimationDone ? { scale, top } : {}}
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
            className="relative inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
};

export default MainText;
