"use client";

import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import Link from "next/link";

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
      <section
        id="home"
        className="bg-background relative z-10 flex flex-col gap-6 min-h-[90vh] overflow-hidden justify-center pb-[150px]  items-center  w-full "
      >
        <HeroText />
        <div className="md:flex hidden flex-col gap-5 absolute right-5 top-[50%] translate-y-[-110%]">
          {icons.map((icon, i) => (
            <Link
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
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-3 min-[350px]:flex-row max-[320px]:flex-col">
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
        <div className=" z-[100] absolute bottom-0 left-0 bg-[url('../public/wave.svg')] bg-center bg-no-repeat bg-cover w-[105vw] h-[150px] xl:h-[300px]   sm:h-[220px]"></div>
      </section>
    </>
  );
};

const HeroText = () => {
  return (
    <h1 className="text-stroke max-[320px]:text-2xl sm:text-5xl text-3xl text-center max-w-[550px] sm:max-w-[90%] leading-tighter tracking-tighter p-5">
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
