"use client";

import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import HeroText from "./HeroText";
const icons = [
  {
    name: "Facebook",
    icon: <BsFacebook />,
    href: "https://www.facebook.com/nick.melda.7/",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    href: "https://www.instagram.com/nickmelda/",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    href: "https://github.com/Nixk25",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/nicolas-melda-424b7224b/",
  },
];

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-background relative z-10 flex flex-col gap-6 min-h-[100vh] overflow-hidden justify-center pb-[150px]  items-center  w-full  container h-"
      >
        <HeroText />
        <div className="md:flex hidden flex-col gap-5 absolute right-5 top-[50%] translate-y-[-110%]">
          {icons.map((icon, i) => (
            <motion.a
              initial={{ right: -100, scale: 0 }}
              animate={{ right: 0, scale: 1 }}
              transition={{ duration: i * 0.1 }}
              key={i}
              className="hover:text-primary  text-text relative text-2xl ease duration-300 cursor-pointer"
              target="_blank"
              href={icon.href}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div>{icon.icon}</div>
                </HoverCardTrigger>
                <HoverCardContent>{icon.name}</HoverCardContent>
              </HoverCard>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center gap-3 min-[350px]:flex-row max-[320px]:flex-col"
        >
          <Button size="lg">
            <a
              onClick={() => {
                toast("CV Downloaded", {
                  description: "My CV was downloaded succesfully! Enjoy :)",
                });
              }}
              href="/ziv.pdf"
              download
            >
              Download CV
            </a>
          </Button>
          <Button size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
