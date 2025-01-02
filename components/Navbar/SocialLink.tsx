import React from "react";
import { socialLinkVariants } from "@/app/variants";
import { motion } from "motion/react";

type SocialLinkProps = {
  toggleMenu: () => void;
  Icon: React.ComponentType<{ size: number }>;
  href: string;
  isBlackBg: boolean;
};

const SocialLink = ({ toggleMenu, Icon, href, isBlackBg }: SocialLinkProps) => {
  return (
    <motion.a
      onClick={toggleMenu}
      variants={socialLinkVariants}
      href={href}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.9 }}
      className={`${isBlackBg ? "text-black" : "text-white"} cursor-pointer`}
      rel="noreferrer"
      target="_blank"
    >
      <Icon size={20} />
    </motion.a>
  );
};

export default SocialLink;
