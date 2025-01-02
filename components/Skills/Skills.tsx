import { SKILLS } from "@/app/constants";
import React, { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import Row from "./Row";

const Skills = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-300%", "150%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["120%", "-500%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-350%", "150%"]);
  const fontWeight = useTransform(scrollYProgress, [0, 1], [100, 700]);

  return (
    <div ref={container} className="relative z-[2]    h-[300vh]  mt-[50vh]">
      <div className="sticky top-1/2 -translate-y-1/2   z-0 md:space-y-[-100px] left-0 overflow-hidden">
        {SKILLS.map((row, i) => {
          const x = i === 0 ? x1 : i === 1 ? x2 : x3;

          return <Row key={i} x={x} fontWeight={fontWeight} row={row} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
