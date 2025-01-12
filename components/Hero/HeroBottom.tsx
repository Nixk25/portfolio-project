import React from "react";
import { motion, MotionValue } from "motion/react";
import HeroBottomLeft from "./HeroBottomLeft";
import HeroBottomRight from "./HeroBottomRight";
const HeroBottom = ({ opacity }: { opacity: MotionValue<number> }) => {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-0 flex flex-col items-center w-full gap-20 mb-5 font-normal  tracking-wide leading-tight text-xl sm:text-[30px] md:gap-0 md:flex-row overflow-hidden"
    >
      <HeroBottomLeft />
      <HeroBottomRight />
    </motion.div>
  );
};

export default HeroBottom;
