"use client";

import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
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

      <div
        className={
          isOpen
            ? " fixed top-0 left-0  text-center  h-[100vh] w-[100vw] ease-in-out duration-300    z-50   bg-background"
            : " fixed top-0 left-[-100%] h-[100vh]  w-[100vw] z-50 bg-background transition-all ease-in-out duration-300"
        }
      >
        <nav className="flex justify-center items-center h-full">
          <ul className="list-none flex flex-col gap-2 text-3xl">
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                className="active:text-primary focus:text-primary focus:outline-none"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                className="active:text-primary focus:text-primary focus:outline-none"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                className="active:text-primary focus:text-primary focus:outline-none"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                className="active:text-primary focus:text-primary focus:outline-none"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                className="active:text-primary focus:text-primary focus:outline-none"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
