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
  SiPrisma,
  SiSupabase,
  SiVite,
  SiAffinitydesigner,
  SiAffinityphoto,
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
    name: "Vite",
    color: "#A063FF",
    icon: <SiVite />,
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
  {
    name: "Prisma",
    color: "#153A51",
    icon: <SiPrisma />,
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
    icon: <SiSupabase />,
  },
  {
    name: "Affinity Designer",
    color: "#4DCCFA",
    icon: <SiAffinitydesigner />,
  },
  {
    name: "Affinity Photo",
    color: "#EB77FF",
    icon: <SiAffinityphoto />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="my-[150px]">
      <div className="container">
        <motion.h1
          initial={{ y: 50, filter: "blur(20px)" }}
          whileInView={{ y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
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
      </div>
    </section>
  );
};

export default Skills;
