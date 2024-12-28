import React from "react";
import { motion } from "motion/react";
import { menuVariants } from "@/app/variants";
import MenuNavLinks from "./MenuNavLinks";
import MenuSocials from "./MenuSocials";
import MenuContact from "./MenuContact";
type MenuContentProps = {
  toggleMenu: () => void;
};

const MenuContent = ({ toggleMenu }: MenuContentProps) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-2 right-2 w-[350px] px-5 h-[500px] bg-neutral-900 overflow-y-auto rounded-tl-lg rounded-bl-lg rounded-br-lg origin-top-right"
    >
      <MenuNavLinks toggleMenu={toggleMenu} />

      <MenuSocials toggleMenu={toggleMenu} />
      <MenuContact toggleMenu={toggleMenu} />
    </motion.div>
  );
};

export default MenuContent;
