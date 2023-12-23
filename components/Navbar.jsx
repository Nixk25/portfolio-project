"use client";

import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#skills", title: "Skills" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      className=" z-20 bg-accent shadow-2xl sm:flex hidden text-black p-3 px-7 mt-5 fixed top-0 left-[50%] translate-x-[-50%] rounded-full  gap-2 text-base text-[9px]"
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{
        type: "spring",
        duration: 0.3,
        stiffness: 260,
        damping: 20,
      }}
    >
      {navLinks.map((link, i) => (
        <a
          key={i}
          className="links bg-transparent hover:bg-secondary hover:text-text duration-200 ease p-2 px-3 rounded-2xl cursor-pointer"
          href={link.href}
        >
          {link.title}
        </a>
      ))}
    </motion.nav>
  );
};

export default Navbar;
