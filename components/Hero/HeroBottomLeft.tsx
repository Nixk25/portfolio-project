import React from "react";
import { motion } from "motion/react";
const HeroBottomLeft = () => {
  return (
    <motion.div
      className="flex md:flex-[2] w-full px-5 py-2 "
      whileHover={{ filter: "blur(10px)" }}
    >
      <motion.p
        initial={{
          y: "-30vh",
        }}
        animate={{ y: 0 }}
        transition={{ delay: 3.2, ease: "easeIn", duration: 2 }}
      >
        I am a creative front-end developer focused on modern web technologies,
        user-friendly design, and attention to detail.
      </motion.p>
    </motion.div>
  );
};

export default HeroBottomLeft;
