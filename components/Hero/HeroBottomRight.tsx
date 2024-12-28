import React from "react";
import { WORKS } from "@/app/constants";
import { motion } from "motion/react";

const HeroBottomRight = () => {
  return (
    <motion.ul
      whileHover={{ filter: "blur(10px)" }}
      className="flex flex-col items-end justify-end w-full gap-2 pr-5 py-2 text-sm md:px-5 md:flex-1 text-end font-thin "
    >
      {WORKS.map(({ title }, i) => (
        <motion.li
          initial={{
            x: "30vh",
          }}
          animate={{ x: 0 }}
          transition={{ delay: 3.5 + i * 0.1, ease: "easeIn", duration: 2 }}
          key={i}
        >
          {title}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default HeroBottomRight;
