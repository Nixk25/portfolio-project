"use client";
import React, { useEffect, useState } from "react";
import { motion, useTransform } from "motion/react";
import { MotionValue } from "motion/react";
import { useMediaQuery } from "react-responsive";

type MainTextProps = {
  scrollYProgress: MotionValue<number>;
};

const MainText = ({ scrollYProgress }: MainTextProps) => {
  const name = "Nicolas Melda";
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1400 });
  const IsXxlLaptop = useMediaQuery({ minWidth: 1500 });
  const is4K = useMediaQuery({ minWidth: 2500 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isSmallDevice = useMediaQuery({ minWidth: 300 });
  const isMediumPhone = useMediaQuery({ minWidth: 375 });
  const isPhone = useMediaQuery({ minWidth: 425 });
  const [textUp, setTextUp] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const getTopValue = () => {
    if (is4K) return "-10%";
    if (isLaptop) {
      return IsXxlLaptop ? "-18.5%" : isDesktop ? "-14%" : "-12%";
    }
    if (isTablet) return "-7%";
    if (isSmallDevice) {
      return isPhone ? "-1%" : isMediumPhone ? "-0.5%" : "1%";
    }
    return "-1%";
  };

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isLaptop ? 0.2 : 0.4]
  );

  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [isLaptop ? "3%" : "10%", getTopValue()]
  );

  const animatedTop = textUp
    ? isLaptop
      ? "3%"
      : "10%"
    : isLaptop
    ? "80%"
    : "85%";

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextUp(true);
    }, 3700);

    const animationTimer = setTimeout(() => {
      setIsAnimationDone(true);
    }, 4800);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-full z-[999999]  text-center font mainHeadline"
      initial={{ top: "80%" }}
      animate={{
        top: animatedTop,
        fontSize: textUp
          ? "clamp(1rem, 16.5vw, 20rem)"
          : "clamp(1rem, 8vw, 20rem)",
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      style={isAnimationDone ? { scale, top } : {}}
    >
      <span>
        {name.split("").map((char, i) => (
          <div key={i} className="relative inline-block origin-bottom">
            <motion.span
              whileHover={{ filter: "blur(10px)" }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: 1,
                opacity: 1,
                color: textUp ? "black" : "white",
              }}
              transition={{
                ease: "easeInOut",
                delay: textUp ? 0 : 0.2 + i * 0.1,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: "-100%", opacity: 0 }}
              transition={{
                y: {
                  delay: 1 + i * 0.1,
                  duration: 1,
                  ease: "easeInOut",
                },
                opacity: {
                  delay: 1.3 + i * 0.1,
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              className="absolute z-10 bg-[#252525] inset-0  h-full"
            />
          </div>
        ))}
      </span>
    </motion.div>
  );
};

export default MainText;
