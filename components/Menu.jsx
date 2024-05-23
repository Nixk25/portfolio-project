"use client";

import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const listVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <div className=" sm:hidden">
      <div className="z-[9999] fixed top-0 left-0  sm:hidden">
        <Hamburger
          size={30}
          toggled={isOpen}
          toggle={setOpen}
          rounded
          easing="ease"
          direction="right"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 z-50 w-full h-screen text-center origin-top bg-background"
          >
            <nav className="flex items-center justify-center h-full ">
              <motion.div
                variants={listVariants}
                initial="initial"
                animate="visible"
                exit="initial"
                className="flex flex-col items-center justify-center gap-4 text-3xl "
              >
                {navLinks.map(({ title, href }, i) => {
                  return (
                    <div className="overflow-hidden">
                      <NavLink
                        toggleMenu={toggleMenu}
                        key={i}
                        title={title}
                        href={href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ title, href, toggleMenu }) => {
  const navLinkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  return (
    <motion.div variants={navLinkVariants} onClick={toggleMenu}>
      <a href={href}>{title}</a>
    </motion.div>
  );
};

export default Menu;
