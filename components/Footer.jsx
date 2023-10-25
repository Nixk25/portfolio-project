"use client";

import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

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

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-[#2E3148] w-full py-3">
      <div className="flex gap-3 my-3 text-white text-2xl ">
        {icons.map((icon, i) => (
          <a
            key={i}
            className="hover:text-[#AA9CFC] ease duration-300 cursor-pointer"
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
      <div className="text-white text-center">
        <p>&copy; 2023 | All rights reserved</p>
        <p>
          Created by <span className="text-[#AA9CFC]">Nick</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
