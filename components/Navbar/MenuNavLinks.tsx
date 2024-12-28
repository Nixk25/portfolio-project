import React from "react";
import { motion } from "motion/react";
import { listVariants } from "@/app/variants";

import { NAV_LINKS } from "@/app/constants";
import NavLink from "./NavLink";
const MenuNavLinks = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <motion.div
      variants={listVariants}
      initial="initial"
      animate="visible"
      exit="initial"
      className="flex flex-col items-start justify-center h-full gap-5"
    >
      {NAV_LINKS.map((item, i) => (
        <NavLink item={item} key={i} toggleMenu={toggleMenu} />
      ))}
    </motion.div>
  );
};

export default MenuNavLinks;
