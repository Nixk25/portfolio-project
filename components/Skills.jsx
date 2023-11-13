"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const technologies = [
  {
    name: "HTML",
    color: "E34F26",
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
];

const Skills = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="skills" className="my-[100px]">
      <h1 className="text-5xl font-bold leading-tighter tracking-tighter text-center my-10 w-full">
        Skills<span className="text-white">.</span>
      </h1>
      <div className="flex gap-10 flex-wrap justify-center items-center ">
        {technologies.map((technology, i) => (
          <motion.div
            key={i}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
            className="relative h-40 w-52 rounded-lg bg-white cont  "
          >
            <p
              style={{
                transform: "translateZ(50px)",
              }}
              className="text-center text-2xl mt-3 font-bold text-black"
            >
              {technology.name}
            </p>
            <p
              style={{
                transform: "translateZ(50px)",
              }}
              className=" text-black text-5xl absolute top-[40%] left-[38%] translate-x-[-50%] translate-y-[-50%] "
            >
              {technology.icon}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
