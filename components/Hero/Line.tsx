import React from "react";
import { motion } from "motion/react";
import { lineVariants } from "@/app/variants";
const Line = ({ position }: { position: number }) => {
  return (
    <motion.div
      variants={lineVariants}
      initial="initial"
      animate="animate"
      className="absolute bottom-0 h-full pointer-events-none select-none blur-[3px] bg-neutral-200 w-[2px] "
      style={{ left: `${position}px` }}
    />
  );
};

export default Line;
