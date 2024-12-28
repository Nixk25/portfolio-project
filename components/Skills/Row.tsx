import React from "react";
import { motion, MotionValue } from "motion/react";
import Phrase from "./Phrase";

type Skill = {
  name: string;
  image: string;
};

type RowProps = {
  x: MotionValue<string>;
  fontWeight: MotionValue<number>;
  row: {
    skills: Skill[];
  };
};

const Row = ({ x, fontWeight, row }: RowProps) => {
  return (
    <motion.div
      className="flex gap-5 md:gap-20 w-full items-center"
      style={{ x, fontWeight }}
    >
      {row?.skills.map((skill, i) => (
        <Phrase key={i} skill={skill} />
      ))}
    </motion.div>
  );
};

export default Row;
