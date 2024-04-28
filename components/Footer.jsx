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
    name: "Sledujte mě na Facebooku",
    icon: <BsFacebook />,
    href: "https://www.facebook.com/nick.melda.7/",
  },
  {
    name: "Sledujte mě na Instagramu",
    icon: <AiFillInstagram />,
    href: "https://www.instagram.com/nickmelda/",
  },
  {
    name: "Sledujte mě na Githubu",
    icon: <AiFillGithub />,
    href: "https://github.com/Nixk25",
  },
  {
    name: "Sledujte mě na LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/nicolas-melda-424b7224b/",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-3 border-t bg-background">
      <div className="flex gap-3 my-3 text-2xl text-white ">
        {icons.map((icon, i) => (
          <Link
            key={i}
            className="duration-300 cursor-pointer hover:text-accent ease"
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
      <div className="text-center text-white">
        <p>&copy; 2024 | All rights reserved</p>
        <p>
          Created by <span className="text-primary">Nick</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
