import React from "react";
import { motion } from "motion/react";
import { menuVariants } from "@/app/variants";
import MenuNavLinks from "./MenuNavLinks";
import MenuSocials from "./MenuSocials";
import MenuContact from "./MenuContact";
import { useAppContext } from "@/app/AppContext";
type MenuContentProps = {
  toggleMenu: () => void;
};

const MenuContent = ({ toggleMenu }: MenuContentProps) => {
  const { isBlackBg } = useAppContext();
  return (
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`fixed top-2 right-2 w-[300px] sm:w-[350px] px-5 h-[500px] ${
        isBlackBg ? "bg-[#e5e5e5]" : "bg-neutral-900"
      } overflow-y-auto rounded-tl-lg rounded-bl-lg rounded-br-lg origin-top-right`}
    >
      <MenuNavLinks toggleMenu={toggleMenu} isBlackBg={isBlackBg} />

      <MenuSocials toggleMenu={toggleMenu} isBlackBg={isBlackBg} />
      <MenuContact toggleMenu={toggleMenu} isBlackBg={isBlackBg} />
    </motion.div>
  );
};

export default MenuContent;
