"use client";
import React from "react";
import { AnimationControls, motion } from "motion/react";
import ProjectText from "./ProjectText";
import ProjectImage from "./ProjectImage";

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  url: string;
  githubUrl: string;
  leftPositionClass: string;
  controls: AnimationControls;
  i: number;
  zIndex: number;
};

const Project = ({
  name,
  description,
  image,
  url,
  githubUrl,
  leftPositionClass,
  i,
  zIndex,
  controls,
}: ProjectProps) => {
  const projectTextData = { name, description, url, githubUrl };
  const projectImageData = { name, image, url };

  return (
    <motion.div
      animate={controls}
      initial={{
        z: i * 2500,
        opacity: 1,
      }}
      style={{
        position: "absolute",
        zIndex: zIndex,
      }}
      className={`h-[500px] top-[20%] w-[400px] overflow-hidden ${leftPositionClass}`}
    >
      <ProjectText {...projectTextData} />
      <ProjectImage {...projectImageData} />
    </motion.div>
  );
};

export default Project;
