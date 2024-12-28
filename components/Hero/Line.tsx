import React from "react";
import { motion } from "motion/react";
import { lineVariants } from "@/app/variants";
const Line = ({ position }: { position: number }) => {
  return (
    <motion.div
      variants={lineVariants}
      initial="initial"
      animate="animate"
      className="absolute origin-bottom bottom-0 h-full pointer-events-none select-none bg-neutral-300 w-[1px] "
      style={{ left: `${position}px` }}
    />
  );
};

export default Line;
