"use client";

import { AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import MenuContent from "./MenuContent";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center ">
      <span
        className={`cursor-pointer relative font-normal z-10  ${
          isMenuOpen ? "text-white" : "text-neutral-900"
        }`}
        onClick={toggleMenu}
      >
        MENU
      </span>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <MenuContent toggleMenu={toggleMenu} key="menu-content" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
