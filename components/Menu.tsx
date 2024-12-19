"use client";

import { AnimatePresence } from "framer";
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.setProperty("height", "100vh", "important");
      document.body.style.setProperty("overflow", "hidden", "important");
    } else {
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("overflow", "auto", "important");
    }

    return () => {
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("overflow", "auto", "important");
    };
  }, [isMenuOpen]);
  return (
    <div className="flex relative items-center justify-center ">
      <span
        className={`cursor-pointer relative z-10  ${
          isMenuOpen ? "text-white" : "text-neutral-900"
        }`}
        onClick={toggleMenu}
      >
        MENU
      </span>
      <AnimatePresence mode="wait">
        {isMenuOpen && <MenuContent toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
