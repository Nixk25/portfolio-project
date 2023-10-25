"use client";

import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

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
  const { toast } = useToast();
  return (
    <>
      <section className="bg-[#CACAFC] relative z-10 flex flex-col gap-6 h-[120vh] overflow-hidden  justify-center items-center w-full ">
        <HeroText />
        <div className="md:flex hidden flex-col gap-5 absolute right-5 top-[50%] translate-y-[-50%]">
          {icons.map((icon, i) => (
            <a
              key={i}
              className="hover:text-[#AA9CFC]  text-[#2E3148] relative text-2xl ease duration-300 cursor-pointer"
              target="_blank"
              href={icon.href}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div>{icon.icon}</div>
                </HoverCardTrigger>
                <HoverCardContent>{icon.name}</HoverCardContent>
              </HoverCard>
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button size="lg">
            <a
              onClick={() => {
                toast({
                  title: "CV Downloaded",
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
        </div>
        <div className=" absolute bottom-0 left bg-[url('../public/waves.svg')] bg-center bg-no-repeat w-full"></div>
      </section>
    </>
  );
};

const HeroText = () => {
  return (
    <h1 className=" sm:text-5xl text-3xl text-center w-[80%] leading-tighter tracking-tighter">
      {"Hi, my name is Nicolas and I like to play with Front-End. My main focus is React (Next.js)."
        .split("")
        .map((child, i) => (
          <span className="hovering-text" key={i}>
            {child}
          </span>
        ))}
    </h1>
  );
};

export default Hero;
