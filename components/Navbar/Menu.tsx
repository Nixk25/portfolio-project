"use client";

import { AnimatePresence } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import MenuContent from "./MenuContent";
import { useAppContext } from "@/app/AppContext";

const Menu = () => {
  const { isBlackBg } = useAppContext();
  const menuRef = useRef<HTMLDivElement>(null);
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

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  return (
    <div ref={menuRef} className="relative flex items-center justify-center ">
      <span
        className={`cursor-pointer relative font-normal z-10 ${
          isMenuOpen && isBlackBg
            ? "text-black"
            : isMenuOpen && !isBlackBg
            ? "text-white"
            : isBlackBg
            ? "text-white"
            : "text-black"
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
