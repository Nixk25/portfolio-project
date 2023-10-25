"use client";

import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" z-20  fixed top-0 left-0 flex sm:hidden">
      <Hamburger
        size={30}
        toggled={isOpen}
        toggle={setOpen}
        rounded
        easing="ease"
        direction="right"
      />
      {isOpen ? (
        <div className="absolute opacity-1 text-center  z-50 inset-0 w-[100vw] h-[100vh] bg-[#2E3148]/90">
          <nav className="flex justify-center items-center h-full">
            <ul className="list-none flex flex-col gap-2 text-3xl">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="absolute inset-0 hidden w-full h-full bg-[#2E3148]/90 opacity-0">
          <nav className="flex justify-center items-center h-full">
            <ul className="list-none flex flex-col gap-2 text-3xl">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
