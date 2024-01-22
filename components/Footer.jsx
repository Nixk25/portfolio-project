"use client";

import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
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

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-background border-t  w-full py-3">
      <div className="flex gap-3 my-3 text-white text-2xl ">
        {icons.map((icon, i) => (
          <Link
            key={i}
            className="hover:text-accent ease duration-300 cursor-pointer"
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
      <div className="text-white text-center">
        <p>&copy; 2024 | All rights reserved</p>
        <p>
          Created by <span className="text-primary">Nick</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
