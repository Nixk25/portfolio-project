"use client";

import React from "react";
import TiltingCard from "./TiltingCard";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiSvelte } from "react-icons/si";

const technologies = [
  {
    name: "HTML",
    color: "#E34F26",
    icon: <AiFillHtml5 />,
  },

  {
    name: "CSS",
    color: "244CDD",
    icon: <IoLogoCss3 />,
  },

  {
    name: "JavaScript",
    color: "E8D44E",
    icon: <BiLogoJavascript />,
  },

  {
    name: "React",
    color: "5FD3F3",
    icon: <FaReact />,
  },

  {
    name: "Next.Js",
    color: "000000",
    icon: <SiNextdotjs />,
  },

  {
    name: "Tailwind CSS",
    color: "36B7F0",
    icon: <SiTailwindcss />,
  },

  {
    name: "SASS",
    color: "C76494",
    icon: <SiSass />,
  },

  {
    name: "Git",
    color: "FFFFFF",
    icon: <AiFillGithub />,
  },
  {
    name: "Svelte",
    icon: <SiSvelte />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="my-[150px]">
      <h1 className="text-5xl font-bold leading-tighter tracking-tighter text-center my-10 w-full">
        Skills<span className="text-white">.</span>
      </h1>
      <div className="flex gap-10  flex-wrap justify-center items-center ">
        {technologies.map((technology, i) => (
          <TiltingCard
            key={i}
            name={technology.name}
            icon={technology.icon}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
