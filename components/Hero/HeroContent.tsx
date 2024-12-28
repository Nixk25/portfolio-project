import React from "react";
import { MotionValue } from "motion/react";
import HeroSubHeader from "./HeroSubHeader";
import HeroBottom from "./HeroBottom";
const HeroContent = ({ opacity }: { opacity: MotionValue<number> }) => {
  return (
    <div className="z-10 text-3xl text-black min-h-dvh">
      <HeroSubHeader opacity={opacity} />
      <HeroBottom opacity={opacity} />
    </div>
  );
};

export default HeroContent;
