import React from "react";
import { motion } from "framer-motion";
import { NAV_LINKS, SOCIALS } from "@/app/constants";
import Link from "next/link";
import {
  bottomMenuVariants,
  listVariants,
  menuVariants,
  navLinkVariants,
  socialLinkVariants,
  socialsVariants,
} from "@/app/variants";
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
      className="fixed top-2 right-2 w-[250px] px-5 h-[500px] bg-neutral-900 overflow-y-auto rounded-tl-lg rounded-bl-lg rounded-br-lg origin-top-right"
    >
      <motion.div
        variants={listVariants}
        initial="initial"
        animate="visible"
        exit="initial"
        className="flex h-full flex-col items-start justify-center gap-5"
      >
        {NAV_LINKS.map((item, i) => (
          <motion.div
            onClick={toggleMenu}
            variants={navLinkVariants}
            className="origin-left relative"
            key={i}
          >
            <Link className="text-2xl text-white" href={item.href}>
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <motion.div
          variants={socialsVariants}
          initial="initial"
          animate="visible"
          exit="initial"
          className="flex flex-col gap-2 justify-center w-full"
        >
          {SOCIALS.map(({ icon: Icon, href }, i) => (
            <motion.a
              onClick={toggleMenu}
              variants={socialLinkVariants}
              key={i}
              href={href}
              className="text-white active:scale-90"
              rel="noreferrer"
              target="_blank"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.div
        onClick={toggleMenu}
        variants={bottomMenuVariants}
        initial="initial"
        animate="visible"
        exit="initial"
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-2 text-sm flex flex-col gap-2 text-white/50"
      >
        <a href="mailto:nicolas.melda@icloud.com">nicolas.melda@icloud.com</a>
        <a href="tel:606047025">606047025</a>
      </motion.div>
    </motion.div>
  );
};

export default MenuContent;
