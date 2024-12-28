"use client";
import React from "react";
import { motion, MotionValue } from "motion/react";

const HeroSubHeader = ({ opacity }: { opacity: MotionValue<number> }) => {
  return (
    <motion.div
      whileHover={{ filter: "blur(10px)" }}
      className="absolute left-5 flex justify-start w-full uppercase md:top-[50%] top-[30%] heroDesc font-light overflow-hidden   "
    >
      <motion.span
        initial={{
          y: "30vh",
        }}
        animate={{ y: 0 }}
        transition={{ delay: 3, ease: "easeIn", duration: 2 }}
        style={{ opacity }}
      >
        Creative developer
      </motion.span>
    </motion.div>
  );
};

export default HeroSubHeader;
