"use client";

import React from "react";
import TiltingCard from "./TiltingCard";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiSvelte,
  SiTypescript,
  SiOracle,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "HTML",
    color: "#E34F26",
    icon: <AiFillHtml5 />,
  },

  {
    name: "CSS",
    color: "#244CDD",
    icon: <IoLogoCss3 />,
  },

  {
    name: "JavaScript",
    color: "#E8D44E",
    icon: <BiLogoJavascript />,
  },

  {
    name: "React",
    color: "#5FD3F3",
    icon: <FaReact />,
  },

  {
    name: "Next.Js",
    color: "#fff",
    icon: <SiNextdotjs />,
  },

  {
    name: "Tailwind CSS",
    color: "#36B7F0",
    icon: <SiTailwindcss />,
  },

  {
    name: "SASS",
    color: "#C76494",
    icon: <SiSass />,
  },

  {
    name: "Git",
    color: "#FFFFFF",
    icon: <AiFillGithub />,
  },
  {
    name: "Svelte",
    color: "#f73c01",
    icon: <SiSvelte />,
  },
  {
    name: "TypeScript",
    color: "#2F75C0",
    icon: <SiTypescript />,
  },
  {
    name: "Oracle DB",
    color: "#F40F13",
    icon: <SiOracle />,
  },
  {
    name: "Node.js",
    color: "#7CB702",
    icon: <SiNodedotjs />,
  },
  {
    name: "Mongo DB",
    color: "#00684A",
    icon: <SiMongodb />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="my-[150px]">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full my-8 text-5xl font-bold tracking-tighter text-center leading-tighter"
      >
        My Skills<span className="text-white ">.</span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 ">
        {technologies.map((technology, i) => (
          <TiltingCard
            key={i}
            name={technology.name}
            icon={technology.icon}
            index={i}
            color={technology.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
