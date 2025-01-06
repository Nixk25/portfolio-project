import React from "react";
import { bottomMenuVariants } from "@/app/variants";
import { motion } from "motion/react";

const MenuContact = ({
  toggleMenu,
  isBlackBg,
}: {
  toggleMenu: () => void;
  isBlackBg: boolean;
}) => {
  return (
    <motion.div
      onClick={toggleMenu}
      variants={bottomMenuVariants}
      initial="initial"
      animate="visible"
      exit="initial"
      transition={{ duration: 0.5, delay: 1 }}
      className={`absolute flex  flex-col gap-2 text-sm bottom-2  ${
        isBlackBg ? "text-black/50" : "text-white/50"
      } `}
    >
      <a
        className="hover:text-white transition-colors"
        href="mailto:nicolas.melda@icloud.com"
        aria-label="E-mailová adresa Nicolas Melda"
      >
        nicolas.melda@icloud.com
      </a>
      <a
        className="hover:text-white flex w-min transition-colors"
        href="tel:606047025"
        aria-label="Telefonní číslo Nicolas Melda"
      >
        606047025
      </a>
      <a
        className="hover:text-white flex w-max transition-colors"
        href="https://www.podnikatel.cz/rejstrik/nicolas-jiri-melda-22382747/"
        target="_blank"
        aria-label="Zobrazit IČO na stránce podnikatel.cz"
      >
        IČO: 22382747
      </a>
    </motion.div>
  );
};

export default MenuContact;
