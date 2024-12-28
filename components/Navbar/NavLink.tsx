import React from "react";
import Link from "next/link";
import { navLinkVariants } from "@/app/variants";
import { motion } from "motion/react";

const NavLink = ({
  item,
  toggleMenu,
}: {
  item: {
    label: string;
    href: string;
  };
  toggleMenu: () => void;
}) => {
  return (
    <motion.div
      onClick={toggleMenu}
      variants={navLinkVariants}
      className="relative origin-left group"
    >
      <Link className="text-2xl text-white" href={item.href}>
        {item.label}
      </Link>
      <div className="absolute group-hover:w-full bottom-0 left-0 w-0  transition-all duration-300 h-[1px] bg-white "></div>
    </motion.div>
  );
};

export default NavLink;
